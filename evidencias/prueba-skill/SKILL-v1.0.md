---
name: revision-entradas-salidas
description: Revisa un fragmento corto de código (Python, JavaScript, Java o PHP) buscando datos no confiables que llegan sin control a un destino peligroso (SQL, HTML, comandos del sistema, eval, rutas de archivo, deserialización) y explica, con fines didácticos, si falta validación de entrada o codificación de salida y cómo corregirlo. Úsala cuando un estudiante pida "¿es seguro este código?", "revisa esta entrada de usuario" o "¿hay inyección/XSS aquí?".
version: 1.0
---

# Revisión de entradas y salidas (desarrollo seguro)

## Propósito

Ayudar a un estudiante a **localizar y entender** los fallos de tratamiento de datos no confiables en un fragmento de código corto (hasta unas 80 líneas) y a corregirlos, aplicando las ideas de la sección 8.2 de los apuntes de PPS (validación de entradas frente a codificación de salidas) y la regla "los datos deben permanecer como datos" (§4.1).

**Dentro del alcance**

- Flujos *fuente → destino* donde la fuente es no confiable (parámetros HTTP, formularios, cabeceras, cookies, ficheros subidos, `input()`, argumentos de línea de comandos, respuestas de APIs externas, datos leídos de la base de datos que en origen escribió un usuario).
- Destinos peligrosos: consultas SQL, HTML/JavaScript del navegador, comandos del sistema, `eval`/`exec`, rutas de archivo, deserializadores, URLs que el servidor visita (SSRF).
- Ausencia de límites de tamaño en entradas (riesgo de denegación de servicio, §8.8).

**Fuera del alcance** (si se detecta, se menciona en "Observaciones fuera de alcance", sin desarrollarlo):

- Auditorías completas de una aplicación o de un repositorio.
- Errores de memoria en C/C++ (desbordamientos, *use-after-free*).
- Criptografía, gestión de secretos, autorización y configuración de despliegue.
- Escribir *exploits* o cargas de ataque funcionales contra sistemas reales.

## Condiciones de uso

**Entrada necesaria**

1. El fragmento de código, completo y sin recortar a mitad de función.
2. El lenguaje y, si lo hay, el framework (Flask, Express, Spring, Laravel…).
3. Opcional: de dónde vienen los datos si no se ve en el código.

**Limitaciones**

- La revisión es **estática** y sobre un fragmento: no ve el resto de la aplicación (puede haber validaciones en otra capa). Indica siempre esta limitación.
- No ejecutes el código ni pidas permisos para hacerlo.
- Si falta información imprescindible (por ejemplo, no se sabe si una variable viene del usuario), **pregúntalo o márcalo como supuesto**; no lo inventes.
- Si el fragmento contiene secretos reales (claves, contraseñas), avisa y no los repitas en la respuesta.

## Instrucciones

Sigue estos pasos en orden:

1. **Identifica las fuentes no confiables.** Lista cada variable que recibe datos de fuera, con su línea.
2. **Sigue cada dato hasta sus destinos.** Para cada fuente, indica a qué destino llega (SQL, HTML, comando, `eval`, ruta, deserializador, URL) y si pasa antes por alguna validación o codificación.
3. **Clasifica el problema** de cada flujo con exactamente una de estas etiquetas:
   - `FALTA CODIFICACIÓN/PARAMETRIZACIÓN`: el dato se inserta en un lenguaje de destino (SQL, HTML, shell) como si fuera código.
   - `FALTA VALIDACIÓN`: se acepta un valor sin comprobar tipo, longitud, rango o formato y eso tiene consecuencias (lógica, DoS).
   - `DATO CONVERTIDO EN CÓDIGO`: `eval`, `exec`, deserialización insegura o similar.
   - `CORRECTO`: el flujo ya está protegido (dilo también, para reforzar lo que está bien).
4. **Asigna una gravedad** (Alta / Media / Baja) con una frase de por qué. Alta: el atacante controla código o consultas. Media: necesita condiciones extra o el impacto es limitado. Baja: endurecimiento.
5. **Propón la corrección mínima** en el mismo lenguaje, mostrando sólo las líneas que cambian. Prioriza mecanismos del propio lenguaje o framework (consultas parametrizadas, plantillas con autoescape, `textContent`, `subprocess` con lista de argumentos y lista blanca) frente a filtros caseros con listas negras.
6. **Explica la diferencia validación/codificación** en una o dos frases aplicadas a *este* código, no en abstracto.
7. **Relaciona con el SSDLC**: indica en qué fase se debería haber detectado (implementación, verificación con SAST/DAST) y qué prueba de regresión añadirías.
8. **Añade "Observaciones fuera de alcance"** si has visto algo fuera del alcance (por ejemplo, contraseñas con SHA-256), en una línea cada una.
9. **Cierra con la limitación**: "Revisión estática de un fragmento; puede haber controles en otras partes del código."

### Formato de salida

```markdown
## Resumen
<1–2 frases: cuántos flujos, cuántos problemas, el más grave>

## Flujos analizados
| # | Fuente (línea) | Destino (línea) | Etiqueta | Gravedad |
|---|---|---|---|---|

## Detalle y corrección
### Flujo 1: <título>
- **Qué pasa:** …
- **Por qué es un problema:** …
- **Corrección:** (bloque de código)
- **Validación vs. codificación aquí:** …

## SSDLC y pruebas
- Fase donde detectarlo: …
- Prueba de regresión sugerida: …

## Observaciones fuera de alcance
- …

## Limitación
Revisión estática de un fragmento; puede haber controles en otras partes del código.
```

## Ejemplo

**Entrada**

```javascript
// Express
app.get("/saludo", (req, res) => {
  const nombre = req.query.nombre;
  res.send("<p>Hola, " + nombre + "</p>");
});
```

**Resultado esperado (resumido)**

## Resumen
Un flujo analizado con un problema de gravedad alta: XSS reflejado.

## Flujos analizados
| # | Fuente (línea) | Destino (línea) | Etiqueta | Gravedad |
|---|---|---|---|---|
| 1 | `req.query.nombre` (3) | HTML de la respuesta (4) | FALTA CODIFICACIÓN/PARAMETRIZACIÓN | Alta |

## Detalle y corrección
### Flujo 1: nombre insertado en HTML
- **Qué pasa:** el parámetro de la URL se concatena dentro del HTML.
- **Por qué es un problema:** `?nombre=<img src=x onerror=...>` haría que el navegador ejecutase JavaScript del atacante en la sesión de la víctima.
- **Corrección:**
  ```javascript
  const escapar = (t) => String(t).replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
  res.send("<p>Hola, " + escapar(nombre ?? "") + "</p>");
  ```
  (Mejor aún: usar un motor de plantillas con autoescape.)
- **Validación vs. codificación aquí:** podríamos validar que `nombre` tenga como máximo 50 letras, pero lo que realmente evita el XSS es codificarlo al insertarlo en HTML.

## SSDLC y pruebas
- Fase: implementación (revisión de código) y verificación (SAST detecta concatenación en `res.send`; DAST con una carga de XSS).
- Regresión: test que pida `/saludo?nombre=<b>x</b>` y compruebe que la respuesta contiene `&lt;b&gt;`.

## Limitación
Revisión estática de un fragmento; puede haber controles en otras partes del código.

## Criterios de calidad

Un resultado es **correcto** si:

- [ ] Encuentra **todas** las fuentes no confiables del fragmento y no inventa fuentes que no existen.
- [ ] Cada flujo tiene fuente, destino, una única etiqueta y una gravedad justificada.
- [ ] Las correcciones usan mecanismos estándar (consultas parametrizadas, autoescape, `textContent`, listas blancas) y **compilan o se ejecutan** en el lenguaje indicado.
- [ ] Distingue explícitamente validación y codificación **aplicadas a ese código**.
- [ ] Respeta el alcance: lo que queda fuera aparece sólo en "Observaciones fuera de alcance".
- [ ] No incluye cargas de ataque más allá de un ejemplo mínimo e inofensivo para entender el fallo.
- [ ] Termina con la limitación de revisión estática.

**Debe revisarse por una persona** cuando:

- La gravedad es Alta (confirmar con los apuntes o con OWASP antes de darla por buena).
- La corrección propone una biblioteca o función que el estudiante no conoce: comprobar en la documentación oficial que existe y hace lo que se dice.
- El fragmento usa un framework con protecciones automáticas (por ejemplo, plantillas Jinja2 o React escapan por defecto): verificar que la IA no ha marcado como vulnerable algo que ya está protegido, ni al revés.
- La respuesta no menciona ningún problema en un código que maneja entradas: puede ser correcto, pero conviene una segunda revisión.

## Referencias

- Apuntes PPS 1, `pps1_06 seguridad_lenguajes.md`, §4.1, §6.1, §8.2, §8.5, §8.8.
- OWASP Input Validation Cheat Sheet: https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html
- OWASP Cross Site Scripting Prevention Cheat Sheet: https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html
- OWASP Query Parameterization Cheat Sheet: https://cheatsheetseries.owasp.org/cheatsheets/Query_Parameterization_Cheat_Sheet.html
