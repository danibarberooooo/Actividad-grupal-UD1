# PROCESO.md · Registro del proceso y del uso de IA

**Grupo 5 · Tema:** Desarrollo seguro y mitigaciones (`pps1_06 seguridad_lenguajes.md`)
**Herramienta de IA usada:** Claude Code (CLI de Anthropic), modelo Claude Opus 5.5, en Windows. Algunas tareas se delegaron en **subagentes**: instancias nuevas del modelo, sin acceso a la conversación principal. Las usamos cuando hacía falta una "conversación distinta", como en la prueba de la skill propia.

> **Transparencia:** casi todo el material de este repositorio lo generó Claude Code el 26/10/2026, a partir de una única petición amplia de Daniel B. ("hazme todo lo que pide"), en la conversación [`01`](conversaciones-ia/01-claude-code-produccion.md). Las decisiones de las fases 1 a 4 las **propuso y aplicó la IA**, y así se indica en el campo *Participación*. La sección [Revisión del grupo](#revisión-del-grupo) recoge lo que los cuatro integrantes deben revisar, decidir y firmar antes de entregar. No presentamos como decisiones del grupo las que todavía no hemos revisado.

## Organización del equipo

| Responsabilidad | Sesión 1 | Sesión 2 | Sesión 3 |
|---|---|---|---|
| Contenido (síntesis, glosario, fuentes) | Guillermo A. | Juan R. | Pablo V. |
| Verificación (afirmaciones, ejemplos, enlaces) | Juan R. | Pablo V. | Daniel B. |
| Web y publicación (estructura, accesibilidad, GitHub Pages) | Daniel B. | Guillermo A. | Juan R. |
| Apoyo y revisión (relectura completa, prueba en móvil, segunda prueba de la skill con otra IA) | Pablo V. | Daniel B. | Guillermo A. |

Somos **cuatro** integrantes (Daniel B., Guillermo A., Juan R. y Pablo V.), no tres, así que se añade el rol de *apoyo y revisión*. Cada persona pasa por tres roles distintos y en cada sesión están cubiertos los cuatro. *(Rotación propuesta, pendiente de confirmar por el grupo.)*

## Índice de conversaciones

| Archivo | Fases | Contenido |
|---|---|---|
| [`00-claude-code-plan-inicial.md`](conversaciones-ia/00-claude-code-plan-inicial.md) | 0, 1, 2 | Lectura del enunciado y primera propuesta de plan |
| [`01-claude-code-produccion.md`](conversaciones-ia/01-claude-code-produccion.md) | 1–5 | Conversación principal: alcance, web, demos, skills, verificaciones y anonimización |
| [`02-prueba-skill-propia-v1.0.md`](conversaciones-ia/02-prueba-skill-propia-v1.0.md) | 4 | Prueba 1 de la skill propia, en una conversación nueva |
| [`03-aplicacion-skill-publica-sharp-edges.md`](conversaciones-ia/03-aplicacion-skill-publica-sharp-edges.md) | 4 | Aplicación de la skill pública a `js/demo.js` |
| [`04-prueba-skill-propia-v1.1.md`](conversaciones-ia/04-prueba-skill-propia-v1.1.md) | 4 | Prueba 2 de la skill propia (versión mejorada), en una conversación nueva |

---

## Fase 0 · Leer el enunciado y hacer un primer plan

| Campo | Registro |
|---|---|
| **Objetivo** | Entender qué se entrega, cuánto puntúa cada parte y proponer un alcance inicial. |
| **Herramienta** | Claude Code. Análisis del enunciado y propuesta de plan. |
| **Prompt** | Se pegó el enunciado completo de la tarea grupal (sin más instrucciones). |
| **Resultado** | Tabla de entregables con su peso en la rúbrica (PROCESO + conversaciones = 30 puntos), aviso de usar `/export` en lugar de *Copy All*, duda sobre si había una sección de "mitigaciones", 7 ideas clave propuestas, demo de XSS + SHA-256, skill propia "revisión de datos sensibles" y tres preguntas al grupo. |
| **Decisión** | Aceptamos la estructura general, la demo de XSS y la idea de exportar las conversaciones. Más tarde se cambiaron varias cosas (ver fase 1). |
| **Justificación** | El plan coincidía con el enunciado y con la rúbrica. Las tres preguntas quedaron sin responder porque en la siguiente conversación se pidió a la IA que lo hiciera todo. |
| **Verificación** | Contrastamos la tabla de puntos con la rúbrica del enunciado: coincide. |
| **Participación** | Daniel B. (lanzó la consulta). |
| **Conversación de origen** | `00-claude-code-plan-inicial.md` |

## Fase 1 · Comprender y delimitar el alcance

| Campo | Registro |
|---|---|
| **Objetivo** | Elegir qué secciones de los apuntes se explican y cuáles quedan fuera, y justificarlo. |
| **Herramienta** | Claude Code. Lectura de los apuntes locales (`pps1_06 seguridad_lenguajes.md`) y propuesta de alcance. |
| **Prompt** | «tienes que hacerme esto [enunciado] sobre este punto [sección 8 de los apuntes], hazme todo lo que pide por favor» |
| **Resultado** | Al leer el fichero completo, la IA encontró que la "sección de mitigaciones" por la que se preguntaba en la fase 0 existe: es la **§6.3** (ASLR, NX/DEP, *stack canaries*), junto con la §6.2 (contraseñas). La IA propuso el alcance de la tabla siguiente. |
| **Decisión** | Alcance = **§8 completa + §6.2 + §6.3**, con la §1 (defensa en profundidad) como marco. **Cambios respecto al plan de la fase 0:** (a) se incluye la §6.3, porque el enunciado dice "desarrollo seguro **y mitigaciones**"; (b) cadena de suministro y DoS dejan de estar fuera y se integran en las ideas 5 y 3, porque así se cubren las 9 subsecciones de la §8 sin pasar de 7 ideas. |
| **Justificación** | Ver la tabla de alcance. Lo que se excluye ya lo cubren otros bloques o desviaría el tema hacia la seguridad de los lenguajes en general. |
| **Verificación** | Comprobamos que cada subsección de la §8 tiene al menos una idea clave, término del glosario o fase del SSDLC que la cubre (tabla de cobertura). |
| **Participación** | Propuesta y aplicada por la IA. Pendiente de validar por el grupo. |
| **Conversación de origen** | `01-claude-code-produccion.md` (inicio) |

### Tabla de alcance

| Sección de los apuntes | ¿Se incluye? | Dónde | Por qué |
|---|---|---|---|
| §1 Seguridad por capas | Como marco | Introducción, idea 1 | Sin la idea de defensa en profundidad no se entiende el resto. |
| §2 Seguridad de memoria | ❌ | — | Es seguridad del lenguaje, no del proceso de desarrollo. Sólo se menciona en la idea 7, para explicar a qué sirven las mitigaciones. |
| §3 Modelos de ejecución | ❌ | — | Fuera del bloque. |
| §4.1 `eval` e inyección | Parcial | Idea 3, demo 2 | Aporta la regla "los datos deben permanecer como datos", base de la validación frente a la codificación. |
| §4.2–4.3 Deserialización, reflexión | ❌ | — | Se mencionan sólo en la skill propia, como destinos peligrosos. |
| §5 Sandboxing y kernel | ❌ | — | Otro tema. El sandbox se usa en la demo, pero no se explica. |
| §6.1 Mínimo privilegio y vulnerabilidades web | ✅ | Ideas 2, 3 y 4 | Mínimo privilegio, SQLi, XSS y autorización en APIs. |
| §6.2 Contraseñas | ✅ | Idea 6, demo 3 | Es parte de las "mitigaciones" y se puede demostrar en el navegador. |
| §6.3 Mitigaciones del compilador y del SO | ✅ | Idea 7, glosario | Lo pide el enunciado ("y mitigaciones"). Se subraya que **no eliminan la vulnerabilidad**. |
| §7 `sudo-rs` | ❌ | — | Caso de estudio de seguridad de memoria (§2), no de desarrollo seguro. |
| §8.1–8.9 | ✅ | Las 7 ideas, el glosario y el diagrama | Es el núcleo del bloque. |

### Tabla de cobertura de la §8

| Subsección | Cubierta en |
|---|---|
| 8.1 Modelado de amenazas | Idea 2; glosario: activo, superficie de ataque, frontera de confianza, mínimo privilegio, seguro por defecto |
| 8.2 Validación y codificación | Idea 3, demos 1 y 2; glosario |
| 8.3 Autenticación, autorización y sesiones | Idea 4; glosario |
| 8.4 Cadena de suministro | Idea 5; glosario: cadena de suministro, SBOM |
| 8.5 Pruebas | Idea 7; glosario: SAST, DAST, fuzzing, sanitizador |
| 8.6 Secretos, errores y registros | Idea 5 |
| 8.7 Criptografía | Idea 6, demo 3; glosario: sal |
| 8.8 DoS | Idea 3 (límites de tamaño); glosario: DoS, *rate limiting* |
| 8.9 SSDLC | Idea 1, diagrama SSDLC; glosario |

## Fase 2 · Planificar

| Campo | Registro |
|---|---|
| **Objetivo** | Diseñar la web, elegir la demostración y decidir para qué se usa la IA. |
| **Herramienta** | Claude Code. Diseño de la estructura. |
| **Prompt** | El mismo de la fase 1 (la IA planificó a partir de él). |
| **Resultado** | Web de una sola página: portada → introducción → 7 ideas → 3 demos → diagrama SSDLC → glosario con buscador → fuentes. HTML, CSS y JS sin dependencias externas, para GitHub Pages. |
| **Decisión** | (1) **Tres demos interactivas** en lugar de una: validación con lista blanca (§8.2), codificación de salida frente a XSS (§8.2/§6.1) y SHA-256 frente a PBKDF2 (§6.2/§8.7). (2) Diagrama SSDLC con HTML (`<details>`) en lugar de una imagen, para que sea accesible y se adapte al móvil. (3) **Cambio de la skill propia:** de "revisión de datos sensibles" (fase 0) a **"revisión de entradas y salidas"**. (4) Sin bibliotecas externas. |
| **Justificación** | (1) La validación y la codificación son la diferencia clave de la §8.2 y se confunden fácilmente: dos demos separadas lo dejan claro. La demo 3 hace visible algo que suele creerse sin comprobarlo (que SHA-256 es "rápido"). (3) La skill de entradas y salidas está más ligada al núcleo del tema (§8.2) y a las demos. La revisión de datos sensibles se resolvió con un script de anonimización (fase 5), que es más fiable que una IA para esa tarea. (4) Menos superficie de ataque (§8.4) y nada que pueda dejar de funcionar. |
| **Verificación** | Comprobamos que la estructura cumple el apartado 3.1 del enunciado: introducción, entre 5 y 7 ideas, glosario de al menos 5 términos, demo y fuentes. |
| **Participación** | Propuesta y aplicada por la IA. Pendiente de validar por el grupo. |
| **Conversación de origen** | `01-claude-code-produccion.md` |

## Fase 3 · Investigar y producir

### 3.a Síntesis, ideas clave y glosario

| Campo | Registro |
|---|---|
| **Objetivo** | Redactar las 7 ideas clave y el glosario con palabras propias, a partir de los apuntes. |
| **Herramienta** | Claude Code. Redacción. |
| **Prompt** | El de la fase 1. La IA redactó a partir del texto de los apuntes leído en local. |
| **Resultado** | 7 ideas, cada una con un título en lenguaje llano, una explicación, un ejemplo y una referencia a la sección de los apuntes. 22 términos en el glosario. |
| **Decisión** | Cada idea lleva su referencia "Apuntes: §X" para poder contrastarla. Se añaden ejemplos que no están en los apuntes (la URL de facturas en la idea 4, el usuario de BD con permisos limitados en la idea 1). |
| **Justificación** | Los ejemplos concretos ayudan a entender. El de la idea 4 es el caso típico de OWASP A01 (control de acceso roto). |
| **Verificación** | Cada idea se contrastó con su sección de los apuntes, y las afirmaciones que van más allá de ellos con una fuente externa ([fuentes.md](evidencias/fuentes.md)). Ejemplo: los parámetros de PBKDF2 (600 000 iteraciones) se comprobaron en la OWASP Password Storage Cheat Sheet. |
| **Participación** | IA. **Pendiente:** que el responsable de contenido relea las 7 ideas y reescriba con sus palabras lo que no entienda o no le convenza. |
| **Conversación de origen** | `01-claude-code-produccion.md` |

### 3.b Web y demostraciones

| Campo | Registro |
|---|---|
| **Objetivo** | Construir `index.html`, `css/estilos.css` y `js/demo.js`. |
| **Herramienta** | Claude Code. Generación de código. |
| **Prompt** | El de la fase 1. |
| **Resultado** | Web adaptable al móvil, con modo oscuro, enlace para saltar al contenido, menú desplegable en móvil y etiquetas `aria-live` en los resultados. Las demos usan `DOMParser` (documento inerte), un `iframe` con `sandbox=""` para la vista insegura y la Web Crypto API para los hashes. |
| **Decisión** | La vista insegura de la demo 2 **no ejecuta** el JavaScript del atacante: se aísla en un iframe con sandbox y se *explica* qué habría pasado. La demo 3 usa **PBKDF2 en lugar de Argon2id**, y la web lo dice. |
| **Justificación** | Una web didáctica pública no debe ejecutar cargas de XSS, aunque sean inofensivas. Argon2id no está en la Web Crypto API y exigiría una biblioteca externa; PBKDF2 está aceptada por OWASP y demuestra la misma idea (coste + sal). |
| **Verificación** | Ver la fase 4.b. |
| **Participación** | IA. **Pendiente:** que el responsable de web pruebe la página en su móvil. |
| **Conversación de origen** | `01-claude-code-produccion.md` |

### 3.c Skill propia

| Campo | Registro |
|---|---|
| **Objetivo** | Crear una skill acotada, relacionada con el tema. |
| **Herramienta** | Claude Code. Redacción de `SKILL.md`. |
| **Prompt** | El de la fase 1 (requisitos del apartado 3.5 del enunciado). |
| **Resultado** | [`skills/revision-entradas-salidas/SKILL.md`](skills/revision-entradas-salidas/SKILL.md) v1.0: propósito con alcance y exclusiones, condiciones de uso, 9 pasos, formato de salida, ejemplo en Express y criterios de calidad con los casos que requieren revisión humana. |
| **Decisión** | Alcance limitado a fragmentos cortos y a flujos fuente → destino. La criptografía y la autorización quedan fuera, y sólo se mencionan en "Observaciones fuera de alcance". |
| **Justificación** | Una skill que lo revisa todo no se puede probar ni evaluar. Con un alcance estrecho, sus criterios de calidad sí son comprobables. |
| **Verificación** | Ver la fase 4.d (dos pruebas en conversaciones distintas). |
| **Participación** | IA. Pendiente de validar por el grupo. |
| **Conversación de origen** | `01-claude-code-produccion.md` |

### 3.d Búsqueda de la skill pública

| Campo | Registro |
|---|---|
| **Objetivo** | Encontrar una skill pública relacionada con el tema. |
| **Herramienta** | Claude Code. Consulta web de los repositorios `anthropics/skills` y `trailofbits/skills`. |
| **Prompt** | Interno de la IA: «List the skills/plugins in this repository with their exact names and paths, and the license.» |
| **Resultado** | Listado de los dos repositorios. En Trail of Bits, `insecure-defaults` resultó ser un *workflow* con muchos agentes, y `sharp-edges` un SKILL.md de 293 líneas que sólo pide permisos de lectura. |
| **Decisión** | Elegimos **`sharp-edges`**. Descartamos `insecure-defaults` y `frontend-design`. |
| **Justificación** | Trata el principio *secure by default* de la §8.1, se puede leer entero y no ejecuta código. Ver [skill-publica.md](evidencias/skill-publica.md#por-qué-la-elegimos). |
| **Verificación** | Descargamos el SKILL.md como texto y lo leímos antes de usarlo. Comprobamos la licencia (CC BY-SA 4.0) y el commit del fichero (`5f0a765`, 29/04/2026). |
| **Participación** | IA. Pendiente de validar por el grupo. |
| **Conversación de origen** | `01-claude-code-produccion.md` |

## Fase 4 · Verificar

### 4.a Fuentes y enlaces

| Campo | Registro |
|---|---|
| **Objetivo** | Comprobar que las fuentes existen y respaldan lo que se afirma. |
| **Herramienta** | Claude Code. `curl` y consulta de las páginas. |
| **Prompt** | Interno: «Give the exact recommended parameters for Argon2id, scrypt, bcrypt and PBKDF2…» (OWASP), y comprobación del código HTTP de cada enlace. |
| **Resultado** | Todos los enlaces externos devuelven 200, **salvo el de los apuntes** (`github.com/msolds/pps`), que devuelve **404 sin iniciar sesión** porque el repositorio es privado. |
| **Decisión** | Se **quitó el enlace** a los apuntes de la web y se cita como documento de acceso restringido, con su fecha y su commit. |
| **Justificación** | El enunciado exige que la web funcione sin iniciar sesión; un enlace roto la empeora. |
| **Verificación** | Además de los códigos HTTP, buscamos en las páginas de OWASP las frases que respaldan las afirmaciones: "allowlist", `textContent` como *sink* seguro, PBKDF2 y FIPS-140, y "SHA-256 no adecuado". |
| **Participación** | IA. **Pendiente:** que el responsable de verificación abra cada enlace de [fuentes.md](evidencias/fuentes.md) y confirme que dice lo que indicamos. |
| **Conversación de origen** | `01-claude-code-produccion.md` |

### 4.b Pruebas de la web y de las demos

| Campo | Registro |
|---|---|
| **Objetivo** | Comprobar que las demos funcionan, que los cálculos son correctos y que la web se lee bien en el móvil. |
| **Herramienta** | Claude Code. `node --test`, Chrome sin interfaz (*headless*) y un arnés de pruebas propio. |
| **Prompt** | Interno: la IA escribió los tests y el arnés. |
| **Resultado** | (1) **Tests de Node** ([`tests/demo.test.js`](tests/demo.test.js)): 11 en verde. Comprueban `sha256("abc")` contra el vector de **FIPS 180-2** y PBKDF2 contra el vector del **RFC 7914 §11**, además de la lista blanca, el escape y los parámetros no válidos. (2) **Arnés en Chrome** sobre un servidor HTTP local: rellena los formularios, pulsa los botones y lee los resultados. Las tres demos y el glosario funcionan, y PBKDF2 sale unas **10 000 veces** más lento que SHA-256 en el equipo de prueba (0,0116 ms frente a 116,8 ms). (3) **Móvil a 360 px**: ancho del documento de 345 px, sin desbordamiento horizontal, menú desplegable correcto (capturas revisadas). |
| **Decisión** | Se mantiene el diseño. La web dice que los tiempos dependen del equipo y que lo importante es la **proporción**. |
| **Justificación** | Los vectores oficiales prueban que la implementación es correcta, no sólo que "devuelve algo". |
| **Verificación** | Es la propia verificación. |
| **Participación** | IA. **Pendiente:** que el grupo pruebe la web publicada en sus móviles. |
| **Conversación de origen** | `01-claude-code-produccion.md` |

### 4.c Aplicación y valoración de la skill pública

| Campo | Registro |
|---|---|
| **Objetivo** | Aplicar `sharp-edges` a nuestro código y valorar su utilidad. |
| **Herramienta** | Subagente de Claude Code con la skill como instrucciones, en modo de **sólo lectura**. |
| **Prompt** | «Aplica la skill pública "sharp-edges" de Trail of Bits […] al fichero JavaScript de una web didáctica. […] Respeta los allowed-tools de la skill: sólo leer (Read, Grep, Glob). No ejecutes nada ni modifiques ningún fichero. Devuelve […] superficie identificada, cada sharp edge […], la Quality Checklist […], qué partes de la skill no encajan.» |
| **Resultado** | 10 hallazgos (SE-1 a SE-10), la lista de comprobación y 6 límites de la skill. |
| **Decisión** | **7 aceptados, 2 aceptados en parte (SE-4, SE-7) y 1 rechazado (SE-8)**. Cambios en `js/demo.js`, en `index.html` (CSP) y en los tests. Detalle en [skill-publica.md](evidencias/skill-publica.md#4-aplicación-en-el-proyecto). |
| **Justificación** | Aceptamos lo que mejora la demo o lo que enseña algo sin perder claridad. Rechazamos lo que convertiría la demo en una API de producción (SE-8) o lo que complicaría el código sin beneficio real (reescribir con `createElement`). |
| **Verificación** | **No dimos por buenos los hallazgos sin comprobarlos.** Verificamos en Chrome que `<svg><script>` tiene `tagName` en minúsculas y que `jav&#x09;ascript:` escapaba a la expresión regular antigua. Después de corregir, el arnés detecta las dos cargas y la de `<iframe srcdoc>`. La CSP bloquea el `onerror` dentro del iframe (violación `script-src-attr`) y la página sigue funcionando desde `file://` y por HTTP. Añadimos tests para SE-2, SE-7 y SE-9. |
| **Participación** | IA. Pendiente de validar por el grupo. |
| **Conversación de origen** | `03-aplicacion-skill-publica-sharp-edges.md` (ejecución) y `01-claude-code-produccion.md` (decisiones y verificación) |

### 4.d Prueba de la skill propia (dos rondas)

| Campo | Registro |
|---|---|
| **Objetivo** | Comprobar si las instrucciones de la skill sirven, en una conversación distinta de la de creación. |
| **Herramienta** | Dos subagentes nuevos de Claude Code, sin acceso a la conversación principal. |
| **Prompt** | «Usa la skill `revision-entradas-salidas` para revisar el código que te paso. Lenguaje: Python con Flask. Los datos de la tabla `productos` los pueden escribir los vendedores desde un panel web. […] lee SÓLO esos dos ficheros […] no ejecutes el código ni ningún comando.» (La prueba 2 usó el mismo prompt con Express.) |
| **Resultado** | Prueba 1 (v1.0): 9 flujos y todas las expectativas cumplidas, pero un informe muy largo, sin nombre de la vulnerabilidad y con agrupaciones ambiguas. Prueba 2 (v1.1): 4 flujos, todas las expectativas cumplidas y las 4 mejoras aplicadas. |
| **Decisión** | Publicamos la **v1.1**, con 4 mejoras, y conservamos la v1.0 en `evidencias/prueba-skill/`. |
| **Justificación** | Los problemas de la v1.0 afectaban a la utilidad didáctica (que el estudiante encuentre el nombre de la vulnerabilidad) y a la verificabilidad (identificadores de herramientas sin aviso). |
| **Verificación** | El **resultado esperado se escribió antes** de lanzar cada prueba, como queda reflejado en el orden de la conversación 01. El registro de los subagentes muestra que sólo leyeron `SKILL.md` y el fichero de prueba, así que no vieron lo esperado. Comprobamos las afirmaciones técnicas del resultado: autoescape de `render_template_string` (documentación de Flask), `Markup.__radd__` (código de markupsafe), Bandit B602/B608 (documentación de Bandit) y la opción `root` de `sendFile` frente a `..` (código de `pillarjs/send`). Detalle en [prueba-skill-propia.md](evidencias/prueba-skill-propia.md). |
| **Participación** | IA. Pendiente de validar por el grupo. **Recomendado:** repetir la prueba con Copilot Chat. |
| **Conversación de origen** | `02-prueba-skill-propia-v1.0.md`, `04-prueba-skill-propia-v1.1.md` y `01-claude-code-produccion.md` |

## Fase 5 · Publicar y revisar

| Campo | Registro |
|---|---|
| **Objetivo** | Dejar el repositorio listo para publicarlo sin exponer datos personales. |
| **Herramienta** | Claude Code. Script de exportación y anonimización. |
| **Prompt** | Interno de la IA. |
| **Resultado** | [`herramientas/exportar-conversacion.js`](herramientas/exportar-conversacion.js) convierte los historiales `.jsonl` de Claude Code en Markdown. Sustituye las rutas `C:\Users\…` por `<HOME>`, los correos por `<email>` y los términos que se le indiquen (apellido, usuario de Windows) por `<dato-personal>`. Después se buscaron en todo el repositorio el apellido, el usuario de Windows, el dominio del correo y las rutas `C:\Users`, sin ningún resultado. |
| **Decisión** | Exportar con el script en lugar de usar `/export` y editar a mano. El script **no está en GitHub Pages**; es una herramienta del repositorio. |
| **Justificación** | Anonimizar a mano 5 conversaciones largas es propenso a errores. El script es repetible y se puede revisar. |
| **Verificación** | `grep` final sobre todo el repositorio (ver la conversación 01). **Pendiente del grupo:** publicar en GitHub Pages, abrir la web sin iniciar sesión y revisar la web publicada en el móvil. Los enlaces ya apuntan a `danibarberooooo/Actividad-grupal-UD1`. |
| **Participación** | IA (preparación). **Pendiente:** publicación por el responsable de web. |
| **Conversación de origen** | `01-claude-code-produccion.md` |

---

## Registro de correcciones

| # | Qué estaba mal | Cómo se detectó | Corrección |
|---|---|---|---|
| 1 | El enlace a los apuntes daba 404 sin iniciar sesión | `curl` a todos los enlaces | Se cita sin enlace (fase 4.a) |
| 2 | `analizarHTML` no detectaba `<svg><script>` ni `jav&#x09;ascript:` | Skill pública (SE-5), verificado en Chrome | `localName` + `new URL().protocol` |
| 3 | `validarUsuario(undefined)` aceptaba "undefined" | Skill pública (SE-2) | `typeof` + tests |
| 4 | El iframe inseguro dependía sólo del atributo `sandbox` | Skill pública (SE-6) | Comprobación en JS + CSP en el `srcdoc` |
| 5 | La web no tenía CSP | Skill pública (SE-4) | `<meta http-equiv="Content-Security-Policy">` |
| 6 | La skill propia v1.0: informe largo, sin nombre de la vulnerabilidad | Prueba 1 | Skill v1.1 |
| 7 | `node --test tests/` (pasando la carpeta) fallaba con `MODULE_NOT_FOUND` en Node 24 | Ejecución de los tests | Se indica el fichero explícitamente: `node --test tests/demo.test.js` |
| 8 | Los enlaces a `PROCESO.md` y `README.md` desde la web no funcionarían en GitHub Pages (Jekyll convierte los `.md`) | Revisión del despliegue | Enlaces al repositorio de GitHub |

## Revisión del grupo

Antes de entregar, **cada integrante** debe revisar lo que le corresponde y marcarlo. Si algo se cambia, hay que añadirlo al registro de correcciones.

- [ ] **Todos:** leer la web completa y poder explicar las 7 ideas sin mirar (entrevista individual, fase 6).
- [ ] **Todos:** decidir si se acepta el alcance de la fase 1 y la elección de las skills, y cambiar en este documento "Pendiente de validar por el grupo" por los nombres de quienes participaron.
- [ ] **Contenido:** reescribir con sus palabras las ideas clave o las definiciones del glosario que no le convenzan.
- [ ] **Verificación:** abrir cada enlace de `fuentes.md` y confirmar lo que respalda. Probar las demos con valores propios.
- [ ] **Web:** crear el repositorio público `Actividad-grupal-UD1`, activar GitHub Pages y comprobar la web sin iniciar sesión y en el móvil. Los enlaces de `README.md` e `index.html` ya están cambiados.
- [ ] **Todos:** guardar en `conversaciones-ia/` **cualquier otra conversación con IA** que tengáis (Copilot, ChatGPT…) y añadir una fila en el índice.
- [x] Rellenar los nombres (nombre + inicial) en `README.md` y en la tabla de organización: Daniel B., Guillermo A., Juan R. y Pablo V.
