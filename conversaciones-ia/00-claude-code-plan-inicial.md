# Conversación 00 · Claude Code · Lectura del enunciado y plan inicial

> Exportado automáticamente del historial local de Claude Code (45 eventos).
> Se han anonimizado rutas locales, nombre de usuario y correo. Se omiten los recordatorios internos del sistema
> y el razonamiento interno del modelo. Las salidas de herramientas de más de 4000 caracteres se recortan.

## 👤 Usuario · 2026-10-26 16:33:02 UTC

<local-command-caveat>The command below was run directly in Claude Code, not sent to you as a request, and its output goes straight to the user. It's recorded here as context for later messages.</local-command-caveat>

## 👤 Usuario · 2026-10-26 16:33:02 UTC

<command-name>/plugin</command-name>
            <command-message>plugin</command-message>
            <command-args></command-args>

## 👤 Usuario · 2026-10-26 16:33:02 UTC

<local-command-stdout>(no content)</local-command-stdout>

## 👤 Usuario · 2026-10-26 16:33:07 UTC

<local-command-caveat>The command below was run directly in Claude Code, not sent to you as a request, and its output goes straight to the user. It's recorded here as context for later messages.</local-command-caveat>

## 👤 Usuario · 2026-10-26 16:33:07 UTC

<command-name>/model</command-name>
            <command-message>model</command-message>
            <command-args></command-args>

## 👤 Usuario · 2026-10-26 16:33:07 UTC

<local-command-stdout>Set model to `Opus 5.5` and saved as your default for new sessions</local-command-stdout>

## 👤 Usuario · 2026-10-26 16:33:46 UTC

<pasted_content id="5987">
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
</pasted_content id="5987">

 y hay que hacerlo sobre esto, 

<pasted_content id="5987">
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
</pasted_content id="5987">

, antes de hacer nada, hablame sobre que habria que hacer

## 🤖 Claude · 2026-10-26 16:34:28 UTC

### Qué hay que hacer: plan para el Grupo 5, «Desarrollo seguro»

#### 1. Lo que piden en realidad

Hay que entregar un **repositorio público de GitHub** con estas piezas:

| Pieza | Puntos en la rúbrica | Comentario |
|---|---|---|
| `PROCESO.md` + `conversaciones-ia/` | **30** | Es lo que más puntúa. Importa más el registro del proceso que la web. |
| Web (GitHub Pages) + demostración | 15 | |
| Adecuación al tema | 15 | |
| Skill propia + prueba | 15 | |
| Skill pública analizada | 10 | |
| Claridad + fuentes | 10 | |
| Entrevista individual | 5 | Los tres tenéis que saber explicarlo todo. |

**Lo más importante:** guardad **todas** las conversaciones con IA desde el principio, también esta. Yo soy Claude Code, no Copilot, así que en lugar de *Copy All* se usa el comando **`/export`**, que guarda la conversación en un archivo. Antes de subirlas hay que revisarlas, porque aquí aparecen tu ruta local (`<HOME>\...`) y otros datos que hay que quitar.

#### 2. Una duda sobre el material

El enunciado dice «Desarrollo seguro **y mitigaciones** de pps1_06». Lo que has pegado es solo la sección 8, que trata del desarrollo seguro. Comprueba si `pps1_06 seguridad_lenguajes.md` tiene otra sección de **mitigaciones** (ASLR, DEP/NX, *stack canaries*, PIE, RELRO, etc.). Si la tiene, seguramente la profesora espera que aparezca algo de ella.

#### 3. Alcance (Fase 1)

La sección 8 tiene 9 apartados y solo podéis desarrollar entre 5 y 7 ideas clave, así que hay que elegir. Esta es mi propuesta:

**Ideas clave:**
1. **La seguridad es un proceso (SSDLC):** se trabaja en las 7 fases, no se añade al final (8.9).
2. **Modelado de amenazas:** activos, superficie de ataque, fronteras de confianza, mínimo privilegio y seguro por defecto (8.1).
3. **Toda entrada es no confiable:** diferencia entre validar la entrada y codificar la salida (8.2).
4. **Autenticación ≠ autorización:** y la autorización se comprueba en cada operación (8.3).
5. **Contraseñas:** se guardan con Argon2id o bcrypt con salt, nunca con SHA-256 (8.7).
6. **Secretos y errores:** nada de claves en el repositorio, y los mensajes de error no deben revelar información interna (8.6).
7. **Ninguna herramienta lo detecta todo:** SAST, DAST, fuzzing y sanitizadores se combinan (8.5).

**Solo en el glosario o fuera del alcance:** cadena de suministro y SBOM (8.4), DoS y rate limiting (8.8) y los detalles de TLS. Esta elección y su motivo van en `PROCESO.md`.

#### 4. Demostración

GitHub Pages solo sirve páginas estáticas, así que recomiendo una **demo interactiva en el navegador**:

- **Demo de XSS (recomendada):** un campo de texto que muestra lo que escribes de dos formas, con `innerHTML` (vulnerable) y con `textContent` o escapado (seguro). Si escribes `<img src=x onerror=alert(1)>` se ve la diferencia. Ilustra justo la idea 3, funciona en la propia web y cualquiera puede comprobarla.
- **Complemento opcional:** calcular SHA-256 de una contraseña con Web Crypto. Se ve que siempre da el mismo hash y que es instantáneo, frente a un hash con salt. Ilustra la idea 5.
- **Diagrama del SSDLC** en SVG o CSS.

#### 5. Las dos skills

**Skill pública:** buscad una relacionada con seguridad, por ejemplo en los repositorios públicos de skills de Anthropic (`anthropics/skills`) o de Trail of Bits, que publica skills de auditoría de seguridad. Comprobad antes que existen y qué hacen. Hay que leerla y entenderla **antes** de usarla, sin ejecutar scripts suyos a ciegas, y después aplicarla a algo del proyecto y valorarla con sentido crítico.

**Skill propia:** propongo una que sirva al tema y al proyecto a la vez: **«revisar un texto o código antes de publicarlo en busca de secretos y datos sensibles»** (claves API, tokens, contraseñas, rutas locales, emails, nombres completos).
- Aplica directamente el apartado 8.6 (gestión de secretos).
- Os sirve de verdad para revisar las conversaciones antes de subirlas, como pide el apartado 7 del enunciado.
- Se prueba fácilmente: preparáis un texto con una clave falsa, una ruta `<HOME>` y un email, escribís el resultado esperado **antes** de la prueba y lo comparáis con lo que obtenéis, en una conversación distinta de la de creación.

#### 6. Estructura y reparto

```
repositorio/
├── README.md            (grupo, "Daniel B." etc., tema, enlace a la web)
├── index.html  + css/ js/
├── PROCESO.md
├── conversaciones-ia/   (01-alcance.md, 02-plan.md, ... + README.md)
├── evidencias/ fuentes.md · skill-publica.md · prueba-skill-propia.md
└── skills/revision-datos-sensibles/SKILL.md
```

**Fuentes adicionales fiables** para contrastar: OWASP (Cheat Sheets de validación de entradas, XSS, almacenamiento de contraseñas y gestión de secretos; ASVS), NIST SSDF (SP 800-218) y Microsoft SDL.

**Roles a rotar:** contenido (síntesis, glosario y fuentes), verificación (contrastar con los apuntes y OWASP y probar la demo) y web/publicación.

#### 7. Cómo puedo ayudar sin perjudicaros en la rúbrica

Puedo ayudaros con la web, la demo, el borrador de la skill y la estructura de los archivos. Pero la rúbrica premia que **decidáis y verifiquéis vosotros**: en `PROCESO.md` tiene que constar qué aceptasteis, qué cambiasteis y qué rechazasteis de lo que propone la IA, y por qué. Conviene usar **una conversación por fase o tarea**, que facilita la trazabilidad, y hacer `/export` al terminar cada una.

---

**Antes de empezar necesito saber:**
1. ¿Tenéis los archivos de apuntes (`pps1_06 seguridad_lenguajes.md`, etc.) en esta carpeta? ¿Hay sección de mitigaciones?
2. ¿Quiénes son los otros dos integrantes (nombre e inicial) y qué IA va a usar cada uno?
3. ¿Os convencen el alcance, la demo de XSS y la skill de datos sensibles, o preferís otra cosa?
