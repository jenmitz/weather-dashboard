// API key:  2c6b4fcf87fab7effe688f8694416801

// preset major cities
let cities = ["Portland", "Kansas City", "Seattle", "Austin", "Orlando", "Chicago"]

// display date in today's weather [working]
let display = moment().format("dddd, MMMM Do");
let date = $(".dateToday");
$(date).html(display);

// current conditions: display date, icon, temp, humidity, wind speed, UV index [not working]

// UV index gives a color based on air quality (favorable, moderate, severe) [not working]

// 5 day forecast when city is viewed: date, icon, temp, humidity [not working]

// display search history [not working]

// city in search history is clicked, presented current and future conditions [not working]

// open weather dashbard, present with las searched city forecast [not working]



/////// WIP / attempts /////////

function weatherInfo() {
    let city = $(this).attr("data");
    let queryURL = "api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=2c6b4fcf87fab7effe688f8694416801";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then (function(response) {
        let location = "api.openweathermap.org/data/2.5/uvi?" + "2c6b4fcf87fab7effe688f8694416801" + response.city.coord.lat + "&lon=" + response.city.coord.lon;
        console.log(response);  

        let result = response.city.name;
        let cityName = $(result).text(name);
        result.append(cityName);
        console.log(location);
    });
    
    $("#searchBtn").on("click", function(event) {
        event.preventDefault();
    
        let city = $(".form-control").val().trim(); // form-control = search
        cities.push(city);
    });
}; 