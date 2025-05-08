const apiKey = "53114e866f4f87edd967921883722bbb"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const weatherIcon = document.querySelector(".first-i i")

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`)

    if(response.status == 404){
        document.querySelector(".error").style.display = "block"
        document.querySelector(".weather").style.display = "none"
    }else{
        var data = await response.json()

    document.querySelector(".city").innerHTML = data.name
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C"
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%"
    document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h"

    if(data.weather[0].main == "Clouds"){
        weatherIcon.className = "fa-solid fa-cloud-sun" // Clase de Font Awesome
        weatherIcon.style.fontSize = "90px" // Ajusta el tamaño
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.classList.add("fa-sun")
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.classList.add("fa-cloud-rain")
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.classList.add("fa-cloud-drizzle") 
    }
    else if(data.weather[0].main == "Thunderstorm"){
        weatherIcon.classList.add("fa-bolt") 
    }
    else if(data.weather[0].main == "Snow"){
        weatherIcon.classList.add("fa-snowflake") 
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.classList.add("fa-smog") 
    }

    document.querySelector(".weather").style.display = "block"
    document.querySelector(".error").style.display = "none"
    }

    

}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value)
})
