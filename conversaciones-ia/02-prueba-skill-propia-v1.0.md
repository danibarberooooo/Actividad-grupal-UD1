# Conversación 02 · Prueba de la skill propia v1.0 (conversación nueva, subagente de Claude Code)

> Exportado automáticamente del historial local de Claude Code (29 eventos).
> Se han anonimizado rutas locales, nombre de usuario y correo. Se omiten los recordatorios internos del sistema
> y el razonamiento interno del modelo. Las salidas de herramientas de más de 4000 caracteres se recortan.

## 👤 Usuario · 2026-10-26 16:47:10 UTC

Usa la skill `revision-entradas-salidas` para revisar el código que te paso. Lenguaje: Python con Flask. Los datos de la tabla `productos` los pueden escribir los vendedores desde un panel web.

Lee las instrucciones de la skill en este fichero (léelo entero y síguelo al pie de la letra): <HOME>\Documents\PuestaEnProduccion\Ut1\trabajo\skills\revision-entradas-salidas\SKILL.md

El código a revisar está en: <HOME>\Documents\PuestaEnProduccion\Ut1\trabajo\evidencias\prueba-skill\entrada.py

Reglas para esta prueba: lee SÓLO esos dos ficheros (no abras ningún otro fichero del directorio ni de sus carpetas), no ejecutes el código ni ningún comando. Devuelve como respuesta final únicamente el informe en Markdown con el formato de salida que define la skill, en español.

**🔧 Herramienta `Read`**

```json
{
  "file_path": "<HOME>\\Documents\\PuestaEnProduccion\\Ut1\\trabajo\\skills\\revision-entradas-salidas\\SKILL.md"
}
```

**🔧 Herramienta `Read`**

```json
{
  "file_path": "<HOME>\\Documents\\PuestaEnProduccion\\Ut1\\trabajo\\evidencias\\prueba-skill\\entrada.py"
}
```

<details><summary>Resultado de herramienta</summary>

```
1	---
2	name: revision-entradas-salidas
3	description: Revisa un fragmento corto de código (Python, JavaScript, Java o PHP) buscando datos no confiables que llegan sin control a un destino peligroso (SQL, HTML, comandos del sistema, eval, rutas de archivo, deserialización) y explica, con fines didácticos, si falta validación de entrada o codificación de salida y cómo corregirlo. Úsala cuando un estudiante pida "¿es seguro este código?", "revisa esta entrada de usuario" o "¿hay inyección/XSS aquí?".
4	version: 1.0
5	---
6	
7	# Revisión de entradas y salidas (desarrollo seguro)
8	
9	## Propósito
10	
11	Ayudar a un estudiante a **localizar y entender** los fallos de tratamiento de datos no confiables en un fragmento de código corto (hasta unas 80 líneas) y a corregirlos, aplicando las ideas de la sección 8.2 de los apuntes de PPS (validación de entradas frente a codificación de salidas) y la regla "los datos deben permanecer como datos" (§4.1).
12	
13	**Dentro del alcance**
14	
15	- Flujos *fuente → destino* donde la fuente es no confiable (parámetros HTTP, formularios, cabeceras, cookies, ficheros subidos, `input()`, argumentos de línea de comandos, respuestas de APIs externas, datos leídos de la base de datos que en origen escribió un usuario).
16	- Destinos peligrosos: consultas SQL, HTML/JavaScript del navegador, comandos del sistema, `eval`/`exec`, rutas de archivo, deserializadores, URLs que el servidor visita (SSRF).
17	- Ausencia de límites de tamaño en entradas (riesgo de denegación de servicio, §8.8).
18	
19	**Fuera del alcance** (si se detecta, se menciona en "Observaciones fuera de alcance", sin desarrollarlo):
20	
21	- Auditorías completas de una aplicación o de un repositorio.
22	- Errores de memoria en C/C++ (desbordamientos, *use-after-free*).
23	- Criptografía, gestión de secretos, autorización y configuración de despliegue.
24	- Escribir *exploits* o cargas de ataque funcionales contra sistemas reales.
25	
26	## Condiciones de uso
27	
28	**Entrada necesaria**
29	
30	1. El fragmento de código, completo y sin recortar a mitad de función.
31	2. El lenguaje y, si lo hay, el framework (Flask, Express, Spring, Laravel…).
32	3. Opcional: de dónde vienen los datos si no se ve en el código.
33	
34	**Limitaciones**
35	
36	- La revisión es **estática** y sobre un fragmento: no ve el resto de la aplicación (puede haber validaciones en otra capa). Indica siempre esta limitación.
37	- No ejecutes el código ni pidas permisos para hacerlo.
38	- Si falta información imprescindible (por ejemplo, no se sabe si una variable viene del usuario), **pregúntalo o márcalo como supuesto**; no lo inventes.
39	- Si el fragmento contiene secretos reales (claves, contraseñas), avisa y no los repitas en la respuesta.
40	
41	## Instrucciones
42	
43	Sigue estos pasos en orden:
44	
45	1. **Identifica las fuentes no confiables.** Lista cada variable que recibe datos de fuera, con su línea.
46	2. **Sigue cada dato hasta sus destinos.** Para cada fuente, indica a qué destino llega (SQL, HTML, comando, `eval`, ruta, deserializador, URL) y si pasa antes por alguna validación o codificación.
47	3. **Clasifica el problema** de cada flujo con exactamente una de estas etiquetas:
48	   - `FALTA CODIFICACIÓN/PARAMETRIZACIÓN`: el dato se inserta en un lenguaje de destino (SQL, HTML, shell) como si fuera código.
49	   - `FALTA VALIDACIÓN`: se acepta un valor sin comprobar tipo, longitud, rango o formato y eso tiene consecuencias (lógica, DoS).
50	   - `DATO CONVERTIDO EN CÓDIGO`: `eval`, `exec`, deserialización insegura o similar.
51	   - `CORRECTO`: el flujo ya está protegido (dilo también, para reforzar lo que está bien).
52	4. **Asigna una gravedad** (Alta / Media / Baja) con una frase de por qué. Alta: el atacante controla código o consultas. Media: necesita condiciones extra o el impacto es limitado. Baja: endurecimiento.
53	5. **Propón la corrección mínima** en el mismo lenguaje, mostrando sólo las líneas que cambian. Prioriza mecanismos del propio leng
… [salida recortada: 5187 caracteres más]
```

</details>

<details><summary>Resultado de herramienta</summary>

```
1	# Fragmento de prueba para la skill "revision-entradas-salidas".
2	# Código deliberadamente vulnerable con fines didácticos: NO desplegar.
3	from flask import Flask, request
4	import sqlite3
5	import hashlib
6	import subprocess
7	
8	app = Flask(__name__)
9	
10	@app.route("/buscar")
11	def buscar():
12	    nombre = request.args.get("nombre", "")
13	    con = sqlite3.connect("tienda.db")
14	    filas = con.execute(
15	        f"SELECT nombre, precio FROM productos WHERE nombre LIKE '%{nombre}%'"
16	    ).fetchall()
17	    html = "<h1>Resultados para " + nombre + "</h1><ul>"
18	    for producto, precio in filas:
19	        html += f"<li>{producto}: {precio} €</li>"
20	    return html + "</ul>"
21	
22	@app.route("/producto/<int:id_producto>")
23	def producto(id_producto):
24	    con = sqlite3.connect("tienda.db")
25	    fila = con.execute(
26	        "SELECT nombre, precio FROM productos WHERE id = ?", (id_producto,)
27	    ).fetchone()
28	    return {"nombre": fila[0], "precio": fila[1]} if fila else ({"error": "no existe"}, 404)
29	
30	@app.route("/ping")
31	def ping():
32	    host = request.args.get("host", "")
33	    salida = subprocess.run("ping -c 1 " + host, shell=True, capture_output=True, text=True)
34	    return "<pre>" + salida.stdout + "</pre>"
35	
36	@app.route("/registro", methods=["POST"])
37	def registro():
38	    usuario = request.form["usuario"]
39	    clave = request.form["clave"]
40	    hash_clave = hashlib.sha256(clave.encode()).hexdigest()
41	    con = sqlite3.connect("tienda.db")
42	    con.execute("INSERT INTO usuarios (usuario, hash) VALUES (?, ?)", (usuario, hash_clave))
43	    con.commit()
44	    return "Usuario creado"
45
```

</details>

## 🤖 Claude · informe final · 2026-10-26 16:48:48 UTC

#### Resumen
He analizado 9 flujos. 6 tienen problemas y 3 están bien protegidos. El más grave es la inyección de comandos en `/ping`, que permite ejecutar órdenes en el servidor. Le siguen la inyección SQL y los dos XSS (reflejado y almacenado) de `/buscar`.

#### Flujos analizados
| # | Fuente (línea) | Destino (línea) | Etiqueta | Gravedad |
|---|---|---|---|---|
| 1 | `request.args.get("nombre")` (12) | Consulta SQL con f-string (14-15) | FALTA CODIFICACIÓN/PARAMETRIZACIÓN | Alta |
| 2 | `request.args.get("nombre")` (12) | HTML de la respuesta (17) | FALTA CODIFICACIÓN/PARAMETRIZACIÓN | Alta |
| 3 | `producto`, `precio` leídos de `productos`, escritos por vendedores (14-16, 18) | HTML de la respuesta (19) | FALTA CODIFICACIÓN/PARAMETRIZACIÓN | Alta |
| 4 | `id_producto`, ruta `<int:...>` (22-23) | Consulta SQL parametrizada (25-26) | CORRECTO | — |
| 5 | `fila[0]`, `fila[1]` leídos de `productos` (25-27) | Respuesta JSON (28) | CORRECTO | — |
| 6 | `request.args.get("host")` (32) | Comando del sistema con `shell=True` (33) | FALTA CODIFICACIÓN/PARAMETRIZACIÓN | Alta |
| 7 | `salida.stdout`, salida de un proceso en la que influye `host` (33) | HTML de la respuesta (34) | FALTA CODIFICACIÓN/PARAMETRIZACIÓN | Media |
| 8 | `request.form["usuario"]`, `request.form["clave"]` (38-39) | `INSERT` parametrizado (42) | CORRECTO | — |
| 9 | `request.form["usuario"]`, `request.form["clave"]` (38-39) | Hash y almacenamiento sin límites de tamaño ni formato (40, 42) | FALTA VALIDACIÓN | Baja |

#### Detalle y corrección

##### Flujo 1: `nombre` concatenado en la consulta SQL
- **Qué pasa:** el parámetro de la URL se mete dentro del texto de la consulta con una f-string. SQLite recibe como código SQL lo que escribe el usuario.
- **Por qué es un problema:** un valor tan inofensivo como `O'Reilly` ya rompe la consulta, porque la comilla cierra el literal. Un atacante puede cerrarlo a propósito y añadir sus propias cláusulas, por ejemplo un `UNION` para leer la tabla `usuarios` con sus hashes. Gravedad **Alta**: el atacante controla la consulta.
- **Corrección:**
  ```python
  nombre = request.args.get("nombre", "")
  if len(nombre) > 100:
      abort(400)  # from flask import abort
  filas = con.execute(
      "SELECT nombre, precio FROM productos WHERE nombre LIKE ?", (f"%{nombre}%",)
  ).fetchall()
  ```
- **Validación vs. codificación aquí:** el límite de 100 caracteres es validación. Evita búsquedas enormes, pero no impide la inyección. Lo que la impide es parametrizar con `?`: el driver envía `nombre` como dato y nunca como SQL. Los caracteres `%` y `_` que escriba el usuario seguirán funcionando como comodines de `LIKE`. Eso es un problema de lógica, no de inyección, y se puede evitar escapándolos y añadiendo `ESCAPE '\'`.

##### Flujo 2: `nombre` insertado en el HTML (XSS reflejado)
- **Qué pasa:** el mismo parámetro se concatena en `"<h1>Resultados para " + nombre + "</h1>"`. Al devolver una cadena, Flask la sirve como `text/html` sin escapar nada.
- **Por qué es un problema:** con `?nombre=<b>x</b>` el navegador interpreta la etiqueta. Con un enlace preparado, ejecutaría JavaScript del atacante en la sesión de quien lo abra. Gravedad **Alta**: el atacante controla código que se ejecuta en el navegador de la víctima.
- **Corrección** (la misma plantilla sirve también para el flujo 3; `render_template_string` de Flask tiene el autoescape de Jinja2 activado):
  ```python
  from flask import render_template_string

  PLANTILLA_BUSCAR = """<h1>Resultados para {{ nombre }}</h1><ul>
  {% for producto, precio in filas %}<li>{{ producto }}: {{ precio }} €</li>{% endfor %}
  </ul>"""

  # sustituye a las líneas 17-20:
  return render_template_string(PLANTILLA_BUSCAR, nombre=nombre, filas=filas)
  ```
- **Validación vs. codificación aquí:** validar que `nombre` solo tenga letras reduciría el riesgo, pero haría fallar búsquedas legítimas como "Café & té". Lo correcto es codificar `nombre` para HTML en el momento de pintarlo: `<` pasa a `&lt;` y el texto se queda como texto.

##### Flujo 3: `producto` y `precio` de la base de datos insertados en el HTML (XSS almacenado)
- **Qué pasa:** el nombre del producto lo escriben los vendedores desde un panel web y aquí se pinta tal cual en `<li>{producto}: {precio} €</li>`. Que el dato venga de nuestra propia base de datos no lo hace confiable, porque en origen lo escribió un usuario.
- **Por qué es un problema:** un vendedor malicioso, o una cuenta de vendedor robada, puede guardar un nombre de producto con HTML o JavaScript. Ese código se ejecutará en el navegador de **todos** los clientes que busquen ese producto, sin que tengan que hacer clic en ningún enlace. Gravedad **Alta**: el atacante controla código en el navegador de terceros y el ataque se queda guardado. *Supuesto:* no sé si el panel de vendedores filtra los datos al guardarlos. Aunque lo hiciera, la protección correcta es codificar al mostrar.
- **Corrección:** la misma plantilla del flujo 2. `{{ producto }}` y `{{ precio }}` se escapan automáticamente. No uses `|safe` ni `Markup()` con estos datos.
- **Validación vs. codificación aquí:** en el panel de vendedores conviene validar la longitud y el tipo, por ejemplo que `precio` sea numérico y que el nombre no supere 120 caracteres. Pero un nombre como `Cable <USB-C>` es legítimo, y solo la codificación HTML al pintarlo lo muestra bien y sin riesgo.

##### Flujo 4: `id_producto` en la consulta SQL — correcto
- **Qué pasa:** el conversor `<int:id_producto>` de Flask solo acepta enteros; cualquier otra cosa da 404. Además, la consulta usa el marcador `?`.
- **Por qué está bien:** aquí hay validación (el tipo entero) y parametrización a la vez. El dato no puede convertirse en SQL.
- **Corrección:** no hace falta.
- **Validación vs. codificación aquí:** el conversor `int` valida el tipo y el `?` mantiene el dato separado del código SQL. Bastaría con el `?`, pero las dos defensas se complementan.

##### Flujo 5: datos de `productos` devueltos como JSON — correcto
- **Qué pasa:** `nombre` y `precio`, que vienen de los vendedores, se devuelven en un diccionario. Flask lo serializa a JSON con `Content-Type: application/json`.
- **Por qué está bien:** el serializador JSON codifica correctamente el dato para ese formato, y el navegador no interpreta como HTML una respuesta JSON.
- **Corrección:** no hace falta. Ojo: si un frontend inserta luego ese `nombre` con `innerHTML`, el XSS volvería a aparecer allí. En ese caso hay que usar `textContent`.
- **Validación vs. codificación aquí:** no se valida nada, y en este caso no hace falta, porque la codificación JSON del framework es la defensa adecuada para este destino.

##### Flujo 6: `host` concatenado en un comando de shell
- **Qué pasa:** se construye `"ping -c 1 " + host` y se ejecuta con `shell=True`. El shell interpreta los metacaracteres que haya en `host`, como `;`, `|`, `&&` o `$( )`.
- **Por qué es un problema:** `?host=127.0.0.1;echo hola` ejecutaría también `echo hola`. En su lugar podría ir cualquier orden, con los permisos del proceso web. Gravedad **Alta**: el atacante ejecuta comandos en el servidor.
- **Corrección:**
  ```python
  import ipaddress
  import re

  PATRON_HOST = re.compile(
      r"(?=.{1,253}$)[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?"
      r"(?:\.[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*"
  )

  host = request.args.get("host", "")
  try:
      ipaddress.ip_address(host)
  except ValueError:
      if not PATRON_HOST.fullmatch(host):
          abort(400)
  salida = subprocess.run(
      ["ping", "-c", "1", host], capture_output=True, text=True, timeout=5
  )
  ```
  Si se agota el `timeout`, `subprocess.run` lanza `subprocess.TimeoutExpired`. Conviene capturarla y devolver un error controlado.
- **Validación vs. codificación aquí:** la lista de argumentos sin `shell=True` es el equivalente a parametrizar: `host` llega a `ping` como un único argumento y nunca pasa por el shell. La validación con lista blanca (IP válida o nombre de host bien formado, que no puede empezar por `-`) añade una segunda barrera. Impide además que se cuelen opciones de `ping` como `-f`.

##### Flujo 7: salida de `ping` insertada en el HTML
- **Qué pasa:** `salida.stdout` se concatena dentro de `<pre>` sin escapar. Esa salida es un dato externo: repite el `host` y, con el fallo del flujo 6, el atacante controla todo su contenido.
- **Por qué es un problema:** si el atacante consigue que la salida contenga etiquetas HTML, tiene XSS. Gravedad **Media**: hoy es explotable a través del flujo 6, pero una vez corregido ese flujo, el contenido queda limitado a caracteres de host válidos.
- **Corrección:**
  ```python
  from markupsafe import escape

  return "<pre>" + str(escape(salida.stdout)) + "</pre>"
  ```
  El `str()` es necesario: sin él, `"<pre>" + Markup(...)` también escaparía la etiqueta `<pre>`.
- **Validación vs. codificación aquí:** validar `host` reduce lo que puede aparecer en la salida, pero no la controla del todo (es texto generado por otro programa). Lo que garantiza que se muestre como texto es codificarla para HTML.

##### Flujo 8: `usuario` y `clave` en el `INSERT` — correcto
- **Qué pasa:** los dos valores llegan a la consulta mediante marcadores `?`. La clave, además, se guarda como hash.
- **Por qué está bien:** la parametrización impide la inyección SQL aunque `usuario` contenga comillas.
- **Corrección:** no hace falta para el SQL.
- **Validación vs. codificación aquí:** la parametrización protege el destino SQL. La falta de validación es un problema aparte, que se trata en el flujo 9.

##### Flujo 9: `usuario` y `clave` sin límites de tamaño ni formato
- **Qué pasa:** se acepta cualquier longitud y cualquier carácter. No hay `MAX_CONTENT_LENGTH`, así que un formulario de varios megabytes se lee, se hashea y se guarda entero.
- **Por qué es un problema:** permite consumir memoria, CPU y disco con peticiones enormes (§8.8). También permite registrar nombres de usuario vacíos, con espacios engañosos o con HTML, que darán problemas cuando se muestren en otras pantallas. Gravedad **Baja**: es endurecimiento y no da control de código.
- **Corrección:**
  ```python
  import re

  app.config["MAX_CONTENT_LENGTH"] = 16 * 1024  # tras crear app

  usuario = request.form.get("usuario", "")
  clave = request.form.get("clave", "")
  if not re.fullmatch(r"[A-Za-z0-9_.-]{3,30}", usuario) or not 8 <= len(clave) <= 128:
      abort(400)
  ```
- **Validación vs. codificación aquí:** en este flujo lo que falta es validación de longitud y formato. La parte SQL ya está codificada con `?`. Validar `usuario` no exime de escaparlo cuando se pinte en HTML.

#### SSDLC y pruebas
- **Fase donde detectarlo:** en la **implementación**, mediante revisión de código entre compañeros y el analizador del IDE. En la **verificación**, con SAST: Bandit marca `B608` (SQL construido con cadenas) y `B602` (`subprocess` con `shell=True`), y Semgrep tiene reglas de Flask para HTML devuelto sin escapar. También con DAST: OWASP ZAP sobre `/buscar` y `/ping`.
- **Pruebas de regresión sugeridas** (con `app.test_client()` y una base de datos de prueba):
  - `/buscar?nombre=O'Reilly` responde 200, no 500. La comilla ya no rompe la consulta.
  - `/buscar?nombre=<b>x</b>` devuelve `&lt;b&gt;x&lt;/b&gt;` y no la etiqueta cruda.
  - Con un producto llamado `<b>p</b>` en la base de datos de prueba, `/buscar?nombre=p` muestra `&lt;b&gt;p&lt;/b&gt;`.
  - `/ping?host=127.0.0.1;echo hola` y `/ping?host=-f` devuelven 400.
  - `POST /registro` con un `usuario` de 1000 caracteres devuelve 400, y un cuerpo de más de 16 KB devuelve 413.

#### Observaciones fuera de alcance
- Las contraseñas se guardan con SHA-256 sin sal ni factor de coste. Debería usarse Argon2, bcrypt o scrypt (criptografía).
- `/ping` no pide autenticación ni limita peticiones. Cualquiera puede usar el servidor para sondear hosts de la red interna (autorización y diseño).
- `POST /registro` no tiene protección CSRF ni límite de intentos (autorización y configuración).
- Las conexiones `sqlite3.connect(...)` nunca se cierran. Debería usarse `with closing(...)` o la gestión por petición de Flask (robustez).

#### Limitación
Revisión estática de un fragmento; puede haber controles en otras partes del código.

<details><summary>Resultado de herramienta</summary>

```
{"success":true,"message":"Report delivered to your caller."}
```

</details>
