var express = require('express');
var router = express.Router();

var db = require('../data/db')

// API routes
router.get('/provinces', function(req, res, next) {
  res.json(db.provinces)
});

router.get('/cities/:province', function(req, res, next) {
  const populationKey = 'Population(2016)';
  const provinceParam = req.params.province.toLocaleLowerCase();
  const cities = db.cities;

  const citiesInProvince = cities.filter(city => {
    const cityProvice = city.Province.toLocaleLowerCase();
    return cityProvice === provinceParam;
  });

  const citiesInProviceByPopulation = citiesInProvince.sort((aCity, bCity) => {
    const aCityPopulation = parseIntegerFromStringWithCommas(aCity[populationKey]);  
    const bCityPopulation = parseIntegerFromStringWithCommas(bCity[populationKey]);
    return aCityPopulation - bCityPopulation; // a - b is ascending order
  }); 

  res.json(citiesInProviceByPopulation);
});

router.get('/cities', function(req, res, next) {
  res.json(db.cities)
});

function parseIntegerFromStringWithCommas(string) {
  const stringWithoutCommas = string.replace(/,/g, '');
  const integer = Number(stringWithoutCommas);
  return integer;
}

module.exports = router;
