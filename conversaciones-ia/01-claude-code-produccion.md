# Conversación 01 · Claude Code · Producción completa del proyecto

> Exportado automáticamente del historial local de Claude Code (833 eventos).
> Se han anonimizado rutas locales, nombre de usuario y correo. Se omiten los recordatorios internos del sistema
> y el razonamiento interno del modelo. Las salidas de herramientas de más de 4000 caracteres se recortan.

## 👤 Usuario · 2026-10-26 16:36:54 UTC

<local-command-caveat>The command below was run directly in Claude Code, not sent to you as a request, and its output goes straight to the user. It's recorded here as context for later messages.</local-command-caveat>

## 👤 Usuario · 2026-10-26 16:36:54 UTC

<command-name>/clear</command-name>
            <command-message>clear</command-message>
            <command-args></command-args>

## 👤 Usuario · 2026-10-26 16:38:00 UTC

tienes que hacerme esto 

<pasted_content id="ad22">
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
</pasted_content id="ad22">

, sobre este punto 

<pasted_content id="ad22">
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
</pasted_content id="ad22">

, hazme todo lo que pide por favor

**🔧 Herramienta `Bash`**

```json
{
  "command": "cd \"<HOME>/Documents/PuestaEnProduccion/Ut1/trabajo\" && ls -la && find . -maxdepth 3 -not -path '*/.git*' | head -50; git --version; gh --version 2>/dev/null | head -1",
  "description": "List working directory contents and tool versions"
}
```

<details><summary>Resultado de herramienta</summary>

```
total 4
drwxr-xr-x 1 <dato-personal> 1049089 0 Oct 26 17:30 .
drwxr-xr-x 1 <dato-personal> 1049089 0 Oct 26 17:31 ..
.
git version 2.55.0.windows.5
```

</details>

**🔧 Herramienta `Bash`**

```json
{
  "command": "cd \"<HOME>/Documents/PuestaEnProduccion\" && find . -maxdepth 3 | head -50",
  "description": "Look for unit notes in parent folders"
}
```

<details><summary>Resultado de herramienta</summary>

```
.
./Ut1
./Ut1/Elementos_Basicos_Del_Codigo_Fuente_Ut1_Puesta_En_Produccion.pdf
./Ut1/Introduccion_Lenguajes_Programacion_Ut1_Puesta_En_Produccion.pdf
./Ut1/pps-main
./Ut1/pps-main/.git
./Ut1/pps-main/.gitignore
./Ut1/pps-main/pps1_00 wsl.md
./Ut1/pps-main/pps1_01 proceso compilación.md
./Ut1/pps-main/pps1_02 vscode.md
./Ut1/pps-main/pps1_03 debug.md
./Ut1/pps-main/pps1_03 monster-battle-debug
./Ut1/pps-main/pps1_04 emmet.md
./Ut1/pps-main/pps1_05 githubCopilot.md
./Ut1/pps-main/pps1_06 seguridad_lenguajes.md
./Ut1/pps-main/README.md
./Ut1/trabajo
Shell cwd was reset to <HOME>\Documents\PuestaEnProduccion\Ut1\trabajo
```

</details>

**🔧 Herramienta `Bash`**

```json
{
  "command": "cd \"<HOME>/Documents/PuestaEnProduccion/Ut1/pps-main\" && wc -l *.md && cat README.md && git remote -v && grep -n \"^#\" \"pps1_06 seguridad_lenguajes.md\"",
  "description": "Inspect notes repo and security notes outline"
}
```

<details><summary>Resultado de herramienta</summary>

```
1 README.md
   158 pps1_00 wsl.md
   480 pps1_01 proceso compilación.md
   818 pps1_02 vscode.md
   404 pps1_03 debug.md
   662 pps1_04 emmet.md
   935 pps1_05 githubCopilot.md
   484 pps1_06 seguridad_lenguajes.md
  3942 total
# pps
Complemento de los apuntes de PPS origin	https://github.com/msolds/pps.git (fetch)
origin	https://github.com/msolds/pps.git (push)
1:# Seguridad en Lenguajes de Programación
7:## 1. La Seguridad como Arquitectura por Capas
21:## 2. Seguridad de Memoria (_Memory Safety_)
25:### 2.1. Principales vulnerabilidades de corrupción de memoria
33:### 2.2. Comparativa práctica de comprobación de límites
35:#### Ejemplo en C
40:#include <stdio.h>
57:#### Ejemplo en Java
78:### 2.3. C/C++ frente a Rust
90:## 3. Modelos de Ejecución
92:### 3.1. Código nativo
107:### 3.2. Máquinas virtuales y _runtimes_
129:### 3.3. Lenguajes con runtimes de alto nivel
147:## 4. Ejecución Dinámica y Tratamiento de Datos
151:### 4.1. Evaluación dinámica e inyección de código
155:#### Ejemplo vulnerable
162:# ❌ VULNERABLE
222:## 4.2. Deserialización insegura
252:## 4.3. Reflexión y acceso a código nativo
254:### Reflexión
273:### Acceso a código nativo desde runtimes
293:## 5. Aislamiento, Sandboxing y Mecanismos del Kernel Linux
297:### 5.1. Contenedores frente a máquinas virtuales
302:### 5.2. Mecanismos del kernel Linux
312:### 5.3. WebAssembly (WASM)
322:## 6. Seguridad en Aplicaciones y Mitigaciones frente a Vulnerabilidades
324:### 6.1. Principio de mínimo privilegio y vulnerabilidades web
335:### 6.2. Criptografía y almacenamiento seguro de contraseñas
349:### 6.3. Mitigaciones a nivel de compilador y sistema operativo
361:## 7. Caso práctico: `sudo` frente a `sudo-rs`
365:### 7.1. El desafío histórico de `sudo`
373:### 7.2. La solución: `sudo-rs`
379:### 7.3. Comparativa técnica
392:# 8. Desarrollo Seguro, Validación y Gestión del Ciclo de Vida del Software
398:### 8.1. Modelado de Amenazas y Diseño Seguro
412:### 8.2. Validación de Entradas y Prevención de Inyecciones
415:#### Diferencia clave: Validación vs. Codificación de Salidas
421:### 8.3. Autenticación, Autorización y Gestión de Sesiones
429:### 8.4. Gestión de Dependencias y Cadena de Suministro (*Software Supply Chain*)
438:### 8.5. Pruebas y Análisis de Seguridad
450:### 8.6. Gestión Segura de Secretos, Errores y Registros
456:### 8.7. Criptografía Aplicada y Protección de Comunicaciones
463:### 8.8. Disponibilidad y Prevención de Denegación de Servicio (DoS)
471:### 8.9. Ciclo de Vida de Desarrollo Seguro (SSDLC)
483:# Conclusión: La Seguridad como Propiedad del Sistema Completo
Shell cwd was reset to <HOME>\Documents\PuestaEnProduccion\Ut1\trabajo
```

</details>

**🔧 Herramienta `Bash`**

```json
{
  "command": "cd \"<HOME>/Documents/PuestaEnProduccion/Ut1/pps-main\" && sed -n '1,20p;147,222p;322,392p;483,484p' \"pps1_06 seguridad_lenguajes.md\"",
  "description": "Read relevant sections of security notes"
}
```

<details><summary>Resultado de herramienta</summary>

~~~~
# Seguridad en Lenguajes de Programación

La seguridad del software es una disciplina integral que no puede confiarse a un único mecanismo defensivo, como un cortafuegos o un filtro perimetral. Requiere un enfoque estructurado en capas interdependientes, donde cada nivel contribuye a reducir la superficie de ataque y contener posibles vulnerabilidades.

---

## 1. La Seguridad como Arquitectura por Capas

La seguridad debe analizarse mediante una estrategia de **defensa en profundidad**, cuyo objetivo es evitar que el fallo o la explotación de una única capa comprometa la totalidad del sistema.

- **Lenguaje de programación:** Define características como el modelo de gestión de memoria, el sistema de tipos y el grado de acceso a memoria mediante punteros.
- **Compilador y entorno de ejecución (**_runtime_**):** Transforman el código y proporcionan mecanismos como comprobaciones de tipos, gestión de memoria, comprobaciones de límites, gestión de excepciones y optimizaciones.
- **Sistema operativo (SO):** Aplica restricciones de acceso a archivos, procesos, dispositivos, sockets de red y llamadas al sistema, siguiendo mecanismos como el **principio de mínimo privilegio**.
- **Aislamiento (**_sandboxing_**):** Limita el entorno de ejecución de un proceso para reducir el impacto de un posible compromiso.
- **Aplicación y dependencias:** Implementan la lógica de negocio, autenticación, autorización, validación de entradas y uso de bibliotecas de terceros.

> **Idea clave:** Una característica de seguridad del lenguaje puede prevenir clases completas de errores, pero **no convierte automáticamente una aplicación en invulnerable**.

---

## 4. Ejecución Dinámica y Tratamiento de Datos

Convertir datos no confiables en código ejecutable representa una importante fuente de vulnerabilidades.

### 4.1. Evaluación dinámica e inyección de código

Funciones como `eval()` y `exec()` pueden convertir una entrada externa en código Python ejecutable.

#### Ejemplo vulnerable

```python
import os

entrada = input("Introduce un comando: ")

# ❌ VULNERABLE
eval(f"os.system('{entrada}')")
```

El problema es que la entrada del usuario deja de tratarse como un dato y termina formando parte de código que será evaluado.

> **Regla práctica:** Los datos deben permanecer como datos y no transformarse innecesariamente en código ejecutable.

Para interpretar estructuras de datos sencillas en texto, puede utilizarse:

```python
import ast

entrada = input("Introduce una estructura: ")

try:
    datos = ast.literal_eval(entrada)
    print(datos)
except (ValueError, SyntaxError):
    print("Entrada no válida")
```

`ast.literal_eval()` permite interpretar literales de Python, como cadenas, números, listas o diccionarios, pero **no debe utilizarse para ejecutar comandos del sistema**.

Cuando una aplicación necesita ejecutar procesos externos, es preferible utilizar `subprocess` y restringir explícitamente las operaciones permitidas.

```python
import platform
import subprocess

system = platform.system()

if system == "Windows":
    allowed_commands = {
        "date": ["cmd", "/c", "date", "/t"],
        "directory": ["cmd", "/c", "dir"],
    }

elif system in ("Linux", "Darwin"):
    allowed_commands = {
        "date": ["date"],
        "directory": ["ls"],
    }

else:
    print(f"Unsupported operating system: {system}")
    raise SystemExit

command = input("Enter a command: ")

if command in allowed_commands:
    subprocess.run(allowed_commands[command], check=True)
else:
    print("Command not allowed.")
```

En este ejemplo, la entrada del usuario únicamente selecciona una operación de una **lista blanca**. El texto introducido no se ejecuta directamente.

---

## 4.2. Deserialización insegura
## 6. Seguridad en Aplicaciones y Mitigaciones frente a Vulnerabilidades

### 6.1. Principio de mínimo privilegio y vulnerabilidades web

Un proceso debe ejecutarse únicamente con los permisos necesarios para realizar su función.

Entre las vulnerabilidades web
… [salida recortada: 5278 caracteres más]
~~~~

</details>

**🔧 Herramienta `ToolSearch`**

```json
{
  "query": "select:WebFetch,WebSearch",
  "max_results": 2
}
```

<details><summary>Resultado de herramienta</summary>

```
[tool_reference]
[tool_reference]
```

</details>

**🔧 Herramienta `WebFetch`**

```json
{
  "url": "https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html",
  "prompt": "Give the exact recommended parameters for Argon2id, scrypt, bcrypt and PBKDF2 (iterations for PBKDF2-HMAC-SHA256). Also what it says about salts and fast hashes like SHA-256."
}
```

**🔧 Herramienta `WebFetch`**

```json
{
  "url": "https://github.com/trailofbits/skills",
  "prompt": "List the skills/plugins in this repository with their exact names and paths, and the license."
}
```

**🔧 Herramienta `WebFetch`**

```json
{
  "url": "https://github.com/anthropics/skills/tree/main/skills",
  "prompt": "List the skill folder names in this directory."
}
```

<details><summary>Resultado de herramienta</summary>

```
The `skills` directory in `anthropics/skills` contains these 19 folders:

1. academy-guide
2. algorithmic-art
3. brand-guidelines
4. canvas-design
5. claude-api
6. discernment-nudge
7. doc-coauthoring
8. docx
9. frontend-design
10. internal-comms
11. mcp-builder
12. pdf
13. pptx
14. skill-creator
15. slack-gif-creator
16. theme-factory
17. web-artifacts-builder
18. webapp-testing
19. xlsx

The page ends with a "View all files" link, so the captured listing may be truncated and the directory could contain more folders.
```

</details>

<details><summary>Resultado de herramienta</summary>

```
**Recommended parameters**

- **Argon2id:** Minimum of 19 MiB memory (m=19456), 2 iterations (t=2), and parallelism of 1 (p=1). The page also lists alternatives such as m=12288 with t=3, or m=7168 with t=5.
- **scrypt:** Minimum CPU/memory cost N=2^17 (128 MiB), block size r=8 (1024 bytes), and parallelization p=1. Alternatives include N=2^16 with p=2, or N=2^14 with p=5.
- **bcrypt (legacy systems only):** Work factor of at least 10. Passwords are limited to 72 bytes.
- **PBKDF2-HMAC-SHA256:** 600,000 iterations (recommended). PBKDF2-HMAC-SHA512 uses 220,000 iterations.

**Salts**

The page says "A unique salt must be added to each password" to block precomputed lookup tables such as rainbow tables. Salts are randomly generated per password, and most libraries manage them automatically. Because of salting, identical passwords produce different hashes.

**Fast hashes like SHA-256**

The page says "Fast hashing algorithms such as SHA‑256 are not suitable for password storage" because they let attackers guess passwords quickly. It recommends slow, memory-hard algorithms instead.
```

</details>

<details><summary>Resultado de herramienta</summary>

```
**License:** CC-BY-SA-4.0. The README says the work is "licensed under a Creative Commons Attribution-ShareAlike 4.0 International License."

**Plugins** (all under `plugins/`, as listed on the page):

**Smart Contract Security**
- `plugins/building-secure-contracts`
- `plugins/entry-point-analyzer`

**Code Auditing**
- `plugins/agentic-actions-auditor`
- `plugins/audit-context-building`
- `plugins/burpsuite-project-parser`
- `plugins/c-review`
- `plugins/differential-review`
- `plugins/dimensional-analysis`
- `plugins/fp-check`
- `plugins/insecure-defaults`
- `plugins/rust-review`
- `plugins/semgrep-rule-creator`
- `plugins/semgrep-rule-variant-creator`
- `plugins/sharp-edges`
- `plugins/static-analysis`
- `plugins/supply-chain-risk-auditor`
- `plugins/testing-handbook-skills`
- `plugins/trailmark`
- `plugins/variant-analysis`
- `plugins/vulnerability-triage-brocards`

**Malware Analysis**
- `plugins/yara-authoring`

**Verification**
- `plugins/constant-time-analysis`
- `plugins/mutation-testing`
- `plugins/patching-bugs`
- `plugins/post-patch-validation`
- `plugins/property-based-testing`
- `plugins/regression-hunt`
- `plugins/spec-to-code-compliance`
- `plugins/writing-lean-proofs`
- `plugins/zeroize-audit`

**Reverse Engineering**
- `plugins/dwarf-expert`

**Mobile Security**
- `plugins/firebase-apk-scanner`

**Development**
- `plugins/code-improver`
- `plugins/devcontainer-setup`
- `plugins/gh-cli`
- `plugins/git-cleanup`
- `plugins/goal-prompt`
- `plugins/github-triage`
- `plugins/let-fate-decide`
- `plugins/modern-cpp`
- `plugins/modern-python`
- `plugins/open-sourcing`
- `plugins/review-walkthrough`
- `plugins/second-opinion`

**Team Management**
- `plugins/culture-index`

**Tooling**
- `plugins/chrome-mcp-troubleshooting`

The page lists plugins, not individual skills within them, so the skill names inside each plugin aren't included here.
```

</details>

**🔧 Herramienta `WebFetch`**

```json
{
  "url": "https://github.com/trailofbits/skills/tree/main/plugins/insecure-defaults",
  "prompt": "List all files and folders in this plugin with their paths (especially the SKILL.md path), and summarise the README."
}
```

<details><summary>Resultado de herramienta</summary>

```
**File and folder paths**

The page shows only the top level of `plugins/insecure-defaults/`:

- `plugins/insecure-defaults/.claude-plugin/`
- `plugins/insecure-defaults/commands/`
- `plugins/insecure-defaults/references/`
- `plugins/insecure-defaults/tests/`
- `plugins/insecure-defaults/workflows/`
- `plugins/insecure-defaults/README.md`

The README names some files inside these folders:

- `workflows/audit.js`
- `references/<category>.json` and `references/<category>.md`, including `fallback-secrets.md`, `default-credentials.md`, `fail-open-security.md`, `weak-crypto.md`, `permissive-access.md`, and `debug-features.md`
- `tests/seed-coverage.js`, `tests/harness.js`, and `tests/README.md`

The page doesn't show a SKILL.md file, and the listing is incomplete ("View all files"), so I can't confirm its path.

**README summary**

The README describes a plugin that audits a codebase for insecure default configuration. It traces each candidate before reporting it.

- **Install:** `/plugin install insecure-defaults` from the marketplace, or from a local checkout.
- **Use:** `/insecure-defaults:audit` takes an optional file or directory, defaulting to the whole repo. Scoping to `tests/` audits the tests.
- **Categories:** fallback secrets, default credentials, fail-open switches, weak crypto, permissive access, and debug leakage. Each category has a workflow row plus a JSON and Markdown reference file.
- **Pipeline:** Recon classifies scope and stack. Six Sonnet sweeps search by category. Opus verifier agents try to refute each finding, in batches of up to 16. A final Sonnet step writes the report.
- **Verification:** Verifiers check reachability in production, whether the insecure value actually runs, whether it is insecure, whether it reaches a security decision, and whether deployment always supplies the variable. A candidate is dropped at the first step that refutes it.
- **Limits:** Use Semgrep or a linter for fixed-pattern checks. Use gitleaks or trufflehog for committed secrets.
- **Tests:** three commands run the harness, its self-test, and the seed-coverage check.
```

</details>

**🔧 Herramienta `WebFetch`**

```json
{
  "url": "https://github.com/trailofbits/skills/tree/main/plugins/sharp-edges/skills/sharp-edges",
  "prompt": "List files. If SKILL.md content is shown, give its full frontmatter and a detailed summary of its instructions, sections and any scripts it includes."
}
```

<details><summary>Resultado de herramienta</summary>

```
The page lists the contents of `plugins/sharp-edges/skills/sharp-edges` in the trailofbits/skills repository:

- `agents/` (folder)
- `assets/` (folder)
- `references/` (folder)
- `SKILL.md` (file)

The page shows only the file listing, not the contents of `SKILL.md`, so I can't provide its frontmatter or a summary of its instructions. The subfolders' contents aren't shown either. If you share the raw `SKILL.md` text or the raw file URL, I can summarize it.
```

</details>

**🔧 Herramienta `Bash`**

```json
{
  "command": "mkdir -p \"<HOME>/AppData/Local/Temp/claude/<carpeta-de-proyecto>/75fcebbd-e713-46f3-8f12-2de71489e93c/scratchpad/skillpub\" && cd \"$_\" && curl -sSL -o SKILL.md https://raw.githubusercontent.com/trailofbits/skills/main/plugins/sharp-edges/skills/sharp-edges/SKILL.md && wc -l SKILL.md && cat SKILL.md; git log -1 2>/dev/null; curl -s \"https://api.github.com/repos/trailofbits/skills/commits?path=plugins/sharp-edges/skills/sharp-edges/SKILL.md&per_page=1\" | grep -m3 -E '\"sha\"|\"date\"'",
  "description": "Download public skill SKILL.md as text for analysis"
}
```

<details><summary>Resultado de herramienta</summary>

~~~~
293 SKILL.md
---
name: sharp-edges
description: "Identifies error-prone APIs, dangerous configurations, and footgun designs that enable security mistakes. Use when reviewing API designs, configuration schemas, cryptographic library ergonomics, or evaluating whether code follows 'secure by default' and 'pit of success' principles. Triggers: footgun, misuse-resistant, secure defaults, API usability, dangerous configuration."
allowed-tools: Read Grep Glob
---

# Sharp Edges Analysis

Evaluates whether APIs, configurations, and interfaces are resistant to developer misuse. Identifies designs where the "easy path" leads to insecurity.

## When to Use

- Reviewing API or library design decisions
- Auditing configuration schemas for dangerous options
- Evaluating cryptographic API ergonomics
- Assessing authentication/authorization interfaces
- Reviewing any code that exposes security-relevant choices to developers

## When NOT to Use

- Implementation bugs (use standard code review)
- Business logic flaws (use domain-specific analysis)
- Performance optimization (different concern)

## Agent

The `sharp-edges-analyzer` agent runs the full sharp edges analysis workflow autonomously. Use it when you want a dedicated analysis of APIs, configurations, or interfaces for misuse resistance and footgun potential. The agent follows the four-phase workflow (Surface Identification, Edge Case Probing, Threat Modeling, Validate Findings) and reads language-specific references on demand.

## Core Principle

**The pit of success**: Secure usage should be the path of least resistance. If developers must understand cryptography, read documentation carefully, or remember special rules to avoid vulnerabilities, the API has failed.

## Rationalizations to Reject

| Rationalization | Why It's Wrong | Required Action |
|-----------------|----------------|-----------------|
| "It's documented" | Developers don't read docs under deadline pressure | Make the secure choice the default or only option |
| "Advanced users need flexibility" | Flexibility creates footguns; most "advanced" usage is copy-paste | Provide safe high-level APIs; hide primitives |
| "It's the developer's responsibility" | Blame-shifting; you designed the footgun | Remove the footgun or make it impossible to misuse |
| "Nobody would actually do that" | Developers do everything imaginable under pressure | Assume maximum developer confusion |
| "It's just a configuration option" | Config is code; wrong configs ship to production | Validate configs; reject dangerous combinations |
| "We need backwards compatibility" | Insecure defaults can't be grandfather-claused | Deprecate loudly; force migration |

## Sharp Edge Categories

### 1. Algorithm/Mode Selection Footguns

APIs that let developers choose algorithms invite choosing wrong ones.

**The JWT Pattern** (canonical example):
- Header specifies algorithm: attacker can set `"alg": "none"` to bypass signatures
- Algorithm confusion: RSA public key used as HMAC secret when switching RS256→HS256
- Root cause: Letting untrusted input control security-critical decisions

**Detection patterns:**
- Function parameters like `algorithm`, `mode`, `cipher`, `hash_type`
- Enums/strings selecting cryptographic primitives
- Configuration options for security mechanisms

**Example - PHP password_hash allowing weak algorithms:**
```php
// DANGEROUS: allows crc32, md5, sha1
password_hash($password, PASSWORD_DEFAULT); // Good - no choice
hash($algorithm, $password); // BAD: accepts "crc32"
```

### 2. Dangerous Defaults

Defaults that are insecure, or zero/empty values that disable security.

**The OTP Lifetime Pattern:**
```python
# What happens when lifetime=0?
def verify_otp(code, lifetime=300):  # 300 seconds default
    if lifetime == 0:
        return True  # OOPS: 0 means "accept all"?
        # Or does it mean "expired immediately"?
```

**Detection patterns:**
- Timeouts/lifetimes that accept 0 (infinite? immediate expiry?)
- Empty strings that b
… [salida recortada: 8046 caracteres más]
~~~~

</details>

**🔧 Herramienta `Bash`**

```json
{
  "command": "node --version; python --version; ls ~/.claude/projects/ | head; ls ~/.claude/projects/<proyecto>/ 2>/dev/null",
  "description": "Check node/python and transcript location"
}
```

<details><summary>Resultado de herramienta</summary>

```
v24.21.0
no se encontr� Python; ejecutar sin argumentos para instalar desde el Microsoft Store o deshabilitar este acceso directo desde Configuraci�n > Aplicaciones > Configuraci�n avanzada de aplicaciones > Alias de ejecuci�n de aplicaciones.
<carpeta-de-proyecto>
<carpeta-de-proyecto>
<carpeta-de-proyecto>
<carpeta-de-proyecto>
C--WINDOWS-system32
<carpeta-de-proyecto>
75fcebbd-e713-46f3-8f12-2de71489e93c.jsonl
80738edc-1cdc-4ce0-86df-5c16b81ffda9.jsonl
memory
```

</details>

**🔧 Herramienta `Bash`**

```json
{
  "command": "cd ~/.claude/projects/<proyecto>/ && ls -la && node -e '\nconst fs=require(\"fs\");const l=fs.readFileSync(\"80738edc-1cdc-4ce0-86df-5c16b81ffda9.jsonl\",\"utf8\").split(\"\\n\").filter(Boolean).map(JSON.parse);\nfor(const m of l){if(m.type===\"user\"||m.type===\"assistant\"){const c=m.message.content;const t=typeof c===\"string\"?c:c.map(x=>x.text||x.type).join(\" \");console.log(m.type,\":\",t.slice(0,300).replace(/\\n/g,\" \"))}}' | head -30",
  "description": "Peek at previous session transcript in this folder"
}
```

<details><summary>Resultado de herramienta</summary>

```
total 1196
drwxr-xr-x 1 <dato-personal> 1049089      0 Oct 26 17:36 .
drwxr-xr-x 1 <dato-personal> 1049089      0 Oct 26 17:33 ..
-rw-r--r-- 1 <dato-personal> 1049089 763830 Oct 26 17:39 75fcebbd-e713-46f3-8f12-2de71489e93c.jsonl
-rw-r--r-- 1 <dato-personal> 1049089 449366 Oct 26 17:36 80738edc-1cdc-4ce0-86df-5c16b81ffda9.jsonl
drwxr-xr-x 1 <dato-personal> 1049089      0 Oct 26 17:33 memory
user : <local-command-caveat>The command below was run directly in Claude Code, not sent to you as a request, and its output goes straight to the user. It's recorded here as context for later messages.</local-command-caveat>
user : <command-name>/plugin</command-name>             <command-message>plugin</command-message>             <command-args></command-args>
user : <local-command-stdout>(no content)</local-command-stdout>
user : <local-command-caveat>The command below was run directly in Claude Code, not sent to you as a request, and its output goes straight to the user. It's recorded here as context for later messages.</local-command-caveat>
user : <command-name>/model</command-name>             <command-message>model</command-message>             <command-args></command-args>
user : <local-command-stdout>Set model to `Opus 5.5` and saved as your default for new sessions</local-command-stdout>
user :   <pasted_content id="5987"> Tarea grupal: enseñar un tema de PPS con ayuda de IA 1. Reto Enseñad a otros compañeros uno de los temas de la unidad mediante una página web pública. Utilizad la inteligencia artificial (IA) como apoyo, pero comprobad la información y sed capaces de explicar tanto el te
assistant : thinking
assistant : # Qué hay que hacer: plan para el Grupo 5, «Desarrollo seguro»  ## 1. Lo que piden en realidad  Hay que entregar un **repositorio público de GitHub** con estas piezas:  | Pieza | Puntos en la rúbrica | Comentario | |---|---|---| | `PROCESO.md` + `conversaciones-ia/` | **30** | Es lo que más puntúa.
Shell cwd was reset to <HOME>\Documents\PuestaEnProduccion\Ut1\trabajo
```

</details>

## 🤖 Claude · 2026-10-26 16:40:22 UTC

Estoy generando el repositorio completo. Primero la web: `index.html`, la hoja de estilos y las demostraciones interactivas.

**🔧 Herramienta `Write`**

```json
{
  "file_path": "<HOME>\\Documents\\PuestaEnProduccion\\Ut1\\trabajo\\index.html",
  "content": "<!doctype html>\n<html lang=\"es\">\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <title>Desarrollo seguro</title>\n  <meta name=\"description\" content=\"Guía didáctica sobre desarrollo seguro de software: modelado de amenazas, validación de entradas, autenticación, cadena de suministro, criptografía, pruebas, mitigaciones y SSDLC.\">\n  <link rel=\"stylesheet\" href=\"css/estilos.css\">\n  <link rel=\"icon\" href=\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath d='M16 2 4 7v8c0 7.5 5.1 13.4 12 15 6.9-1.6 12-7.5 12-15V7z' fill='%232563eb'/%3E%3Cpath d='m11 16 4 4 7-8' stroke='white' stroke-width='3' fill='none'/%3E%3C/svg%3E\">\n</head>\n<body>\n  <a class=\"saltar\" href=\"#contenido\">Saltar al contenido</a>\n\n  <header class=\"cabecera\">\n    <div class=\"contenedor cabecera__fila\">\n      <a class=\"marca\" href=\"#inicio\">🛡️ Desarrollo seguro</a>\n      <button class=\"menu-boton\" type=\"button\" aria-expanded=\"false\" aria-controls=\"menu\">Menú</button>\n      <nav id=\"menu\" class=\"menu\" aria-label=\"Secciones\">\n        <a href=\"#introduccion\">Introducción</a>\n        <a href=\"#ideas\">Ideas clave</a>\n        <a href=\"#demo\">Demostración</a>\n        <a href=\"#ssdlc\">Ciclo SSDLC</a>\n        <a href=\"#glosario\">Glosario</a>\n        <a href=\"#fuentes\">Fuentes</a>\n      </nav>\n    </div>\n  </header>\n\n  <main id=\"contenido\">\n    <section id=\"inicio\" class=\"portada\">\n      <div class=\"contenedor\">\n        <p class=\"etiqueta\">PPS · Unidad 1 · Grupo 5</p>\n        <h1>Desarrollo seguro: la seguridad se diseña, no se añade al final</h1>\n        <p class=\"entradilla\">Una guía para compañeros que quieren entender cómo se evita que un programa sea vulnerable <strong>antes</strong> de que alguien lo ataque, y qué hacer cuando, aun así, algo falla.</p>\n        <p class=\"portada__botones\">\n          <a class=\"boton\" href=\"#demo\">Ir a la demostración</a>\n          <a class=\"boton boton--secundario\" href=\"#ideas\">Ver las 7 ideas clave</a>\n        </p>\n      </div>\n    </section>\n\n    <section id=\"introduccion\" class=\"seccion\">\n      <div class=\"contenedor estrecho\">\n        <h2>Introducción</h2>\n        <p>Muchas veces pensamos que la seguridad depende de elegir un lenguaje \"seguro\", de activar un cortafuegos o de que el sistema operativo nos proteja. Todo eso ayuda, pero no basta: un programa escrito en Rust o en Java puede seguir dejando entrar a quien no debe, guardar contraseñas de forma débil o caerse si recibe un archivo enorme.</p>\n        <p>El <strong>desarrollo seguro</strong> es la forma de trabajar que mete la seguridad en cada paso: cuando decidimos qué vamos a construir, cuando lo diseñamos, cuando lo programamos, cuando lo probamos y también cuando ya está funcionando y aparece un fallo nuevo. Es lo que en los apuntes se llama <strong>defensa en profundidad</strong>: varias capas, para que el fallo de una sola no comprometa todo el sistema.</p>\n        <div class=\"aviso\">\n          <p><strong>¿Para qué te sirve?</strong> Cualquier aplicación que hagas en clase o en una empresa recibirá datos de usuarios, usará bibliotecas de terceros y guardará algún secreto (una contraseña de base de datos, un token…). Estas ideas te ayudan a no cometer los errores más frecuentes y a saber explicarlos.</p>\n        </div>\n        <p class=\"alcance\"><strong>Alcance de esta guía:</strong> sección 8 de los apuntes (desarrollo seguro y SSDLC) y las secciones 6.2 y 6.3 (contraseñas y mitigaciones). Dejamos fuera la seguridad de memoria en detalle, los modelos de ejecución, el <em>sandboxing</em> del kernel y el caso <code>sudo-rs</code>, que se tratan en otras partes de la unidad.</p>\n      </div>\n    </section>\n\n    <section id=\"ideas\" class=\"seccion seccion--alterna\">\n      <div class=\"contenedor\">\n        <h2>7 ideas clave</h2>\n        <p class=\"estrecho\">Cada idea indica de qué parte de los apuntes sale, para que puedas ampliarla.</p>\n\n        <div class=\"ideas\">\n          <article class=\"idea\" id=\"idea-1\">\n            <span class=\"idea__num\" aria-hidden=\"true\">1</span>\n            <h3>La seguridad es un proceso, no un producto</h3>\n            <p>No existe un \"botón de seguridad\" que se pulse al final. Se trabaja en capas (lenguaje, compilador, sistema operativo, aislamiento, aplicación) y en todas las fases del ciclo de vida. Si una capa falla, la siguiente debe limitar el daño.</p>\n            <p class=\"idea__ejemplo\"><strong>Ejemplo:</strong> aunque la aplicación tenga un fallo de inyección, si su usuario de base de datos sólo puede leer una tabla, el atacante no podrá borrar el resto.</p>\n            <p class=\"idea__fuente\">Apuntes: §1 y §8.9</p>\n          </article>\n\n          <article class=\"idea\" id=\"idea-2\">\n            <span class=\"idea__num\" aria-hidden=\"true\">2</span>\n            <h3>Antes de programar, piensa como un atacante</h3>\n            <p>El <strong>modelado de amenazas</strong> responde a cuatro preguntas: ¿qué quiero proteger (<em>activos</em>)?, ¿por dónde pueden entrar (<em>superficie de ataque</em>)?, ¿dónde cambian los niveles de confianza (<em>fronteras de confianza</em>)? y ¿qué puede salir mal (<em>amenazas</em>)?</p>\n            <p>De ahí salen dos principios: <strong>mínimo privilegio</strong> (cada pieza sólo con los permisos que necesita) y <strong>seguro por defecto</strong> (lo que viene \"de fábrica\" debe estar cerrado, no abierto).</p>\n            <p class=\"idea__fuente\">Apuntes: §8.1 y §6.1</p>\n          </article>\n\n          <article class=\"idea\" id=\"idea-3\">\n            <span class=\"idea__num\" aria-hidden=\"true\">3</span>\n            <h3>Toda entrada es sospechosa: valida al entrar, codifica al salir</h3>\n            <p>Formularios, archivos, APIs, cabeceras… todo lo que viene de fuera es <strong>no confiable</strong> hasta comprobarlo. Son dos cosas distintas:</p>\n            <ul>\n              <li><strong>Validar</strong> la entrada: ¿tiene el tipo, la longitud, el rango y el formato esperados? Si no, se rechaza.</li>\n              <li><strong>Codificar</strong> la salida: al mostrar el dato en HTML, SQL o JavaScript, se transforma para que se lea como <em>texto</em> y nunca como <em>código</em>.</li>\n            </ul>\n            <p>Poner un tamaño máximo también protege la <strong>disponibilidad</strong>: evita que una entrada gigante agote la memoria o la CPU (denegación de servicio).</p>\n            <div class=\"flujo\" role=\"img\" aria-label=\"Flujo de un dato: llega desde el usuario, que no es confiable, cruza la frontera de confianza, se valida, lo procesa la lógica de la aplicación y se codifica antes de mostrarse en el navegador.\">\n              <span class=\"flujo__paso flujo__paso--peligro\">Usuario<small>no confiable</small></span>\n              <span class=\"flujo__frontera\">frontera de confianza</span>\n              <span class=\"flujo__paso\">Validar<small>tipo, longitud, formato</small></span>\n              <span class=\"flujo__flecha\" aria-hidden=\"true\">→</span>\n              <span class=\"flujo__paso\">Lógica<small>consultas parametrizadas</small></span>\n              <span class=\"flujo__flecha\" aria-hidden=\"true\">→</span>\n              <span class=\"flujo__paso\">Codificar<small>según el destino</small></span>\n              <span class=\"flujo__flecha\" aria-hidden=\"true\">→</span>\n              <span class=\"flujo__paso flujo__paso--ok\">Navegador<small>lo ve como texto</small></span>\n            </div>\n            <p class=\"idea__fuente\">Apuntes: §8.2, §8.8 y §4.1 · Pruébalo en la <a href=\"#demo\">demostración</a></p>\n          </article>\n\n          <article class=\"idea\" id=\"idea-4\">\n            <span class=\"idea__num\" aria-hidden=\"true\">4</span>\n            <h3>Saber quién eres no es saber qué puedes hacer</h3>\n            <p><strong>Autenticación</strong> = comprobar la identidad (\"eres Ana\"). <strong>Autorización</strong> = comprobar permisos (\"Ana puede ver <em>su</em> factura, no la de Luis\"). La autorización se comprueba <strong>en cada operación sensible</strong>, no una sola vez al iniciar sesión.</p>\n            <p>La <strong>gestión de sesiones</strong> cuida el ciclo de vida de cookies y tokens: cómo se crean, dónde se guardan, cuándo caducan y cómo se revocan.</p>\n            <p class=\"idea__ejemplo\"><strong>Error típico:</strong> cambiar <code>/facturas/1001</code> por <code>/facturas/1002</code> en la URL y ver la factura de otra persona porque el servidor sólo comprobó que había sesión iniciada.</p>\n            <p class=\"idea__fuente\">Apuntes: §8.3 y §6.1</p>\n          </article>\n\n          <article class=\"idea\" id=\"idea-5\">\n            <span class=\"idea__num\" aria-hidden=\"true\">5</span>\n            <h3>Tu programa también es el código de otros, y los secretos no van en el código</h3>\n            <p>Las bibliotecas, frameworks y herramientas de compilación forman parte de la superficie de ataque (<strong>cadena de suministro</strong>). Por eso conviene tener un inventario (<strong>SBOM</strong>), fijar versiones y revisar los avisos de vulnerabilidades antes de actualizar.</p>\n            <p>Las claves de API, contraseñas y tokens se guardan en un <strong>gestor de secretos</strong>, nunca en el repositorio. Y los mensajes de error que ve el usuario no deben revelar detalles internos; los registros (<em>logs</em>) sirven para investigar, pero no deben guardar contraseñas ni tokens.</p>\n            <p class=\"idea__fuente\">Apuntes: §8.4 y §8.6</p>\n          </article>\n\n          <article class=\"idea\" id=\"idea-6\">\n            <span class=\"idea__num\" aria-hidden=\"true\">6</span>\n            <h3>Las contraseñas necesitan hashes lentos; las comunicaciones, TLS</h3>\n            <p>Un hash de integridad como SHA-256 está pensado para ser <strong>rápido</strong>, y eso es justo lo que quiere un atacante que prueba millones de contraseñas. Para contraseñas se usan funciones <strong>lentas a propósito</strong> y con <strong>sal</strong> única: Argon2id, bcrypt o scrypt.</p>\n            <p>Para cifrar se usan bibliotecas consolidadas (no se inventa criptografía propia) y, en tránsito, <strong>TLS</strong> bien configurado.</p>\n            <p class=\"idea__fuente\">Apuntes: §6.2 y §8.7 · Compruébalo en la <a href=\"#demo-hash\">demo de contraseñas</a></p>\n          </article>\n\n          <article class=\"idea\" id=\"idea-7\">\n            <span class=\"idea__num\" aria-hidden=\"true\">7</span>\n            <h3>Prueba con varias técnicas y ten mitigaciones para lo que se escape</h3>\n            <p>Ninguna herramienta lo detecta todo, así que se combinan: <strong>SAST</strong> (lee el código sin ejecutarlo), <strong>DAST</strong> (ataca la aplicación en marcha), <strong>fuzzing</strong> (entradas raras a montones), <strong>sanitizadores</strong> como AddressSanitizer en C/C++, revisiones de código, <em>pentesting</em> y <strong>pruebas de regresión</strong> para que un fallo corregido no vuelva.</p>\n            <p>Si aun así queda un fallo de memoria, el compilador y el sistema operativo ponen trabas: <strong>ASLR</strong>, <strong>NX/DEP</strong> y <strong>stack canaries</strong>. Ojo: <strong>no eliminan la vulnerabilidad</strong>, sólo hacen más difícil explotarla.</p>\n            <p class=\"idea__fuente\">Apuntes: §8.5 y §6.3</p>\n          </article>\n        </div>\n      </div>\n    </section>\n\n    <section id=\"demo\" class=\"seccion\">\n      <div class=\"contenedor\">\n        <h2>Demostración práctica</h2>\n        <p class=\"estrecho\">Tres pruebas que puedes hacer en tu navegador. Todo se ejecuta en tu equipo: no se envía nada a ningún servidor.</p>\n\n        <article class=\"demo\" id=\"demo-validacion\">\n          <h3>Demo 1 · Validación de entradas</h3>\n          <p>Un formulario de registro con reglas de <strong>lista blanca</strong>: decimos qué se permite, no qué se prohíbe. Escribe valores raros (espacios, <code>&lt;script&gt;</code>, <code>-5</code>, un nombre muy largo…) y observa qué regla falla.</p>\n          <form class=\"formulario\" id=\"form-validacion\" novalidate>\n            <div class=\"campo\">\n              <label for=\"usuario\">Nombre de usuario</label>\n              <input id=\"usuario\" name=\"usuario\" type=\"text\" autocomplete=\"off\" spellcheck=\"false\" placeholder=\"ana_garcia\">\n              <p class=\"ayuda\">3–20 caracteres: letras minúsculas sin tilde, números o guion bajo.</p>\n            </div>\n            <div class=\"campo\">\n              <label for=\"edad\">Edad</label>\n              <input id=\"edad\" name=\"edad\" type=\"text\" inputmode=\"numeric\" autocomplete=\"off\" placeholder=\"17\">\n              <p class=\"ayuda\">Número entero entre 14 y 120.</p>\n            </div>\n            <button class=\"boton\" type=\"submit\">Validar</button>\n          </form>\n          <div class=\"resultado\" id=\"resultado-validacion\" aria-live=\"polite\"></div>\n          <details class=\"explica\">\n            <summary>¿Por qué así?</summary>\n            <p>Validar con una lista blanca es más seguro que intentar adivinar todo lo malo (lista negra): siempre aparece un truco nuevo que no habíamos previsto. Además, el límite de longitud protege frente a entradas enormes. <strong>Importante:</strong> en una aplicación real esta validación debe repetirse en el <strong>servidor</strong>; la del navegador sólo mejora la experiencia, porque el atacante puede saltársela.</p>\n          </details>\n        </article>\n\n        <article class=\"demo\" id=\"demo-salida\">\n          <h3>Demo 2 · Codificación de salida frente a XSS</h3>\n          <p>Imagina una web de comentarios. Escribe un comentario o elige un ejemplo y compara qué pasa si la aplicación lo inserta como <strong>HTML</strong> (<code>innerHTML</code>) o como <strong>texto</strong> (<code>textContent</code>).</p>\n          <div class=\"campo\">\n            <label for=\"comentario\">Comentario</label>\n            <textarea id=\"comentario\" rows=\"3\" spellcheck=\"false\">&lt;img src=x onerror=\"alert('Te he robado la cookie')\"&gt;</textarea>\n          </div>\n          <div class=\"ejemplos\" role=\"group\" aria-label=\"Ejemplos de comentario\">\n            <button type=\"button\" class=\"chip\" data-ejemplo=\"¡Muy buen artículo!\">Comentario normal</button>\n            <button type=\"button\" class=\"chip\" data-ejemplo=\"&lt;b&gt;Texto en negrita&lt;/b&gt;\">HTML inofensivo</button>\n            <button type=\"button\" class=\"chip\" data-ejemplo=\"&lt;img src=x onerror=&quot;alert('Te he robado la cookie')&quot;&gt;\">Imagen con onerror</button>\n            <button type=\"button\" class=\"chip\" data-ejemplo=\"&lt;a href=&quot;javascript:alert(1)&quot;&gt;Pulsa aquí&lt;/a&gt;\">Enlace javascript:</button>\n          </div>\n          <button class=\"boton\" type=\"button\" id=\"boton-publicar\">Publicar comentario</button>\n          <div class=\"comparativa\" aria-live=\"polite\">\n            <div class=\"panel panel--peligro\">\n              <h4>❌ Inseguro: se inserta como HTML</h4>\n              <p class=\"panel__nota\">Así lo vería el navegador (vista aislada en un <code>iframe</code> con <code>sandbox</code>, que bloquea los scripts para que la demo sea inofensiva):</p>\n              <iframe id=\"vista-insegura\" title=\"Vista del comentario insertado como HTML\" sandbox=\"\" loading=\"lazy\"></iframe>\n              <div id=\"analisis-inseguro\" class=\"analisis\"></div>\n            </div>\n            <div class=\"panel panel--ok\">\n              <h4>✅ Seguro: se inserta como texto</h4>\n              <p class=\"panel__nota\">El navegador muestra los caracteres tal cual:</p>\n              <div id=\"vista-segura\" class=\"vista-texto\"></div>\n              <p class=\"panel__nota\">Lo que realmente llega al HTML (caracteres especiales codificados):</p>\n              <pre><code id=\"codigo-seguro\"></code></pre>\n            </div>\n          </div>\n          <details class=\"explica\">\n            <summary>¿Por qué así?</summary>\n            <p>En el panel inseguro, el dato del usuario <strong>deja de ser dato y pasa a ser código</strong>: el navegador crea etiquetas y atributos como <code>onerror</code>, que en una página real ejecutarían JavaScript del atacante. En el panel seguro, <code>&lt;</code> se convierte en <code>&amp;lt;</code> y el navegador lo pinta como un símbolo. Es la misma regla de los apuntes para <code>eval()</code>: <em>los datos deben permanecer como datos</em>.</p>\n            <p>Fíjate en que el comentario <em>no</em> se ha rechazado: un comentario puede contener <code>&lt;</code> legítimamente. Por eso validar no basta y hace falta codificar en la salida.</p>\n          </details>\n        </article>\n\n        <article class=\"demo\" id=\"demo-hash\">\n          <h3>Demo 3 · ¿Por qué no SHA-256 para contraseñas?</h3>\n          <p>Calcula el hash de una contraseña con un hash <strong>rápido</strong> (SHA-256) y con una función <strong>lenta y con sal</strong> (PBKDF2-SHA256, 600 000 iteraciones) y compara cuánto tarda cada una. Un atacante con una lista de contraseñas tendría que pagar ese coste en <strong>cada intento</strong>.</p>\n          <div class=\"campo\">\n            <label for=\"clave\">Contraseña de prueba (no uses una real)</label>\n            <input id=\"clave\" type=\"text\" autocomplete=\"off\" spellcheck=\"false\" value=\"verano2024\">\n          </div>\n          <button class=\"boton\" type=\"button\" id=\"boton-hash\">Calcular hashes</button>\n          <div class=\"resultado\" id=\"resultado-hash\" aria-live=\"polite\"></div>\n          <details class=\"explica\">\n            <summary>¿Por qué así? Y una aclaración honesta</summary>\n            <p>Pulsa varias veces: el hash SHA-256 sale <strong>siempre igual</strong>, así que dos usuarios con la misma contraseña tendrían el mismo hash y se podrían usar tablas precalculadas. El de PBKDF2 <strong>cambia</strong> cada vez porque usa una <strong>sal aleatoria</strong> nueva.</p>\n            <p>Los apuntes recomiendan <strong>Argon2id, bcrypt o scrypt</strong>. Aquí usamos <strong>PBKDF2</strong> porque es la función lenta que el navegador trae de serie (Web Crypto API) y no necesitamos bibliotecas externas. OWASP la acepta cuando hace falta cumplir FIPS-140 y recomienda 600 000 iteraciones con HMAC-SHA256, pero prefiere Argon2id. La idea que demuestra es la misma: <strong>coste ajustable + sal única</strong>.</p>\n            <p>Los tiempos dependen de tu equipo; lo importante es la <strong>proporción</strong> entre ambos.</p>\n          </details>\n        </article>\n      </div>\n    </section>\n\n    <section id=\"ssdlc\" class=\"seccion seccion--alterna\">\n      <div class=\"contenedor\">\n        <h2>Diagrama: ciclo de vida de desarrollo seguro (SSDLC)</h2>\n        <p class=\"estrecho\">La seguridad acompaña a las 7 fases. La última realimenta a la primera: lo que aprendemos de un incidente cambia los requisitos y el diseño. Pulsa en cada fase para ver qué ideas de esta guía se aplican.</p>\n        <ol class=\"ciclo\">\n          <li class=\"fase\"><details><summary><span class=\"fase__num\">1</span> Requisitos y análisis</summary><p>Identificar activos, amenazas y requisitos de seguridad. → <a href=\"#idea-2\">Idea 2</a></p></details></li>\n          <li class=\"fase\"><details><summary><span class=\"fase__num\">2</span> Diseño</summary><p>Fronteras de confianza, políticas de acceso, aislamiento, mínimo privilegio. → <a href=\"#idea-2\">Idea 2</a>, <a href=\"#idea-4\">Idea 4</a></p></details></li>\n          <li class=\"fase\"><details><summary><span class=\"fase__num\">3</span> Implementación</summary><p>APIs seguras, validación de datos, codificación de salida, hashes de contraseñas adecuados. → <a href=\"#idea-3\">Idea 3</a>, <a href=\"#idea-6\">Idea 6</a></p></details></li>\n          <li class=\"fase\"><details><summary><span class=\"fase__num\">4</span> Verificación</summary><p>SAST, DAST, fuzzing, sanitizadores y revisión de código. → <a href=\"#idea-7\">Idea 7</a></p></details></li>\n          <li class=\"fase\"><details><summary><span class=\"fase__num\">5</span> Despliegue</summary><p>Configuración segura por defecto, mínimo privilegio y protección de secretos. → <a href=\"#idea-5\">Idea 5</a></p></details></li>\n          <li class=\"fase\"><details><summary><span class=\"fase__num\">6</span> Operación y mantenimiento</summary><p>Monitorización, avisos de seguridad y actualización de dependencias. → <a href=\"#idea-5\">Idea 5</a></p></details></li>\n          <li class=\"fase\"><details><summary><span class=\"fase__num\">7</span> Respuesta a incidentes</summary><p>Investigar la causa raíz, mitigar y llevar lo aprendido al diseño. Añadir una prueba de regresión. → <a href=\"#idea-7\">Idea 7</a></p></details></li>\n        </ol>\n        <p class=\"ciclo__vuelta\">↻ La fase 7 vuelve a la fase 1</p>\n      </div>\n    </section>\n\n    <section id=\"glosario\" class=\"seccion\">\n      <div class=\"contenedor estrecho\">\n        <h2>Glosario</h2>\n        <div class=\"campo campo--buscar\">\n          <label for=\"buscar-termino\">Buscar término</label>\n          <input id=\"buscar-termino\" type=\"search\" placeholder=\"Ej.: sal, XSS, SBOM…\" autocomplete=\"off\">\n        </div>\n        <dl class=\"glosario\" id=\"lista-glosario\">\n          <div><dt>Activo</dt><dd>Lo que tiene valor y hay que proteger: datos personales, credenciales, claves criptográficas, servicios críticos.</dd></div>\n          <div><dt>ASLR</dt><dd><em>Address Space Layout Randomization</em>. El sistema operativo coloca partes del programa en direcciones de memoria aleatorias, para que el atacante no sepa a dónde saltar.</dd></div>\n          <div><dt>Autenticación</dt><dd>Comprobar que alguien (persona, servicio o proceso) es quien dice ser.</dd></div>\n          <div><dt>Autorización</dt><dd>Comprobar si una identidad ya autenticada puede hacer una operación concreta sobre un recurso concreto.</dd></div>\n          <div><dt>Cadena de suministro</dt><dd>Todo lo que interviene en construir tu software sin que lo hayas escrito tú: bibliotecas, compiladores, herramientas de compilación y repositorios de paquetes.</dd></div>\n          <div><dt>Codificación de salida</dt><dd>Transformar un dato justo antes de insertarlo en HTML, SQL, JavaScript, etc., para que se interprete como texto y no como instrucciones.</dd></div>\n          <div><dt>DAST</dt><dd>Análisis dinámico. Prueba la aplicación mientras se ejecuta, enviándole peticiones para encontrar fallos observables desde fuera.</dd></div>\n          <div><dt>Denegación de servicio (DoS)</dt><dd>Ataque que agota los recursos (CPU, memoria, conexiones…) para que el servicio deje de estar disponible. Se previene con límites, <em>timeouts</em> y cuotas.</dd></div>\n          <div><dt>Frontera de confianza</dt><dd>Punto donde se pasa de datos o componentes confiables a no confiables, o entre distintos niveles de privilegio. Ahí deben aplicarse los controles.</dd></div>\n          <div><dt>Fuzzing</dt><dd>Generar automáticamente muchísimas entradas malformadas o inesperadas para provocar caídas o comportamientos anómalos.</dd></div>\n          <div><dt>Mínimo privilegio</dt><dd>Cada componente tiene sólo los permisos imprescindibles para su función, ni uno más.</dd></div>\n          <div><dt>NX / DEP</dt><dd><em>No-eXecute / Data Execution Prevention</em>. Marca zonas de memoria de datos (como la pila) como no ejecutables.</dd></div>\n          <div><dt>Rate limiting</dt><dd>Limitar cuántas peticiones puede hacer un cliente en un tiempo dado. Frena ataques de fuerza bruta y de denegación de servicio.</dd></div>\n          <div><dt>Sal (<em>salt</em>)</dt><dd>Valor aleatorio y único por contraseña que se mezcla antes de calcular el hash. Hace que dos contraseñas iguales tengan hashes distintos.</dd></div>\n          <div><dt>Sanitizador</dt><dd>Herramienta del compilador (por ejemplo, AddressSanitizer) que añade comprobaciones al ejecutable para detectar errores de memoria durante las pruebas.</dd></div>\n          <div><dt>SAST</dt><dd>Análisis estático. Revisa el código fuente sin ejecutarlo en busca de flujos de datos peligrosos y usos inseguros de APIs.</dd></div>\n          <div><dt>SBOM</dt><dd><em>Software Bill of Materials</em>. Inventario de todos los componentes y dependencias (con versiones) que forman un software.</dd></div>\n          <div><dt>Seguro por defecto</dt><dd>La configuración inicial es la más restrictiva razonable; abrir algo requiere una decisión explícita.</dd></div>\n          <div><dt>SSDLC</dt><dd><em>Secure Software Development Life Cycle</em>. Ciclo de vida del software con actividades de seguridad en cada fase.</dd></div>\n          <div><dt>Stack canary</dt><dd>Valor de control que el compilador coloca en la pila; si cambia antes de que la función retorne, se detecta una corrupción y el programa se detiene.</dd></div>\n          <div><dt>Superficie de ataque</dt><dd>Conjunto de puntos por los que un atacante puede interactuar con el sistema: formularios, APIs, archivos, red, dependencias…</dd></div>\n          <div><dt>XSS</dt><dd><em>Cross-Site Scripting</em>. Inyectar código que se ejecuta en el navegador de otra persona dentro de una web legítima.</dd></div>\n        </dl>\n        <p id=\"glosario-vacio\" class=\"ayuda\" hidden>No hay ningún término que coincida.</p>\n      </div>\n    </section>\n\n    <section id=\"fuentes\" class=\"seccion seccion--alterna\">\n      <div class=\"contenedor estrecho\">\n        <h2>Fuentes</h2>\n        <p>Las afirmaciones de esta guía se han contrastado con estas fuentes. El detalle de qué respalda cada una está en <a href=\"evidencias/fuentes.md\">evidencias/fuentes.md</a>.</p>\n        <h3>Material de partida</h3>\n        <ul class=\"fuentes\">\n          <li>Apuntes de la unidad: <a href=\"https://github.com/msolds/pps/blob/main/pps1_06%20seguridad_lenguajes.md\">pps1_06 seguridad_lenguajes.md</a>, §1, §4.1, §6 y §8.</li>\n        </ul>\n        <h3>Fuentes adicionales</h3>\n        <ul class=\"fuentes\">\n          <li>OWASP. <a href=\"https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html\">Password Storage Cheat Sheet</a> (parámetros de Argon2id, bcrypt, scrypt y PBKDF2).</li>\n          <li>OWASP. <a href=\"https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html\">Input Validation Cheat Sheet</a> (lista blanca, validación en servidor).</li>\n          <li>OWASP. <a href=\"https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html\">Cross Site Scripting Prevention Cheat Sheet</a> (codificación contextual de salida).</li>\n          <li>OWASP. <a href=\"https://cheatsheetseries.owasp.org/cheatsheets/Threat_Modeling_Cheat_Sheet.html\">Threat Modeling Cheat Sheet</a>.</li>\n          <li>OWASP. <a href=\"https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html\">Secrets Management Cheat Sheet</a>.</li>\n          <li>OWASP. <a href=\"https://owasp.org/Top10/A01_2021-Broken_Access_Control/\">Top 10 2021 · A01 Broken Access Control</a> (ejemplo de la URL de facturas).</li>\n          <li>NIST. <a href=\"https://csrc.nist.gov/pubs/sp/800/218/final\">SP 800-218 · Secure Software Development Framework (SSDF)</a>.</li>\n          <li>CISA. <a href=\"https://www.cisa.gov/sbom\">Software Bill of Materials (SBOM)</a>.</li>\n          <li>Clang. <a href=\"https://clang.llvm.org/docs/AddressSanitizer.html\">AddressSanitizer</a>.</li>\n          <li>MDN. <a href=\"https://developer.mozilla.org/es/docs/Web/API/Node/textContent\">Node.textContent</a> y <a href=\"https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/deriveBits\">SubtleCrypto.deriveBits() (PBKDF2)</a>.</li>\n        </ul>\n        <p class=\"ayuda\">Esta web se ha elaborado con ayuda de IA (Claude Code). El proceso, los prompts y las verificaciones están documentados en <a href=\"PROCESO.md\">PROCESO.md</a> y las conversaciones originales en <a href=\"conversaciones-ia/\">conversaciones-ia/</a>.</p>\n      </div>\n    </section>\n  </main>\n\n  <footer class=\"pie\">\n    <div class=\"contenedor\">\n      <p>Grupo 5 · PPS · Tema: Desarrollo seguro · <a href=\"README.md\">README del repositorio</a></p>\n    </div>\n  </footer>\n\n  <script src=\"js/demo.js\"></script>\n</body>\n</html>\n"
}
```

<details><summary>Resultado de herramienta</summary>

```
File created successfully at: <HOME>\Documents\PuestaEnProduccion\Ut1\trabajo\index.html (file state is current in your context — no need to Read it back)
```

</details>

**🔧 Herramienta `Write`**

```json
{
  "file_path": "<HOME>\\Documents\\PuestaEnProduccion\\Ut1\\trabajo\\css\\estilos.css",
  "content": "/* ===== Variables de color (modo claro y oscuro) ===== */\n:root {\n  --fondo: #f8fafc;\n  --fondo-alterno: #eef2f7;\n  --superficie: #ffffff;\n  --texto: #0f172a;\n  --texto-suave: #475569;\n  --borde: #d5dde8;\n  --acento: #1d4ed8;\n  --acento-texto: #ffffff;\n  --peligro: #b91c1c;\n  --peligro-fondo: #fef2f2;\n  --ok: #15803d;\n  --ok-fondo: #f0fdf4;\n  --codigo-fondo: #e8edf4;\n  --sombra: 0 1px 3px rgb(15 23 42 / 0.08), 0 4px 12px rgb(15 23 42 / 0.05);\n  --radio: 10px;\n  --ancho: 1100px;\n  color-scheme: light;\n}\n\n@media (prefers-color-scheme: dark) {\n  :root:not([data-theme=\"light\"]) {\n    --fondo: #0b1120;\n    --fondo-alterno: #111a2e;\n    --superficie: #16213a;\n    --texto: #e5ebf5;\n    --texto-suave: #a7b3c7;\n    --borde: #2a3a58;\n    --acento: #7aa2ff;\n    --acento-texto: #0b1120;\n    --peligro: #fca5a5;\n    --peligro-fondo: #2a1215;\n    --ok: #86efac;\n    --ok-fondo: #0f2418;\n    --codigo-fondo: #1e2b47;\n    --sombra: none;\n    color-scheme: dark;\n  }\n}\n\n:root[data-theme=\"dark\"] {\n  --fondo: #0b1120;\n  --fondo-alterno: #111a2e;\n  --superficie: #16213a;\n  --texto: #e5ebf5;\n  --texto-suave: #a7b3c7;\n  --borde: #2a3a58;\n  --acento: #7aa2ff;\n  --acento-texto: #0b1120;\n  --peligro: #fca5a5;\n  --peligro-fondo: #2a1215;\n  --ok: #86efac;\n  --ok-fondo: #0f2418;\n  --codigo-fondo: #1e2b47;\n  --sombra: none;\n  color-scheme: dark;\n}\n\n/* ===== Base ===== */\n*, *::before, *::after { box-sizing: border-box; }\n\nhtml { scroll-behavior: smooth; scroll-padding-top: 4.5rem; }\n\nbody {\n  margin: 0;\n  background: var(--fondo);\n  color: var(--texto);\n  font-family: system-ui, -apple-system, \"Segoe UI\", Roboto, Ubuntu, sans-serif;\n  font-size: 1.0625rem;\n  line-height: 1.65;\n  overflow-wrap: break-word;\n}\n\nh1, h2, h3, h4 { line-height: 1.25; margin: 0 0 0.6em; }\nh1 { font-size: clamp(1.8rem, 5vw, 2.8rem); letter-spacing: -0.01em; }\nh2 { font-size: clamp(1.5rem, 3.5vw, 2rem); }\nh3 { font-size: 1.2rem; }\nh4 { font-size: 1rem; }\np { margin: 0 0 1em; }\na { color: var(--acento); text-underline-offset: 2px; }\na:focus-visible, button:focus-visible, input:focus-visible, textarea:focus-visible, summary:focus-visible {\n  outline: 3px solid var(--acento);\n  outline-offset: 2px;\n}\n\ncode, pre {\n  font-family: ui-monospace, \"Cascadia Code\", Consolas, \"Liberation Mono\", monospace;\n  font-size: 0.9em;\n}\ncode { background: var(--codigo-fondo); padding: 0.1em 0.35em; border-radius: 4px; }\npre {\n  background: var(--codigo-fondo);\n  padding: 0.75rem;\n  border-radius: 6px;\n  overflow-x: auto;\n  white-space: pre-wrap;\n  word-break: break-all;\n  margin: 0;\n}\npre code { background: none; padding: 0; }\n\n.contenedor { max-width: var(--ancho); margin: 0 auto; padding: 0 16px; }\n.estrecho { max-width: 760px; }\n.contenedor.estrecho { margin: 0 auto; }\n\n.saltar {\n  position: absolute; left: -999px; top: 0;\n  background: var(--acento); color: var(--acento-texto);\n  padding: 0.5rem 1rem; z-index: 100;\n}\n.saltar:focus { left: 0; }\n\n/* ===== Cabecera y menú ===== */\n.cabecera {\n  position: sticky; top: 0; z-index: 50;\n  background: var(--superficie);\n  border-bottom: 1px solid var(--borde);\n}\n.cabecera__fila {\n  display: flex; align-items: center; justify-content: space-between;\n  gap: 1rem; min-height: 3.5rem;\n}\n.marca { font-weight: 700; color: var(--texto); text-decoration: none; }\n.menu { display: flex; gap: 0.25rem; flex-wrap: wrap; }\n.menu a {\n  color: var(--texto-suave); text-decoration: none;\n  padding: 0.4rem 0.65rem; border-radius: 6px; font-size: 0.95rem;\n}\n.menu a:hover { background: var(--fondo-alterno); color: var(--texto); }\n.menu-boton { display: none; }\n\n@media (max-width: 760px) {\n  .menu-boton {\n    display: inline-block;\n    background: none; color: var(--texto);\n    border: 1px solid var(--borde); border-radius: 6px;\n    padding: 0.4rem 0.8rem; font: inherit; cursor: pointer;\n  }\n  .menu {\n    display: none;\n    position: absolute; left: 0; right: 0; top: 100%;\n    flex-direction: column;\n    background: var(--superficie);\n    border-bottom: 1px solid var(--borde);\n    padding: 0.5rem 16px 1rem;\n  }\n  .menu.abierto { display: flex; }\n  .menu a { padding: 0.7rem 0.5rem; }\n}\n\n/* ===== Secciones ===== */\n.portada { padding: 3.5rem 0 3rem; background: var(--fondo-alterno); border-bottom: 1px solid var(--borde); }\n.etiqueta { color: var(--acento); font-weight: 600; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 0.05em; }\n.entradilla { font-size: 1.15rem; color: var(--texto-suave); max-width: 720px; }\n.portada__botones { display: flex; flex-wrap: wrap; gap: 0.75rem; margin-top: 1.5rem; }\n\n.seccion { padding: 3rem 0; }\n.seccion--alterna { background: var(--fondo-alterno); }\n\n.boton {\n  display: inline-block;\n  background: var(--acento); color: var(--acento-texto);\n  border: 2px solid var(--acento); border-radius: 8px;\n  padding: 0.55rem 1.1rem; font: inherit; font-weight: 600;\n  text-decoration: none; cursor: pointer;\n}\n.boton:hover { filter: brightness(1.08); }\n.boton:disabled { opacity: 0.6; cursor: wait; }\n.boton--secundario { background: transparent; color: var(--acento); }\n\n.aviso {\n  border-left: 4px solid var(--acento);\n  background: var(--superficie);\n  padding: 1rem 1.25rem; border-radius: 0 var(--radio) var(--radio) 0;\n  margin: 1.5rem 0;\n}\n.aviso p:last-child { margin: 0; }\n.alcance { font-size: 0.95rem; color: var(--texto-suave); }\n\n/* ===== Ideas clave ===== */\n.ideas {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(min(100%, 320px), 1fr));\n  gap: 1.25rem;\n}\n.idea {\n  position: relative;\n  background: var(--superficie);\n  border: 1px solid var(--borde);\n  border-radius: var(--radio);\n  padding: 1.25rem 1.25rem 1rem;\n  box-shadow: var(--sombra);\n}\n.idea#idea-3 { grid-column: 1 / -1; }\n.idea__num {\n  display: inline-grid; place-items: center;\n  width: 2rem; height: 2rem; border-radius: 50%;\n  background: var(--acento); color: var(--acento-texto);\n  font-weight: 700; margin-bottom: 0.5rem;\n}\n.idea ul { padding-left: 1.2rem; margin: 0 0 1em; }\n.idea__ejemplo { background: var(--fondo-alterno); padding: 0.6rem 0.8rem; border-radius: 6px; font-size: 0.95rem; }\n.idea__fuente { font-size: 0.85rem; color: var(--texto-suave); margin: 0; }\n\n/* Flujo de la idea 3 */\n.flujo {\n  display: flex; flex-wrap: wrap; align-items: stretch; gap: 0.4rem;\n  margin: 0 0 1rem;\n}\n.flujo__paso {\n  flex: 1 1 110px;\n  display: flex; flex-direction: column; justify-content: center;\n  text-align: center; font-weight: 600; font-size: 0.95rem;\n  border: 2px solid var(--acento); border-radius: 8px;\n  padding: 0.5rem; background: var(--fondo);\n}\n.flujo__paso small { font-weight: 400; color: var(--texto-suave); font-size: 0.8rem; }\n.flujo__paso--peligro { border-color: var(--peligro); background: var(--peligro-fondo); }\n.flujo__paso--ok { border-color: var(--ok); background: var(--ok-fondo); }\n.flujo__flecha { align-self: center; color: var(--texto-suave); font-weight: 700; }\n.flujo__frontera {\n  align-self: stretch; writing-mode: vertical-rl; transform: rotate(180deg);\n  border-left: 3px dashed var(--peligro); color: var(--peligro);\n  font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.05em;\n  padding: 0 0.2rem; text-align: center;\n}\n@media (max-width: 600px) {\n  .flujo { flex-direction: column; }\n  .flujo__flecha { transform: rotate(90deg); }\n  .flujo__frontera {\n    writing-mode: horizontal-tb; transform: none;\n    border-left: 0; border-top: 3px dashed var(--peligro);\n    padding: 0.2rem 0 0;\n  }\n}\n\n/* ===== Demos ===== */\n.demo {\n  background: var(--superficie);\n  border: 1px solid var(--borde);\n  border-radius: var(--radio);\n  padding: 1.25rem;\n  margin-bottom: 1.5rem;\n  box-shadow: var(--sombra);\n}\n.formulario { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 240px), 1fr)); gap: 0 1rem; align-items: end; }\n.formulario .boton { justify-self: start; margin-bottom: 1rem; }\n.campo { margin-bottom: 1rem; }\n.campo label { display: block; font-weight: 600; margin-bottom: 0.3rem; }\n.campo input, .campo textarea {\n  width: 100%;\n  font: inherit; font-family: ui-monospace, Consolas, monospace; font-size: 0.95rem;\n  color: var(--texto); background: var(--fondo);\n  border: 1px solid var(--borde); border-radius: 6px;\n  padding: 0.55rem 0.7rem;\n}\n.campo--buscar input { font-family: inherit; }\n.ayuda { font-size: 0.85rem; color: var(--texto-suave); margin: 0.3rem 0 0; }\n\n.resultado:empty { display: none; }\n.resultado { margin-top: 1rem; }\n.reglas { list-style: none; padding: 0; margin: 0.25rem 0 1rem; }\n.reglas li { padding: 0.25rem 0 0.25rem 1.8rem; position: relative; }\n.reglas li::before { position: absolute; left: 0.2rem; font-weight: 700; }\n.reglas .cumple { color: var(--ok); }\n.reglas .cumple::before { content: \"✔\"; }\n.reglas .falla { color: var(--peligro); }\n.reglas .falla::before { content: \"✘\"; }\n.veredicto { font-weight: 700; padding: 0.5rem 0.8rem; border-radius: 6px; display: inline-block; }\n.veredicto--ok { background: var(--ok-fondo); color: var(--ok); }\n.veredicto--mal { background: var(--peligro-fondo); color: var(--peligro); }\n\n.ejemplos { display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1rem; }\n.chip {\n  font: inherit; font-size: 0.85rem;\n  background: var(--fondo-alterno); color: var(--texto);\n  border: 1px solid var(--borde); border-radius: 999px;\n  padding: 0.3rem 0.8rem; cursor: pointer;\n}\n.chip:hover { border-color: var(--acento); }\n\n.comparativa {\n  display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 300px), 1fr));\n  gap: 1rem; margin-top: 1rem;\n}\n.panel { border: 2px solid var(--borde); border-radius: var(--radio); padding: 1rem; min-width: 0; }\n.panel--peligro { border-color: var(--peligro); }\n.panel--ok { border-color: var(--ok); }\n.panel h4 { margin-bottom: 0.5rem; }\n.panel__nota { font-size: 0.85rem; color: var(--texto-suave); margin: 0.5rem 0; }\n.panel iframe {\n  width: 100%; height: 90px;\n  border: 1px dashed var(--borde); border-radius: 6px;\n  background: #ffffff;\n}\n.vista-texto {\n  border: 1px dashed var(--borde); border-radius: 6px;\n  padding: 0.6rem; min-height: 3rem; background: var(--fondo);\n  white-space: pre-wrap;\n}\n.analisis { font-size: 0.9rem; margin-top: 0.5rem; }\n.analisis ul { margin: 0.3rem 0 0; padding-left: 1.2rem; }\n.analisis .alerta { color: var(--peligro); font-weight: 600; }\n\n.tabla-hash { width: 100%; border-collapse: collapse; font-size: 0.9rem; }\n.tabla-hash th, .tabla-hash td { text-align: left; padding: 0.5rem; border-bottom: 1px solid var(--borde); vertical-align: top; }\n.tabla-hash td code { word-break: break-all; display: inline-block; }\n.envoltorio-tabla { overflow-x: auto; }\n.barra { height: 0.6rem; background: var(--acento); border-radius: 999px; min-width: 2px; margin-top: 0.3rem; }\n.barra--rapida { background: var(--peligro); }\n\n.explica { margin-top: 1rem; border-top: 1px solid var(--borde); padding-top: 0.75rem; }\n.explica summary { cursor: pointer; font-weight: 600; color: var(--acento); }\n.explica p { margin-top: 0.75rem; }\n\n/* ===== Ciclo SSDLC ===== */\n.ciclo {\n  list-style: none; padding: 0; margin: 1.5rem 0 0.5rem;\n  display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 200px), 1fr));\n  gap: 0.75rem; counter-reset: none;\n}\n.fase details {\n  background: var(--superficie); border: 1px solid var(--borde);\n  border-radius: var(--radio); padding: 0.9rem 1rem; height: 100%;\n  box-shadow: var(--sombra);\n}\n.fase summary { cursor: pointer; font-weight: 600; list-style: none; display: flex; align-items: center; gap: 0.6rem; }\n.fase summary::-webkit-details-marker { display: none; }\n.fase summary::after { content: \"+\"; margin-left: auto; color: var(--texto-suave); }\n.fase details[open] summary::after { content: \"−\"; }\n.fase details p { margin: 0.75rem 0 0; font-size: 0.95rem; }\n.fase__num {\n  flex: none; display: inline-grid; place-items: center;\n  width: 1.8rem; height: 1.8rem; border-radius: 50%;\n  border: 2px solid var(--acento); color: var(--acento); font-size: 0.9rem;\n}\n.ciclo__vuelta { text-align: center; color: var(--texto-suave); font-weight: 600; }\n\n/* ===== Glosario ===== */\n.glosario { margin: 0; }\n.glosario > div { padding: 0.8rem 0; border-bottom: 1px solid var(--borde); }\n.glosario dt { font-weight: 700; }\n.glosario dd { margin: 0.2rem 0 0; color: var(--texto-suave); }\n\n/* ===== Fuentes y pie ===== */\n.fuentes { padding-left: 1.2rem; }\n.fuentes li { margin-bottom: 0.4rem; }\n.pie { border-top: 1px solid var(--borde); padding: 1.5rem 0; font-size: 0.9rem; color: var(--texto-suave); background: var(--superficie); }\n.pie p { margin: 0; }\n\n@media (prefers-reduced-motion: reduce) {\n  html { scroll-behavior: auto; }\n}\n"
}
```

<details><summary>Resultado de herramienta</summary>

```
File created successfully at: <HOME>\Documents\PuestaEnProduccion\Ut1\trabajo\css\estilos.css (file state is current in your context — no need to Read it back)
```

</details>

**🔧 Herramienta `Write`**

```json
{
  "file_path": "<HOME>\\Documents\\PuestaEnProduccion\\Ut1\\trabajo\\js\\demo.js",
  "content": "/*\n * Demostraciones de la web \"Desarrollo seguro\".\n * Las funciones puras (validación, codificación, hashes) se exportan al final\n * para poder probarlas con Node: node --test tests/\n */\n\n// ---------- Demo 1: validación con lista blanca ----------\n\nconst USUARIO_MIN = 3;\nconst USUARIO_MAX = 20;\nconst EDAD_MIN = 14;\nconst EDAD_MAX = 120;\n\n// Devuelve la lista de reglas con su resultado. No modifica la entrada:\n// si trae espacios u otros caracteres, se rechaza en lugar de \"arreglarla\".\nfunction validarUsuario(valor) {\n  const texto = String(valor);\n  return [\n    { regla: `Tiene entre ${USUARIO_MIN} y ${USUARIO_MAX} caracteres (tiene ${texto.length})`,\n      ok: texto.length >= USUARIO_MIN && texto.length <= USUARIO_MAX },\n    { regla: \"Sólo usa a-z, 0-9 o _ (lista blanca)\",\n      ok: /^[a-z0-9_]*$/.test(texto) && texto.length > 0 },\n  ];\n}\n\nfunction validarEdad(valor) {\n  const texto = String(valor);\n  const soloDigitos = /^[0-9]{1,3}$/.test(texto);\n  const numero = soloDigitos ? Number(texto) : NaN;\n  return [\n    { regla: \"Es un número entero sin signos, espacios ni decimales\", ok: soloDigitos },\n    { regla: `Está entre ${EDAD_MIN} y ${EDAD_MAX}`,\n      ok: soloDigitos && numero >= EDAD_MIN && numero <= EDAD_MAX },\n  ];\n}\n\n// ---------- Demo 2: codificación de salida ----------\n\nconst ENTIDADES = { \"&\": \"&amp;\", \"<\": \"&lt;\", \">\": \"&gt;\", '\"': \"&quot;\", \"'\": \"&#39;\" };\n\n// Codificación para insertar texto dentro del cuerpo o de un atributo HTML.\n// Es lo que hace el navegador por nosotros cuando usamos textContent.\nfunction escaparHTML(texto) {\n  return String(texto).replace(/[&<>\"']/g, (c) => ENTIDADES[c]);\n}\n\n// Analiza qué interpretaría el navegador si el texto se insertara como HTML.\n// DOMParser crea un documento inerte: no ejecuta scripts ni carga imágenes.\nfunction analizarHTML(texto) {\n  const doc = new DOMParser().parseFromString(`<body>${texto}</body>`, \"text/html\");\n  const elementos = [...doc.body.querySelectorAll(\"*\")];\n  const hallazgos = [];\n  for (const el of elementos) {\n    const peligros = [];\n    if (el.tagName === \"SCRIPT\") peligros.push(\"es un bloque de código JavaScript\");\n    for (const attr of el.attributes) {\n      if (/^on/i.test(attr.name)) {\n        peligros.push(`atributo ${attr.name} = ejecutaría JavaScript`);\n      } else if (/^\\s*javascript:/i.test(attr.value)) {\n        peligros.push(`${attr.name} con esquema javascript: = ejecutaría JavaScript al pulsar`);\n      }\n    }\n    hallazgos.push({ etiqueta: el.tagName.toLowerCase(), peligros });\n  }\n  return hallazgos;\n}\n\n// ---------- Demo 3: hash rápido frente a hash lento con sal ----------\n\nconst PBKDF2_ITERACIONES = 600000; // recomendación de OWASP para PBKDF2-HMAC-SHA256\nconst REPETICIONES_SHA = 1000;\n\nfunction aHex(buffer) {\n  return [...new Uint8Array(buffer)].map((b) => b.toString(16).padStart(2, \"0\")).join(\"\");\n}\n\nasync function sha256(texto) {\n  const datos = new TextEncoder().encode(texto);\n  return aHex(await crypto.subtle.digest(\"SHA-256\", datos));\n}\n\nasync function pbkdf2(texto, sal, iteraciones = PBKDF2_ITERACIONES) {\n  if (!Number.isInteger(iteraciones) || iteraciones < 1) {\n    throw new RangeError(\"El número de iteraciones debe ser un entero positivo\");\n  }\n  const clave = await crypto.subtle.importKey(\n    \"raw\", new TextEncoder().encode(texto), \"PBKDF2\", false, [\"deriveBits\"]\n  );\n  const bits = await crypto.subtle.deriveBits(\n    { name: \"PBKDF2\", hash: \"SHA-256\", salt: sal, iterations: iteraciones }, clave, 256\n  );\n  return aHex(bits);\n}\n\nfunction salAleatoria() {\n  return crypto.getRandomValues(new Uint8Array(16));\n}\n\n// ---------- Conexión con la página ----------\n\nfunction pintarReglas(titulo, reglas) {\n  const correcto = reglas.every((r) => r.ok);\n  const lista = reglas\n    .map((r) => `<li class=\"${r.ok ? \"cumple\" : \"falla\"}\">${escaparHTML(r.regla)}</li>`)\n    .join(\"\");\n  return `<h4>${escaparHTML(titulo)}</h4><ul class=\"reglas\">${lista}</ul>` +\n    `<span class=\"veredicto ${correcto ? \"veredicto--ok\" : \"veredicto--mal\"}\">` +\n    `${correcto ? \"Aceptado\" : \"Rechazado\"}</span>`;\n}\n\nfunction iniciarMenu() {\n  const boton = document.querySelector(\".menu-boton\");\n  const menu = document.getElementById(\"menu\");\n  if (!boton || !menu) return;\n  boton.addEventListener(\"click\", () => {\n    const abierto = menu.classList.toggle(\"abierto\");\n    boton.setAttribute(\"aria-expanded\", String(abierto));\n  });\n  menu.addEventListener(\"click\", (e) => {\n    if (e.target.tagName === \"A\") {\n      menu.classList.remove(\"abierto\");\n      boton.setAttribute(\"aria-expanded\", \"false\");\n    }\n  });\n}\n\nfunction iniciarValidacion() {\n  const form = document.getElementById(\"form-validacion\");\n  const salida = document.getElementById(\"resultado-validacion\");\n  form.addEventListener(\"submit\", (e) => {\n    e.preventDefault();\n    const usuario = form.usuario.value;\n    const edad = form.edad.value;\n    // Los valores del usuario sólo se muestran a través de escaparHTML.\n    salida.innerHTML =\n      `<div class=\"comparativa\">` +\n      `<div>${pintarReglas(`Usuario: \"${usuario}\"`, validarUsuario(usuario))}</div>` +\n      `<div>${pintarReglas(`Edad: \"${edad}\"`, validarEdad(edad))}</div>` +\n      `</div>`;\n  });\n}\n\nfunction iniciarSalida() {\n  const area = document.getElementById(\"comentario\");\n  const iframe = document.getElementById(\"vista-insegura\");\n  const analisis = document.getElementById(\"analisis-inseguro\");\n  const vistaSegura = document.getElementById(\"vista-segura\");\n  const codigoSeguro = document.getElementById(\"codigo-seguro\");\n\n  function publicar() {\n    const texto = area.value;\n\n    // Panel inseguro: el texto se trata como HTML, dentro de un iframe\n    // con sandbox vacío (sin scripts, sin formularios, origen opaco).\n    iframe.srcdoc = `<!doctype html><meta charset=\"utf-8\"><body style=\"font-family:sans-serif;margin:8px\">${texto}</body>`;\n\n    const hallazgos = analizarHTML(texto);\n    if (hallazgos.length === 0) {\n      analisis.innerHTML = \"<p>El navegador no ha creado ninguna etiqueta: aquí no hay diferencia visible.</p>\";\n    } else {\n      const items = hallazgos.map((h) => {\n        const detalle = h.peligros.length\n          ? ` <span class=\"alerta\">⚠ ${h.peligros.map(escaparHTML).join(\"; \")}</span>`\n          : \" (sólo formato)\";\n        return `<li>Ha creado un elemento <code>&lt;${escaparHTML(h.etiqueta)}&gt;</code>${detalle}</li>`;\n      }).join(\"\");\n      analisis.innerHTML = `<p><strong>El dato se ha convertido en código:</strong></p><ul>${items}</ul>`;\n    }\n\n    // Panel seguro: textContent nunca interpreta etiquetas.\n    vistaSegura.textContent = texto;\n    codigoSeguro.textContent = escaparHTML(texto);\n  }\n\n  document.getElementById(\"boton-publicar\").addEventListener(\"click\", publicar);\n  document.querySelectorAll(\".chip[data-ejemplo]\").forEach((chip) => {\n    chip.addEventListener(\"click\", () => {\n      area.value = chip.dataset.ejemplo;\n      publicar();\n    });\n  });\n  publicar();\n}\n\nfunction iniciarHash() {\n  const boton = document.getElementById(\"boton-hash\");\n  const entrada = document.getElementById(\"clave\");\n  const salida = document.getElementById(\"resultado-hash\");\n\n  if (!window.crypto || !crypto.subtle) {\n    boton.disabled = true;\n    salida.innerHTML = \"<p>Tu navegador no ofrece la Web Crypto API en esta página (necesita HTTPS o localhost).</p>\";\n    return;\n  }\n\n  boton.addEventListener(\"click\", async () => {\n    boton.disabled = true;\n    boton.textContent = \"Calculando…\";\n    try {\n      const texto = entrada.value;\n\n      const t0 = performance.now();\n      let hashRapido = \"\";\n      for (let i = 0; i < REPETICIONES_SHA; i++) hashRapido = await sha256(texto);\n      const msSha = (performance.now() - t0) / REPETICIONES_SHA;\n\n      const sal = salAleatoria();\n      const t1 = performance.now();\n      const hashLento = await pbkdf2(texto, sal);\n      const msPbkdf2 = performance.now() - t1;\n\n      const proporcion = Math.round(msPbkdf2 / msSha);\n      const intentosSha = Math.round(1000 / msSha);\n      const intentosPbkdf2 = (1000 / msPbkdf2).toFixed(1);\n      const anchoRapido = Math.max(0.5, (msSha / msPbkdf2) * 100);\n\n      salida.innerHTML = `\n        <div class=\"envoltorio-tabla\"><table class=\"tabla-hash\">\n          <thead><tr><th scope=\"col\">Función</th><th scope=\"col\">Tiempo por intento</th><th scope=\"col\">Intentos/segundo en tu equipo</th><th scope=\"col\">Resultado</th></tr></thead>\n          <tbody>\n            <tr><th scope=\"row\">SHA-256<br><small>sin sal</small></th>\n              <td>${msSha.toFixed(4)} ms<div class=\"barra barra--rapida\" style=\"width:${anchoRapido}%\"></div></td>\n              <td>≈ ${intentosSha.toLocaleString(\"es-ES\")}</td>\n              <td><code>${hashRapido}</code></td></tr>\n            <tr><th scope=\"row\">PBKDF2-SHA256<br><small>${PBKDF2_ITERACIONES.toLocaleString(\"es-ES\")} iteraciones</small></th>\n              <td>${msPbkdf2.toFixed(1)} ms<div class=\"barra\" style=\"width:100%\"></div></td>\n              <td>≈ ${intentosPbkdf2}</td>\n              <td><code>${hashLento}</code><br><small>sal: <code>${aHex(sal)}</code></small></td></tr>\n          </tbody>\n        </table></div>\n        <p><strong>PBKDF2 ha sido unas ${proporcion.toLocaleString(\"es-ES\")} veces más lento.</strong> Para ti, como usuario, es una espera imperceptible al iniciar sesión; para quien intenta adivinar contraseñas por fuerza bruta, cada intento cuesta lo mismo.</p>`;\n    } catch (error) {\n      salida.textContent = `No se ha podido calcular el hash: ${error.message}`;\n    } finally {\n      boton.disabled = false;\n      boton.textContent = \"Calcular hashes\";\n    }\n  });\n}\n\nfunction iniciarGlosario() {\n  const buscador = document.getElementById(\"buscar-termino\");\n  const entradas = [...document.querySelectorAll(\"#lista-glosario > div\")];\n  const vacio = document.getElementById(\"glosario-vacio\");\n  const normalizar = (t) => t.normalize(\"NFD\").replace(/[̀-ͯ]/g, \"\").toLowerCase();\n  buscador.addEventListener(\"input\", () => {\n    const consulta = normalizar(buscador.value.trim());\n    let visibles = 0;\n    for (const e of entradas) {\n      const coincide = normalizar(e.textContent).includes(consulta);\n      e.hidden = !coincide;\n      if (coincide) visibles++;\n    }\n    vacio.hidden = visibles > 0;\n  });\n}\n\nif (typeof document !== \"undefined\") {\n  document.addEventListener(\"DOMContentLoaded\", () => {\n    iniciarMenu();\n    iniciarValidacion();\n    iniciarSalida();\n    iniciarHash();\n    iniciarGlosario();\n  });\n}\n\nif (typeof module !== \"undefined\") {\n  module.exports = { validarUsuario, validarEdad, escaparHTML, sha256, pbkdf2, PBKDF2_ITERACIONES };\n}\n"
}
```

<details><summary>Resultado de herramienta</summary>

```
File created successfully at: <HOME>\Documents\PuestaEnProduccion\Ut1\trabajo\js\demo.js (file state is current in your context — no need to Read it back)
```

</details>

**🔧 Herramienta `Write`**

```json
{
  "file_path": "<HOME>\\Documents\\PuestaEnProduccion\\Ut1\\trabajo\\tests\\demo.test.js",
  "content": "// Pruebas de las funciones de la demostración. Ejecutar con: node --test tests/\nconst test = require(\"node:test\");\nconst assert = require(\"node:assert/strict\");\nconst { validarUsuario, validarEdad, escaparHTML, sha256, pbkdf2 } = require(\"../js/demo.js\");\n\nconst acepta = (reglas) => reglas.every((r) => r.ok);\n\ntest(\"validarUsuario acepta nombres de la lista blanca\", () => {\n  for (const v of [\"ana\", \"ana_garcia\", \"user_2024\", \"a\".repeat(20)]) {\n    assert.equal(acepta(validarUsuario(v)), true, v);\n  }\n});\n\ntest(\"validarUsuario rechaza entradas fuera de la lista blanca\", () => {\n  for (const v of [\"\", \"ab\", \"a\".repeat(21), \"Ana\", \"josé\", \"ana garcia\", \" ana\", \"<script>\", \"ana'--\", \"ana;rm\"]) {\n    assert.equal(acepta(validarUsuario(v)), false, JSON.stringify(v));\n  }\n});\n\ntest(\"validarEdad acepta enteros en rango, incluidos los límites\", () => {\n  for (const v of [\"14\", \"17\", \"120\"]) assert.equal(acepta(validarEdad(v)), true, v);\n});\n\ntest(\"validarEdad rechaza fuera de rango y formatos no enteros\", () => {\n  for (const v of [\"\", \"13\", \"121\", \"-5\", \"17.5\", \" 17\", \"1e2\", \"0x20\", \"abc\", \"9999\"]) {\n    assert.equal(acepta(validarEdad(v)), false, JSON.stringify(v));\n  }\n});\n\ntest(\"escaparHTML codifica los cinco caracteres especiales\", () => {\n  assert.equal(escaparHTML(`<img src=x onerror=\"alert('1')\">&`),\n    \"&lt;img src=x onerror=&quot;alert(&#39;1&#39;)&quot;&gt;&amp;\");\n  assert.equal(escaparHTML(\"texto normal\"), \"texto normal\");\n});\n\ntest(\"sha256 coincide con el vector de prueba de FIPS 180-2 ('abc')\", async () => {\n  assert.equal(await sha256(\"abc\"),\n    \"ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad\");\n});\n\ntest(\"pbkdf2 coincide con el vector de prueba de RFC 7914 §11 (passwd/salt/c=1)\", async () => {\n  const sal = new TextEncoder().encode(\"salt\");\n  assert.equal(await pbkdf2(\"passwd\", sal, 1),\n    \"55ac046e56e3089fec1691c22544b605f94185216dde0465e68b9d57c20dacbc\");\n});\n\ntest(\"pbkdf2 con sales distintas produce hashes distintos\", async () => {\n  const a = await pbkdf2(\"verano2024\", new Uint8Array(16).fill(1), 1000);\n  const b = await pbkdf2(\"verano2024\", new Uint8Array(16).fill(2), 1000);\n  assert.notEqual(a, b);\n});\n\ntest(\"pbkdf2 rechaza un número de iteraciones no válido\", async () => {\n  for (const n of [0, -1, 1.5, NaN]) {\n    await assert.rejects(pbkdf2(\"x\", new Uint8Array(16), n), RangeError, String(n));\n  }\n});\n"
}
```

**🔧 Herramienta `Bash`**

```json
{
  "command": "cd \"<HOME>/Documents/PuestaEnProduccion/Ut1/trabajo\" && node --test tests/ 2>&1 | tail -25",
  "description": "Run demo unit tests with Node"
}
```

<details><summary>Resultado de herramienta</summary>

```
File created successfully at: <HOME>\Documents\PuestaEnProduccion\Ut1\trabajo\tests\demo.test.js (file state is current in your context — no need to Read it back)
```

</details>

<details><summary>Resultado de herramienta</summary>

```
at resolveForCJSWithHooks (node:internal/modules/cjs/loader:1169:12)
    at Module._load (node:internal/modules/cjs/loader:1341:5)
    at wrapModuleLoad (node:internal/modules/cjs/loader:261:19)
    at Module.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:154:5)
    at node:internal/main/run_main_module:33:47 {
  code: 'MODULE_NOT_FOUND',
  requireStack: []
}

Node.js v24.21.0
✖ tests (44.7511ms)
ℹ tests 1
ℹ suites 0
ℹ pass 0
ℹ fail 1
ℹ cancelled 0
ℹ skipped 0
ℹ todo 0
ℹ duration_ms 51.5453

✖ failing tests:

test at tests:1:1
✖ tests (44.7511ms)
  'test failed'
```

</details>

**🔧 Herramienta `Bash`**

```json
{
  "command": "cd \"<HOME>/Documents/PuestaEnProduccion/Ut1/trabajo\" && node --test tests/demo.test.js 2>&1 | tail -25",
  "description": "Run demo unit tests file directly"
}
```

<details><summary>Resultado de herramienta</summary>

```
✔ validarUsuario acepta nombres de la lista blanca (0.8445ms)
✔ validarUsuario rechaza entradas fuera de la lista blanca (0.1689ms)
✔ validarEdad acepta enteros en rango, incluidos los límites (0.1664ms)
✔ validarEdad rechaza fuera de rango y formatos no enteros (0.6634ms)
✔ escaparHTML codifica los cinco caracteres especiales (0.1835ms)
✔ sha256 coincide con el vector de prueba de FIPS 180-2 ('abc') (6.8878ms)
✔ pbkdf2 coincide con el vector de prueba de RFC 7914 §11 (passwd/salt/c=1) (1.3057ms)
✔ pbkdf2 con sales distintas produce hashes distintos (0.9037ms)
✔ pbkdf2 rechaza un número de iteraciones no válido (0.5446ms)
ℹ tests 9
ℹ suites 0
ℹ pass 9
ℹ fail 0
ℹ cancelled 0
ℹ skipped 0
ℹ todo 0
ℹ duration_ms 73.6518
```

</details>

**🔧 Herramienta `Bash`**

```json
{
  "command": "cd \"<HOME>/Documents/PuestaEnProduccion/Ut1/trabajo\" && sed -i 's#node --test tests/$#node --test tests/demo.test.js#' js/demo.js tests/demo.test.js && grep -n \"node --test\" js/demo.js tests/demo.test.js; ls \"/c/Program Files (x86)/Microsoft/Edge/Application/msedge.exe\" \"/c/Program Files/Google/Chrome/Application/chrome.exe\" 2>&1",
  "description": "Fix test command comment and locate a browser"
}
```

<details><summary>Resultado de herramienta</summary>

```
js/demo.js:4: * para poder probarlas con Node: node --test tests/demo.test.js
tests/demo.test.js:1:// Pruebas de las funciones de la demostración. Ejecutar con: node --test tests/demo.test.js
/c/Program Files (x86)/Microsoft/Edge/Application/msedge.exe
/c/Program Files/Google/Chrome/Application/chrome.exe
```

</details>

## 🤖 Claude · 2026-10-26 16:44:01 UTC

He terminado la web y sus 9 pruebas pasan. Ahora la estoy revisando en el navegador, a ancho de móvil y de escritorio.

**🔧 Herramienta `Bash`**

```json
{
  "command": "cd \"<HOME>/Documents/PuestaEnProduccion/Ut1/trabajo\" && S=\"<HOME>/AppData/Local/Temp/claude/<carpeta-de-proyecto>/75fcebbd-e713-46f3-8f12-2de71489e93c/scratchpad\" && CH=\"/c/Program Files/Google/Chrome/Application/chrome.exe\" && URL=\"file:///<HOME>/Documents/PuestaEnProduccion/Ut1/trabajo/index.html\" && \"$CH\" --headless=new --disable-gpu --user-data-dir=\"$S/chrome1\" --window-size=390,6000 --screenshot=\"$S/movil.png\" \"$URL\" 2>/dev/null; \"$CH\" --headless=new --disable-gpu --user-data-dir=\"$S/chrome2\" --window-size=1280,5200 --screenshot=\"$S/escritorio.png\" \"$URL\" 2>/dev/null; \"$CH\" --headless=new --disable-gpu --user-data-dir=\"$S/chrome3\" --virtual-time-budget=3000 --dump-dom \"$URL\" 2>/dev/null | grep -o 'id=\"analisis-inseguro\".\\{0,400\\}'; ls -la \"$S\"/*.png",
  "description": "Take headless Chrome screenshots and dump DOM",
  "timeout": 120000
}
```

<details><summary>Resultado de herramienta</summary>

```
id="analisis-inseguro" class="analisis"><p><strong>El dato se ha convertido en código:</strong></p><ul><li>Ha creado un elemento <code>&lt;img&gt;</code> <span class="alerta">⚠ atributo onerror = ejecutaría JavaScript</span></li></ul></div>
-rw-r--r-- 1 <dato-personal> 1049089 451815 Oct 26 17:44 <HOME>/AppData/Local/Temp/claude/<carpeta-de-proyecto>/75fcebbd-e713-46f3-8f12-2de71489e93c/scratchpad/escritorio.png
-rw-r--r-- 1 <dato-personal> 1049089 292314 Oct 26 17:44 <HOME>/AppData/Local/Temp/claude/<carpeta-de-proyecto>/75fcebbd-e713-46f3-8f12-2de71489e93c/scratchpad/movil.png
```

</details>

**🔧 Herramienta `Read`**

```json
{
  "file_path": "<HOME>\\AppData\\Local\\Temp\\claude\\<carpeta-de-proyecto>\\75fcebbd-e713-46f3-8f12-2de71489e93c\\scratchpad\\movil.png"
}
```

<details><summary>Resultado de herramienta</summary>

```
[imagen adjunta: captura de pantalla]
```

</details>

## 👤 Usuario · 2026-10-26 16:44:12 UTC

[Image: original 390x6000, displayed at 130x2000. Multiply coordinates by 3.00 to map to original image.]

**🔧 Herramienta `Read`**

```json
{
  "file_path": "<HOME>\\AppData\\Local\\Temp\\claude\\<carpeta-de-proyecto>\\75fcebbd-e713-46f3-8f12-2de71489e93c\\scratchpad\\escritorio.png"
}
```

<details><summary>Resultado de herramienta</summary>

```
[imagen adjunta: captura de pantalla]
```

</details>

## 👤 Usuario · 2026-10-26 16:44:14 UTC

[Image: original 1280x5200, displayed at 492x2000. Multiply coordinates by 2.60 to map to original image.]

**🔧 Herramienta `Bash`**

```json
{
  "command": "S=\"<HOME>/AppData/Local/Temp/claude/<carpeta-de-proyecto>/75fcebbd-e713-46f3-8f12-2de71489e93c/scratchpad\" && cat > \"$S/marco.html\" <<'EOF'\n<!doctype html><body style=\"margin:0;background:#888\"><iframe id=\"f\" src=\"file:///<HOME>/Documents/PuestaEnProduccion/Ut1/trabajo/index.html\" style=\"width:360px;height:9000px;border:0;background:#fff\"></iframe>\n<script>\nf.onload=()=>{const d=f.contentDocument;setTimeout(()=>{document.title=\"W=\"+d.documentElement.scrollWidth;\nconst anchos=[...d.querySelectorAll('*')].filter(e=>e.getBoundingClientRect().right>361).slice(0,5).map(e=>e.tagName+'.'+e.className);document.body.dataset.x=anchos.join('|')},500)}\n</script></body>\nEOF\nCH=\"/c/Program Files/Google/Chrome/Application/chrome.exe\"; \"$CH\" --headless=new --disable-gpu --allow-file-access-from-files --user-data-dir=\"$S/chrome4\" --window-size=600,9000 --virtual-time-budget=3000 --dump-dom \"file:///$S/marco.html\" 2>/dev/null | grep -oE '<title>[^<]*</title>|data-x=\"[^\"]*\"'; \"$CH\" --headless=new --disable-gpu --allow-file-access-from-files --user-data-dir=\"$S/chrome5\" --window-size=600,9000 --virtual-time-budget=3000 --screenshot=\"$S/movil2.png\" \"file:///$S/marco.html\" 2>/dev/null; echo ok",
  "description": "Render page inside 360px iframe to check mobile overflow",
  "timeout": 120000
}
```

<details><summary>Resultado de herramienta</summary>

```
<title>W=345</title>
data-x=""
ok
```

</details>

**🔧 Herramienta `Bash`**

```json
{
  "command": "cd \"<HOME>/AppData/Local/Temp/claude/<carpeta-de-proyecto>/75fcebbd-e713-46f3-8f12-2de71489e93c/scratchpad\" && node -e \"\n// recorta la parte de las demos dibujando nada: sólo informa tamaño\nconst fs=require('fs');const b=fs.readFileSync('movil2.png');console.log(b.readUInt32BE(16),b.readUInt32BE(20))\"",
  "description": "Check screenshot dimensions"
}
```

<details><summary>Resultado de herramienta</summary>

```
600 9000
Shell cwd was reset to <HOME>\Documents\PuestaEnProduccion\Ut1\trabajo
```

</details>

**🔧 Herramienta `Bash`**

```json
{
  "command": "S=\"<HOME>/AppData/Local/Temp/claude/<carpeta-de-proyecto>/75fcebbd-e713-46f3-8f12-2de71489e93c/scratchpad\"; CH=\"/c/Program Files/Google/Chrome/Application/chrome.exe\"; for sec in demo-salida ssdlc; do cat > \"$S/m-$sec.html\" <<EOF\n<!doctype html><body style=\"margin:0\"><iframe src=\"file:///<HOME>/Documents/PuestaEnProduccion/Ut1/trabajo/index.html#$sec\" style=\"width:360px;height:1500px;border:0\"></iframe></body>\nEOF\n\"$CH\" --headless=new --disable-gpu --allow-file-access-from-files --user-data-dir=\"$S/c-$sec\" --window-size=500,1500 --virtual-time-budget=3000 --screenshot=\"$S/m-$sec.png\" \"file:///$S/m-$sec.html\" 2>/dev/null; done; echo ok",
  "description": "Screenshot mobile views of demo and SSDLC sections",
  "timeout": 120000
}
```

**🔧 Herramienta `Read`**

```json
{
  "file_path": "<HOME>\\AppData\\Local\\Temp\\claude\\<carpeta-de-proyecto>\\75fcebbd-e713-46f3-8f12-2de71489e93c\\scratchpad\\m-demo-salida.png"
}
```

<details><summary>Resultado de herramienta</summary>

```
ok
```

</details>

<details><summary>Resultado de herramienta</summary>

```
[imagen adjunta: captura de pantalla]
```

</details>

**🔧 Herramienta `Bash`**

```json
{
  "command": "S=\"<HOME>/AppData/Local/Temp/claude/<carpeta-de-proyecto>/75fcebbd-e713-46f3-8f12-2de71489e93c/scratchpad\"; CH=\"/c/Program Files/Google/Chrome/Application/chrome.exe\"; for sec in demo-salida ssdlc; do cat > \"$S/m-$sec.html\" <<EOF\n<!doctype html><body style=\"margin:0\"><iframe id=\"f\" src=\"file:///<HOME>/Documents/PuestaEnProduccion/Ut1/trabajo/index.html\" style=\"width:360px;height:1500px;border:0\"></iframe>\n<script>f.onload=()=>{const d=f.contentDocument;d.documentElement.style.scrollBehavior='auto';d.getElementById('$sec').scrollIntoView();}</script></body>\nEOF\n\"$CH\" --headless=new --disable-gpu --allow-file-access-from-files --user-data-dir=\"$S/c-$sec\" --window-size=500,1500 --virtual-time-budget=3000 --screenshot=\"$S/m-$sec.png\" \"file:///$S/m-$sec.html\" 2>/dev/null; done; echo ok",
  "description": "Screenshot mobile demo and SSDLC sections scrolled",
  "timeout": 120000
}
```

**🔧 Herramienta `Read`**

```json
{
  "file_path": "<HOME>\\AppData\\Local\\Temp\\claude\\<carpeta-de-proyecto>\\75fcebbd-e713-46f3-8f12-2de71489e93c\\scratchpad\\m-demo-salida.png"
}
```

**🔧 Herramienta `Read`**

```json
{
  "file_path": "<HOME>\\AppData\\Local\\Temp\\claude\\<carpeta-de-proyecto>\\75fcebbd-e713-46f3-8f12-2de71489e93c\\scratchpad\\m-ssdlc.png"
}
```

<details><summary>Resultado de herramienta</summary>

```
ok
```

</details>

<details><summary>Resultado de herramienta</summary>

```
[imagen adjunta: captura de pantalla]
```

</details>

<details><summary>Resultado de herramienta</summary>

```
[imagen adjunta: captura de pantalla]
```

</details>

## 🤖 Claude · 2026-10-26 16:45:00 UTC

La web se ve bien en el móvil y no tiene scroll horizontal. Ahora estoy comprobando que los enlaces de las fuentes funcionan.

**🔧 Herramienta `Bash`**

```json
{
  "command": "cd \"<HOME>/Documents/PuestaEnProduccion/Ut1/trabajo\" && grep -oE 'href=\"https?://[^\"]+\"' index.html | sed 's/href=\"//;s/\"$//' | sort -u | while read u; do printf \"%s  %s\\n\" \"$(curl -s -o /dev/null -L -w '%{http_code}' -A 'Mozilla/5.0' \"$u\")\" \"$u\"; done",
  "description": "Check HTTP status of every external link",
  "timeout": 180000
}
```

<details><summary>Resultado de herramienta</summary>

```
200  https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html
200  https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html
200  https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html
200  https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html
200  https://cheatsheetseries.owasp.org/cheatsheets/Threat_Modeling_Cheat_Sheet.html
200  https://clang.llvm.org/docs/AddressSanitizer.html
200  https://csrc.nist.gov/pubs/sp/800/218/final
200  https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/deriveBits
200  https://developer.mozilla.org/es/docs/Web/API/Node/textContent
404  https://github.com/msolds/pps/blob/main/pps1_06%20seguridad_lenguajes.md
200  https://owasp.org/Top10/A01_2021-Broken_Access_Control/
200  https://www.cisa.gov/sbom
```

</details>

**🔧 Herramienta `Bash`**

```json
{
  "command": "cd \"<HOME>/Documents/PuestaEnProduccion/Ut1/pps-main\" && git branch -a && git log -1 --format='%h %ad' --date=short; curl -s -o /dev/null -w '%{http_code}\\n' https://github.com/msolds/pps; curl -s -o /dev/null -w '%{http_code}\\n' \"https://github.com/msolds/pps/blob/master/pps1_06%20seguridad_lenguajes.md\"",
  "description": "Check notes repo branch and public availability"
}
```

<details><summary>Resultado de herramienta</summary>

```
* main
  remotes/origin/HEAD -> origin/main
  remotes/origin/main
741ab75 2026-10-13
404
404
Shell cwd was reset to <HOME>\Documents\PuestaEnProduccion\Ut1\trabajo
```

</details>

**🔧 Herramienta `Bash`**

```json
{
  "command": "cd \"<HOME>/Documents/PuestaEnProduccion/Ut1/trabajo\" && sed -i \\\n -e 's#<li>Apuntes de la unidad: <a href=\"https://github.com/msolds/pps/blob/main/pps1_06%20seguridad_lenguajes.md\">pps1_06 seguridad_lenguajes.md</a>, §1, §4.1, §6 y §8.</li>#<li>Apuntes de la unidad PPS 1: <code>pps1_06 seguridad_lenguajes.md</code> (repositorio de apuntes de la profesora, de acceso restringido; versión del 13/10/2026, commit <code>741ab75</code>). Secciones usadas: §1, §4.1, §6.1–6.3, §8 y conclusión.</li>#' \\\n -e 's#<a href=\"evidencias/fuentes.md\">#<a href=\"https://github.com/USUARIO/REPO/blob/main/evidencias/fuentes.md\">#' \\\n -e 's#<a href=\"PROCESO.md\">#<a href=\"https://github.com/USUARIO/REPO/blob/main/PROCESO.md\">#' \\\n -e 's#<a href=\"conversaciones-ia/\">#<a href=\"https://github.com/USUARIO/REPO/tree/main/conversaciones-ia\">#' \\\n -e 's#<a href=\"README.md\">README del repositorio</a>#<a href=\"https://github.com/USUARIO/REPO\">Repositorio en GitHub</a>#' index.html && grep -n 'USUARIO/REPO\\|741ab75' index.html",
  "description": "Replace private notes link and point doc links to GitHub"
}
```

<details><summary>Resultado de herramienta</summary>

```
273:        <p>Las afirmaciones de esta guía se han contrastado con estas fuentes. El detalle de qué respalda cada una está en <a href="https://github.com/USUARIO/REPO/blob/main/evidencias/fuentes.md">evidencias/fuentes.md</a>.</p>
276:          <li>Apuntes de la unidad PPS 1: <code>pps1_06 seguridad_lenguajes.md</code> (repositorio de apuntes de la profesora, de acceso restringido; versión del 13/10/2026, commit <code>741ab75</code>). Secciones usadas: §1, §4.1, §6.1–6.3, §8 y conclusión.</li>
291:        <p class="ayuda">Esta web se ha elaborado con ayuda de IA (Claude Code). El proceso, los prompts y las verificaciones están documentados en <a href="https://github.com/USUARIO/REPO/blob/main/PROCESO.md">PROCESO.md</a> y las conversaciones originales en <a href="https://github.com/USUARIO/REPO/tree/main/conversaciones-ia">conversaciones-ia/</a>.</p>
298:      <p>Grupo 5 · PPS · Tema: Desarrollo seguro · <a href="https://github.com/USUARIO/REPO">Repositorio en GitHub</a></p>
```

</details>

## 🤖 Claude · 2026-10-26 16:45:36 UTC

Ahora escribo la skill propia y, antes de probarla, dejo anotado el resultado esperado.

**🔧 Herramienta `Write`**

~~~~json
{
  "file_path": "<HOME>\\Documents\\PuestaEnProduccion\\Ut1\\trabajo\\skills\\revision-entradas-salidas\\SKILL.md",
  "content": "---\nname: revision-entradas-salidas\ndescription: Revisa un fragmento corto de código (Python, JavaScript, Java o PHP) buscando datos no confiables que llegan sin control a un destino peligroso (SQL, HTML, comandos del sistema, eval, rutas de archivo, deserialización) y explica, con fines didácticos, si falta validación de entrada o codificación de salida y cómo corregirlo. Úsala cuando un estudiante pida \"¿es seguro este código?\", \"revisa esta entrada de usuario\" o \"¿hay inyección/XSS aquí?\".\nversion: 1.0\n---\n\n# Revisión de entradas y salidas (desarrollo seguro)\n\n## Propósito\n\nAyudar a un estudiante a **localizar y entender** los fallos de tratamiento de datos no confiables en un fragmento de código corto (hasta unas 80 líneas) y a corregirlos, aplicando las ideas de la sección 8.2 de los apuntes de PPS (validación de entradas frente a codificación de salidas) y la regla \"los datos deben permanecer como datos\" (§4.1).\n\n**Dentro del alcance**\n\n- Flujos *fuente → destino* donde la fuente es no confiable (parámetros HTTP, formularios, cabeceras, cookies, ficheros subidos, `input()`, argumentos de línea de comandos, respuestas de APIs externas, datos leídos de la base de datos que en origen escribió un usuario).\n- Destinos peligrosos: consultas SQL, HTML/JavaScript del navegador, comandos del sistema, `eval`/`exec`, rutas de archivo, deserializadores, URLs que el servidor visita (SSRF).\n- Ausencia de límites de tamaño en entradas (riesgo de denegación de servicio, §8.8).\n\n**Fuera del alcance** (si se detecta, se menciona en \"Observaciones fuera de alcance\", sin desarrollarlo):\n\n- Auditorías completas de una aplicación o de un repositorio.\n- Errores de memoria en C/C++ (desbordamientos, *use-after-free*).\n- Criptografía, gestión de secretos, autorización y configuración de despliegue.\n- Escribir *exploits* o cargas de ataque funcionales contra sistemas reales.\n\n## Condiciones de uso\n\n**Entrada necesaria**\n\n1. El fragmento de código, completo y sin recortar a mitad de función.\n2. El lenguaje y, si lo hay, el framework (Flask, Express, Spring, Laravel…).\n3. Opcional: de dónde vienen los datos si no se ve en el código.\n\n**Limitaciones**\n\n- La revisión es **estática** y sobre un fragmento: no ve el resto de la aplicación (puede haber validaciones en otra capa). Indica siempre esta limitación.\n- No ejecutes el código ni pidas permisos para hacerlo.\n- Si falta información imprescindible (por ejemplo, no se sabe si una variable viene del usuario), **pregúntalo o márcalo como supuesto**; no lo inventes.\n- Si el fragmento contiene secretos reales (claves, contraseñas), avisa y no los repitas en la respuesta.\n\n## Instrucciones\n\nSigue estos pasos en orden:\n\n1. **Identifica las fuentes no confiables.** Lista cada variable que recibe datos de fuera, con su línea.\n2. **Sigue cada dato hasta sus destinos.** Para cada fuente, indica a qué destino llega (SQL, HTML, comando, `eval`, ruta, deserializador, URL) y si pasa antes por alguna validación o codificación.\n3. **Clasifica el problema** de cada flujo con exactamente una de estas etiquetas:\n   - `FALTA CODIFICACIÓN/PARAMETRIZACIÓN`: el dato se inserta en un lenguaje de destino (SQL, HTML, shell) como si fuera código.\n   - `FALTA VALIDACIÓN`: se acepta un valor sin comprobar tipo, longitud, rango o formato y eso tiene consecuencias (lógica, DoS).\n   - `DATO CONVERTIDO EN CÓDIGO`: `eval`, `exec`, deserialización insegura o similar.\n   - `CORRECTO`: el flujo ya está protegido (dilo también, para reforzar lo que está bien).\n4. **Asigna una gravedad** (Alta / Media / Baja) con una frase de por qué. Alta: el atacante controla código o consultas. Media: necesita condiciones extra o el impacto es limitado. Baja: endurecimiento.\n5. **Propón la corrección mínima** en el mismo lenguaje, mostrando sólo las líneas que cambian. Prioriza mecanismos del propio lenguaje o framework (consultas parametrizadas, plantillas con autoescape, `textContent`, `subprocess` con lista de argumentos y lista blanca) frente a filtros caseros con listas negras.\n6. **Explica la diferencia validación/codificación** en una o dos frases aplicadas a *este* código, no en abstracto.\n7. **Relaciona con el SSDLC**: indica en qué fase se debería haber detectado (implementación, verificación con SAST/DAST) y qué prueba de regresión añadirías.\n8. **Añade \"Observaciones fuera de alcance\"** si has visto algo fuera del alcance (por ejemplo, contraseñas con SHA-256), en una línea cada una.\n9. **Cierra con la limitación**: \"Revisión estática de un fragmento; puede haber controles en otras partes del código.\"\n\n### Formato de salida\n\n```markdown\n## Resumen\n<1–2 frases: cuántos flujos, cuántos problemas, el más grave>\n\n## Flujos analizados\n| # | Fuente (línea) | Destino (línea) | Etiqueta | Gravedad |\n|---|---|---|---|---|\n\n## Detalle y corrección\n### Flujo 1: <título>\n- **Qué pasa:** …\n- **Por qué es un problema:** …\n- **Corrección:** (bloque de código)\n- **Validación vs. codificación aquí:** …\n\n## SSDLC y pruebas\n- Fase donde detectarlo: …\n- Prueba de regresión sugerida: …\n\n## Observaciones fuera de alcance\n- …\n\n## Limitación\nRevisión estática de un fragmento; puede haber controles en otras partes del código.\n```\n\n## Ejemplo\n\n**Entrada**\n\n```javascript\n// Express\napp.get(\"/saludo\", (req, res) => {\n  const nombre = req.query.nombre;\n  res.send(\"<p>Hola, \" + nombre + \"</p>\");\n});\n```\n\n**Resultado esperado (resumido)**\n\n## Resumen\nUn flujo analizado con un problema de gravedad alta: XSS reflejado.\n\n## Flujos analizados\n| # | Fuente (línea) | Destino (línea) | Etiqueta | Gravedad |\n|---|---|---|---|---|\n| 1 | `req.query.nombre` (3) | HTML de la respuesta (4) | FALTA CODIFICACIÓN/PARAMETRIZACIÓN | Alta |\n\n## Detalle y corrección\n### Flujo 1: nombre insertado en HTML\n- **Qué pasa:** el parámetro de la URL se concatena dentro del HTML.\n- **Por qué es un problema:** `?nombre=<img src=x onerror=...>` haría que el navegador ejecutase JavaScript del atacante en la sesión de la víctima.\n- **Corrección:**\n  ```javascript\n  const escapar = (t) => String(t).replace(/[&<>\"']/g, (c) =>\n    ({ \"&\": \"&amp;\", \"<\": \"&lt;\", \">\": \"&gt;\", '\"': \"&quot;\", \"'\": \"&#39;\" })[c]);\n  res.send(\"<p>Hola, \" + escapar(nombre ?? \"\") + \"</p>\");\n  ```\n  (Mejor aún: usar un motor de plantillas con autoescape.)\n- **Validación vs. codificación aquí:** podríamos validar que `nombre` tenga como máximo 50 letras, pero lo que realmente evita el XSS es codificarlo al insertarlo en HTML.\n\n## SSDLC y pruebas\n- Fase: implementación (revisión de código) y verificación (SAST detecta concatenación en `res.send`; DAST con una carga de XSS).\n- Regresión: test que pida `/saludo?nombre=<b>x</b>` y compruebe que la respuesta contiene `&lt;b&gt;`.\n\n## Limitación\nRevisión estática de un fragmento; puede haber controles en otras partes del código.\n\n## Criterios de calidad\n\nUn resultado es **correcto** si:\n\n- [ ] Encuentra **todas** las fuentes no confiables del fragmento y no inventa fuentes que no existen.\n- [ ] Cada flujo tiene fuente, destino, una única etiqueta y una gravedad justificada.\n- [ ] Las correcciones usan mecanismos estándar (consultas parametrizadas, autoescape, `textContent`, listas blancas) y **compilan o se ejecutan** en el lenguaje indicado.\n- [ ] Distingue explícitamente validación y codificación **aplicadas a ese código**.\n- [ ] Respeta el alcance: lo que queda fuera aparece sólo en \"Observaciones fuera de alcance\".\n- [ ] No incluye cargas de ataque más allá de un ejemplo mínimo e inofensivo para entender el fallo.\n- [ ] Termina con la limitación de revisión estática.\n\n**Debe revisarse por una persona** cuando:\n\n- La gravedad es Alta (confirmar con los apuntes o con OWASP antes de darla por buena).\n- La corrección propone una biblioteca o función que el estudiante no conoce: comprobar en la documentación oficial que existe y hace lo que se dice.\n- El fragmento usa un framework con protecciones automáticas (por ejemplo, plantillas Jinja2 o React escapan por defecto): verificar que la IA no ha marcado como vulnerable algo que ya está protegido, ni al revés.\n- La respuesta no menciona ningún problema en un código que maneja entradas: puede ser correcto, pero conviene una segunda revisión.\n\n## Referencias\n\n- Apuntes PPS 1, `pps1_06 seguridad_lenguajes.md`, §4.1, §6.1, §8.2, §8.5, §8.8.\n- OWASP Input Validation Cheat Sheet: https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html\n- OWASP Cross Site Scripting Prevention Cheat Sheet: https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html\n- OWASP Query Parameterization Cheat Sheet: https://cheatsheetseries.owasp.org/cheatsheets/Query_Parameterization_Cheat_Sheet.html\n"
}
~~~~

<details><summary>Resultado de herramienta</summary>

```
File created successfully at: <HOME>\Documents\PuestaEnProduccion\Ut1\trabajo\skills\revision-entradas-salidas\SKILL.md (file state is current in your context — no need to Read it back)
```

</details>

**🔧 Herramienta `Write`**

```json
{
  "file_path": "<HOME>\\Documents\\PuestaEnProduccion\\Ut1\\trabajo\\evidencias\\prueba-skill\\entrada.py",
  "content": "# Fragmento de prueba para la skill \"revision-entradas-salidas\".\n# Código deliberadamente vulnerable con fines didácticos: NO desplegar.\nfrom flask import Flask, request\nimport sqlite3\nimport hashlib\nimport subprocess\n\napp = Flask(__name__)\n\<email>(\"/buscar\")\ndef buscar():\n    nombre = request.args.get(\"nombre\", \"\")\n    con = sqlite3.connect(\"tienda.db\")\n    filas = con.execute(\n        f\"SELECT nombre, precio FROM productos WHERE nombre LIKE '%{nombre}%'\"\n    ).fetchall()\n    html = \"<h1>Resultados para \" + nombre + \"</h1><ul>\"\n    for producto, precio in filas:\n        html += f\"<li>{producto}: {precio} €</li>\"\n    return html + \"</ul>\"\n\<email>(\"/producto/<int:id_producto>\")\ndef producto(id_producto):\n    con = sqlite3.connect(\"tienda.db\")\n    fila = con.execute(\n        \"SELECT nombre, precio FROM productos WHERE id = ?\", (id_producto,)\n    ).fetchone()\n    return {\"nombre\": fila[0], \"precio\": fila[1]} if fila else ({\"error\": \"no existe\"}, 404)\n\<email>(\"/ping\")\ndef ping():\n    host = request.args.get(\"host\", \"\")\n    salida = subprocess.run(\"ping -c 1 \" + host, shell=True, capture_output=True, text=True)\n    return \"<pre>\" + salida.stdout + \"</pre>\"\n\<email>(\"/registro\", methods=[\"POST\"])\ndef registro():\n    usuario = request.form[\"usuario\"]\n    clave = request.form[\"clave\"]\n    hash_clave = hashlib.sha256(clave.encode()).hexdigest()\n    con = sqlite3.connect(\"tienda.db\")\n    con.execute(\"INSERT INTO usuarios (usuario, hash) VALUES (?, ?)\", (usuario, hash_clave))\n    con.commit()\n    return \"Usuario creado\"\n"
}
```

<details><summary>Resultado de herramienta</summary>

```
File created successfully at: <HOME>\Documents\PuestaEnProduccion\Ut1\trabajo\evidencias\prueba-skill\entrada.py (file state is current in your context — no need to Read it back)
```

</details>

**🔧 Herramienta `Write`**

```json
{
  "file_path": "<HOME>\\Documents\\PuestaEnProduccion\\Ut1\\trabajo\\evidencias\\prueba-skill-propia.md",
  "content": "# Prueba de la skill propia: `revision-entradas-salidas`\n\nSkill probada: [`skills/revision-entradas-salidas/SKILL.md`](../skills/revision-entradas-salidas/SKILL.md) (versión 1.0 en la primera prueba).\n\n## 1. Entrada utilizada\n\nFichero [`prueba-skill/entrada.py`](prueba-skill/entrada.py): una aplicación Flask de 44 líneas, vulnerable a propósito, con cuatro rutas. Mezcla flujos vulnerables con flujos **ya correctos**, para comprobar que la skill no marca todo como fallo.\n\nPrompt enviado (en una conversación nueva, distinta de la de creación):\n\n> Usa la skill `revision-entradas-salidas` (te paso su SKILL.md) para revisar este código. Lenguaje: Python con Flask. Los datos de la tabla `productos` los pueden escribir los vendedores desde un panel web. [contenido de `entrada.py`]\n\n## 2. Resultado esperado (definido ANTES de la prueba)\n\nLo redactamos antes de lanzar la prueba para no dejarnos influir por la respuesta de la IA.\n\n| # | Fuente (línea) | Destino (línea) | Etiqueta esperada | Gravedad esperada |\n|---|---|---|---|---|\n| E1 | `nombre` (12) | SQL con f-string (15) | FALTA CODIFICACIÓN/PARAMETRIZACIÓN | Alta |\n| E2 | `nombre` (12) | HTML (17) | FALTA CODIFICACIÓN/PARAMETRIZACIÓN (XSS reflejado) | Alta |\n| E3 | `producto` de la BD, escrito por vendedores (18) | HTML (19) | FALTA CODIFICACIÓN (XSS almacenado) | Media o Alta |\n| E4 | `id_producto` (23) | SQL parametrizado (26) | CORRECTO | — |\n| E5 | `host` (32) | comando con `shell=True` (33) | FALTA CODIFICACIÓN/PARAMETRIZACIÓN (inyección de comandos) | Alta |\n| E6 | `salida.stdout` (33) | HTML (34) | FALTA CODIFICACIÓN | Baja o Media |\n| E7 | `usuario` (38) | SQL parametrizado (42) | CORRECTO (como mucho, FALTA VALIDACIÓN de longitud, Baja) | — / Baja |\n\nAdemás esperamos que:\n\n- **Correcciones:** consulta parametrizada con `?` y `f\"%{nombre}%\"` como parámetro; `markupsafe.escape()` o `render_template` con autoescape; `subprocess.run([\"ping\", \"-c\", \"1\", host])` sin `shell=True` **y** validación del `host` con una lista blanca o una expresión regular.\n- **Límites:** mencione que no hay límite de longitud en `nombre`/`host` (riesgo de DoS, Baja).\n- **Fuera de alcance:** el uso de SHA-256 para contraseñas (línea 40) aparezca **sólo** en \"Observaciones fuera de alcance\", recomendando Argon2id/bcrypt/scrypt.\n- **Formato:** respete las secciones del formato de salida y termine con la frase de limitación.\n- **Sin extras peligrosos:** no incluya cargas de ataque elaboradas.\n\n## 3. Resultado obtenido\n\n_Pendiente: se completa tras ejecutar la prueba._\n\n## 4. Comparación\n\n_Pendiente._\n\n## 5. Errores, limitaciones y mejoras\n\n_Pendiente._\n\n## 6. Conversación de origen\n\n_Pendiente._\n"
}
```

<details><summary>Resultado de herramienta</summary>

```
File created successfully at: <HOME>\Documents\PuestaEnProduccion\Ut1\trabajo\evidencias\prueba-skill-propia.md (file state is current in your context — no need to Read it back)
```

</details>

**🔧 Herramienta `Bash`**

```json
{
  "command": "cd \"<HOME>/AppData/Local/Temp/claude/<carpeta-de-proyecto>/75fcebbd-e713-46f3-8f12-2de71489e93c/scratchpad/skillpub\" && mkdir -p references && for f in lang-javascript crypto-apis config-patterns; do curl -sSL -o references/$f.md \"https://raw.githubusercontent.com/trailofbits/skills/main/plugins/sharp-edges/skills/sharp-edges/references/$f.md\"; done; wc -l references/*; head -5 references/lang-javascript.md; grep -n -i \"pbkdf2\\|iteration\" references/crypto-apis.md | head",
  "description": "Download skill reference markdown files"
}
```

<details><summary>Resultado de herramienta</summary>

~~~~
333 references/config-patterns.md
  190 references/crypto-apis.md
  269 references/lang-javascript.md
  792 total
# JavaScript / TypeScript Sharp Edges

## Loose Equality Coercion

```javascript
Shell cwd was reset to <HOME>\Documents\PuestaEnProduccion\Ut1\trabajo
~~~~

</details>

**🔧 Herramienta `Agent`**

```json
{
  "description": "Probar skill propia en contexto nuevo",
  "subagent_type": "general-purpose",
  "prompt": "Usa la skill `revision-entradas-salidas` para revisar el código que te paso. Lenguaje: Python con Flask. Los datos de la tabla `productos` los pueden escribir los vendedores desde un panel web.\n\nLee las instrucciones de la skill en este fichero (léelo entero y síguelo al pie de la letra): <HOME>\\Documents\\PuestaEnProduccion\\Ut1\\trabajo\\skills\\revision-entradas-salidas\\SKILL.md\n\nEl código a revisar está en: <HOME>\\Documents\\PuestaEnProduccion\\Ut1\\trabajo\\evidencias\\prueba-skill\\entrada.py\n\nReglas para esta prueba: lee SÓLO esos dos ficheros (no abras ningún otro fichero del directorio ni de sus carpetas), no ejecutes el código ni ningún comando. Devuelve como respuesta final únicamente el informe en Markdown con el formato de salida que define la skill, en español."
}
```

**🔧 Herramienta `Agent`**

```json
{
  "description": "Aplicar skill pública sharp-edges",
  "subagent_type": "general-purpose",
  "prompt": "Aplica la skill pública \"sharp-edges\" de Trail of Bits (https://github.com/trailofbits/skills, licencia CC-BY-SA-4.0) al fichero JavaScript de una web didáctica.\n\nInstrucciones de la skill (léelas enteras y síguelas, incluidas las 4 fases del \"Analysis Workflow\", la clasificación de gravedad y la \"Quality Checklist\"):\n<HOME>\\AppData\\Local\\Temp\\claude\\<carpeta-de-proyecto>\\75fcebbd-e713-46f3-8f12-2de71489e93c\\scratchpad\\skillpub\\SKILL.md\nReferencias de la skill descargadas (consúltalas si lo necesitas): en la carpeta references/ junto a ese SKILL.md (lang-javascript.md, crypto-apis.md, config-patterns.md). Las demás referencias no se han descargado; si te harían falta, dilo.\n\nFichero a analizar: <HOME>\\Documents\\PuestaEnProduccion\\Ut1\\trabajo\\js\\demo.js\nContexto: es la demo de una web estática educativa (GitHub Pages) sobre desarrollo seguro. Contiene: validación con lista blanca de un usuario y una edad, una función escaparHTML, un análisis con DOMParser de qué HTML se crearía, un iframe sandbox con srcdoc para mostrar la versión insegura, y una comparación SHA-256 vs PBKDF2 (600000 iteraciones) con Web Crypto. Las funciones se exportan para probarlas con Node. Puedes mirar también index.html en la misma carpeta superior para ver el iframe.\n\nRespeta los allowed-tools de la skill: sólo leer (Read, Grep, Glob). No ejecutes nada ni modifiques ningún fichero.\n\nDevuelve, en español: (1) superficie identificada (puntos de elección/API/configuración), (2) cada \"sharp edge\" encontrado con categoría de la skill, línea, gravedad según la tabla de la skill, escenario de mal uso y corrección propuesta, (3) la Quality Checklist marcada indicando qué puntos aplican o no aplican a este fichero, (4) qué partes de la skill no encajan con este tipo de código."
}
```

<details><summary>Resultado de herramienta</summary>

```
Async agent launched successfully. (This tool result is internal metadata — never quote or paste any part of it, including the agentId below, into a user-facing reply.)
agentId: a5b8ac828fa86d89c (internal ID - do not mention to user. Use SendMessage with to: 'a5b8ac828fa86d89c', summary: '<5-10 word recap>' to continue this agent.)
The agent is working in the background. You will be notified automatically when it completes. You know nothing about its results until that notification arrives — do not report, assume, or predict them; continue other work or respond to the user in the meantime.
Do not duplicate this agent's work — avoid working with the same files or topics it is using.
output_file: <HOME>\AppData\Local\Temp\claude\<carpeta-de-proyecto>\75fcebbd-e713-46f3-8f12-2de71489e93c\tasks\a5b8ac828fa86d89c.output
Do NOT Read or tail this file via the shell tool — it is the full subagent JSONL transcript and reading it will overflow your context. If the user asks for progress, say the agent is still running; you'll get a completion notification.
```

</details>

<details><summary>Resultado de herramienta</summary>

```
Async agent launched successfully. (This tool result is internal metadata — never quote or paste any part of it, including the agentId below, into a user-facing reply.)
agentId: a3ce08b14cd30ec00 (internal ID - do not mention to user. Use SendMessage with to: 'a3ce08b14cd30ec00', summary: '<5-10 word recap>' to continue this agent.)
The agent is working in the background. You will be notified automatically when it completes. You know nothing about its results until that notification arrives — do not report, assume, or predict them; continue other work or respond to the user in the meantime.
Do not duplicate this agent's work — avoid working with the same files or topics it is using.
output_file: <HOME>\AppData\Local\Temp\claude\<carpeta-de-proyecto>\75fcebbd-e713-46f3-8f12-2de71489e93c\tasks\a3ce08b14cd30ec00.output
Do NOT Read or tail this file via the shell tool — it is the full subagent JSONL transcript and reading it will overflow your context. If the user asks for progress, say the agent is still running; you'll get a completion notification.
```

</details>

## 🤖 Claude · 2026-10-26 16:47:21 UTC

Mientras se ejecutan las dos pruebas de skills, que van en conversaciones separadas, preparo el exportador de conversaciones. Se encargará de anonimizar las rutas y los datos personales.

**🔧 Herramienta `Write`**

~~~~json
{
  "file_path": "<HOME>\\AppData\\Local\\Temp\\claude\\<carpeta-de-proyecto>\\75fcebbd-e713-46f3-8f12-2de71489e93c\\scratchpad\\exportar.js",
  "content": "// Convierte un transcript .jsonl de Claude Code en Markdown y anonimiza datos personales.\n// Uso: node exportar.js <entrada.jsonl> <salida.md> \"<título>\"\nconst fs = require(\"fs\");\nconst [, , entrada, salida, titulo] = process.argv;\n\nconst MAX_RESULTADO = 4000;\n\nfunction anonimizar(t) {\n  return String(t)\n    .replace(/daniel\\.<dato-personal>@<dato-personal>\\.com/gi, \"<email>\")\n    .replace(/<dato-personal>/gi, \"<organización>\")\n    .replace(/<dato-personal>/gi, \"<apellido>\")\n    .replace(/C:[\\\\/]+Users[\\\\/]+DANIEL~1\\.2/gi, \"<HOME>\")\n    .replace(/C:[\\\\/]+Users[\\\\/]+daniel\\.<dato-personal>\\.2/gi, \"<HOME>\")\n    .replace(/\\/c\\/Users\\/daniel\\.<dato-personal>\\.2/gi, \"<HOME>\")\n    .replace(/<carpeta-de-proyecto>/gi, \"<HOME-codificado>\")\n    .replace(/daniel[.-]<dato-personal>[.-]2/gi, \"<usuario>\")\n    .replace(/DANIEL~1\\.2/gi, \"<usuario>\");\n}\n\nfunction quitarRecordatorios(t) {\n  return t.replace(/<system-reminder>[\\s\\S]*?<\\/system-reminder>/g, \"\").trim();\n}\n\nfunction bloque(texto, lenguaje = \"\") {\n  const t = String(texto);\n  const valla = t.includes(\"```\") ? \"~~~~\" : \"```\";\n  return `${valla}${lenguaje}\\n${t}\\n${valla}`;\n}\n\nfunction textoResultado(c) {\n  if (typeof c === \"string\") return c;\n  if (Array.isArray(c)) {\n    return c.map((p) => (p.type === \"text\" ? p.text : p.type === \"image\" ? \"[imagen adjunta: captura de pantalla]\" : `[${p.type}]`)).join(\"\\n\");\n  }\n  return JSON.stringify(c);\n}\n\nfunction recortar(t) {\n  return t.length > MAX_RESULTADO\n    ? t.slice(0, MAX_RESULTADO) + `\\n… [salida recortada: ${t.length - MAX_RESULTADO} caracteres más]`\n    : t;\n}\n\nconst lineas = fs.readFileSync(entrada, \"utf8\").split(\"\\n\").filter(Boolean).map((l) => JSON.parse(l));\nconst partes = [`# ${titulo}`, \"\",\n  `> Exportado automáticamente del historial local de Claude Code (${lineas.length} eventos).`,\n  \"> Se han anonimizado rutas locales, nombre de usuario y correo. Se omiten los recordatorios internos del sistema\",\n  \"> y el razonamiento interno del modelo. Las salidas de herramientas de más de \" + MAX_RESULTADO + \" caracteres se recortan.\", \"\"];\n\nfor (const ev of lineas) {\n  if (ev.type !== \"user\" && ev.type !== \"assistant\") continue;\n  const contenido = ev.message?.content;\n  const hora = ev.timestamp ? ev.timestamp.replace(\"T\", \" \").slice(0, 19) + \" UTC\" : \"\";\n\n  if (ev.type === \"user\") {\n    if (typeof contenido === \"string\") {\n      const t = quitarRecordatorios(contenido);\n      if (t) partes.push(`## 👤 Usuario · ${hora}`, \"\", t, \"\");\n      continue;\n    }\n    for (const p of contenido || []) {\n      if (p.type === \"text\") {\n        const t = quitarRecordatorios(p.text);\n        if (t) partes.push(`## 👤 Usuario · ${hora}`, \"\", t, \"\");\n      } else if (p.type === \"tool_result\") {\n        const t = quitarRecordatorios(textoResultado(p.content));\n        partes.push(`<details><summary>Resultado de herramienta${p.is_error ? \" (error)\" : \"\"}</summary>`, \"\", bloque(recortar(t)), \"\", \"</details>\", \"\");\n      }\n    }\n  } else {\n    for (const p of contenido || []) {\n      if (p.type === \"text\" && p.text.trim()) {\n        partes.push(`## 🤖 Claude · ${hora}`, \"\", p.text, \"\");\n      } else if (p.type === \"tool_use\") {\n        const entradaHerr = { ...p.input };\n        partes.push(`**🔧 Herramienta \\`${p.name}\\`**`, \"\", bloque(JSON.stringify(entradaHerr, null, 2), \"json\"), \"\");\n      }\n    }\n  }\n}\n\nfs.writeFileSync(salida, anonimizar(partes.join(\"\\n\")));\nconsole.log(`Escrito ${salida}`);\n"
}
~~~~

<details><summary>Resultado de herramienta</summary>

```
File created successfully at: <HOME>\AppData\Local\Temp\claude\<carpeta-de-proyecto>\75fcebbd-e713-46f3-8f12-2de71489e93c\scratchpad\exportar.js (file state is current in your context — no need to Read it back)
```

</details>

**🔧 Herramienta `Write`**

```json
{
  "file_path": "<HOME>\\Documents\\PuestaEnProduccion\\Ut1\\trabajo\\evidencias\\fuentes.md",
  "content": "# Fuentes\n\nPara cada fuente se indica qué parte del trabajo respalda. Todos los enlaces se comprobaron el 26/10/2026 (respuesta HTTP 200, salvo que se indique otra cosa).\n\n## Documentos de partida\n\n| Fuente | Enlace | Qué respalda |\n|---|---|---|\n| Apuntes PPS 1 · `pps1_06 seguridad_lenguajes.md` (versión del 13/10/2026, commit `741ab75`) | Repositorio de apuntes de la profesora. **No es público**: el enlace de GitHub devuelve 404 sin iniciar sesión, por eso en la web no se enlaza. | Toda la estructura del tema. §1 (defensa en profundidad), idea 1. §4.1 (regla \"los datos deben permanecer como datos\", listas blancas), idea 3 y demo 2. §6.1 (mínimo privilegio, SQLi, XSS, autorización en APIs), ideas 2–4. §6.2 (Argon2id/bcrypt/scrypt, sal, no SHA-256), idea 6 y demo 3. §6.3 (ASLR, NX/DEP, *stack canaries*; no eliminan la vulnerabilidad), idea 7. §8.1–8.9 (modelado de amenazas, validación frente a codificación, autenticación/autorización/sesiones, cadena de suministro, SAST/DAST/fuzzing/sanitizadores, secretos y errores, criptografía, DoS, SSDLC), ideas 1–7, glosario y diagrama SSDLC. |\n| Enunciado de la tarea grupal | Proporcionado por la profesora | Requisitos de la web, PROCESO.md, skills y estructura del repositorio. |\n\n## Fuentes adicionales\n\n| Fuente | Enlace | Qué respalda |\n|---|---|---|\n| OWASP · Password Storage Cheat Sheet | https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html | Demo 3 e idea 6: parámetros mínimos (Argon2id m=19 MiB, t=2, p=1; scrypt N=2^17; bcrypt coste ≥10 y límite de 72 bytes; **PBKDF2-HMAC-SHA256 con 600 000 iteraciones**); sal única por contraseña; \"los algoritmos de hash rápidos como SHA-256 no son adecuados para almacenar contraseñas\". También confirma que PBKDF2 es la opción cuando se necesita FIPS-140, lo que justifica usarla en la demo como sustituta de Argon2id. |\n| OWASP · Input Validation Cheat Sheet | https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html | Demo 1 e idea 3: validación por lista blanca preferible a lista negra; la validación del cliente no sustituye a la del servidor. |\n| OWASP · Cross Site Scripting Prevention Cheat Sheet | https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html | Demo 2 e idea 3: codificación contextual de salida, uso de `textContent` como *sink* seguro, caracteres que hay que codificar en HTML. |\n| OWASP · Threat Modeling Cheat Sheet | https://cheatsheetseries.owasp.org/cheatsheets/Threat_Modeling_Cheat_Sheet.html | Idea 2: preguntas del modelado de amenazas (qué construimos, qué puede salir mal, qué hacemos al respecto). |\n| OWASP · Secrets Management Cheat Sheet | https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html | Idea 5: secretos fuera del código, rotación y control de acceso. |\n| OWASP · Top 10 2021 · A01 Broken Access Control | https://owasp.org/Top10/A01_2021-Broken_Access_Control/ | Idea 4: ejemplo de modificar el identificador en la URL para acceder a recursos de otro usuario. |\n| OWASP · Query Parameterization Cheat Sheet | https://cheatsheetseries.owasp.org/cheatsheets/Query_Parameterization_Cheat_Sheet.html | Skill propia: corrección de inyección SQL con consultas parametrizadas. |\n| NIST · SP 800-218 Secure Software Development Framework (SSDF) | https://csrc.nist.gov/pubs/sp/800/218/final | Idea 1 y diagrama SSDLC: integrar prácticas de seguridad en todo el ciclo de desarrollo. |\n| CISA · Software Bill of Materials (SBOM) | https://www.cisa.gov/sbom | Idea 5 y glosario: definición de SBOM como inventario de componentes. |\n| Clang · AddressSanitizer | https://clang.llvm.org/docs/AddressSanitizer.html | Idea 7 y glosario: qué es un sanitizador y qué errores de memoria detecta. |\n| MDN · Node.textContent | https://developer.mozilla.org/es/docs/Web/API/Node/textContent | Demo 2: `textContent` no interpreta HTML (frente a `innerHTML`). |\n| MDN · SubtleCrypto.deriveBits() | https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/deriveBits | Demo 3: uso de PBKDF2 desde la Web Crypto API del navegador. |\n| FIPS 180-2 (vector de prueba SHA-256 de \"abc\") y RFC 7914 §11 (vector de prueba PBKDF2-HMAC-SHA256) | https://www.rfc-editor.org/rfc/rfc7914#section-11 | Verificación de la demo 3: las funciones `sha256` y `pbkdf2` de `js/demo.js` se comprobaron contra estos valores conocidos (`tests/demo.test.js`). |\n| Trail of Bits · skill `sharp-edges` | https://github.com/trailofbits/skills/tree/main/plugins/sharp-edges/skills/sharp-edges | Skill pública analizada en [skill-publica.md](skill-publica.md). |\n\n## Afirmaciones con limitaciones\n\n- **Tiempos de la demo 3:** dependen del equipo y del navegador. Lo que la web afirma es la **proporción** entre SHA-256 y PBKDF2, no los valores absolutos.\n- **PBKDF2 en lugar de Argon2id:** los apuntes y OWASP prefieren Argon2id. La demo usa PBKDF2 porque es la función lenta que el navegador trae de serie, y así se indica en la propia web.\n- **Contenido generado con IA:** los textos de la web los redactó Claude Code a partir de los apuntes. No se presentan como fuente: cada afirmación técnica se ha contrastado con los apuntes o con las fuentes de esta tabla (ver la fase 4 de [PROCESO.md](../PROCESO.md)).\n"
}
```

<details><summary>Resultado de herramienta</summary>

```
File created successfully at: <HOME>\Documents\PuestaEnProduccion\Ut1\trabajo\evidencias\fuentes.md (file state is current in your context — no need to Read it back)
```

</details>

**🔧 Herramienta `Bash`**

```json
{
  "command": "for u in https://cheatsheetseries.owasp.org/cheatsheets/Query_Parameterization_Cheat_Sheet.html \"https://www.rfc-editor.org/rfc/rfc7914#section-11\" https://github.com/trailofbits/skills/tree/main/plugins/sharp-edges/skills/sharp-edges; do printf \"%s %s\\n\" \"$(curl -s -o /dev/null -L -w '%{http_code}' -A 'Mozilla/5.0' \"$u\")\" \"$u\"; done; curl -s https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html | grep -o -i '.\\{80\\}textContent.\\{80\\}' | head -3; curl -s https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html | grep -o -i '.\\{60\\}allowlist.\\{100\\}' | head -3; curl -s https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html | grep -o -i '.\\{60\\}FIPS.\\{80\\}' | head -2",
  "description": "Verify remaining links and key claims in OWASP pages",
  "timeout": 120000
}
```

<details><summary>Resultado de herramienta</summary>

```
200 https://cheatsheetseries.owasp.org/cheatsheets/Query_Parameterization_Cheat_Sheet.html
200 https://www.rfc-editor.org/rfc/rfc7914#section-11
200 https://github.com/trailofbits/skills/tree/main/plugins/sharp-edges/skills/sharp-edges
assign it to the <a href="https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent"><code>textContent</code> property</a> of an ordinary element such as a <code>&
span><code><span class="nx">elem</span><span class="p">.</span><span class="nx">textContent</span><span class="w"> </span><span class="o">=</span><span class="w"> </span><
ut making a database query safe. For free-form comments, an allowlist can permit broad Unicode text while limiting its length; it need not restrict users to letters and 
4/sp800-63b.html#passwordver">NIST SP 800-63B-4</a> and has FIPS-140 validated implementations, it should be the preferred algorithm when these
```

</details>

**🔧 Herramienta `Write`**

```json
{
  "file_path": "<HOME>\\Documents\\PuestaEnProduccion\\Ut1\\trabajo\\README.md",
  "content": "# Grupo 5 · Desarrollo seguro\n\nTrabajo grupal de **Puesta en Producción Segura (PPS) · Unidad 1**: enseñar un tema de la unidad mediante una web pública, con ayuda de IA y documentando el proceso.\n\n- **Tema asignado:** Bloque 5, *Desarrollo seguro y mitigaciones* (`pps1_06 seguridad_lenguajes.md`, §8 más §6.2–6.3).\n- **Web publicada:** https://USUARIO.github.io/REPO/\n- **Repositorio:** https://github.com/USUARIO/REPO\n\n## Integrantes\n\n| Integrante | Rol principal (rotativo, ver [PROCESO.md](PROCESO.md#organización-del-equipo)) |\n|---|---|\n| Daniel B. | Web y publicación |\n| [Nombre A.] | Contenido |\n| [Nombre B.] | Verificación |\n\n## Contenido del repositorio\n\n| Ruta | Qué es |\n|---|---|\n| [`index.html`](index.html), [`css/`](css/), [`js/`](js/) | Web didáctica: introducción, 7 ideas clave, 3 demostraciones interactivas, diagrama SSDLC, glosario de 22 términos y fuentes. |\n| [`tests/demo.test.js`](tests/demo.test.js) | Pruebas automáticas de las funciones de la demo (`node --test tests/demo.test.js`). |\n| [`PROCESO.md`](PROCESO.md) | Registro del proceso por fases: objetivo, herramienta, prompt, resultado, decisión, justificación, verificación, participación y conversación de origen. |\n| [`conversaciones-ia/`](conversaciones-ia/) | Conversaciones originales con IA, exportadas completas y anonimizadas. |\n| [`evidencias/fuentes.md`](evidencias/fuentes.md) | Fuentes y qué afirmación respalda cada una. |\n| [`evidencias/skill-publica.md`](evidencias/skill-publica.md) | Análisis y aplicación de la skill pública `sharp-edges` (Trail of Bits). |\n| [`skills/revision-entradas-salidas/SKILL.md`](skills/revision-entradas-salidas/SKILL.md) | Skill propia: revisión didáctica de entradas no confiables y codificación de salidas. |\n| [`evidencias/prueba-skill-propia.md`](evidencias/prueba-skill-propia.md) | Prueba de la skill propia: resultado esperado, obtenido, comparación y mejoras. |\n\n## Ver la web en local\n\nAbre `index.html` en el navegador. No necesita servidor ni dependencias. La demo de contraseñas usa la Web Crypto API, disponible en HTTPS, en `localhost` y en ficheros locales en Chrome, Edge y Firefox.\n\n## Licencias\n\n- Textos y código propios: CC BY-SA 4.0. Se usa esta licencia por compatibilidad con la skill de Trail of Bits analizada, que también es CC BY-SA 4.0.\n- No se han usado imágenes externas. El icono y el diagrama están hechos con HTML, CSS y SVG propios.\n"
}
```

<details><summary>Resultado de herramienta</summary>

```
File created successfully at: <HOME>\Documents\PuestaEnProduccion\Ut1\trabajo\README.md (file state is current in your context — no need to Read it back)
```

</details>

**🔧 Herramienta `Bash`**

```json
{
  "command": "cd \"<HOME>/Documents/PuestaEnProduccion/Ut1/trabajo\" && sed -i -e 's/^| Daniel B. | Web y publicación |/| Daniel B. | [por asignar: Contenido \\/ Verificación \\/ Web] |/' -e 's/^| \\[Nombre A.\\] | Contenido |/| [Nombre A.] | [por asignar] |/' -e 's/^| \\[Nombre B.\\] | Verificación |/| [Nombre B.] | [por asignar] |/' README.md && grep -n \"Nombre\\|Daniel\" README.md",
  "description": "Make member roles placeholders"
}
```

<details><summary>Resultado de herramienta</summary>

```
13:| Daniel B. | [por asignar: Contenido / Verificación / Web] |
14:| [Nombre A.] | [por asignar] |
15:| [Nombre B.] | [por asignar] |
```

</details>

**🔧 Herramienta `Bash`**

```json
{
  "command": "S=\"<HOME>/AppData/Local/Temp/claude/<carpeta-de-proyecto>/75fcebbd-e713-46f3-8f12-2de71489e93c/scratchpad\"; P=~/.claude/projects/<proyecto> mkdir -p conversaciones-ia && node \"$S/exportar.js\" \"$P/80738edc-1cdc-4ce0-86df-5c16b81ffda9.jsonl\" conversaciones-ia/00-claude-code-plan-inicial.md \"Conversación 00 · Claude Code · Lectura del enunciado y plan inicial\" && wc -c conversaciones-ia/00-*.md && grep -n -i -E \"<dato-personal>|<dato-personal>|<dato-personal>|C:\\\\\\\\Users|/c/Users\" conversaciones-ia/00-*.md | head; grep -c \"## 👤\\|## 🤖\" conversaciones-ia/00-*.md; ls $P/75fcebbd-e713-46f3-8f12-2de71489e93c/ 2>/dev/null; ls $P/75fcebbd-e713-46f3-8f12-2de71489e93c/subagents 2>/dev/null",
  "description": "Export previous session and check anonymization"
}
```

<details><summary>Resultado de herramienta</summary>

```
Escrito conversaciones-ia/00-claude-code-plan-inicial.md
31687 conversaciones-ia/00-claude-code-plan-inicial.md
8
subagents
agent-a3ce08b14cd30ec00.jsonl
agent-a3ce08b14cd30ec00.meta.json
agent-a5b8ac828fa86d89c.jsonl
agent-a5b8ac828fa86d89c.meta.json
```

</details>

**🔧 Herramienta `Bash`**

```json
{
  "command": "cd \"<HOME>/Documents/PuestaEnProduccion/Ut1/trabajo\" && grep -n \"^## \\|^\\*\\*🔧\" conversaciones-ia/00-*.md | head -30; sed -n '1,12p' conversaciones-ia/00-*.md",
  "description": "Inspect structure of exported conversation 00"
}
```

<details><summary>Resultado de herramienta</summary>

```
7:## 👤 Usuario · 2026-10-26 16:33:02 UTC
11:## 👤 Usuario · 2026-10-26 16:33:02 UTC
17:## 👤 Usuario · 2026-10-26 16:33:02 UTC
21:## 👤 Usuario · 2026-10-26 16:33:07 UTC
25:## 👤 Usuario · 2026-10-26 16:33:07 UTC
31:## 👤 Usuario · 2026-10-26 16:33:07 UTC
35:## 👤 Usuario · 2026-10-26 16:33:46 UTC
393:## 🤖 Claude · 2026-10-26 16:34:28 UTC
397:## 1. Lo que piden en realidad
413:## 2. Una duda sobre el material
417:## 3. Alcance (Fase 1)
432:## 4. Demostración
440:## 5. Las dos skills
449:## 6. Estructura y reparto
465:## 7. Cómo puedo ayudar sin perjudicaros en la rúbrica
# Conversación 00 · Claude Code · Lectura del enunciado y plan inicial

> Exportado automáticamente del historial local de Claude Code (45 eventos).
> Se han anonimizado rutas locales, nombre de usuario y correo. Se omiten los recordatorios internos del sistema
> y el razonamiento interno del modelo. Las salidas de herramientas de más de 4000 caracteres se recortan.

## 👤 Usuario · 2026-10-26 16:33:02 UTC

<local-command-caveat>The command below was run directly in Claude Code, not sent to you as a request, and its output goes straight to the user. It's recorded here as context for later messages.</local-command-caveat>

## 👤 Usuario · 2026-10-26 16:33:02 UTC
```

</details>

## 🤖 Claude · 2026-10-26 16:48:51 UTC

Estoy exportando las conversaciones de IA, ya anonimizadas, a `conversaciones-ia/`. Primero repaso lo que se dijo en la sesión anterior, la del plan.

**🔧 Herramienta `Bash`**

```json
{
  "command": "cd \"<HOME>/Documents/PuestaEnProduccion/Ut1/trabajo\" && sed -n '393,500p' conversaciones-ia/00-*.md",
  "description": "Read prior session's plan text"
}
```

<details><summary>Resultado de herramienta</summary>

```
## 🤖 Claude · 2026-10-26 16:34:28 UTC

# Qué hay que hacer: plan para el Grupo 5, «Desarrollo seguro»

## 1. Lo que piden en realidad

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

## 2. Una duda sobre el material

El enunciado dice «Desarrollo seguro **y mitigaciones** de pps1_06». Lo que has pegado es solo la sección 8, que trata del desarrollo seguro. Comprueba si `pps1_06 seguridad_lenguajes.md` tiene otra sección de **mitigaciones** (ASLR, DEP/NX, *stack canaries*, PIE, RELRO, etc.). Si la tiene, seguramente la profesora espera que aparezca algo de ella.

## 3. Alcance (Fase 1)

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

## 4. Demostración

GitHub Pages solo sirve páginas estáticas, así que recomiendo una **demo interactiva en el navegador**:

- **Demo de XSS (recomendada):** un campo de texto que muestra lo que escribes de dos formas, con `innerHTML` (vulnerable) y con `textContent` o escapado (seguro). Si escribes `<img src=x onerror=alert(1)>` se ve la diferencia. Ilustra justo la idea 3, funciona en la propia web y cualquiera puede comprobarla.
- **Complemento opcional:** calcular SHA-256 de una contraseña con Web Crypto. Se ve que siempre da el mismo hash y que es instantáneo, frente a un hash con salt. Ilustra la idea 5.
- **Diagrama del SSDLC** en SVG o CSS.

## 5. Las dos skills

**Skill pública:** buscad una relacionada con seguridad, por ejemplo en los repositorios públicos de skills de Anthropic (`anthropics/skills`) o de Trail of Bits, que publica skills de auditoría de seguridad. Comprobad antes que existen y qué hacen. Hay que leerla y entenderla **antes** de usarla, sin ejecutar scripts suyos a ciegas, y después aplicarla a algo del proyecto y valorarla con sentido crítico.

**Skill propia:** propongo una que sirva al tema y al proyecto a la vez: **«revisar un texto o código antes de publicarlo en busca de secretos y datos sensibles»** (claves API, tokens, contraseñas, rutas locales, emails, nombres completos).
- Aplica directamente el apartado 8.6 (gestión de secretos).
- Os sirve de verdad para revisar las conversaciones antes de subirlas, como pide el apartado 7 del enunciado.
- Se prueba fácilmente:
… [salida recortada: 1728 caracteres más]
```

</details>

## 🤖 Claude · 2026-10-26 16:49:15 UTC

La prueba de la skill propia ha salido bien. Guardo una copia de la versión 1.0, aplico las mejoras que he detectado (pasa a la 1.1) y lanzo una segunda prueba en otra conversación nueva.

**🔧 Herramienta `Bash`**

```json
{
  "command": "cd \"<HOME>/Documents/PuestaEnProduccion/Ut1/trabajo\" && cp skills/revision-entradas-salidas/SKILL.md evidencias/prueba-skill/SKILL-v1.0.md && echo ok",
  "description": "Save v1.0 of own skill for traceability"
}
```

<details><summary>Resultado de herramienta</summary>

```
ok
```

</details>

**🔧 Herramienta `Edit`**

```json
{
  "replace_all": false,
  "file_path": "<HOME>\\Documents\\PuestaEnProduccion\\Ut1\\trabajo\\skills\\revision-entradas-salidas\\SKILL.md",
  "old_string": "version: 1.0\n---",
  "new_string": "version: 1.1\n---\n\n<!-- Cambios de la 1.1 (tras la primera prueba, ver evidencias/prueba-skill-propia.md):\n     columna \"Vulnerabilidad\" con el nombre común, detalle breve para flujos CORRECTO,\n     regla para agrupar flujos y aviso de verificar los identificadores de reglas de herramientas. -->\n"
}
```

**🔧 Herramienta `Edit`**

```json
{
  "replace_all": false,
  "file_path": "<HOME>\\Documents\\PuestaEnProduccion\\Ut1\\trabajo\\skills\\revision-entradas-salidas\\SKILL.md",
  "old_string": "2. **Sigue cada dato hasta sus destinos.** Para cada fuente, indica a qué destino llega (SQL, HTML, comando, `eval`, ruta, deserializador, URL) y si pasa antes por alguna validación o codificación.",
  "new_string": "2. **Sigue cada dato hasta sus destinos.** Para cada fuente, indica a qué destino llega (SQL, HTML, comando, `eval`, ruta, deserializador, URL) y si pasa antes por alguna validación o codificación. Cuenta **un flujo por cada par fuente → destino**. Sólo puedes agrupar varias fuentes en un flujo si llegan al mismo destino y se corrigen con el mismo cambio."
}
```

**🔧 Herramienta `Edit`**

```json
{
  "replace_all": false,
  "file_path": "<HOME>\\Documents\\PuestaEnProduccion\\Ut1\\trabajo\\skills\\revision-entradas-salidas\\SKILL.md",
  "old_string": "   - `CORRECTO`: el flujo ya está protegido (dilo también, para reforzar lo que está bien).\n4. **Asigna una gravedad**",
  "new_string": "   - `CORRECTO`: el flujo ya está protegido (dilo también, para reforzar lo que está bien).\n\n   Además de la etiqueta, escribe el **nombre común de la vulnerabilidad** para que el estudiante pueda buscarlo: inyección SQL, XSS reflejado, XSS almacenado, inyección de comandos, *path traversal*, SSRF, deserialización insegura, DoS por tamaño… (`—` si es CORRECTO).\n4. **Asigna una gravedad**"
}
```

**🔧 Herramienta `Edit`**

```json
{
  "replace_all": false,
  "file_path": "<HOME>\\Documents\\PuestaEnProduccion\\Ut1\\trabajo\\skills\\revision-entradas-salidas\\SKILL.md",
  "old_string": "6. **Explica la diferencia validación/codificación** en una o dos frases aplicadas a *este* código, no en abstracto.\n7. **Relaciona con el SSDLC**: indica en qué fase se debería haber detectado (implementación, verificación con SAST/DAST) y qué prueba de regresión añadirías.",
  "new_string": "   Si un mismo cambio corrige varios flujos, muéstralo una vez y en los demás escribe \"misma corrección que el flujo N\".\n6. **Explica la diferencia validación/codificación** en una o dos frases aplicadas a *este* código, no en abstracto.\n   Para los flujos `CORRECTO` basta **una sola línea** explicando qué los protege. No rellenes las cuatro viñetas.\n7. **Relaciona con el SSDLC**: indica en qué fase se debería haber detectado (implementación, verificación con SAST/DAST) y qué prueba de regresión añadirías. Si citas una regla concreta de una herramienta (por ejemplo, un identificador de Bandit o de Semgrep), añade \"(comprobar en la documentación de la herramienta)\", porque esos identificadores cambian y es fácil inventarlos."
}
```

**🔧 Herramienta `Edit`**

```json
{
  "replace_all": false,
  "file_path": "<HOME>\\Documents\\PuestaEnProduccion\\Ut1\\trabajo\\skills\\revision-entradas-salidas\\SKILL.md",
  "old_string": "| # | Fuente (línea) | Destino (línea) | Etiqueta | Gravedad |\n|---|---|---|---|---|\n\n## Detalle y corrección\n### Flujo 1: <título>",
  "new_string": "| # | Fuente (línea) | Destino (línea) | Etiqueta | Vulnerabilidad | Gravedad |\n|---|---|---|---|---|---|\n\n## Detalle y corrección\n### Flujo 1: <título>"
}
```

**🔧 Herramienta `Edit`**

```json
{
  "replace_all": false,
  "file_path": "<HOME>\\Documents\\PuestaEnProduccion\\Ut1\\trabajo\\skills\\revision-entradas-salidas\\SKILL.md",
  "old_string": "| # | Fuente (línea) | Destino (línea) | Etiqueta | Gravedad |\n|---|---|---|---|---|\n| 1 | `req.query.nombre` (3) | HTML de la respuesta (4) | FALTA CODIFICACIÓN/PARAMETRIZACIÓN | Alta |",
  "new_string": "| # | Fuente (línea) | Destino (línea) | Etiqueta | Vulnerabilidad | Gravedad |\n|---|---|---|---|---|---|\n| 1 | `req.query.nombre` (3) | HTML de la respuesta (4) | FALTA CODIFICACIÓN/PARAMETRIZACIÓN | XSS reflejado | Alta |"
}
```

**🔧 Herramienta `Edit`**

```json
{
  "replace_all": false,
  "file_path": "<HOME>\\Documents\\PuestaEnProduccion\\Ut1\\trabajo\\skills\\revision-entradas-salidas\\SKILL.md",
  "old_string": "- [ ] Cada flujo tiene fuente, destino, una única etiqueta y una gravedad justificada.",
  "new_string": "- [ ] Cada flujo tiene fuente, destino, una única etiqueta, el nombre común de la vulnerabilidad y una gravedad justificada.\n- [ ] Los flujos `CORRECTO` se explican en una línea, y las correcciones compartidas no se repiten."
}
```

**🔧 Herramienta `Edit`**

```json
{
  "replace_all": false,
  "file_path": "<HOME>\\Documents\\PuestaEnProduccion\\Ut1\\trabajo\\skills\\revision-entradas-salidas\\SKILL.md",
  "old_string": "- La respuesta no menciona ningún problema",
  "new_string": "- La respuesta cita identificadores de reglas de herramientas (Bandit, Semgrep, CodeQL…): comprobarlos en su documentación antes de copiarlos.\n- La respuesta no menciona ningún problema"
}
```

<details><summary>Resultado de herramienta</summary>

```
The file <HOME>\Documents\PuestaEnProduccion\Ut1\trabajo\skills\revision-entradas-salidas\SKILL.md has been updated successfully. (file state is current in your context — no need to Read it back)
```

</details>

<details><summary>Resultado de herramienta</summary>

```
The file <HOME>\Documents\PuestaEnProduccion\Ut1\trabajo\skills\revision-entradas-salidas\SKILL.md has been updated successfully. (file state is current in your context — no need to Read it back)
```

</details>

<details><summary>Resultado de herramienta</summary>

```
The file <HOME>\Documents\PuestaEnProduccion\Ut1\trabajo\skills\revision-entradas-salidas\SKILL.md has been updated successfully. (file state is current in your context — no need to Read it back)
```

</details>

<details><summary>Resultado de herramienta</summary>

```
The file <HOME>\Documents\PuestaEnProduccion\Ut1\trabajo\skills\revision-entradas-salidas\SKILL.md has been updated successfully. (file state is current in your context — no need to Read it back)
```

</details>

<details><summary>Resultado de herramienta</summary>

```
The file <HOME>\Documents\PuestaEnProduccion\Ut1\trabajo\skills\revision-entradas-salidas\SKILL.md has been updated successfully. (file state is current in your context — no need to Read it back)
```

</details>

<details><summary>Resultado de herramienta</summary>

```
The file <HOME>\Documents\PuestaEnProduccion\Ut1\trabajo\skills\revision-entradas-salidas\SKILL.md has been updated successfully. (file state is current in your context — no need to Read it back)
```

</details>

<details><summary>Resultado de herramienta</summary>

```
The file <HOME>\Documents\PuestaEnProduccion\Ut1\trabajo\skills\revision-entradas-salidas\SKILL.md has been updated successfully. (file state is current in your context — no need to Read it back)
```

</details>

<details><summary>Resultado de herramienta</summary>

```
The file <HOME>\Documents\PuestaEnProduccion\Ut1\trabajo\skills\revision-entradas-salidas\SKILL.md has been updated successfully. (file state is current in your context — no need to Read it back)
```

</details>

**🔧 Herramienta `Write`**

```json
{
  "file_path": "<HOME>\\Documents\\PuestaEnProduccion\\Ut1\\trabajo\\evidencias\\prueba-skill\\entrada2.js",
  "content": "// Fragmento de prueba 2 para la skill \"revision-entradas-salidas\" (versión 1.1).\n// Código deliberadamente vulnerable con fines didácticos: NO desplegar.\nconst express = require(\"express\");\nconst path = require(\"path\");\nconst db = require(\"./db\"); // envoltorio de SQLite con get(sql, params)\nconst app = express();\n\nconst CARPETA = path.join(__dirname, \"facturas\");\n\napp.get(\"/factura\", (req, res) => {\n  const archivo = req.query.archivo;\n  res.sendFile(path.join(CARPETA, archivo));\n});\n\napp.get(\"/perfil/:id\", async (req, res) => {\n  const id = Number(req.params.id);\n  if (!Number.isInteger(id) || id < 1) return res.status(400).json({ error: \"id no válido\" });\n  const usuario = await db.get(\"SELECT nombre, bio FROM usuarios WHERE id = ?\", [id]);\n  res.json(usuario ?? { error: \"no existe\" });\n});\n\napp.post(\"/config\", express.json(), (req, res) => {\n  const opciones = eval(\"(\" + req.body.opciones + \")\");\n  res.send(\"Guardado: \" + Object.keys(opciones).length + \" opciones\");\n});\n\napp.listen(3000);\n"
}
```

**🔧 Herramienta `Edit`**

```json
{
  "replace_all": false,
  "file_path": "<HOME>\\Documents\\PuestaEnProduccion\\Ut1\\trabajo\\evidencias\\prueba-skill-propia.md",
  "old_string": "## 3. Resultado obtenido\n\n_Pendiente: se completa tras ejecutar la prueba._",
  "new_string": "### 2.b Resultado esperado de la segunda prueba (versión 1.1), definido antes de lanzarla\n\nEntrada: [`prueba-skill/entrada2.js`](prueba-skill/entrada2.js) (Express, 27 líneas). Sirve para comprobar que las mejoras de la versión 1.1 funcionan con otro lenguaje y con vulnerabilidades distintas.\n\n| # | Fuente (línea) | Destino (línea) | Etiqueta esperada | Vulnerabilidad | Gravedad |\n|---|---|---|---|---|---|\n| E1 | `archivo` (11) | ruta de `sendFile` (12) | FALTA VALIDACIÓN (también se acepta CODIFICACIÓN) | *Path traversal* | Alta |\n| E2 | `id` (16) | SQL parametrizado (18) | CORRECTO, en **una línea** | — | — |\n| E3 | `usuario` de la BD (18) | JSON (19) | CORRECTO, en una línea | — | — |\n| E4 | `req.body.opciones` (23) | `eval` (23) | DATO CONVERTIDO EN CÓDIGO | Inyección de código | Alta |\n\n- **Correcciones:** `JSON.parse` en lugar de `eval`, y validar la estructura; `path.basename` y comprobar que la ruta resuelta queda dentro de `CARPETA`, o bien `res.sendFile(archivo, { root: CARPETA })`.\n- **Fuera de alcance:** que `/factura` no compruebe si la factura es del usuario (autorización, §8.3).\n- **Novedades de la 1.1:** que aparezca la columna \"Vulnerabilidad\" y que, si se citan reglas de herramientas, vayan con el aviso \"(comprobar…)\".\n\n## 3. Resultado obtenido\n\n_Pendiente: se completa tras ejecutar la prueba._"
}
```

<details><summary>Resultado de herramienta</summary>

```
File created successfully at: <HOME>\Documents\PuestaEnProduccion\Ut1\trabajo\evidencias\prueba-skill\entrada2.js (file state is current in your context — no need to Read it back)
```

</details>

<details><summary>Resultado de herramienta</summary>

```
The file <HOME>\Documents\PuestaEnProduccion\Ut1\trabajo\evidencias\prueba-skill-propia.md has been updated successfully. (file state is current in your context — no need to Read it back)
```

</details>

**🔧 Herramienta `Agent`**

```json
{
  "description": "Segunda prueba skill propia v1.1",
  "subagent_type": "general-purpose",
  "prompt": "Usa la skill `revision-entradas-salidas` para revisar el código que te paso. Lenguaje: JavaScript con Express (Node.js).\n\nLee las instrucciones de la skill en este fichero (léelo entero y síguelo al pie de la letra): <HOME>\\Documents\\PuestaEnProduccion\\Ut1\\trabajo\\skills\\revision-entradas-salidas\\SKILL.md\n\nEl código a revisar está en: <HOME>\\Documents\\PuestaEnProduccion\\Ut1\\trabajo\\evidencias\\prueba-skill\\entrada2.js\n\nReglas para esta prueba: lee SÓLO esos dos ficheros (no abras ningún otro fichero del directorio ni de sus carpetas), no ejecutes el código ni ningún comando. Devuelve como respuesta final únicamente el informe en Markdown con el formato de salida que define la skill, en español."
}
```

<details><summary>Resultado de herramienta</summary>

```
Async agent launched successfully. (This tool result is internal metadata — never quote or paste any part of it, including the agentId below, into a user-facing reply.)
agentId: a6f937fa09c7d7e74 (internal ID - do not mention to user. Use SendMessage with to: 'a6f937fa09c7d7e74', summary: '<5-10 word recap>' to continue this agent.)
The agent is working in the background. You will be notified automatically when it completes. You know nothing about its results until that notification arrives — do not report, assume, or predict them; continue other work or respond to the user in the meantime.
Do not duplicate this agent's work — avoid working with the same files or topics it is using.
output_file: <HOME>\AppData\Local\Temp\claude\<carpeta-de-proyecto>\75fcebbd-e713-46f3-8f12-2de71489e93c\tasks\a6f937fa09c7d7e74.output
Do NOT Read or tail this file via the shell tool — it is the full subagent JSONL transcript and reading it will overflow your context. If the user asks for progress, say the agent is still running; you'll get a completion notification.
```

</details>

**🔧 Herramienta `Bash`**

```json
{
  "command": "S=\"<HOME>/AppData/Local/Temp/claude/<carpeta-de-proyecto>/75fcebbd-e713-46f3-8f12-2de71489e93c/scratchpad\"; cd \"$S\" && node -e '\nconst fs=require(\"fs\");let s=fs.readFileSync(\"exportar.js\",\"utf8\");\ns=s.replace(`function bloque(`,`// Baja dos niveles los encabezados de los mensajes para no romper la estructura del documento.\nfunction rebajar(t) {\n  return String(t).replace(/^(#{1,4}) /gm, \"##$1 \");\n}\n\nfunction bloque(`);\ns=s.replace(`if (t) partes.push(\\`## 👤 Usuario · \\${hora}\\`, \"\", t, \"\");\n      continue;`,`if (t) partes.push(\\`## 👤 Usuario · \\${hora}\\`, \"\", rebajar(t), \"\");\n      continue;`);\ns=s.replace(`if (t) partes.push(\\`## 👤 Usuario · \\${hora}\\`, \"\", t, \"\");\n      } else`,`if (t) partes.push(\\`## 👤 Usuario · \\${hora}\\`, \"\", rebajar(t), \"\");\n      } else`);\ns=s.replace(`partes.push(\\`## 🤖 Claude · \\${hora}\\`, \"\", p.text, \"\");`,`partes.push(\\`## 🤖 Claude · \\${hora}\\`, \"\", rebajar(p.text), \"\");`);\nfs.writeFileSync(\"exportar.js\",s);' && grep -c \"rebajar\" exportar.js && cd \"<HOME>/Documents/PuestaEnProduccion/Ut1/trabajo\" && node \"$S/exportar.js\" ~/.claude/projects/<proyecto>/80738edc-1cdc-4ce0-86df-5c16b81ffda9.jsonl conversaciones-ia/00-claude-code-plan-inicial.md \"Conversación 00 · Claude Code · Lectura del enunciado y plan inicial\" && grep -n \"^## \" conversaciones-ia/00-*.md | tail -5",
  "description": "Demote headings in exporter and re-export conversation 00"
}
```

<details><summary>Resultado de herramienta</summary>

```
4
Escrito conversaciones-ia/00-claude-code-plan-inicial.md
21:## 👤 Usuario · 2026-10-26 16:33:07 UTC
25:## 👤 Usuario · 2026-10-26 16:33:07 UTC
31:## 👤 Usuario · 2026-10-26 16:33:07 UTC
35:## 👤 Usuario · 2026-10-26 16:33:46 UTC
393:## 🤖 Claude · 2026-10-26 16:34:28 UTC
```

</details>

**🔧 Herramienta `Bash`**

```json
{
  "command": "S=\"<HOME>/AppData/Local/Temp/claude/<carpeta-de-proyecto>/75fcebbd-e713-46f3-8f12-2de71489e93c/scratchpad\"; cd \"<HOME>/Documents/PuestaEnProduccion/Ut1/trabajo\" && mkdir -p herramientas && node -e '\nconst fs=require(\"fs\");let s=fs.readFileSync(process.argv[1],\"utf8\");\ns=s.replace(/\\/\\/ Uso:.*\\n/,\"// Uso: node herramientas/exportar-conversacion.js <entrada.jsonl> <salida.md> \\\"<título>\\\" [término1,término2,...]\\n// Los términos opcionales (correo, apellido, nombre de usuario...) se sustituyen por <dato-personal>.\\n// Las rutas de la carpeta personal (C:\\\\\\\\Users\\\\\\\\<usuario>) se sustituyen siempre por <HOME>.\\n\");\ns=s.replace(\"const [, , entrada, salida, titulo] = process.argv;\",\"const [, , entrada, salida, titulo, terminos = \\\"\\\"] = process.argv;\\nconst escaparRegex = (t) => t.replace(/[.*+?^${}()|[\\\\]\\\\\\\\]/g, \\\"\\\\\\\\$&\\\");\");\ns=s.replace(/function anonimizar\\(t\\) \\{[\\s\\S]*?\\n\\}\\n/,`function anonimizar(t) {\n  let r = String(t)\n    .replace(/[A-Za-z]:[\\\\\\\\/]+Users[\\\\\\\\/]+[^\\\\\\\\/\\\\s\"'\\`<>]+/gi, \"<HOME>\")\n    .replace(/\\\\/[a-z]\\\\/Users\\\\/[^\\\\/\\\\s\"'\\`<>]+/gi, \"<HOME>\")\n    .replace(/[A-Za-z]--Users-[A-Za-z0-9-]+?(?=-Documents|-Desktop|[\\\\\\\\/]|\\\\s|$)/gi, \"<HOME-codificado>\")\n    .replace(/[\\\\w.+-]+@[\\\\w-]+\\\\.[\\\\w.-]+/g, \"<email>\");\n  for (const termino of terminos.split(\",\").map((x) => x.trim()).filter(Boolean)) {\n    r = r.replace(new RegExp(escaparRegex(termino), \"gi\"), \"<dato-personal>\");\n  }\n  return r;\n}\n`);\nfs.writeFileSync(\"herramientas/exportar-conversacion.js\",s);' \"$S/exportar.js\" && sed -n '1,35p' herramientas/exportar-conversacion.js && grep -n -i \"<dato-personal>\\|<dato-personal>\\|silicon\\|daniel\" herramientas/exportar-conversacion.js; echo \"grep exit $?\"",
  "description": "Create generic anonymizing exporter in repo"
}
```

<details><summary>Resultado de herramienta (error)</summary>

```
Exit code 2
/usr/bin/bash: eval: line 7: syntax error near unexpected token `)'
/usr/bin/bash: eval: line 7: `    .replace(/[A-Za-z]:[\\/]+Users[\\/]+[^\\/\s"'\`<>]+/gi, "<HOME>")'
```

</details>

## 🤖 Claude · 2026-10-26 16:50:42 UTC

Ahora estoy dejando en el repositorio una versión genérica del exportador, sin datos personales, para que podáis volver a exportar las conversaciones cuando queráis.

**🔧 Herramienta `Write`**

~~~~json
{
  "file_path": "<HOME>\\Documents\\PuestaEnProduccion\\Ut1\\trabajo\\herramientas\\exportar-conversacion.js",
  "content": "// Convierte un historial .jsonl de Claude Code en Markdown y anonimiza datos personales.\n// Uso: node herramientas/exportar-conversacion.js <entrada.jsonl> <salida.md> \"<título>\" [término1,término2,...]\n// Las rutas de la carpeta personal (C:\\Users\\<usuario>) se sustituyen siempre por <HOME> y los correos por <email>.\n// Los términos opcionales (apellido, nombre de usuario...) se sustituyen por <dato-personal>.\n// Los historiales están en ~/.claude/projects/<carpeta-del-proyecto>/<sesión>.jsonl\n// y los de los subagentes en ~/.claude/projects/<carpeta-del-proyecto>/<sesión>/subagents/.\nconst fs = require(\"fs\");\nconst [, , entrada, salida, titulo, terminos = \"\"] = process.argv;\n\nconst MAX_RESULTADO = 4000;\nconst escaparRegex = (t) => t.replace(/[.*+?^${}()|[\\]\\\\]/g, \"\\\\$&\");\n\nfunction anonimizar(t) {\n  let r = String(t)\n    .replace(/[A-Za-z]:[\\\\/]+Users[\\\\/]+[^\\\\/\\s\"'`<>]+/gi, \"<HOME>\")\n    .replace(/\\/[a-z]\\/Users\\/[^/\\s\"'`<>]+/gi, \"<HOME>\")\n    .replace(/~[\\\\/]\\.claude[\\\\/]projects[\\\\/][^\\\\/\\s\"'`<>]+/gi, \"~/.claude/projects/<proyecto>\")\n    .replace(/[A-Za-z]--Users-[A-Za-z0-9-]+/g, \"<carpeta-de-proyecto>\")\n    .replace(/[\\w.+-]+@[\\w-]+\\.[\\w.-]+/g, \"<email>\");\n  for (const termino of terminos.split(\",\").map((x) => x.trim()).filter(Boolean)) {\n    r = r.replace(new RegExp(escaparRegex(termino), \"gi\"), \"<dato-personal>\");\n  }\n  return r;\n}\n\nfunction quitarRecordatorios(t) {\n  return t.replace(/<system-reminder>[\\s\\S]*?<\\/system-reminder>/g, \"\").trim();\n}\n\n// Baja dos niveles los encabezados de los mensajes para no romper la estructura del documento.\nfunction rebajar(t) {\n  return String(t).replace(/^(#{1,4}) /gm, \"##$1 \");\n}\n\nfunction bloque(texto, lenguaje = \"\") {\n  const t = String(texto);\n  const valla = t.includes(\"```\") ? \"~~~~\" : \"```\";\n  return `${valla}${lenguaje}\\n${t}\\n${valla}`;\n}\n\nfunction textoResultado(c) {\n  if (typeof c === \"string\") return c;\n  if (Array.isArray(c)) {\n    return c.map((p) => (p.type === \"text\" ? p.text : p.type === \"image\" ? \"[imagen adjunta: captura de pantalla]\" : `[${p.type}]`)).join(\"\\n\");\n  }\n  return JSON.stringify(c);\n}\n\nfunction recortar(t) {\n  return t.length > MAX_RESULTADO\n    ? t.slice(0, MAX_RESULTADO) + `\\n… [salida recortada: ${t.length - MAX_RESULTADO} caracteres más]`\n    : t;\n}\n\nconst lineas = fs.readFileSync(entrada, \"utf8\").split(\"\\n\").filter(Boolean).map((l) => JSON.parse(l));\nconst partes = [`# ${titulo}`, \"\",\n  `> Exportado automáticamente del historial local de Claude Code (${lineas.length} eventos).`,\n  \"> Se han anonimizado rutas locales, nombre de usuario y correo. Se omiten los recordatorios internos del sistema\",\n  \"> y el razonamiento interno del modelo. Las salidas de herramientas de más de \" + MAX_RESULTADO + \" caracteres se recortan.\", \"\"];\n\nfor (const ev of lineas) {\n  if (ev.type !== \"user\" && ev.type !== \"assistant\") continue;\n  const contenido = ev.message?.content;\n  const hora = ev.timestamp ? ev.timestamp.replace(\"T\", \" \").slice(0, 19) + \" UTC\" : \"\";\n\n  if (ev.type === \"user\") {\n    if (typeof contenido === \"string\") {\n      const t = quitarRecordatorios(contenido);\n      if (t) partes.push(`## 👤 Usuario · ${hora}`, \"\", rebajar(t), \"\");\n      continue;\n    }\n    for (const p of contenido || []) {\n      if (p.type === \"text\") {\n        const t = quitarRecordatorios(p.text);\n        if (t) partes.push(`## 👤 Usuario · ${hora}`, \"\", rebajar(t), \"\");\n      } else if (p.type === \"tool_result\") {\n        const t = quitarRecordatorios(textoResultado(p.content));\n        partes.push(`<details><summary>Resultado de herramienta${p.is_error ? \" (error)\" : \"\"}</summary>`, \"\", bloque(recortar(t)), \"\", \"</details>\", \"\");\n      }\n    }\n  } else {\n    for (const p of contenido || []) {\n      if (p.type === \"text\" && p.text.trim()) {\n        partes.push(`## 🤖 Claude · ${hora}`, \"\", rebajar(p.text), \"\");\n      } else if (p.type === \"tool_use\") {\n        partes.push(`**🔧 Herramienta \\`${p.name}\\`**`, \"\", bloque(JSON.stringify(p.input, null, 2), \"json\"), \"\");\n      }\n    }\n  }\n}\n\nfs.writeFileSync(salida, anonimizar(partes.join(\"\\n\")));\nconsole.log(`Escrito ${salida}`);\n"
}
~~~~

**🔧 Herramienta `Bash`**

```json
{
  "command": "cd \"<HOME>/Documents/PuestaEnProduccion/Ut1/trabajo\" && node herramientas/exportar-conversacion.js ~/.claude/projects/<proyecto>/80738edc-1cdc-4ce0-86df-5c16b81ffda9.jsonl conversaciones-ia/00-claude-code-plan-inicial.md \"Conversación 00 · Claude Code · Lectura del enunciado y plan inicial\" \"<dato-personal>,<dato-personal>,<dato-personal>,DANIEL~1\" && grep -n -i -E \"<dato-personal>|<dato-personal>|<dato-personal>|Users|@\" conversaciones-ia/00-*.md | head",
  "description": "Re-export conversation 00 with repo exporter and check leaks"
}
```

<details><summary>Resultado de herramienta</summary>

```
File created successfully at: <HOME>\Documents\PuestaEnProduccion\Ut1\trabajo\herramientas\exportar-conversacion.js (file state is current in your context — no need to Read it back)
```

</details>

<details><summary>Resultado de herramienta</summary>

```
Escrito conversaciones-ia/00-claude-code-plan-inicial.md
```

</details>

**🔧 Herramienta `Read`**

```json
{
  "file_path": "<HOME>\\Documents\\PuestaEnProduccion\\Ut1\\trabajo\\evidencias\\prueba-skill-propia.md",
  "offset": 50
}
```

<details><summary>Resultado de herramienta</summary>

```
50	## 3. Resultado obtenido
51	
52	_Pendiente: se completa tras ejecutar la prueba._
53	
54	## 4. Comparación
55	
56	_Pendiente._
57	
58	## 5. Errores, limitaciones y mejoras
59	
60	_Pendiente._
61	
62	## 6. Conversación de origen
63	
64	_Pendiente._
65
```

</details>

**🔧 Herramienta `Bash`**

```json
{
  "command": "curl -sL https://flask.palletsprojects.com/en/stable/templating/ | grep -o -i '.\\{60\\}render_template_string.\\{80\\}' | head -3; curl -sL https://bandit.readthedocs.io/en/latest/plugins/index.html | grep -o -E 'B60[28][^<]{0,60}' | sort -u | head; curl -sL https://raw.githubusercontent.com/pillarjs/send/master/index.js | grep -n \"UP_PATH_REGEXP\" | head -3",
  "description": "Verify Flask autoescape, Bandit IDs and send traversal check",
  "timeout": 60000
}
```

<details><summary>Resultado de herramienta</summary>

```
B602: subprocess_popen_with_shell_equals_true
B608: hardcoded_sql_expressions
61:var UP_PATH_REGEXP = /(?:^|[\\/])\.\.(?:[\\/]|$)/
431:    if (UP_PATH_REGEXP.test(path)) {
444:    if (UP_PATH_REGEXP.test(path)) {
```

</details>

**🔧 Herramienta `Read`**

```json
{
  "file_path": "<HOME>\\Documents\\PuestaEnProduccion\\Ut1\\trabajo\\js\\demo.js",
  "limit": 100
}
```

<details><summary>Resultado de herramienta</summary>

```
1	/*
2	 * Demostraciones de la web "Desarrollo seguro".
3	 * Las funciones puras (validación, codificación, hashes) se exportan al final
4	 * para poder probarlas con Node: node --test tests/demo.test.js
5	 */
6	
7	// ---------- Demo 1: validación con lista blanca ----------
8	
9	const USUARIO_MIN = 3;
10	const USUARIO_MAX = 20;
11	const EDAD_MIN = 14;
12	const EDAD_MAX = 120;
13	
14	// Devuelve la lista de reglas con su resultado. No modifica la entrada:
15	// si trae espacios u otros caracteres, se rechaza en lugar de "arreglarla".
16	function validarUsuario(valor) {
17	  const texto = String(valor);
18	  return [
19	    { regla: `Tiene entre ${USUARIO_MIN} y ${USUARIO_MAX} caracteres (tiene ${texto.length})`,
20	      ok: texto.length >= USUARIO_MIN && texto.length <= USUARIO_MAX },
21	    { regla: "Sólo usa a-z, 0-9 o _ (lista blanca)",
22	      ok: /^[a-z0-9_]*$/.test(texto) && texto.length > 0 },
23	  ];
24	}
25	
26	function validarEdad(valor) {
27	  const texto = String(valor);
28	  const soloDigitos = /^[0-9]{1,3}$/.test(texto);
29	  const numero = soloDigitos ? Number(texto) : NaN;
30	  return [
31	    { regla: "Es un número entero sin signos, espacios ni decimales", ok: soloDigitos },
32	    { regla: `Está entre ${EDAD_MIN} y ${EDAD_MAX}`,
33	      ok: soloDigitos && numero >= EDAD_MIN && numero <= EDAD_MAX },
34	  ];
35	}
36	
37	// ---------- Demo 2: codificación de salida ----------
38	
39	const ENTIDADES = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
40	
41	// Codificación para insertar texto dentro del cuerpo o de un atributo HTML.
42	// Es lo que hace el navegador por nosotros cuando usamos textContent.
43	function escaparHTML(texto) {
44	  return String(texto).replace(/[&<>"']/g, (c) => ENTIDADES[c]);
45	}
46	
47	// Analiza qué interpretaría el navegador si el texto se insertara como HTML.
48	// DOMParser crea un documento inerte: no ejecuta scripts ni carga imágenes.
49	function analizarHTML(texto) {
50	  const doc = new DOMParser().parseFromString(`<body>${texto}</body>`, "text/html");
51	  const elementos = [...doc.body.querySelectorAll("*")];
52	  const hallazgos = [];
53	  for (const el of elementos) {
54	    const peligros = [];
55	    if (el.tagName === "SCRIPT") peligros.push("es un bloque de código JavaScript");
56	    for (const attr of el.attributes) {
57	      if (/^on/i.test(attr.name)) {
58	        peligros.push(`atributo ${attr.name} = ejecutaría JavaScript`);
59	      } else if (/^\s*javascript:/i.test(attr.value)) {
60	        peligros.push(`${attr.name} con esquema javascript: = ejecutaría JavaScript al pulsar`);
61	      }
62	    }
63	    hallazgos.push({ etiqueta: el.tagName.toLowerCase(), peligros });
64	  }
65	  return hallazgos;
66	}
67	
68	// ---------- Demo 3: hash rápido frente a hash lento con sal ----------
69	
70	const PBKDF2_ITERACIONES = 600000; // recomendación de OWASP para PBKDF2-HMAC-SHA256
71	const REPETICIONES_SHA = 1000;
72	
73	function aHex(buffer) {
74	  return [...new Uint8Array(buffer)].map((b) => b.toString(16).padStart(2, "0")).join("");
75	}
76	
77	async function sha256(texto) {
78	  const datos = new TextEncoder().encode(texto);
79	  return aHex(await crypto.subtle.digest("SHA-256", datos));
80	}
81	
82	async function pbkdf2(texto, sal, iteraciones = PBKDF2_ITERACIONES) {
83	  if (!Number.isInteger(iteraciones) || iteraciones < 1) {
84	    throw new RangeError("El número de iteraciones debe ser un entero positivo");
85	  }
86	  const clave = await crypto.subtle.importKey(
87	    "raw", new TextEncoder().encode(texto), "PBKDF2", false, ["deriveBits"]
88	  );
89	  const bits = await crypto.subtle.deriveBits(
90	    { name: "PBKDF2", hash: "SHA-256", salt: sal, iterations: iteraciones }, clave, 256
91	  );
92	  return aHex(bits);
93	}
94	
95	function salAleatoria() {
96	  return crypto.getRandomValues(new Uint8Array(16));
97	}
98	
99	// ---------- Conexión con la página ----------
100
```

</details>

## 🤖 Claude · 2026-10-26 16:51:37 UTC

Before changing the code, I'm checking in the real browser two claims from the public skill: that `<svg><script>` and a tab inside `javascript:` slip past the current analysis.

**🔧 Herramienta `Bash`**

```json
{
  "command": "S=\"<HOME>/AppData/Local/Temp/claude/<carpeta-de-proyecto>/75fcebbd-e713-46f3-8f12-2de71489e93c/scratchpad\"; cat > \"$S/verif-se5.html\" <<'EOF'\n<!doctype html><meta charset=\"utf-8\"><body><script>\nconst d=new DOMParser().parseFromString('<body><svg><script>alert(1)<\\/script></svg><a href=\"jav&#x09;ascript:alert(1)\">x</a></body>','text/html');\nconst s=d.querySelector('script'); const a=d.querySelector('a');\ndocument.title=JSON.stringify({tagName:s.tagName,localName:s.localName,regexAntigua:/^\\s*javascript:/i.test(a.getAttribute('href')),protocolo:new URL(a.getAttribute('href'),'https://x.test/').protocol});\n</script></body>\nEOF\nCH=\"/c/Program Files/Google/Chrome/Application/chrome.exe\"; \"$CH\" --headless=new --disable-gpu --user-data-dir=\"$S/c-se5\" --virtual-time-budget=2000 --dump-dom \"file:///$S/verif-se5.html\" 2>/dev/null | grep -o '<title>[^<]*</title>'",
  "description": "Verify SVG script and tab-in-javascript bypasses in Chrome",
  "timeout": 60000
}
```

<details><summary>Resultado de herramienta</summary>

```
<title>{"tagName":"script","localName":"script","regexAntigua":false,"protocolo":"javascript:"}</title>
```

</details>

## 🤖 Claude · 2026-10-26 16:51:45 UTC

Both claims check out in Chrome. I'm applying the accepted changes to `js/demo.js`.

**🔧 Herramienta `Edit`**

```json
{
  "replace_all": false,
  "file_path": "<HOME>\\Documents\\PuestaEnProduccion\\Ut1\\trabajo\\js\\demo.js",
  "old_string": "// Devuelve la lista de reglas con su resultado. No modifica la entrada:\n// si trae espacios u otros caracteres, se rechaza en lugar de \"arreglarla\".\nfunction validarUsuario(valor) {\n  const texto = String(valor);\n  return [",
  "new_string": "// Devuelven la lista de reglas con su resultado, para pintarla en la página.\n// Para decidir si se acepta un valor, usa esUsuarioValido / esEdadValida:\n// un array siempre es \"verdadero\" en un if. No modifican la entrada:\n// si trae espacios u otros caracteres, se rechaza en lugar de \"arreglarla\".\n// Si el valor no es una cadena (undefined, null, un array...), todas las reglas fallan.\nfunction validarUsuario(valor) {\n  if (typeof valor !== \"string\") return reglasNoTexto();\n  const texto = valor;\n  return ["
}
```

**🔧 Herramienta `Edit`**

```json
{
  "replace_all": false,
  "file_path": "<HOME>\\Documents\\PuestaEnProduccion\\Ut1\\trabajo\\js\\demo.js",
  "old_string": "function validarEdad(valor) {\n  const texto = String(valor);\n  const soloDigitos",
  "new_string": "function validarEdad(valor) {\n  if (typeof valor !== \"string\") return reglasNoTexto();\n  const texto = valor;\n  const soloDigitos"
}
```

**🔧 Herramienta `Edit`**

```json
{
  "replace_all": false,
  "file_path": "<HOME>\\Documents\\PuestaEnProduccion\\Ut1\\trabajo\\js\\demo.js",
  "old_string": "      ok: soloDigitos && numero >= EDAD_MIN && numero <= EDAD_MAX },\n  ];\n}\n\n// ---------- Demo 2: codificación de salida ----------\n\nconst ENTIDADES = { \"&\": \"&amp;\", \"<\": \"&lt;\", \">\": \"&gt;\", '\"': \"&quot;\", \"'\": \"&#39;\" };\n\n// Codificación para insertar texto dentro del cuerpo o de un atributo HTML.\n// Es lo que hace el navegador por nosotros cuando usamos textContent.\nfunction escaparHTML(texto) {",
  "new_string": "      ok: soloDigitos && numero >= EDAD_MIN && numero <= EDAD_MAX },\n  ];\n}\n\nfunction reglasNoTexto() {\n  return [{ regla: \"El valor recibido es una cadena de texto\", ok: false }];\n}\n\nconst cumpleTodas = (reglas) => reglas.every((r) => r.ok);\nconst esUsuarioValido = (valor) => cumpleTodas(validarUsuario(valor));\nconst esEdadValida = (valor) => cumpleTodas(validarEdad(valor));\n\n// ---------- Demo 2: codificación de salida ----------\n\nconst ENTIDADES = { \"&\": \"&amp;\", \"<\": \"&lt;\", \">\": \"&gt;\", '\"': \"&quot;\", \"'\": \"&#39;\" };\n\n// Codificación para HTML. Sólo es segura en dos contextos: el texto de un elemento\n// y el valor de un atributo ENTRE COMILLAS. No sirve para URLs (href=\"javascript:...\"),\n// atributos on*, style ni el interior de <script>. Cada contexto necesita su propia codificación.\n// Es lo que hace el navegador por nosotros cuando usamos textContent.\nfunction escaparHTML(texto) {"
}
```

**🔧 Herramienta `Edit`**

```json
{
  "replace_all": false,
  "file_path": "<HOME>\\Documents\\PuestaEnProduccion\\Ut1\\trabajo\\js\\demo.js",
  "old_string": "// Analiza qué interpretaría el navegador si el texto se insertara como HTML.\n// DOMParser crea un documento inerte: no ejecuta scripts ni carga imágenes.\nfunction analizarHTML(texto) {\n  const doc = new DOMParser().parseFromString(`<body>${texto}</body>`, \"text/html\");\n  const elementos = [...doc.body.querySelectorAll(\"*\")];\n  const hallazgos = [];\n  for (const el of elementos) {\n    const peligros = [];\n    if (el.tagName === \"SCRIPT\") peligros.push(\"es un bloque de código JavaScript\");\n    for (const attr of el.attributes) {\n      if (/^on/i.test(attr.name)) {\n        peligros.push(`atributo ${attr.name} = ejecutaría JavaScript`);\n      } else if (/^\\s*javascript:/i.test(attr.value)) {\n        peligros.push(`${attr.name} con esquema javascript: = ejecutaría JavaScript al pulsar`);\n      }\n    }\n    hallazgos.push({ etiqueta: el.tagName.toLowerCase(), peligros });\n  }\n  return hallazgos;\n}",
  "new_string": "// Etiquetas que, aun sin JavaScript visible, cambian el comportamiento de la página\n// (cargan otro documento, redirigen, envían formularios o inyectan estilos).\nconst ETIQUETAS_DELICADAS = new Set([\"iframe\", \"object\", \"embed\", \"base\", \"meta\", \"form\", \"style\", \"link\"]);\nconst ATRIBUTOS_URL = new Set([\"href\", \"src\", \"action\", \"formaction\", \"xlink:href\", \"data\"]);\n\n// Devuelve el protocolo tal como lo vería el navegador. El analizador de URLs\n// elimina tabuladores y saltos de línea, así que \"jav&#x09;ascript:\" sigue siendo javascript:.\nfunction protocoloDe(valor) {\n  try {\n    return new URL(valor, \"https://ejemplo.invalid/\").protocol;\n  } catch {\n    return \"\";\n  }\n}\n\n// Analiza qué interpretaría el navegador si el texto se insertara como HTML.\n// DOMParser crea un documento inerte: no ejecuta scripts ni carga imágenes.\n// OJO: es una lista negra con fines didácticos, no un sanitizador. Que no detecte\n// nada no significa que el HTML sea seguro; para eso existen DOMPurify o la Sanitizer API.\nfunction analizarHTML(texto) {\n  const doc = new DOMParser().parseFromString(`<body>${texto}</body>`, \"text/html\");\n  const elementos = [...doc.body.querySelectorAll(\"*\")];\n  const hallazgos = [];\n  for (const el of elementos) {\n    const peligros = [];\n    const nombre = el.localName; // en minúsculas también dentro de <svg> o <math>\n    if (nombre === \"script\") peligros.push(\"es un bloque de código JavaScript\");\n    if (ETIQUETAS_DELICADAS.has(nombre)) peligros.push(`<${nombre}> puede cargar contenido, redirigir o cambiar la página`);\n    for (const attr of el.attributes) {\n      if (/^on/i.test(attr.name)) {\n        peligros.push(`atributo ${attr.name} = ejecutaría JavaScript`);\n      } else if (attr.name === \"srcdoc\") {\n        peligros.push(\"atributo srcdoc = incrusta otro documento HTML con el mismo origen\");\n      } else if (ATRIBUTOS_URL.has(attr.name.toLowerCase()) && protocoloDe(attr.value) === \"javascript:\") {\n        peligros.push(`${attr.name} con esquema javascript: = ejecutaría JavaScript al pulsar`);\n      }\n    }\n    hallazgos.push({ etiqueta: nombre, peligros });\n  }\n  return hallazgos;\n}"
}
```

**🔧 Herramienta `Edit`**

```json
{
  "replace_all": false,
  "file_path": "<HOME>\\Documents\\PuestaEnProduccion\\Ut1\\trabajo\\js\\demo.js",
  "old_string": "const PBKDF2_ITERACIONES = 600000; // recomendación de OWASP para PBKDF2-HMAC-SHA256\nconst REPETICIONES_SHA = 1000;\n\nfunction aHex(buffer) {\n  return [...new Uint8Array(buffer)].map((b) => b.toString(16).padStart(2, \"0\")).join(\"\");\n}\n\nasync function sha256(texto) {\n  const datos = new TextEncoder().encode(texto);\n  return aHex(await crypto.subtle.digest(\"SHA-256\", datos));\n}\n\nasync function pbkdf2(texto, sal, iteraciones = PBKDF2_ITERACIONES) {\n  if (!Number.isInteger(iteraciones) || iteraciones < 1) {\n    throw new RangeError(\"El número de iteraciones debe ser un entero positivo\");\n  }",
  "new_string": "// Estas funciones existen para COMPARAR en la demo; no son una API para guardar contraseñas\n// (no devuelven la sal ni las iteraciones junto al hash y no hay función de verificación).\nconst PBKDF2_ITERACIONES = 600000; // recomendación de OWASP para PBKDF2-HMAC-SHA256\nconst PBKDF2_MAX_ITERACIONES = 10000000; // tope para no bloquear el navegador\nconst REPETICIONES_SHA = 1000;\n\nfunction aHex(buffer) {\n  return [...new Uint8Array(buffer)].map((b) => b.toString(16).padStart(2, \"0\")).join(\"\");\n}\n\nfunction exigirTexto(texto) {\n  if (typeof texto !== \"string\") throw new TypeError(\"La contraseña debe ser una cadena de texto\");\n}\n\n// SÓLO PARA LA DEMO: un hash rápido NO sirve para guardar contraseñas (ver idea 6).\nasync function sha256(texto) {\n  exigirTexto(texto);\n  const datos = new TextEncoder().encode(texto);\n  return aHex(await crypto.subtle.digest(\"SHA-256\", datos));\n}\n\n// El parámetro iteraciones admite valores bajos sólo para comprobar los vectores de prueba\n// del RFC 7914 (c = 1). La demo usa siempre PBKDF2_ITERACIONES.\nasync function pbkdf2(texto, sal, iteraciones = PBKDF2_ITERACIONES) {\n  exigirTexto(texto);\n  if (!Number.isInteger(iteraciones) || iteraciones < 1 || iteraciones > PBKDF2_MAX_ITERACIONES) {\n    throw new RangeError(`El número de iteraciones debe ser un entero entre 1 y ${PBKDF2_MAX_ITERACIONES}`);\n  }"
}
```

<details><summary>Resultado de herramienta</summary>

```
The file <HOME>\Documents\PuestaEnProduccion\Ut1\trabajo\js\demo.js has been updated successfully.
```

</details>

<details><summary>Resultado de herramienta</summary>

```
The file <HOME>\Documents\PuestaEnProduccion\Ut1\trabajo\js\demo.js has been updated successfully.
```

</details>

<details><summary>Resultado de herramienta</summary>

```
The file <HOME>\Documents\PuestaEnProduccion\Ut1\trabajo\js\demo.js has been updated successfully.
```

</details>

<details><summary>Resultado de herramienta</summary>

```
The file <HOME>\Documents\PuestaEnProduccion\Ut1\trabajo\js\demo.js has been updated successfully.
```

</details>

<details><summary>Resultado de herramienta</summary>

```
The file <HOME>\Documents\PuestaEnProduccion\Ut1\trabajo\js\demo.js has been updated successfully.
```

</details>

**🔧 Herramienta `Read`**

```json
{
  "file_path": "<HOME>\\Documents\\PuestaEnProduccion\\Ut1\\trabajo\\js\\demo.js",
  "offset": 170,
  "limit": 50
}
```

<details><summary>Resultado de herramienta</summary>

```
170	      boton.setAttribute("aria-expanded", "false");
171	    }
172	  });
173	}
174	
175	function iniciarValidacion() {
176	  const form = document.getElementById("form-validacion");
177	  const salida = document.getElementById("resultado-validacion");
178	  form.addEventListener("submit", (e) => {
179	    e.preventDefault();
180	    const usuario = form.usuario.value;
181	    const edad = form.edad.value;
182	    // Los valores del usuario sólo se muestran a través de escaparHTML.
183	    salida.innerHTML =
184	      `<div class="comparativa">` +
185	      `<div>${pintarReglas(`Usuario: "${usuario}"`, validarUsuario(usuario))}</div>` +
186	      `<div>${pintarReglas(`Edad: "${edad}"`, validarEdad(edad))}</div>` +
187	      `</div>`;
188	  });
189	}
190	
191	function iniciarSalida() {
192	  const area = document.getElementById("comentario");
193	  const iframe = document.getElementById("vista-insegura");
194	  const analisis = document.getElementById("analisis-inseguro");
195	  const vistaSegura = document.getElementById("vista-segura");
196	  const codigoSeguro = document.getElementById("codigo-seguro");
197	
198	  function publicar() {
199	    const texto = area.value;
200	
201	    // Panel inseguro: el texto se trata como HTML, dentro de un iframe
202	    // con sandbox vacío (sin scripts, sin formularios, origen opaco).
203	    iframe.srcdoc = `<!doctype html><meta charset="utf-8"><body style="font-family:sans-serif;margin:8px">${texto}</body>`;
204	
205	    const hallazgos = analizarHTML(texto);
206	    if (hallazgos.length === 0) {
207	      analisis.innerHTML = "<p>El navegador no ha creado ninguna etiqueta: aquí no hay diferencia visible.</p>";
208	    } else {
209	      const items = hallazgos.map((h) => {
210	        const detalle = h.peligros.length
211	          ? ` <span class="alerta">⚠ ${h.peligros.map(escaparHTML).join("; ")}</span>`
212	          : " (sólo formato)";
213	        return `<li>Ha creado un elemento <code>&lt;${escaparHTML(h.etiqueta)}&gt;</code>${detalle}</li>`;
214	      }).join("");
215	      analisis.innerHTML = `<p><strong>El dato se ha convertido en código:</strong></p><ul>${items}</ul>`;
216	    }
217	
218	    // Panel seguro: textContent nunca interpreta etiquetas.
219	    vistaSegura.textContent = texto;
```

</details>

**🔧 Herramienta `Edit`**

```json
{
  "replace_all": false,
  "file_path": "<HOME>\\Documents\\PuestaEnProduccion\\Ut1\\trabajo\\js\\demo.js",
  "old_string": "    // Panel inseguro: el texto se trata como HTML, dentro de un iframe\n    // con sandbox vacío (sin scripts, sin formularios, origen opaco).\n    iframe.srcdoc = `<!doctype html><meta charset=\"utf-8\"><body style=\"font-family:sans-serif;margin:8px\">${texto}</body>`;",
  "new_string": "    // Panel inseguro: el texto se trata como HTML, dentro de un iframe con sandbox vacío\n    // (sin scripts, sin formularios, origen opaco). El sandbox NO bloquea las peticiones de red,\n    // así que además se añade una CSP que impide cargar nada externo. Si alguien quitara o\n    // relajara el atributo sandbox en index.html, no se escribe nada en el iframe.\n    if (!iframe.hasAttribute(\"sandbox\") || iframe.sandbox.length > 0) {\n      iframe.removeAttribute(\"srcdoc\");\n      analisis.textContent = \"Vista insegura desactivada: el iframe ha perdido su sandbox vacío.\";\n      return;\n    }\n    iframe.srcdoc =\n      `<!doctype html><meta charset=\"utf-8\">` +\n      `<meta http-equiv=\"Content-Security-Policy\" content=\"default-src 'none'; style-src 'unsafe-inline'\">` +\n      `<body style=\"font-family:sans-serif;margin:8px\">${texto}</body>`;"
}
```

**🔧 Herramienta `Edit`**

```json
{
  "replace_all": false,
  "file_path": "<HOME>\\Documents\\PuestaEnProduccion\\Ut1\\trabajo\\js\\demo.js",
  "old_string": "          : \" (sólo formato)\";",
  "new_string": "          : \" (no se ha detectado nada conocido, pero esta comprobación es una lista incompleta, no un sanitizador)\";"
}
```

<details><summary>Resultado de herramienta</summary>

```
The file <HOME>\Documents\PuestaEnProduccion\Ut1\trabajo\js\demo.js has been updated successfully.
```

</details>

<details><summary>Resultado de herramienta</summary>

```
The file <HOME>\Documents\PuestaEnProduccion\Ut1\trabajo\js\demo.js has been updated successfully.
```

</details>

**🔧 Herramienta `Bash`**

```json
{
  "command": "cd \"<HOME>/Documents/PuestaEnProduccion/Ut1/trabajo\" && sed -i 's/  module.exports = { validarUsuario, validarEdad, escaparHTML, sha256, pbkdf2, PBKDF2_ITERACIONES };/  module.exports = {\\n    validarUsuario, validarEdad, esUsuarioValido, esEdadValida,\\n    escaparHTML, sha256, pbkdf2, PBKDF2_ITERACIONES, PBKDF2_MAX_ITERACIONES,\\n  };/' js/demo.js && tail -6 js/demo.js && sed -i 's#  <link rel=\"stylesheet\" href=\"css/estilos.css\">#  <meta http-equiv=\"Content-Security-Policy\" content=\"default-src '\"'\"'self'\"'\"'; script-src '\"'\"'self'\"'\"'; style-src '\"'\"'self'\"'\"' '\"'\"'unsafe-inline'\"'\"'; img-src '\"'\"'self'\"'\"' data:; frame-src '\"'\"'self'\"'\"'; object-src '\"'\"'none'\"'\"'; base-uri '\"'\"'none'\"'\"'; form-action '\"'\"'none'\"'\"'\">\\n  <link rel=\"stylesheet\" href=\"css/estilos.css\">#' index.html && grep -n \"Content-Security\" index.html",
  "description": "Update exports and add CSP meta to index.html"
}
```

<details><summary>Resultado de herramienta</summary>

```
if (typeof module !== "undefined") {
  module.exports = {
    validarUsuario, validarEdad, esUsuarioValido, esEdadValida,
    escaparHTML, sha256, pbkdf2, PBKDF2_ITERACIONES, PBKDF2_MAX_ITERACIONES,
  };
}
8:  <meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; frame-src 'self'; object-src 'none'; base-uri 'none'; form-action 'none'">
```

</details>

**🔧 Herramienta `Edit`**

```json
{
  "replace_all": false,
  "file_path": "<HOME>\\Documents\\PuestaEnProduccion\\Ut1\\trabajo\\tests\\demo.test.js",
  "old_string": "const { validarUsuario, validarEdad, escaparHTML, sha256, pbkdf2 } = require(\"../js/demo.js\");\n\nconst acepta = (reglas) => reglas.every((r) => r.ok);\n\ntest(\"validarUsuario acepta nombres de la lista blanca\", () => {\n  for (const v of [\"ana\", \"ana_garcia\", \"user_2024\", \"a\".repeat(20)]) {\n    assert.equal(acepta(validarUsuario(v)), true, v);\n  }\n});\n\ntest(\"validarUsuario rechaza entradas fuera de la lista blanca\", () => {\n  for (const v of [\"\", \"ab\", \"a\".repeat(21), \"Ana\", \"josé\", \"ana garcia\", \" ana\", \"<script>\", \"ana'--\", \"ana;rm\"]) {\n    assert.equal(acepta(validarUsuario(v)), false, JSON.stringify(v));\n  }\n});\n\ntest(\"validarEdad acepta enteros en rango, incluidos los límites\", () => {\n  for (const v of [\"14\", \"17\", \"120\"]) assert.equal(acepta(validarEdad(v)), true, v);\n});\n\ntest(\"validarEdad rechaza fuera de rango y formatos no enteros\", () => {\n  for (const v of [\"\", \"13\", \"121\", \"-5\", \"17.5\", \" 17\", \"1e2\", \"0x20\", \"abc\", \"9999\"]) {\n    assert.equal(acepta(validarEdad(v)), false, JSON.stringify(v));\n  }\n});",
  "new_string": "const {\n  esUsuarioValido, esEdadValida, escaparHTML, sha256, pbkdf2, PBKDF2_MAX_ITERACIONES,\n} = require(\"../js/demo.js\");\n\ntest(\"esUsuarioValido acepta nombres de la lista blanca\", () => {\n  for (const v of [\"ana\", \"ana_garcia\", \"user_2024\", \"a\".repeat(20)]) {\n    assert.equal(esUsuarioValido(v), true, v);\n  }\n});\n\ntest(\"esUsuarioValido rechaza entradas fuera de la lista blanca\", () => {\n  for (const v of [\"\", \"ab\", \"a\".repeat(21), \"Ana\", \"josé\", \"ana garcia\", \" ana\", \"ana\\n\", \"<script>\", \"ana'--\", \"ana;rm\"]) {\n    assert.equal(esUsuarioValido(v), false, JSON.stringify(v));\n  }\n});\n\ntest(\"esUsuarioValido y esEdadValida rechazan valores que no son cadenas (hallazgo SE-2 de sharp-edges)\", () => {\n  for (const v of [undefined, null, [\"ana\"], 17, { toString: () => \"ana\" }]) {\n    assert.equal(esUsuarioValido(v), false, String(v));\n    assert.equal(esEdadValida(v), false, String(v));\n  }\n});\n\ntest(\"esEdadValida acepta enteros en rango, incluidos los límites\", () => {\n  for (const v of [\"14\", \"17\", \"120\"]) assert.equal(esEdadValida(v), true, v);\n});\n\ntest(\"esEdadValida rechaza fuera de rango y formatos no enteros\", () => {\n  for (const v of [\"\", \"13\", \"121\", \"-5\", \"17.5\", \" 17\", \"1e2\", \"0x20\", \"abc\", \"9999\"]) {\n    assert.equal(esEdadValida(v), false, JSON.stringify(v));\n  }\n});"
}
```

**🔧 Herramienta `Edit`**

```json
{
  "replace_all": false,
  "file_path": "<HOME>\\Documents\\PuestaEnProduccion\\Ut1\\trabajo\\tests\\demo.test.js",
  "old_string": "  for (const n of [0, -1, 1.5, NaN]) {\n    await assert.rejects(pbkdf2(\"x\", new Uint8Array(16), n), RangeError, String(n));\n  }\n});",
  "new_string": "  for (const n of [0, -1, 1.5, NaN, PBKDF2_MAX_ITERACIONES + 1]) {\n    await assert.rejects(pbkdf2(\"x\", new Uint8Array(16), n), RangeError, String(n));\n  }\n});\n\ntest(\"sha256 y pbkdf2 rechazan contraseñas que no son cadenas (hallazgo SE-9 de sharp-edges)\", async () => {\n  for (const v of [undefined, null, 123]) {\n    await assert.rejects(sha256(v), TypeError, String(v));\n    await assert.rejects(pbkdf2(v, new Uint8Array(16), 1), TypeError, String(v));\n  }\n});"
}
```

**🔧 Herramienta `Bash`**

```json
{
  "command": "cd \"<HOME>/Documents/PuestaEnProduccion/Ut1/trabajo\" && node --test tests/demo.test.js 2>&1 | grep -E \"^(✔|✖|ℹ (pass|fail))\"",
  "description": "Run updated unit tests"
}
```

<details><summary>Resultado de herramienta</summary>

```
The file <HOME>\Documents\PuestaEnProduccion\Ut1\trabajo\tests\demo.test.js has been updated successfully. (file state is current in your context — no need to Read it back)
```

</details>

<details><summary>Resultado de herramienta</summary>

```
The file <HOME>\Documents\PuestaEnProduccion\Ut1\trabajo\tests\demo.test.js has been updated successfully. (file state is current in your context — no need to Read it back)
```

</details>

<details><summary>Resultado de herramienta</summary>

```
✔ esUsuarioValido acepta nombres de la lista blanca (0.8581ms)
✔ esUsuarioValido rechaza entradas fuera de la lista blanca (0.1728ms)
✔ esUsuarioValido y esEdadValida rechazan valores que no son cadenas (hallazgo SE-2 de sharp-edges) (0.7467ms)
✔ esEdadValida acepta enteros en rango, incluidos los límites (0.1879ms)
✔ esEdadValida rechaza fuera de rango y formatos no enteros (0.1528ms)
✔ escaparHTML codifica los cinco caracteres especiales (0.157ms)
✔ sha256 coincide con el vector de prueba de FIPS 180-2 ('abc') (7.0385ms)
✔ pbkdf2 coincide con el vector de prueba de RFC 7914 §11 (passwd/salt/c=1) (1.2623ms)
✔ pbkdf2 con sales distintas produce hashes distintos (0.9394ms)
✔ pbkdf2 rechaza un número de iteraciones no válido (0.608ms)
✔ sha256 y pbkdf2 rechazan contraseñas que no son cadenas (hallazgo SE-9 de sharp-edges) (0.2166ms)
ℹ pass 11
ℹ fail 0
```

</details>

**🔧 Herramienta `Bash`**

```json
{
  "command": "S=\"<HOME>/AppData/Local/Temp/claude/<carpeta-de-proyecto>/75fcebbd-e713-46f3-8f12-2de71489e93c/scratchpad\"; cat > \"$S/servidor.js\" <<'EOF'\nconst http=require(\"http\"),fs=require(\"fs\"),path=require(\"path\");\nconst raiz=process.argv[2], arnes=process.argv[3];\nconst tipos={\".html\":\"text/html; charset=utf-8\",\".css\":\"text/css\",\".js\":\"text/javascript\",\".md\":\"text/markdown\"};\nhttp.createServer((req,res)=>{let u=decodeURIComponent(req.url.split(\"?\")[0]);\n const f=u===\"/__prueba.html\"?arnes:path.join(raiz,u===\"/\"?\"index.html\":u);\n if(!path.resolve(f).startsWith(path.resolve(raiz))&&f!==arnes){res.writeHead(403);return res.end();}\n fs.readFile(f,(e,d)=>{if(e){res.writeHead(404);return res.end(\"404\")}res.writeHead(200,{\"content-type\":tipos[path.extname(f)]||\"application/octet-stream\"});res.end(d)})}).listen(8765,\"127.0.0.1\");\nEOF\ncat > \"$S/arnes.html\" <<'EOF'\n<!doctype html><meta charset=\"utf-8\"><body><iframe id=\"f\" src=\"/index.html\" style=\"width:1200px;height:3000px\"></iframe><pre id=\"r\"></pre>\n<script>\nconst espera=(ms)=>new Promise(r=>setTimeout(r,ms));\nf.onload=async()=>{const d=f.contentDocument,w=f.contentWindow,out={};\n try{\n out.cspErrores=0; w.addEventListener(\"securitypolicyviolation\",e=>{out.cspErrores++;out.ultimaViolacion=e.violatedDirective+\" \"+e.blockedURI});\n // Demo 1\n d.getElementById(\"usuario\").value=\"<script>\"; d.getElementById(\"edad\").value=\"17\";\n d.getElementById(\"form-validacion\").requestSubmit(); out.demo1=d.getElementById(\"resultado-validacion\").innerText.replace(/\\s+/g,\" \").slice(0,200);\n // Demo 2: varios payloads\n const area=d.getElementById(\"comentario\"), pub=d.getElementById(\"boton-publicar\"), an=d.getElementById(\"analisis-inseguro\");\n out.demo2={};\n for(const p of ['<svg><script>alert(1)<\\/script></svg>','<a href=\"jav&#x09;ascript:alert(1)\">x</a>','<iframe srcdoc=\"hola\"></iframe>','<b>hola</b>','<img src=x onerror=\"alert(1)\">']){area.value=p;pub.click();out.demo2[p]=an.innerText.replace(/\\s+/g,\" \").slice(0,160)}\n out.vistaSegura=d.getElementById(\"vista-segura\").textContent; out.srcdocTieneCSP=d.getElementById(\"vista-insegura\").srcdoc.includes(\"Content-Security-Policy\");\n // Demo 3\n d.getElementById(\"boton-hash\").click(); for(let i=0;i<60&&d.getElementById(\"boton-hash\").disabled;i++) await espera(250);\n out.demo3=d.getElementById(\"resultado-hash\").innerText.replace(/\\s+/g,\" \").slice(0,400);\n // Glosario\n const b=d.getElementById(\"buscar-termino\"); b.value=\"sal\"; b.dispatchEvent(new Event(\"input\"));\n out.glosarioVisibles=[...d.querySelectorAll(\"#lista-glosario > div\")].filter(x=>!x.hidden).map(x=>x.querySelector(\"dt\").textContent);\n out.terminos=d.querySelectorAll(\"#lista-glosario dt\").length; out.ideas=d.querySelectorAll(\".idea\").length;\n }catch(e){out.error=String(e)}\n r.textContent=JSON.stringify(out,null,1); document.title=\"LISTO\";};\n</script></body>\nEOF\ncd \"<HOME>/Documents/PuestaEnProduccion/Ut1/trabajo\" && (node \"$S/servidor.js\" \"$PWD\" \"$S/arnes.html\" & echo $! > \"$S/srv.pid\"); sleep 1; CH=\"/c/Program Files/Google/Chrome/Application/chrome.exe\"; \"$CH\" --headless=new --disable-gpu --user-data-dir=\"$S/c-arnes\" --virtual-time-budget=30000 --dump-dom \"http://127.0.0.1:8765/__prueba.html\" 2>/dev/null | sed -n '/<pre id=\"r\">/,/<\\/pre>/p' | sed 's/&lt;/</g;s/&gt;/>/g;s/&amp;/\\&/g;s/&quot;/\"/g'; kill $(cat \"$S/srv.pid\") 2>/dev/null",
  "description": "Run browser test harness over local HTTP server",
  "timeout": 120000
}
```

<details><summary>Resultado de herramienta</summary>

```
<html><head><meta charset="utf-8"><title>LISTO</title></head><body><iframe id="f" src="/index.html" style="width:1200px;height:3000px"></iframe><pre id="r">{
 "cspErrores": 1,
 "demo1": "Usuario: \"<script>\" Tiene entre 3 y 20 caracteres (tiene 8) Sólo usa a-z, 0-9 o _ (lista blanca) Rechazado Edad: \"17\" Es un número entero sin signos, espacios ni decimales Está entre 14 y 120 Aceptado",
 "demo2": {
  "<svg><script>alert(1)</script></svg>": "El dato se ha convertido en código: Ha creado un elemento <svg> (no se ha detectado nada conocido, pero esta comprobación es una lista incompleta, no un sanitiz",
  "<a href=\"jav&#x09;ascript:alert(1)\">x</a>": "El dato se ha convertido en código: Ha creado un elemento <a> ⚠ href con esquema javascript: = ejecutaría JavaScript al pulsar",
  "<iframe srcdoc=\"hola\"></iframe>": "El dato se ha convertido en código: Ha creado un elemento <iframe> ⚠ <iframe> puede cargar contenido, redirigir o cambiar la página; atributo srcdoc = incrusta ",
  "<b>hola</b>": "El dato se ha convertido en código: Ha creado un elemento <b> (no se ha detectado nada conocido, pero esta comprobación es una lista incompleta, no un sanitizad",
  "<img src=x onerror=\"alert(1)\">": "El dato se ha convertido en código: Ha creado un elemento <img> ⚠ atributo onerror = ejecutaría JavaScript"
 },
 "vistaSegura": "<img src=x onerror=\"alert(1)\">",
 "srcdocTieneCSP": true,
 "ultimaViolacion": "script-src-attr inline",
 "demo3": "",
 "glosarioVisibles": [
  "ASLR",
  "Codificación de salida",
  "Sal (salt)"
 ],
 "terminos": 22,
 "ideas": 7
}</pre>
```

</details>

**🔧 Herramienta `Bash`**

```json
{
  "command": "S=\"<HOME>/AppData/Local/Temp/claude/<carpeta-de-proyecto>/75fcebbd-e713-46f3-8f12-2de71489e93c/scratchpad\"; sed -i 's/slice(0,160)/slice(0,400)/; s/i<60\\&\\&/i<200\\&\\&/' \"$S/arnes.html\"; cd \"<HOME>/Documents/PuestaEnProduccion/Ut1/trabajo\" && (node \"$S/servidor.js\" \"$PWD\" \"$S/arnes.html\" & echo $! > \"$S/srv.pid\"); sleep 1; CH=\"/c/Program Files/Google/Chrome/Application/chrome.exe\"; \"$CH\" --headless=new --disable-gpu --user-data-dir=\"$S/c-arnes2\" --timeout=20000 --dump-dom \"http://127.0.0.1:8765/__prueba.html\" 2>/dev/null | sed -n '/<pre id=\"r\">/,/<\\/pre>/p' | sed 's/&lt;/</g;s/&gt;/>/g;s/&amp;/\\&/g;s/&quot;/\"/g' | grep -E \"svg|demo3|cspErr|Violacion|title\"; kill $(cat \"$S/srv.pid\") 2>/dev/null",
  "description": "Re-run harness with real-time wait for hash demo",
  "timeout": 120000
}
```

<details><summary>Resultado de herramienta</summary>

```
out.cspErrores=0; w.addEventListener("securitypolicyviolation",e=>{out.cspErrores++;out.ultimaViolacion=e.violatedDirective+" "+e.blockedURI});
 for(const p of ['<svg><script>alert(1)<\/script></svg>','<a href="jav&#x09;ascript:alert(1)">x</a>','<iframe srcdoc="hola"></iframe>','<b>hola</b>','<img src=x onerror="alert(1)">']){area.value=p;pub.click();out.demo2[p]=an.innerText.replace(/\s+/g," ").slice(0,400)}
 out.demo3=d.getElementById("resultado-hash").innerText.replace(/\s+/g," ").slice(0,400);
 r.textContent=JSON.stringify(out,null,1); document.title="LISTO";};
```

</details>

**🔧 Herramienta `Bash`**

```json
{
  "command": "S=\"<HOME>/AppData/Local/Temp/claude/<carpeta-de-proyecto>/75fcebbd-e713-46f3-8f12-2de71489e93c/scratchpad\"; sed -i 's#http.createServer((req,res)=>{#http.createServer((req,res)=>{if(req.url===\"/lento\"){return setTimeout(()=>{res.writeHead(204);res.end()},12000)}#' \"$S/servidor.js\"; sed -i 's#<pre id=\"r\"></pre>#<pre id=\"r\"></pre><img src=\"/lento\" alt=\"\">#' \"$S/arnes.html\"; cd \"<HOME>/Documents/PuestaEnProduccion/Ut1/trabajo\" && (node \"$S/servidor.js\" \"$PWD\" \"$S/arnes.html\" & echo $! > \"$S/srv.pid\"); sleep 1; CH=\"/c/Program Files/Google/Chrome/Application/chrome.exe\"; \"$CH\" --headless=new --disable-gpu --user-data-dir=\"$S/c-arnes3\" --dump-dom \"http://127.0.0.1:8765/__prueba.html\" 2>/dev/null | sed -n '/<pre id=\"r\">/,/<\\/pre>/p' | sed 's/&lt;/</g;s/&gt;/>/g;s/&amp;/\\&/g;s/&quot;/\"/g' | grep -E \"svg|demo3|cspErr|Violacion\"; kill $(cat \"$S/srv.pid\") 2>/dev/null",
  "description": "Delay load event so hash demo finishes before DOM dump",
  "timeout": 120000
}
```

<details><summary>Resultado de herramienta</summary>

```
"cspErrores": 1,
  "<svg><script>alert(1)</script></svg>": "El dato se ha convertido en código: Ha creado un elemento <svg> (no se ha detectado nada conocido, pero esta comprobación es una lista incompleta, no un sanitizador) Ha creado un elemento <script> ⚠ es un bloque de código JavaScript",
 "ultimaViolacion": "script-src-attr inline",
 "demo3": "Función Tiempo por intento Intentos/segundo en tu equipo Resultado SHA-256 sin sal 0.0116 ms ≈ 86.207 df68f64ec5738ae8763372f8a6a9343e1778aef925f9ebf16902d86795226899 PBKDF2-SHA256 600.000 iteraciones 116.8 ms ≈ 8.6 0f4faebeb6a7dda9f3da5bc67c7ceda71aec6f18f6d4a351db9f353cc7a9e929 sal: 2c5cd75619f6f2578998334642253537 PBKDF2 ha sido unas 10.069 veces más lento. Para ti, como usuario, es una espera ",
```

</details>

**🔧 Herramienta `Bash`**

```json
{
  "command": "S=\"<HOME>/AppData/Local/Temp/claude/<carpeta-de-proyecto>/75fcebbd-e713-46f3-8f12-2de71489e93c/scratchpad\"; CH=\"/c/Program Files/Google/Chrome/Application/chrome.exe\"; \"$CH\" --headless=new --disable-gpu --user-data-dir=\"$S/c-file\" --virtual-time-budget=3000 --dump-dom \"file:///<HOME>/Documents/PuestaEnProduccion/Ut1/trabajo/index.html\" 2>/dev/null | grep -o 'id=\"analisis-inseguro\".\\{0,120\\}'",
  "description": "Check page JS still runs from file:// with CSP",
  "timeout": 60000
}
```

<details><summary>Resultado de herramienta</summary>

```
id="analisis-inseguro" class="analisis"><p><strong>El dato se ha convertido en código:</strong></p><ul><li>Ha creado un elemento <code>&lt;im
```

</details>

## 🤖 Claude · 2026-10-26 16:54:19 UTC

Las tres demos funcionan con la CSP activa, tanto por HTTP como desde un fichero local. Ahora exporto las conversaciones de los subagentes y redacto las evidencias.

**🔧 Herramienta `Bash`**

```json
{
  "command": "cd \"<HOME>/Documents/PuestaEnProduccion/Ut1/trabajo\" && P=~/.claude/projects/<proyecto>/75fcebbd-e713-46f3-8f12-2de71489e93c/subagents; T=\"<dato-personal>,<dato-personal>,<dato-personal>,DANIEL~1\"; node herramientas/exportar-conversacion.js $P/agent-a5b8ac828fa86d89c.jsonl conversaciones-ia/02-prueba-skill-propia-v1.0.md \"Conversación 02 · Prueba de la skill propia v1.0 (conversación nueva, subagente de Claude Code)\" \"$T\" && node herramientas/exportar-conversacion.js $P/agent-a3ce08b14cd30ec00.jsonl conversaciones-ia/03-aplicacion-skill-publica-sharp-edges.md \"Conversación 03 · Aplicación de la skill pública sharp-edges a js/demo.js (subagente de Claude Code)\" \"$T\" && node herramientas/exportar-conversacion.js $P/agent-a6f937fa09c7d7e74.jsonl conversaciones-ia/04-prueba-skill-propia-v1.1.md \"Conversación 04 · Segunda prueba de la skill propia, v1.1 (conversación nueva, subagente de Claude Code)\" \"$T\" && wc -c conversaciones-ia/*.md && grep -l -i -E \"<dato-personal>|<dato-personal>|<dato-personal>|DANIEL~1|C:\\\\\\\\Users|/c/Users\" conversaciones-ia/*.md; echo \"fugas: $?\"; cat $P/agent-a5b8ac828fa86d89c.meta.json",
  "description": "Export subagent conversations and scan for leaks"
}
```

<details><summary>Resultado de herramienta</summary>

```
Escrito conversaciones-ia/02-prueba-skill-propia-v1.0.md
Escrito conversaciones-ia/03-aplicacion-skill-publica-sharp-edges.md
Escrito conversaciones-ia/04-prueba-skill-propia-v1.1.md
 31697 conversaciones-ia/00-claude-code-plan-inicial.md
 20348 conversaciones-ia/02-prueba-skill-propia-v1.0.md
 48189 conversaciones-ia/03-aplicacion-skill-publica-sharp-edges.md
 13611 conversaciones-ia/04-prueba-skill-propia-v1.1.md
113845 total
fugas: 1
{"agentType":"general-purpose","launchedWithDefaults":true,"description":"Probar skill propia en contexto nuevo","toolUseId":"toolu_01MHzVQufbmxqpbX3AWtGohD","spawnDepth":1,"requestShape":"background","requestNonInteractive":true,"finished":true}
```

</details>

**🔧 Herramienta `Bash`**

```json
{
  "command": "cd \"<HOME>/Documents/PuestaEnProduccion/Ut1/trabajo\" && for f in conversaciones-ia/0[234]*.md; do echo \"== $f\"; grep -A3 \"Herramienta\" \"$f\" | grep -E '\"(file_path|pattern|command)\"' ; grep -c \"## 🤖\" \"$f\"; done",
  "description": "List which files each subagent read"
}
```

<details><summary>Resultado de herramienta (error)</summary>

```
Exit code 1
== conversaciones-ia/02-prueba-skill-propia-v1.0.md
0
== conversaciones-ia/03-aplicacion-skill-publica-sharp-edges.md
0
== conversaciones-ia/04-prueba-skill-propia-v1.1.md
0
```

</details>

**🔧 Herramienta `Bash`**

```json
{
  "command": "cd \"<HOME>/Documents/PuestaEnProduccion/Ut1/trabajo\" && grep -n \"^## \\|^\\*\\*\" conversaciones-ia/02-*.md | head -20; P=~/.claude/projects/<proyecto>/75fcebbd-e713-46f3-8f12-2de71489e93c/subagents; node -e 'const l=require(\"fs\").readFileSync(process.argv[1],\"utf8\").split(\"\\n\").filter(Boolean).map(JSON.parse);for(const e of l){const c=e.message&&e.message.content;console.log(e.type, Array.isArray(c)?c.map(x=>x.type+(x.name?\":\"+x.name:\"\")).join(\",\"):typeof c)}' $P/agent-a5b8ac828fa86d89c.jsonl",
  "description": "Inspect subagent transcript event types"
}
```

<details><summary>Resultado de herramienta</summary>

```
7:## 👤 Usuario · 2026-10-26 16:47:10 UTC
17:**🔧 Herramienta `Read`**
25:**🔧 Herramienta `Read`**
146:**🔧 Herramienta `SubagentHandback`**
user string
attachment undefined
attachment undefined
user string
attachment undefined
attachment undefined
attachment undefined
attachment undefined
attachment undefined
attachment undefined
attachment undefined
api-request-shape undefined
api-request-blob text,text,text,text
api-request-blob text,tool_addition,tool_addition,tool_addition
api-request undefined
assistant tool_use:Read
assistant tool_use:Read
user tool_result
user tool_result
attachment undefined
attachment undefined
attachment undefined
attachment undefined
attachment undefined
api-request-blob text
api-request undefined
assistant thinking
assistant tool_use:SubagentHandback
user tool_result
```

</details>

**🔧 Herramienta `Bash`**

```json
{
  "command": "cd \"<HOME>/Documents/PuestaEnProduccion/Ut1/trabajo\" && sed -n '146,152p' conversaciones-ia/02-*.md | cut -c1-200; sed -n '17,24p' conversaciones-ia/02-*.md",
  "description": "Inspect SubagentHandback input shape"
}
```

<details><summary>Resultado de herramienta</summary>

~~~~
**🔧 Herramienta `SubagentHandback`**

~~~~json
{
  "message": "## Resumen\nHe analizado 9 flujos. 6 tienen problemas y 3 están bien protegidos. El más grave es la inyección de comandos en `/ping`, que permite ejecutar órdenes en el servidor. Le 
}
~~~~
**🔧 Herramienta `Read`**

```json
{
  "file_path": "<HOME>\\Documents\\PuestaEnProduccion\\Ut1\\trabajo\\skills\\revision-entradas-salidas\\SKILL.md"
}
```
~~~~

</details>

**🔧 Herramienta `Edit`**

```json
{
  "replace_all": false,
  "file_path": "<HOME>\\Documents\\PuestaEnProduccion\\Ut1\\trabajo\\herramientas\\exportar-conversacion.js",
  "old_string": "      } else if (p.type === \"tool_use\") {\n        partes.push(",
  "new_string": "      } else if (p.type === \"tool_use\" && p.name === \"SubagentHandback\" && typeof p.input?.message === \"string\") {\n        // Informe final que un subagente devuelve a la sesión principal.\n        partes.push(`## 🤖 Claude · informe final · ${hora}`, \"\", rebajar(p.input.message), \"\");\n      } else if (p.type === \"tool_use\") {\n        partes.push("
}
```

**🔧 Herramienta `Bash`**

```json
{
  "command": "cd \"<HOME>/Documents/PuestaEnProduccion/Ut1/trabajo\" && P=~/.claude/projects/<proyecto>/75fcebbd-e713-46f3-8f12-2de71489e93c/subagents; T=\"<dato-personal>,<dato-personal>,<dato-personal>,DANIEL~1\"; node herramientas/exportar-conversacion.js $P/agent-a5b8ac828fa86d89c.jsonl conversaciones-ia/02-prueba-skill-propia-v1.0.md \"Conversación 02 · Prueba de la skill propia v1.0 (conversación nueva, subagente de Claude Code)\" \"$T\" && node herramientas/exportar-conversacion.js $P/agent-a3ce08b14cd30ec00.jsonl conversaciones-ia/03-aplicacion-skill-publica-sharp-edges.md \"Conversación 03 · Aplicación de la skill pública sharp-edges a js/demo.js (subagente de Claude Code)\" \"$T\" && node herramientas/exportar-conversacion.js $P/agent-a6f937fa09c7d7e74.jsonl conversaciones-ia/04-prueba-skill-propia-v1.1.md \"Conversación 04 · Segunda prueba de la skill propia, v1.1 (conversación nueva, subagente de Claude Code)\" \"$T\" && grep -n \"informe final\\|file_path\\|\\\"pattern\\\"\" conversaciones-ia/0[234]*.md | cut -c1-160",
  "description": "Re-export subagent conversations with readable final report"
}
```

<details><summary>Resultado de herramienta</summary>

```
The file <HOME>\Documents\PuestaEnProduccion\Ut1\trabajo\herramientas\exportar-conversacion.js has been updated successfully. (file state is current in your context — no need to Read it back)
```

</details>

<details><summary>Resultado de herramienta</summary>

```
Escrito conversaciones-ia/02-prueba-skill-propia-v1.0.md
Escrito conversaciones-ia/03-aplicacion-skill-publica-sharp-edges.md
Escrito conversaciones-ia/04-prueba-skill-propia-v1.1.md
conversaciones-ia/02-prueba-skill-propia-v1.0.md:21:  "file_path": "<HOME>\\Documents\\PuestaEnProduccion\\Ut1\\trabajo\\skills\\revision-entradas-salidas\\SKIL
conversaciones-ia/02-prueba-skill-propia-v1.0.md:29:  "file_path": "<HOME>\\Documents\\PuestaEnProduccion\\Ut1\\trabajo\\evidencias\\prueba-skill\\entrada.py"
conversaciones-ia/02-prueba-skill-propia-v1.0.md:146:## 🤖 Claude · informe final · 2026-10-26 16:48:48 UTC
conversaciones-ia/03-aplicacion-skill-publica-sharp-edges.md:26:  "file_path": "<HOME>\\AppData\\Local\\Temp\\claude\\<carpeta-de-proyecto>\\75fcebbd-e713-46f3-
conversaciones-ia/03-aplicacion-skill-publica-sharp-edges.md:118:  "file_path": "<HOME>\\Documents\\PuestaEnProduccion\\Ut1\\trabajo\\js\\demo.js"
conversaciones-ia/03-aplicacion-skill-publica-sharp-edges.md:236:  "pattern": "references/*",
conversaciones-ia/03-aplicacion-skill-publica-sharp-edges.md:255:  "pattern": "iframe|sandbox|Content-Security|<script|data-ejemplo|id=\"(clave|comentario|form-
conversaciones-ia/03-aplicacion-skill-publica-sharp-edges.md:283:  "file_path": "<HOME>\\AppData\\Local\\Temp\\claude\\<carpeta-de-proyecto>\\75fcebbd-e713-46f3
conversaciones-ia/03-aplicacion-skill-publica-sharp-edges.md:443:  "file_path": "<HOME>\\AppData\\Local\\Temp\\claude\\<carpeta-de-proyecto>\\75fcebbd-e713-46f3
conversaciones-ia/03-aplicacion-skill-publica-sharp-edges.md:594:  "file_path": "<HOME>\\AppData\\Local\\Temp\\claude\\<carpeta-de-proyecto>\\75fcebbd-e713-46f3
conversaciones-ia/03-aplicacion-skill-publica-sharp-edges.md:751:  "pattern": "**/*.{js,html}",
conversaciones-ia/03-aplicacion-skill-publica-sharp-edges.md:770:  "file_path": "<HOME>\\Documents\\PuestaEnProduccion\\Ut1\\trabajo\\index.html",
conversaciones-ia/03-aplicacion-skill-publica-sharp-edges.md:807:  "file_path": "<HOME>\\Documents\\PuestaEnProduccion\\Ut1\\trabajo\\tests\\demo.test.js"
conversaciones-ia/03-aplicacion-skill-publica-sharp-edges.md:876:## 🤖 Claude · informe final · 2026-10-26 16:51:17 UTC
conversaciones-ia/04-prueba-skill-propia-v1.1.md:21:  "file_path": "<HOME>\\Documents\\PuestaEnProduccion\\Ut1\\trabajo\\skills\\revision-entradas-salidas\\SKIL
conversaciones-ia/04-prueba-skill-propia-v1.1.md:92:  "file_path": "<HOME>\\Documents\\PuestaEnProduccion\\Ut1\\trabajo\\evidencias\\prueba-skill\\entrada2.js"
conversaciones-ia/04-prueba-skill-propia-v1.1.md:131:## 🤖 Claude · informe final · 2026-10-26 16:50:57 UTC
```

</details>

**🔧 Herramienta `Write`**

```json
{
  "file_path": "<HOME>\\Documents\\PuestaEnProduccion\\Ut1\\trabajo\\evidencias\\skill-publica.md",
  "content": "# Skill pública: `sharp-edges` (Trail of Bits)\n\n## 1. Identificación\n\n| Campo | Valor |\n|---|---|\n| Nombre | `sharp-edges` (\"aristas cortantes\"), dentro del plugin del mismo nombre |\n| Autor | Trail of Bits, empresa de auditoría de seguridad |\n| Fuente original | https://github.com/trailofbits/skills/tree/main/plugins/sharp-edges/skills/sharp-edges |\n| Fichero principal | [`SKILL.md`](https://github.com/trailofbits/skills/blob/main/plugins/sharp-edges/skills/sharp-edges/SKILL.md) (293 líneas) |\n| Versión analizada | Último commit del fichero: `5f0a765`, 29/04/2026 (consultado el 26/10/2026) |\n| Licencia | CC BY-SA 4.0 (según el README del repositorio) |\n| Permisos que pide | `allowed-tools: Read Grep Glob`, es decir, **sólo lectura** |\n\n### Por qué la elegimos\n\nBuscamos en dos repositorios públicos de skills (`anthropics/skills` y `trailofbits/skills`) una skill relacionada con **nuestro tema**, y no sólo con hacer la web. `sharp-edges` trata justo dos principios de la §8.1 de los apuntes: **seguro por defecto** (*secure by default*) y el diseño de interfaces que no inviten al error. Descartamos `insecure-defaults`, del mismo repositorio, porque ahora es un *workflow* que lanza muchos agentes (ver su README), no un SKILL.md que se pueda leer y entender entero. También descartamos `frontend-design`, de Anthropic, porque no tiene que ver con la seguridad.\n\n## 2. Propósito\n\nRevisar **APIs, configuraciones e interfaces** para detectar diseños en los que el camino fácil lleva a un resultado inseguro. Los llama *footguns*: armas con las que es fácil dispararse en el pie. Su idea central es el ***pit of success***: usarlo de forma segura debe ser lo que menos esfuerzo cuesta. Si hay que leer la documentación con lupa para no equivocarse, la API está mal diseñada.\n\n## 3. Tarea concreta para la que se diseñó\n\n- Auditar el diseño de librerías y APIs, sobre todo criptográficas y de autenticación.\n- Revisar esquemas de configuración en busca de opciones peligrosas.\n- **No** está pensada para errores de implementación ni de lógica de negocio. Para eso remite a una revisión de código normal.\n\n### Instrucciones relevantes (resumidas con nuestras palabras)\n\n1. **Seis categorías** de aristas:\n   1. elección de algoritmo, como el `alg: none` de JWT;\n   2. valores por defecto peligrosos (¿qué pasa con `0`, `\"\"` o `null`?);\n   3. APIs de primitivas frente a APIs con tipos semánticos;\n   4. \"precipicios\" de configuración (un valor mal puesto lo rompe todo sin avisar);\n   5. fallos silenciosos;\n   6. seguridad \"a base de cadenas\" (*stringly-typed*).\n2. **Cuatro fases:**\n   1. identificar la superficie;\n   2. probar casos límite (cero, vacío, null, negativos, confusión de tipos);\n   3. modelar a **tres adversarios**: el malicioso (*scoundrel*), el desarrollador vago que copia y pega (*lazy developer*) y el que no entiende la API (*confused developer*);\n   4. validar cada hallazgo reproduciéndolo.\n3. **Tabla de racionalizaciones que hay que rechazar**, por ejemplo \"está documentado\" o \"nadie haría eso\".\n4. **Tabla de gravedad** (Crítica / Alta / Media / Baja) y una **lista de comprobación final** de 8 puntos.\n\n## 4. Aplicación en el proyecto\n\n**Qué hicimos:** aplicamos la skill al fichero [`js/demo.js`](../js/demo.js) de nuestra web. Es justo el código que expone decisiones de seguridad: validadores, codificación HTML, un iframe aislado y funciones de hash.\n\n**Cómo:**\n\n- Descargamos el `SKILL.md` y tres de sus referencias (`lang-javascript.md`, `crypto-apis.md` y `config-patterns.md`) como texto.\n- Las leímos antes de usarlas. Comprobamos que la skill no incluye scripts y que sólo pide herramientas de lectura.\n- Se la pasamos a un subagente de Claude Code en una conversación aparte, con la orden expresa de no ejecutar ni modificar nada. El intercambio completo está en [`conversaciones-ia/03-aplicacion-skill-publica-sharp-edges.md`](../conversaciones-ia/03-aplicacion-skill-publica-sharp-edges.md).\n\n**Resultado: 10 hallazgos.** Para cada uno decidimos si aceptarlo y lo **comprobamos nosotros**, sin fiarnos de la IA:\n\n| # | Hallazgo (categoría) | Gravedad dada | Nuestra decisión | Comprobación |\n|---|---|---|---|---|\n| SE-1 | `validarUsuario` devuelve un array, que en un `if` siempre es verdadero (fallo silencioso) | Alta | **Aceptado.** Añadimos `esUsuarioValido` y `esEdadValida`, que devuelven un booleano, y los tests las usan. | Tests nuevos en verde |\n| SE-2 | `String(valor)` hace que `undefined` pase como el usuario \"undefined\" (valor por defecto peligroso) | Media | **Aceptado.** Si el valor no es una cadena, todas las reglas fallan. | Test con `undefined`, `null`, `[\"ana\"]` y `17`: antes pasaban, ahora se rechazan |\n| SE-3 | `escaparHTML` no sirve para URLs ni para atributos sin comillas, y el comentario decía \"atributo HTML\" sin más (*stringly-typed*) | Media | **Aceptado.** Reescribimos el comentario con los contextos en los que sí es segura. | Contrastado con la OWASP XSS Prevention Cheat Sheet |\n| SE-4 | Plantillas con `innerHTML`: la seguridad depende de no olvidar nunca el escape | Media | **Aceptado en parte.** Añadimos una **Content-Security-Policy** a `index.html` como defensa en profundidad. **Rechazamos** reescribir todo con `createElement`: todas las interpolaciones actuales están escapadas (la propia skill lo confirma) y el código perdería legibilidad para los compañeros. | Prueba en Chrome: la página funciona con la CSP y no hay violaciones en la página principal |\n| SE-5 | `analizarHTML` es una lista negra que no detecta `<svg><script>` ni `jav&#x09;ascript:`, y decía \"sólo formato\" (fallo silencioso) | Media | **Aceptado.** Usamos `localName`, comprobamos el protocolo con `new URL()`, marcamos `iframe`, `srcdoc`, `base`, `meta`, `form`, etc., y el mensaje ahora avisa de que es una lista incompleta. | **Verificado en Chrome antes de corregir:** `tagName` de un script SVG es `\"script\"` en minúsculas, la expresión regular antigua no detectaba el tabulador y `new URL()` sí devuelve `javascript:`. Después de corregir, el arnés de pruebas detecta las tres cargas. |\n| SE-6 | El `srcdoc` sólo es seguro gracias a `sandbox=\"\"` en otro fichero, y el sandbox no bloquea las peticiones de red (precipicio de configuración) | Alta por diseño, Baja real | **Aceptado.** El JS comprueba que el sandbox sigue vacío antes de escribir, y el `srcdoc` lleva su propia CSP `default-src 'none'`. | Arnés en Chrome: el `srcdoc` contiene la CSP y el `onerror` queda bloqueado (aparece la violación `script-src-attr`) |\n| SE-7 | `iteraciones` admite 1 y no tiene máximo | Media | **Aceptado en parte.** Añadimos un máximo de 10 millones. **Mantenemos el mínimo de 1** porque hace falta para comprobar el vector de prueba del RFC 7914 (c = 1); queda documentado en un comentario. | Test con `MAX + 1` → `RangeError` |\n| SE-8 | La sal es una primitiva: se aceptan sales cortas o constantes y no hay función de verificación | Media | **Rechazado**, con un comentario explicativo. No es una API para guardar contraseñas, sino una comparación didáctica. Exigir 16 bytes impediría usar el vector oficial (sal `\"salt\"`, 4 bytes). | — |\n| SE-9 | `sha256(undefined)` da el mismo resultado que `sha256(\"\")` (valor por defecto peligroso) | Alta | **Aceptado.** Si la entrada no es una cadena, se lanza `TypeError`. | Test nuevo |\n| SE-10 | `sha256` se exporta sin advertencia | Baja | **Aceptado.** Añadimos el comentario \"SÓLO PARA LA DEMO\". | — |\n\n## 5. Valoración crítica: qué aporta y qué límites tiene\n\n**Lo que aporta:**\n\n- **Nos obligó a pensar como el \"desarrollador vago\".** Nuestra demo era correcta *tal y como la usamos*, pero no si alguien la reutiliza. Sin la skill no habríamos visto SE-1 (un array siempre es verdadero en un `if`) ni SE-2 (`\"undefined\"` pasa la lista blanca), y los dos son errores reales que podríamos cometer en otro proyecto.\n- **Encontró dos fallos verificables en nuestra lista de detección (SE-5)**, que habrían dado a los compañeros una falsa sensación de seguridad. Encaja con lo que queremos enseñar: una lista negra siempre tiene huecos.\n- **Ilustra la §8.1 de los apuntes con ejemplos concretos** (*secure by default*) y la idea de defensa en profundidad (SE-6: no depender de un único atributo).\n\n**Límites y riesgos que revisamos:**\n\n- **Encaje imperfecto.** Está pensada para librerías y APIs, no para una página didáctica cuyo único consumidor es ella misma. Por eso el subagente tuvo que dar dos gravedades (por diseño y real), y varias referencias (YAML, variables de entorno, cifrado) no aplicaban.\n- **No tiene categorías para el DOM.** No contempla `innerHTML`, CSP ni sandbox, y los hallazgos web se forzaron a encajar en las categorías 4, 5 y 6. Para la web, la OWASP XSS Prevention Cheat Sheet sigue siendo más directa.\n- **Contradicción interna.** La fase 4 pide *reproducir* cada fallo, pero la skill sólo permite leer. Las reproducciones del subagente quedaron escritas sin ejecutar, así que **las verificamos nosotros** en Chrome y con los tests de Node.\n- **Riesgo de exceso de celo.** La regla \"rechaza la racionalización *nadie haría eso*\" choca con un código inseguro **a propósito**, como el panel inseguro de la demo 2. Hubo que filtrar: por eso rechazamos SE-8 y parte de SE-4 y SE-7.\n- **Seguridad de la propia skill.** La leímos entera antes de usarla. No contiene scripts y sólo pide `Read Grep Glob`. El plugin incluye un agente (`sharp-edges-analyzer`) que **no** instalamos ni ejecutamos. Tampoco descargamos las referencias de otros lenguajes ni `auth-patterns.md`, porque no aplicaban.\n- **No sustituye a otras herramientas.** No detecta errores de implementación generales; para eso hacen falta SAST, tests y revisión de código (§8.5).\n\n**Conclusión:** de 10 hallazgos aceptamos 7, aceptamos 2 en parte y rechazamos 1, con su justificación. La skill es **útil como lista de preguntas incómodas** sobre el diseño, pero requiere criterio humano para separar el riesgo real del teórico.\n\n## 6. Conversación original\n\n- [`conversaciones-ia/03-aplicacion-skill-publica-sharp-edges.md`](../conversaciones-ia/03-aplicacion-skill-publica-sharp-edges.md): ejecución de la skill sobre `js/demo.js`.\n- [`conversaciones-ia/01-claude-code-produccion.md`](../conversaciones-ia/01-claude-code-produccion.md): búsqueda y elección de la skill, verificación de los hallazgos en Chrome y cambios en el código. Ver la fase 4 de [PROCESO.md](../PROCESO.md).\n"
}
```

<details><summary>Resultado de herramienta</summary>

```
File created successfully at: <HOME>\Documents\PuestaEnProduccion\Ut1\trabajo\evidencias\skill-publica.md (file state is current in your context — no need to Read it back)
```

</details>

## 🤖 Claude · 2026-10-26 16:56:01 UTC

Ya he terminado el análisis de la skill pública. Ahora completo la prueba de la skill propia: resultado obtenido, comparación con el esperado y mejoras.

**🔧 Herramienta `Edit`**

```json
{
  "replace_all": false,
  "file_path": "<HOME>\\Documents\\PuestaEnProduccion\\Ut1\\trabajo\\evidencias\\prueba-skill-propia.md",
  "old_string": "## 3. Resultado obtenido\n\n_Pendiente: se completa tras ejecutar la prueba._\n\n## 4. Comparación\n\n_Pendiente._\n\n## 5. Errores, limitaciones y mejoras\n\n_Pendiente._\n\n## 6. Conversación de origen\n\n_Pendiente._",
  "new_string": "## 3. Resultado obtenido\n\n### Prueba 1 (versión 1.0, `entrada.py`)\n\nLa ejecutó un subagente de Claude Code en una **conversación nueva**, sin acceso a esta conversación ni a este documento. Según el registro, sólo leyó `SKILL.md` y `entrada.py`. Informe completo en [`conversaciones-ia/02-prueba-skill-propia-v1.0.md`](../conversaciones-ia/02-prueba-skill-propia-v1.0.md). Resumen de su tabla:\n\n| # | Fuente (línea) | Destino (línea) | Etiqueta obtenida | Gravedad |\n|---|---|---|---|---|\n| 1 | `nombre` (12) | SQL con f-string (14-15) | FALTA CODIFICACIÓN/PARAMETRIZACIÓN | Alta |\n| 2 | `nombre` (12) | HTML (17) | FALTA CODIFICACIÓN/PARAMETRIZACIÓN | Alta |\n| 3 | `producto`, `precio` de la BD (18) | HTML (19) | FALTA CODIFICACIÓN/PARAMETRIZACIÓN | Alta |\n| 4 | `id_producto` (22-23) | SQL parametrizado (25-26) | CORRECTO | — |\n| 5 | `fila[0]`, `fila[1]` de la BD (25-27) | JSON (28) | CORRECTO | — |\n| 6 | `host` (32) | comando con `shell=True` (33) | FALTA CODIFICACIÓN/PARAMETRIZACIÓN | Alta |\n| 7 | `salida.stdout` (33) | HTML (34) | FALTA CODIFICACIÓN/PARAMETRIZACIÓN | Media |\n| 8 | `usuario`, `clave` (38-39) | `INSERT` parametrizado (42) | CORRECTO | — |\n| 9 | `usuario`, `clave` (38-39) | sin límites de tamaño (40, 42) | FALTA VALIDACIÓN | Baja |\n\nCorrecciones propuestas:\n\n- `?` con `(f\"%{nombre}%\",)` y límite de 100 caracteres;\n- `render_template_string` con autoescape para los flujos 2 y 3;\n- `subprocess.run([\"ping\", \"-c\", \"1\", host], timeout=5)` sin `shell=True`, con validación del host mediante `ipaddress` y una expresión regular;\n- `markupsafe.escape` para el flujo 7;\n- `MAX_CONTENT_LENGTH` y una expresión regular para el usuario.\n\nAdemás:\n\n- **SSDLC:** cita Bandit B608/B602, Semgrep y OWASP ZAP, y propone 5 pruebas de regresión.\n- **Fuera de alcance:** SHA-256 sin sal, `/ping` sin autenticación, falta de CSRF y conexiones sin cerrar.\n- Termina con la frase de limitación.\n\n### Prueba 2 (versión 1.1, `entrada2.js`)\n\nTambién en una conversación nueva, en la que sólo se leyeron `SKILL.md` (1.1) y `entrada2.js`. Informe completo en [`conversaciones-ia/04-prueba-skill-propia-v1.1.md`](../conversaciones-ia/04-prueba-skill-propia-v1.1.md).\n\n| # | Fuente (línea) | Destino (línea) | Etiqueta | Vulnerabilidad | Gravedad |\n|---|---|---|---|---|---|\n| 1 | `req.query.archivo` (11) | `res.sendFile` (12) | FALTA VALIDACIÓN | *Path traversal* | Alta |\n| 2 | `req.params.id` (16) | SQL `db.get` (18) | CORRECTO | — | — |\n| 3 | `nombre`, `bio` de la BD (18) | `res.json` (19) | CORRECTO | — | — |\n| 4 | `req.body.opciones` (23) | `eval` (23) | DATO CONVERTIDO EN CÓDIGO | Inyección de código / RCE | Alta |\n\nCorrecciones propuestas:\n\n- lista blanca `^[\\w-]{1,64}\\.pdf$` y `res.sendFile(archivo, { root: CARPETA })`;\n- quitar `eval` y validar que `opciones` sea un objeto, con `express.json({ limit: \"10kb\" })`.\n\nAdemás:\n\n- **Flujos correctos:** descritos en 1-2 frases.\n- **Herramientas:** las cita con el aviso \"(comprobar en la documentación de la herramienta)\".\n- **Fuera de alcance:** falta de autorización (IDOR) y errores `async` sin capturar.\n\n## 4. Comparación entre lo esperado y lo obtenido\n\n### Prueba 1\n\n| Expectativa | ¿Se cumple? | Comentario |\n|---|---|---|\n| E1 inyección SQL, Alta | ✅ | Corrección idéntica a la esperada. Añade un matiz que no habíamos previsto: los comodines `%` y `_` de `LIKE`. |\n| E2 XSS reflejado, Alta | ✅ | Propone `render_template_string`. **Comprobamos** en la documentación de Flask que activa el autoescape. |\n| E3 XSS almacenado, Media o Alta | ✅ (Alta) | Lo marca como supuesto (\"no sé si el panel filtra\"), tal y como pide la skill. |\n| E4 `id_producto` CORRECTO | ✅ | |\n| E5 inyección de comandos, Alta, con lista de argumentos y validación | ✅ | Añade `timeout` y explica que la validación también impide opciones como `-f`. Mejor de lo esperado. |\n| E6 salida de `ping` en HTML, Baja o Media | ✅ (Media) | Detalle correcto: hace falta `str(escape(...))`. **Comprobado:** `Markup.__radd__` escaparía también `<pre>`. |\n| E7 `usuario` CORRECTO, como mucho validación Baja | ✅ | Lo divide en dos flujos (8 CORRECTO y 9 FALTA VALIDACIÓN Baja). |\n| Límite de longitud / DoS | ✅ | En los flujos 1 y 9. |\n| SHA-256 sólo fuera de alcance | ✅ | |\n| Formato y frase de limitación | ✅ | |\n| Sin cargas de ataque elaboradas | ✅ | Sólo `O'Reilly`, `<b>x</b>` y `127.0.0.1;echo hola`, que son inofensivas. |\n| *(No previsto)* flujo 5 JSON CORRECTO | ➕ | Acierto que no habíamos incluido en lo esperado. |\n\n**Comprobaciones nuestras:**\n\n- Los identificadores **B602** (`subprocess_popen_with_shell_equals_true`) y **B608** (`hardcoded_sql_expressions`) existen en la documentación de Bandit.\n- La opción `root` de `send`/`sendFile` rechaza `..`: lo verificamos en el código fuente de `pillarjs/send`, con la expresión `UP_PATH_REGEXP`.\n\n### Prueba 2\n\n| Expectativa | ¿Se cumple? |\n|---|---|\n| E1 *path traversal*, FALTA VALIDACIÓN, Alta | ✅ |\n| E2 y E3 CORRECTO en una línea | ✅ (1-2 frases; aceptable) |\n| E4 `eval`, DATO CONVERTIDO EN CÓDIGO, Alta | ✅ |\n| Correcciones esperadas (`JSON.parse`/objeto, `root`/`basename`) | ✅ |\n| Autorización sólo fuera de alcance | ✅ |\n| Columna \"Vulnerabilidad\" (novedad de la 1.1) | ✅ |\n| Aviso \"(comprobar…)\" en las reglas de herramientas (novedad de la 1.1) | ✅ |\n\n## 5. Errores, limitaciones y mejoras\n\n**Problemas detectados en la versión 1.0 (prueba 1):**\n\n1. **Faltaba el nombre de la vulnerabilidad.** La etiqueta `FALTA CODIFICACIÓN/PARAMETRIZACIÓN` agrupa SQLi, XSS e inyección de comandos. Para un estudiante es más útil ver también el nombre común, que es el que aparece en el glosario y en OWASP.\n2. **Exceso de longitud.** El informe ocupó unas 200 líneas. Los flujos CORRECTO repetían las cuatro viñetas aunque no hubiera nada que corregir.\n3. **Agrupación de flujos ambigua.** La skill no decía cómo contar los flujos. El modelo agrupó dos fuentes en una fila (flujos 8 y 9) y separó otras. No es incorrecto, pero hace difícil comparar dos ejecuciones.\n4. **Identificadores de herramientas sin aviso.** El informe citaba reglas concretas de Bandit. Estas eran correctas, pero tuvimos que comprobarlas a mano, y es un sitio típico donde una IA puede inventarse algo.\n\n**Mejoras de la versión 1.1** (la 1.0 se conserva en [`prueba-skill/SKILL-v1.0.md`](prueba-skill/SKILL-v1.0.md)):\n\n- Nueva columna **Vulnerabilidad** con el nombre común (problema 1).\n- Los flujos CORRECTO se explican en una línea, y las correcciones compartidas se citan como \"misma corrección que el flujo N\" (problema 2).\n- Regla explícita: **un flujo por par fuente → destino**, con agrupación sólo si comparten destino y corrección (problema 3).\n- Aviso obligatorio \"(comprobar en la documentación de la herramienta)\" en las reglas de herramientas. Además, se añade como criterio de revisión humana (problema 4).\n\n**Resultado de las mejoras (prueba 2):** las cuatro se aplicaron correctamente. El informe bajó a unas 90 líneas para 4 flujos.\n\n**Limitaciones que siguen ahí:**\n\n- Las dos pruebas las hizo **el mismo modelo** (Claude Opus 5.5) que redactó la skill. Convendría probarla con otra IA (por ejemplo, Copilot Chat) para ver si las instrucciones se entienden sin el estilo propio de Claude.\n- Los fragmentos de prueba los escribimos nosotros, con fallos \"de libro\". Con código real y más ambiguo la skill podría equivocarse más.\n- La revisión es estática: las correcciones propuestas **no se han ejecutado**. Las hemos revisado leyendo el código y la documentación oficial, no con pruebas.\n\n## 6. Conversaciones de origen\n\n| Conversación | Contenido |\n|---|---|\n| [`01-claude-code-produccion.md`](../conversaciones-ia/01-claude-code-produccion.md) | Creación de la skill, del caso de prueba y del resultado esperado, análisis de los resultados y redacción de la 1.1. |\n| [`02-prueba-skill-propia-v1.0.md`](../conversaciones-ia/02-prueba-skill-propia-v1.0.md) | Prueba 1 en una conversación distinta. |\n| [`04-prueba-skill-propia-v1.1.md`](../conversaciones-ia/04-prueba-skill-propia-v1.1.md) | Prueba 2 en una conversación distinta. |"
}
```

<details><summary>Resultado de herramienta</summary>

```
The file <HOME>\Documents\PuestaEnProduccion\Ut1\trabajo\evidencias\prueba-skill-propia.md has been updated successfully.
```

</details>

## 🤖 Claude · 2026-10-26 16:56:37 UTC

Antes de dar por comprobada la afirmación sobre Flask, la verifico en la documentación oficial.

**🔧 Herramienta `WebFetch`**

```json
{
  "url": "https://flask.palletsprojects.com/en/stable/templating/",
  "prompt": "Quote exactly what this page says about autoescaping and render_template_string."
}
```

<details><summary>Resultado de herramienta</summary>

~~~~
### Navigation

- [index](https://flask.palletsprojects.com/en/stable/genindex/ "General Index")
- [modules](https://flask.palletsprojects.com/en/stable/py-modindex/ "Python Module Index") |
- [next](https://flask.palletsprojects.com/en/stable/testing/ "Testing Flask Applications") |
- [previous](https://flask.palletsprojects.com/en/stable/tutorial/next/ "Keep Developing!") |
- [Flask Documentation (3.1.x)](https://flask.palletsprojects.com/en/stable/) »
- [Templates]()

# Templates ¶

Flask leverages Jinja as its template engine. You are obviously free to use a different template engine, but you still have to install Jinja to run Flask itself. This requirement is necessary to enable rich extensions. An extension can depend on Jinja being present.

This section only gives a very quick introduction into how Jinja is integrated into Flask. If you want information on the template engine’s syntax itself, head over to the official [Jinja Template Documentation](https://jinja.palletsprojects.com/templates/) for more information.

## Jinja Setup ¶

Unless customized, Jinja is configured by Flask as follows:

- autoescaping is enabled for all templates ending in `.html`, `.htm`, `.xml`, `.xhtml`, as well as `.svg` when using `render_template()`.
- autoescaping is enabled for all strings when using `render_template_string()`.
- a template has the ability to opt in/out autoescaping with the `{% autoescape %}` tag.
- Flask inserts a couple of global functions and helpers into the Jinja context, additionally to the values that are present by default.

## Standard Context ¶

The following global variables are available within Jinja templates by default:

<dl><dt>config</dt>
<dd>

The current configuration object (<a href="https://flask.palletsprojects.com/en/stable/api/#flask.Flask.config" title="flask.Flask.config"><code>flask.Flask.config</code></a>)

<details>

<summary>Changelog</summary>



Changed in version 0.10: This is now always available, even in imported templates.

Added in version 0.6.

</details>

</dd></dl><dl><dt>request</dt>
<dd>

The current request object (<a href="https://flask.palletsprojects.com/en/stable/api/#flask.request" title="flask.request"><code>flask.request</code></a>). This variable is unavailable if the template was rendered without an active request context.

</dd></dl><dl><dt>session</dt>
<dd>

The current session object (<a href="https://flask.palletsprojects.com/en/stable/api/#flask.session" title="flask.session"><code>flask.session</code></a>). This variable is unavailable if the template was rendered without an active request context.

</dd></dl><dl><dt>g</dt>
<dd>

The request-bound object for global variables (<a href="https://flask.palletsprojects.com/en/stable/api/#flask.g" title="flask.g"><code>flask.g</code></a>). This variable is unavailable if the template was rendered without an active request context.

</dd></dl><dl><dt>url_for()</dt>
<dd>

The <a href="https://flask.palletsprojects.com/en/stable/api/#flask.url_for" title="flask.url_for"><code>flask.url_for()</code></a> function.

</dd></dl><dl><dt>get_flashed_messages()</dt>
<dd>

The <a href="https://flask.palletsprojects.com/en/stable/api/#flask.get_flashed_messages" title="flask.get_flashed_messages"><code>flask.get_flashed_messages()</code></a> function.

</dd></dl>

The Jinja Context Behavior

These variables are added to the context of variables, they are not global variables. The difference is that by default these will not show up in the context of imported templates. This is partially caused by performance considerations, partially to keep things explicit.

What does this mean for you? If you have a macro you want to import, that needs to access the request object you have two possibilities:

1. you explicitly pass the request to the macro as parameter, or the attribute of the request object you are interested in.
2. you import the macro “with context”.

Importing with context looks like this:

```
{% from '_helpers.html' import m
… [salida recortada: 6230 caracteres más]
~~~~

</details>

## 🤖 Claude · 2026-10-26 16:56:43 UTC

Confirmado. Compruebo también lo de `Markup.__radd__` en el código fuente de markupsafe.

**🔧 Herramienta `Bash`**

```json
{
  "command": "curl -sL https://raw.githubusercontent.com/pallets/markupsafe/main/src/markupsafe/__init__.py | grep -n -A5 \"def __radd__\"",
  "description": "Check markupsafe Markup.__radd__ source"
}
```

<details><summary>Resultado de herramienta</summary>

```
142:    def __radd__(self, value: str | _HasHTML, /) -> te.Self:
143-        if isinstance(value, str) or hasattr(value, "__html__"):
144-            return self.escape(value).__add__(self)
145-
146-        return NotImplemented
147-
```

</details>

## 🤖 Claude · 2026-10-26 16:56:57 UTC

Lo he verificado en el código fuente. Ahora escribo `PROCESO.md` y el README de las conversaciones.

**🔧 Herramienta `Write`**

```json
{
  "file_path": "<HOME>\\Documents\\PuestaEnProduccion\\Ut1\\trabajo\\PROCESO.md",
  "content": "# PROCESO.md · Registro del proceso y del uso de IA\n\n**Grupo 5 · Tema:** Desarrollo seguro y mitigaciones (`pps1_06 seguridad_lenguajes.md`)\n**Herramienta de IA usada:** Claude Code (CLI de Anthropic), modelo Claude Opus 5.5, en Windows. Algunas tareas se delegaron en **subagentes**: instancias nuevas del modelo, sin acceso a la conversación principal. Las usamos cuando hacía falta una \"conversación distinta\", como en la prueba de la skill propia.\n\n> **Transparencia:** casi todo el material de este repositorio lo generó Claude Code el 26/10/2026, a partir de una única petición amplia de Daniel B. (\"hazme todo lo que pide\"), en la conversación [`01`](conversaciones-ia/01-claude-code-produccion.md). Las decisiones de las fases 1 a 4 las **propuso y aplicó la IA**, y así se indica en el campo *Participación*. La sección [Revisión del grupo](#revisión-del-grupo) recoge lo que los tres integrantes deben revisar, decidir y firmar antes de entregar. No presentamos como decisiones del grupo las que todavía no hemos revisado.\n\n## Organización del equipo\n\n| Responsabilidad | Sesión 1 | Sesión 2 | Sesión 3 |\n|---|---|---|---|\n| Contenido (síntesis, glosario, fuentes) | [Nombre A.] | [Nombre B.] | Daniel B. |\n| Verificación (afirmaciones, ejemplos, enlaces) | [Nombre B.] | Daniel B. | [Nombre A.] |\n| Web y publicación (estructura, accesibilidad, GitHub Pages) | Daniel B. | [Nombre A.] | [Nombre B.] |\n\n*(Rotación propuesta, pendiente de confirmar por el grupo.)*\n\n## Índice de conversaciones\n\n| Archivo | Fases | Contenido |\n|---|---|---|\n| [`00-claude-code-plan-inicial.md`](conversaciones-ia/00-claude-code-plan-inicial.md) | 0, 1, 2 | Lectura del enunciado y primera propuesta de plan |\n| [`01-claude-code-produccion.md`](conversaciones-ia/01-claude-code-produccion.md) | 1–5 | Conversación principal: alcance, web, demos, skills, verificaciones y anonimización |\n| [`02-prueba-skill-propia-v1.0.md`](conversaciones-ia/02-prueba-skill-propia-v1.0.md) | 4 | Prueba 1 de la skill propia, en una conversación nueva |\n| [`03-aplicacion-skill-publica-sharp-edges.md`](conversaciones-ia/03-aplicacion-skill-publica-sharp-edges.md) | 4 | Aplicación de la skill pública a `js/demo.js` |\n| [`04-prueba-skill-propia-v1.1.md`](conversaciones-ia/04-prueba-skill-propia-v1.1.md) | 4 | Prueba 2 de la skill propia (versión mejorada), en una conversación nueva |\n\n---\n\n## Fase 0 · Leer el enunciado y hacer un primer plan\n\n| Campo | Registro |\n|---|---|\n| **Objetivo** | Entender qué se entrega, cuánto puntúa cada parte y proponer un alcance inicial. |\n| **Herramienta** | Claude Code. Análisis del enunciado y propuesta de plan. |\n| **Prompt** | Se pegó el enunciado completo de la tarea grupal (sin más instrucciones). |\n| **Resultado** | Tabla de entregables con su peso en la rúbrica (PROCESO + conversaciones = 30 puntos), aviso de usar `/export` en lugar de *Copy All*, duda sobre si había una sección de \"mitigaciones\", 7 ideas clave propuestas, demo de XSS + SHA-256, skill propia \"revisión de datos sensibles\" y tres preguntas al grupo. |\n| **Decisión** | Aceptamos la estructura general, la demo de XSS y la idea de exportar las conversaciones. Más tarde se cambiaron varias cosas (ver fase 1). |\n| **Justificación** | El plan coincidía con el enunciado y con la rúbrica. Las tres preguntas quedaron sin responder porque en la siguiente conversación se pidió a la IA que lo hiciera todo. |\n| **Verificación** | Contrastamos la tabla de puntos con la rúbrica del enunciado: coincide. |\n| **Participación** | Daniel B. (lanzó la consulta). |\n| **Conversación de origen** | `00-claude-code-plan-inicial.md` |\n\n## Fase 1 · Comprender y delimitar el alcance\n\n| Campo | Registro |\n|---|---|\n| **Objetivo** | Elegir qué secciones de los apuntes se explican y cuáles quedan fuera, y justificarlo. |\n| **Herramienta** | Claude Code. Lectura de los apuntes locales (`pps1_06 seguridad_lenguajes.md`) y propuesta de alcance. |\n| **Prompt** | «tienes que hacerme esto [enunciado] sobre este punto [sección 8 de los apuntes], hazme todo lo que pide por favor» |\n| **Resultado** | Al leer el fichero completo, la IA encontró que la \"sección de mitigaciones\" por la que se preguntaba en la fase 0 existe: es la **§6.3** (ASLR, NX/DEP, *stack canaries*), junto con la §6.2 (contraseñas). La IA propuso el alcance de la tabla siguiente. |\n| **Decisión** | Alcance = **§8 completa + §6.2 + §6.3**, con la §1 (defensa en profundidad) como marco. **Cambios respecto al plan de la fase 0:** (a) se incluye la §6.3, porque el enunciado dice \"desarrollo seguro **y mitigaciones**\"; (b) cadena de suministro y DoS dejan de estar fuera y se integran en las ideas 5 y 3, porque así se cubren las 9 subsecciones de la §8 sin pasar de 7 ideas. |\n| **Justificación** | Ver la tabla de alcance. Lo que se excluye ya lo cubren otros bloques o desviaría el tema hacia la seguridad de los lenguajes en general. |\n| **Verificación** | Comprobamos que cada subsección de la §8 tiene al menos una idea clave, término del glosario o fase del SSDLC que la cubre (tabla de cobertura). |\n| **Participación** | Propuesta y aplicada por la IA. Pendiente de validar por el grupo. |\n| **Conversación de origen** | `01-claude-code-produccion.md` (inicio) |\n\n### Tabla de alcance\n\n| Sección de los apuntes | ¿Se incluye? | Dónde | Por qué |\n|---|---|---|---|\n| §1 Seguridad por capas | Como marco | Introducción, idea 1 | Sin la idea de defensa en profundidad no se entiende el resto. |\n| §2 Seguridad de memoria | ❌ | — | Es seguridad del lenguaje, no del proceso de desarrollo. Sólo se menciona en la idea 7, para explicar a qué sirven las mitigaciones. |\n| §3 Modelos de ejecución | ❌ | — | Fuera del bloque. |\n| §4.1 `eval` e inyección | Parcial | Idea 3, demo 2 | Aporta la regla \"los datos deben permanecer como datos\", base de la validación frente a la codificación. |\n| §4.2–4.3 Deserialización, reflexión | ❌ | — | Se mencionan sólo en la skill propia, como destinos peligrosos. |\n| §5 Sandboxing y kernel | ❌ | — | Otro tema. El sandbox se usa en la demo, pero no se explica. |\n| §6.1 Mínimo privilegio y vulnerabilidades web | ✅ | Ideas 2, 3 y 4 | Mínimo privilegio, SQLi, XSS y autorización en APIs. |\n| §6.2 Contraseñas | ✅ | Idea 6, demo 3 | Es parte de las \"mitigaciones\" y se puede demostrar en el navegador. |\n| §6.3 Mitigaciones del compilador y del SO | ✅ | Idea 7, glosario | Lo pide el enunciado (\"y mitigaciones\"). Se subraya que **no eliminan la vulnerabilidad**. |\n| §7 `sudo-rs` | ❌ | — | Caso de estudio de seguridad de memoria (§2), no de desarrollo seguro. |\n| §8.1–8.9 | ✅ | Las 7 ideas, el glosario y el diagrama | Es el núcleo del bloque. |\n\n### Tabla de cobertura de la §8\n\n| Subsección | Cubierta en |\n|---|---|\n| 8.1 Modelado de amenazas | Idea 2; glosario: activo, superficie de ataque, frontera de confianza, mínimo privilegio, seguro por defecto |\n| 8.2 Validación y codificación | Idea 3, demos 1 y 2; glosario |\n| 8.3 Autenticación, autorización y sesiones | Idea 4; glosario |\n| 8.4 Cadena de suministro | Idea 5; glosario: cadena de suministro, SBOM |\n| 8.5 Pruebas | Idea 7; glosario: SAST, DAST, fuzzing, sanitizador |\n| 8.6 Secretos, errores y registros | Idea 5 |\n| 8.7 Criptografía | Idea 6, demo 3; glosario: sal |\n| 8.8 DoS | Idea 3 (límites de tamaño); glosario: DoS, *rate limiting* |\n| 8.9 SSDLC | Idea 1, diagrama SSDLC; glosario |\n\n## Fase 2 · Planificar\n\n| Campo | Registro |\n|---|---|\n| **Objetivo** | Diseñar la web, elegir la demostración y decidir para qué se usa la IA. |\n| **Herramienta** | Claude Code. Diseño de la estructura. |\n| **Prompt** | El mismo de la fase 1 (la IA planificó a partir de él). |\n| **Resultado** | Web de una sola página: portada → introducción → 7 ideas → 3 demos → diagrama SSDLC → glosario con buscador → fuentes. HTML, CSS y JS sin dependencias externas, para GitHub Pages. |\n| **Decisión** | (1) **Tres demos interactivas** en lugar de una: validación con lista blanca (§8.2), codificación de salida frente a XSS (§8.2/§6.1) y SHA-256 frente a PBKDF2 (§6.2/§8.7). (2) Diagrama SSDLC con HTML (`<details>`) en lugar de una imagen, para que sea accesible y se adapte al móvil. (3) **Cambio de la skill propia:** de \"revisión de datos sensibles\" (fase 0) a **\"revisión de entradas y salidas\"**. (4) Sin bibliotecas externas. |\n| **Justificación** | (1) La validación y la codificación son la diferencia clave de la §8.2 y se confunden fácilmente: dos demos separadas lo dejan claro. La demo 3 hace visible algo que suele creerse sin comprobarlo (que SHA-256 es \"rápido\"). (3) La skill de entradas y salidas está más ligada al núcleo del tema (§8.2) y a las demos. La revisión de datos sensibles se resolvió con un script de anonimización (fase 5), que es más fiable que una IA para esa tarea. (4) Menos superficie de ataque (§8.4) y nada que pueda dejar de funcionar. |\n| **Verificación** | Comprobamos que la estructura cumple el apartado 3.1 del enunciado: introducción, entre 5 y 7 ideas, glosario de al menos 5 términos, demo y fuentes. |\n| **Participación** | Propuesta y aplicada por la IA. Pendiente de validar por el grupo. |\n| **Conversación de origen** | `01-claude-code-produccion.md` |\n\n## Fase 3 · Investigar y producir\n\n### 3.a Síntesis, ideas clave y glosario\n\n| Campo | Registro |\n|---|---|\n| **Objetivo** | Redactar las 7 ideas clave y el glosario con palabras propias, a partir de los apuntes. |\n| **Herramienta** | Claude Code. Redacción. |\n| **Prompt** | El de la fase 1. La IA redactó a partir del texto de los apuntes leído en local. |\n| **Resultado** | 7 ideas, cada una con un título en lenguaje llano, una explicación, un ejemplo y una referencia a la sección de los apuntes. 22 términos en el glosario. |\n| **Decisión** | Cada idea lleva su referencia \"Apuntes: §X\" para poder contrastarla. Se añaden ejemplos que no están en los apuntes (la URL de facturas en la idea 4, el usuario de BD con permisos limitados en la idea 1). |\n| **Justificación** | Los ejemplos concretos ayudan a entender. El de la idea 4 es el caso típico de OWASP A01 (control de acceso roto). |\n| **Verificación** | Cada idea se contrastó con su sección de los apuntes, y las afirmaciones que van más allá de ellos con una fuente externa ([fuentes.md](evidencias/fuentes.md)). Ejemplo: los parámetros de PBKDF2 (600 000 iteraciones) se comprobaron en la OWASP Password Storage Cheat Sheet. |\n| **Participación** | IA. **Pendiente:** que el responsable de contenido relea las 7 ideas y reescriba con sus palabras lo que no entienda o no le convenza. |\n| **Conversación de origen** | `01-claude-code-produccion.md` |\n\n### 3.b Web y demostraciones\n\n| Campo | Registro |\n|---|---|\n| **Objetivo** | Construir `index.html`, `css/estilos.css` y `js/demo.js`. |\n| **Herramienta** | Claude Code. Generación de código. |\n| **Prompt** | El de la fase 1. |\n| **Resultado** | Web adaptable al móvil, con modo oscuro, enlace para saltar al contenido, menú desplegable en móvil y etiquetas `aria-live` en los resultados. Las demos usan `DOMParser` (documento inerte), un `iframe` con `sandbox=\"\"` para la vista insegura y la Web Crypto API para los hashes. |\n| **Decisión** | La vista insegura de la demo 2 **no ejecuta** el JavaScript del atacante: se aísla en un iframe con sandbox y se *explica* qué habría pasado. La demo 3 usa **PBKDF2 en lugar de Argon2id**, y la web lo dice. |\n| **Justificación** | Una web didáctica pública no debe ejecutar cargas de XSS, aunque sean inofensivas. Argon2id no está en la Web Crypto API y exigiría una biblioteca externa; PBKDF2 está aceptada por OWASP y demuestra la misma idea (coste + sal). |\n| **Verificación** | Ver la fase 4.b. |\n| **Participación** | IA. **Pendiente:** que el responsable de web pruebe la página en su móvil. |\n| **Conversación de origen** | `01-claude-code-produccion.md` |\n\n### 3.c Skill propia\n\n| Campo | Registro |\n|---|---|\n| **Objetivo** | Crear una skill acotada, relacionada con el tema. |\n| **Herramienta** | Claude Code. Redacción de `SKILL.md`. |\n| **Prompt** | El de la fase 1 (requisitos del apartado 3.5 del enunciado). |\n| **Resultado** | [`skills/revision-entradas-salidas/SKILL.md`](skills/revision-entradas-salidas/SKILL.md) v1.0: propósito con alcance y exclusiones, condiciones de uso, 9 pasos, formato de salida, ejemplo en Express y criterios de calidad con los casos que requieren revisión humana. |\n| **Decisión** | Alcance limitado a fragmentos cortos y a flujos fuente → destino. La criptografía y la autorización quedan fuera, y sólo se mencionan en \"Observaciones fuera de alcance\". |\n| **Justificación** | Una skill que lo revisa todo no se puede probar ni evaluar. Con un alcance estrecho, sus criterios de calidad sí son comprobables. |\n| **Verificación** | Ver la fase 4.d (dos pruebas en conversaciones distintas). |\n| **Participación** | IA. Pendiente de validar por el grupo. |\n| **Conversación de origen** | `01-claude-code-produccion.md` |\n\n### 3.d Búsqueda de la skill pública\n\n| Campo | Registro |\n|---|---|\n| **Objetivo** | Encontrar una skill pública relacionada con el tema. |\n| **Herramienta** | Claude Code. Consulta web de los repositorios `anthropics/skills` y `trailofbits/skills`. |\n| **Prompt** | Interno de la IA: «List the skills/plugins in this repository with their exact names and paths, and the license.» |\n| **Resultado** | Listado de los dos repositorios. En Trail of Bits, `insecure-defaults` resultó ser un *workflow* con muchos agentes, y `sharp-edges` un SKILL.md de 293 líneas que sólo pide permisos de lectura. |\n| **Decisión** | Elegimos **`sharp-edges`**. Descartamos `insecure-defaults` y `frontend-design`. |\n| **Justificación** | Trata el principio *secure by default* de la §8.1, se puede leer entero y no ejecuta código. Ver [skill-publica.md](evidencias/skill-publica.md#por-qué-la-elegimos). |\n| **Verificación** | Descargamos el SKILL.md como texto y lo leímos antes de usarlo. Comprobamos la licencia (CC BY-SA 4.0) y el commit del fichero (`5f0a765`, 29/04/2026). |\n| **Participación** | IA. Pendiente de validar por el grupo. |\n| **Conversación de origen** | `01-claude-code-produccion.md` |\n\n## Fase 4 · Verificar\n\n### 4.a Fuentes y enlaces\n\n| Campo | Registro |\n|---|---|\n| **Objetivo** | Comprobar que las fuentes existen y respaldan lo que se afirma. |\n| **Herramienta** | Claude Code. `curl` y consulta de las páginas. |\n| **Prompt** | Interno: «Give the exact recommended parameters for Argon2id, scrypt, bcrypt and PBKDF2…» (OWASP), y comprobación del código HTTP de cada enlace. |\n| **Resultado** | Todos los enlaces externos devuelven 200, **salvo el de los apuntes** (`github.com/msolds/pps`), que devuelve **404 sin iniciar sesión** porque el repositorio es privado. |\n| **Decisión** | Se **quitó el enlace** a los apuntes de la web y se cita como documento de acceso restringido, con su fecha y su commit. |\n| **Justificación** | El enunciado exige que la web funcione sin iniciar sesión; un enlace roto la empeora. |\n| **Verificación** | Además de los códigos HTTP, buscamos en las páginas de OWASP las frases que respaldan las afirmaciones: \"allowlist\", `textContent` como *sink* seguro, PBKDF2 y FIPS-140, y \"SHA-256 no adecuado\". |\n| **Participación** | IA. **Pendiente:** que el responsable de verificación abra cada enlace de [fuentes.md](evidencias/fuentes.md) y confirme que dice lo que indicamos. |\n| **Conversación de origen** | `01-claude-code-produccion.md` |\n\n### 4.b Pruebas de la web y de las demos\n\n| Campo | Registro |\n|---|---|\n| **Objetivo** | Comprobar que las demos funcionan, que los cálculos son correctos y que la web se lee bien en el móvil. |\n| **Herramienta** | Claude Code. `node --test`, Chrome sin interfaz (*headless*) y un arnés de pruebas propio. |\n| **Prompt** | Interno: la IA escribió los tests y el arnés. |\n| **Resultado** | (1) **Tests de Node** ([`tests/demo.test.js`](tests/demo.test.js)): 11 en verde. Comprueban `sha256(\"abc\")` contra el vector de **FIPS 180-2** y PBKDF2 contra el vector del **RFC 7914 §11**, además de la lista blanca, el escape y los parámetros no válidos. (2) **Arnés en Chrome** sobre un servidor HTTP local: rellena los formularios, pulsa los botones y lee los resultados. Las tres demos y el glosario funcionan, y PBKDF2 sale unas **10 000 veces** más lento que SHA-256 en el equipo de prueba (0,0116 ms frente a 116,8 ms). (3) **Móvil a 360 px**: ancho del documento de 345 px, sin desbordamiento horizontal, menú desplegable correcto (capturas revisadas). |\n| **Decisión** | Se mantiene el diseño. La web dice que los tiempos dependen del equipo y que lo importante es la **proporción**. |\n| **Justificación** | Los vectores oficiales prueban que la implementación es correcta, no sólo que \"devuelve algo\". |\n| **Verificación** | Es la propia verificación. |\n| **Participación** | IA. **Pendiente:** que el grupo pruebe la web publicada en sus móviles. |\n| **Conversación de origen** | `01-claude-code-produccion.md` |\n\n### 4.c Aplicación y valoración de la skill pública\n\n| Campo | Registro |\n|---|---|\n| **Objetivo** | Aplicar `sharp-edges` a nuestro código y valorar su utilidad. |\n| **Herramienta** | Subagente de Claude Code con la skill como instrucciones, en modo de **sólo lectura**. |\n| **Prompt** | «Aplica la skill pública \"sharp-edges\" de Trail of Bits […] al fichero JavaScript de una web didáctica. […] Respeta los allowed-tools de la skill: sólo leer (Read, Grep, Glob). No ejecutes nada ni modifiques ningún fichero. Devuelve […] superficie identificada, cada sharp edge […], la Quality Checklist […], qué partes de la skill no encajan.» |\n| **Resultado** | 10 hallazgos (SE-1 a SE-10), la lista de comprobación y 6 límites de la skill. |\n| **Decisión** | **7 aceptados, 2 aceptados en parte (SE-4, SE-7) y 1 rechazado (SE-8)**. Cambios en `js/demo.js`, en `index.html` (CSP) y en los tests. Detalle en [skill-publica.md](evidencias/skill-publica.md#4-aplicación-en-el-proyecto). |\n| **Justificación** | Aceptamos lo que mejora la demo o lo que enseña algo sin perder claridad. Rechazamos lo que convertiría la demo en una API de producción (SE-8) o lo que complicaría el código sin beneficio real (reescribir con `createElement`). |\n| **Verificación** | **No dimos por buenos los hallazgos sin comprobarlos.** Verificamos en Chrome que `<svg><script>` tiene `tagName` en minúsculas y que `jav&#x09;ascript:` escapaba a la expresión regular antigua. Después de corregir, el arnés detecta las dos cargas y la de `<iframe srcdoc>`. La CSP bloquea el `onerror` dentro del iframe (violación `script-src-attr`) y la página sigue funcionando desde `file://` y por HTTP. Añadimos tests para SE-2, SE-7 y SE-9. |\n| **Participación** | IA. Pendiente de validar por el grupo. |\n| **Conversación de origen** | `03-aplicacion-skill-publica-sharp-edges.md` (ejecución) y `01-claude-code-produccion.md` (decisiones y verificación) |\n\n### 4.d Prueba de la skill propia (dos rondas)\n\n| Campo | Registro |\n|---|---|\n| **Objetivo** | Comprobar si las instrucciones de la skill sirven, en una conversación distinta de la de creación. |\n| **Herramienta** | Dos subagentes nuevos de Claude Code, sin acceso a la conversación principal. |\n| **Prompt** | «Usa la skill `revision-entradas-salidas` para revisar el código que te paso. Lenguaje: Python con Flask. Los datos de la tabla `productos` los pueden escribir los vendedores desde un panel web. […] lee SÓLO esos dos ficheros […] no ejecutes el código ni ningún comando.» (La prueba 2 usó el mismo prompt con Express.) |\n| **Resultado** | Prueba 1 (v1.0): 9 flujos y todas las expectativas cumplidas, pero un informe muy largo, sin nombre de la vulnerabilidad y con agrupaciones ambiguas. Prueba 2 (v1.1): 4 flujos, todas las expectativas cumplidas y las 4 mejoras aplicadas. |\n| **Decisión** | Publicamos la **v1.1**, con 4 mejoras, y conservamos la v1.0 en `evidencias/prueba-skill/`. |\n| **Justificación** | Los problemas de la v1.0 afectaban a la utilidad didáctica (que el estudiante encuentre el nombre de la vulnerabilidad) y a la verificabilidad (identificadores de herramientas sin aviso). |\n| **Verificación** | El **resultado esperado se escribió antes** de lanzar cada prueba, como queda reflejado en el orden de la conversación 01. El registro de los subagentes muestra que sólo leyeron `SKILL.md` y el fichero de prueba, así que no vieron lo esperado. Comprobamos las afirmaciones técnicas del resultado: autoescape de `render_template_string` (documentación de Flask), `Markup.__radd__` (código de markupsafe), Bandit B602/B608 (documentación de Bandit) y la opción `root` de `sendFile` frente a `..` (código de `pillarjs/send`). Detalle en [prueba-skill-propia.md](evidencias/prueba-skill-propia.md). |\n| **Participación** | IA. Pendiente de validar por el grupo. **Recomendado:** repetir la prueba con Copilot Chat. |\n| **Conversación de origen** | `02-prueba-skill-propia-v1.0.md`, `04-prueba-skill-propia-v1.1.md` y `01-claude-code-produccion.md` |\n\n## Fase 5 · Publicar y revisar\n\n| Campo | Registro |\n|---|---|\n| **Objetivo** | Dejar el repositorio listo para publicarlo sin exponer datos personales. |\n| **Herramienta** | Claude Code. Script de exportación y anonimización. |\n| **Prompt** | Interno de la IA. |\n| **Resultado** | [`herramientas/exportar-conversacion.js`](herramientas/exportar-conversacion.js) convierte los historiales `.jsonl` de Claude Code en Markdown. Sustituye las rutas `<HOME>` por `<HOME>`, los correos por `<email>` y los términos que se le indiquen (apellido, usuario de Windows) por `<dato-personal>`. Después se buscaron en todo el repositorio el apellido, el usuario de Windows, el dominio del correo y las rutas `C:\\Users`, sin ningún resultado. |\n| **Decisión** | Exportar con el script en lugar de usar `/export` y editar a mano. El script **no está en GitHub Pages**; es una herramienta del repositorio. |\n| **Justificación** | Anonimizar a mano 5 conversaciones largas es propenso a errores. El script es repetible y se puede revisar. |\n| **Verificación** | `grep` final sobre todo el repositorio (ver la conversación 01). **Pendiente del grupo:** publicar en GitHub Pages, abrir la web sin iniciar sesión, cambiar `USUARIO/REPO` por los valores reales y revisar la web publicada en el móvil. |\n| **Participación** | IA (preparación). **Pendiente:** publicación por el responsable de web. |\n| **Conversación de origen** | `01-claude-code-produccion.md` |\n\n---\n\n## Registro de correcciones\n\n| # | Qué estaba mal | Cómo se detectó | Corrección |\n|---|---|---|---|\n| 1 | El enlace a los apuntes daba 404 sin iniciar sesión | `curl` a todos los enlaces | Se cita sin enlace (fase 4.a) |\n| 2 | `analizarHTML` no detectaba `<svg><script>` ni `jav&#x09;ascript:` | Skill pública (SE-5), verificado en Chrome | `localName` + `new URL().protocol` |\n| 3 | `validarUsuario(undefined)` aceptaba \"undefined\" | Skill pública (SE-2) | `typeof` + tests |\n| 4 | El iframe inseguro dependía sólo del atributo `sandbox` | Skill pública (SE-6) | Comprobación en JS + CSP en el `srcdoc` |\n| 5 | La web no tenía CSP | Skill pública (SE-4) | `<meta http-equiv=\"Content-Security-Policy\">` |\n| 6 | La skill propia v1.0: informe largo, sin nombre de la vulnerabilidad | Prueba 1 | Skill v1.1 |\n| 7 | El test de Node no se encontraba con `node --test tests/` en Windows | Ejecución de los tests | Se indica el fichero explícitamente |\n| 8 | Los enlaces a `PROCESO.md` y `README.md` desde la web no funcionarían en GitHub Pages (Jekyll convierte los `.md`) | Revisión del despliegue | Enlaces al repositorio de GitHub |\n\n## Revisión del grupo\n\nAntes de entregar, **cada integrante** debe revisar lo que le corresponde y marcarlo. Si algo se cambia, hay que añadirlo al registro de correcciones.\n\n- [ ] **Todos:** leer la web completa y poder explicar las 7 ideas sin mirar (entrevista individual, fase 6).\n- [ ] **Todos:** decidir si se acepta el alcance de la fase 1 y la elección de las skills, y cambiar en este documento \"Pendiente de validar por el grupo\" por los nombres de quienes participaron.\n- [ ] **Contenido:** reescribir con sus palabras las ideas clave o las definiciones del glosario que no le convenzan.\n- [ ] **Verificación:** abrir cada enlace de `fuentes.md` y confirmar lo que respalda. Probar las demos con valores propios.\n- [ ] **Web:** crear el repositorio público, activar GitHub Pages, sustituir `USUARIO/REPO` en `README.md` e `index.html` y comprobar la web sin iniciar sesión y en el móvil.\n- [ ] **Todos:** guardar en `conversaciones-ia/` **cualquier otra conversación con IA** que tengáis (Copilot, ChatGPT…) y añadir una fila en el índice.\n- [ ] Rellenar los nombres (nombre + inicial) en `README.md` y en la tabla de organización.\n"
}
```

<details><summary>Resultado de herramienta</summary>

```
File created successfully at: <HOME>\Documents\PuestaEnProduccion\Ut1\trabajo\PROCESO.md (file state is current in your context — no need to Read it back)
```

</details>

**🔧 Herramienta `Bash`**

```json
{
  "command": "cd \"<HOME>/Documents/PuestaEnProduccion/Ut1/trabajo\" && sed -i 's/| 7 | El test de Node no se encontraba con `node --test tests\\/` en Windows | Ejecución de los tests | Se indica el fichero explícitamente |/| 7 | `node --test tests\\/` (pasando la carpeta) fallaba con `MODULE_NOT_FOUND` en Node 24 | Ejecución de los tests | Se indica el fichero explícitamente: `node --test tests\\/demo.test.js` |/' PROCESO.md && grep -n \"^| 7 |\" PROCESO.md",
  "description": "Correct description of test-runner fix"
}
```

**🔧 Herramienta `Write`**

~~~~json
{
  "file_path": "<HOME>\\Documents\\PuestaEnProduccion\\Ut1\\trabajo\\conversaciones-ia\\README.md",
  "content": "# Conversaciones originales con IA\n\nAquí están **todas** las conversaciones con IA del proyecto. No se ha hecho ninguna selección: se incluyen la del plan inicial, la de producción, la de creación de la skill propia (dentro de la 01) y sus dos pruebas, y la de aplicación de la skill pública.\n\n| Archivo | Herramienta | Qué contiene | Fases de PROCESO.md |\n|---|---|---|---|\n| [`00-claude-code-plan-inicial.md`](00-claude-code-plan-inicial.md) | Claude Code (Opus 5.5) | Lectura del enunciado y propuesta de plan | 0, 1, 2 |\n| [`01-claude-code-produccion.md`](01-claude-code-produccion.md) | Claude Code (Opus 5.5) | Conversación principal: alcance, web, demos, creación de la skill propia, elección de la skill pública, verificaciones y anonimización | 1–5 |\n| [`02-prueba-skill-propia-v1.0.md`](02-prueba-skill-propia-v1.0.md) | Subagente de Claude Code | Prueba 1 de la skill propia, en una conversación nueva | 4.d |\n| [`03-aplicacion-skill-publica-sharp-edges.md`](03-aplicacion-skill-publica-sharp-edges.md) | Subagente de Claude Code | Ejecución de la skill pública `sharp-edges` sobre `js/demo.js` | 4.c |\n| [`04-prueba-skill-propia-v1.1.md`](04-prueba-skill-propia-v1.1.md) | Subagente de Claude Code | Prueba 2 de la skill propia (versión mejorada), en una conversación nueva | 4.d |\n\n## Cómo se obtuvieron (y por qué no con *Copy All*)\n\nNo usamos GitHub Copilot Chat, sino **Claude Code**, que es una herramienta de terminal y no tiene la opción *Copy All*. Claude Code guarda cada conversación completa en un fichero `.jsonl` en `~/.claude/projects/<proyecto>/`. Las de los subagentes se guardan en la subcarpeta `subagents/`.\n\nConvertimos esos ficheros a Markdown con [`herramientas/exportar-conversacion.js`](../herramientas/exportar-conversacion.js), **sin reescribir ni resumir** los mensajes. El orden y la hora de cada mensaje se conservan.\n\n## Limitaciones del registro (lo que el exportador cambia u omite)\n\n1. **Anonimización:** las rutas `C:\\Users\\<usuario>` aparecen como `<HOME>`, los correos como `<email>`, y el apellido y el nombre de usuario de Windows como `<dato-personal>`.\n2. **Recordatorios del sistema:** se omiten los bloques `<system-reminder>`. Los inserta automáticamente la herramienta (contexto interno, avisos de cambios en ficheros) y no son mensajes del usuario ni de la IA.\n3. **Razonamiento interno:** no se incluye el razonamiento interno del modelo (*thinking*). Sí están todos los mensajes visibles, las llamadas a herramientas con sus parámetros completos y sus resultados.\n4. **Salidas largas:** los resultados de herramientas de más de 4000 caracteres (por ejemplo, el contenido de un fichero leído) se recortan, y se indica cuántos caracteres faltan. Las capturas de pantalla aparecen como `[imagen adjunta]`.\n5. **Final de la conversación 01:** se exportó justo antes de terminar la sesión, así que puede faltar el último mensaje de la IA, que es el resumen final al usuario. Para regenerarla completa:\n\n   ```\n   node herramientas/exportar-conversacion.js ~/.claude/projects/<proyecto>/<sesión>.jsonl conversaciones-ia/01-claude-code-produccion.md \"Conversación 01 · ...\" \"apellido,usuario\"\n   ```\n\n## Revisión de datos sensibles\n\nAntes de subirlas buscamos en todas las conversaciones el apellido, el nombre de usuario de Windows, el dominio del correo, `C:\\Users` y `@`, y no quedó ninguna coincidencia con datos personales. Tampoco contienen contraseñas, tokens ni claves de API reales. Las únicas \"contraseñas\" son las de ejemplo de la demo (`verano2024`).\n\n**Si añadís conversaciones de otras herramientas** (Copilot, ChatGPT…), pegadlas aquí completas con *Copy All* o la opción equivalente, revisadlas igual y añadid una fila en la tabla.\n"
}
~~~~

<details><summary>Resultado de herramienta</summary>

```
244:| 7 | `node --test tests/` (pasando la carpeta) fallaba con `MODULE_NOT_FOUND` en Node 24 | Ejecución de los tests | Se indica el fichero explícitamente: `node --test tests/demo.test.js` |
```

</details>

<details><summary>Resultado de herramienta</summary>

```
File created successfully at: <HOME>\Documents\PuestaEnProduccion\Ut1\trabajo\conversaciones-ia\README.md (file state is current in your context — no need to Read it back)
```

</details>

**🔧 Herramienta `Bash`**

```json
{
  "command": "cd \"<HOME>/Documents/PuestaEnProduccion/Ut1/trabajo\" && : > .nojekyll && node herramientas/exportar-conversacion.js ~/.claude/projects/<proyecto>/75fcebbd-e713-46f3-8f12-2de71489e93c.jsonl conversaciones-ia/01-claude-code-produccion.md \"Conversación 01 · Claude Code · Producción completa del proyecto\" \"<dato-personal>,<dato-personal>,<dato-personal>,DANIEL~1\" && echo \"--- escaneo de datos personales:\" && grep -rn -i -E \"<dato-personal>|<dato-personal>|<dato-personal>|DANIEL~1|C:\\\\\\\\Users|C:/Users|/c/Users\" . --include=* 2>/dev/null | grep -v \"^./.git\" | cut -c1-200 | head -20; echo \"--- correos:\"; grep -rn -o -E \"[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[a-z]{2,}\" . | grep -v \"noreply@anthropic\" | head; echo \"--- posibles secretos:\"; grep -rn -i -E \"(api[_-]?key|token|secret|password)\\s*[:=]\\s*['\\\"][A-Za-z0-9_\\-]{16,}\" . | head; find . -type f | sort; du -sh .",
  "description": "Export this conversation and scan repo for personal data"
}
```

<details><summary>Resultado de herramienta</summary>

```
Escrito conversaciones-ia/01-claude-code-produccion.md
--- escaneo de datos personales:
./conversaciones-ia/01-claude-code-produccion.md:1684:  "command": "S=\"<HOME>/AppData/Local/Temp/claude/<carpeta-de-proyecto>/75fcebbd-e713-46f3-8f12-2de71489e93c/scratchpad\"; P=~/.claude/projects/<
./conversaciones-ia/01-claude-code-produccion.md:2727:  "command": "cd \"<HOME>/Documents/PuestaEnProduccion/Ut1/trabajo\" && P=~/.claude/projects/<proyecto>/75fcebbd-e713-46f3-8f12-2de71489e93c/subag
--- correos:
--- posibles secretos:
./.nojekyll
./PROCESO.md
./README.md
./conversaciones-ia/00-claude-code-plan-inicial.md
./conversaciones-ia/01-claude-code-produccion.md
./conversaciones-ia/02-prueba-skill-propia-v1.0.md
./conversaciones-ia/03-aplicacion-skill-publica-sharp-edges.md
./conversaciones-ia/04-prueba-skill-propia-v1.1.md
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
592K	.
```

</details>

**🔧 Herramienta `Bash`**

```json
{
  "command": "cd \"<HOME>/Documents/PuestaEnProduccion/Ut1/trabajo\" && wc -c conversaciones-ia/01-*.md && sed -n '1684p;2727p' conversaciones-ia/01-*.md | grep -o '.\\{30\\}/c/Users.\\{20\\}'; grep -c -i \"daniel\" conversaciones-ia/*.md; grep -o -i \".\\{20\\}daniel.\\{20\\}\" conversaciones-ia/01-*.md | sort | uniq -c | head",
  "description": "Confirm scan hits are grep patterns, check name mentions"
}
```

<details><summary>Resultado de herramienta</summary>

```
293950 conversaciones-ia/01-claude-code-produccion.md
ato-personal>|C:\\\\\\\\Users|/c/Users\" conversaciones-ia
ato-personal>|C:\\\\\\\\Users|/c/Users\" conversaciones-ia
conversaciones-ia/00-claude-code-plan-inicial.md:1
conversaciones-ia/01-claude-code-produccion.md:15
conversaciones-ia/02-prueba-skill-propia-v1.0.md:0
conversaciones-ia/03-aplicacion-skill-publica-sharp-edges.md:0
conversaciones-ia/04-prueba-skill-propia-v1.1.md:0
conversaciones-ia/README.md:0
      1  && sed -i -e 's/^| Daniel B. | Web y publicac
      1 *Participación** | Daniel B. (lanzó la consu
      1 >\")\n    .replace(/daniel[.-]<dato-personal>[
      1 A.] | [Nombre B.] | Daniel B. |\n| Verificaci�
      1 \\\\/]+Users[\\\\/]+daniel\\.<dato-personal>\\
      1 ace(/\\/c\\/Users\\/daniel\\.<dato-personal>\\
      1 ad, GitHub Pages) | Daniel B. | [Nombre A.] | 
      1 es) | [Nombre B.] | Daniel B. | [Nombre A.] |\
      1 g(t)\n    .replace(/daniel\\.<dato-personal>@<
      1 o)) |\n|---|---|\n| Daniel B. | Web y publicac
```

</details>

## 🤖 Claude · 2026-10-26 16:59:34 UTC

Ya tienes el repositorio completo en `trabajo/`, con todo lo que pide el enunciado. No lo he subido a GitHub ni he publicado la web: eso lo tenéis que hacer vosotros, porque implica crear algo público con vuestra cuenta.

**Qué hay:**
- **Web** (`index.html` + `css/` + `js/`): introducción, 7 ideas clave, glosario de 22 términos con buscador, diagrama del ciclo de vida seguro (SSDLC) y fuentes. Incluye tres demos interactivas: validación de entradas, XSS frente a codificación de salida, y SHA-256 frente a PBKDF2. El alcance es la §8 de los apuntes más la §6.2 y la §6.3, que es donde están las "mitigaciones" que menciona el enunciado.
- **`PROCESO.md`**: las fases 0 a 5 con los 9 campos que pide el enunciado, tablas de alcance y cobertura, y un registro de correcciones.
- **`conversaciones-ia/`**: las 5 conversaciones de IA completas, incluida la del plan de antes del `/clear`. Están anonimizadas: sin tu apellido, usuario de Windows, correo ni rutas.
- **Skill pública**: `sharp-edges`, de Trail of Bits. La apliqué a nuestro propio `demo.js`. Devolvió 10 hallazgos: acepté 7, acepté 2 en parte y rechacé 1, y en `evidencias/skill-publica.md` está la justificación de cada uno.
- **Skill propia**: `revision-entradas-salidas`. La probé dos veces en conversaciones nuevas, dejando escrito antes de cada prueba el resultado esperado. La primera prueba sacó 4 problemas; los corregí y la versión 1.1 los resuelve.

**Comprobaciones hechas:**
- 11 pruebas automáticas, que pasan todas. Comparan los hashes con valores de referencia oficiales (FIPS 180-2 y RFC 7914).
- Pruebas en Chrome desde un servidor local, pulsando los botones: las tres demos funcionan.
- La vista a 360 px de ancho, sin scroll horizontal.
- Todos los enlaces externos responden.
- Las afirmaciones técnicas de la IA, contrastadas con la documentación de OWASP, Flask, Bandit y markupsafe.
- El enlace a los apuntes de la profesora da error 404 sin iniciar sesión, porque el repositorio es privado. Por eso los cito sin enlace.

**Ojo, importante:** en `PROCESO.md` he puesto que las decisiones las tomó la IA y que están "pendientes de validar por el grupo". No he escrito que las tomarais vosotros. La rúbrica valora que decidáis y verifiquéis, y en la entrevista os preguntarán a cada uno. Al final de `PROCESO.md` hay una lista de revisión para el grupo; repasadla y entended el contenido.

**Lo que os falta:**
1. Poner los nombres de tus dos compañeros (nombre + inicial) en `README.md` y `PROCESO.md`, y repartir los roles.
2. Crear un repositorio **público** en GitHub, subir los archivos y activar GitHub Pages (Settings → Pages → rama `main`, carpeta raíz). Luego cambiar `USUARIO/REPO` por vuestros datos reales:
   ```
   git init -b main && git add . && git commit -m "Grupo 5: Desarrollo seguro"
   sed -i 's#USUARIO/REPO#tuusuario/turepo#g; s#USUARIO.github.io/REPO#tuusuario.github.io/turepo#g' README.md index.html
   ```
3. Abrir la web publicada sin iniciar sesión y en el móvil.
4. Volver a exportar la conversación 01 al final, porque ahora mismo le falta este último mensaje. El comando está en `conversaciones-ia/README.md`.
5. Si habéis usado otras IAs, como Copilot, guardad también esas conversaciones en `conversaciones-ia/`.

Si me pasas el usuario de GitHub y el nombre del repositorio, sustituyo yo los `USUARIO/REPO` y hago el commit en local.

## 👤 Usuario · 2026-10-26 17:02:46 UTC

vale vamos a hablar sobre el punto 1 que has dicho

## 🤖 Claude · 2026-10-26 17:02:50 UTC

Perfecto. El punto 1 tiene dos partes: los nombres de tus compañeros y el reparto de roles.

**1. Nombres.** Solo nombre de pila más

## 👤 Usuario · 2026-10-26 17:02:50 UTC

[Request interrupted by user]
