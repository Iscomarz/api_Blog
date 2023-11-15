const mongoose = require("mongoose");

const conection = async() =>{

    try {
       await mongoose.connect("mongodb://127.0.0.1:27017/db_blog");
       console.log("Conexion a base de datos")
    } catch (error) {
        console.log(error);
        throw new Error("Error en la conexion");
    }
    
}

module.exports = {
    conection
}