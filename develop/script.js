var weather = document.getElementById('weather');
var fetchButton = document.getElementById('fetch-button');
var city = "";
var weatherList = document.querySelector('ul');

    function getWeather(event){
        event.preventDefault()
        city = document.getElementById("city").value
        var requestURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7259d9fc9f72d9fbf5aa3654fd96d2ed`
        fetch(requestURL)
        .then(function (response){
            return response.json();
        })
        .then(function (response) {
        
         console.log(response)
       //Displays searched city's name in jumbotron
         $("#weather").html("<h1>" + response.name + response.weather.icon);
        //Displays searched city's temperature 
         $('#temp').html("<p>" + " Temperature " + response.main.temp);
        //Displays searched city's humidity 
         $("#humidity").html("<p>" + response.main.humidity + " Humidity ");
        //Displays searched city's wind speed
         $("#wind-speed").html("<p>" + response.wind.speed + " Wind Speed");



       });
    };
fetchButton.addEventListener('click', getWeather);