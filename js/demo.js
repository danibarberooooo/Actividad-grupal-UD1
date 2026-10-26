/*
 * Demostraciones de la web "Desarrollo seguro".
 * Las funciones puras (validación, codificación, hashes) se exportan al final
 * para poder probarlas con Node: node --test tests/demo.test.js
 */

// ---------- Demo 1: validación con lista blanca ----------

const USUARIO_MIN = 3;
const USUARIO_MAX = 20;
const EDAD_MIN = 14;
const EDAD_MAX = 120;

// Devuelven la lista de reglas con su resultado, para pintarla en la página.
// Para decidir si se acepta un valor, usa esUsuarioValido / esEdadValida:
// un array siempre es "verdadero" en un if. No modifican la entrada:
// si trae espacios u otros caracteres, se rechaza en lugar de "arreglarla".
// Si el valor no es una cadena (undefined, null, un array...), todas las reglas fallan.
function validarUsuario(valor) {
  if (typeof valor !== "string") return reglasNoTexto();
  const texto = valor;
  return [
    { regla: `Tiene entre ${USUARIO_MIN} y ${USUARIO_MAX} caracteres (tiene ${texto.length})`,
      ok: texto.length >= USUARIO_MIN && texto.length <= USUARIO_MAX },
    { regla: "Sólo usa a-z, 0-9 o _ (lista blanca)",
      ok: /^[a-z0-9_]*$/.test(texto) && texto.length > 0 },
  ];
}

function validarEdad(valor) {
  if (typeof valor !== "string") return reglasNoTexto();
  const texto = valor;
  const soloDigitos = /^[0-9]{1,3}$/.test(texto);
  const numero = soloDigitos ? Number(texto) : NaN;
  return [
    { regla: "Es un número entero sin signos, espacios ni decimales", ok: soloDigitos },
    { regla: `Está entre ${EDAD_MIN} y ${EDAD_MAX}`,
      ok: soloDigitos && numero >= EDAD_MIN && numero <= EDAD_MAX },
  ];
}

function reglasNoTexto() {
  return [{ regla: "El valor recibido es una cadena de texto", ok: false }];
}

const cumpleTodas = (reglas) => reglas.every((r) => r.ok);
const esUsuarioValido = (valor) => cumpleTodas(validarUsuario(valor));
const esEdadValida = (valor) => cumpleTodas(validarEdad(valor));

// ---------- Demo 2: codificación de salida ----------

const ENTIDADES = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };

// Codificación para HTML. Sólo es segura en dos contextos: el texto de un elemento
// y el valor de un atributo ENTRE COMILLAS. No sirve para URLs (href="javascript:..."),
// atributos on*, style ni el interior de <script>. Cada contexto necesita su propia codificación.
// Es lo que hace el navegador por nosotros cuando usamos textContent.
function escaparHTML(texto) {
  return String(texto).replace(/[&<>"']/g, (c) => ENTIDADES[c]);
}

// Etiquetas que, aun sin JavaScript visible, cambian el comportamiento de la página
// (cargan otro documento, redirigen, envían formularios o inyectan estilos).
const ETIQUETAS_DELICADAS = new Set(["iframe", "object", "embed", "base", "meta", "form", "style", "link"]);
const ATRIBUTOS_URL = new Set(["href", "src", "action", "formaction", "xlink:href", "data"]);

// Devuelve el protocolo tal como lo vería el navegador. El analizador de URLs
// elimina tabuladores y saltos de línea, así que "jav&#x09;ascript:" sigue siendo javascript:.
function protocoloDe(valor) {
  try {
    return new URL(valor, "https://ejemplo.invalid/").protocol;
  } catch {
    return "";
  }
}

// Analiza qué interpretaría el navegador si el texto se insertara como HTML.
// DOMParser crea un documento inerte: no ejecuta scripts ni carga imágenes.
// OJO: es una lista negra con fines didácticos, no un sanitizador. Que no detecte
// nada no significa que el HTML sea seguro; para eso existen DOMPurify o la Sanitizer API.
function analizarHTML(texto) {
  const doc = new DOMParser().parseFromString(`<body>${texto}</body>`, "text/html");
  const elementos = [...doc.body.querySelectorAll("*")];
  const hallazgos = [];
  for (const el of elementos) {
    const peligros = [];
    const nombre = el.localName; // en minúsculas también dentro de <svg> o <math>
    if (nombre === "script") peligros.push("es un bloque de código JavaScript");
    if (ETIQUETAS_DELICADAS.has(nombre)) peligros.push(`<${nombre}> puede cargar contenido, redirigir o cambiar la página`);
    for (const attr of el.attributes) {
      if (/^on/i.test(attr.name)) {
        peligros.push(`atributo ${attr.name} = ejecutaría JavaScript`);
      } else if (attr.name === "srcdoc") {
        peligros.push("atributo srcdoc = incrusta otro documento HTML con el mismo origen");
      } else if (ATRIBUTOS_URL.has(attr.name.toLowerCase()) && protocoloDe(attr.value) === "javascript:") {
        peligros.push(`${attr.name} con esquema javascript: = ejecutaría JavaScript al pulsar`);
      }
    }
    hallazgos.push({ etiqueta: nombre, peligros });
  }
  return hallazgos;
}

// ---------- Demo 3: hash rápido frente a hash lento con sal ----------

// Estas funciones existen para COMPARAR en la demo; no son una API para guardar contraseñas
// (no devuelven la sal ni las iteraciones junto al hash y no hay función de verificación).
const PBKDF2_ITERACIONES = 600000; // recomendación de OWASP para PBKDF2-HMAC-SHA256
const PBKDF2_MAX_ITERACIONES = 10000000; // tope para no bloquear el navegador
const REPETICIONES_SHA = 1000;

function aHex(buffer) {
  return [...new Uint8Array(buffer)].map((b) => b.toString(16).padStart(2, "0")).join("");
}

function exigirTexto(texto) {
  if (typeof texto !== "string") throw new TypeError("La contraseña debe ser una cadena de texto");
}

// SÓLO PARA LA DEMO: un hash rápido NO sirve para guardar contraseñas (ver idea 6).
async function sha256(texto) {
  exigirTexto(texto);
  const datos = new TextEncoder().encode(texto);
  return aHex(await crypto.subtle.digest("SHA-256", datos));
}

// El parámetro iteraciones admite valores bajos sólo para comprobar los vectores de prueba
// del RFC 7914 (c = 1). La demo usa siempre PBKDF2_ITERACIONES.
async function pbkdf2(texto, sal, iteraciones = PBKDF2_ITERACIONES) {
  exigirTexto(texto);
  if (!Number.isInteger(iteraciones) || iteraciones < 1 || iteraciones > PBKDF2_MAX_ITERACIONES) {
    throw new RangeError(`El número de iteraciones debe ser un entero entre 1 y ${PBKDF2_MAX_ITERACIONES}`);
  }
  const clave = await crypto.subtle.importKey(
    "raw", new TextEncoder().encode(texto), "PBKDF2", false, ["deriveBits"]
  );
  const bits = await crypto.subtle.deriveBits(
    { name: "PBKDF2", hash: "SHA-256", salt: sal, iterations: iteraciones }, clave, 256
  );
  return aHex(bits);
}

function salAleatoria() {
  return crypto.getRandomValues(new Uint8Array(16));
}

// ---------- Conexión con la página ----------

function pintarReglas(titulo, reglas) {
  const correcto = reglas.every((r) => r.ok);
  const lista = reglas
    .map((r) => `<li class="${r.ok ? "cumple" : "falla"}">${escaparHTML(r.regla)}</li>`)
    .join("");
  return `<h4>${escaparHTML(titulo)}</h4><ul class="reglas">${lista}</ul>` +
    `<span class="veredicto ${correcto ? "veredicto--ok" : "veredicto--mal"}">` +
    `${correcto ? "Aceptado" : "Rechazado"}</span>`;
}

function iniciarMenu() {
  const boton = document.querySelector(".menu-boton");
  const menu = document.getElementById("menu");
  if (!boton || !menu) return;
  boton.addEventListener("click", () => {
    const abierto = menu.classList.toggle("abierto");
    boton.setAttribute("aria-expanded", String(abierto));
  });
  menu.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      menu.classList.remove("abierto");
      boton.setAttribute("aria-expanded", "false");
    }
  });
}

function iniciarValidacion() {
  const form = document.getElementById("form-validacion");
  const salida = document.getElementById("resultado-validacion");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const usuario = form.usuario.value;
    const edad = form.edad.value;
    // Los valores del usuario sólo se muestran a través de escaparHTML.
    salida.innerHTML =
      `<div class="comparativa">` +
      `<div>${pintarReglas(`Usuario: "${usuario}"`, validarUsuario(usuario))}</div>` +
      `<div>${pintarReglas(`Edad: "${edad}"`, validarEdad(edad))}</div>` +
      `</div>`;
  });
}

function iniciarSalida() {
  const area = document.getElementById("comentario");
  const iframe = document.getElementById("vista-insegura");
  const analisis = document.getElementById("analisis-inseguro");
  const vistaSegura = document.getElementById("vista-segura");
  const codigoSeguro = document.getElementById("codigo-seguro");

  function publicar() {
    const texto = area.value;

    // Panel inseguro: el texto se trata como HTML, dentro de un iframe con sandbox vacío
    // (sin scripts, sin formularios, origen opaco). El sandbox NO bloquea las peticiones de red,
    // así que además se añade una CSP que impide cargar nada externo. Si alguien quitara o
    // relajara el atributo sandbox en index.html, no se escribe nada en el iframe.
    if (!iframe.hasAttribute("sandbox") || iframe.sandbox.length > 0) {
      iframe.removeAttribute("srcdoc");
      analisis.textContent = "Vista insegura desactivada: el iframe ha perdido su sandbox vacío.";
      return;
    }
    iframe.srcdoc =
      `<!doctype html><meta charset="utf-8">` +
      `<meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src 'unsafe-inline'">` +
      `<body style="font-family:sans-serif;margin:8px">${texto}</body>`;

    const hallazgos = analizarHTML(texto);
    if (hallazgos.length === 0) {
      analisis.innerHTML = "<p>El navegador no ha creado ninguna etiqueta: aquí no hay diferencia visible.</p>";
    } else {
      const items = hallazgos.map((h) => {
        const detalle = h.peligros.length
          ? ` <span class="alerta">⚠ ${h.peligros.map(escaparHTML).join("; ")}</span>`
          : " (no se ha detectado nada conocido, pero esta comprobación es una lista incompleta, no un sanitizador)";
        return `<li>Ha creado un elemento <code>&lt;${escaparHTML(h.etiqueta)}&gt;</code>${detalle}</li>`;
      }).join("");
      analisis.innerHTML = `<p><strong>El dato se ha convertido en código:</strong></p><ul>${items}</ul>`;
    }

    // Panel seguro: textContent nunca interpreta etiquetas.
    vistaSegura.textContent = texto;
    codigoSeguro.textContent = escaparHTML(texto);
  }

  document.getElementById("boton-publicar").addEventListener("click", publicar);
  document.querySelectorAll(".chip[data-ejemplo]").forEach((chip) => {
    chip.addEventListener("click", () => {
      area.value = chip.dataset.ejemplo;
      publicar();
    });
  });
  publicar();
}

function iniciarHash() {
  const boton = document.getElementById("boton-hash");
  const entrada = document.getElementById("clave");
  const salida = document.getElementById("resultado-hash");

  if (!window.crypto || !crypto.subtle) {
    boton.disabled = true;
    salida.innerHTML = "<p>Tu navegador no ofrece la Web Crypto API en esta página (necesita HTTPS o localhost).</p>";
    return;
  }

  boton.addEventListener("click", async () => {
    boton.disabled = true;
    boton.textContent = "Calculando…";
    try {
      const texto = entrada.value;

      const t0 = performance.now();
      let hashRapido = "";
      for (let i = 0; i < REPETICIONES_SHA; i++) hashRapido = await sha256(texto);
      const msSha = (performance.now() - t0) / REPETICIONES_SHA;

      const sal = salAleatoria();
      const t1 = performance.now();
      const hashLento = await pbkdf2(texto, sal);
      const msPbkdf2 = performance.now() - t1;

      const proporcion = Math.round(msPbkdf2 / msSha);
      const intentosSha = Math.round(1000 / msSha);
      const intentosPbkdf2 = (1000 / msPbkdf2).toFixed(1);
      const anchoRapido = Math.max(0.5, (msSha / msPbkdf2) * 100);

      salida.innerHTML = `
        <div class="envoltorio-tabla"><table class="tabla-hash">
          <thead><tr><th scope="col">Función</th><th scope="col">Tiempo por intento</th><th scope="col">Intentos/segundo en tu equipo</th><th scope="col">Resultado</th></tr></thead>
          <tbody>
            <tr><th scope="row">SHA-256<br><small>sin sal</small></th>
              <td>${msSha.toFixed(4)} ms<div class="barra barra--rapida" style="width:${anchoRapido}%"></div></td>
              <td>≈ ${intentosSha.toLocaleString("es-ES")}</td>
              <td><code>${hashRapido}</code></td></tr>
            <tr><th scope="row">PBKDF2-SHA256<br><small>${PBKDF2_ITERACIONES.toLocaleString("es-ES")} iteraciones</small></th>
              <td>${msPbkdf2.toFixed(1)} ms<div class="barra" style="width:100%"></div></td>
              <td>≈ ${intentosPbkdf2}</td>
              <td><code>${hashLento}</code><br><small>sal: <code>${aHex(sal)}</code></small></td></tr>
          </tbody>
        </table></div>
        <p><strong>PBKDF2 ha sido unas ${proporcion.toLocaleString("es-ES")} veces más lento.</strong> Para ti, como usuario, es una espera imperceptible al iniciar sesión; para quien intenta adivinar contraseñas por fuerza bruta, cada intento cuesta lo mismo.</p>`;
    } catch (error) {
      salida.textContent = `No se ha podido calcular el hash: ${error.message}`;
    } finally {
      boton.disabled = false;
      boton.textContent = "Calcular hashes";
    }
  });
}

function iniciarGlosario() {
  const buscador = document.getElementById("buscar-termino");
  const entradas = [...document.querySelectorAll("#lista-glosario > div")];
  const vacio = document.getElementById("glosario-vacio");
  const normalizar = (t) => t.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
  buscador.addEventListener("input", () => {
    const consulta = normalizar(buscador.value.trim());
    let visibles = 0;
    for (const e of entradas) {
      const coincide = normalizar(e.textContent).includes(consulta);
      e.hidden = !coincide;
      if (coincide) visibles++;
    }
    vacio.hidden = visibles > 0;
  });
}

if (typeof document !== "undefined") {
  document.addEventListener("DOMContentLoaded", () => {
    iniciarMenu();
    iniciarValidacion();
    iniciarSalida();
    iniciarHash();
    iniciarGlosario();
  });
}

if (typeof module !== "undefined") {
  module.exports = {
    validarUsuario, validarEdad, esUsuarioValido, esEdadValida,
    escaparHTML, sha256, pbkdf2, PBKDF2_ITERACIONES, PBKDF2_MAX_ITERACIONES,
  };
}
