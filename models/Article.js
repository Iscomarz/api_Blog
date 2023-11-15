const {Schema, model } = require("mongoose");

const ArticleSchema = Schema({
    autor: {
        type: String,
        default: "Anonimo"
    },
    titulo: {
        type: String,
        require: true
    },
    contenido: {
        type: String,
        require: true
    },
    fecha: {
        type: Date,
        default: Date.now
    },
    imagen: {
        type: String
    },
    portada: Boolean
});

module.exports = model("Article", ArticleSchema, "articles");