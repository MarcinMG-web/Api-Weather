const api ={
    key:"326e392dadf902217a5368875eb6200a",
    baseurl:"https://api.openweathermap.org/data/2.5/",
}

const searchbox = document.querySelector('.serch-box');
searchbox.addEventListener('keypress', setQuery);

function setQuery(evt){
    if (evt.keyCode == 13){
        getResults(searchbox.value);
       
     } 
}


function getResults (query) {
    fetch(`${api.baseurl}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then(weather => {
        return weather.json();
    }).then(displayResults);

}

function displayResults(weather){

    let city = document.querySelector(".location .city");
    city.innerText = `${weather.name}, ${weather.sys.country}`;
    
    let now = new Date();
    let data = document.querySelector(".location .data");
    data.innerText = dateBuilder(now);

    let temprature = document.querySelector(".current .tem");
    temprature.innerHTML = `${Math.round(weather.main.temp)} <span> °C </span>`;

    let weatherNow = document.querySelector(".current .weather");
    weatherNow.innerHTML = weather.weather[0].main;

    let hotColdTemperature = document.querySelector(".current .hi-low");
    hotColdTemperature.innerHTML = `${Math.round(weather.main.temp_min)}°C / ${Math.round(weather.main.temp_max)}°C`;

    let pressure = document.querySelector(".current .pressure");
    pressure.innerText = `Pressure: ${(weather.main.pressure)} hPa`;

    let humidity = document.querySelector(".current .humidity");
    humidity.innerText = `Humidity: ${weather.main.humidity} %`;

}

function dateBuilder(d) {

    let months = ["January", "Ferbuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday","Thursday","Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;

}