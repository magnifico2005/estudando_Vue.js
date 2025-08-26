const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const sqlite3 = require("sqlite3").verbose();
const axios = require("axios");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Conexão SQLite
const db = new sqlite3.Database("./db.sqlite");

// Criar tabela se não existir
db.run("CREATE TABLE IF NOT EXISTS items (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT)");

// CRUD básico
app.get("/items", (req, res) => {
  db.all("SELECT * FROM items", [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

app.post("/items", (req, res) => {
  const { name } = req.body;
  db.run("INSERT INTO items(name) VALUES(?)", [name], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ id: this.lastID, name });
  });
});

app.delete("/items/:id", (req, res) => {
  const { id } = req.params;
  db.run("DELETE FROM items WHERE id = ?", [id], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ deleted: this.changes });
  });
});

app.put("/items/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  db.run("UPDATE items SET name = ? WHERE id = ?", [name, id], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ updated: this.changes });
  });
});

// Importar dados da API pública
app.get("/import", async (req, res) => {
  try {
    const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts?_limit=5");
    const stmt = db.prepare("INSERT INTO items(name) VALUES(?)");
    data.forEach(post => {
      stmt.run(post.title);
    });
    stmt.finalize();
    res.json({ imported: data.length });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(3000, () => console.log("Backend rodando na porta 3000"));
