var express = require('express');
var router = express.Router();

const produtos = [ 
    { id: 1, nome: 'Produto A', preco: 10.00 },
    { id: 2, nome: 'Produto B', preco: 20.00 },
    { id: 3, nome: 'Produto C', preco: 30.00 },
    { id: 4, nome: 'Produto D', preco: 40.00 },
    { id: 5, nome: 'Produto E', preco: 50.00 }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('produtos/index', { produtos });
});

module.exports = router;
