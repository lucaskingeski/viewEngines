var express = require('express');
var router = express.Router();


    var produtosLista = [
        { id: 1, nome: 'Caneta', preco: 2.50 },
        { id: 2, nome: 'Caderno', preco: 12.00 },
        { id: 3, nome: 'Mochila', preco: 79.90 }
    ];

/* GET produtos page. */
router.get('/', function(req, res, next) {
  res.render('produtos', { title: 'Produtos', produtos: produtosLista });
});

module.exports = router;