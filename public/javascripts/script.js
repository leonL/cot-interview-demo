document.addEventListener("DOMContentLoaded", async function() {
  const provinces = await fetch("/api/provinces").then(res => res.json())
  
  const nav = document.getElementById("region-select")
  const detailsHeader = document.querySelector("#region-details h2")
  const detailsInfo = document.querySelector("#region-details p")
  const cityList = document.querySelector("#region-details ul")
  
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
      const cityListItemEls = getListItemElsForCities(cities)
      cityList.replaceChildren(...cityListItemEls)
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

function getListItemElsForCities(cities) {
  const els = cities.map(city => {
    let cityListItem = document.createElement('li')
    cityListItem.innerText = city.Municipality
    return cityListItem
  })
  return els
}