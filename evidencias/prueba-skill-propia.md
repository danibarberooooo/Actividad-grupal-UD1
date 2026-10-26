# Prueba de la skill propia: `revision-entradas-salidas`

Skill probada: [`skills/revision-entradas-salidas/SKILL.md`](../skills/revision-entradas-salidas/SKILL.md) (versión 1.0 en la primera prueba).

## 1. Entrada utilizada

Fichero [`prueba-skill/entrada.py`](prueba-skill/entrada.py): una aplicación Flask de 44 líneas, vulnerable a propósito, con cuatro rutas. Mezcla flujos vulnerables con flujos **ya correctos**, para comprobar que la skill no marca todo como fallo.

Prompt enviado (en una conversación nueva, distinta de la de creación):

> Usa la skill `revision-entradas-salidas` (te paso su SKILL.md) para revisar este código. Lenguaje: Python con Flask. Los datos de la tabla `productos` los pueden escribir los vendedores desde un panel web. [contenido de `entrada.py`]

## 2. Resultado esperado (definido ANTES de la prueba)

Lo redactamos antes de lanzar la prueba para no dejarnos influir por la respuesta de la IA.

| # | Fuente (línea) | Destino (línea) | Etiqueta esperada | Gravedad esperada |
|---|---|---|---|---|
| E1 | `nombre` (12) | SQL con f-string (15) | FALTA CODIFICACIÓN/PARAMETRIZACIÓN | Alta |
| E2 | `nombre` (12) | HTML (17) | FALTA CODIFICACIÓN/PARAMETRIZACIÓN (XSS reflejado) | Alta |
| E3 | `producto` de la BD, escrito por vendedores (18) | HTML (19) | FALTA CODIFICACIÓN (XSS almacenado) | Media o Alta |
| E4 | `id_producto` (23) | SQL parametrizado (26) | CORRECTO | — |
| E5 | `host` (32) | comando con `shell=True` (33) | FALTA CODIFICACIÓN/PARAMETRIZACIÓN (inyección de comandos) | Alta |
| E6 | `salida.stdout` (33) | HTML (34) | FALTA CODIFICACIÓN | Baja o Media |
| E7 | `usuario` (38) | SQL parametrizado (42) | CORRECTO (como mucho, FALTA VALIDACIÓN de longitud, Baja) | — / Baja |

Además esperamos que:

- **Correcciones:** consulta parametrizada con `?` y `f"%{nombre}%"` como parámetro; `markupsafe.escape()` o `render_template` con autoescape; `subprocess.run(["ping", "-c", "1", host])` sin `shell=True` **y** validación del `host` con una lista blanca o una expresión regular.
- **Límites:** mencione que no hay límite de longitud en `nombre`/`host` (riesgo de DoS, Baja).
- **Fuera de alcance:** el uso de SHA-256 para contraseñas (línea 40) aparezca **sólo** en "Observaciones fuera de alcance", recomendando Argon2id/bcrypt/scrypt.
- **Formato:** respete las secciones del formato de salida y termine con la frase de limitación.
- **Sin extras peligrosos:** no incluya cargas de ataque elaboradas.

### 2.b Resultado esperado de la segunda prueba (versión 1.1), definido antes de lanzarla

Entrada: [`prueba-skill/entrada2.js`](prueba-skill/entrada2.js) (Express, 27 líneas). Sirve para comprobar que las mejoras de la versión 1.1 funcionan con otro lenguaje y con vulnerabilidades distintas.

| # | Fuente (línea) | Destino (línea) | Etiqueta esperada | Vulnerabilidad | Gravedad |
|---|---|---|---|---|---|
| E1 | `archivo` (11) | ruta de `sendFile` (12) | FALTA VALIDACIÓN (también se acepta CODIFICACIÓN) | *Path traversal* | Alta |
| E2 | `id` (16) | SQL parametrizado (18) | CORRECTO, en **una línea** | — | — |
| E3 | `usuario` de la BD (18) | JSON (19) | CORRECTO, en una línea | — | — |
| E4 | `req.body.opciones` (23) | `eval` (23) | DATO CONVERTIDO EN CÓDIGO | Inyección de código | Alta |

- **Correcciones:** `JSON.parse` en lugar de `eval`, y validar la estructura; `path.basename` y comprobar que la ruta resuelta queda dentro de `CARPETA`, o bien `res.sendFile(archivo, { root: CARPETA })`.
- **Fuera de alcance:** que `/factura` no compruebe si la factura es del usuario (autorización, §8.3).
- **Novedades de la 1.1:** que aparezca la columna "Vulnerabilidad" y que, si se citan reglas de herramientas, vayan con el aviso "(comprobar…)".

## 3. Resultado obtenido

### Prueba 1 (versión 1.0, `entrada.py`)

La ejecutó un subagente de Claude Code en una **conversación nueva**, sin acceso a esta conversación ni a este documento. Según el registro, sólo leyó `SKILL.md` y `entrada.py`. Informe completo en [`conversaciones-ia/02-prueba-skill-propia-v1.0.md`](../conversaciones-ia/02-prueba-skill-propia-v1.0.md). Resumen de su tabla:

| # | Fuente (línea) | Destino (línea) | Etiqueta obtenida | Gravedad |
|---|---|---|---|---|
| 1 | `nombre` (12) | SQL con f-string (14-15) | FALTA CODIFICACIÓN/PARAMETRIZACIÓN | Alta |
| 2 | `nombre` (12) | HTML (17) | FALTA CODIFICACIÓN/PARAMETRIZACIÓN | Alta |
| 3 | `producto`, `precio` de la BD (18) | HTML (19) | FALTA CODIFICACIÓN/PARAMETRIZACIÓN | Alta |
| 4 | `id_producto` (22-23) | SQL parametrizado (25-26) | CORRECTO | — |
| 5 | `fila[0]`, `fila[1]` de la BD (25-27) | JSON (28) | CORRECTO | — |
| 6 | `host` (32) | comando con `shell=True` (33) | FALTA CODIFICACIÓN/PARAMETRIZACIÓN | Alta |
| 7 | `salida.stdout` (33) | HTML (34) | FALTA CODIFICACIÓN/PARAMETRIZACIÓN | Media |
| 8 | `usuario`, `clave` (38-39) | `INSERT` parametrizado (42) | CORRECTO | — |
| 9 | `usuario`, `clave` (38-39) | sin límites de tamaño (40, 42) | FALTA VALIDACIÓN | Baja |

Correcciones propuestas:

- `?` con `(f"%{nombre}%",)` y límite de 100 caracteres;
- `render_template_string` con autoescape para los flujos 2 y 3;
- `subprocess.run(["ping", "-c", "1", host], timeout=5)` sin `shell=True`, con validación del host mediante `ipaddress` y una expresión regular;
- `markupsafe.escape` para el flujo 7;
- `MAX_CONTENT_LENGTH` y una expresión regular para el usuario.

Además:

- **SSDLC:** cita Bandit B608/B602, Semgrep y OWASP ZAP, y propone 5 pruebas de regresión.
- **Fuera de alcance:** SHA-256 sin sal, `/ping` sin autenticación, falta de CSRF y conexiones sin cerrar.
- Termina con la frase de limitación.

### Prueba 2 (versión 1.1, `entrada2.js`)

También en una conversación nueva, en la que sólo se leyeron `SKILL.md` (1.1) y `entrada2.js`. Informe completo en [`conversaciones-ia/04-prueba-skill-propia-v1.1.md`](../conversaciones-ia/04-prueba-skill-propia-v1.1.md).

| # | Fuente (línea) | Destino (línea) | Etiqueta | Vulnerabilidad | Gravedad |
|---|---|---|---|---|---|
| 1 | `req.query.archivo` (11) | `res.sendFile` (12) | FALTA VALIDACIÓN | *Path traversal* | Alta |
| 2 | `req.params.id` (16) | SQL `db.get` (18) | CORRECTO | — | — |
| 3 | `nombre`, `bio` de la BD (18) | `res.json` (19) | CORRECTO | — | — |
| 4 | `req.body.opciones` (23) | `eval` (23) | DATO CONVERTIDO EN CÓDIGO | Inyección de código / RCE | Alta |

Correcciones propuestas:

- lista blanca `^[\w-]{1,64}\.pdf$` y `res.sendFile(archivo, { root: CARPETA })`;
- quitar `eval` y validar que `opciones` sea un objeto, con `express.json({ limit: "10kb" })`.

Además:

- **Flujos correctos:** descritos en 1-2 frases.
- **Herramientas:** las cita con el aviso "(comprobar en la documentación de la herramienta)".
- **Fuera de alcance:** falta de autorización (IDOR) y errores `async` sin capturar.

## 4. Comparación entre lo esperado y lo obtenido

### Prueba 1

| Expectativa | ¿Se cumple? | Comentario |
|---|---|---|
| E1 inyección SQL, Alta | ✅ | Corrección idéntica a la esperada. Añade un matiz que no habíamos previsto: los comodines `%` y `_` de `LIKE`. |
| E2 XSS reflejado, Alta | ✅ | Propone `render_template_string`. **Comprobamos** en la documentación de Flask que activa el autoescape. |
| E3 XSS almacenado, Media o Alta | ✅ (Alta) | Lo marca como supuesto ("no sé si el panel filtra"), tal y como pide la skill. |
| E4 `id_producto` CORRECTO | ✅ | |
| E5 inyección de comandos, Alta, con lista de argumentos y validación | ✅ | Añade `timeout` y explica que la validación también impide opciones como `-f`. Mejor de lo esperado. |
| E6 salida de `ping` en HTML, Baja o Media | ✅ (Media) | Detalle correcto: hace falta `str(escape(...))`. **Comprobado:** `Markup.__radd__` escaparía también `<pre>`. |
| E7 `usuario` CORRECTO, como mucho validación Baja | ✅ | Lo divide en dos flujos (8 CORRECTO y 9 FALTA VALIDACIÓN Baja). |
| Límite de longitud / DoS | ✅ | En los flujos 1 y 9. |
| SHA-256 sólo fuera de alcance | ✅ | |
| Formato y frase de limitación | ✅ | |
| Sin cargas de ataque elaboradas | ✅ | Sólo `O'Reilly`, `<b>x</b>` y `127.0.0.1;echo hola`, que son inofensivas. |
| *(No previsto)* flujo 5 JSON CORRECTO | ➕ | Acierto que no habíamos incluido en lo esperado. |

**Comprobaciones nuestras:**

- Los identificadores **B602** (`subprocess_popen_with_shell_equals_true`) y **B608** (`hardcoded_sql_expressions`) existen en la documentación de Bandit.
- La opción `root` de `send`/`sendFile` rechaza `..`: lo verificamos en el código fuente de `pillarjs/send`, con la expresión `UP_PATH_REGEXP`.

### Prueba 2

| Expectativa | ¿Se cumple? |
|---|---|
| E1 *path traversal*, FALTA VALIDACIÓN, Alta | ✅ |
| E2 y E3 CORRECTO en una línea | ✅ (1-2 frases; aceptable) |
| E4 `eval`, DATO CONVERTIDO EN CÓDIGO, Alta | ✅ |
| Correcciones esperadas (`JSON.parse`/objeto, `root`/`basename`) | ✅ |
| Autorización sólo fuera de alcance | ✅ |
| Columna "Vulnerabilidad" (novedad de la 1.1) | ✅ |
| Aviso "(comprobar…)" en las reglas de herramientas (novedad de la 1.1) | ✅ |

## 5. Errores, limitaciones y mejoras

**Problemas detectados en la versión 1.0 (prueba 1):**

1. **Faltaba el nombre de la vulnerabilidad.** La etiqueta `FALTA CODIFICACIÓN/PARAMETRIZACIÓN` agrupa SQLi, XSS e inyección de comandos. Para un estudiante es más útil ver también el nombre común, que es el que aparece en el glosario y en OWASP.
2. **Exceso de longitud.** El informe ocupó unas 200 líneas. Los flujos CORRECTO repetían las cuatro viñetas aunque no hubiera nada que corregir.
3. **Agrupación de flujos ambigua.** La skill no decía cómo contar los flujos. El modelo agrupó dos fuentes en una fila (flujos 8 y 9) y separó otras. No es incorrecto, pero hace difícil comparar dos ejecuciones.
4. **Identificadores de herramientas sin aviso.** El informe citaba reglas concretas de Bandit. Estas eran correctas, pero tuvimos que comprobarlas a mano, y es un sitio típico donde una IA puede inventarse algo.

**Mejoras de la versión 1.1** (la 1.0 se conserva en [`prueba-skill/SKILL-v1.0.md`](prueba-skill/SKILL-v1.0.md)):

- Nueva columna **Vulnerabilidad** con el nombre común (problema 1).
- Los flujos CORRECTO se explican en una línea, y las correcciones compartidas se citan como "misma corrección que el flujo N" (problema 2).
- Regla explícita: **un flujo por par fuente → destino**, con agrupación sólo si comparten destino y corrección (problema 3).
- Aviso obligatorio "(comprobar en la documentación de la herramienta)" en las reglas de herramientas. Además, se añade como criterio de revisión humana (problema 4).

**Resultado de las mejoras (prueba 2):** las cuatro se aplicaron correctamente. El informe bajó a unas 90 líneas para 4 flujos.

**Limitaciones que siguen ahí:**

- Las dos pruebas las hizo **el mismo modelo** (Claude Opus 5.5) que redactó la skill. Convendría probarla con otra IA (por ejemplo, Copilot Chat) para ver si las instrucciones se entienden sin el estilo propio de Claude. El grupo decidió no hacer esa tercera prueba porque el enunciado no la exige, así que queda como limitación conocida.
- Los fragmentos de prueba los escribimos nosotros, con fallos "de libro". Con código real y más ambiguo la skill podría equivocarse más.
- La revisión es estática: las correcciones propuestas **no se han ejecutado**. Las hemos revisado leyendo el código y la documentación oficial, no con pruebas.

## 6. Conversaciones de origen

| Conversación | Contenido |
|---|---|
| [`01-claude-code-produccion.md`](../conversaciones-ia/01-claude-code-produccion.md) | Creación de la skill, del caso de prueba y del resultado esperado, análisis de los resultados y redacción de la 1.1. |
| [`02-prueba-skill-propia-v1.0.md`](../conversaciones-ia/02-prueba-skill-propia-v1.0.md) | Prueba 1 en una conversación distinta. |
| [`04-prueba-skill-propia-v1.1.md`](../conversaciones-ia/04-prueba-skill-propia-v1.1.md) | Prueba 2 en una conversación distinta. |
