# Conversación 06 · Claude Code · Segunda revisión y cierre

> Exportado automáticamente del historial local de Claude Code (262 eventos).
> Se han anonimizado rutas locales, nombre de usuario y correo. Se omiten los recordatorios internos del sistema
> y el razonamiento interno del modelo. Las salidas de herramientas de más de 4000 caracteres se recortan.

## 👤 Usuario · 2026-10-26 17:23:04 UTC

<local-command-caveat>The command below was run directly in Claude Code, not sent to you as a request, and its output goes straight to the user. It's recorded here as context for later messages.</local-command-caveat>

## 👤 Usuario · 2026-10-26 17:23:04 UTC

<command-name>/clear</command-name>
            <command-message>clear</command-message>
            <command-args></command-args>

## 👤 Usuario · 2026-10-26 17:23:12 UTC

tienes que hacerme esto 

<pasted_content id="8df6">
Tarea grupal: enseñar un tema de PPS con ayuda de IA
1. Reto
Enseñad a otros compañeros uno de los temas de la unidad mediante una página web pública. Utilizad la inteligencia artificial (IA) como apoyo, pero comprobad la información y sed capaces de explicar tanto el tema como las decisiones tomadas durante el trabajo.

La clase se organizará en 5 grupos de 3 estudiantes. El trabajo está pensado para 2–3 sesiones.

La profesora asignará a cada grupo uno de los bloques temáticos.

El objetivo no es sólo generar una web con IA, sino comprender el tema, explicarlo con claridad, verificar los resultados y documentar el proceso seguido.

2. Bloques temáticos
Grupo    Tema    Material de partida y alcance
1    WSL y desarrollo en Linux    pps1_00 wsl.md y la sección sobre integración con WSL de pps1_02 vscode.md. Explicad un flujo de trabajo Windows/WSL.
2    Del código fuente a la ejecución    01 - Introducción a los lenguajes de programación.pdf y pps1_01 proceso compilación.md.
3    VS Code y Emmet    Selección de pps1_02 vscode.md sobre interfaz, edición y extensiones, más los operadores esenciales y ejemplos de pps1_04 emmet.md.
4    Depuración    pps1_03 debug.md. Explicad y demostrad con un depurador cómo localizar y explicar un error. Podéis usar el depurador y el programa que prefiráis.
5    Desarrollo seguro    Desarrollo seguro y mitigaciones de pps1_06 seguridad_lenguajes.md
Cada grupo dispone de todos los apuntes de la unidad y decide el alcance concreto de su bloque: elegirá las secciones prioritarias en la Fase 1 y las justificará en PROCESO.md.

3. Entregables
Cada grupo creará un repositorio público en GitHub que contendrá todos los archivos del proyecto.

3.1. Web didáctica publicada
La web se publicará mediante GitHub Pages y estará dirigida a compañeros que necesiten aprender el tema.

Debe incluir:

Una introducción breve al tema y a su utilidad.
Entre 5 y 7 ideas clave, explicadas con palabras propias.
Un glosario de al menos 5 términos.
Una demostración, ejemplo práctico o diagrama relacionado con el tema.
Las fuentes utilizadas, identificadas mediante enlaces o referencias claras.
La web debe ser clara, navegable y legible tanto en ordenador como en una pantalla estrecha.

3.2. Registro del proceso: PROCESO.md
Este archivo documentará cómo se ha realizado el trabajo y cómo se ha utilizado la IA.

Para cada fase relevante, indicad:

Objetivo: qué queríais conseguir.
Herramienta: qué IA utilizasteis y para qué tarea.
Prompt: la instrucción representativa utilizada.
Resultado: qué respuesta o propuesta relevante obtuvisteis.
Decisión: qué aceptasteis, modificasteis o rechazasteis.
Justificación: por qué tomasteis esa decisión.
Verificación: cómo comprobasteis la información o el resultado y qué observasteis.
Participación: qué integrantes participaron en la decisión.
Conversación de origen: nombre del archivo que contiene el intercambio original.
No es necesario copiar manualmente las conversaciones completas dentro de PROCESO.md: se conservarán en la carpeta indicada a continuación.

El registro debe permitir entender el proceso y contrastar las decisiones declaradas con las conversaciones originales y el resultado final.

3.3. Conversaciones originales con IA
Debéis conservar todas las conversaciones con IA mantenidas durante el proyecto, sin seleccionar solo las que os parezcan mejores. No basta con redactar posteriormente un resumen de lo que supuestamente se preguntó a la IA.

Si utilizáis GitHub Copilot Chat en VS Code, utilizad Copy All para copiar la conversación completa y guardadla en un archivo Markdown (.md).

Procedimiento:

Abrid la conversación de Copilot utilizada.
Localizad la opción Copy All en el menú contextual de la conversación. Su ubicación puede variar según la versión.
Copiad el contenido completo disponible.
Pegadlo en un archivo Markdown, sin reescribir ni resumir el intercambio.
Guardad el archivo en conversaciones-ia/.
Indicad en PROCESO.md qué decisiones o resultados están relacionados con esa conversación.
Conservad todas las conversaciones con IA del proyecto, incluidas la de creación de la skill propia y la de su prueba.

Si una herramienta no permite copiar el historial completo, explicad la limitación en conversaciones-ia/README.md y entregad el registro más completo que permita obtener.

Una conversación copiada no constituye una prueba infalible de autenticidad, pero permite contrastar mejor el proceso que un resumen elaborado únicamente por el grupo.

3.4. Skill pública: evidencias/skill-publica.md
Cada grupo localizará y estudiará una skill pública relacionada con una tarea del proyecto, ya sea con la web que estáis generando o con cualquier tema tratado en la unidad.

El documento debe incluir:

Nombre y enlace a la fuente original.
Propósito de la skill.
Tarea concreta para la que se diseñó.
Aplicación que se hizo en el proyecto y resultado obtenido.
Límites, riesgos o aspectos que se revisaron.
Referencia a la conversación original relacionada con su utilización, cuando corresponda.
Debéis explicar qué aporta la skill y valorar críticamente su utilidad. No basta con copiar su descripción.

No ejecutéis código incluido en una skill ni le concedáis permisos sin comprender antes qué hace y qué implicaciones tiene.

3.5. Skill propia: skills/<nombre-skill>/SKILL.md
Cada grupo creará una skill propia, relacionada con el tema asignado o con una tarea concreta del proyecto.

El archivo debe incluir:

Propósito: qué tarea resuelve y qué queda fuera de su alcance.
Instrucciones: pasos claros que debe seguir la IA.
Condiciones de uso: información de entrada necesaria y limitaciones relevantes.
Ejemplo: una entrada y el resultado esperado.
Criterios de calidad: cómo reconocer un resultado correcto y cuándo debe revisarse.
Además, entregaréis evidencias/prueba-skill-propia.md, que debe incluir:

La entrada utilizada.
El resultado esperado, definido antes de la prueba.
El resultado obtenido.
La comparación entre ambos.
Los errores o limitaciones detectados y las mejoras realizadas, si las hubo.
La referencia a la conversación original que documenta la prueba.
No basta con crear el archivo SKILL.md: debéis probar la skill con un caso concreto y comprobar si sus instrucciones son útiles.

La skill propia puede crearse con ayuda de IA, pero el grupo debe revisar y comprender lo que se haya generado. La prueba debe realizarse en una conversación distinta de aquella en la que se creó la skill.

3.6. Fuentes: evidencias/fuentes.md
Incluid los documentos de partida y las fuentes adicionales utilizadas.

Para cada fuente, indicad el título, el enlace cuando exista y qué información del trabajo ayuda a respaldar.

No presentéis contenido generado por IA como si fuera una fuente verificada. Si una afirmación importante no ha podido comprobarse, indicadlo.

4. Estructura del repositorio
La entrega seguirá esta estructura básica. Podéis añadir los archivos necesarios para la web y la demostración.

repositorio/
├── README.md
├── index.html
├── PROCESO.md
├── conversaciones-ia/
├── evidencias/
│   ├── fuentes.md
│   ├── skill-publica.md
│   └── prueba-skill-propia.md
└── skills/
    └── nombre-skill/
        └── SKILL.md
README.md identificará el grupo, sus integrantes (nombre e inicial del apellido) y el tema asignado, e incluirá el enlace a la web publicada.

5. Fases de trabajo
Fase 1. Comprender y delimitar
Leed el material asignado.
Identificad las ideas prioritarias y las relaciones entre ellas.
Acordad qué contenidos vais a explicar y cuáles quedan fuera del alcance.
Elegid las secciones prioritarias de vuestro bloque y justificad la elección en PROCESO.md.
Fase 2. Planificar
Diseñad la estructura de la web.
Elegid la demostración o el ejemplo práctico.
Repartid las tareas.
Decidid qué actividades pueden beneficiarse de la IA.
Registrad el plan inicial en PROCESO.md.
Fase 3. Investigar y producir
Elaborad la síntesis y el glosario.
Consultad fuentes fiables.
Utilizad IA cuando aporte valor.
Conservad las conversaciones originales mediante Copy All o el mecanismo equivalente disponible.
Preparad la web y las dos skills (la skill propia puede crearse con ayuda de IA).
Fase 4. Verificar
Contrastad las afirmaciones importantes con los apuntes y otras fuentes.
Probad los ejemplos y la demostración.
Comprobad los enlaces y la navegación.
Probad la skill propia en una conversación distinta de la usada para crearla.
Valorad el resultado de la skill pública.
Registrad las decisiones y correcciones en PROCESO.md.
Fase 5. Publicar y revisar
Publicad la web con GitHub Pages.
Comprobad que se abre sin iniciar sesión.
Revisad la visualización en una pantalla estrecha.
Comprobad que los archivos y enlaces funcionan.
Revisad los archivos antes de publicar para evitar exponer información sensible.
Fase 6. Entrevista y preguntas individuales
No habrá exposición. La profesora realizará una entrevista corta a cada grupo, con preguntas individuales. Cada integrante debe poder explicar el tema, justificar alguna decisión tomada con IA y describir las skills utilizadas.

6. Organización del equipo
Repartid y rotad estas responsabilidades:

Contenido: síntesis, glosario y fuentes.
Verificación: comprobación de afirmaciones, ejemplos y enlaces.
Web y publicación: estructura, legibilidad, accesibilidad básica y GitHub Pages.
Las responsabilidades no eximen a nadie de participar en las decisiones importantes. Las tres personas deben contribuir al trabajo y comprender el resultado.

7. Publicación y seguridad
El repositorio y la web deben ser públicos.
Revisad las conversaciones de IA antes de subirlas. No publiquéis contraseñas, tokens, claves de API ni datos personales, y comprobad que no incluyan rutas locales u otra información que identifique a alguien.
En README.md y PROCESO.md identificaos únicamente con vuestro nombre de pila y la inicial del primer apellido (por ejemplo, «Ana G.»). No incluyáis apellidos completos ni otros datos personales.
Citad las fuentes de textos, imágenes, diagramas y ejemplos.
Respetad las licencias y condiciones de uso.
No presentéis respuestas de IA como información verificada sin contrastarlas.
No ejecutéis instrucciones de una skill sin comprender sus efectos.
8. Entrega
La entrega consiste en un único enlace al repositorio de GitHub.

El repositorio debe contener todos los archivos obligatorios y el enlace a la web publicada.

9. Rúbrica de evaluación
La puntuación máxima es de 100 puntos.

Se valorará la calidad de las evidencias y la posibilidad de comprobarlas, no la cantidad de texto ni el número de archivos creados.

Escala de desempeño
4 — Excelente: evidencia completa, clara, correcta y verificable.
3 — Adecuado: cumple el requisito con pequeñas omisiones.
2 — Parcial: cumple solo una parte o la evidencia es superficial.
1 — Insuficiente: evidencia muy incompleta o con deficiencias importantes.
0 — Sin evidencia: no se presenta evidencia evaluable.
La puntuación de cada criterio se calcula como nivel obtenido dividido entre 4 y multiplicado por los puntos máximos.

Si falta algún elemento obligatorio de un criterio, el nivel máximo que puede obtenerse en ese criterio es 3.

Criterio 1. Adecuación al tema asignado — 15 puntos
Evidencias: web, PROCESO.md y material de partida.

4: desarrolla el bloque asignado, cubre las secciones prioritarias que el grupo eligió y justificó, y respeta el alcance definido. Explica correctamente los conceptos y relaciones principales.
3: desarrolla correctamente el tema, con alguna omisión menor.
2: cubre solo parte del bloque, omite ideas importantes o incluye demasiado contenido secundario.
1: el contenido se ajusta poco al bloque o presenta lagunas importantes.
0: no hay evidencia suficiente para identificar el tema desarrollado.
Criterio 2. Claridad didáctica y fuentes — 10 puntos
Evidencias: web y evidencias/fuentes.md.

4: la explicación es comprensible, utiliza palabras propias, incluye entre 5 y 7 ideas clave y un glosario de al menos 5 términos. Las fuentes son identificables y respaldan las afirmaciones importantes.
3: cumple los requisitos, con pequeñas imprecisiones o alguna referencia insuficiente.
2: la explicación es superficial, las fuentes son incompletas o varias afirmaciones no están respaldadas.
1: predomina la copia, hay errores importantes o las fuentes son deficientes.
0: no presenta contenido didáctico evaluable ni fuentes comprobables.
Criterio 3. Trazabilidad y verificación del uso de IA — 30 puntos
Evidencias: PROCESO.md y conversaciones-ia/.

4: documenta objetivos, prompts, resultados, decisiones y verificaciones. Conserva todas las conversaciones del proyecto y las relaciona con el proceso descrito. Justifica las decisiones y aporta comprobaciones concretas.
3: documenta los elementos principales y conserva las conversaciones, aunque faltan algunos detalles.
2: hay registros incompletos, decisiones poco justificadas o verificaciones superficiales.
1: el proceso es difícil de reconstruir, faltan evidencias importantes o el registro es principalmente declarativo.
0: no presenta un registro evaluable del uso de IA.
Criterio 4. Análisis y utilización de una skill pública — 10 puntos
Evidencias: evidencias/skill-publica.md y fuente original.

4: identifica la fuente, explica la finalidad e instrucciones relevantes, documenta una aplicación concreta y analiza límites o riesgos.
3: explica la skill y su uso, pero el análisis crítico está poco desarrollado.
2: presenta una descripción general, sin evidencias suficientes de aplicación o comprensión.
1: aporta un enlace o una descripción superficial.
0: no presenta una skill pública evaluable.
Criterio 5. Diseño, prueba y mejora de la skill propia — 15 puntos
Evidencias: skills/<nombre-skill>/SKILL.md y evidencias/prueba-skill-propia.md.

4: define un propósito acotado, instrucciones claras y criterios de calidad. Documenta una prueba, compara el resultado con el esperado y justifica las mejoras.
3: la skill es utilizable y está probada, aunque falta detalle en la evaluación.
2: las instrucciones son ambiguas o la prueba no permite valorar bien la utilidad.
1: el archivo es principalmente descriptivo o no contiene una prueba válida.
0: no hay una skill propia evaluable.
Criterio 6. Funcionamiento de la web y demostración — 15 puntos
Evidencias: GitHub Pages y ejemplo práctico.

4: la web es pública, navegable y legible; la demostración funciona o el ejemplo está explicado y es verificable.
3: la web y la demostración cumplen su función, con pequeños problemas.
2: hay deficiencias importantes de navegación, claridad o demostración.
1: existen problemas graves de acceso o la demostración apenas aporta evidencia.
0: no hay una web o demostración evaluable.
Criterio 7. Comprensión individual y colaboración — 5 puntos
Evidencias: entrevista con preguntas individuales y contribuciones documentadas.

4: las tres personas explican el contenido, justifican decisiones de IA y conocen su contribución.
3: el grupo comprende el trabajo, aunque alguna persona necesita ayuda puntual.
2: la comprensión es desigual o varias respuestas se limitan a repetir el contenido.
1: apenas se justifican las decisiones o no se acredita suficientemente la participación.
0: no hay evidencia evaluable de comprensión individual.
Resumen de ponderaciones
Criterio    Puntos
Adecuación al tema asignado    15
Claridad didáctica y fuentes    10
Trazabilidad y verificación del uso de IA    30
Skill pública    10
Skill propia    15
Web y demostración    15
Comprensión individual y colaboración    5
Total    100
10. Lista de comprobación
 El repositorio y la web son públicos y funcionan sin iniciar sesión.
 La web desarrolla el bloque asignado.
 Incluye entre 5 y 7 ideas clave, un glosario y fuentes.
 Contiene una demostración o ejemplo práctico.
 PROCESO.md documenta el uso de IA y las decisiones tomadas.
 conversaciones-ia/ contiene todas las conversaciones originales con IA del proyecto.
 La skill pública tiene una fuente y un análisis crítico.
 La skill propia incluye un SKILL.md y una prueba documentada.
 README.md identifica al grupo, a sus integrantes (nombre e inicial del apellido), el tema y el enlace a la web.
 evidencias/fuentes.md recoge los documentos de partida y las fuentes adicionales.
 Las conversaciones se han revisado antes de subirlas y no hay datos sensibles ni información que identifique a alguien.
 Las tres personas han participado y pueden explicar el trabajo.
Objetivo final: demostrar que comprendéis el tema asignado, que utilizáis la IA de forma crítica y que podéis justificar y verificar las decisiones que habéis tomado.
</pasted_content id="8df6">

, sobre este punto 

<pasted_content id="8df6">
8. Desarrollo Seguro, Validación y Gestión del Ciclo de Vida del Software
La seguridad de un programa no depende exclusivamente del lenguaje de programación, del compilador o de las protecciones del sistema operativo. También requiere un proceso de desarrollo seguro que permita identificar amenazas, prevenir vulnerabilidades, verificar las medidas defensivas y mantener la aplicación protegida durante todo su ciclo de vida.

8.1. Modelado de Amenazas y Diseño Seguro
El modelado de amenazas (Threat Modeling) analiza el sistema antes de implementar el código para guiar la selección de controles defensivos:

Activos: Información confidencial, credenciales, claves criptográficas, recursos informáticos y servicios críticos.
Superficie de ataque: Interfaces de red, archivos, APIs, entradas de usuario, bibliotecas externas y mecanismos de comunicación entre procesos.
Fronteras de confianza: Límites entre componentes con distintos niveles de privilegio o entre datos confiables y no confiables.
Amenazas: Acceso no autorizado, ejecución de código, divulgación de información, manipulación de datos y denegación de servicio.
Principios fundamentales de diseño:

Mínimo privilegio (Least Privilege): Cada componente debe disponer únicamente de los permisos estrictamente necesarios para cumplir su función.
Valores predeterminados seguros (Secure by Default): Las configuraciones iniciales deben restringir accesos y operaciones peligrosas por defecto.
8.2. Validación de Entradas y Prevención de Inyecciones
Toda entrada procedente de usuarios, archivos, APIs o sistemas externos se debe considerar no confiable hasta verificar que cumple las restricciones esperadas (tipo de dato, longitud máxima, rango, formato, codificación y reglas de dominio).

Diferencia clave: Validación vs. Codificación de Salidas
Validación de entradas: Comprueba que los datos recibidos cumplen determinadas reglas de formato y estructura.
Codificación contextual de salidas (Output Encoding): Transforma los datos antes de presentarlos para evitar que se interpreten como código o instrucciones en el contexto de destino (HTML, JavaScript, SQL, etc.).
8.3. Autenticación, Autorización y Gestión de Sesiones
La seguridad de una aplicación requiere distinguir claramente tres conceptos:

Autenticación: Verifica la identidad de un usuario, servicio o proceso.
Autorización: Comprueba qué recursos y operaciones tiene permitidos una identidad previamente autenticada. Debe verificarse en cada operación sensible y no asumir que una autenticación previa concede permisos globales.
Gestión de sesiones: Controla la creación, utilización, expiración, almacenamiento seguro y revocación de cookies de sesión, tokens y credenciales.
8.4. Gestión de Dependencias y Cadena de Suministro (Software Supply Chain)
Las bibliotecas de terceros, compiladores, frameworks y herramientas de construcción forman parte de la superficie de ataque. Una vulnerabilidad puede introducirse de forma indirecta aunque el código desarrollado por el equipo no contenga el defecto original.

SBOM (Software Bill of Materials): Mantener un inventario detallado de componentes y dependencias.
Gestión de versiones: Fijar, verificar e inspeccionar dependencias ante vulnerabilidades conocidas antes de actualizar.
Proceso de compilación seguro: Proteger los repositorios de código, credenciales de publicación y verificar la procedencia e integridad de los artefactos de construcción.
8.5. Pruebas y Análisis de Seguridad
Ninguna herramienta por sí sola detecta la totalidad de los defectos de seguridad; se requiere la combinación de técnicas complementarias:

Análisis Estático (SAST): Inspecciona el código fuente sin ejecutarlo para detectar flujos de datos peligrosos, errores de programación y usos inseguros de APIs.
Análisis Dinámico (DAST): Evalúa la aplicación en ejecución enviando peticiones de prueba a sus interfaces para identificar vulnerabilidades observables.
Fuzzing: (pruebas difusas) Genera grandes volúmenes de entradas malformadas o inesperadas para detectar caídas, desbordamientos o comportamientos anómalos.
Sanitizadores En lenguajes como C y C++, se complementa con sanitizadores de memoria como AddressSanitizer y MemorySanitizer.
Revisiones de código y Pentesting: Evalúan la lógica de negocio, reglas funcionales y las decisiones de diseño arquitectónico.
Pruebas de regresión de seguridad: Garantizan que los parches aplicados no se pierdan durante futuras modificaciones.
8.6. Gestión Segura de Secretos, Errores y Registros
Secretos: Las claves API, credenciales de bases de datos, tokens y claves criptográficas nunca deben incluirse en el código fuente ni en repositorios. Deben almacenarse en gestores de secretos con rotación y control de acceso explícito.
Gestión de errores: Los mensajes de error al usuario no deben revelar información interna del sistema que facilite un ataque. Los registros internos deben permitir auditar e investigar incidentes sin almacenar datos confidenciales innecesarios (contraseñas, tokens, etc.).
8.7. Criptografía Aplicada y Protección de Comunicaciones
Hashes criptográficos de integridad: Permiten verificar la integridad de datos mediante representaciones de tamaño fijo.
Hashes de contraseñas: Deben emplearse funciones específicas de derivación con salts únicos y parámetros de coste computacional ajustable (Argon2id, bcrypt, scrypt). Nunca deben utilizarse hashes rápidos de integridad (como SHA-256).
Cifrado y Protocolos: Uso de cifrado simétrico/asimétrico mediante bibliotecas consolidadas y uso de protocolos de comunicación seguros (TLS) correctamente configurados para proteger la confidencialidad e integridad en tránsito.
8.8. Disponibilidad y Prevención de Denegación de Servicio (DoS)
La disponibilidad forma parte fundamental de la seguridad. Para evitar que un atacante agote los recursos del sistema (CPU, memoria, descriptores de archivo, hilos o conexiones), se deben aplicar:

Límites de tamaño de entrada y tiempos máximos de ejecución (timeouts).
Cuotas de recursos, límites de concurrencia y control de frecuencia de peticiones (rate limiting).
Control estricto al procesar expresiones regulares, deserializadores o llamadas a servicios externos.
8.9. Ciclo de Vida de Desarrollo Seguro (SSDLC)
La seguridad debe integrarse de forma continua en las 7 fases del ciclo de vida:

Requisitos y Análisis: Identificación de activos, amenazas y requisitos de seguridad.
Diseño: Definición de fronteras de confianza, políticas de acceso, arquitectura resiliente y mecanismos de aislamiento.
Implementación: Uso de APIs seguras, validación de datos y garantías de seguridad del lenguaje.
Verificación: Pruebas SAST/DAST, fuzzing, sanitizadores y revisión de código.
Despliegue: Configuración segura por defecto, mínimo privilegio y protección de secretos.
Operación y Mantenimiento: Monitorización continua, revisión de avisos de seguridad y actualización de dependencias.
Respuesta a Incidentes: Investigación de causas raíz, mitigación y realimentación del diseño.
</pasted_content id="8df6">

, mirame a ver que me falta

**🔧 Herramienta `Bash`**

```json
{
  "command": "cd \"<HOME>/Documents/PuestaEnProduccion/Ut1/trabajo\" && git log --oneline -5 && git branch -a && git remote -v && find . -path ./.git -prune -o -type f -print | sort && echo ---- && wc -c $(find . -path ./.git -prune -o -type f -print)",
  "description": "Show repo history, remotes and file listing"
}
```

<details><summary>Resultado de herramienta</summary>

```
559cc70 Actualiza la conversación 05 hasta la comprobación de conversaciones
b84666c Conversación 05 y registro de la publicación
908150b Grupo 5: Desarrollo seguro (PPS UD1)
* main
  remotes/origin/main
origin	https://github.com/danibarberooooo/Actividad-grupal-UD1.git (fetch)
origin	https://github.com/danibarberooooo/Actividad-grupal-UD1.git (push)
./.nojekyll
./PROCESO.md
./README.md
./conversaciones-ia/00-claude-code-plan-inicial.md
./conversaciones-ia/01-claude-code-produccion.md
./conversaciones-ia/02-prueba-skill-propia-v1.0.md
./conversaciones-ia/03-aplicacion-skill-publica-sharp-edges.md
./conversaciones-ia/04-prueba-skill-propia-v1.1.md
./conversaciones-ia/05-claude-code-revision-y-publicacion.md
./conversaciones-ia/README.md
./css/estilos.css
./evidencias/fuentes.md
./evidencias/prueba-skill-propia.md
./evidencias/prueba-skill/SKILL-v1.0.md
./evidencias/prueba-skill/entrada.py
./evidencias/prueba-skill/entrada2.js
./evidencias/skill-publica.md
./herramientas/exportar-conversacion.js
./index.html
./js/demo.js
./skills/revision-entradas-salidas/SKILL.md
./tests/demo.test.js
----
     0 ./.nojekyll
 31697 ./conversaciones-ia/00-claude-code-plan-inicial.md
301511 ./conversaciones-ia/01-claude-code-produccion.md
 20152 ./conversaciones-ia/02-prueba-skill-propia-v1.0.md
 47864 ./conversaciones-ia/03-aplicacion-skill-publica-sharp-edges.md
 13510 ./conversaciones-ia/04-prueba-skill-propia-v1.1.md
108499 ./conversaciones-ia/05-claude-code-revision-y-publicacion.md
  4489 ./conversaciones-ia/README.md
 12570 ./css/estilos.css
  5314 ./evidencias/fuentes.md
  1554 ./evidencias/prueba-skill/entrada.py
  1013 ./evidencias/prueba-skill/entrada2.js
  8858 ./evidencias/prueba-skill/SKILL-v1.0.md
 11985 ./evidencias/prueba-skill-propia.md
 10540 ./evidencias/skill-publica.md
  4416 ./herramientas/exportar-conversacion.js
 28727 ./index.html
 14198 ./js/demo.js
 28124 ./PROCESO.md
  2872 ./README.md
 10395 ./skills/revision-entradas-salidas/SKILL.md
  3002 ./tests/demo.test.js
671290 total
```

</details>

**🔧 Herramienta `Bash`**

```json
{
  "command": "cd \"<HOME>/Documents/PuestaEnProduccion/Ut1/trabajo\" && cat README.md conversaciones-ia/README.md evidencias/fuentes.md",
  "description": "Read README, conversations README and sources"
}
```

**🔧 Herramienta `Read`**

```json
{
  "file_path": "<HOME>\\Documents\\PuestaEnProduccion\\Ut1\\trabajo\\PROCESO.md"
}
```

<details><summary>Resultado de herramienta</summary>

```
1	# PROCESO.md · Registro del proceso y del uso de IA
2	
3	**Grupo 5 · Tema:** Desarrollo seguro y mitigaciones (`pps1_06 seguridad_lenguajes.md`)
4	**Herramienta de IA usada:** Claude Code (CLI de Anthropic), modelo Claude Opus 5.5, en Windows. Algunas tareas se delegaron en **subagentes**: instancias nuevas del modelo, sin acceso a la conversación principal. Las usamos cuando hacía falta una "conversación distinta", como en la prueba de la skill propia.
5	
6	> **Transparencia:** casi todo el material de este repositorio lo generó Claude Code el 26/10/2026, a partir de una única petición amplia de Daniel B. ("hazme todo lo que pide"), en la conversación [`01`](conversaciones-ia/01-claude-code-produccion.md). Las decisiones de las fases 1 a 4 las **propuso y aplicó la IA**, y así se indica en el campo *Participación*. La sección [Revisión del grupo](#revisión-del-grupo) recoge lo que los cuatro integrantes deben revisar, decidir y firmar antes de entregar. No presentamos como decisiones del grupo las que todavía no hemos revisado.
7	
8	## Organización del equipo
9	
10	| Responsabilidad | Sesión 1 | Sesión 2 | Sesión 3 |
11	|---|---|---|---|
12	| Contenido (síntesis, glosario, fuentes) | Guillermo A. | Juan R. | Pablo V. |
13	| Verificación (afirmaciones, ejemplos, enlaces) | Juan R. | Pablo V. | Daniel B. |
14	| Web y publicación (estructura, accesibilidad, GitHub Pages) | Daniel B. | Guillermo A. | Juan R. |
15	| Apoyo y revisión (relectura completa, prueba en móvil, segunda prueba de la skill con otra IA) | Pablo V. | Daniel B. | Guillermo A. |
16	
17	Somos **cuatro** integrantes (Daniel B., Guillermo A., Juan R. y Pablo V.), no tres, así que se añade el rol de *apoyo y revisión*. Cada persona pasa por tres roles distintos y en cada sesión están cubiertos los cuatro. *(Rotación propuesta, pendiente de confirmar por el grupo.)*
18	
19	## Índice de conversaciones
20	
21	| Archivo | Fases | Contenido |
22	|---|---|---|
23	| [`00-claude-code-plan-inicial.md`](conversaciones-ia/00-claude-code-plan-inicial.md) | 0, 1, 2 | Lectura del enunciado y primera propuesta de plan |
24	| [`01-claude-code-produccion.md`](conversaciones-ia/01-claude-code-produccion.md) | 1–5 | Conversación principal: alcance, web, demos, skills, verificaciones y anonimización |
25	| [`02-prueba-skill-propia-v1.0.md`](conversaciones-ia/02-prueba-skill-propia-v1.0.md) | 4 | Prueba 1 de la skill propia, en una conversación nueva |
26	| [`03-aplicacion-skill-publica-sharp-edges.md`](conversaciones-ia/03-aplicacion-skill-publica-sharp-edges.md) | 4 | Aplicación de la skill pública a `js/demo.js` |
27	| [`04-prueba-skill-propia-v1.1.md`](conversaciones-ia/04-prueba-skill-propia-v1.1.md) | 4 | Prueba 2 de la skill propia (versión mejorada), en una conversación nueva |
28	| [`05-claude-code-revision-y-publicacion.md`](conversaciones-ia/05-claude-code-revision-y-publicacion.md) | 5 | Revisión de lo que faltaba, nombres del grupo, git, GitHub Pages y comprobación de la web publicada |
29	
30	---
31	
32	## Fase 0 · Leer el enunciado y hacer un primer plan
33	
34	| Campo | Registro |
35	|---|---|
36	| **Objetivo** | Entender qué se entrega, cuánto puntúa cada parte y proponer un alcance inicial. |
37	| **Herramienta** | Claude Code. Análisis del enunciado y propuesta de plan. |
38	| **Prompt** | Se pegó el enunciado completo de la tarea grupal (sin más instrucciones). |
39	| **Resultado** | Tabla de entregables con su peso en la rúbrica (PROCESO + conversaciones = 30 puntos), aviso de usar `/export` en lugar de *Copy All*, duda sobre si había una sección de "mitigaciones", 7 ideas clave propuestas, demo de XSS + SHA-256, skill propia "revisión de datos sensibles" y tres preguntas al grupo. |
40	| **Decisión** | Aceptamos la estructura general, la demo de XSS y la idea de exportar las conversaciones. Más tarde se cambiaron varias cosas (ver fase 1). |
41	| **Justificación** | El plan coincidía con el enunciado y con la rúbrica. Las tres preguntas quedaron sin responder po
… [salida recortada: 24607 caracteres más]
```

</details>

<details><summary>Resultado de herramienta</summary>

```
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

## Ver la web en local

Abre `index.html` en el navegador. No necesita servidor ni dependencias. La demo de contraseñas usa la Web Crypto API, disponible en HTTPS, en `localhost` y en ficheros locales en Chrome, Edge y Firefox.

## Licencias

- Textos y código propios: CC BY-SA 4.0. Se usa esta licencia por compatibilidad con la skill de Trail of Bits analizada, que también es CC BY-SA 4.0.
- No se han usado imágenes externas. El icono y el diagrama están hechos con HTML, CSS y SVG propios.
# Conversaciones originales con IA

Aquí están **todas** las conversaciones con IA del proyecto. No se ha hecho ninguna selección: se incluyen la del plan inicial, la de producción, la de creación de la skill propia (dentro de la 01) y sus dos pruebas, y la de aplicación de la skill pública.

| Archivo | Herramienta | Qué contiene | Fases de PROCESO.md |
|---|---|---|---|
| [`00-claude-code-plan-inicial.md`](00-claude-code-plan-inicial.md) | Claude Code (Opus 5.5) | Lectura del enunciado y propuesta de plan | 0, 1, 2 |
| [`01-claude-code-produccion.md`](01-claude-code-produccion.md) | Claude Code (Opus 5.5) | Conversación principal: alcance, web, demos, creación de la skill propia, elección de la skill pública, verificaciones y anonimización | 1–5 |
| [`02-prueba-skill-propia-v1.0.md`](02-prueba-skill-propia-v1.0.md) | Subagente de Claude Code | Prueba 1 de la skill propia, en una conversación nueva | 4.d |
| [`03-aplicacion-skill-publica-sharp-edges.md`](03-aplicacion-skill-publica-sharp-edges.md) | Subagente de Claude Code | Ejecución de la skill pública `sharp-edges` sobre `js/demo.js` | 4.c |
| [`04-prueba-skill-propia-v1.1.md`](04-prueba-skill-propia-v1.1
… [salida recortada: 8486 caracteres más]
```

</details>

**🔧 Herramienta `Bash`**

```json
{
  "command": "cd \"<HOME>/Documents/PuestaEnProduccion/Ut1/trabajo\" && git fetch -q && git status -sb | head -3 && node --test tests/demo.test.js 2>&1 | tail -8 && echo ---- && for u in https://danibarberooooo.github.io/Actividad-grupal-UD1/ https://danibarberooooo.github.io/Actividad-grupal-UD1/css/estilos.css https://danibarberooooo.github.io/Actividad-grupal-UD1/js/demo.js https://github.com/danibarberooooo/Actividad-grupal-UD1; do echo \"$(curl -s -o /dev/null -w '%{http_code}' $u) $u\"; done && curl -s https://api.github.com/repos/danibarberooooo/Actividad-grupal-UD1 | grep -E '\"(private|has_pages|visibility)\"' && echo ---- && grep -rniE \"<dato-personal>|<dato-personal>|<dato-personal>|C:\\\\\\\\Users|C:/Users|daniel\\.b\" --exclude-dir=.git . | grep -v \"danibarberooooo\" | head -20; echo \"grep exit $?\"",
  "description": "Check push state, tests, live site and personal data"
}
```

<details><summary>Resultado de herramienta</summary>

```
## main...origin/main
ℹ tests 11
ℹ suites 0
ℹ pass 11
ℹ fail 0
ℹ cancelled 0
ℹ skipped 0
ℹ todo 0
ℹ duration_ms 76.0578
----
200 https://danibarberooooo.github.io/Actividad-grupal-UD1/
200 https://danibarberooooo.github.io/Actividad-grupal-UD1/css/estilos.css
200 https://danibarberooooo.github.io/Actividad-grupal-UD1/js/demo.js
200 https://github.com/danibarberooooo/Actividad-grupal-UD1
  "private": false,
  "has_pages": true,
  "visibility": "public",
----
./conversaciones-ia/01-claude-code-produccion.md:3137:  "command": "cd \"<HOME>/Documents/PuestaEnProduccion/Ut1/trabajo\" && : > .nojekyll && node herramientas/exportar-conversacion.js ~/.claude/projects/<proyecto>/75fcebbd-e713-46f3-8f12-2de71489e93c.jsonl conversaciones-ia/01-claude-code-produccion.md \"Conversación 01 · Claude Code · Producción completa del proyecto\" \"<dato-personal>,<dato-personal>,<dato-personal>,<dato-personal>\" && echo \"--- escaneo de datos personales:\" && grep -rn -i -E \"<dato-personal>|<dato-personal>|<dato-personal>|<dato-personal>|C:\\\\\\\\Users|C:/Users|/c/Users\" . --include=* 2>/dev/null | grep -v \"^./.git\" | cut -c1-200 | head -20; echo \"--- correos:\"; grep -rn -o -E \"[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[a-z]{2,}\" . | grep -v \"noreply@anthropic\" | head; echo \"--- posibles secretos:\"; grep -rn -i -E \"(api[_-]?key|token|secret|password)\\s*[:=]\\s*['\\\"][A-Za-z0-9_\\-]{16,}\" . | head; find . -type f | sort; du -sh .",
./conversaciones-ia/05-claude-code-revision-y-publicacion.md:622:  "command": "cd \"<HOME>/Documents/PuestaEnProduccion/Ut1/trabajo\" && echo \"== placeholders ==\" && grep -rn -E \"USUARIO|REPO\\b|\\[Nombre|por asignar|TODO|PENDIENTE\" --include=*.md --include=*.html --include=*.js . | grep -v conversaciones-ia | head -40; echo \"== sensitive ==\" && grep -rniE \"<dato-personal>|<dato-personal>|<dato-personal>|daniel\\.b|C:\\\\\\\\Users|C:/Users\" . | cut -c1-200 | head -20; echo \"== tests ==\" && node --test tests/demo.test.js 2>&1 | tail -12",
./conversaciones-ia/05-claude-code-revision-y-publicacion.md:841:3137:l>|<dato-personal>|<dato-personal>|<dato-personal>|C:\\\\\\\\Users|C:/Users|/c/Users\" . --include=* 2>/dev/null | grep -v \"^./.git\"
./conversaciones-ia/05-claude-code-revision-y-publicacion.md:1723:./conversaciones-ia/01-claude-code-produccion.md:3137:rsonal>|<dato-personal>|<dato-personal>|<dato-personal>|C:\\\\\\\\Users|C:/Users|/c/Users\" . -
grep exit 0
```

</details>

**🔧 Herramienta `Bash`**

```json
{
  "command": "cd \"<HOME>/Documents/PuestaEnProduccion/Ut1/trabajo\" && git log --format='%an <%ae>' | sort -u && grep -rnoE \"[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[a-z]{2,}\" --exclude-dir=.git . | grep -vE \"noreply@(anthropic|github)|users\\.noreply\" | sort | uniq -c | head; echo ----; tail -40 conversaciones-ia/05-claude-code-revision-y-publicacion.md | cut -c1-300; echo ----; grep -nE \"Pendiente|PENDIENTE\" PROCESO.md | wc -l",
  "description": "Check commit authors, emails and end of conversation 05"
}
```

<details><summary>Resultado de herramienta</summary>

~~~~
Daniel B. <<email>>
----
```json
{
  "command": "cd \"<HOME>/Documents/PuestaEnProduccion/Ut1/trabajo\" && P=~/.claude/projects/<proyecto> echo \"== sesiones ==\"; for f in $P/*.jsonl $P/*/subagents/*.jsonl; do printf \"%6s líneas  %s  %s\\n\" \"$(wc -l < \"$f\")\" \"$(date -r \"$f\" +%H:%M)\" \"${f#$P/}\"; done; ls -d $P/*/ ; echo 
  "description": "Compare session logs with exported conversations"
}
```

<details><summary>Resultado de herramienta</summary>

```
== sesiones ==
   833 líneas  18:03  75fcebbd-e713-46f3-8f12-2de71489e93c.jsonl
    45 líneas  17:36  80738edc-1cdc-4ce0-86df-5c16b81ffda9.jsonl
   416 líneas  18:20  d7e799f4-2dde-4938-a20d-ad7ba787b69e.jsonl
    66 líneas  17:51  75fcebbd-e713-46f3-8f12-2de71489e93c/subagents/agent-a3ce08b14cd30ec00.jsonl
    29 líneas  17:48  75fcebbd-e713-46f3-8f12-2de71489e93c/subagents/agent-a5b8ac828fa86d89c.jsonl
    31 líneas  17:50  75fcebbd-e713-46f3-8f12-2de71489e93c/subagents/agent-a6f937fa09c7d7e74.jsonl
<HOME>/.claude/projects/<carpeta-de-proyecto>/75fcebbd-e713-46f3-8f12-2de71489e93c/
<HOME>/.claude/projects/<carpeta-de-proyecto>/memory/
== exportadas ==
(45 eventos)  conversaciones-ia/00-claude-code-plan-inicial.md
(833 eventos)
(45 eventos)  conversaciones-ia/01-claude-code-produccion.md
(29 eventos)  conversaciones-ia/02-prueba-skill-propia-v1.0.md
(66 eventos)  conversaciones-ia/03-aplicacion-skill-publica-sharp-edges.md
(31 eventos)  conversaciones-ia/04-prueba-skill-propia-v1.1.md
(365 eventos)
(795 eventos)
(833 eventos)  conversaciones-ia/05-claude-code-revision-y-publicacion.md
conversaciones-ia/01-claude-code-produccion.md
conversaciones-ia/05-claude-code-revision-y-publicacion.md
<HOME>/.claude/projects/<carpeta-de-proyecto>/75fcebbd-e713-46f3-8f12-2de71489e93c/subagents/agent-a3ce08b14cd30ec00.meta.json
{"agentType":"general-purpose","launchedWithDefaults":true,"description":"Aplicar skill pública sharp-edges","toolUseId":"toolu_01MDfZgxubPEZaA72Nnc1o5d","spawnDepth":1,"requestShape":"background","requestNonInteractive":true,"finished":true}
<HOME>/.claude/projects/<carpeta-de-proyecto>/75fcebbd-e713-46f3-8f12-2de71489e93c/subagents/agent-a5b8ac828fa86d89c.meta.json
{"agentType":"general-purpose","launchedWithDefaults":true,"description":"Probar skill propia en contexto nuevo","toolUseId":"toolu_01MHzVQufbmxqpbX3AWtGohD","spawnDepth":1,"requestShape":"background","requestNonInteractive":true,"finished":true}
<HOME>/.claude/projects/<carpeta-de-proyecto>/75fcebbd-e713-46f3-8f12-2de71489e93c/subagents/agent-a6f937fa09c7d7e74.meta.json
{"agentType":"general-purpose","launchedWithDefaults":true,"description":"Segunda prueba skill propia v1.1","toolUseId":"toolu_01NSqeaqjHWws5NcZge3J6vy","spawnDepth":1,"requestShape":"background","requestNonInteractive":true,"finished":true}
```

</details>
----
13
~~~~

</details>

**🔧 Herramienta `Bash`**

```json
{
  "command": "P=~/.claude/projects/<proyecto> for f in $P/*.jsonl; do printf \"%6s líneas  %s  %s\\n\" \"$(wc -l < \"$f\")\" \"$(date -r \"$f\" '+%d %H:%M')\" \"$(basename $f)\"; done; head -5 \"<HOME>/Documents/PuestaEnProduccion/Ut1/trabajo/conversaciones-ia/05-claude-code-revision-y-publicacion.md\"; grep -c \"\" \"<HOME>/Documents/PuestaEnProduccion/Ut1/trabajo/conversaciones-ia/05-claude-code-revision-y-publicacion.md\"",
  "description": "List session logs to detect unexported conversations"
}
```

<details><summary>Resultado de herramienta</summary>

```
71 líneas  26 18:23  4f00a199-e3ca-48c3-88aa-1184e945376b.jsonl
   833 líneas  26 18:03  75fcebbd-e713-46f3-8f12-2de71489e93c.jsonl
    45 líneas  26 17:36  80738edc-1cdc-4ce0-86df-5c16b81ffda9.jsonl
   444 líneas  26 18:23  d7e799f4-2dde-4938-a20d-ad7ba787b69e.jsonl
# Conversación 05 · Claude Code · Revisión de pendientes y publicación

> Exportado automáticamente del historial local de Claude Code (426 eventos).
> Se han anonimizado rutas locales, nombre de usuario y correo. Se omiten los recordatorios internos del sistema
> y el razonamiento interno del modelo. Las salidas de herramientas de más de 4000 caracteres se recortan.
1898
```

</details>

## 🤖 Claude · 2026-10-26 17:23:46 UTC

Estoy repasando el repositorio contra la lista de comprobación del enunciado. Ya he visto que el repo es público, Pages funciona y los tests pasan. Me falta revisar la web y las skills.

**🔧 Herramienta `Bash`**

```json
{
  "command": "cd \"<HOME>/Documents/PuestaEnProduccion/Ut1/trabajo\" && grep -oE '<h[1-3][^>]*>[^<]*' index.html | sed 's/<h[1-3][^>]*>/- /' && grep -c '<dt' index.html && grep -nE \"^#{1,3} \" skills/revision-entradas-salidas/SKILL.md evidencias/prueba-skill-propia.md evidencias/skill-publica.md",
  "description": "List web headings and skill document sections"
}
```

<details><summary>Resultado de herramienta</summary>

```
- Desarrollo seguro: la seguridad se diseña, no se añade al final
- Introducción
- 7 ideas clave
- La seguridad es un proceso, no un producto
- Antes de programar, piensa como un atacante
- Toda entrada es sospechosa: valida al entrar, codifica al salir
- Saber quién eres no es saber qué puedes hacer
- Tu programa también es el código de otros, y los secretos no van en el código
- Las contraseñas necesitan hashes lentos; las comunicaciones, TLS
- Prueba con varias técnicas y ten mitigaciones para lo que se escape
- Demostración práctica
- Demo 1 · Validación de entradas
- Demo 2 · Codificación de salida frente a XSS
- Demo 3 · ¿Por qué no SHA-256 para contraseñas?
- Diagrama: ciclo de vida de desarrollo seguro (SSDLC)
- Glosario
- Fuentes
- Material de partida
- Fuentes adicionales
22
skills/revision-entradas-salidas/SKILL.md:12:# Revisión de entradas y salidas (desarrollo seguro)
skills/revision-entradas-salidas/SKILL.md:14:## Propósito
skills/revision-entradas-salidas/SKILL.md:31:## Condiciones de uso
skills/revision-entradas-salidas/SKILL.md:46:## Instrucciones
skills/revision-entradas-salidas/SKILL.md:68:### Formato de salida
skills/revision-entradas-salidas/SKILL.md:71:## Resumen
skills/revision-entradas-salidas/SKILL.md:74:## Flujos analizados
skills/revision-entradas-salidas/SKILL.md:78:## Detalle y corrección
skills/revision-entradas-salidas/SKILL.md:79:### Flujo 1: <título>
skills/revision-entradas-salidas/SKILL.md:85:## SSDLC y pruebas
skills/revision-entradas-salidas/SKILL.md:89:## Observaciones fuera de alcance
skills/revision-entradas-salidas/SKILL.md:92:## Limitación
skills/revision-entradas-salidas/SKILL.md:96:## Ejemplo
skills/revision-entradas-salidas/SKILL.md:110:## Resumen
skills/revision-entradas-salidas/SKILL.md:113:## Flujos analizados
skills/revision-entradas-salidas/SKILL.md:118:## Detalle y corrección
skills/revision-entradas-salidas/SKILL.md:119:### Flujo 1: nombre insertado en HTML
skills/revision-entradas-salidas/SKILL.md:131:## SSDLC y pruebas
skills/revision-entradas-salidas/SKILL.md:135:## Limitación
skills/revision-entradas-salidas/SKILL.md:138:## Criterios de calidad
skills/revision-entradas-salidas/SKILL.md:159:## Referencias
evidencias/prueba-skill-propia.md:1:# Prueba de la skill propia: `revision-entradas-salidas`
evidencias/prueba-skill-propia.md:5:## 1. Entrada utilizada
evidencias/prueba-skill-propia.md:13:## 2. Resultado esperado (definido ANTES de la prueba)
evidencias/prueba-skill-propia.md:35:### 2.b Resultado esperado de la segunda prueba (versión 1.1), definido antes de lanzarla
evidencias/prueba-skill-propia.md:50:## 3. Resultado obtenido
evidencias/prueba-skill-propia.md:52:### Prueba 1 (versión 1.0, `entrada.py`)
evidencias/prueba-skill-propia.md:82:### Prueba 2 (versión 1.1, `entrada2.js`)
evidencias/prueba-skill-propia.md:104:## 4. Comparación entre lo esperado y lo obtenido
evidencias/prueba-skill-propia.md:106:### Prueba 1
evidencias/prueba-skill-propia.md:128:### Prueba 2
evidencias/prueba-skill-propia.md:140:## 5. Errores, limitaciones y mejoras
evidencias/prueba-skill-propia.md:164:## 6. Conversaciones de origen
evidencias/skill-publica.md:1:# Skill pública: `sharp-edges` (Trail of Bits)
evidencias/skill-publica.md:3:## 1. Identificación
evidencias/skill-publica.md:15:### Por qué la elegimos
evidencias/skill-publica.md:19:## 2. Propósito
evidencias/skill-publica.md:23:## 3. Tarea concreta para la que se diseñó
evidencias/skill-publica.md:29:### Instrucciones relevantes (resumidas con nuestras palabras)
evidencias/skill-publica.md:46:## 4. Aplicación en el proyecto
evidencias/skill-publica.md:71:## 5. Valoración crítica: qué aporta y qué límites tiene
evidencias/skill-publica.md:90:## 6. Conversación original
```

</details>

## 🤖 Claude · 2026-10-26 17:24:08 UTC

No falta ningún archivo ni apartado técnico. Lo que queda pendiente es trabajo que tiene que hacer el grupo, y es justo lo que más puntúa.

#### Lo que ya está bien (comprobado ahora)

- **El repositorio** es público y GitHub Pages está activo. La web, el CSS y el JS responden con código 200 sin iniciar sesión.
- **La estructura** coincide con la del enunciado: `README.md`, `index.html`, `PROCESO.md`, `conversaciones-ia/`, `evidencias/` (los tres ficheros) y `skills/revision-entradas-salidas/SKILL.md`.
- **La web** tiene introducción, 7 ideas clave, 3 demos, el diagrama SSDLC, un glosario de 22 términos y las fuentes. Cubre del §8.1 al §8.9, más el §6.2 y el §6.3.
- **Los tests**: `node --test tests/demo.test.js` da 11 de 11 en verde.
- **Datos personales**: no aparecen el apellido, el correo ni rutas `C:\Users`. Los commits salen como `Daniel B.` con el correo `noreply` de GitHub.
- **Las dos skills** tienen todos los apartados que se piden, y hay dos rondas de prueba de la skill propia, en conversaciones distintas.

#### Lo que falta

**1. Que el grupo valide las decisiones (afecta al criterio 3, 30 puntos, y al 7).**
En `PROCESO.md` aparece 13 veces «Pendiente de validar por el grupo». La nota de transparencia dice que casi todo lo hizo la IA a partir de «hazme todo lo que pide». Tal como está, el registro admite que el grupo no ha tomado las decisiones, y eso limita la nota de trazabilidad. En cada fase hay que poner quién revisó qué y qué cambió, si se cambió algo.

**2. La participación de Guillermo A., Juan R. y Pablo V. no aparece en ninguna parte.**
Todas las conversaciones son de Daniel B. Lo ideal es que cada uno haga una tarea real con IA y guarde la conversación en `conversaciones-ia/`. Por ejemplo:
- repetir la prueba de la skill propia con Copilot Chat (ya está recomendado en la fase 4.d);
- que el de verificación contraste las fuentes de `fuentes.md`;
- que el de contenido reescriba alguna idea clave.

**3. «Palabras propias» (criterio 2).**
Los textos de la web los redactó la IA. Conviene que el responsable de contenido reescriba al menos algunas ideas o definiciones del glosario y lo anote en el registro de correcciones.

**4. Conversaciones incompletas.**
- La **05** se exportó con 426 eventos y la sesión tiene ahora 444, así que le falta el final.
- **Esta conversación** también hay que guardarla, como `06`, porque el enunciado pide todas.

**5. Detalles de `PROCESO.md`.**
- En «Revisión del grupo», la casilla de **Web** («crear el repositorio y activar Pages») sigue sin marcar, aunque ya está hecho.
- Falta la prueba en el móvil hecha por una persona sobre la web publicada: hasta ahora solo se ha probado con Chrome automatizado a 360 px.

**6. Preparar la entrevista.**
Cada uno debe poder explicar las 7 ideas, las demos, por qué se eligió `sharp-edges` y qué cambió de la v1.0 a la v1.1 de la skill propia.

Los puntos 1, 2, 3 y 6 los tenéis que hacer vosotros. Lo que puedo hacer yo ahora es lo mecánico del punto 4 (volver a exportar la 05 y exportar esta como 06) y del punto 5 (marcar la casilla de Pages y añadir esta revisión a `PROCESO.md`), y después hacer commit y push. ¿Lo hago?

## 👤 Usuario · 2026-10-26 17:28:40 UTC

hazme y consigueme todo lo que este en tu mano de lo que falta

**🔧 Herramienta `Bash`**

```json
{
  "command": "cd \"<HOME>/Documents/PuestaEnProduccion/Ut1/trabajo\" && cat herramientas/exportar-conversacion.js && grep -n \"Comando\\|node herramientas\" conversaciones-ia/05-claude-code-revision-y-publicacion.md | head",
  "description": "Read the conversation export script"
}
```

<details><summary>Resultado de herramienta</summary>

~~~~
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
        // Informe final que un subagente devuelve a
… [salida recortada: 3828 caracteres más]
~~~~

</details>

## 🤖 Claude · 2026-10-26 17:29:05 UTC

Empiezo por lo mecánico: volver a exportar la conversación 05, que ya terminó, y comprobar la web publicada en una pantalla estrecha.

**🔧 Herramienta `Bash`**

```json
{
  "command": "cd \"<HOME>/Documents/PuestaEnProduccion/Ut1/trabajo\" && P=~/.claude/projects/<proyecto> && node herramientas/exportar-conversacion.js \"$P/d7e799f4-2dde-4938-a20d-ad7ba787b69e.jsonl\" conversaciones-ia/05-claude-code-revision-y-publicacion.md \"Conversación 05 · Claude Code · Revisión de pendientes y publicación\" \"<dato-personal>,<dato-personal>,<dato-personal>,<dato-personal>,<dato-personal>,<dato-personal>\" && head -3 conversaciones-ia/05-claude-code-revision-y-publicacion.md && tail -c 1500 conversaciones-ia/05-claude-code-revision-y-publicacion.md && echo && grep -rniE \"<dato-personal>|<dato-personal>|<dato-personal>|<dato-personal>\" conversaciones-ia/05-claude-code-revision-y-publicacion.md | head -3; ls \"/c/Program Files/Google/Chrome/Application/chrome.exe\" \"/c/Program Files (x86)/Microsoft/Edge/Application/msedge.exe\" 2>&1",
  "description": "Re-export conversation 05 and locate a browser"
}
```

<details><summary>Resultado de herramienta</summary>

~~~~
Escrito conversaciones-ia/05-claude-code-revision-y-publicacion.md
# Conversación 05 · Claude Code · Revisión de pendientes y publicación

> Exportado automáticamente del historial local de Claude Code (444 eventos).
la skill propia | Completa (29 de 29) |
| 03 · Skill pública `sharp-edges` | Completa (66 de 66) |
| 04 · Prueba 2 de la skill propia | Completa (31 de 31) |
| 05 · Revisión y publicación | Desactualizada: la he vuelto a exportar (426 eventos) |

Al volver a exportar la 05 he revisado otra vez que no salgan datos personales y no hay ninguno. Está en un commit nuevo, `559cc70`, que todavía tienes que subir:
```
! git push
```

La 05 nunca podrá estar al 100 %, porque se exporta desde dentro de la propia conversación y siempre le faltará este último mensaje. Ya está explicado en el README de `conversaciones-ia/`, así que no pasa nada. Si quieres que quede completa, cuando acabemos me pides en una sesión nueva que la exporte otra vez.

Por último, faltan las conversaciones con IA de Guillermo, Juan y Pablo, si las tienen. Esas no las puedo sacar yo de aquí.

## 👤 Usuario · 2026-10-26 17:22:49 UTC

<bash-input> git push</bash-input>

## 👤 Usuario · 2026-10-26 17:22:56 UTC

<bash-stdout>To https://github.com/danibarberooooo/Actividad-grupal-UD1.git
   b84666c..559cc70  main -&gt; main</bash-stdout><bash-stderr></bash-stderr>

## 🤖 Claude · 2026-10-26 17:22:58 UTC

Subido. El commit `559cc70` ya está en GitHub, así que el repositorio tiene las seis conversaciones al día.

Solo faltan las conversaciones con IA de tus compañeros, si las tienen. Cuando las añadáis a `conversaciones-ia/`, haced `git add .`, `git commit` y `git push` como hasta ahora.

/c/Program Files (x86)/Microsoft/Edge/Application/msedge.exe
/c/Program Files/Google/Chrome/Application/chrome.exe
~~~~

</details>

## 🤖 Claude · 2026-10-26 17:29:19 UTC

La 05 ya está completa (444 de 444 eventos). Ahora compruebo la web publicada con un ancho de móvil.

**🔧 Herramienta `Bash`**

```json
{
  "command": "S=\"<HOME>/AppData/Local/Temp/claude/<carpeta-de-proyecto>/4f00a199-e3ca-48c3-88aa-1184e945376b/scratchpad\"; mkdir -p \"$S\"; C=\"/c/Program Files/Google/Chrome/Application/chrome.exe\"; U=https://danibarberooooo.github.io/Actividad-grupal-UD1/; \"$C\" --headless=new --disable-gpu --hide-scrollbars --window-size=360,800 --screenshot=\"$S/movil-360.png\" \"$U\" 2>/dev/null; \"$C\" --headless=new --disable-gpu --window-size=360,800 --virtual-time-budget=4000 --dump-dom \"$U\" 2>/dev/null > \"$S/dom.html\"; wc -c \"$S/dom.html\"; ls -la \"$S\"",
  "description": "Screenshot published site at 360px width",
  "timeout": 60000
}
```

<details><summary>Resultado de herramienta</summary>

```
29736 <HOME>/AppData/Local/Temp/claude/<carpeta-de-proyecto>/4f00a199-e3ca-48c3-88aa-1184e945376b/scratchpad/dom.html
total 72
drwxr-xr-x 1 <dato-personal> 1049089     0 Oct 26 18:29 .
drwxr-xr-x 1 <dato-personal> 1049089     0 Oct 26 18:23 ..
-rw-r--r-- 1 <dato-personal> 1049089 29736 Oct 26 18:29 dom.html
-rw-r--r-- 1 <dato-personal> 1049089 40872 Oct 26 18:29 movil-360.png
```

</details>

**🔧 Herramienta `Read`**

```json
{
  "file_path": "<HOME>\\AppData\\Local\\Temp\\claude\\<carpeta-de-proyecto>\\4f00a199-e3ca-48c3-88aa-1184e945376b\\scratchpad\\movil-360.png"
}
```

<details><summary>Resultado de herramienta</summary>

```
[imagen adjunta: captura de pantalla]
```

</details>

**🔧 Herramienta `Bash`**

```json
{
  "command": "S=\"<HOME>/AppData/Local/Temp/claude/<carpeta-de-proyecto>/4f00a199-e3ca-48c3-88aa-1184e945376b/scratchpad\"; cat > \"$S/marco.html\" <<'EOF'\n<!doctype html><html><body style=\"margin:0;background:#888\">\n<iframe src=\"https://danibarberooooo.github.io/Actividad-grupal-UD1/\" style=\"width:360px;height:2000px;border:0;background:#fff\"></iframe>\n<iframe src=\"https://danibarberooooo.github.io/Actividad-grupal-UD1/#glosario\" style=\"width:360px;height:2000px;border:0;background:#fff;margin-left:20px\"></iframe>\n</body></html>\nEOF\nC=\"/c/Program Files/Google/Chrome/Application/chrome.exe\"; \"$C\" --headless=new --disable-gpu --hide-scrollbars --window-size=760,2000 --virtual-time-budget=5000 --screenshot=\"$S/movil-iframe.png\" \"file:///$S/marco.html\" 2>/dev/null; ls -la \"$S/movil-iframe.png\"",
  "description": "Render published site inside 360px iframes",
  "timeout": 60000
}
```

<details><summary>Resultado de herramienta</summary>

```
-rw-r--r-- 1 <dato-personal> 1049089 202896 Oct 26 18:29 <HOME>/AppData/Local/Temp/claude/<carpeta-de-proyecto>/4f00a199-e3ca-48c3-88aa-1184e945376b/scratchpad/movil-iframe.png
```

</details>

**🔧 Herramienta `Read`**

```json
{
  "file_path": "<HOME>\\AppData\\Local\\Temp\\claude\\<carpeta-de-proyecto>\\4f00a199-e3ca-48c3-88aa-1184e945376b\\scratchpad\\movil-iframe.png"
}
```

<details><summary>Resultado de herramienta</summary>

```
[imagen adjunta: captura de pantalla]
```

</details>

## 🤖 Claude · 2026-10-26 17:29:42 UTC

A 360 px reales la web publicada se ve bien: aparece el botón «Menú» y no hay desbordamiento horizontal. Ahora leo el contenido de la web y de las skills para preparar la guía de la entrevista.

**🔧 Herramienta `Bash`**

```json
{
  "command": "cd \"<HOME>/Documents/PuestaEnProduccion/Ut1/trabajo\" && sed -e 's/<[^>]*>//g' index.html | grep -v '^\\s*$' | sed -n '1,400p' | cut -c1-400",
  "description": "Extract visible text of the web page"
}
```

<details><summary>Resultado de herramienta</summary>

```
Desarrollo seguro
  Saltar al contenido
      🛡️ Desarrollo seguro
      Menú
        Introducción
        Ideas clave
        Demostración
        Ciclo SSDLC
        Glosario
        Fuentes
        PPS · Unidad 1 · Grupo 5
        Desarrollo seguro: la seguridad se diseña, no se añade al final
        Una guía para compañeros que quieren entender cómo se evita que un programa sea vulnerable antes de que alguien lo ataque, y qué hacer cuando, aun así, algo falla.
          Ir a la demostración
          Ver las 7 ideas clave
        Introducción
        Muchas veces pensamos que la seguridad depende de elegir un lenguaje "seguro", de activar un cortafuegos o de que el sistema operativo nos proteja. Todo eso ayuda, pero no basta: un programa escrito en Rust o en Java puede seguir dejando entrar a quien no debe, guardar contraseñas de forma débil o caerse si recibe un archivo enorme.
        El desarrollo seguro es la forma de trabajar que mete la seguridad en cada paso: cuando decidimos qué vamos a construir, cuando lo diseñamos, cuando lo programamos, cuando lo probamos y también cuando ya está funcionando y aparece un fallo nuevo. Es lo que en los apuntes se llama defensa en profundidad: varias capas, para que el fallo de una sola no comprometa todo el sistema.
          ¿Para qué te sirve? Cualquier aplicación que hagas en clase o en una empresa recibirá datos de usuarios, usará bibliotecas de terceros y guardará algún secreto (una contraseña de base de datos, un token…). Estas ideas te ayudan a no cometer los errores más frecuentes y a saber explicarlos.
        Alcance de esta guía: sección 8 de los apuntes (desarrollo seguro y SSDLC) y las secciones 6.2 y 6.3 (contraseñas y mitigaciones). Dejamos fuera la seguridad de memoria en detalle, los modelos de ejecución, el sandboxing del kernel y el caso sudo-rs, que se tratan en otras partes de la unidad.
        7 ideas clave
        Cada idea indica de qué parte de los apuntes sale, para que puedas ampliarla.
            1
            La seguridad es un proceso, no un producto
            No existe un "botón de seguridad" que se pulse al final. Se trabaja en capas (lenguaje, compilador, sistema operativo, aislamiento, aplicación) y en todas las fases del ciclo de vida. Si una capa falla, la siguiente debe limitar el daño.
            Ejemplo: aunque la aplicación tenga un fallo de inyección, si su usuario de base de datos sólo puede leer una tabla, el atacante no podrá borrar el resto.
            Apuntes: §1 y §8.9
            2
            Antes de programar, piensa como un atacante
            El modelado de amenazas responde a cuatro preguntas: ¿qué quiero proteger (activos)?, ¿por dónde pueden entrar (superficie de ataque)?, ¿dónde cambian los niveles de confianza (fronteras de confianza)? y ¿qué puede salir mal (amenazas)?
            De ahí salen dos principios: mínimo privilegio (cada pieza sólo con los permisos que necesita) y seguro por defecto (lo que viene "de fábrica" debe estar cerrado, no abierto).
            Apuntes: §8.1 y §6.1
            3
            Toda entrada es sospechosa: valida al entrar, codifica al salir
            Formularios, archivos, APIs, cabeceras… todo lo que viene de fuera es no confiable hasta comprobarlo. Son dos cosas distintas:
              Validar la entrada: ¿tiene el tipo, la longitud, el rango y el formato esperados? Si no, se rechaza.
              Codificar la salida: al mostrar el dato en HTML, SQL o JavaScript, se transforma para que se lea como texto y nunca como código.
            Poner un tamaño máximo también protege la disponibilidad: evita que una entrada gigante agote la memoria o la CPU (denegación de servicio).
              Usuariono confiable
              frontera de confianza
              Validartipo, longitud, formato
              →
              Lógicaconsultas parametrizadas
              →
              Codificarsegún el destino
              →
              Navegadorlo ve como texto
            Apunte
… [salida recortada: 12039 caracteres más]
```

</details>

**🔧 Herramienta `Bash`**

```json
{
  "command": "cd \"<HOME>/Documents/PuestaEnProduccion/Ut1/trabajo\" && grep -nE \"Poner un tamaño máximo|bibliotecas, frameworks|claves de API, contraseñas y tokens|Un hash de integridad como|Para cifrar se usan\" index.html",
  "description": "Locate paragraphs to extend in the web"
}
```

<details><summary>Resultado de herramienta</summary>

```
85:            <p>Poner un tamaño máximo también protege la <strong>disponibilidad</strong>: evita que una entrada gigante agote la memoria o la CPU (denegación de servicio).</p>
112:            <p>Las bibliotecas, frameworks y herramientas de compilación forman parte de la superficie de ataque (<strong>cadena de suministro</strong>). Por eso conviene tener un inventario (<strong>SBOM</strong>), fijar versiones y revisar los avisos de vulnerabilidades antes de actualizar.</p>
113:            <p>Las claves de API, contraseñas y tokens se guardan en un <strong>gestor de secretos</strong>, nunca en el repositorio. Y los mensajes de error que ve el usuario no deben revelar detalles internos; los registros (<em>logs</em>) sirven para investigar, pero no deben guardar contraseñas ni tokens.</p>
120:            <p>Un hash de integridad como SHA-256 está pensado para ser <strong>rápido</strong>, y eso es justo lo que quiere un atacante que prueba millones de contraseñas. Para contraseñas se usan funciones <strong>lentas a propósito</strong> y con <strong>sal</strong> única: Argon2id, bcrypt o scrypt.</p>
121:            <p>Para cifrar se usan bibliotecas consolidadas (no se inventa criptografía propia) y, en tránsito, <strong>TLS</strong> bien configurado.</p>
```

</details>

**🔧 Herramienta `Bash`**

```json
{
  "command": "cd \"<HOME>/Documents/PuestaEnProduccion/Ut1/trabajo\" && python - <<'EOF'\nimport io\np='index.html'\ns=io.open(p,encoding='utf-8').read()\nrep=[\n('evita que una entrada gigante agote la memoria o la CPU (denegación de servicio).</p>',\n 'evita que una entrada gigante agote la memoria o la CPU (denegación de servicio). Lo completan los <strong>tiempos máximos</strong> (<em>timeouts</em>), las cuotas y el <em>rate limiting</em>, y tener cuidado con lo que puede tardar mucho con una entrada maliciosa: expresiones regulares, deserializadores y llamadas a servicios externos.</p>'),\n('fijar versiones y revisar los avisos de vulnerabilidades antes de actualizar.</p>',\n 'fijar versiones y revisar los avisos de vulnerabilidades antes de actualizar. El propio proceso de compilación también se protege: acceso controlado al repositorio, credenciales de publicación guardadas como secretos y comprobación de que cada artefacto viene de donde dice y no se ha modificado (procedencia e integridad).</p>'),\n('Argon2id, bcrypt o scrypt.</p>',\n 'Argon2id, bcrypt o scrypt. SHA-256 sigue siendo útil para lo que fue diseñado: comprobar la <strong>integridad</strong>, por ejemplo que un archivo descargado coincide con el hash publicado.</p>'),\n]\nfor a,b in rep:\n    assert s.count(a)==1,a\n    s=s.replace(a,b)\nio.open(p,'w',encoding='utf-8',newline='').write(s)\nprint('ok')\nEOF\ngit diff --stat",
  "description": "Extend ideas 3, 5 and 6 with missing §8 points"
}
```

<details><summary>Resultado de herramienta</summary>

```
no se encontr� Python; ejecutar sin argumentos para instalar desde el Microsoft Store o deshabilitar este acceso directo desde Configuraci�n > Aplicaciones > Configuraci�n avanzada de aplicaciones > Alias de ejecuci�n de aplicaciones.
warning: in the working copy of 'conversaciones-ia/05-claude-code-revision-y-publicacion.md', LF will be replaced by CRLF the next time Git touches it
 .../05-claude-code-revision-y-publicacion.md       | 93 ++++++++++++++++++----
 1 file changed, 76 insertions(+), 17 deletions(-)
```

</details>

## 🤖 Claude · 2026-10-26 17:30:04 UTC

No hay Python instalado, así que hago los cambios con la herramienta de edición.

**🔧 Herramienta `Read`**

```json
{
  "file_path": "<HOME>\\Documents\\PuestaEnProduccion\\Ut1\\trabajo\\index.html",
  "offset": 84,
  "limit": 38
}
```

<details><summary>Resultado de herramienta</summary>

```
84	            </ul>
85	            <p>Poner un tamaño máximo también protege la <strong>disponibilidad</strong>: evita que una entrada gigante agote la memoria o la CPU (denegación de servicio).</p>
86	            <div class="flujo" role="img" aria-label="Flujo de un dato: llega desde el usuario, que no es confiable, cruza la frontera de confianza, se valida, lo procesa la lógica de la aplicación y se codifica antes de mostrarse en el navegador.">
87	              <span class="flujo__paso flujo__paso--peligro">Usuario<small>no confiable</small></span>
88	              <span class="flujo__frontera">frontera de confianza</span>
89	              <span class="flujo__paso">Validar<small>tipo, longitud, formato</small></span>
90	              <span class="flujo__flecha" aria-hidden="true">→</span>
91	              <span class="flujo__paso">Lógica<small>consultas parametrizadas</small></span>
92	              <span class="flujo__flecha" aria-hidden="true">→</span>
93	              <span class="flujo__paso">Codificar<small>según el destino</small></span>
94	              <span class="flujo__flecha" aria-hidden="true">→</span>
95	              <span class="flujo__paso flujo__paso--ok">Navegador<small>lo ve como texto</small></span>
96	            </div>
97	            <p class="idea__fuente">Apuntes: §8.2, §8.8 y §4.1 · Pruébalo en la <a href="#demo">demostración</a></p>
98	          </article>
99	
100	          <article class="idea" id="idea-4">
101	            <span class="idea__num" aria-hidden="true">4</span>
102	            <h3>Saber quién eres no es saber qué puedes hacer</h3>
103	            <p><strong>Autenticación</strong> = comprobar la identidad ("eres Ana"). <strong>Autorización</strong> = comprobar permisos ("Ana puede ver <em>su</em> factura, no la de Luis"). La autorización se comprueba <strong>en cada operación sensible</strong>, no una sola vez al iniciar sesión.</p>
104	            <p>La <strong>gestión de sesiones</strong> cuida el ciclo de vida de cookies y tokens: cómo se crean, dónde se guardan, cuándo caducan y cómo se revocan.</p>
105	            <p class="idea__ejemplo"><strong>Error típico:</strong> cambiar <code>/facturas/1001</code> por <code>/facturas/1002</code> en la URL y ver la factura de otra persona porque el servidor sólo comprobó que había sesión iniciada.</p>
106	            <p class="idea__fuente">Apuntes: §8.3 y §6.1</p>
107	          </article>
108	
109	          <article class="idea" id="idea-5">
110	            <span class="idea__num" aria-hidden="true">5</span>
111	            <h3>Tu programa también es el código de otros, y los secretos no van en el código</h3>
112	            <p>Las bibliotecas, frameworks y herramientas de compilación forman parte de la superficie de ataque (<strong>cadena de suministro</strong>). Por eso conviene tener un inventario (<strong>SBOM</strong>), fijar versiones y revisar los avisos de vulnerabilidades antes de actualizar.</p>
113	            <p>Las claves de API, contraseñas y tokens se guardan en un <strong>gestor de secretos</strong>, nunca en el repositorio. Y los mensajes de error que ve el usuario no deben revelar detalles internos; los registros (<em>logs</em>) sirven para investigar, pero no deben guardar contraseñas ni tokens.</p>
114	            <p class="idea__fuente">Apuntes: §8.4 y §8.6</p>
115	          </article>
116	
117	          <article class="idea" id="idea-6">
118	            <span class="idea__num" aria-hidden="true">6</span>
119	            <h3>Las contraseñas necesitan hashes lentos; las comunicaciones, TLS</h3>
120	            <p>Un hash de integridad como SHA-256 está pensado para ser <strong>rápido</strong>, y eso es justo lo que quiere un atacante que prueba millones de contraseñas. Para contraseñas se usan funciones <strong>lentas a propósito</strong> y con <strong>sal</strong> única: Argon2id, bcrypt o scrypt.</p>
121	            <p>Para cifrar se usan bibliotecas consolidadas (no se inventa criptografía propia) y, en tránsito, <s
… [salida recortada: 40 caracteres más]
```

</details>

**🔧 Herramienta `Edit`**

```json
{
  "replace_all": false,
  "file_path": "<HOME>\\Documents\\PuestaEnProduccion\\Ut1\\trabajo\\index.html",
  "old_string": "agote la memoria o la CPU (denegación de servicio).</p>",
  "new_string": "agote la memoria o la CPU (denegación de servicio). Lo completan los <strong>tiempos máximos</strong> (<em>timeouts</em>), las cuotas, el <em>rate limiting</em> y el cuidado con lo que puede tardar muchísimo ante una entrada preparada: expresiones regulares, deserializadores y llamadas a servicios externos.</p>"
}
```

**🔧 Herramienta `Edit`**

```json
{
  "replace_all": false,
  "file_path": "<HOME>\\Documents\\PuestaEnProduccion\\Ut1\\trabajo\\index.html",
  "old_string": "revisar los avisos de vulnerabilidades antes de actualizar.</p>",
  "new_string": "revisar los avisos de vulnerabilidades antes de actualizar. También se protege el propio proceso de compilación: acceso controlado al repositorio, credenciales de publicación guardadas como secretos y comprobación de que cada artefacto viene de donde dice y nadie lo ha modificado (procedencia e integridad).</p>"
}
```

**🔧 Herramienta `Edit`**

```json
{
  "replace_all": false,
  "file_path": "<HOME>\\Documents\\PuestaEnProduccion\\Ut1\\trabajo\\index.html",
  "old_string": "única: Argon2id, bcrypt o scrypt.</p>",
  "new_string": "única: Argon2id, bcrypt o scrypt. SHA-256 sigue siendo útil para lo que se diseñó, comprobar la <strong>integridad</strong>: por ejemplo, que un archivo descargado coincide con el hash que publica su autor.</p>"
}
```

<details><summary>Resultado de herramienta</summary>

```
The file <HOME>\Documents\PuestaEnProduccion\Ut1\trabajo\index.html has been updated successfully.
```

</details>

<details><summary>Resultado de herramienta</summary>

```
The file <HOME>\Documents\PuestaEnProduccion\Ut1\trabajo\index.html has been updated successfully.
```

</details>

<details><summary>Resultado de herramienta</summary>

```
The file <HOME>\Documents\PuestaEnProduccion\Ut1\trabajo\index.html has been updated successfully.
```

</details>

## 🤖 Claude · 2026-10-26 17:30:14 UTC

Ahora preparo la guía de la entrevista. Para que las respuestas sean exactas, primero leo los análisis de las dos skills.

**🔧 Herramienta `Bash`**

```json
{
  "command": "cd \"<HOME>/Documents/PuestaEnProduccion/Ut1/trabajo\" && sed -n '1,90p' evidencias/skill-publica.md | cut -c1-600 && echo ======= && sed -n '140,170p' evidencias/prueba-skill-propia.md | cut -c1-600 && sed -n '1,45p' skills/revision-entradas-salidas/SKILL.md | cut -c1-300",
  "description": "Read skill analysis and test improvement sections"
}
```

<details><summary>Resultado de herramienta</summary>

```
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

Buscamos en dos repositorios públicos de skills (`anthropics/skills` y `trailofbits/skills`) una skill relacionada con **nuestro tema**, y no sólo con hacer la web. `sharp-edges` trata justo dos principios de la §8.1 de los apuntes: **seguro por defecto** (*secure by default*) y el diseño de interfaces que no inviten al error. Descartamos `insecure-defaults`, del mismo repositorio, porque ahora es un *workflow* que lanza muchos agentes (ver su README), no un SKILL.md que se pueda leer y entender entero. También descartamos `frontend-design`, de Anthropic, porque no tiene que ver con la se

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

**Resultado: 10 hallazgos.** Para cada uno decidimos si acept
… [salida recortada: 11417 caracteres más]
```

</details>

## 🤖 Claude · 2026-10-26 17:30:22 UTC

Ahora creo la guía para la entrevista y las tareas concretas de cada compañero. Así su participación queda documentada con conversaciones propias.

**🔧 Herramienta `Write`**

~~~~json
{
  "file_path": "<HOME>\\Documents\\PuestaEnProduccion\\Ut1\\trabajo\\evidencias\\preparacion-entrevista.md",
  "content": "# Preparación de la entrevista y tareas pendientes del grupo\n\n> Este documento lo generó Claude Code en la conversación [`06`](../conversaciones-ia/06-claude-code-revision-final.md) como **material de estudio**. No es una fuente. Las respuestas son un guion: en la entrevista hay que explicarlas con vuestras palabras, y si alguna no os convence, comprobadla en los apuntes o en [fuentes.md](fuentes.md).\n\n## 1. Tareas que sólo puede hacer cada integrante\n\nLa IA no puede hacer estas tareas por vosotros, y son las que demuestran vuestra participación (criterios 3 y 7 de la rúbrica). Cada tarea deja una **conversación propia** en `conversaciones-ia/` y una línea en [PROCESO.md](../PROCESO.md).\n\n| Quién | Tarea | Qué guardar |\n|---|---|---|\n| **Guillermo A.** (Contenido) | Releer las 7 ideas y el glosario. Elegir **al menos dos** ideas o definiciones y reescribirlas con sus palabras en `index.html`. Si usa IA para comparar su versión con la de los apuntes, guardar esa conversación. | Conversación `07-…`, si la hay. Fila nueva en el *Registro de correcciones* de PROCESO.md. |\n| **Juan R.** (Verificación) | Abrir cada enlace de [fuentes.md](fuentes.md) y comprobar que dice lo que indicamos (por ejemplo, buscar \"600,000\" en la cheat sheet de OWASP). Probar las 3 demos con valores propios. | Una nota en la fase 4.a de PROCESO.md: qué enlaces abrió y qué encontró. |\n| **Pablo V.** (Apoyo y revisión) | **Tercera prueba de la skill propia con otra IA** (Copilot Chat), como recomienda la fase 4.d. Ver el procedimiento más abajo. | `conversaciones-ia/08-prueba-skill-propia-copilot.md` (con *Copy All*) y una sección nueva en [prueba-skill-propia.md](prueba-skill-propia.md). |\n| **Todos** | Abrir la web publicada **en vuestro móvil**, sin iniciar sesión, y probar el menú y una demo. | Marcar la casilla en *Revisión del grupo* de PROCESO.md. |\n| **Todos** | Decidir si aceptáis el alcance (fase 1) y las skills. Donde ponga «Pendiente de validar por el grupo», poner quién lo revisó y qué opina. | PROCESO.md |\n\n### Procedimiento para la prueba con Copilot (Pablo V.)\n\n1. **Antes de empezar**, escribir en `prueba-skill-propia.md` el resultado esperado de esta tercera prueba. Si no, la prueba no vale.\n2. Abrir el repositorio en VS Code, y abrir Copilot Chat en una conversación **nueva**.\n3. Pegar este prompt:\n\n   ```\n   Lee el fichero skills/revision-entradas-salidas/SKILL.md y sigue sus instrucciones al pie de la letra\n   para revisar el fichero evidencias/prueba-skill/entrada.py. Lenguaje: Python con Flask. Los datos de la\n   tabla productos los pueden escribir los vendedores desde un panel web. No ejecutes el código.\n   ```\n\n4. Al terminar: menú contextual de la conversación → **Copy All** → pegar sin tocar en `conversaciones-ia/08-prueba-skill-propia-copilot.md`. Antes de subirlo, revisar que no haya rutas con vuestro usuario (`<HOME>`) ni correos, y sustituirlos por `<HOME>` y `<email>`.\n5. Comparar con lo esperado: ¿encuentra los mismos flujos que Claude en la prueba 1? ¿Pone la columna *Vulnerabilidad*? ¿Avisa de comprobar las reglas de Bandit? Anotar las diferencias.\n\n## 2. Preguntas probables y guion de respuesta\n\n### Sobre el tema\n\n**¿Qué es el desarrollo seguro y por qué no basta con un lenguaje \"seguro\"?**\nEs meter la seguridad en todas las fases del ciclo de vida (SSDLC), no al final. Un lenguaje con seguridad de memoria como Rust evita los desbordamientos, pero no evita una inyección SQL, una autorización mal hecha ni un secreto subido al repositorio. → Idea 1.\n\n**¿Qué diferencia hay entre validar la entrada y codificar la salida?**\nValidar es comprobar al entrar que el dato tiene el tipo, la longitud y el formato esperados; si no, se rechaza. Codificar es transformar el dato al mostrarlo en HTML o SQL, para que se lea como texto y no como código. Se necesitan las dos: un comentario puede contener `<` legítimamente, así que no se puede rechazar, pero hay que codificarlo. → Idea 3, demos 1 y 2.\n\n**¿Autenticación o autorización?**\nLa autenticación comprueba quién eres; la autorización, qué puedes hacer. Ejemplo: cambiar `/facturas/1001` por `/facturas/1002` funciona si el servidor sólo mira que hay sesión iniciada (es el A01 de OWASP). La autorización se comprueba en cada operación. → Idea 4.\n\n**¿Por qué no SHA-256 para contraseñas?**\nPorque es rápido, y el atacante quiere probar millones de contraseñas por segundo. Para contraseñas se usan funciones lentas y con sal única: Argon2id, bcrypt o scrypt. SHA-256 sirve para comprobar la integridad. → Idea 6, demo 3.\n\n**¿Por qué la demo usa PBKDF2 si los apuntes dicen Argon2id?**\nPorque PBKDF2 viene de serie en el navegador (Web Crypto API) y Argon2id necesitaría una biblioteca externa. OWASP acepta PBKDF2 con 600 000 iteraciones. La idea que se demuestra es la misma: coste + sal.\n\n**¿Qué es un SBOM y para qué sirve?**\nEs el inventario de componentes y versiones de un software. Cuando sale una vulnerabilidad en una biblioteca, sirve para saber enseguida si nos afecta. → Idea 5.\n\n**¿SAST o DAST?**\nSAST lee el código sin ejecutarlo; DAST ataca la aplicación en marcha. Ninguna lo detecta todo, por eso se combinan con fuzzing, sanitizadores, revisión de código y pruebas de regresión. → Idea 7.\n\n**¿ASLR, NX y los *stack canaries* eliminan la vulnerabilidad?**\nNo. Hacen más difícil explotarla, pero el fallo sigue ahí. → Idea 7.\n\n**¿Cómo se previene una denegación de servicio desde el código?**\nCon límites de tamaño, *timeouts*, cuotas, *rate limiting* y cuidado con las expresiones regulares y los deserializadores. → Ideas 3 y 6 del glosario (DoS, *rate limiting*).\n\n### Sobre las decisiones con IA\n\n**¿Por qué el iframe de la demo 2 no ejecuta el XSS?**\nUna web pública no debe ejecutar cargas de ataque, aunque sean inofensivas. El iframe tiene `sandbox=\"\"` y una CSP propia, y la web explica qué habría pasado. → PROCESO, fase 3.b.\n\n**¿Qué aceptasteis y qué rechazasteis de lo que propuso la IA?**\nPor ejemplo, de la skill pública aceptamos 7 hallazgos, 2 en parte y rechazamos 1 (SE-8: exigir sales largas impediría usar el vector oficial del RFC). → [skill-publica.md](skill-publica.md).\n\n**¿Cómo comprobasteis que lo que decía la IA era cierto?**\nCon los apuntes y con OWASP, con los vectores oficiales de prueba (FIPS 180-2 y RFC 7914) en `tests/demo.test.js`, comprobando en Chrome los hallazgos de la skill pública y abriendo los enlaces. → PROCESO, fase 4.\n\n**¿Por qué no hay *Copy All*?**\nPorque usamos Claude Code, que es de terminal. Exportamos sus historiales `.jsonl` con un script que anonimiza, y explicamos las limitaciones en `conversaciones-ia/README.md`.\n\n### Sobre las skills\n\n**Skill pública (`sharp-edges`, Trail of Bits).** Busca APIs y configuraciones en las que lo fácil es lo inseguro (*secure by default*, §8.1). La aplicamos a `js/demo.js` en modo de sólo lectura y dio 10 hallazgos. Límites: está pensada para librerías y no para el DOM, pide reproducir los fallos pero sólo permite leer, y puede pasarse de celo con código inseguro a propósito.\n\n**Skill propia (`revision-entradas-salidas`).** Revisa un fragmento corto buscando flujos fuente → destino peligroso y dice si falta validación o codificación. Deja fuera la criptografía, la autorización y las auditorías completas. Se probó dos veces en conversaciones distintas de la de creación. De la v1.0 a la v1.1: columna con el nombre de la vulnerabilidad, informe más corto, regla para agrupar flujos y aviso de comprobar las reglas de herramientas.\n"
}
~~~~

<details><summary>Resultado de herramienta</summary>

```
File created successfully at: <HOME>\Documents\PuestaEnProduccion\Ut1\trabajo\evidencias\preparacion-entrevista.md (file state is current in your context — no need to Read it back)
```

</details>

**🔧 Herramienta `Edit`**

```json
{
  "replace_all": false,
  "file_path": "<HOME>\\Documents\\PuestaEnProduccion\\Ut1\\trabajo\\evidencias\\preparacion-entrevista.md",
  "old_string": "→ Ideas 3 y 6 del glosario (DoS, *rate limiting*).",
  "new_string": "→ Idea 3 y glosario (DoS, *rate limiting*)."
}
```

<details><summary>Resultado de herramienta</summary>

```
The file <HOME>\Documents\PuestaEnProduccion\Ut1\trabajo\evidencias\preparacion-entrevista.md has been updated successfully. (file state is current in your context — no need to Read it back)
```

</details>

## 🤖 Claude · 2026-10-26 17:30:56 UTC

Ahora actualizo `PROCESO.md`: el índice de conversaciones, la nueva fase 5.c, el registro de correcciones y la casilla de Pages.

**🔧 Herramienta `Edit`**

```json
{
  "replace_all": false,
  "file_path": "<HOME>\\Documents\\PuestaEnProduccion\\Ut1\\trabajo\\PROCESO.md",
  "old_string": "| [`05-claude-code-revision-y-publicacion.md`](conversaciones-ia/05-claude-code-revision-y-publicacion.md) | 5 | Revisión de lo que faltaba, nombres del grupo, git, GitHub Pages y comprobación de la web publicada |\n",
  "new_string": "| [`05-claude-code-revision-y-publicacion.md`](conversaciones-ia/05-claude-code-revision-y-publicacion.md) | 5 | Revisión de lo que faltaba, nombres del grupo, git, GitHub Pages y comprobación de la web publicada |\n| [`06-claude-code-revision-final.md`](conversaciones-ia/06-claude-code-revision-final.md) | 5 | Segunda revisión contra el enunciado, huecos del §8 en la web, prueba de la web publicada a 360 px y guía de la entrevista |\n"
}
```

**🔧 Herramienta `Edit`**

```json
{
  "replace_all": false,
  "file_path": "<HOME>\\Documents\\PuestaEnProduccion\\Ut1\\trabajo\\PROCESO.md",
  "old_string": "| **Conversación de origen** | `05-claude-code-revision-y-publicacion.md` |\n\n---",
  "new_string": "| **Conversación de origen** | `05-claude-code-revision-y-publicacion.md` |\n\n### 5.c Segunda revisión contra el enunciado\n\n| Campo | Registro |\n|---|---|\n| **Objetivo** | Volver a comprobar el repositorio contra la lista de comprobación y la rúbrica, y completar lo que se pudiera sin el resto del grupo. |\n| **Herramienta** | Claude Code, en una sesión nueva. `curl`, API de GitHub, `node --test`, `grep` y Chrome sin interfaz sobre la web publicada. |\n| **Prompt** | «tienes que hacerme esto [enunciado] sobre este punto [sección 8 de los apuntes], mirame a ver que me falta» y, después, «hazme y consigueme todo lo que este en tu mano de lo que falta». |\n| **Resultado** | No faltaba ningún archivo obligatorio. La IA señaló como riesgos para la nota: (1) las decisiones siguen «pendientes de validar por el grupo» (criterio 3); (2) sólo hay conversaciones de Daniel B. (criterio 7); (3) los textos de la web los redactó la IA («palabras propias», criterio 2); (4) la conversación 05 estaba incompleta (426 de 444 eventos). Al comparar la web con el §8, encontró tres puntos poco desarrollados: compilación segura (§8.4), *timeouts* y expresiones regulares y deserializadores (§8.8), y el uso correcto de los hashes de integridad (§8.7). |\n| **Decisión** | (1) Volver a exportar la 05, ya completa. (2) Añadir una frase en las ideas 3, 5 y 6 para cubrir esos puntos del §8. (3) Crear [`evidencias/preparacion-entrevista.md`](evidencias/preparacion-entrevista.md) con las tareas que sólo pueden hacer los integrantes (reescribir ideas, abrir las fuentes, tercera prueba de la skill con Copilot, probar en el móvil) y un guion de preguntas para la entrevista. (4) **No** marcar como validadas por el grupo decisiones que el grupo no ha revisado. |\n| **Justificación** | (2) El criterio 1 pide cubrir las secciones elegidas, y en la fase 1 elegimos el §8 completo. (3) La IA no puede sustituir la participación de cada integrante, pero sí dejar claro qué tiene que hacer cada uno y cómo registrarlo. (4) Sería falsear el registro. |\n| **Verificación** | API de GitHub: repositorio público y `has_pages: true`. La web, el CSS y el JS publicados responden 200. Tests: 11 de 11 en verde. `grep` sin datos personales. **Web publicada a 360 px:** la primera captura con Chrome sin interfaz salía cortada, pero no era un fallo de la web: en Windows, Chrome no baja de unos 500 px de ventana. Al cargar la web dentro de un `iframe` de exactamente 360 px se ve el botón «Menú», el texto se ajusta y no hay desplazamiento horizontal. |\n| **Participación** | Daniel B. (lanzó la revisión). La IA hizo la revisión, las ediciones y las comprobaciones. |\n| **Conversación de origen** | `06-claude-code-revision-final.md` |\n\n---"
}
```

**🔧 Herramienta `Edit`**

```json
{
  "replace_all": false,
  "file_path": "<HOME>\\Documents\\PuestaEnProduccion\\Ut1\\trabajo\\PROCESO.md",
  "old_string": "| Enlaces al repositorio de GitHub |\n",
  "new_string": "| Enlaces al repositorio de GitHub |\n| 9 | La web apenas trataba la compilación segura (§8.4), los *timeouts*, las expresiones regulares y los deserializadores (§8.8) ni para qué sirve un hash de integridad (§8.7) | Comparación de la web con el §8 (fase 5.c) | Una frase más en las ideas 3, 5 y 6 |\n| 10 | La conversación 05 se exportó antes de terminar (426 de 444 eventos) | Comparación del número de líneas del historial | Nueva exportación desde el historial definitivo |\n"
}
```

**🔧 Herramienta `Edit`**

```json
{
  "replace_all": false,
  "file_path": "<HOME>\\Documents\\PuestaEnProduccion\\Ut1\\trabajo\\PROCESO.md",
  "old_string": "Antes de entregar, **cada integrante** debe revisar lo que le corresponde y marcarlo. Si algo se cambia, hay que añadirlo al registro de correcciones.\n",
  "new_string": "Antes de entregar, **cada integrante** debe revisar lo que le corresponde y marcarlo. Si algo se cambia, hay que añadirlo al registro de correcciones. El reparto concreto y el procedimiento de cada tarea están en [`evidencias/preparacion-entrevista.md`](evidencias/preparacion-entrevista.md).\n"
}
```

**🔧 Herramienta `Edit`**

```json
{
  "replace_all": false,
  "file_path": "<HOME>\\Documents\\PuestaEnProduccion\\Ut1\\trabajo\\PROCESO.md",
  "old_string": "- [ ] **Web:** crear el repositorio público `Actividad-grupal-UD1`, activar GitHub Pages y comprobar la web sin iniciar sesión y en el móvil. Los enlaces de `README.md` e `index.html` ya están cambiados.\n",
  "new_string": "- [x] **Web:** crear el repositorio público `Actividad-grupal-UD1`, activar GitHub Pages y comprobar que la web se abre sin iniciar sesión (fases 5.b y 5.c).\n- [ ] **Todos:** abrir la web publicada en vuestro propio móvil. Hasta ahora sólo se ha comprobado a 360 px con Chrome automatizado (fase 5.c).\n- [ ] **Pablo V.:** tercera prueba de la skill propia con Copilot Chat, guardando la conversación con *Copy All*.\n"
}
```

<details><summary>Resultado de herramienta</summary>

```
The file <HOME>\Documents\PuestaEnProduccion\Ut1\trabajo\PROCESO.md has been updated successfully. (file state is current in your context — no need to Read it back)
```

</details>

<details><summary>Resultado de herramienta</summary>

```
The file <HOME>\Documents\PuestaEnProduccion\Ut1\trabajo\PROCESO.md has been updated successfully. (file state is current in your context — no need to Read it back)
```

</details>

<details><summary>Resultado de herramienta</summary>

```
The file <HOME>\Documents\PuestaEnProduccion\Ut1\trabajo\PROCESO.md has been updated successfully. (file state is current in your context — no need to Read it back)
```

</details>

<details><summary>Resultado de herramienta</summary>

```
The file <HOME>\Documents\PuestaEnProduccion\Ut1\trabajo\PROCESO.md has been updated successfully. (file state is current in your context — no need to Read it back)
```

</details>

<details><summary>Resultado de herramienta</summary>

```
The file <HOME>\Documents\PuestaEnProduccion\Ut1\trabajo\PROCESO.md has been updated successfully. (file state is current in your context — no need to Read it back)
```

</details>

## 🤖 Claude · 2026-10-26 17:31:20 UTC

Ahora actualizo el README de `conversaciones-ia/` y el README principal.

**🔧 Herramienta `Edit`**

```json
{
  "replace_all": false,
  "file_path": "<HOME>\\Documents\\PuestaEnProduccion\\Ut1\\trabajo\\conversaciones-ia\\README.md",
  "old_string": "| Revisión de lo que faltaba, nombres del grupo, git, GitHub Pages y comprobación de la web publicada | 5.b |\n",
  "new_string": "| Revisión de lo que faltaba, nombres del grupo, git, GitHub Pages y comprobación de la web publicada | 5.b |\n| [`06-claude-code-revision-final.md`](06-claude-code-revision-final.md) | Claude Code (Opus 5.5) | Segunda revisión contra el enunciado, huecos del §8 en la web, prueba a 360 px y guía de la entrevista | 5.c |\n"
}
```

**🔧 Herramienta `Edit`**

```json
{
  "replace_all": false,
  "file_path": "<HOME>\\Documents\\PuestaEnProduccion\\Ut1\\trabajo\\conversaciones-ia\\README.md",
  "old_string": "6. **Final de la conversación 05:** se exportó desde la misma sesión, antes del último mensaje de la IA. Puede faltar ese mensaje final, que es la confirmación del commit. Se regenera con el mismo comando, cambiando el fichero de sesión y el nombre de salida.",
  "new_string": "6. **Final de las conversaciones 05 y 06:** cada una se exportó primero desde su propia sesión, así que le faltaba el final. La 05 se volvió a exportar desde la sesión 06 y ya está completa (444 eventos, antes 426). La 06 se exportó desde dentro de sí misma, antes del último mensaje de la IA, así que le falta ese mensaje: el resumen final y la confirmación del `push`. Se regenera con el mismo comando, cambiando el fichero de sesión y el nombre de salida."
}
```

**🔧 Herramienta `Edit`**

```json
{
  "replace_all": false,
  "file_path": "<HOME>\\Documents\\PuestaEnProduccion\\Ut1\\trabajo\\README.md",
  "old_string": "| [`evidencias/prueba-skill-propia.md`](evidencias/prueba-skill-propia.md) | Prueba de la skill propia: resultado esperado, obtenido, comparación y mejoras. |\n",
  "new_string": "| [`evidencias/prueba-skill-propia.md`](evidencias/prueba-skill-propia.md) | Prueba de la skill propia: resultado esperado, obtenido, comparación y mejoras. |\n| [`evidencias/preparacion-entrevista.md`](evidencias/preparacion-entrevista.md) | Tareas pendientes de cada integrante y guion de preguntas para la entrevista. |\n"
}
```

<details><summary>Resultado de herramienta</summary>

```
The file <HOME>\Documents\PuestaEnProduccion\Ut1\trabajo\conversaciones-ia\README.md has been updated successfully.
```

</details>

<details><summary>Resultado de herramienta</summary>

```
The file <HOME>\Documents\PuestaEnProduccion\Ut1\trabajo\conversaciones-ia\README.md has been updated successfully.
```

</details>

<details><summary>Resultado de herramienta</summary>

```
The file <HOME>\Documents\PuestaEnProduccion\Ut1\trabajo\README.md has been updated successfully.
```

</details>
