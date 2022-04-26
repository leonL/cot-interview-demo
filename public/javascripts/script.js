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
      const cities = await fetchCitiesForProvice(province.name)
      const cityTableRowEls = getTableRowElsForCities(cities, province.capital)
      cityTableBody.replaceChildren(...cityTableRowEls)
    })
    nav.appendChild(button)
  })
  nav.firstChild.click();
})

async function fetchCitiesForProvice(province) {
  const provinceName = province.toLowerCase();
  const response = await fetch(`api/cities/${provinceName}`);
  const cities = await response.json();
  return cities;
} 

function getTableRowElsForCities(cities, capital) {
  const els = cities.map(city => {
    const cityTableRow = document.createElement('tr')
    
    let cityNameCellChildEls;
    if (city.Municipality === capital) { 
      cityNameCellChildEls = [
        createSpanElement(city.Municipality, true),
        "\u00A0",
        createSpanElement("(capital)")
      ]
    } else {
      cityNameCellChildEls = [createSpanElement(city.Municipality)]
    } 
    const cityPopCellChildEl = [createSpanElement(city["Population(2016)"])]

    cityTableRow.append(
      createTableDataEl(cityNameCellChildEls),
      createTableDataEl(cityPopCellChildEl)
    )
    return cityTableRow
  })
  return els
}

function createSpanElement(text, bold = false) {
  const span = document.createElement('span')
  span.innerText = text
  if (bold) span.className = "bold"
  return span
 }

function createTableDataEl(children) {
  const cell = document.createElement('td')
  cell.append(...children)
  return cell
}