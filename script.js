/* // INCOMPLETE FEATURES //
// current conditions: display date, icon, temp, humidity, wind speed, UV index
// UV index gives a color based on air quality (favorable, moderate, severe)
// 5 day forecast when city is viewed: date, icon, temp, humidity
// display search history
// city in search history is clicked, presented current and future conditions
// open weather dashbard, presented with last searched city forecast


1. ajax call: forecast info
2. ajax call: current weather info
3. populate results to proper elements

*/ // --------------------- //

// // use imperial units (farhenheit) instead of default kelvin
// let units = "&units=imperial";


// API key
let apiKey = "f674676e9306d3ea9c5d2d7245918d40";


// input value (searched city)
let city = $(".form-control");

// forecast for searched city (currently using a pre-set city)
let forecastQueryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + "sacramento" + "&appid=" + apiKey;

// current weather for searched city (also usng a preset currently)
let currentQueryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + "chicago" + "&appid=" + apiKey;

// presets
let cities = ["Portland", "Kansas City", "Seattle", "Austin", "Orlando", "Chicago"];

// make a forEach loop to iterate over cities array?

// search for city
let citySearch = $(".form-control").val().trim(); // form-control = search bar

// search city button
let searchBtn = $("#searchBtn");

// display date in today's weather [working]
let display = moment().format("dddd" + ", " + "MMMM Do YYYY" + ", " + "h:mm a");
let date = $(".dateToday");
$(date).html(display);


// $(".btn").addEventListener("click", function() {
//     let city = $(".input");
//     let currentQueryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey;
//     console.log(currentQueryURL);

// })

// current weather ajax call
document.querySelector("#searchBtn").addEventListener("click", function() {
    // get current weather info
    console.log("hey")
    $.ajax({
        url: currentQueryURL,
        method: "GET"
    }).then (function(response){
        // current conditions
        // let weatherCond = list.weather.main;
        // let cityName = city.name;
        // let temp = list.main.temp;
        // let humidity = list.main.humidity;
        // let windSpeed = list.wind.speed
        // let icon = list.weather.icon;
        //response.Search.forEach(function(item){
        //let temperature = document.createElement("p");
        //temperature.textContent = temp;
        //$("#tempToday").appendChild(temperature);
        console.log(response)
        console.log(response.list.main.temp)
        //});
    });

})

// forecast weather ajax call
$.ajax({
     url: forecastQueryURL,
     method: "GET"
 }).then (function(response){
//     // forecast conditions
//     let forecastWindSpeed = forecast.windSpeed;
//     let forecastTemp = forecast.temperature.value;
//     let forecastHumidity = forecast.humidity.unit;
//     let createWind = document.createElement("p");
//     createWind.textContent = forecastWindSpeed;
//     $("#windSpeed1").appendChild(createWind);
 });



/////// WIP / Old / Experimentation /////////

// function weatherInfo() {
    // let city = $(this).attr("data");
    // $.ajax({
    //     url: currentQueryURL,
    //     method: "GET"
    // }).then (function(response) {
    //     let location = "api.openweathermap.org/data/2.5/uvi?" + 
    //         response.city.coord.lat + "&lon=" + response.city.coord.lon + "&appid=" + "2c6b4fcf87fab7effe688f8694416801" +
    //     console.log(location);  
    //     let result = response.city.name;
    //     let cityName = $(result).text(name);
    //     result.append(cityName);
    //     console.log(location);

    //     $("#searchBtn").on("click", function(event) {
    //         event.preventDefault();
    //         cities.push(citySearch);
    //     });
    // });  


// // register button click
// $(".btn").on("click", function() {
//     console.log($(".btn") + "clicked")
// }); 


// // current conditions
// let weatherCond = list.weather.main;
// let cityName = city.name;
// let temp = list.main.temp;
// let humidity = list.main.humidity;
// let windSpeed = list.wind.speed;
// let icon = list.weather.icon;
// UV index: 
// let uvIndex = 


// forecast conditions
// let forecastWindSpeed = forecast.windSpeed;
// let forecastTemp = forecast.temperature.value;
// let forecastHumidity = forecast.humidity.unit;
