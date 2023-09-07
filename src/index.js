import './style.css'

let weatherDatas = {};

async function getWeatherData(location){
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=267d9a1678d34f62950125948230709&q=${location}`;
    const weatherDataResp = await fetch(apiUrl);
    const weatherData = await weatherDataResp.json();
    updateWeatherData(weatherData);
    
}

function updateWeatherData(weatherData){
    weatherDatas.loc = weatherData.location.name;
    weatherDatas.cel = weatherData.current.temp_c;
    weatherDatas.fh = weatherData.current.temp_f;
    loc.textContent = `${weatherDatas.loc}`;
    temp_cel.textContent = `${weatherDatas.cel} *C`;
    temp_fh.textContent = `${weatherDatas.fh} FH`;
}

const loc = document.querySelector(".loc");
const temp_cel = document.querySelector(".temp_cel");
const temp_fh = document.querySelector(".temp_fh");

getWeatherData('chennai');



