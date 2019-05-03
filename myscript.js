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

//4
$(document).ready(function(){

    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?id=1642907&units=imperial&APPID=504a1c4ddab9708a45613c5e25a1111d', //CHANGE THE URL TO YOUR API QUERY
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
        $('.jakarta-one').append('windspeed: ' + windspeed + '</br> ');
        $('.jakarta-two').append('winddeg: ' + winddeg + '</br> ');
        $('.jakarta-three').append('temp: ' + temp + '</br> ');
        $('.jakarta-four').append('tempmin: ' + tempmin + '</br> ');
        $('.jakarta-five').append('tempmax: ' + tempmax + '</br> ');
        $('.jakarta-six').append('pressure: ' + pressure + '</br> ');
        $('.jakarta-seven').append('humidity: ' + humidity + '</br> ');
        $('.jakarta-eight').append('weathertext: ' + weathertext + '</br> ');
        $('.jakarta-nine').append('weatherdescription: ' + weatherdescription + '</br> ');
        $('.jakarta-ten').append('cloudiness: ' + cloudiness + '</br> ');
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
        $('.seoul-one').append('windspeed: ' + windspeed + '</br> ');
        $('.seoul-two').append('winddeg: ' + winddeg + '</br> ');
        $('.seoul-three').append('temp: ' + temp + '</br> ');
        $('.seoul-four').append('tempmin: ' + tempmin + '</br> ');
        $('.seoul-five').append('tempmax: ' + tempmax + '</br> ');
        $('.seoul-six').append('pressure: ' + pressure + '</br> ');
        $('.seoul-seven').append('humidity: ' + humidity + '</br> ');
        $('.seoul-eight').append('weathertext: ' + weathertext + '</br> ');
        $('.seoul-nine').append('weatherdescription: ' + weatherdescription + '</br> ');
        $('.seoul-ten').append('cloudiness: ' + cloudiness + '</br> ');
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
        $('.manila-one').append('windspeed: ' + windspeed + '</br> ');
        $('.manila-two').append('winddeg: ' + winddeg + '</br> ');
        $('.manila-three').append('temp: ' + temp + '</br> ');
        $('.manila-four').append('tempmin: ' + tempmin + '</br> ');
        $('.manila-five').append('tempmax: ' + tempmax + '</br> ');
        $('.manila-six').append('pressure: ' + pressure + '</br> ');
        $('.manila-seven').append('humidity: ' + humidity + '</br> ');
        $('.manila-eight').append('weathertext: ' + weathertext + '</br> ');
        $('.manila-nine').append('weatherdescription: ' + weatherdescription + '</br> ');
        $('.manila-ten').append('cloudiness: ' + cloudiness + '</br> ');
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
        $('.newyork-one').append('windspeed: ' + windspeed + '</br> ');
        $('.newyork-two').append('winddeg: ' + winddeg + '</br> ');
        $('.newyork-three').append('temp: ' + temp + '</br> ');
        $('.newyork-four').append('tempmin: ' + tempmin + '</br> ');
        $('.newyork-five').append('tempmax: ' + tempmax + '</br> ');
        $('.newyork-six').append('pressure: ' + pressure + '</br> ');
        $('.newyork-seven').append('humidity: ' + humidity + '</br> ');
        $('.newyork-eight').append('weathertext: ' + weathertext + '</br> ');
        $('.newyork-nine').append('weatherdescription: ' + weatherdescription + '</br> ');
        $('.newyork-ten').append('cloudiness: ' + cloudiness + '</br> ');
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
        $('.mexicocity-one').append('windspeed: ' + windspeed + '</br> ');
        $('.mexicocity-two').append('winddeg: ' + winddeg + '</br> ');
        $('.mexicocity-three').append('temp: ' + temp + '</br> ');
        $('.mexicocity-four').append('tempmin: ' + tempmin + '</br> ');
        $('.mexicocity-five').append('tempmax: ' + tempmax + '</br> ');
        $('.mexicocity-six').append('pressure: ' + pressure + '</br> ');
        $('.mexicocity-seven').append('humidity: ' + humidity + '</br> ');
        $('.mexicocity-eight').append('weathertext: ' + weathertext + '</br> ');
        $('.mexicocity-nine').append('weatherdescription: ' + weatherdescription + '</br> ');
        $('.mexicocity-ten').append('cloudiness: ' + cloudiness + '</br> ');
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
        $('.saopaolo-one').append('windspeed: ' + windspeed + '</br> ');
        $('.saopaolo-two').append('winddeg: ' + winddeg + '</br> ');
        $('.saopaolo-three').append('temp: ' + temp + '</br> ');
        $('.saopaolo-four').append('tempmin: ' + tempmin + '</br> ');
        $('.saopaolo-five').append('tempmax: ' + tempmax + '</br> ');
        $('.saopaolo-six').append('pressure: ' + pressure + '</br> ');
        $('.saopaolo-seven').append('humidity: ' + humidity + '</br> ');
        $('.saopaolo-eight').append('weathertext: ' + weathertext + '</br> ');
        $('.saopaolo-nine').append('weatherdescription: ' + weatherdescription + '</br> ');
        $('.saopaolo-ten').append('cloudiness: ' + cloudiness + '</br> ');
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
        $('.eko-one').append('windspeed: ' + windspeed + '</br> ');
        $('.eko-two').append('winddeg: ' + winddeg + '</br> ');
        $('.eko-three').append('temp: ' + temp + '</br> ');
        $('.eko-four').append('tempmin: ' + tempmin + '</br> ');
        $('.eko-five').append('tempmax: ' + tempmax + '</br> ');
        $('.eko-six').append('pressure: ' + pressure + '</br> ');
        $('.eko-seven').append('humidity: ' + humidity + '</br> ');
        $('.eko-eight').append('weathertext: ' + weathertext + '</br> ');
        $('.eko-nine').append('weatherdescription: ' + weatherdescription + '</br> ');
        $('.eko-ten').append('cloudiness: ' + cloudiness + '</br> ');
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
        $('.cairo-one').append('windspeed: ' + windspeed + '</br> ');
        $('.cairo-two').append('winddeg: ' + winddeg + '</br> ');
        $('.cairo-three').append('temp: ' + temp + '</br> ');
        $('.cairo-four').append('tempmin: ' + tempmin + '</br> ');
        $('.cairo-five').append('tempmax: ' + tempmax + '</br> ');
        $('.cairo-six').append('pressure: ' + pressure + '</br> ');
        $('.cairo-seven').append('humidity: ' + humidity + '</br> ');
        $('.cairo-eight').append('weathertext: ' + weathertext + '</br> ');
        $('.cairo-nine').append('weatherdescription: ' + weatherdescription + '</br> ');
        $('.cairo-ten').append('cloudiness: ' + cloudiness + '</br> ');
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
        $('.dhaka-one').append('windspeed: ' + windspeed + '</br> ');
        $('.dhaka-two').append('winddeg: ' + winddeg + '</br> ');
        $('.dhaka-three').append('temp: ' + temp + '</br> ');
        $('.dhaka-four').append('tempmin: ' + tempmin + '</br> ');
        $('.dhaka-five').append('tempmax: ' + tempmax + '</br> ');
        $('.dhaka-six').append('pressure: ' + pressure + '</br> ');
        $('.dhaka-seven').append('humidity: ' + humidity + '</br> ');
        $('.dhaka-eight').append('weathertext: ' + weathertext + '</br> ');
        $('.dhaka-nine').append('weatherdescription: ' + weatherdescription + '</br> ');
        $('.dhaka-ten').append('cloudiness: ' + cloudiness + '</br> ');
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
        $('.moscow-one').append('windspeed: ' + windspeed + '</br> ');
        $('.moscow-two').append('winddeg: ' + winddeg + '</br> ');
        $('.moscow-three').append('temp: ' + temp + '</br> ');
        $('.moscow-four').append('tempmin: ' + tempmin + '</br> ');
        $('.moscow-five').append('tempmax: ' + tempmax + '</br> ');
        $('.moscow-six').append('pressure: ' + pressure + '</br> ');
        $('.moscow-seven').append('humidity: ' + humidity + '</br> ');
        $('.moscow-eight').append('weathertext: ' + weathertext + '</br> ');
        $('.moscow-nine').append('weatherdescription: ' + weatherdescription + '</br> ');
        $('.moscow-ten').append('cloudiness: ' + cloudiness + '</br> ');
        //END OF MYWEATHERINTERPRETATION FUNCTION
    }
});
