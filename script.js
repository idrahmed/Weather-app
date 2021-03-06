const api = {
    key: "d1cd9ece94414a8ff43641718531a5cf",
    base: "http://api.openweathermap.org/data/2.5/"
}



const searchbox = document.querySelector('.search-box');
let city = document.querySelector('.location .city');
let date = document.querySelector('.location .date');
let today = new Date().toLocaleDateString('en-US', {weekday:'long', month:'short', day:'numeric'});
let temp = document.querySelector('.current .temp')
let weather_desc = document.querySelector('.current .weather')
let hilow = document.querySelector('.hi-low')

searchbox.addEventListener('keydown', e => {
    if (e.keyCode == 13) {
        getResults(searchbox.value);
        
    }
});

function getResults(query) {
    fetch(`${api.base}weather?q=${query}&units=metric&appid=${api.key}`)
    .then(weather => {
        return weather.json();
    }).then(displayResults);
}

function displayResults(weather) {
    
    city.innerText = `${weather.name}, ${weather.sys.country}`;
    date.innerHTML = today;
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;
    weather_desc.innerText = weather.weather[0].main;
    hilow.innerText = `${Math.round(weather.main.temp_min)}°c / ${Math.round(weather.main.temp_max)}°c`;
}


