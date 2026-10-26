# Preparación de la entrevista y tareas pendientes del grupo

> Este documento lo generó Claude Code en la conversación [`06`](../conversaciones-ia/06-claude-code-revision-final.md) como **material de estudio**. No es una fuente. Las respuestas son un guion: en la entrevista hay que explicarlas con vuestras palabras, y si alguna no os convence, comprobadla en los apuntes o en [fuentes.md](fuentes.md).

## 1. Tareas que sólo puede hacer cada integrante

La IA no puede hacer estas tareas por vosotros, y son las que demuestran vuestra participación (criterios 3 y 7 de la rúbrica). Cada tarea deja una **conversación propia** en `conversaciones-ia/` y una línea en [PROCESO.md](../PROCESO.md).

| Quién | Tarea | Qué guardar |
|---|---|---|
| **Guillermo A.** (Contenido) | Releer las 7 ideas y el glosario. Elegir **al menos dos** ideas o definiciones y reescribirlas con sus palabras en `index.html`. Si usa IA para comparar su versión con la de los apuntes, guardar esa conversación. | Conversación `07-…`, si la hay. Fila nueva en el *Registro de correcciones* de PROCESO.md. |
| **Juan R.** (Verificación) | Abrir cada enlace de [fuentes.md](fuentes.md) y comprobar que dice lo que indicamos (por ejemplo, buscar "600,000" en la cheat sheet de OWASP). Probar las 3 demos con valores propios. | Una nota en la fase 4.a de PROCESO.md: qué enlaces abrió y qué encontró. |
| **Pablo V.** (Apoyo y revisión) | **Tercera prueba de la skill propia con otra IA** (Copilot Chat), como recomienda la fase 4.d. Ver el procedimiento más abajo. | `conversaciones-ia/08-prueba-skill-propia-copilot.md` (con *Copy All*) y una sección nueva en [prueba-skill-propia.md](prueba-skill-propia.md). |
| **Todos** | Abrir la web publicada **en vuestro móvil**, sin iniciar sesión, y probar el menú y una demo. | Marcar la casilla en *Revisión del grupo* de PROCESO.md. |
| **Todos** | Decidir si aceptáis el alcance (fase 1) y las skills. Donde ponga «Pendiente de validar por el grupo», poner quién lo revisó y qué opina. | PROCESO.md |

### Procedimiento para la prueba con Copilot (Pablo V.)

1. **Antes de empezar**, escribir en `prueba-skill-propia.md` el resultado esperado de esta tercera prueba. Si no, la prueba no vale.
2. Abrir el repositorio en VS Code, y abrir Copilot Chat en una conversación **nueva**.
3. Pegar este prompt:

   ```
   Lee el fichero skills/revision-entradas-salidas/SKILL.md y sigue sus instrucciones al pie de la letra
   para revisar el fichero evidencias/prueba-skill/entrada.py. Lenguaje: Python con Flask. Los datos de la
   tabla productos los pueden escribir los vendedores desde un panel web. No ejecutes el código.
   ```

4. Al terminar: menú contextual de la conversación → **Copy All** → pegar sin tocar en `conversaciones-ia/08-prueba-skill-propia-copilot.md`. Antes de subirlo, revisar que no haya rutas con vuestro usuario (`C:\Users\...`) ni correos, y sustituirlos por `<HOME>` y `<email>`.
5. Comparar con lo esperado: ¿encuentra los mismos flujos que Claude en la prueba 1? ¿Pone la columna *Vulnerabilidad*? ¿Avisa de comprobar las reglas de Bandit? Anotar las diferencias.

## 2. Preguntas probables y guion de respuesta

### Sobre el tema

**¿Qué es el desarrollo seguro y por qué no basta con un lenguaje "seguro"?**
Es meter la seguridad en todas las fases del ciclo de vida (SSDLC), no al final. Un lenguaje con seguridad de memoria como Rust evita los desbordamientos, pero no evita una inyección SQL, una autorización mal hecha ni un secreto subido al repositorio. → Idea 1.

**¿Qué diferencia hay entre validar la entrada y codificar la salida?**
Validar es comprobar al entrar que el dato tiene el tipo, la longitud y el formato esperados; si no, se rechaza. Codificar es transformar el dato al mostrarlo en HTML o SQL, para que se lea como texto y no como código. Se necesitan las dos: un comentario puede contener `<` legítimamente, así que no se puede rechazar, pero hay que codificarlo. → Idea 3, demos 1 y 2.

**¿Autenticación o autorización?**
La autenticación comprueba quién eres; la autorización, qué puedes hacer. Ejemplo: cambiar `/facturas/1001` por `/facturas/1002` funciona si el servidor sólo mira que hay sesión iniciada (es el A01 de OWASP). La autorización se comprueba en cada operación. → Idea 4.

**¿Por qué no SHA-256 para contraseñas?**
Porque es rápido, y el atacante quiere probar millones de contraseñas por segundo. Para contraseñas se usan funciones lentas y con sal única: Argon2id, bcrypt o scrypt. SHA-256 sirve para comprobar la integridad. → Idea 6, demo 3.

**¿Por qué la demo usa PBKDF2 si los apuntes dicen Argon2id?**
Porque PBKDF2 viene de serie en el navegador (Web Crypto API) y Argon2id necesitaría una biblioteca externa. OWASP acepta PBKDF2 con 600 000 iteraciones. La idea que se demuestra es la misma: coste + sal.

**¿Qué es un SBOM y para qué sirve?**
Es el inventario de componentes y versiones de un software. Cuando sale una vulnerabilidad en una biblioteca, sirve para saber enseguida si nos afecta. → Idea 5.

**¿SAST o DAST?**
SAST lee el código sin ejecutarlo; DAST ataca la aplicación en marcha. Ninguna lo detecta todo, por eso se combinan con fuzzing, sanitizadores, revisión de código y pruebas de regresión. → Idea 7.

**¿ASLR, NX y los *stack canaries* eliminan la vulnerabilidad?**
No. Hacen más difícil explotarla, pero el fallo sigue ahí. → Idea 7.

**¿Cómo se previene una denegación de servicio desde el código?**
Con límites de tamaño, *timeouts*, cuotas, *rate limiting* y cuidado con las expresiones regulares y los deserializadores. → Idea 3 y glosario (DoS, *rate limiting*).

### Sobre las decisiones con IA

**¿Por qué el iframe de la demo 2 no ejecuta el XSS?**
Una web pública no debe ejecutar cargas de ataque, aunque sean inofensivas. El iframe tiene `sandbox=""` y una CSP propia, y la web explica qué habría pasado. → PROCESO, fase 3.b.

**¿Qué aceptasteis y qué rechazasteis de lo que propuso la IA?**
Por ejemplo, de la skill pública aceptamos 7 hallazgos, 2 en parte y rechazamos 1 (SE-8: exigir sales largas impediría usar el vector oficial del RFC). → [skill-publica.md](skill-publica.md).

**¿Cómo comprobasteis que lo que decía la IA era cierto?**
Con los apuntes y con OWASP, con los vectores oficiales de prueba (FIPS 180-2 y RFC 7914) en `tests/demo.test.js`, comprobando en Chrome los hallazgos de la skill pública y abriendo los enlaces. → PROCESO, fase 4.

**¿Por qué no hay *Copy All*?**
Porque usamos Claude Code, que es de terminal. Exportamos sus historiales `.jsonl` con un script que anonimiza, y explicamos las limitaciones en `conversaciones-ia/README.md`.

### Sobre las skills

**Skill pública (`sharp-edges`, Trail of Bits).** Busca APIs y configuraciones en las que lo fácil es lo inseguro (*secure by default*, §8.1). La aplicamos a `js/demo.js` en modo de sólo lectura y dio 10 hallazgos. Límites: está pensada para librerías y no para el DOM, pide reproducir los fallos pero sólo permite leer, y puede pasarse de celo con código inseguro a propósito.

**Skill propia (`revision-entradas-salidas`).** Revisa un fragmento corto buscando flujos fuente → destino peligroso y dice si falta validación o codificación. Deja fuera la criptografía, la autorización y las auditorías completas. Se probó dos veces en conversaciones distintas de la de creación. De la v1.0 a la v1.1: columna con el nombre de la vulnerabilidad, informe más corto, regla para agrupar flujos y aviso de comprobar las reglas de herramientas.
