/* // INCOMPLETE FEATURES //
// current conditions: UV index
// UV index gives a color based on air quality (favorable, moderate, severe)
// 5 day forecast when city is viewed: date, icon, temp, humidity
// display search history
// city in search history is clicked, presented current and future conditions
// open weather dashbard, presented with last searched city forecast


1. ajax call: forecast info
2. ajax call: current weather info
3. populate results to proper elements

*/ // --------------------- //


// API key
let apiKey = "f674676e9306d3ea9c5d2d7245918d40";

// search for city
let city = document.getElementById("form").textContent; // form-control = search bar

// forecast for searched city (currently using a pre-set city)
let forecastQueryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=" + apiKey;

// current weather for searched city (also usng a preset currently)
let currentQueryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + apiKey;

// let cities = ["Portland", "Sacramento", "Seattle", "Austin", "Orlando", "Chicago"];
// presets
let portland = "https://api.openweathermap.org/data/2.5/weather?q=portland&units=imperial&appid=" + apiKey;
let seattle = "https://api.openweathermap.org/data/2.5/weather?q=seattle&units=imperial&appid=" + apiKey;
let austin = "https://api.openweathermap.org/data/2.5/weather?q=austin&units=imperial&appid=" + apiKey;
let orlando = "https://api.openweathermap.org/data/2.5/weather?q=orlando&units=imperial&appid=" + apiKey;
let chicago = "https://api.openweathermap.org/data/2.5/weather?q=chicago&units=imperial&appid=" + apiKey;
let sacramento = "https://api.openweathermap.org/data/2.5/weather?q=sacramento&units=imperial&appid=" + apiKey;

// preset city ajax calls
document.getElementById("portland").addEventListener("click", function () {
    $.ajax ({
        url: portland,
        method: "GET"
    }).then (function(response) {
        document.getElementById("city").append("Portland")
        document.getElementById("tempToday").append(response.main.temp)
        document.getElementById("windToday").append(response.wind.speed + "mph")
        document.getElementById("humidityToday").append(response.main.humidity + "%")
    });
});
document.getElementById("seattle").addEventListener("click", function () {
    $.ajax ({
        url: seattle,
        method: "GET"
    }).then (function(response) {
        document.getElementById("city").append("Seattle")
        document.getElementById("tempToday").append(response.main.temp)
        document.getElementById("windToday").append(response.wind.speed + "mph")
        document.getElementById("humidityToday").append(response.main.humidity + "%")
    });
});
document.getElementById("austin").addEventListener("click", function () {
    $.ajax ({
        url: austin,
        method: "GET"
    }).then (function(response) {
        document.getElementById("city").append("Austin")
        document.getElementById("tempToday").append(response.main.temp)
        document.getElementById("windToday").append(response.wind.speed + "mph")
        document.getElementById("humidityToday").append(response.main.humidity + "%")
    });
});
document.getElementById("orlando").addEventListener("click", function () {
    $.ajax ({
        url: orlando,
        method: "GET"
    }).then (function(response) {
        document.getElementById("city").append("Orlando")
        document.getElementById("tempToday").append(response.main.temp)
        document.getElementById("windToday").append(response.wind.speed + "mph")
        document.getElementById("humidityToday").append(response.main.humidity + "%")
    });
});
document.getElementById("chicago").addEventListener("click", function () {
    $.ajax ({
        url: chicago,
        method: "GET"
    }).then (function(response) {
        document.getElementById("city").append("Chicago")
        document.getElementById("tempToday").append(response.main.temp)
        document.getElementById("windToday").append(response.wind.speed + "mph")
        document.getElementById("humidityToday").append(response.main.humidity + "%")
    });
});
document.getElementById("sacramento").addEventListener("click", function () {
    $.ajax ({
        url: sacramento,
        method: "GET"
    }).then (function(response) {
        document.getElementById("city").append("Sacramento")
        document.getElementById("tempToday").append(response.main.temp)
        document.getElementById("windToday").append(response.wind.speed + "mph")
        document.getElementById("humidityToday").append(response.main.humidity + "%")
    });
});


// WIP //

let portlandForecast = "https://api.openweathermap.org/data/2.5/forecast?q=portland&units=imperial&appid=" + apiKey;

document.getElementById("portland").addEventListener("click", function() {
    $.ajax({
        url: portlandForecast,
        method: "GET"
    }).then(function(response){
        document.getElementById("day1").append(response.forecast.temperature.value + "degrees")
    });
});




// display date in today's weather [working]
let display = moment().format("dddd" + ", " + "MMMM Do YYYY" + ", " + "h:mm a");
let date = $(".dateToday");
$(date).html(display);


// current weather ajax call, based on search - WIP
searchBtn.addEventListener("click", function(event) {
    // get current weather info
    console.log("hey")
    $.ajax ({
        url: currentQueryURL,
        method: "GET"
    }).then (function(response){
        // current conditions
        console.log(response.main.temp)
        console.log(response.list.main.temp)
        //});
        
    });
    // stop the page from refreshing on search
    event.preventDefault();
});