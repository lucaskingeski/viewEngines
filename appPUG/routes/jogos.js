var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('jogos', { title: 'Jogos' });
});

router.get('/acao', function(req, res, next) {
    res.render('acao', { title: 'Ação' });
});

router.get('/rpg', function(req, res, next) {
    res.render('rpg', { title: 'RPG' });
});

module.exports = router;
