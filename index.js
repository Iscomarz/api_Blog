const {conection} = require("./database/conection");
const express = require("express");
const cors = require("cors");

//Conectar a base de datos
conection();

//Crear servidor Node
const app = express();
const puerto = 3600;

//Config Cors
app.use(cors());

//Body a objeto js
app.use(express.json());//Recibir datos con content-tyoe app/json
app.use(express.urlencoded({extended:true})); //form urlencoded

//Rutas
const rutes_article = require("./rutes/articleRute");
app.use("/blog", rutes_article);


//Peticiones http
app.listen(puerto, () => {
    console.log("Servidor corriendo en el puerto: "+puerto);
})