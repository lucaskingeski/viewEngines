var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('comidas', { title: 'Comidas' });
});

router.get('/hamburguer', function(req, res, next) {
    res.render('hamburguer', { title: 'Hambúrguer' });
});

router.get('/lasanha', function(req, res, next) {
    res.render('lasanha', { title: 'Lasanha' });
});

module.exports = router;
