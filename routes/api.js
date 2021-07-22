var express = require('express');
var router = express.Router();

var db = require('../data/db')

// API routes
router.get('/provinces', function(req, res, next) {
  res.json(db.provinces)
});

router.get('/cities', function(req, res, next) {
  res.json(db.cities)
});

module.exports = router;
