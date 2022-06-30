// API KEY: "a0299fe9db89e13aed1b31424a866e32" - OPENWEATHERMAP

const tempElement = document.querySelector(".temperature-value h2");
const iconElement = document.querySelector(".weather-icon");

// APP DATA
const weather = {};

weather.temperature = {
    unit: "celsius"
};

// APP VARS E CONST
const kelvin = 273;
// API KEY
const key_weather = "a0299fe9db89e13aed1b31424a866e32";

// VERIFICAR SE O NAVEGADOR SUPORTA GEOLOCALIZAÇÃO

if('geolocation' in navigator){
    navigator.geolocation.getCurrentPosition(setPosition, showError);
}else{
    console.log("Navegador não suporta geolocalização");
}

// CONFIGURANDO A POSIÇÃO DO USUÁRIO
function setPosition(position){
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    getWeather(latitude, longitude);
}

// MOSTRAR ERRO QUANDO HÁ PROBLEMA NO SERVIÇO DE GEOLOCALIZAÇÃO
function showError(error){ 
    console.log(error.message);
}

// PEGANDO A TEMPERATURA DA API OPENWEATHERMAP
function getWeather(latitude, longitude){
    let api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key_weather}`;

    fetch(api) 
        .then(function(response){
            let data =  response.json();
            return data;
        })
        .then(function(data){
            weather.temperature.value = Math.floor(data.main.temp - kelvin);
            weather.iconId = data.weather[0].icon;
        })
        .then(function(){
            displayWeather();
        });
}

// MOSTRAR A TEMPERATURA NA UI
function displayWeather(){
    iconElement.innerHTML = `<img src="icons/${weather.iconId}.png"/>`;
    tempElement.innerHTML = `${weather.temperature.value}°<span>C</span>`;
}