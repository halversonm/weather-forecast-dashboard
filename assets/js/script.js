var searchInput = document.querySelector(".searchInput")
var searchBtn = document.querySelector(".searchBtn")

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
        })
}