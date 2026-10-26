# Fuentes

Para cada fuente se indica qué parte del trabajo respalda. Todos los enlaces se comprobaron el 26/10/2026 (respuesta HTTP 200, salvo que se indique otra cosa).

## Documentos de partida

| Fuente | Enlace | Qué respalda |
|---|---|---|
| Apuntes PPS 1 · `pps1_06 seguridad_lenguajes.md` (versión del 13/10/2026, commit `741ab75`) | Repositorio de apuntes de la profesora. **No es público**: el enlace de GitHub devuelve 404 sin iniciar sesión, por eso en la web no se enlaza. | Toda la estructura del tema. §1 (defensa en profundidad), idea 1. §4.1 (regla "los datos deben permanecer como datos", listas blancas), idea 3 y demo 2. §6.1 (mínimo privilegio, SQLi, XSS, autorización en APIs), ideas 2–4. §6.2 (Argon2id/bcrypt/scrypt, sal, no SHA-256), idea 6 y demo 3. §6.3 (ASLR, NX/DEP, *stack canaries*; no eliminan la vulnerabilidad), idea 7. §8.1–8.9 (modelado de amenazas, validación frente a codificación, autenticación/autorización/sesiones, cadena de suministro, SAST/DAST/fuzzing/sanitizadores, secretos y errores, criptografía, DoS, SSDLC), ideas 1–7, glosario y diagrama SSDLC. |
| Enunciado de la tarea grupal | Proporcionado por la profesora | Requisitos de la web, PROCESO.md, skills y estructura del repositorio. |

## Fuentes adicionales

| Fuente | Enlace | Qué respalda |
|---|---|---|
| OWASP · Password Storage Cheat Sheet | https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html | Demo 3 e idea 6: parámetros mínimos (Argon2id m=19 MiB, t=2, p=1; scrypt N=2^17; bcrypt coste ≥10 y límite de 72 bytes; **PBKDF2-HMAC-SHA256 con 600 000 iteraciones**); sal única por contraseña; "los algoritmos de hash rápidos como SHA-256 no son adecuados para almacenar contraseñas". También confirma que PBKDF2 es la opción cuando se necesita FIPS-140, lo que justifica usarla en la demo como sustituta de Argon2id. |
| OWASP · Input Validation Cheat Sheet | https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html | Demo 1 e idea 3: validación por lista blanca preferible a lista negra; la validación del cliente no sustituye a la del servidor. |
| OWASP · Cross Site Scripting Prevention Cheat Sheet | https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html | Demo 2 e idea 3: codificación contextual de salida, uso de `textContent` como *sink* seguro, caracteres que hay que codificar en HTML. |
| OWASP · Threat Modeling Cheat Sheet | https://cheatsheetseries.owasp.org/cheatsheets/Threat_Modeling_Cheat_Sheet.html | Idea 2: preguntas del modelado de amenazas (qué construimos, qué puede salir mal, qué hacemos al respecto). |
| OWASP · Secrets Management Cheat Sheet | https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html | Idea 5: secretos fuera del código, rotación y control de acceso. |
| OWASP · Top 10 2021 · A01 Broken Access Control | https://owasp.org/Top10/A01_2021-Broken_Access_Control/ | Idea 4: ejemplo de modificar el identificador en la URL para acceder a recursos de otro usuario. |
| OWASP · Query Parameterization Cheat Sheet | https://cheatsheetseries.owasp.org/cheatsheets/Query_Parameterization_Cheat_Sheet.html | Skill propia: corrección de inyección SQL con consultas parametrizadas. |
| NIST · SP 800-218 Secure Software Development Framework (SSDF) | https://csrc.nist.gov/pubs/sp/800/218/final | Idea 1 y diagrama SSDLC: integrar prácticas de seguridad en todo el ciclo de desarrollo. |
| CISA · Software Bill of Materials (SBOM) | https://www.cisa.gov/sbom | Idea 5 y glosario: definición de SBOM como inventario de componentes. |
| Clang · AddressSanitizer | https://clang.llvm.org/docs/AddressSanitizer.html | Idea 7 y glosario: qué es un sanitizador y qué errores de memoria detecta. |
| MDN · Node.textContent | https://developer.mozilla.org/es/docs/Web/API/Node/textContent | Demo 2: `textContent` no interpreta HTML (frente a `innerHTML`). |
| MDN · SubtleCrypto.deriveBits() | https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/deriveBits | Demo 3: uso de PBKDF2 desde la Web Crypto API del navegador. |
| FIPS 180-2 (vector de prueba SHA-256 de "abc") y RFC 7914 §11 (vector de prueba PBKDF2-HMAC-SHA256) | https://www.rfc-editor.org/rfc/rfc7914#section-11 | Verificación de la demo 3: las funciones `sha256` y `pbkdf2` de `js/demo.js` se comprobaron contra estos valores conocidos (`tests/demo.test.js`). |
| Trail of Bits · skill `sharp-edges` | https://github.com/trailofbits/skills/tree/main/plugins/sharp-edges/skills/sharp-edges | Skill pública analizada en [skill-publica.md](skill-publica.md). |

## Afirmaciones con limitaciones

- **Tiempos de la demo 3:** dependen del equipo y del navegador. Lo que la web afirma es la **proporción** entre SHA-256 y PBKDF2, no los valores absolutos.
- **PBKDF2 en lugar de Argon2id:** los apuntes y OWASP prefieren Argon2id. La demo usa PBKDF2 porque es la función lenta que el navegador trae de serie, y así se indica en la propia web.
- **Contenido generado con IA:** los textos de la web los redactó Claude Code a partir de los apuntes. No se presentan como fuente: cada afirmación técnica se ha contrastado con los apuntes o con las fuentes de esta tabla (ver la fase 4 de [PROCESO.md](../PROCESO.md)).
