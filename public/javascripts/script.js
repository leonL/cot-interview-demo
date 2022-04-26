document.addEventListener("DOMContentLoaded", async function() {
  const provinces = await fetch("/api/provinces").then(res => res.json())
  
  const nav = document.getElementById("region-select")
  const detailsHeader = document.querySelector("#region-details h2")
  const detailsInfo = document.querySelector("#region-details p")
  const cityTableBody = document.querySelector("#region-details table tbody")
  
  provinces.forEach(province => {
    const button = document.createElement("button")
    button.innerText = province.short
    button.classList.add("region-option")
    
    button.addEventListener("click", async function() {
      [...nav.children].forEach(child => child.classList.remove("selected"))
      this.classList.add("selected")
      detailsHeader.innerText = province.name
      detailsInfo.innerHTML = `<h3>Capital</h3> ${province.capital}`

      const cities = await fetchCitiesForProvice(province.name)
      const cityTableRowEls = getTableRowElsForCities(cities)
      cityTableBody.replaceChildren(...cityTableRowEls)
    })
    nav.appendChild(button)
  })
})

async function fetchCitiesForProvice(province) {
  const provinceName = province.toLowerCase();
  const response = await fetch(`api/cities/${provinceName}`);
  const cities = await response.json();
  return cities;
} 

function getTableRowElsForCities(cities) {
  const els = cities.map(city => {
    const cityTableRow = document.createElement('tr')
    cityTableRow.append(
      createTableDataEl(city.Municipality),
      createTableDataEl(city["Population(2016)"])
    )
    return cityTableRow
  })
  return els
}

function createTableDataEl(data) {
  const cell = document.createElement('td')
  cell.innerText = data
  return cell
}