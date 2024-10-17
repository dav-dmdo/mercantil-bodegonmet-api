// index.js
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// Middleware para parsear JSON
app.use(express.json());

// Rutas
app.get("/", (req, res) => {
  res.send("¡Hola, mundo desde mi API!");
});

// Rutas
const users = [
  { id: 1, name: "David" },
  { id: 2, name: "Carlos" },
];

app.get("/api/users", (req, res) => {
  res.json(users);
});

app.post("/api/users", (req, res) => {
  const newUser = { id: users.length + 1, name: req.body.name };
  users.push(newUser);
  res.status(201).json(newUser);
});

// Levantar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
