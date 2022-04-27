var express = require('express');
var router = express.Router();

var db = require('../data/db')
const cities = require('../data/cities')

// API routes
router.get('/provinces', function(req, res, next) {
  res.json(db.provinces)
});

router.get('/cities/:province', function(req, res, next) {
  const citiesInProvince = cities.whereProvince(req.params.province)
  const citiesSorted = cities.sortByPopulation(citiesInProvince)
  res.json(citiesSorted)
});

router.get('/cities', function(req, res, next) {
  res.json(db.cities)
});

module.exports = router;
