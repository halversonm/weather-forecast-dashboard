var searchInput = document.querySelector(".searchInput")
var searchBtn = document.querySelector(".searchBtn")
var cityValue = document.querySelector("#cityValue")
var currentIcon = document.querySelector("#currentIcon")
var temp = document.querySelector("#temp")
var windSpeed = document.querySelector("#wind-speed")
var humidity = document.querySelector("#humidity")
var card = document.querySelectorAll(".card")
var forecastTemp = document.querySelectorAll(".forecastTemp")
var forecastWind = document.querySelectorAll(".forecastWind")
var forecastHumidity = document.querySelectorAll(".forecastHumidity")
var dayPlusOne = document.getElementById("dayPlusOne")
var dayPlusTwo = document.getElementById("dayPlusTwo")
var dayPlusThree = document.getElementById("dayPlusThree")
var dayPlusFour = document.getElementById("dayPlusFour")
var dayPlusFive = document.getElementById("dayPlusFive")
var forecastIconOne = document.getElementById("forecastIconOne")
var forecastIconTwo = document.getElementById("forecastIconTwo")
var forecastIconThree = document.getElementById("forecastIconThree")
var forecastIconFour = document.getElementById("forecastIconFour")
var forecastIconFive = document.getElementById("forecastIconFive")

// on click on searchBtn we want to grab thae value of what the user typed in, and fetch fetchCurrent()
searchBtn.addEventListener("click", function () {
    var city = searchInput.value
    fetchCurrent(city)
    fetchForecast(city)
})

// function that passes in value of search parameter, and fetchs api based on that query
function fetchCurrent(cityName) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=36effebef790a646c9774867989342d3`)
        .then(function (res) {
            return res.json()
        })
        .then(function (data) {
            var gmt = new Date()
            var day = gmt.getDate()
            var month = gmt.getMonth() + 1
            var year = gmt.getFullYear()
            var date = `(${month}/${day}/${year})`
            cityValue.innerHTML = data.name + " " + date
            currentIcon.setAttribute("src", "https://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png")
            currentIcon.setAttribute("alt", data.weather[0].description)
            temp.innerHTML = "Temp: " + Math.round(data.main.temp) + " &#176F"
            windSpeed.innerHTML = "Wind: " + Math.round(data.wind.speed) + "mph"
            humidity.innerHTML = "Humidity: " + Math.round(data.main.humidity) + "%"
        })
}



function fetchForecast(city) {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=36effebef790a646c9774867989342d3`)
        .then(function (res) {
            return res.json()
        })
        .then(function (data) {
            console.log(data)
            var gmt = new Date()
            var day = gmt.getDate()
            console.log(data)
                forecastIconOne.setAttribute("src", "https://openweathermap.org/img/wn/" + data.list[7].weather[0].icon + "@2x.png")
                forecastIconTwo.setAttribute("src", "https://openweathermap.org/img/wn/" + data.list[15].weather[0].icon + "@2x.png")
                forecastIconThree.setAttribute("src", "https://openweathermap.org/img/wn/" + data.list[23].weather[0].icon + "@2x.png")
                forecastIconFour.setAttribute("src", "https://openweathermap.org/img/wn/" + data.list[31].weather[0].icon + "@2x.png")
                forecastIconFive.setAttribute("src", "https://openweathermap.org/img/wn/" + data.list[39].weather[0].icon + "@2x.png")
                forecastIconOne.setAttribute("alt", data.list[7].weather[0].description)
                forecastIconTwo.setAttribute("alt", data.list[15].weather[0].description)
                forecastIconThree.setAttribute("alt", data.list[23].weather[0].description)
                forecastIconFour.setAttribute("alt", data.list[31].weather[0].description)
                forecastIconFive.setAttribute("alt", data.list[39].weather[0].description)
                forecastTemp[0].innerHTML = "Temp: " + Math.round(data.list[7].main.temp)+ " &#176F"
                forecastTemp[1].innerHTML = "Temp: " + Math.round(data.list[15].main.temp) + " &#176F"
                forecastTemp[2].innerHTML = "Temp: " + Math.round(data.list[23].main.temp) + " &#176F"
                forecastTemp[3].innerHTML = "Temp: " + Math.round(data.list[31].main.temp) + " &#176F"
                forecastTemp[4].innerHTML = "Temp: " + Math.round(data.list[39].main.temp) + " &#176F"
                forecastWind[0].innerHTML = "Wind: " + data.list[7].wind.speed + "mph"
                forecastWind[1].innerHTML = "Wind: " + data.list[15].wind.speed + "mph"
                forecastWind[2].innerHTML = "Wind: " + data.list[23].wind.speed + "mph"
                forecastWind[3].innerHTML = "Wind: " + data.list[31].wind.speed + "mph"
                forecastWind[4].innerHTML = "Wind: " + data.list[39].wind.speed + "mph"
                forecastHumidity[0].innerHTML = "Humidity: " + data.list[7].main.humidity + "%"
                forecastHumidity[1].innerHTML = "Humidity: " + data.list[15].main.humidity + "%"
                forecastHumidity[2].innerHTML = "Humidity: " + data.list[23].main.humidity + "%"
                forecastHumidity[3].innerHTML = "Humidity: " + data.list[31].main.humidity + "%" 
                forecastHumidity[4].innerHTML = "Humidity: " + data.list[39].main.humidity + "%" 
        })
}