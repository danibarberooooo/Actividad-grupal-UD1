# Grupo 5 · Desarrollo seguro

Trabajo grupal de **Puesta en Producción Segura (PPS) · Unidad 1**: enseñar un tema de la unidad mediante una web pública, con ayuda de IA y documentando el proceso.

- **Tema asignado:** Bloque 5, *Desarrollo seguro y mitigaciones* (`pps1_06 seguridad_lenguajes.md`, §8 más §6.2–6.3).
- **Web publicada:** https://danibarberooooo.github.io/Actividad-grupal-UD1/
- **Repositorio:** https://github.com/danibarberooooo/Actividad-grupal-UD1

## Integrantes

El grupo tiene **cuatro integrantes**, en lugar de los tres previstos en el enunciado. Por eso, a los tres roles del enunciado se añade uno de **apoyo y revisión**. Los roles rotan en cada sesión (ver [PROCESO.md](PROCESO.md#organización-del-equipo)).

| Integrante | Sesión 1 | Sesión 2 | Sesión 3 |
|---|---|---|---|
| Daniel B. | Web y publicación | Apoyo y revisión | Verificación |
| Guillermo A. | Contenido | Web y publicación | Apoyo y revisión |
| Juan R. | Verificación | Contenido | Web y publicación |
| Pablo V. | Apoyo y revisión | Verificación | Contenido |

## Contenido del repositorio

| Ruta | Qué es |
|---|---|
| [`index.html`](index.html), [`css/`](css/), [`js/`](js/) | Web didáctica: introducción, 7 ideas clave, 3 demostraciones interactivas, diagrama SSDLC, glosario de 22 términos y fuentes. |
| [`tests/demo.test.js`](tests/demo.test.js) | Pruebas automáticas de las funciones de la demo (`node --test tests/demo.test.js`). |
| [`PROCESO.md`](PROCESO.md) | Registro del proceso por fases: objetivo, herramienta, prompt, resultado, decisión, justificación, verificación, participación y conversación de origen. |
| [`conversaciones-ia/`](conversaciones-ia/) | Conversaciones originales con IA, exportadas completas y anonimizadas. |
| [`evidencias/fuentes.md`](evidencias/fuentes.md) | Fuentes y qué afirmación respalda cada una. |
| [`evidencias/skill-publica.md`](evidencias/skill-publica.md) | Análisis y aplicación de la skill pública `sharp-edges` (Trail of Bits). |
| [`skills/revision-entradas-salidas/SKILL.md`](skills/revision-entradas-salidas/SKILL.md) | Skill propia: revisión didáctica de entradas no confiables y codificación de salidas. |
| [`evidencias/prueba-skill-propia.md`](evidencias/prueba-skill-propia.md) | Prueba de la skill propia: resultado esperado, obtenido, comparación y mejoras. |
| [`evidencias/preparacion-entrevista.md`](evidencias/preparacion-entrevista.md) | Tareas de cada integrante y guion de preguntas para la entrevista. |

## Ver la web en local

Abre `index.html` en el navegador. No necesita servidor ni dependencias. La demo de contraseñas usa la Web Crypto API, disponible en HTTPS, en `localhost` y en ficheros locales en Chrome, Edge y Firefox.

## Licencias

- Textos y código propios: CC BY-SA 4.0. Se usa esta licencia por compatibilidad con la skill de Trail of Bits analizada, que también es CC BY-SA 4.0.
- No se han usado imágenes externas. El icono y el diagrama están hechos con HTML, CSS y SVG propios.
