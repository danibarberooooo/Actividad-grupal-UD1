// Convierte un historial .jsonl de Claude Code en Markdown y anonimiza datos personales.
// Uso: node herramientas/exportar-conversacion.js <entrada.jsonl> <salida.md> "<título>" [término1,término2,...]
// Las rutas de la carpeta personal (C:\Users\<usuario>) se sustituyen siempre por <HOME> y los correos por <email>.
// Los términos opcionales (apellido, nombre de usuario...) se sustituyen por <dato-personal>.
// Los historiales están en ~/.claude/projects/<carpeta-del-proyecto>/<sesión>.jsonl
// y los de los subagentes en ~/.claude/projects/<carpeta-del-proyecto>/<sesión>/subagents/.
const fs = require("fs");
const [, , entrada, salida, titulo, terminos = ""] = process.argv;

const MAX_RESULTADO = 4000;
const escaparRegex = (t) => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

function anonimizar(t) {
  let r = String(t)
    .replace(/[A-Za-z]:[\\/]+Users[\\/]+[^\\/\s"'`<>]+/gi, "<HOME>")
    .replace(/\/[a-z]\/Users\/[^/\s"'`<>]+/gi, "<HOME>")
    .replace(/~[\\/]\.claude[\\/]projects[\\/][^\\/\s"'`<>]+/gi, "~/.claude/projects/<proyecto>")
    .replace(/[A-Za-z]--Users-[A-Za-z0-9-]+/g, "<carpeta-de-proyecto>")
    .replace(/[\w.+-]+@[\w-]+\.[\w.-]+/g, "<email>");
  for (const termino of terminos.split(",").map((x) => x.trim()).filter(Boolean)) {
    r = r.replace(new RegExp(escaparRegex(termino), "gi"), "<dato-personal>");
  }
  return r;
}

function quitarRecordatorios(t) {
  return t.replace(/<system-reminder>[\s\S]*?<\/system-reminder>/g, "").trim();
}

// Baja dos niveles los encabezados de los mensajes para no romper la estructura del documento.
function rebajar(t) {
  return String(t).replace(/^(#{1,4}) /gm, "##$1 ");
}

function bloque(texto, lenguaje = "") {
  const t = String(texto);
  const valla = t.includes("```") ? "~~~~" : "```";
  return `${valla}${lenguaje}\n${t}\n${valla}`;
}

function textoResultado(c) {
  if (typeof c === "string") return c;
  if (Array.isArray(c)) {
    return c.map((p) => (p.type === "text" ? p.text : p.type === "image" ? "[imagen adjunta: captura de pantalla]" : `[${p.type}]`)).join("\n");
  }
  return JSON.stringify(c);
}

function recortar(t) {
  return t.length > MAX_RESULTADO
    ? t.slice(0, MAX_RESULTADO) + `\n… [salida recortada: ${t.length - MAX_RESULTADO} caracteres más]`
    : t;
}

const lineas = fs.readFileSync(entrada, "utf8").split("\n").filter(Boolean).map((l) => JSON.parse(l));
const partes = [`# ${titulo}`, "",
  `> Exportado automáticamente del historial local de Claude Code (${lineas.length} eventos).`,
  "> Se han anonimizado rutas locales, nombre de usuario y correo. Se omiten los recordatorios internos del sistema",
  "> y el razonamiento interno del modelo. Las salidas de herramientas de más de " + MAX_RESULTADO + " caracteres se recortan.", ""];

for (const ev of lineas) {
  if (ev.type !== "user" && ev.type !== "assistant") continue;
  const contenido = ev.message?.content;
  const hora = ev.timestamp ? ev.timestamp.replace("T", " ").slice(0, 19) + " UTC" : "";

  if (ev.type === "user") {
    if (typeof contenido === "string") {
      const t = quitarRecordatorios(contenido);
      if (t) partes.push(`## 👤 Usuario · ${hora}`, "", rebajar(t), "");
      continue;
    }
    for (const p of contenido || []) {
      if (p.type === "text") {
        const t = quitarRecordatorios(p.text);
        if (t) partes.push(`## 👤 Usuario · ${hora}`, "", rebajar(t), "");
      } else if (p.type === "tool_result") {
        const t = quitarRecordatorios(textoResultado(p.content));
        partes.push(`<details><summary>Resultado de herramienta${p.is_error ? " (error)" : ""}</summary>`, "", bloque(recortar(t)), "", "</details>", "");
      }
    }
  } else {
    for (const p of contenido || []) {
      if (p.type === "text" && p.text.trim()) {
        partes.push(`## 🤖 Claude · ${hora}`, "", rebajar(p.text), "");
      } else if (p.type === "tool_use" && p.name === "SubagentHandback" && typeof p.input?.message === "string") {
        // Informe final que un subagente devuelve a la sesión principal.
        partes.push(`## 🤖 Claude · informe final · ${hora}`, "", rebajar(p.input.message), "");
      } else if (p.type === "tool_use") {
        partes.push(`**🔧 Herramienta \`${p.name}\`**`, "", bloque(JSON.stringify(p.input, null, 2), "json"), "");
      }
    }
  }
}

fs.writeFileSync(salida, anonimizar(partes.join("\n")));
console.log(`Escrito ${salida}`);
