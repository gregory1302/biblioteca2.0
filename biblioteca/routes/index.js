var express = require('express');
var router = express.Router();

// GET home page.
router.get('/', function(req, res) {
  res.redirect('/catalog');
});

router.get('/sol', function(req, res, next) {
  res.send('Estamos no verão!');
});

module.exports = router;

