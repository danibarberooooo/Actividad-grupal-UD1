// Fragmento de prueba 2 para la skill "revision-entradas-salidas" (versión 1.1).
// Código deliberadamente vulnerable con fines didácticos: NO desplegar.
const express = require("express");
const path = require("path");
const db = require("./db"); // envoltorio de SQLite con get(sql, params)
const app = express();

const CARPETA = path.join(__dirname, "facturas");

app.get("/factura", (req, res) => {
  const archivo = req.query.archivo;
  res.sendFile(path.join(CARPETA, archivo));
});

app.get("/perfil/:id", async (req, res) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id) || id < 1) return res.status(400).json({ error: "id no válido" });
  const usuario = await db.get("SELECT nombre, bio FROM usuarios WHERE id = ?", [id]);
  res.json(usuario ?? { error: "no existe" });
});

app.post("/config", express.json(), (req, res) => {
  const opciones = eval("(" + req.body.opciones + ")");
  res.send("Guardado: " + Object.keys(opciones).length + " opciones");
});

app.listen(3000);
