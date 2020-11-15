/* // INCOMPLETE FEATURES //
// current conditions: UV index
// UV index gives a color based on air quality (favorable, moderate, severe)
// 5 day forecast when city is viewed: date, icon, temp, humidity
// display search history
// city in search history is clicked, presented current and future conditions
// open weather dashboard, presented with last searched city forecast

*/ // --------------------- //


// let forecastQueryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=" + apiKey;


// search for city
let city = document.getElementById("form").textContent;

// display current date & time, & update time every second
function updateTime() {
    document.getElementById("currentCon").innerHTML = (moment().format("dddd" + ", " + "MMMM Do YYYY" + ", " + "h:mm a"));
};
setInterval(updateTime, 1000);

updateTime();


// search for a city function
function searchWeather (city) {

    let apiKey = "f674676e9306d3ea9c5d2d7245918d40";
    let currentQueryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + apiKey;
    
    $.ajax ({
        url: currentQueryURL,
        method: "GET"
    }).then (function(response) {
        // get user input
        document.getElementById("city").textContent = city;
        // capitilze each word in the input
        document.getElementById("city").style.textTransform = "capitalize";
        document.getElementById("tempToday").textContent = "Temperature: " + Math.round(response.main.temp) + "\u00B0" + " F";
        document.getElementById("windToday").textContent = "Wind Speed: " + Math.round(response.wind.speed) + " mph";
        document.getElementById("humidityToday").textContent = "Humidity: " + response.main.humidity + "%";
    });
};


document.getElementById("searchBtn").addEventListener("click", function (event) {
    event.preventDefault();
    // get textcontent value
    let city = document.getElementById("form").value;
    searchWeather(city);
});

// select all elements with class of presetBtn - these are the preset cities
let presetBtns = document.querySelectorAll(".presetBtn");

// on every presetBtn element: get text content of button (preset cities) then perform ajax call
presetBtns.forEach(element => {
    element.addEventListener("click", function () {
        let cityText = this.textContent;
        cityText = cityText.split(", ");
        cityText = cityText[0];
        searchWeather(cityText);
    });
});