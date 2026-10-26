// Pruebas de las funciones de la demostración. Ejecutar con: node --test tests/demo.test.js
const test = require("node:test");
const assert = require("node:assert/strict");
const {
  esUsuarioValido, esEdadValida, escaparHTML, sha256, pbkdf2, PBKDF2_MAX_ITERACIONES,
} = require("../js/demo.js");

test("esUsuarioValido acepta nombres de la lista blanca", () => {
  for (const v of ["ana", "ana_garcia", "user_2024", "a".repeat(20)]) {
    assert.equal(esUsuarioValido(v), true, v);
  }
});

test("esUsuarioValido rechaza entradas fuera de la lista blanca", () => {
  for (const v of ["", "ab", "a".repeat(21), "Ana", "josé", "ana garcia", " ana", "ana\n", "<script>", "ana'--", "ana;rm"]) {
    assert.equal(esUsuarioValido(v), false, JSON.stringify(v));
  }
});

test("esUsuarioValido y esEdadValida rechazan valores que no son cadenas (hallazgo SE-2 de sharp-edges)", () => {
  for (const v of [undefined, null, ["ana"], 17, { toString: () => "ana" }]) {
    assert.equal(esUsuarioValido(v), false, String(v));
    assert.equal(esEdadValida(v), false, String(v));
  }
});

test("esEdadValida acepta enteros en rango, incluidos los límites", () => {
  for (const v of ["14", "17", "120"]) assert.equal(esEdadValida(v), true, v);
});

test("esEdadValida rechaza fuera de rango y formatos no enteros", () => {
  for (const v of ["", "13", "121", "-5", "17.5", " 17", "1e2", "0x20", "abc", "9999"]) {
    assert.equal(esEdadValida(v), false, JSON.stringify(v));
  }
});

test("escaparHTML codifica los cinco caracteres especiales", () => {
  assert.equal(escaparHTML(`<img src=x onerror="alert('1')">&`),
    "&lt;img src=x onerror=&quot;alert(&#39;1&#39;)&quot;&gt;&amp;");
  assert.equal(escaparHTML("texto normal"), "texto normal");
});

test("sha256 coincide con el vector de prueba de FIPS 180-2 ('abc')", async () => {
  assert.equal(await sha256("abc"),
    "ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad");
});

test("pbkdf2 coincide con el vector de prueba de RFC 7914 §11 (passwd/salt/c=1)", async () => {
  const sal = new TextEncoder().encode("salt");
  assert.equal(await pbkdf2("passwd", sal, 1),
    "55ac046e56e3089fec1691c22544b605f94185216dde0465e68b9d57c20dacbc");
});

test("pbkdf2 con sales distintas produce hashes distintos", async () => {
  const a = await pbkdf2("verano2024", new Uint8Array(16).fill(1), 1000);
  const b = await pbkdf2("verano2024", new Uint8Array(16).fill(2), 1000);
  assert.notEqual(a, b);
});

test("pbkdf2 rechaza un número de iteraciones no válido", async () => {
  for (const n of [0, -1, 1.5, NaN, PBKDF2_MAX_ITERACIONES + 1]) {
    await assert.rejects(pbkdf2("x", new Uint8Array(16), n), RangeError, String(n));
  }
});

test("sha256 y pbkdf2 rechazan contraseñas que no son cadenas (hallazgo SE-9 de sharp-edges)", async () => {
  for (const v of [undefined, null, 123]) {
    await assert.rejects(sha256(v), TypeError, String(v));
    await assert.rejects(pbkdf2(v, new Uint8Array(16), 1), TypeError, String(v));
  }
});
