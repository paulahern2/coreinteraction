//THESE ARE THE VARIABLES WE WILL USE
//THESE ARE THE VARIABLES WE WILL USE
var windspeed; //Wind speed. Unit Default: meter/sec, Metric: meter/sec, Imperial: miles/hour.
var winddeg; //Wind direction, degrees (meteorological)
var temp; //Temperature. Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
var tempmin;
var tempmax;
var pressure; //Atmospheric pressure (on the sea level, if there is no sea_level or grnd_level data), hPa
var humidity; //Humidity, %
var weathertext; //Group of weather parameters (Rain, Snow, Extreme etc.)
var weatherdescription; //Weather condition within the group
var cloudiness; //Cloudiness, %

//1
$(document).ready(function(){

    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?id=1850144&units=imperial&APPID=504a1c4ddab9708a45613c5e25a1111d', //CHANGE THE URL TO YOUR API QUERY
        dataType: 'jsonp',
        success: function(results){
            weathertext = results.weather[0].main;
            weatherdescription = results.weather[0].description;
            windspeed = results.wind.speed;
            winddeg = results.wind.deg;
            tempmin = results.main.temp_min;
            tempmax = results.main.temp_max;
            temp = results.main.temp;
            pressure = results.main.pressure;
            humidity = results.main.humidity;
            cloudiness = results.clouds.all;

            myWeatherInterpretation();

        }
    });
    function myWeatherInterpretation(){
        //THIS IS WHERE YOU CAN CUSTOMIZE YOUR PAGE'S FUNCTIONS

        //JUST SEEING IF THE VALUES COME THROUGH
        $('.tokyo-one').append('windspeed: ' + windspeed + '</br> ');
        $('.tokyo-two').append('winddeg: ' + winddeg + '</br> ');
        $('.tokyo-three').append('temp: ' + temp + '</br> ');
        $('.tokyo-four').append('tempmin: ' + tempmin + '</br> ');
        $('.tokyo-five').append('tempmax: ' + tempmax + '</br> ');
        $('.tokyo-six').append('pressure: ' + pressure + '</br> ');
        $('.tokyo-seven').append('humidity: ' + humidity + '</br> ');
        $('.tokyo-eight').append('weathertext: ' + weathertext + '</br> ');
        $('.tokyo-nine').append('weatherdescription: ' + weatherdescription + '</br> ');
        $('.tokyo-ten').append('cloudiness: ' + cloudiness + '</br> ');
        //END OF MYWEATHERINTERPRETATION FUNCTION
    }
});
//2
$(document).ready(function(){

    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?id=1273294&units=imperial&APPID=504a1c4ddab9708a45613c5e25a1111d', //CHANGE THE URL TO YOUR API QUERY
        dataType: 'jsonp',
        success: function(results){
            weathertext = results.weather[0].main;
            weatherdescription = results.weather[0].description;
            windspeed = results.wind.speed;
            winddeg = results.wind.deg;
            tempmin = results.main.temp_min;
            tempmax = results.main.temp_max;
            temp = results.main.temp;
            pressure = results.main.pressure;
            humidity = results.main.humidity;
            cloudiness = results.clouds.all;

            myWeatherInterpretation();

        }
    });
    function myWeatherInterpretation(){
        //THIS IS WHERE YOU CAN CUSTOMIZE YOUR PAGE'S FUNCTIONS

        //JUST SEEING IF THE VALUES COME THROUGH
        $('.delhi-one').append('windspeed: ' + windspeed + '</br> ');
        $('.delhi-two').append('winddeg: ' + winddeg + '</br> ');
        $('.delhi-three').append('temp: ' + temp + '</br> ');
        $('.delhi-four').append('tempmin: ' + tempmin + '</br> ');
        $('.delhi-five').append('tempmax: ' + tempmax + '</br> ');
        $('.delhi-six').append('pressure: ' + pressure + '</br> ');
        $('.delhi-seven').append('humidity: ' + humidity + '</br> ');
        $('.delhi-eight').append('weathertext: ' + weathertext + '</br> ');
        $('.delhi-nine').append('weatherdescription: ' + weatherdescription + '</br> ');
        $('.delhi-ten').append('cloudiness: ' + cloudiness + '</br> ');
        //END OF MYWEATHERINTERPRETATION FUNCTION
    }
});

//3
$(document).ready(function(){

    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?id=1796231&units=imperial&APPID=504a1c4ddab9708a45613c5e25a1111d', //CHANGE THE URL TO YOUR API QUERY
        dataType: 'jsonp',
        success: function(results){
            weathertext = results.weather[0].main;
            weatherdescription = results.weather[0].description;
            windspeed = results.wind.speed;
            winddeg = results.wind.deg;
            tempmin = results.main.temp_min;
            tempmax = results.main.temp_max;
            temp = results.main.temp;
            pressure = results.main.pressure;
            humidity = results.main.humidity;
            cloudiness = results.clouds.all;

            myWeatherInterpretation();

        }
    });
    function myWeatherInterpretation(){
        //THIS IS WHERE YOU CAN CUSTOMIZE YOUR PAGE'S FUNCTIONS

        //JUST SEEING IF THE VALUES COME THROUGH
        $('.shanghai-one').append('windspeed: ' + windspeed + '</br> ');
        $('.shanghai-two').append('winddeg: ' + winddeg + '</br> ');
        $('.shanghai-three').append('temp: ' + temp + '</br> ');
        $('.shanghai-four').append('tempmin: ' + tempmin + '</br> ');
        $('.shanghai-five').append('tempmax: ' + tempmax + '</br> ');
        $('.shanghai-six').append('pressure: ' + pressure + '</br> ');
        $('.shanghai-seven').append('humidity: ' + humidity + '</br> ');
        $('.shanghai-eight').append('weathertext: ' + weathertext + '</br> ');
        $('.shanghai-nine').append('weatherdescription: ' + weatherdescription + '</br> ');
        $('.shanghai-ten').append('cloudiness: ' + cloudiness + '</br> ');
        //END OF MYWEATHERINTERPRETATION FUNCTION
    }
});
