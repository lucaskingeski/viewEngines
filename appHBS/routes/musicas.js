var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('musicas', { title: 'Musicas' });
});

router.get('/rock', function(req, res, next) {
    res.render('rock', { title: 'Rock' });
});

router.get('/rap', function(req, res, next) {
    res.render('rap', { title: 'Rap' });
});

module.exports = router;
