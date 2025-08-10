const express = require("express");
const mysql2 = require("mysql2");
const path = require("path");

const app = express();

app.set("view engine", "ejs");

//console.log(__dirname);

app.set("views",path.join(__dirname,"views"));


// Middleware para servir archivos estáticos (CSS, JS, imágenes, etc.)
// Cambia 'styles' por la carpeta que contiene tus archivos estáticos
app.use(express.static(path.join(__dirname, "styles")));

// Middleware para manejar datos JSON y formularios
app.use(express.json());
app.use(express.urlencoded({ extended: false }));





///import ventaGanadoRoutes from "./routes/ventaGanado.js";

app.get("/ganado", (req, res) => {
    try {
        res.render("ganado");
    } catch (error) {  
        console.error("Error al renderizar la vista:", error);
        res.status(500).send("Error interno del servidor");
    } 
});

app.get("/", (req, res) => {
    try {
        res.render("index");
    } catch (error) {  
        console.error("Error al renderizar la vista:", error);
        res.status(500).send("Error interno del servidor");
    } 
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}/`);
})






