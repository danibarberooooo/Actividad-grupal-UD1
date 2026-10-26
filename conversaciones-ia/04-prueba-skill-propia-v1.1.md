# Conversación 04 · Segunda prueba de la skill propia, v1.1 (conversación nueva, subagente de Claude Code)

> Exportado automáticamente del historial local de Claude Code (31 eventos).
> Se han anonimizado rutas locales, nombre de usuario y correo. Se omiten los recordatorios internos del sistema
> y el razonamiento interno del modelo. Las salidas de herramientas de más de 4000 caracteres se recortan.

## 👤 Usuario · 2026-10-26 16:50:04 UTC

Usa la skill `revision-entradas-salidas` para revisar el código que te paso. Lenguaje: JavaScript con Express (Node.js).

Lee las instrucciones de la skill en este fichero (léelo entero y síguelo al pie de la letra): <HOME>\Documents\PuestaEnProduccion\Ut1\trabajo\skills\revision-entradas-salidas\SKILL.md

El código a revisar está en: <HOME>\Documents\PuestaEnProduccion\Ut1\trabajo\evidencias\prueba-skill\entrada2.js

Reglas para esta prueba: lee SÓLO esos dos ficheros (no abras ningún otro fichero del directorio ni de sus carpetas), no ejecutes el código ni ningún comando. Devuelve como respuesta final únicamente el informe en Markdown con el formato de salida que define la skill, en español.

**🔧 Herramienta `Read`**

```json
{
  "file_path": "<HOME>\\Documents\\PuestaEnProduccion\\Ut1\\trabajo\\skills\\revision-entradas-salidas\\SKILL.md"
}
```

<details><summary>Resultado de herramienta</summary>

```
1	---
2	name: revision-entradas-salidas
3	description: Revisa un fragmento corto de código (Python, JavaScript, Java o PHP) buscando datos no confiables que llegan sin control a un destino peligroso (SQL, HTML, comandos del sistema, eval, rutas de archivo, deserialización) y explica, con fines didácticos, si falta validación de entrada o codificación de salida y cómo corregirlo. Úsala cuando un estudiante pida "¿es seguro este código?", "revisa esta entrada de usuario" o "¿hay inyección/XSS aquí?".
4	version: 1.1
5	---
6	
7	<!-- Cambios de la 1.1 (tras la primera prueba, ver evidencias/prueba-skill-propia.md):
8	     columna "Vulnerabilidad" con el nombre común, detalle breve para flujos CORRECTO,
9	     regla para agrupar flujos y aviso de verificar los identificadores de reglas de herramientas. -->
10	
11	
12	# Revisión de entradas y salidas (desarrollo seguro)
13	
14	## Propósito
15	
16	Ayudar a un estudiante a **localizar y entender** los fallos de tratamiento de datos no confiables en un fragmento de código corto (hasta unas 80 líneas) y a corregirlos, aplicando las ideas de la sección 8.2 de los apuntes de PPS (validación de entradas frente a codificación de salidas) y la regla "los datos deben permanecer como datos" (§4.1).
17	
18	**Dentro del alcance**
19	
20	- Flujos *fuente → destino* donde la fuente es no confiable (parámetros HTTP, formularios, cabeceras, cookies, ficheros subidos, `input()`, argumentos de línea de comandos, respuestas de APIs externas, datos leídos de la base de datos que en origen escribió un usuario).
21	- Destinos peligrosos: consultas SQL, HTML/JavaScript del navegador, comandos del sistema, `eval`/`exec`, rutas de archivo, deserializadores, URLs que el servidor visita (SSRF).
22	- Ausencia de límites de tamaño en entradas (riesgo de denegación de servicio, §8.8).
23	
24	**Fuera del alcance** (si se detecta, se menciona en "Observaciones fuera de alcance", sin desarrollarlo):
25	
26	- Auditorías completas de una aplicación o de un repositorio.
27	- Errores de memoria en C/C++ (desbordamientos, *use-after-free*).
28	- Criptografía, gestión de secretos, autorización y configuración de despliegue.
29	- Escribir *exploits* o cargas de ataque funcionales contra sistemas reales.
30	
31	## Condiciones de uso
32	
33	**Entrada necesaria**
34	
35	1. El fragmento de código, completo y sin recortar a mitad de función.
36	2. El lenguaje y, si lo hay, el framework (Flask, Express, Spring, Laravel…).
37	3. Opcional: de dónde vienen los datos si no se ve en el código.
38	
39	**Limitaciones**
40	
41	- La revisión es **estática** y sobre un fragmento: no ve el resto de la aplicación (puede haber validaciones en otra capa). Indica siempre esta limitación.
42	- No ejecutes el código ni pidas permisos para hacerlo.
43	- Si falta información imprescindible (por ejemplo, no se sabe si una variable viene del usuario), **pregúntalo o márcalo como supuesto**; no lo inventes.
44	- Si el fragmento contiene secretos reales (claves, contraseñas), avisa y no los repitas en la respuesta.
45	
46	## Instrucciones
47	
48	Sigue estos pasos en orden:
49	
50	1. **Identifica las fuentes no confiables.** Lista cada variable que recibe datos de fuera, con su línea.
51	2. **Sigue cada dato hasta sus destinos.** Para cada fuente, indica a qué destino llega (SQL, HTML, comando, `eval`, ruta, deserializador, URL) y si pasa antes por alguna validación o codificación. Cuenta **un flujo por cada par fuente → destino**. Sólo puedes agrupar varias fuentes en un flujo si llegan al mismo destino y se corrigen con el mismo cambio.
52	3. **Clasifica el problema** de cada flujo con exactamente una de estas etiquetas:
53	   - `FALTA CODIFICACIÓN/PARAMETRIZACIÓN`: el dato se inserta en un lenguaje de destino (SQL, HTML, shell) como si fuera código.
54	   - `FALTA VALIDACIÓN`: se acepta un valor sin comprobar tipo, longitud, rango o formato y eso tiene consecuencias (lógica, DoS).
55	   - `DATO CONVERTIDO EN CÓDIGO`: `eval`, `exec`, deserialización i
… [salida recortada: 6740 caracteres más]
```

</details>

**🔧 Herramienta `Read`**

```json
{
  "file_path": "<HOME>\\Documents\\PuestaEnProduccion\\Ut1\\trabajo\\evidencias\\prueba-skill\\entrada2.js"
}
```

<details><summary>Resultado de herramienta</summary>

```
1	// Fragmento de prueba 2 para la skill "revision-entradas-salidas" (versión 1.1).
2	// Código deliberadamente vulnerable con fines didácticos: NO desplegar.
3	const express = require("express");
4	const path = require("path");
5	const db = require("./db"); // envoltorio de SQLite con get(sql, params)
6	const app = express();
7	
8	const CARPETA = path.join(__dirname, "facturas");
9	
10	app.get("/factura", (req, res) => {
11	  const archivo = req.query.archivo;
12	  res.sendFile(path.join(CARPETA, archivo));
13	});
14	
15	app.get("/perfil/:id", async (req, res) => {
16	  const id = Number(req.params.id);
17	  if (!Number.isInteger(id) || id < 1) return res.status(400).json({ error: "id no válido" });
18	  const usuario = await db.get("SELECT nombre, bio FROM usuarios WHERE id = ?", [id]);
19	  res.json(usuario ?? { error: "no existe" });
20	});
21	
22	app.post("/config", express.json(), (req, res) => {
23	  const opciones = eval("(" + req.body.opciones + ")");
24	  res.send("Guardado: " + Object.keys(opciones).length + " opciones");
25	});
26	
27	app.listen(3000);
28
```

</details>

## 🤖 Claude · informe final · 2026-10-26 16:50:57 UTC

#### Resumen
He analizado 4 flujos y 2 tienen problemas, los dos de gravedad Alta. El más grave es el `eval` sobre `req.body.opciones` (línea 23), que permite ejecutar código en el servidor. El otro es un *path traversal* en `/factura` (líneas 11-12). Los dos flujos de `/perfil/:id` están bien protegidos.

#### Flujos analizados
| # | Fuente (línea) | Destino (línea) | Etiqueta | Vulnerabilidad | Gravedad |
|---|---|---|---|---|---|
| 1 | `req.query.archivo` (11) | Ruta de archivo en `res.sendFile` (12) | FALTA VALIDACIÓN | *Path traversal* (lectura de archivos arbitrarios) | Alta |
| 2 | `req.params.id` (16) | Consulta SQL `db.get` (18) | CORRECTO | — | — |
| 3 | `nombre`, `bio` leídos de la BD (18), supuestamente escritos por usuarios | Respuesta JSON `res.json` (19) | CORRECTO | — | — |
| 4 | `req.body.opciones` (23) | `eval` (23) | DATO CONVERTIDO EN CÓDIGO | Inyección de código / ejecución remota de código (RCE) | Alta |

#### Detalle y corrección

##### Flujo 1: nombre de archivo del usuario usado como ruta
- **Qué pasa:** el valor de `?archivo=` se une con `path.join(CARPETA, archivo)` sin ninguna comprobación. `path.join` resuelve los segmentos `..`, así que con `?archivo=../db.js` la ruta final sale de la carpeta `facturas`. `sendFile` recibe una ruta absoluta sin la opción `root`, por lo que no aplica ninguna protección propia. Además, si falta el parámetro o llega repetido (`?archivo=a&archivo=b`), `path.join` lanza un error y devuelve un 500.
- **Por qué es un problema:** cualquiera puede descargar cualquier fichero que pueda leer el proceso de Node. Eso incluye el código fuente, ficheros de configuración con secretos, la propia base de datos SQLite y las facturas de otros clientes. La gravedad es Alta porque el atacante elige qué fichero se lee, sin necesitar ninguna otra condición.
- **Corrección:** (supuesto: las facturas son PDF con nombres sencillos; ajusta la expresión regular a tu formato real)
  ```javascript
  app.get("/factura", (req, res) => {
    const archivo = req.query.archivo;
    if (typeof archivo !== "string" || !/^[\w-]{1,64}\.pdf$/.test(archivo)) {
      return res.status(400).json({ error: "archivo no válido" });
    }
    res.sendFile(archivo, { root: CARPETA }); // con root, sendFile rechaza las rutas con ".."
  });
  ```
- **Validación vs. codificación aquí:** en una ruta de archivo no hay un "escapado" equivalente al de HTML. La defensa principal es validar con una lista blanca (sólo nombres `letras-números.pdf`, sin `/` ni `..`). Como segunda capa, el valor se trata como un nombre relativo a `root`, nunca como una ruta libre.

##### Flujo 2: id del perfil en la consulta SQL
Está protegido por dos cosas: la validación de tipo y rango de la línea 17 (entero mayor o igual que 1) y la consulta parametrizada con `?` de la línea 18, que mantiene el id como dato y no como SQL.

##### Flujo 3: datos de la BD devueltos en la respuesta
`res.json` serializa los datos como JSON y envía `Content-Type: application/json`, así que el navegador no interpreta `bio` como HTML. El riesgo de XSS almacenado estaría en el cliente, si este pinta `bio` con `innerHTML`, y eso no se ve en el fragmento.

##### Flujo 4: `eval` sobre el cuerpo de la petición
- **Qué pasa:** el texto de `req.body.opciones` se concatena entre paréntesis y se pasa a `eval`, que lo ejecuta como JavaScript con todos los permisos del proceso del servidor.
- **Por qué es un problema:** el atacante decide qué código se ejecuta. Basta con enviar `{"opciones": "1+1"}` para comprobar que el valor se evalúa en lugar de leerse como dato. Con algo más dañino podría leer ficheros, lanzar comandos o tirar el servidor. La gravedad es Alta porque el atacante controla el código que se ejecuta.
- **Corrección:** `express.json()` ya convierte el cuerpo en un objeto, así que no hace falta `eval`. Basta con validar la estructura recibida y fijar un límite de tamaño explícito.
  ```javascript
  app.post("/config", express.json({ limit: "10kb" }), (req, res) => {
    const opciones = req.body?.opciones;
    if (typeof opciones !== "object" || opciones === null || Array.isArray(opciones)) {
      return res.status(400).json({ error: "opciones no válidas" });
    }
    res.send("Guardado: " + Object.keys(opciones).length + " opciones");
  });
  ```
  Si el cliente tiene que seguir enviando `opciones` como texto, usa `JSON.parse(req.body.opciones)` dentro de un `try/catch`, que devuelva 400 si falla. Nunca uses `eval`.
- **Validación vs. codificación aquí:** ningún escapado hace seguro un `eval`, porque el propio destino es "ejecutar código". La solución es no convertir el dato en código: se interpreta como datos con un parser de JSON y después se valida que sea un objeto con las claves y el tamaño esperados. La salida de la línea 24 sólo incluye un número, así que no plantea un problema de codificación HTML.

#### SSDLC y pruebas
- **Fase donde detectarlo:**
  - En la implementación, con revisión de código, porque `eval` con datos de la petición y `path.join` con un parámetro de la URL son patrones muy fáciles de reconocer.
  - En la verificación con SAST. La regla `no-eval` de ESLint (comprobar en la documentación de la herramienta) y las reglas de Semgrep o CodeQL para *path traversal* y para inyección de código en Express (comprobar en la documentación de la herramienta) los detectarían.
  - Con DAST, que probaría `../` en `archivo` y expresiones en `opciones`.
- **Prueba de regresión sugerida (por ejemplo, con supertest):**
  - `GET /factura?archivo=../db.js` debe responder 400.
  - `GET /factura` sin parámetro debe responder 400, no 500.
  - `GET /factura?archivo=factura-001.pdf` debe seguir funcionando.
  - `POST /config` con `{"opciones": "1+1"}` debe responder 400. Con `{"opciones": {"tema": "oscuro"}}` debe responder `Guardado: 1 opciones`.
  - `GET /perfil/abc` y `GET /perfil/0` deben responder 400.

#### Observaciones fuera de alcance
- `/perfil/:id` y `/factura` no comprueban quién hace la petición, así que cualquiera podría consultar perfiles o facturas ajenas cambiando el id o el nombre (autorización / IDOR).
- El manejador `async` de `/perfil/:id` no captura los errores de `db.get`. En Express 4 eso produce una promesa rechazada sin gestionar en lugar de un 500 controlado.

#### Limitación
Revisión estática de un fragmento; puede haber controles en otras partes del código.

<details><summary>Resultado de herramienta</summary>

```
{"success":true,"message":"Report delivered to your caller."}
```

</details>
