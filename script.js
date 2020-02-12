// my API key:  2c6b4fcf87fab7effe688f8694416801

// preset cities
var cities = ["Portland", "Kansas City", "Seattle", "Austin", "Orlando", "Chicago"]

// display date in today's weather [working]
var display = moment().format("dddd, MMMM Do");
var date = $(".dateToday");
$(date).html(display);

// today: display date, icon, temp, humidity, wind speed, UV index [not working]
// 5 day forecast: date, icon, temp, humidity [not working]
// display previous searches [not working]




/////// WIP / attempts /////////
/* 

function weatherInfo() {
    var city = $(this).attr("data");
    var queryURL = "api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=2c6b4fcf87fab7effe688f8694416801";

    $.ajax({
        url: queryURL,
        method: "GET"

    }).then (function(response) {
        var location = "api.openweathermap.org/data/2.5/uvi?" + "2c6b4fcf87fab7effe688f8694416801" + response.city.coord.lat + "&lon=" + response.city.coord.lon;
        console.log(response);  

        var result = response.city.name;
        var cityName = $(result).text(name);
        result.append(cityName);
        console.log(location);
    });
    
    $("#searchBtn").on("click", function (event) {
        event.preventDefault();
    
        var city = $(".form-control").val().trim();
        cities.push(city);
    });
}; 
*/