const express = require("express");
const app = express();
const PORT = 3000;
const path = require("path");

app.use(express.static(path.join(__dirname, "public")));

/* Enrutadores */

const mainRouter = require("./routers/main.js");


/* Rutas */

app.use("/", mainRouter);




app.listen( PORT, ()=>console.log(`Servidor funcionando en ${PORT}\n http://localhost:${PORT}` ));



