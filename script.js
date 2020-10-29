// INCOMPLETE FEATURES //
// current conditions: display date, icon, temp, humidity, wind speed, UV index
// UV index gives a color based on air quality (favorable, moderate, severe)
// 5 day forecast when city is viewed: date, icon, temp, humidity
// display search history
// city in search history is clicked, presented current and future conditions
// open weather dashbard, presented with last searched city forecast


// --------------------- //


// API key
let apiKey = "2c6b4fcf87fab7effe688f8694416801";

// convert into imperial units (farhenheit)
let units = "&units=imperial";

// input value (searched city)
let city = $(".input");

// forecast for searched city
let queryURL = "api.openweathermap.org/data/2.5/forecast?q=" + city + units + "&appid=" + apiKey;

// presets
let cities = ["Portland", "Kansas City", "Seattle", "Austin", "Orlando", "Chicago"];

// search for city
let citySearch = $(".form-control").val().trim(); // form-control = search

// current conditions
let weatherCond = list.weather.main;
let cityName = city.name;
let temp = list.main.temp;
let humidity = list.main.humidity;
let windSpeed = list.wind.speed;
let icon = list.weather.icon;
// UV index: 

// forecast conditions
let forecastWindSpeed = forecast.windSpeed;
let forcastTemp = forecast.temperature.value;
let forecastHumidity = forecast.humidity.unit;


// display date in today's weather [working]
let display = moment().format("dddd, MMMM Do");
let date = $(".dateToday");
$(date).html(display);



/////// WIP / Experimentation /////////
function weatherInfo() {
    // let city = $(this).attr("data");
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then (function(response) {
        // let location = "api.openweathermap.org/data/2.5/uvi?" + "2c6b4fcf87fab7effe688f8694416801" + 
        //     response.city.coord.lat + "&lon=" + response.city.coord.lon;
        // console.log(location);  
        let result = response.city.name;
        let cityName = $(result).text(name);
        result.append(cityName);
        console.log(location);

        $("#searchBtn").on("click", function(event) {
            event.preventDefault();
            cities.push(citySearch);
        });
    });  
}; 

// register button click
$(".btn").on("click", function() {
    console.log($(".btn") + "clicked")
}); 