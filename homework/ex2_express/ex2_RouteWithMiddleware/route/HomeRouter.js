var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('home/home', {someValue : "There is a value"});
});

router.get('/page1', function(req, res, next) {
  res.send('page1');
});

router.get('/page2', function(req, res, next) {
  res.send('page1');
});

module.exports = router;
