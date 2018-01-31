// import boilerplate express stuff
var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Code Experiment Template', desc: 'Type code below and express your dreams' });
});

module.exports = router;
