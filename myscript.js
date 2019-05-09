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
        $('.tokyo-three').append('Current Temperature: ' + temp + '</br> ');
        $('.tokyo-five').append('Max Temperature: ' + tempmax + '</br> ');
        $('.tokyo-seven').append('Humidity Level: ' + humidity + '</br> ');
        $('.tokyo-nine').append('Current Weather: ' + weatherdescription + '</br> ');
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
        $('.delhi-three').append('Current Temperature: ' + temp + '</br> ');
        $('.delhi-five').append('Max Temperature: ' + tempmax + '</br> ');
        $('.delhi-seven').append('Humidity Level: ' + humidity + '</br> ');
        $('.delhi-nine').append('Current Weather: ' + weatherdescription + '</br> ');
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
        $('.shanghai-three').append('Current Temperature: ' + temp + '</br> ');
        $('.shanghai-five').append('Max Temperature: ' + tempmax + '</br> ');
        $('.shanghai-seven').append('Humidity Level: ' + humidity + '</br> ');
        $('.shanghai-nine').append('Current Weather: ' + weatherdescription + '</br> ');
        //END OF MYWEATHERINTERPRETATION FUNCTION
    }
});


//5
$(document).ready(function(){

    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?id=1835847&units=imperial&APPID=504a1c4ddab9708a45613c5e25a1111d', //CHANGE THE URL TO YOUR API QUERY
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
        $('.seoul-three').append('Current Temperature: ' + temp + '</br> ');
        $('.seoul-five').append('Max Temperature: ' + tempmax + '</br> ');
        $('.seoul-seven').append('Humidity Level: ' + humidity + '</br> ');
        $('.seoul-nine').append('Current Weather: ' + weatherdescription + '</br> ');
        //END OF MYWEATHERINTERPRETATION FUNCTION
    }
});

//6
$(document).ready(function(){

    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?id=1701667&units=imperial&APPID=504a1c4ddab9708a45613c5e25a1111d', //CHANGE THE URL TO YOUR API QUERY
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
        $('.manila-three').append('Current Temperature: ' + temp + '</br> ');
        $('.manila-five').append('Max Temperature: ' + tempmax + '</br> ');
        $('.manila-seven').append('Humidity Level: ' + humidity + '</br> ');
        $('.manila-nine').append('Current Weather: ' + weatherdescription + '</br> ');
        //END OF MYWEATHERINTERPRETATION FUNCTION
    }
});

//7
$(document).ready(function(){

    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?id=5128638&units=imperial&APPID=504a1c4ddab9708a45613c5e25a1111d', //CHANGE THE URL TO YOUR API QUERY
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
        $('.newyork-three').append('Current Temperature: ' + temp + '</br> ');
        $('.newyork-five').append('Max Temperature: ' + tempmax + '</br> ');
        $('.newyork-seven').append('Humidity Level: ' + humidity + '</br> ');
        $('.newyork-nine').append('Current Weather: ' + weatherdescription + '</br> ');
        //END OF MYWEATHERINTERPRETATION FUNCTION
    }
});

//7
$(document).ready(function(){

    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?id=3530597&units=imperial&APPID=504a1c4ddab9708a45613c5e25a1111d', //CHANGE THE URL TO YOUR API QUERY
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
        $('.mexicocity-three').append('Current Temperature: ' + temp + '</br> ');
        $('.mexicocity-five').append('Max Temperature: ' + tempmax + '</br> ');
        $('.mexicocity-seven').append('Humidity Level: ' + humidity + '</br> ');
        $('.mexicocity-nine').append('Current Weather: ' + weatherdescription + '</br> ');
        //END OF MYWEATHERINTERPRETATION FUNCTION
    }
});

//8
$(document).ready(function(){

    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?id=3167895&units=imperial&APPID=504a1c4ddab9708a45613c5e25a1111d', //CHANGE THE URL TO YOUR API QUERY
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
        $('.saopaolo-three').append('Current Temperature: ' + temp + '</br> ');
        $('.saopaolo-five').append('Max Temperature: ' + tempmax + '</br> ');
        $('.saopaolo-seven').append('Humidity Level: ' + humidity + '</br> ');
        $('.saopaolo-nine').append('Current Weather: ' + weatherdescription + '</br> ');
        //END OF MYWEATHERINTERPRETATION FUNCTION
    }
});

//9
$(document).ready(function(){

    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?id=2267226&units=imperial&APPID=504a1c4ddab9708a45613c5e25a1111d', //CHANGE THE URL TO YOUR API QUERY
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
        $('.eko-three').append('Current Temperature: ' + temp + '</br> ');
        $('.eko-five').append('Max Temperature: ' + tempmax + '</br> ');
        $('.eko-seven').append('Humidity Level: ' + humidity + '</br> ');
        $('.eko-nine').append('Current Weather: ' + weatherdescription + '</br> ');
        //END OF MYWEATHERINTERPRETATION FUNCTION
    }
});

//10
$(document).ready(function(){

    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?id=360631&units=imperial&APPID=504a1c4ddab9708a45613c5e25a1111d', //CHANGE THE URL TO YOUR API QUERY
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
        $('.cairo-three').append('Current Temperature: ' + temp + '</br> ');
        $('.cairo-five').append('Max Temperature: ' + tempmax + '</br> ');
        $('.cairo-seven').append('Humidity Level: ' + humidity + '</br> ');
        $('.cairo-nine').append('Current Weather: ' + weatherdescription + '</br> ');
        //END OF MYWEATHERINTERPRETATION FUNCTION
    }
});

//11
$(document).ready(function(){

    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?id=1185117&units=imperial&APPID=504a1c4ddab9708a45613c5e25a1111d', //CHANGE THE URL TO YOUR API QUERY
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
        $('.dhaka-three').append('Current Temperature: ' + temp + '</br> ');
        $('.dhaka-five').append('Max Temperature: ' + tempmax + '</br> ');
        $('.dhaka-seven').append('Humidity Level: ' + humidity + '</br> ');
        $('.dhaka-nine').append('Current Weather: ' + weatherdescription + '</br> ');
        //END OF MYWEATHERINTERPRETATION FUNCTION
    }
});

//12
$(document).ready(function(){

    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?id=524901&units=imperial&APPID=504a1c4ddab9708a45613c5e25a1111d', //CHANGE THE URL TO YOUR API QUERY
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
        $('.moscow-three').append('Current Temperature: ' + temp + '</br> ');
        $('.moscow-five').append('Max Temperature: ' + tempmax + '</br> ');
        $('.moscow-seven').append('Humidity Level: ' + humidity + '</br> ');
        $('.moscow-nine').append('Current Weather: ' + weatherdescription + '</br> ');
        //END OF MYWEATHERINTERPRETATION FUNCTION
    }
});
