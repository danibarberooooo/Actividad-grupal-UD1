# Skill pública: `sharp-edges` (Trail of Bits)

## 1. Identificación

| Campo | Valor |
|---|---|
| Nombre | `sharp-edges` ("aristas cortantes"), dentro del plugin del mismo nombre |
| Autor | Trail of Bits, empresa de auditoría de seguridad |
| Fuente original | https://github.com/trailofbits/skills/tree/main/plugins/sharp-edges/skills/sharp-edges |
| Fichero principal | [`SKILL.md`](https://github.com/trailofbits/skills/blob/main/plugins/sharp-edges/skills/sharp-edges/SKILL.md) (293 líneas) |
| Versión analizada | Último commit del fichero: `5f0a765`, 29/04/2026 (consultado el 26/10/2026) |
| Licencia | CC BY-SA 4.0 (según el README del repositorio) |
| Permisos que pide | `allowed-tools: Read Grep Glob`, es decir, **sólo lectura** |

### Por qué la elegimos

Buscamos en dos repositorios públicos de skills (`anthropics/skills` y `trailofbits/skills`) una skill relacionada con **nuestro tema**, y no sólo con hacer la web. `sharp-edges` trata justo dos principios de la §8.1 de los apuntes: **seguro por defecto** (*secure by default*) y el diseño de interfaces que no inviten al error. Descartamos `insecure-defaults`, del mismo repositorio, porque ahora es un *workflow* que lanza muchos agentes (ver su README), no un SKILL.md que se pueda leer y entender entero. También descartamos `frontend-design`, de Anthropic, porque no tiene que ver con la seguridad.

## 2. Propósito

Revisar **APIs, configuraciones e interfaces** para detectar diseños en los que el camino fácil lleva a un resultado inseguro. Los llama *footguns*: armas con las que es fácil dispararse en el pie. Su idea central es el ***pit of success***: usarlo de forma segura debe ser lo que menos esfuerzo cuesta. Si hay que leer la documentación con lupa para no equivocarse, la API está mal diseñada.

## 3. Tarea concreta para la que se diseñó

- Auditar el diseño de librerías y APIs, sobre todo criptográficas y de autenticación.
- Revisar esquemas de configuración en busca de opciones peligrosas.
- **No** está pensada para errores de implementación ni de lógica de negocio. Para eso remite a una revisión de código normal.

### Instrucciones relevantes (resumidas con nuestras palabras)

1. **Seis categorías** de aristas:
   1. elección de algoritmo, como el `alg: none` de JWT;
   2. valores por defecto peligrosos (¿qué pasa con `0`, `""` o `null`?);
   3. APIs de primitivas frente a APIs con tipos semánticos;
   4. "precipicios" de configuración (un valor mal puesto lo rompe todo sin avisar);
   5. fallos silenciosos;
   6. seguridad "a base de cadenas" (*stringly-typed*).
2. **Cuatro fases:**
   1. identificar la superficie;
   2. probar casos límite (cero, vacío, null, negativos, confusión de tipos);
   3. modelar a **tres adversarios**: el malicioso (*scoundrel*), el desarrollador vago que copia y pega (*lazy developer*) y el que no entiende la API (*confused developer*);
   4. validar cada hallazgo reproduciéndolo.
3. **Tabla de racionalizaciones que hay que rechazar**, por ejemplo "está documentado" o "nadie haría eso".
4. **Tabla de gravedad** (Crítica / Alta / Media / Baja) y una **lista de comprobación final** de 8 puntos.

## 4. Aplicación en el proyecto

**Qué hicimos:** aplicamos la skill al fichero [`js/demo.js`](../js/demo.js) de nuestra web. Es justo el código que expone decisiones de seguridad: validadores, codificación HTML, un iframe aislado y funciones de hash.

**Cómo:**

- Descargamos el `SKILL.md` y tres de sus referencias (`lang-javascript.md`, `crypto-apis.md` y `config-patterns.md`) como texto.
- Las leímos antes de usarlas. Comprobamos que la skill no incluye scripts y que sólo pide herramientas de lectura.
- Se la pasamos a un subagente de Claude Code en una conversación aparte, con la orden expresa de no ejecutar ni modificar nada. El intercambio completo está en [`conversaciones-ia/03-aplicacion-skill-publica-sharp-edges.md`](../conversaciones-ia/03-aplicacion-skill-publica-sharp-edges.md).

**Resultado: 10 hallazgos.** Para cada uno decidimos si aceptarlo y lo **comprobamos nosotros**, sin fiarnos de la IA:

| # | Hallazgo (categoría) | Gravedad dada | Nuestra decisión | Comprobación |
|---|---|---|---|---|
| SE-1 | `validarUsuario` devuelve un array, que en un `if` siempre es verdadero (fallo silencioso) | Alta | **Aceptado.** Añadimos `esUsuarioValido` y `esEdadValida`, que devuelven un booleano, y los tests las usan. | Tests nuevos en verde |
| SE-2 | `String(valor)` hace que `undefined` pase como el usuario "undefined" (valor por defecto peligroso) | Media | **Aceptado.** Si el valor no es una cadena, todas las reglas fallan. | Test con `undefined`, `null`, `["ana"]` y `17`: antes pasaban, ahora se rechazan |
| SE-3 | `escaparHTML` no sirve para URLs ni para atributos sin comillas, y el comentario decía "atributo HTML" sin más (*stringly-typed*) | Media | **Aceptado.** Reescribimos el comentario con los contextos en los que sí es segura. | Contrastado con la OWASP XSS Prevention Cheat Sheet |
| SE-4 | Plantillas con `innerHTML`: la seguridad depende de no olvidar nunca el escape | Media | **Aceptado en parte.** Añadimos una **Content-Security-Policy** a `index.html` como defensa en profundidad. **Rechazamos** reescribir todo con `createElement`: todas las interpolaciones actuales están escapadas (la propia skill lo confirma) y el código perdería legibilidad para los compañeros. | Prueba en Chrome: la página funciona con la CSP y no hay violaciones en la página principal |
| SE-5 | `analizarHTML` es una lista negra que no detecta `<svg><script>` ni `jav&#x09;ascript:`, y decía "sólo formato" (fallo silencioso) | Media | **Aceptado.** Usamos `localName`, comprobamos el protocolo con `new URL()`, marcamos `iframe`, `srcdoc`, `base`, `meta`, `form`, etc., y el mensaje ahora avisa de que es una lista incompleta. | **Verificado en Chrome antes de corregir:** `tagName` de un script SVG es `"script"` en minúsculas, la expresión regular antigua no detectaba el tabulador y `new URL()` sí devuelve `javascript:`. Después de corregir, el arnés de pruebas detecta las tres cargas. |
| SE-6 | El `srcdoc` sólo es seguro gracias a `sandbox=""` en otro fichero, y el sandbox no bloquea las peticiones de red (precipicio de configuración) | Alta por diseño, Baja real | **Aceptado.** El JS comprueba que el sandbox sigue vacío antes de escribir, y el `srcdoc` lleva su propia CSP `default-src 'none'`. | Arnés en Chrome: el `srcdoc` contiene la CSP y el `onerror` queda bloqueado (aparece la violación `script-src-attr`) |
| SE-7 | `iteraciones` admite 1 y no tiene máximo | Media | **Aceptado en parte.** Añadimos un máximo de 10 millones. **Mantenemos el mínimo de 1** porque hace falta para comprobar el vector de prueba del RFC 7914 (c = 1); queda documentado en un comentario. | Test con `MAX + 1` → `RangeError` |
| SE-8 | La sal es una primitiva: se aceptan sales cortas o constantes y no hay función de verificación | Media | **Rechazado**, con un comentario explicativo. No es una API para guardar contraseñas, sino una comparación didáctica. Exigir 16 bytes impediría usar el vector oficial (sal `"salt"`, 4 bytes). | — |
| SE-9 | `sha256(undefined)` da el mismo resultado que `sha256("")` (valor por defecto peligroso) | Alta | **Aceptado.** Si la entrada no es una cadena, se lanza `TypeError`. | Test nuevo |
| SE-10 | `sha256` se exporta sin advertencia | Baja | **Aceptado.** Añadimos el comentario "SÓLO PARA LA DEMO". | — |

## 5. Valoración crítica: qué aporta y qué límites tiene

**Lo que aporta:**

- **Nos obligó a pensar como el "desarrollador vago".** Nuestra demo era correcta *tal y como la usamos*, pero no si alguien la reutiliza. Sin la skill no habríamos visto SE-1 (un array siempre es verdadero en un `if`) ni SE-2 (`"undefined"` pasa la lista blanca), y los dos son errores reales que podríamos cometer en otro proyecto.
- **Encontró dos fallos verificables en nuestra lista de detección (SE-5)**, que habrían dado a los compañeros una falsa sensación de seguridad. Encaja con lo que queremos enseñar: una lista negra siempre tiene huecos.
- **Ilustra la §8.1 de los apuntes con ejemplos concretos** (*secure by default*) y la idea de defensa en profundidad (SE-6: no depender de un único atributo).

**Límites y riesgos que revisamos:**

- **Encaje imperfecto.** Está pensada para librerías y APIs, no para una página didáctica cuyo único consumidor es ella misma. Por eso el subagente tuvo que dar dos gravedades (por diseño y real), y varias referencias (YAML, variables de entorno, cifrado) no aplicaban.
- **No tiene categorías para el DOM.** No contempla `innerHTML`, CSP ni sandbox, y los hallazgos web se forzaron a encajar en las categorías 4, 5 y 6. Para la web, la OWASP XSS Prevention Cheat Sheet sigue siendo más directa.
- **Contradicción interna.** La fase 4 pide *reproducir* cada fallo, pero la skill sólo permite leer. Las reproducciones del subagente quedaron escritas sin ejecutar, así que **las verificamos nosotros** en Chrome y con los tests de Node.
- **Riesgo de exceso de celo.** La regla "rechaza la racionalización *nadie haría eso*" choca con un código inseguro **a propósito**, como el panel inseguro de la demo 2. Hubo que filtrar: por eso rechazamos SE-8 y parte de SE-4 y SE-7.
- **Seguridad de la propia skill.** La leímos entera antes de usarla. No contiene scripts y sólo pide `Read Grep Glob`. El plugin incluye un agente (`sharp-edges-analyzer`) que **no** instalamos ni ejecutamos. Tampoco descargamos las referencias de otros lenguajes ni `auth-patterns.md`, porque no aplicaban.
- **No sustituye a otras herramientas.** No detecta errores de implementación generales; para eso hacen falta SAST, tests y revisión de código (§8.5).

**Conclusión:** de 10 hallazgos aceptamos 7, aceptamos 2 en parte y rechazamos 1, con su justificación. La skill es **útil como lista de preguntas incómodas** sobre el diseño, pero requiere criterio humano para separar el riesgo real del teórico.

## 6. Conversación original

- [`conversaciones-ia/03-aplicacion-skill-publica-sharp-edges.md`](../conversaciones-ia/03-aplicacion-skill-publica-sharp-edges.md): ejecución de la skill sobre `js/demo.js`.
- [`conversaciones-ia/01-claude-code-produccion.md`](../conversaciones-ia/01-claude-code-produccion.md): búsqueda y elección de la skill, verificación de los hallazgos en Chrome y cambios en el código. Ver la fase 4 de [PROCESO.md](../PROCESO.md).
