# Fragmento de prueba para la skill "revision-entradas-salidas".
# Código deliberadamente vulnerable con fines didácticos: NO desplegar.
from flask import Flask, request
import sqlite3
import hashlib
import subprocess

app = Flask(__name__)

@app.route("/buscar")
def buscar():
    nombre = request.args.get("nombre", "")
    con = sqlite3.connect("tienda.db")
    filas = con.execute(
        f"SELECT nombre, precio FROM productos WHERE nombre LIKE '%{nombre}%'"
    ).fetchall()
    html = "<h1>Resultados para " + nombre + "</h1><ul>"
    for producto, precio in filas:
        html += f"<li>{producto}: {precio} €</li>"
    return html + "</ul>"

@app.route("/producto/<int:id_producto>")
def producto(id_producto):
    con = sqlite3.connect("tienda.db")
    fila = con.execute(
        "SELECT nombre, precio FROM productos WHERE id = ?", (id_producto,)
    ).fetchone()
    return {"nombre": fila[0], "precio": fila[1]} if fila else ({"error": "no existe"}, 404)

@app.route("/ping")
def ping():
    host = request.args.get("host", "")
    salida = subprocess.run("ping -c 1 " + host, shell=True, capture_output=True, text=True)
    return "<pre>" + salida.stdout + "</pre>"

@app.route("/registro", methods=["POST"])
def registro():
    usuario = request.form["usuario"]
    clave = request.form["clave"]
    hash_clave = hashlib.sha256(clave.encode()).hexdigest()
    con = sqlite3.connect("tienda.db")
    con.execute("INSERT INTO usuarios (usuario, hash) VALUES (?, ?)", (usuario, hash_clave))
    con.commit()
    return "Usuario creado"
