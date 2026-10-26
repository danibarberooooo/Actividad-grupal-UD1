# Conversaciones originales con IA

Aquí están **todas** las conversaciones con IA del proyecto (los integrantes no han usado otras herramientas de IA). No se ha hecho ninguna selección: se incluyen la del plan inicial, la de producción, la de creación de la skill propia (dentro de la 01) y sus dos pruebas, y la de aplicación de la skill pública.

| Archivo | Herramienta | Qué contiene | Fases de PROCESO.md |
|---|---|---|---|
| [`00-claude-code-plan-inicial.md`](00-claude-code-plan-inicial.md) | Claude Code (Opus 5.5) | Lectura del enunciado y propuesta de plan | 0, 1, 2 |
| [`01-claude-code-produccion.md`](01-claude-code-produccion.md) | Claude Code (Opus 5.5) | Conversación principal: alcance, web, demos, creación de la skill propia, elección de la skill pública, verificaciones y anonimización | 1–5 |
| [`02-prueba-skill-propia-v1.0.md`](02-prueba-skill-propia-v1.0.md) | Subagente de Claude Code | Prueba 1 de la skill propia, en una conversación nueva | 4.d |
| [`03-aplicacion-skill-publica-sharp-edges.md`](03-aplicacion-skill-publica-sharp-edges.md) | Subagente de Claude Code | Ejecución de la skill pública `sharp-edges` sobre `js/demo.js` | 4.c |
| [`04-prueba-skill-propia-v1.1.md`](04-prueba-skill-propia-v1.1.md) | Subagente de Claude Code | Prueba 2 de la skill propia (versión mejorada), en una conversación nueva | 4.d |
| [`05-claude-code-revision-y-publicacion.md`](05-claude-code-revision-y-publicacion.md) | Claude Code (Opus 5.5) | Revisión de lo que faltaba, nombres del grupo, git, GitHub Pages y comprobación de la web publicada | 5.b |
| [`06-claude-code-revision-final.md`](06-claude-code-revision-final.md) | Claude Code (Opus 5.5) | Segunda revisión contra el enunciado, huecos del §8 en la web, prueba a 360 px y guía de la entrevista | 5.c |
| [`07-claude-code-validacion-del-grupo.md`](07-claude-code-validacion-del-grupo.md) | Claude Code (Opus 5.5) | Tercera revisión, conversación 06 completa, registro de la validación del grupo y cierre de tareas | 5.d |

## Cómo se obtuvieron (y por qué no con *Copy All*)

No usamos GitHub Copilot Chat, sino **Claude Code**, que es una herramienta de terminal y no tiene la opción *Copy All*. Claude Code guarda cada conversación completa en un fichero `.jsonl` en `~/.claude/projects/<proyecto>/`. Las de los subagentes se guardan en la subcarpeta `subagents/`.

Convertimos esos ficheros a Markdown con [`herramientas/exportar-conversacion.js`](../herramientas/exportar-conversacion.js), **sin reescribir ni resumir** los mensajes. El orden y la hora de cada mensaje se conservan.

## Limitaciones del registro (lo que el exportador cambia u omite)

1. **Anonimización:** las rutas `C:\Users\<usuario>` aparecen como `<HOME>`, los correos como `<email>`, y el apellido y el nombre de usuario de Windows como `<dato-personal>`. No se anonimiza el usuario de GitHub (`danibarberooooo`), que aparece en las conversaciones 05 y 06: ya es público en la URL del repositorio. Como el apellido forma parte de ese usuario, no se puede pasar al exportador como término. En las conversaciones 05 y 06 se sustituyó después con una expresión regular que excluye el usuario de GitHub. También se quitó a mano una aparición escrita con barra invertida dentro de un comando `grep`.
2. **Recordatorios del sistema:** se omiten los bloques `<system-reminder>`. Los inserta automáticamente la herramienta (contexto interno, avisos de cambios en ficheros) y no son mensajes del usuario ni de la IA.
3. **Razonamiento interno:** no se incluye el razonamiento interno del modelo (*thinking*). Sí están todos los mensajes visibles, las llamadas a herramientas con sus parámetros completos y sus resultados.
4. **Salidas largas:** los resultados de herramientas de más de 4000 caracteres (por ejemplo, el contenido de un fichero leído) se recortan, y se indica cuántos caracteres faltan. Las capturas de pantalla aparecen como `[imagen adjunta]`.
5. **Final de la conversación 01:** la primera exportación se hizo antes de terminar la sesión. Se volvió a exportar desde el historial definitivo (833 eventos, antes 795), así que ahora incluye el resumen final y el último intercambio, que se cortó con *Request interrupted by user*. Comando usado:

   ```
   node herramientas/exportar-conversacion.js ~/.claude/projects/<proyecto>/<sesión>.jsonl conversaciones-ia/01-claude-code-produccion.md "Conversación 01 · ..." "apellido,usuario"
   ```

6. **Final de las conversaciones 05 y 06:** cada una se exportó primero desde su propia sesión, así que le faltaba el final. La 05 se volvió a exportar desde la sesión 06 y ya está completa (444 eventos, antes 426). La 06 se volvió a exportar desde la sesión 07 y también está completa (349 eventos, antes 262), con el resumen final y la confirmación del `push`. Se regenera con el mismo comando, cambiando el fichero de sesión y el nombre de salida.
7. **Final de la conversación 07:** se exportó desde dentro de su propia sesión, justo antes del commit, así que le faltan el commit, el `push` y el último mensaje de la IA. Es la última conversación del proyecto.

## Revisión de datos sensibles

Antes de subirlas buscamos en todas las conversaciones el apellido, el nombre de usuario de Windows, el dominio del correo, `C:\Users` y `@`, y no quedó ninguna coincidencia con datos personales. Tampoco contienen contraseñas, tokens ni claves de API reales. Las únicas "contraseñas" son las de ejemplo de la demo (`verano2024`).

**Si añadís conversaciones de otras herramientas** (Copilot, ChatGPT…), pegadlas aquí completas con *Copy All* o la opción equivalente, revisadlas igual y añadid una fila en la tabla.
