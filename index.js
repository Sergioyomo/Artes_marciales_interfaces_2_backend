// Importar librería express --> web server
const express = require("express");
// Importar librería path, para manejar rutas de ficheros en el servidor
const path = require("path");
// Importar libreria CORS
const cors = require("cors");
// Importar gestores de rutas
const senseiRoutes = require("./routes/senseiRoutes");
const aprendizRoutes = require("./routes/aprendizRoutes");

const app = express();
const port = process.env.PORT || 3000;

// Configurar middleware para analizar JSON en las solicitudes
app.use(express.json());
// Configurar CORS para admitir cualquier origen
app.use(cors());

// Configurar rutas de la API Rest
app.use("/api/sensei", senseiRoutes);
app.use("/api/aprendiz", aprendizRoutes);

// Configurar el middleware para servir archivos estáticos desde el directorio 'public\old_js_vainilla'
app.use(express.static(path.join(__dirname, "public","old_js_vainilla")));

// Ruta para manejar las solicitudes al archivo index.html
// app.get('/', (req, res) => {
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "old_js_vainilla","index.html"));
});


// Iniciar el servidor solo si no estamos en modo de prueba
if (process.env.NODE_ENV !== "test") {
  // Iniciar el servidor
  app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
  });
}
// Exportamos la aplicación para poder hacer pruebas
module.exports = app;