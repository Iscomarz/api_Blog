const validator = require("validator");
const Article = require("../models/Article");

const createArticle = async (req, res) => {
  let params = req.body;
  const article = new Article(params);

  try {
    if (
      validator.isEmpty(params.titulo) ||
      validator.isEmpty(params.contenido)
    ) {
      throw new Error("No se han validado los datos");
    }

    const articulo = await article.save();

    if (!articulo) {
      return res.status(400).json({
        status: "error",
        message: "No se guardo el articulo",
      });
    } else {
      return res.status(200).json({
        message: "Creado",
        status: "success",
        articulo: articulo,
      });
    }
  } catch (error) {
    return res.status(400).json({
      status: "error",
      message: "Faltan datos por enviar",
    });
  }
};

const getArticles = async (req, res) => {
    try {
      const articulos = await Article.find({});

      if (!articulos) {
        return res.status(404).json({
          status: "error",
          message: "No hay registros"
        });
      } else {
        return res.status(200).send({
          status: "success",
          articulos
        });
      }
    } catch (error) {
      return res.status(500).json({
        status: "error",
        message: "Error en el servidor"
      });
    }
  }

  const getArticle = async (req, res) => {
    let title = req.params.titulo;
    try {
      const articulo = await Article.findOne({titulo: title});

      if (!articulo) {
        return res.status(404).json({
          status: "error",
          message: "No se encontro el atriculo"
        });
      } else {
        return res.status(200).send({
          status: "success",
          articulo
        });
      }
    } catch (error) {
      return res.status(500).json({
        status: "error",
        message: "Error en el servidor"
      });
    }
  }

const updateArticle = (req, res) => {};

const deleteArticle = async (req, res) => {
    let id = req.params.id;
    try {
      const articulo = await Article.findOneAndDelete({_id: id}).exec();

      if (!articulo) {
        return res.status(404).json({
          status: "error",
          message: "No se encontro el atriculo"
        });
      } else {
        return res.status(200).send({
          status: "success",
          message: "Borrado",
          articulo
        });
      }
    } catch (error) {
      return res.status(500).json({
        status: "error",
        message: "Error en el servidor"
      });
    }
};

module.exports = {
  createArticle,
  updateArticle,
  deleteArticle,
  getArticles,
  getArticle
};
