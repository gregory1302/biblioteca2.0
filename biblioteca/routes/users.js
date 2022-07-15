var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Estamos na rota Users');
});

router.get('/sol', function(req, res, next) {
  res.send('Estamos no verão!');
});

module.exports = router;
