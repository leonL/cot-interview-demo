var express = require('express');
var router = express.Router();

var db = require('../data/db')

// API routes
router.get('/provinces', function(req, res, next) {
  res.json(db.provinces)
});

router.get('/cities/:province', function(req, res, next) {
  const provinceParam = req.params.province.toLocaleLowerCase();
  const cities = db.cities;
  const citiesInProvince = cities.filter(city => {
    const cityProvice = city.Province.toLocaleLowerCase();
    return cityProvice === provinceParam;
  });
  res.json(citiesInProvince);
});

router.get('/cities', function(req, res, next) {
  res.json(db.cities)
});

module.exports = router;
