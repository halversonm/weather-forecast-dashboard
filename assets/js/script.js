var searchInput = document.querySelector(".searchInput")
var searchBtn = document.querySelector(".searchBtn")
var cityValue = document.querySelector("#cityValue")
var currentIcon = document.querySelector("#currentIcon")
var temp = document.querySelector("#temp")
var windSpeed = document.querySelector("#wind-speed")
var humidity = document.querySelector("#humidity")


// on click on searchBtn we want to grab thae value of what the user typed in, and fetch fetchCurrent()
searchBtn.addEventListener("click", function () {
    var city = searchInput.value
    fetchCurrent(city)
})

// function that passes in value of search parameter, and fetchs api based on that query
function fetchCurrent(cityName) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=36effebef790a646c9774867989342d3`)
        .then(function (res) {
            return res.json()
        })
        .then(function (data) {
            console.log(data)
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