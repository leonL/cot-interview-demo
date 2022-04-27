const allCities = require("./cities.json")

function whereProvince(province, cities = allCities) {
  const provinceParam = province.toLowerCase()
  const citiesInProvince = cities.filter(city => {
    const cityProvice = city.Province.toLocaleLowerCase()
    return cityProvice === provinceParam
  })
  return citiesInProvince;
};

function sortByPopulation(cities = allCities, asc = true, year = 2016) {
  let sorted
  if (asc) {
    sorted = sortByPopAsc(cities, year)
  } else {
    sorted = sortByPopDesc(cities, year)
  }
  return sorted
}

function sortByPopAsc(cities = allCities, year) {
  const sorted = cities.sort((aCity, bCity) => {
    return getPopulationAsInt(aCity, year) - getPopulationAsInt(bCity, year)
  });
  return sorted
};

function sortByPopDesc(cities = allCities, year) {
  const sorted = cities.sort((aCity, bCity) => {
    return getPopulationAsInt(bCity, year) - getPopulationAsInt(aCity, year)
  });
  return sorted
};

function getPopulationAsInt(city, year) {
  const populationAsString = city[`Population(${year})`]
  return parseIntegerFromStringWithCommas(populationAsString)
}

function parseIntegerFromStringWithCommas(string) {
  const stringWithoutCommas = string.replace(/,/g, '')
  const integer = Number(stringWithoutCommas)
  return integer
};

module.exports = {
  whereProvince,
  sortByPopulation
};

