document.addEventListener("DOMContentLoaded", async function() {
  const provinces = await fetch("/api/provinces").then(res => res.json())
  
  const nav = document.getElementById("region-select")
  const detailsHeader = document.querySelector("#region-details h2")
  const detailsInfo = document.querySelector("#region-details p")
  
  provinces.forEach(province => {
    const button = document.createElement("button")
    button.innerText = province.short
    button.classList.add("region-option")
    
    button.addEventListener("click", function() {
      [...nav.children].forEach(child => child.classList.remove("selected"))
      this.classList.add("selected")
      detailsHeader.innerText = province.name
      detailsInfo.innerHTML = `<h3>Capital</h3> ${province.capital}`
    })
    nav.appendChild(button)
  })
})