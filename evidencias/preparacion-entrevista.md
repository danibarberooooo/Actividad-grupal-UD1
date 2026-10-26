# Preparación de la entrevista y tareas del grupo

> Este documento lo generó Claude Code en la conversación [`06`](../conversaciones-ia/06-claude-code-revision-final.md) como **material de estudio**. No es una fuente. Las respuestas son un guion: en la entrevista hay que explicarlas con vuestras palabras, y si alguna no os convence, comprobadla en los apuntes o en [fuentes.md](fuentes.md).

## 1. Tareas de cada integrante (estado a 26/10/2026)

| Quién | Tarea | Estado |
|---|---|---|
| **Todos** | Revisar y aceptar las decisiones de las fases 1 a 5 y la rotación de roles | Hecho: los cuatro lo revisamos y aceptamos ([PROCESO.md](../PROCESO.md)). |
| **Guillermo A.** (Contenido) | Releer las 7 ideas y el glosario | Hecho. Decisión: no se reescribe nada, porque el texto se entiende bien. |
| **Juan R.** (Verificación) | Abrir cada enlace de [fuentes.md](fuentes.md) y comprobar que dice lo que indicamos | Hecho. |
| **Todos** | Abrir la web publicada en el móvil, sin iniciar sesión | Hecho. |
| **Pablo V.** (Apoyo y revisión) | Tercera prueba de la skill propia con Copilot Chat | Descartada: el apartado 3.5 del enunciado no la pide y ya hay dos pruebas. |
| **Todos** | Preparar la entrevista con el guion de abajo | Pendiente hasta la entrevista. |

Como el texto de la web lo redactó la IA y no lo hemos reescrito, en la entrevista es especialmente importante explicar cada idea **con vuestras palabras**, sin repetir la web de memoria.

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
