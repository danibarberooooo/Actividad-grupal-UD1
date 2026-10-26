# Conversación 03 · Aplicación de la skill pública sharp-edges a js/demo.js (subagente de Claude Code)

> Exportado automáticamente del historial local de Claude Code (66 eventos).
> Se han anonimizado rutas locales, nombre de usuario y correo. Se omiten los recordatorios internos del sistema
> y el razonamiento interno del modelo. Las salidas de herramientas de más de 4000 caracteres se recortan.

## 👤 Usuario · 2026-10-26 16:47:10 UTC

Aplica la skill pública "sharp-edges" de Trail of Bits (https://github.com/trailofbits/skills, licencia CC-BY-SA-4.0) al fichero JavaScript de una web didáctica.

Instrucciones de la skill (léelas enteras y síguelas, incluidas las 4 fases del "Analysis Workflow", la clasificación de gravedad y la "Quality Checklist"):
<HOME>\AppData\Local\Temp\claude\<carpeta-de-proyecto>\75fcebbd-e713-46f3-8f12-2de71489e93c\scratchpad\skillpub\SKILL.md
Referencias de la skill descargadas (consúltalas si lo necesitas): en la carpeta references/ junto a ese SKILL.md (lang-javascript.md, crypto-apis.md, config-patterns.md). Las demás referencias no se han descargado; si te harían falta, dilo.

Fichero a analizar: <HOME>\Documents\PuestaEnProduccion\Ut1\trabajo\js\demo.js
Contexto: es la demo de una web estática educativa (GitHub Pages) sobre desarrollo seguro. Contiene: validación con lista blanca de un usuario y una edad, una función escaparHTML, un análisis con DOMParser de qué HTML se crearía, un iframe sandbox con srcdoc para mostrar la versión insegura, y una comparación SHA-256 vs PBKDF2 (600000 iteraciones) con Web Crypto. Las funciones se exportan para probarlas con Node. Puedes mirar también index.html en la misma carpeta superior para ver el iframe.

Respeta los allowed-tools de la skill: sólo leer (Read, Grep, Glob). No ejecutes nada ni modifiques ningún fichero.

Devuelve, en español: (1) superficie identificada (puntos de elección/API/configuración), (2) cada "sharp edge" encontrado con categoría de la skill, línea, gravedad según la tabla de la skill, escenario de mal uso y corrección propuesta, (3) la Quality Checklist marcada indicando qué puntos aplican o no aplican a este fichero, (4) qué partes de la skill no encajan con este tipo de código.

**🔧 Herramienta `Read`**

```json
{
  "file_path": "<HOME>\\AppData\\Local\\Temp\\claude\\<carpeta-de-proyecto>\\75fcebbd-e713-46f3-8f12-2de71489e93c\\scratchpad\\skillpub\\SKILL.md"
}
```

<details><summary>Resultado de herramienta</summary>

~~~~
1	---
2	name: sharp-edges
3	description: "Identifies error-prone APIs, dangerous configurations, and footgun designs that enable security mistakes. Use when reviewing API designs, configuration schemas, cryptographic library ergonomics, or evaluating whether code follows 'secure by default' and 'pit of success' principles. Triggers: footgun, misuse-resistant, secure defaults, API usability, dangerous configuration."
4	allowed-tools: Read Grep Glob
5	---
6	
7	# Sharp Edges Analysis
8	
9	Evaluates whether APIs, configurations, and interfaces are resistant to developer misuse. Identifies designs where the "easy path" leads to insecurity.
10	
11	## When to Use
12	
13	- Reviewing API or library design decisions
14	- Auditing configuration schemas for dangerous options
15	- Evaluating cryptographic API ergonomics
16	- Assessing authentication/authorization interfaces
17	- Reviewing any code that exposes security-relevant choices to developers
18	
19	## When NOT to Use
20	
21	- Implementation bugs (use standard code review)
22	- Business logic flaws (use domain-specific analysis)
23	- Performance optimization (different concern)
24	
25	## Agent
26	
27	The `sharp-edges-analyzer` agent runs the full sharp edges analysis workflow autonomously. Use it when you want a dedicated analysis of APIs, configurations, or interfaces for misuse resistance and footgun potential. The agent follows the four-phase workflow (Surface Identification, Edge Case Probing, Threat Modeling, Validate Findings) and reads language-specific references on demand.
28	
29	## Core Principle
30	
31	**The pit of success**: Secure usage should be the path of least resistance. If developers must understand cryptography, read documentation carefully, or remember special rules to avoid vulnerabilities, the API has failed.
32	
33	## Rationalizations to Reject
34	
35	| Rationalization | Why It's Wrong | Required Action |
36	|-----------------|----------------|-----------------|
37	| "It's documented" | Developers don't read docs under deadline pressure | Make the secure choice the default or only option |
38	| "Advanced users need flexibility" | Flexibility creates footguns; most "advanced" usage is copy-paste | Provide safe high-level APIs; hide primitives |
39	| "It's the developer's responsibility" | Blame-shifting; you designed the footgun | Remove the footgun or make it impossible to misuse |
40	| "Nobody would actually do that" | Developers do everything imaginable under pressure | Assume maximum developer confusion |
41	| "It's just a configuration option" | Config is code; wrong configs ship to production | Validate configs; reject dangerous combinations |
42	| "We need backwards compatibility" | Insecure defaults can't be grandfather-claused | Deprecate loudly; force migration |
43	
44	## Sharp Edge Categories
45	
46	### 1. Algorithm/Mode Selection Footguns
47	
48	APIs that let developers choose algorithms invite choosing wrong ones.
49	
50	**The JWT Pattern** (canonical example):
51	- Header specifies algorithm: attacker can set `"alg": "none"` to bypass signatures
52	- Algorithm confusion: RSA public key used as HMAC secret when switching RS256→HS256
53	- Root cause: Letting untrusted input control security-critical decisions
54	
55	**Detection patterns:**
56	- Function parameters like `algorithm`, `mode`, `cipher`, `hash_type`
57	- Enums/strings selecting cryptographic primitives
58	- Configuration options for security mechanisms
59	
60	**Example - PHP password_hash allowing weak algorithms:**
61	```php
62	// DANGEROUS: allows crc32, md5, sha1
63	password_hash($password, PASSWORD_DEFAULT); // Good - no choice
64	hash($algorithm, $password); // BAD: accepts "crc32"
65	```
66	
67	### 2. Dangerous Defaults
68	
69	Defaults that are insecure, or zero/empty values that disable security.
70	
71	**The OTP Lifetime Pattern:**
72	```python
73	# What happens when lifetime=0?
74	def verify_otp(code, lifetime=300):  # 300 seconds default
75	    if lifetime == 0:
76	        re
… [salida recortada: 8879 caracteres más]
~~~~

</details>

**🔧 Herramienta `Read`**

```json
{
  "file_path": "<HOME>\\Documents\\PuestaEnProduccion\\Ut1\\trabajo\\js\\demo.js"
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
101	function pintarReglas(titulo, reglas) {
102	  const 
… [salida recortada: 7564 caracteres más]
```

</details>

**🔧 Herramienta `Glob`**

```json
{
  "pattern": "references/*",
  "path": "<HOME>\\AppData\\Local\\Temp\\claude\\<carpeta-de-proyecto>\\75fcebbd-e713-46f3-8f12-2de71489e93c\\scratchpad\\skillpub"
}
```

<details><summary>Resultado de herramienta</summary>

```
<HOME>\AppData\Local\Temp\claude\<carpeta-de-proyecto>\75fcebbd-e713-46f3-8f12-2de71489e93c\scratchpad\skillpub\references\lang-javascript.md
<HOME>\AppData\Local\Temp\claude\<carpeta-de-proyecto>\75fcebbd-e713-46f3-8f12-2de71489e93c\scratchpad\skillpub\references\crypto-apis.md
<HOME>\AppData\Local\Temp\claude\<carpeta-de-proyecto>\75fcebbd-e713-46f3-8f12-2de71489e93c\scratchpad\skillpub\references\config-patterns.md
```

</details>

**🔧 Herramienta `Grep`**

```json
{
  "pattern": "iframe|sandbox|Content-Security|<script|data-ejemplo|id=\"(clave|comentario|form-validacion)",
  "path": "<HOME>\\Documents\\PuestaEnProduccion\\Ut1\\trabajo\\index.html",
  "output_mode": "content"
}
```

<details><summary>Resultado de herramienta</summary>

```
50:        <p class="alcance"><strong>Alcance de esta guía:</strong> sección 8 de los apuntes (desarrollo seguro y SSDLC) y las secciones 6.2 y 6.3 (contraseñas y mitigaciones). Dejamos fuera la seguridad de memoria en detalle, los modelos de ejecución, el <em>sandboxing</em> del kernel y el caso <code>sudo-rs</code>, que se tratan en otras partes de la unidad.</p>
143:          <form class="formulario" id="form-validacion" novalidate>
168:            <textarea id="comentario" rows="3" spellcheck="false">&lt;img src=x onerror="alert('Te he robado la cookie')"&gt;</textarea>
171:            <button type="button" class="chip" data-ejemplo="¡Muy buen artículo!">Comentario normal</button>
172:            <button type="button" class="chip" data-ejemplo="&lt;b&gt;Texto en negrita&lt;/b&gt;">HTML inofensivo</button>
173:            <button type="button" class="chip" data-ejemplo="&lt;img src=x onerror=&quot;alert('Te he robado la cookie')&quot;&gt;">Imagen con onerror</button>
174:            <button type="button" class="chip" data-ejemplo="&lt;a href=&quot;javascript:alert(1)&quot;&gt;Pulsa aquí&lt;/a&gt;">Enlace javascript:</button>
180:              <p class="panel__nota">Así lo vería el navegador (vista aislada en un <code>iframe</code> con <code>sandbox</code>, que bloquea los scripts para que la demo sea inofensiva):</p>
181:              <iframe id="vista-insegura" title="Vista del comentario insertado como HTML" sandbox="" loading="lazy"></iframe>
204:            <input id="clave" type="text" autocomplete="off" spellcheck="false" value="verano2024">
302:  <script src="js/demo.js"></script>
```

</details>

**🔧 Herramienta `Read`**

```json
{
  "file_path": "<HOME>\\AppData\\Local\\Temp\\claude\\<carpeta-de-proyecto>\\75fcebbd-e713-46f3-8f12-2de71489e93c\\scratchpad\\skillpub\\references\\lang-javascript.md"
}
```

<details><summary>Resultado de herramienta</summary>

~~~~
1	# JavaScript / TypeScript Sharp Edges
2	
3	## Loose Equality Coercion
4	
5	```javascript
6	// DANGEROUS: == coerces types unpredictably
7	"0" == false   // true
8	"" == false    // true
9	"" == 0        // true
10	[] == false    // true
11	[] == ![]      // true (wat)
12	null == undefined  // true
13	
14	// Security implications:
15	if (userRole == "admin") {  // What if userRole is 0?
16	    grantAdmin();
17	}
18	0 == "admin"  // false, but...
19	0 == ""       // true
20	```
21	
22	**Fix**: Always use `===` for strict equality.
23	
24	## Prototype Pollution
25	
26	```javascript
27	// DANGEROUS: Merging untrusted objects
28	function merge(target, source) {
29	    for (let key in source) {
30	        target[key] = source[key];  // Includes __proto__!
31	    }
32	}
33	
34	// Attacker sends: {"__proto__": {"isAdmin": true}}
35	merge({}, JSON.parse(userInput));
36	
37	// Now ALL objects have isAdmin
38	({}).isAdmin  // true
39	const user = {};
40	user.isAdmin  // true - authentication bypassed!
41	
42	// Also via constructor.prototype
43	// {"constructor": {"prototype": {"isAdmin": true}}}
44	```
45	
46	**Fix**:
47	```javascript
48	// Check for dangerous keys
49	const dangerous = ['__proto__', 'constructor', 'prototype'];
50	if (dangerous.includes(key)) continue;
51	
52	// Or use Object.create(null) for dictionary objects
53	const dict = Object.create(null);  // No prototype chain
54	
55	// Or use Map instead of objects
56	const map = new Map();
57	```
58	
59	## Regular Expression DoS (ReDoS)
60	
61	```javascript
62	// DANGEROUS: Catastrophic backtracking
63	const regex = /^(a+)+$/;
64	regex.test("aaaaaaaaaaaaaaaaaaaaaaaaaaaa!");
65	// Exponential time - freezes the event loop
66	
67	// Dangerous patterns:
68	// - Nested quantifiers: (a+)+, (a*)*
69	// - Overlapping alternatives: (a|a)+
70	// - Greedy quantifiers with overlap: .*.*
71	
72	// Real example from ua-parser-js CVE:
73	/\s*(;|\s)\s*/  // Fine
74	/(a|aa)+/       // ReDoS!
75	```
76	
77	**Detection**: Look for nested quantifiers or overlapping alternatives in regex.
78	
79	## parseInt Without Radix
80	
81	```javascript
82	// DANGEROUS: Behavior varies
83	parseInt("08");      // 8 (modern JS), was 0 in ES3 (octal)
84	parseInt("0x10");    // 16 - hex prefix always recognized
85	parseInt("10", 0);   // 10 or error depending on engine
86	parseInt("10", 1);   // NaN - radix 1 invalid
87	
88	// DANGEROUS: Unexpected results
89	parseInt("123abc");  // 123 - stops at first non-digit
90	parseInt("abc123");  // NaN - starts with non-digit
91	```
92	
93	**Fix**: Always specify radix: `parseInt("08", 10)`
94	
95	## This Binding
96	
97	```javascript
98	// DANGEROUS: 'this' depends on how function is called
99	const obj = {
100	    value: 42,
101	    getValue: function() { return this.value; }
102	};
103	
104	obj.getValue();           // 42
105	const fn = obj.getValue;
106	fn();                     // undefined - 'this' is global/undefined
107	
108	// DANGEROUS: In callbacks
109	setTimeout(obj.getValue, 100);  // 'this' is global/undefined
110	
111	// DANGEROUS: In event handlers
112	button.addEventListener('click', obj.getValue);  // 'this' is button
113	```
114	
115	**Fix**: Use arrow functions or `.bind()`.
116	
117	## Array Methods That Mutate
118	
119	```javascript
120	// These MUTATE the original array:
121	arr.push(x);      // Adds to end
122	arr.pop();        // Removes from end
123	arr.shift();      // Removes from start
124	arr.unshift(x);   // Adds to start
125	arr.splice(i, n); // Removes/inserts
126	arr.sort();       // Sorts IN PLACE
127	arr.reverse();    // Reverses IN PLACE
128	arr.fill(x);      // Fills IN PLACE
129	
130	// These return NEW arrays:
131	arr.slice();
132	arr.concat();
133	arr.map();
134	arr.filter();
135	
136	// DANGEROUS: Sorting numbers
137	[1, 10, 2].sort();  // [1, 10, 2] - string comparison!
138	// Fix: [1, 10, 2].sort((a, b) => a - b);  // [1, 2, 10]
139	```
140	
141	## Type Coercion in Operations
142	
143	```javascript
144	// DANGEROUS: + is ove
… [salida recortada: 3904 caracteres más]
~~~~

</details>

**🔧 Herramienta `Read`**

```json
{
  "file_path": "<HOME>\\AppData\\Local\\Temp\\claude\\<carpeta-de-proyecto>\\75fcebbd-e713-46f3-8f12-2de71489e93c\\scratchpad\\skillpub\\references\\crypto-apis.md"
}
```

<details><summary>Resultado de herramienta</summary>

~~~~
1	# Cryptographic API Footguns
2	
3	Detailed patterns for identifying misuse-prone cryptographic interfaces.
4	
5	## Algorithm Selection Anti-Patterns
6	
7	### The "alg" Header Attack (JWT)
8	
9	The JSON Web Token standard allows the token itself to specify which algorithm to use for verification. This is catastrophically wrong.
10	
11	**Attack 1: "none" algorithm**
12	```json
13	{"alg": "none", "typ": "JWT"}
14	```
15	Many libraries accept this and skip signature verification entirely.
16	
17	**Attack 2: Algorithm confusion (RS256 → HS256)**
18	- Server expects RSA signature, uses public key for verification
19	- Attacker changes algorithm to HMAC, uses *public key* as HMAC secret
20	- Public key is public, so attacker can forge valid signatures
21	
22	**Root cause**: Trusting untrusted input to select security mechanisms.
23	
24	**Fix**: Never let data dictate algorithm. Use one algorithm, hardcoded.
25	
26	### Cipher Mode Parameters
27	
28	```python
29	# DANGEROUS: mode is selectable
30	def encrypt(plaintext, key, mode="ECB"):  # ECB is never correct
31	    ...
32	
33	# BAD: accepts any OpenSSL cipher string
34	cipher = OpenSSL::Cipher.new(user_selected_cipher)
35	
36	# GOOD: no parameters
37	def encrypt(plaintext, key):  # internally uses AES-256-GCM
38	    ...
39	```
40	
41	**Detection**: Parameters named `mode`, `cipher`, `algorithm`, `hash_type`
42	
43	### Hash Algorithm Downgrade
44	
45	```php
46	// PHP's hash() accepts ANY algorithm
47	hash("crc32", $password);  // Valid call, terrible security
48	hash("md5", $password);    // Valid call, broken security
49	hash("sha256", $password); // Valid call, still wrong for passwords
50	
51	// Password functions limit choices
52	password_hash($password, PASSWORD_ARGON2ID);  // Better
53	```
54	
55	**Pattern**: APIs that accept algorithm as string instead of restricting to safe subset.
56	
57	## Key/Nonce/IV Confusion
58	
59	### Indistinguishable Byte Arrays
60	
61	```go
62	// All three are just []byte - easy to swap
63	func Encrypt(plaintext, key, nonce []byte) []byte
64	
65	// Easy mistakes:
66	Encrypt(plaintext, nonce, key)  // Swapped - compiles fine
67	Encrypt(plaintext, key, key)    // Reused key as nonce - compiles fine
68	```
69	
70	**Fix**: Distinct types
71	
72	```go
73	type EncryptionKey [32]byte
74	type Nonce [24]byte
75	
76	func Encrypt(plaintext []byte, key EncryptionKey, nonce Nonce) []byte
77	// Now type system catches swaps
78	```
79	
80	### Nonce Reuse
81	
82	```python
83	# DANGEROUS: nonce parameter with no guidance
84	def encrypt(plaintext, key, nonce):
85	    ...
86	
87	# Developer "simplifies" by reusing:
88	nonce = b'\x00' * 12
89	encrypt(msg1, key, nonce)
90	encrypt(msg2, key, nonce)  # Catastrophic with GCM/ChaCha
91	```
92	
93	**Fix**: Generate nonces internally, return them with ciphertext.
94	
95	## Comparison Footguns
96	
97	### Timing-Safe vs. Regular Comparison
98	
99	```python
100	# These look identical but have different security properties
101	if computed_mac == expected_mac:  # VULNERABLE: timing attack
102	if hmac.compare_digest(computed_mac, expected_mac):  # Safe
103	```
104	
105	**The problem**: Developers don't know to use special comparison. Default string equality is vulnerable.
106	
107	**Detection**: Direct equality checks on MACs, signatures, hashes, tokens.
108	
109	### Boolean Confusion
110	
111	```python
112	# Signature verification APIs
113	result = verify(signature, message, key)
114	
115	# Some return True/False
116	if verify(...):  # Must check return value
117	
118	# Some raise exceptions
119	verify(...)  # Failure = exception, no return to check
120	
121	# Developers mixing these up = vulnerabilities
122	```
123	
124	## Padding Oracle Enablers
125	
126	### Raw Decryption APIs
127	
128	```python
129	# DANGEROUS: returns plaintext even if padding invalid
130	def decrypt(ciphertext, key):
131	    # ... decrypt ...
132	    return unpad(plaintext)  # Throws on bad padding
133	
134	# Attacker can distinguish:
135	# - Valid padding 
… [salida recortada: 1924 caracteres más]
~~~~

</details>

**🔧 Herramienta `Read`**

```json
{
  "file_path": "<HOME>\\AppData\\Local\\Temp\\claude\\<carpeta-de-proyecto>\\75fcebbd-e713-46f3-8f12-2de71489e93c\\scratchpad\\skillpub\\references\\config-patterns.md"
}
```

<details><summary>Resultado de herramienta</summary>

~~~~
1	# Configuration Security Patterns
2	
3	Dangerous configuration patterns that enable security failures.
4	
5	## Zero/Empty/Null Semantics
6	
7	### The Lifetime Zero Problem
8	
9	```yaml
10	# What does 0 mean?
11	session_timeout: 0    # Infinite timeout? Immediate expiry? Disabled?
12	token_lifetime: 0     # Never expires? Already expired? Use default?
13	max_attempts: 0       # No attempts allowed? Unlimited attempts?
14	```
15	
16	**Real-world failures:**
17	- OTP libraries where `lifetime=0` means "accept any OTP regardless of age"
18	- Rate limiters where `max_attempts=0` disables rate limiting
19	- Session managers where `timeout=0` means "session never expires"
20	
21	**Detection**: Any numeric security parameter that accepts 0.
22	
23	**Fix**: Explicit constants, validation, or separate enable/disable flag.
24	
25	```python
26	# BAD
27	def verify_otp(code: str, lifetime: int = 300):
28	    if lifetime <= 0:
29	        return True  # What??
30	
31	# GOOD
32	def verify_otp(code: str, lifetime: int = 300):
33	    if lifetime <= 0:
34	        raise ValueError("lifetime must be positive")
35	```
36	
37	### Empty String Bypass
38	
39	```python
40	# Passwords
41	if user_password == stored_hash:  # What if stored_hash is ""?
42	
43	# API keys
44	if api_key == config.api_key:  # What if config is empty?
45	    grant_access()
46	
47	# The empty string equals the empty string
48	"" == ""  # True - authentication bypassed
49	```
50	
51	**Detection**: String comparisons for authentication without empty checks.
52	
53	### Null as "Skip"
54	
55	```javascript
56	// DANGEROUS: null means "skip verification"
57	function verifySignature(data, signature, publicKey) {
58	    if (!publicKey) return true;  // No key = trust everything?
59	    return crypto.verify(data, signature, publicKey);
60	}
61	
62	// DANGEROUS: null means "any value"
63	function checkRole(user, requiredRole) {
64	    if (!requiredRole) return true;  // No requirement = allow all?
65	    return user.roles.includes(requiredRole);
66	}
67	```
68	
69	## Boolean Traps
70	
71	### Security-Disabling Flags
72	
73	```yaml
74	# Every one of these has caused real vulnerabilities
75	verify_ssl: false
76	validate_certificate: false
77	check_signature: false
78	require_auth: false
79	enable_csrf_protection: false
80	sanitize_input: false
81	```
82	
83	**Pattern**: Any boolean that disables a security control.
84	
85	**The typo problem:**
86	```yaml
87	verify_ssl: fasle   # Typo - what does the parser do?
88	verify_ssl: "false" # String "false" - truthy in many languages!
89	verify_ssl: 0       # Integer 0 - falsy, but is it valid?
90	```
91	
92	### Double Negatives
93	
94	```yaml
95	# Confusing
96	disable_auth: false      # Auth enabled? Let me re-read...
97	skip_validation: false   # Validation runs? Think carefully...
98	
99	# Clear
100	auth_enabled: true
101	validate_input: true
102	```
103	
104	## Magic Values
105	
106	### Sentinel Values in Security Parameters
107	
108	```yaml
109	# What do these mean?
110	max_retries: -1      # Infinite? Error? Use default?
111	cache_ttl: -1        # Never expire? Disabled?
112	timeout_seconds: -1  # Wait forever? Use system default?
113	
114	# Real vulnerability: connection pool with max_connections: -1
115	# meant "unlimited" - enabled DoS via connection exhaustion
116	```
117	
118	### Special String Values
119	
120	```yaml
121	# Dangerous patterns
122	allowed_origins: "*"       # CORS wildcard
123	allowed_hosts: "any"       # Bypass host validation
124	log_level: "none"          # Disable security logging
125	password_policy: "disabled" # No password requirements
126	```
127	
128	**Detection**: String configs that accept wildcards or "disable" keywords.
129	
130	## Combination Hazards
131	
132	### Conflicting Settings
133	
134	```yaml
135	# Both true - which wins?
136	require_authentication: true
137	allow_anonymous_access: true
138	
139	# Both specified - conflict
140	session_cookie_secure: true
141	force_http: true  # HTTP can't use Secure
… [salida recortada: 6956 caracteres más]
~~~~

</details>

**🔧 Herramienta `Glob`**

```json
{
  "pattern": "**/*.{js,html}",
  "path": "<HOME>\\Documents\\PuestaEnProduccion\\Ut1\\trabajo"
}
```

<details><summary>Resultado de herramienta</summary>

```
js\demo.js
tests\demo.test.js
index.html
```

</details>

**🔧 Herramienta `Read`**

```json
{
  "file_path": "<HOME>\\Documents\\PuestaEnProduccion\\Ut1\\trabajo\\index.html",
  "offset": 1,
  "limit": 20
}
```

<details><summary>Resultado de herramienta</summary>

```
1	<!doctype html>
2	<html lang="es">
3	<head>
4	  <meta charset="utf-8">
5	  <meta name="viewport" content="width=device-width, initial-scale=1">
6	  <title>Desarrollo seguro</title>
7	  <meta name="description" content="Guía didáctica sobre desarrollo seguro de software: modelado de amenazas, validación de entradas, autenticación, cadena de suministro, criptografía, pruebas, mitigaciones y SSDLC.">
8	  <link rel="stylesheet" href="css/estilos.css">
9	  <link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath d='M16 2 4 7v8c0 7.5 5.1 13.4 12 15 6.9-1.6 12-7.5 12-15V7z' fill='%232563eb'/%3E%3Cpath d='m11 16 4 4 7-8' stroke='white' stroke-width='3' fill='none'/%3E%3C/svg%3E">
10	</head>
11	<body>
12	  <a class="saltar" href="#contenido">Saltar al contenido</a>
13	
14	  <header class="cabecera">
15	    <div class="contenedor cabecera__fila">
16	      <a class="marca" href="#inicio">🛡️ Desarrollo seguro</a>
17	      <button class="menu-boton" type="button" aria-expanded="false" aria-controls="menu">Menú</button>
18	      <nav id="menu" class="menu" aria-label="Secciones">
19	        <a href="#introduccion">Introducción</a>
20	        <a href="#ideas">Ideas clave</a>
```

</details>

**🔧 Herramienta `Read`**

```json
{
  "file_path": "<HOME>\\Documents\\PuestaEnProduccion\\Ut1\\trabajo\\tests\\demo.test.js"
}
```

<details><summary>Resultado de herramienta</summary>

```
1	// Pruebas de las funciones de la demostración. Ejecutar con: node --test tests/demo.test.js
2	const test = require("node:test");
3	const assert = require("node:assert/strict");
4	const { validarUsuario, validarEdad, escaparHTML, sha256, pbkdf2 } = require("../js/demo.js");
5	
6	const acepta = (reglas) => reglas.every((r) => r.ok);
7	
8	test("validarUsuario acepta nombres de la lista blanca", () => {
9	  for (const v of ["ana", "ana_garcia", "user_2024", "a".repeat(20)]) {
10	    assert.equal(acepta(validarUsuario(v)), true, v);
11	  }
12	});
13	
14	test("validarUsuario rechaza entradas fuera de la lista blanca", () => {
15	  for (const v of ["", "ab", "a".repeat(21), "Ana", "josé", "ana garcia", " ana", "<script>", "ana'--", "ana;rm"]) {
16	    assert.equal(acepta(validarUsuario(v)), false, JSON.stringify(v));
17	  }
18	});
19	
20	test("validarEdad acepta enteros en rango, incluidos los límites", () => {
21	  for (const v of ["14", "17", "120"]) assert.equal(acepta(validarEdad(v)), true, v);
22	});
23	
24	test("validarEdad rechaza fuera de rango y formatos no enteros", () => {
25	  for (const v of ["", "13", "121", "-5", "17.5", " 17", "1e2", "0x20", "abc", "9999"]) {
26	    assert.equal(acepta(validarEdad(v)), false, JSON.stringify(v));
27	  }
28	});
29	
30	test("escaparHTML codifica los cinco caracteres especiales", () => {
31	  assert.equal(escaparHTML(`<img src=x onerror="alert('1')">&`),
32	    "&lt;img src=x onerror=&quot;alert(&#39;1&#39;)&quot;&gt;&amp;");
33	  assert.equal(escaparHTML("texto normal"), "texto normal");
34	});
35	
36	test("sha256 coincide con el vector de prueba de FIPS 180-2 ('abc')", async () => {
37	  assert.equal(await sha256("abc"),
38	    "ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad");
39	});
40	
41	test("pbkdf2 coincide con el vector de prueba de RFC 7914 §11 (passwd/salt/c=1)", async () => {
42	  const sal = new TextEncoder().encode("salt");
43	  assert.equal(await pbkdf2("passwd", sal, 1),
44	    "55ac046e56e3089fec1691c22544b605f94185216dde0465e68b9d57c20dacbc");
45	});
46	
47	test("pbkdf2 con sales distintas produce hashes distintos", async () => {
48	  const a = await pbkdf2("verano2024", new Uint8Array(16).fill(1), 1000);
49	  const b = await pbkdf2("verano2024", new Uint8Array(16).fill(2), 1000);
50	  assert.notEqual(a, b);
51	});
52	
53	test("pbkdf2 rechaza un número de iteraciones no válido", async () => {
54	  for (const n of [0, -1, 1.5, NaN]) {
55	    await assert.rejects(pbkdf2("x", new Uint8Array(16), n), RangeError, String(n));
56	  }
57	});
58
```

</details>

## 🤖 Claude · informe final · 2026-10-26 16:51:17 UTC

#### Análisis "sharp-edges" (Trail of Bits) de `js/demo.js`

He leído SKILL.md entero y sus tres referencias (lang-javascript, crypto-apis, config-patterns). He analizado `<HOME>\Documents\PuestaEnProduccion\Ut1\trabajo\js\demo.js` junto con `index.html` (iframe en la línea 181; el `<head>` no tiene meta CSP) y `tests\demo.test.js`. No he ejecutado ni modificado nada.

**Limitación de la fase 4:** la skill pide reproducir y probar cada fallo, pero sus allowed-tools sólo permiten leer. Por eso las reproducciones de abajo están escritas y no ejecutadas. Las afirmaciones se apoyan en las especificaciones WHATWG HTML/DOM/URL y Web Crypto.

---

##### (1) Superficie identificada

**API exportada a Node (línea 269):** `validarUsuario`, `validarEdad`, `escaparHTML`, `sha256`, `pbkdf2` y `PBKDF2_ITERACIONES`. Son las únicas interfaces que un tercero puede reutilizar.

**Puntos de elección para el desarrollador:**
- Parámetro `iteraciones` de `pbkdf2`, con valor por defecto 600000 (l. 82).
- Parámetro `sal` de `pbkdf2`, de tipo bytes libres (l. 82 y 90).
- La elección entre `sha256` y `pbkdf2`, que son dos funciones exportadas.
- El contexto en que se usa la salida de `escaparHTML`.
- La forma de interpretar el resultado de `validar*`, que devuelve un array de reglas.

**Configuración:**
- Constantes `USUARIO_MIN/MAX`, `EDAD_MIN/MAX`, `PBKDF2_ITERACIONES` y `REPETICIONES_SHA`.
- El atributo `sandbox=""` de `index.html:181`, que es el único control que protege la escritura de `iframe.srcdoc` en `demo.js:155`.
- No hay variables de entorno, ficheros de configuración ni constructores.

**Sumideros de seguridad:** `innerHTML` en las líneas 135, 159, 167, 192 y 217; `srcdoc` en la 155; `DOMParser` en la 50; `crypto.subtle` en las 79, 86 y 89; `getRandomValues` en la 96.

---

##### (2) Sharp edges encontrados

Doy dos valoraciones de gravedad: la que sale de la tabla de la skill (por diseño) y el impacto real en esta web.

**SE-1. `validarUsuario` y `validarEdad` devuelven un array, que siempre es verdadero.**
- **Categoría:** 5, fallos silenciosos (confusión con un booleano).
- **Líneas:** 16-24, 26-35 y 269.
- **Gravedad:** Alta. El nombre `validarX` invita a `if (validarX(v))`, y eso acepta siempre. No la marco como Crítica porque el comentario de la l. 14 lo documenta.
- **Impacto actual:** nulo. La página y los tests usan `.every(r => r.ok)`. Que los tests tengan que redefinir su propio `acepta` (test l. 6) confirma el problema: cada consumidor tiene que reimplementar esa comprobación.
- **Reproducción:** `if (validarUsuario("<script>")) guardar();` entra siempre.
- **Corrección:** exportar `esUsuarioValido(v)` y `esEdadValida(v)` que devuelvan un booleano, o devolver `{ ok, reglas }`. La lista de reglas sólo debería usarse para pintar la interfaz.

**SE-2. La coerción con `String(valor)` valida un valor distinto del que se recibe.**
- **Categoría:** 2, valores por defecto peligrosos (null que esquiva la validación), con algo de la categoría 3.
- **Líneas:** 17 y 27.
- **Gravedad:** Media.
- **Impacto actual:** nulo. `form.x.value` siempre es una cadena.
- **Qué falla:**
  - `validarUsuario(undefined)` pasa las dos reglas, porque `"undefined"` tiene 9 letras de a-z.
  - `validarUsuario(null)` pasa como `"null"`.
  - `validarUsuario(["ana"])` también pasa.
- **Escenario:** en Node, si llega `req.body.usuario` sin ese campo, se acepta el usuario "undefined". Si llega un array, el array pasa la validación y continúa hacia abajo en el código.
- **Corrección:** si `typeof valor !== "string"`, que todas las reglas fallen (o lanzar `TypeError`). Añadir tests con `null`, `undefined` y `["ana"]`.

**SE-3. `escaparHTML` sólo sirve en ciertos contextos y devuelve una cadena plana.**
- **Categoría:** 6, seguridad basada en cadenas.
- **Líneas:** 39-45. El comentario de la l. 41 dice "atributo HTML" sin más matices.
- **Gravedad:** Media. Sube a Alta si se reutiliza como librería, porque el comentario anima a usarla en cualquier atributo.
- **Impacto actual:** ninguno. Todos los usos del fichero son correctos.
- **Escenarios de mal uso:**
  - `<a href="${escaparHTML(url)}">` con `javascript:alert(1)` se ejecuta al pulsar.
  - `<div title=${escaparHTML(x)}>` sin comillas, con `x onmouseover=alert(1)`, inyecta un atributo.
  - En `onclick="f('${escaparHTML(q)}')"`, el `&#39;` se decodifica antes de ejecutar el JS, así que `');alert(1);//` funciona.
  - Una cadena escapada y otra sin escapar no se distinguen. Es igual de fácil olvidar el escape que aplicarlo dos veces.
- **Corrección:**
  - Documentar: "sólo texto de elemento y valores de atributo entre comillas; nunca URL, `on*`, `style` ni `<script>`".
  - Para URL, una función aparte basada en `new URL()` que sólo admita los protocolos `http:` y `https:`.
  - Preferir siempre las API del DOM.

**SE-4. Plantillas con `innerHTML` donde la seguridad depende de recordar el escape en cada interpolación.**
- **Categoría:** 6.
- **Líneas:** 104-108, 135-139, 161-167 y 217-231.
- **Gravedad:** Media.
- **Impacto actual:** ninguno. He revisado todas las interpolaciones: o se escapan, o son seguras por construcción (hexadecimal de `aHex`, números, clases fijas elegidas por un booleano, `toLocaleString`).
- **Escenario:** la l. 163 muestra `attr.name`, que viene del HTML del atacante y puede contener `"` o `<`. Lo único que la protege es `escaparHTML`. Si alguien añade más adelante `${attr.value}` o `${texto}` sin escapar, hay XSS en el origen principal, que no está en sandbox ni tiene CSP.
- **Corrección:**
  - Construir los nodos con `createElement`, `textContent` y `replaceChildren`, o con una plantilla etiquetada `html\`` que escape por defecto.
  - Como defensa en profundidad, añadir en `index.html` un `<meta http-equiv="Content-Security-Policy" content="script-src 'self'; object-src 'none'; base-uri 'none'; require-trusted-types-for 'script'">`. La última directiva funciona sólo en Chromium.

**SE-5. `analizarHTML` es una lista negra que da por bueno lo que no reconoce ("sólo formato").**
- **Categoría:** 5, una verificación que "tiene éxito" ante entradas que no sabe clasificar.
- **Líneas:** 49-66 y 164.
- **Gravedad:** Media.
- **Impacto actual:** didáctico. Da una falsa sensación de seguridad, aunque no es un control: los controles reales son el sandbox y `textContent`. Además no se exporta.
- **Entradas que no detecta (verificadas por especificación):**
  - `<svg><script>alert(1)</script></svg>`. En el espacio de nombres SVG, `tagName` es `"script"` en minúsculas, así que la comparación `=== "SCRIPT"` falla.
  - `<a href="jav&#x09;ascript:alert(1)">`. El valor del atributo ya llega decodificado (`"jav\tascript:"`), por lo que la expresión regular no coincide. Pero el parser de URL elimina los tabuladores y saltos de línea, y el enlace se ejecuta. Lo mismo pasa con caracteres de control C0 al principio, como `&#x01;`, que `\s` no cubre.
  - `<iframe srcdoc="&lt;script&gt;alert(1)&lt;/script&gt;">`, que ejecuta código en el mismo origen.
  - Etiquetas peligrosas sin JS: `<base href>`, `<meta http-equiv=refresh>`, `<form action=https://...>` (phishing), `<style>` o `<link>` (exfiltración por CSS) e `<img src=https://rastreador>`.
- **Corrección:**
  - Comparar con `el.localName === "script"`.
  - Normalizar los atributos de URL con `value.replace(/[\t\n\r]/g,"").replace(/^[\u0000-\u0020]+/,"")`, o bien `new URL(v, location.href).protocol`.
  - Marcar `srcdoc`, `iframe`, `base`, `meta`, `form`, `object`, `embed`, `style` y `link`.
  - Cambiar el mensaje a "no se ha detectado nada conocido; esto es una lista negra incompleta, no un sanitizador (usa DOMPurify o la Sanitizer API)".

**SE-6. Precipicio de configuración: el `srcdoc` sólo es seguro gracias a `sandbox=""` en otro fichero.**
- **Categoría:** 4, precipicios de configuración.
- **Líneas:** demo.js 153-155 e index.html 181.
- **Gravedad por diseño:** Alta. Basta con editar un atributo, sin ningún aviso.
- **Impacto actual:** Bajo. Es la entrada del propio usuario (self-XSS) y la página no tiene secretos.
- **Escenario:** un desarrollador "arregla" la demo porque el `alert` no aparece. Añade `allow-scripts allow-same-origin`, o quita el sandbox. Un `srcdoc` hereda el origen del padre, así que el payload se ejecuta en `usuario.github.io`. Ese origen lo comparten todos los repositorios Pages del mismo usuario, incluido su `localStorage`.
- **Matiz del comentario de las l. 153-154:** `sandbox=""` no bloquea las cargas de red. Un `<img src="https://atacante/">` sigue filtrando la IP, y un `<meta refresh>` puede navegar el marco.
- **Corrección:**
  - Crear el iframe desde JS con su sandbox, o comprobar antes de escribir: `if (!iframe.hasAttribute("sandbox") || iframe.sandbox.length) { no escribir }`.
  - Anteponer en el srcdoc `<meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src 'unsafe-inline'">`.

**SE-7. `iteraciones` se valida, pero su mínimo es 1 y no tiene máximo.**
- **Categoría:** 4 (la trampa del "valor por defecto sensato" de config-patterns).
- **Líneas:** 82-85.
- **Gravedad:** Media.
- **Escenario:**
  - El propio test l. 48 usa `pbkdf2(pw, sal, 1000)`. Si se copia a producción, la derivación es unas 600 veces más débil sin ningún aviso.
  - Con `1e9`, el navegador o el proceso de Node se quedan colgados.
- **Lo que funciona bien:** 0, -1, 1.5, NaN, `null` y `"600000"` lanzan `RangeError`.
- **Corrección:** dejar una función interna `pbkdf2Bruto` sólo para el vector RFC con c=1. Exportar una `hashContrasena(pw)` con el número de iteraciones fijo. Si se mantiene el parámetro, exigir un mínimo de `PBKDF2_ITERACIONES` y un máximo de unos 10 millones.

**SE-8. La sal es una primitiva: se aceptan sales vacías, cortas o constantes, no se devuelven y no hay función de verificación.**
- **Categoría:** 3, primitivas frente a API semánticas, con algo de la categoría 2. Incluye el "comparison footgun".
- **Líneas:** 82, 90, 95-97 y 269.
- **Gravedad:** Media en general. La comparación con `===` es Baja.
- **Reproducción desde los propios tests:** se aceptan `TextEncoder().encode("salt")` (4 bytes) y `new Uint8Array(16)` (todo ceros).
- **Escenario:** `salAleatoria` no se exporta. Quien use la función desde Node escribirá `pbkdf2(pw, new Uint8Array(16))`, la misma sal para todos los usuarios. Además guardará el hash sin la sal ni las iteraciones. Y comparará con `hash === guardado`, que no es de tiempo constante; aunque con un hash lento y con sal ese ataque apenas es práctico.
- **Corrección:**
  - Generar la sal dentro si no se pasa y rechazar `sal.byteLength < 16`.
  - Devolver un formato autodescriptivo `pbkdf2-sha256$600000$<sal>$<hash>`.
  - Exportar `verificarContrasena(pw, guardado)` con una comparación de tiempo constante.

**SE-9. Un `texto` undefined o null se convierte en silencio en `""` o en `"null"`.**
- **Categoría:** 2.
- **Líneas:** 78 y 87.
- **Gravedad:** Alta. Sería Crítica si se usara como API para guardar contraseñas, que es justo el ejemplo "empty password allowed" de la tabla.
- **Impacto actual:** nulo. En el navegador siempre llega una cadena, y calcular el hash de una cadena vacía es una demostración legítima.
- **Reproducción:**
  - `await sha256(undefined) === await sha256("")` da `true` (`e3b0c442…`).
  - `pbkdf2(undefined, sal)` es igual que `pbkdf2("", sal)`. Con una clave de longitud cero, el resultado depende del motor; sé que Node y Chromium la aceptan, pero no lo he podido verificar.
- **Corrección:** si `typeof texto !== "string"`, lanzar `TypeError`. La política de contraseña no vacía corresponde a la capa de autenticación.

**SE-10. `sha256` se exporta con un nombre genérico y sin advertencia.**
- **Categoría:** 1 (crypto-apis: "usar hashes en lugar de KDF").
- **Líneas:** 77-80 y 269.
- **Gravedad:** Baja. Hay que elegirla a propósito.
- **Escenario:** alguien copia el ejemplo y guarda contraseñas con `sha256(password)`.
- **Corrección:** añadir el JSDoc "SÓLO DEMO: NO usar para contraseñas" y renombrarla a `sha256SoloDemo`, o no exportarla fuera de los tests.

**Revisado y sin problemas:**
- No se elige algoritmo ni modo: `"SHA-256"` y `"PBKDF2"` están fijos en el código.
- `getRandomValues` genera 16 bytes con un generador criptográfico.
- Sin Web Crypto, falla en modo cerrado (l. 190-194). El `catch` muestra el error con `textContent` (l. 233).
- **Expresiones regulares:** están ancladas y no tienen cuantificadores anidados, así que no hay ReDoS. En JS, `$` sin la bandera `m` no admite un `\n` final, de modo que `"ana\n"` se rechaza.
- Se usa `===` en todo el fichero, y no hay `parseInt`, `eval` ni `setTimeout` con cadena.
- `ENTIDADES[c]` sólo recibe claves de los 5 caracteres que deja pasar la expresión regular, así que no hay riesgo de prototype pollution.
- `validarEdad` rechaza `""`, `"0"`, `" 14"`, `"1e2"`, `"0x20"`, dígitos no ASCII y `"9999"`. Acepta `"014"` como 14, que es inocuo.

---

##### (3) Quality Checklist

- [x] **Casos cero, vacío y null probados.** Aplica: `validar*` (SE-2), `sha256`/`pbkdf2` con `texto` (SE-9), sal vacía (SE-8) e iteraciones 0, -1, NaN y null (correcto).
- [x] **Valores por defecto seguros.** Aplica: 600000 iteraciones y `sandbox=""` son seguros. El valor de retorno de los validadores no lo es (SE-1).
- [x] **Elección de algoritmo o modo.** Aplica: no hay ningún parámetro de algoritmo. La única "elección" es usar `sha256` o `pbkdf2` (SE-10).
- [x] **Confusión de tipos entre conceptos de seguridad.** Aplica en parte. Intercambiar `texto` y `sal` lanza `TypeError`, porque Web Crypto rechaza una sal de tipo cadena, así que eso está bien. Sí hay confusión entre cadenas escapadas y sin escapar (SE-3, SE-4) y entre arrays y cadenas (SE-2).
- [x] **Los tres adversarios.**
  - Scoundrel: en una web estática sólo controla su propio texto de entrada, o el HTML si es colaborador del repositorio (SE-6).
  - Lazy developer: SE-1, SE-7, SE-8 y SE-10.
  - Confused developer: SE-3 y SE-5.
- [x] **Las rutas de error no esquivan la seguridad.** Aplica: `RangeError` falla de forma visible y la ausencia de Web Crypto falla en cerrado. Los puntos débiles son "sólo formato" (SE-5) y `undefined` convertido en `""` (SE-9).
- [~] **Validación de la configuración.** Aplica sólo en parte. No hay variables de entorno ni ficheros de configuración. La única configuración es el atributo `sandbox` (SE-6).
- [~] **Parámetros de constructor validados.** No aplica literalmente porque no hay clases. Su equivalente son los parámetros con valor por defecto de `pbkdf2`: `iteraciones` se valida pero con un mínimo de 1 (SE-7), y `sal` no se valida (SE-8).

---

##### (4) Partes de la skill que no encajan

1. **Está pensada para diseñadores de API, librerías y configuración.** Este fichero es una demo cuyos únicos consumidores son la propia página y los tests. Por eso los escenarios de "lazy developer" son hipotéticos y he tenido que dar dos gravedades (por diseño y real).
2. **No tiene categorías para la web ni el DOM.** Faltan los sumideros `innerHTML`, `srcdoc`, sandbox y CSP, y la codificación según el contexto. `lang-javascript.md` cubre el lenguaje (`==`, prototype pollution, ReDoS, `eval`), no el DOM, así que he tenido que encajar estos hallazgos en las categorías 4, 5 y 6.
3. **SE-5 se acerca a lo que la skill excluye.** Los fallos de `analizarHTML` (`tagName` en SVG, el tabulador en `javascript:`) se parecen a "implementation bugs", que la skill manda a una revisión de código normal. Los incluyo porque su efecto es una verificación que falla en silencio.
4. **Choca con la inseguridad intencionada.** El panel inseguro y la exportación de `sha256` son inseguros a propósito porque es una web didáctica. Rechazar racionalizaciones como "nadie haría eso" o "está documentado" choca con esa finalidad.
5. **Contradicción interna de la skill.** La fase 4 pide reproducir y probar, pero las allowed-tools (Read, Grep, Glob) no permiten ejecutar nada. Las reproducciones quedan escritas y sin verificar.
6. **Buena parte de las referencias no aplican.**
   - De config-patterns no aplican las variables de entorno, el YAML, las rutas, los hostnames ni la precedencia.
   - De crypto-apis no aplican el cifrado, los nonces, AEAD ni el padding oracle, porque aquí no se cifra nada.
   - El agente `sharp-edges-analyzer` y las referencias `auth-patterns.md`, `case-studies.md` y `language-specific.md` no estaban disponibles. No me han hecho falta: no hay autenticación ni sesiones.

<details><summary>Resultado de herramienta</summary>

```
{"success":true,"message":"Report delivered to your caller."}
```

</details>
