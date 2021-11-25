const express = require("express");
const app = express();
const fs = require("fs");
const PORT = 8080;
const { get } = require('http');

app.get("/productos", (req, res) => {
  const data = fs.readFileSync(`./productos.txt`, "utf-8");
  const arrayProductos = JSON.parse(data);
  res.json({
    items: arrayProductos,
    cantidad: arrayProductos.length,
  });
});

app.get("/productosRandom", (req, res) => {
  const data = fs.readFileSync(`./productos.txt`, "utf-8");
  const arrayProductos = JSON.parse(data);
  let numAleatorio = Math.floor(Math.random() * arrayProductos.length);
  let producto = arrayProductos[numAleatorio];
  res.json({ producto: producto})
});


const server = app.listen(PORT, (req, res) => {
  console.log(`listening on port: ${PORT}`);
});

server.on('error', error => {
    console.log('error en el servidor:', error);
});