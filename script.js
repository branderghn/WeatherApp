function formatDate(timestamp) {
    let date = new Date(timestamp);
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let day = date.getDay();
    return `${day} ${hours} ${minutes}`;
}

function displayTemperature(response) {
    console.log(response.data.main.temp);
    let cityElement = document.querySelector("#city");
    let description = document.querySelector("#description");
    let temperatureElement = document.querySelector("#temperature");
    let humidityElement = document.querySelector("#humidity");
    let windElement = document.querySelector("#wind");
    let dateElement = document.querySelector("#date");
    cityElement.innerHTML = response.data.name;
    description.innerHTML = response.data.weather[0].description;
    humidityElement.innerHTML = response.data.main.humidity;
    dateElement.innerHTML = formatDate(response.data.dt * 1000);
    windElement.innerHTML = response.data.main.wind.speed;
    temperatureElement.innerHTML = Math.round(response.data.main.temp);
}
let apiKey = "d40fd6ae4a93f07d6d48fe18f4a7d1e0";
let apiUrl = `https://api.openweatherapp.org/data/2.5/weather?q=New Yorkappid=${apiKey}&units=metric`;

console.log(apiUrl);
axios.get(apiUrl).then(displayTemperature);

 