// my API key:  2c6b4fcf87fab7effe688f8694416801


// display using imperial system instead of kelvin (&units=imperial)
// city input
// preset cities for the user to click
// save previous searches
// main info i need: city, temp, humidity, date, weather icon, wind speed, uv index

function weatherInfo() {
    var city = $(this).attr("")
    var queryURL = "api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=2c6b4fcf87fab7effe688f8694416801"


    $.ajax({
        url: queryURL,
        method: "GET"

    }).then (function(response) {
        var location = "api.openweathermap.org/data/2.5/uvi?" + "2c6b4fcf87fab7effe688f8694416801" + response.city.coord.lat + "&lon=" + response.city.coord.lon;
        console.log(response);  

        var result = $("#city");
        var name = response.city.name;
        var cityName = $(result).text(name);
        result.append(cityName);
    });

    var displayDate = moment().format("dddd, MMMM Do YYYY");
    var date = $(".date");
    $(date).html(display);
};