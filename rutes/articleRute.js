var express = require('express');
var articleController = require('../controllers/articleController');

var api = express.Router();

api.post('/create', articleController.createArticle);
api.post('/update', articleController.updateArticle);
api.delete('/delete/:id', articleController.deleteArticle);
api.get('/getArticles/:ult?', articleController.getArticles);
api.get('/getArticle/:nombre', articleController.getArticle);

module.exports = api;