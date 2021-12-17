const apiKey = "a607699cd5d0d11e490df29ccbc983c8";

/**
 * Call API openWeather
 * @param city
 */
let call = function(city) {
        const url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey + "&units=metric&lang=fr";

    fetch(url)
        .then(response => response.json()
             .then((data) => {
                 citySpan.innerText = data.name;
                 temperatureSpan.innerText = data.main.temp + "°C";
                 humiditySpan.innerText = data.main.humidity + '%';
                 windSpan.innerText = Math.round(parseFloat(data.wind.speed) * 3.6).toString()+ "km/m";
                 descriptionSpan.innerText = data.weather[0].description;
                 feelsLikeSpan.innerText = data.main.feels_like + "°C";
            })
        )
        .catch((error) => {
                errorP.innerText = "Une erreur est survenue, pensez a vérifier l'orthographe"
        } )
}

call("Paris")


const errorP = document.querySelector("#form p");

const citySpan = document.querySelector("#city span");
const temperatureSpan = document.querySelector("#temperature span");
const humiditySpan = document.querySelector("#humidity span");
const windSpan = document.querySelector("#wind span");
const descriptionSpan = document.querySelector("#description span");
const feelsLikeSpan = document.querySelector("#feels_like span");

const submit = document.querySelector("#form button");
const input = document.querySelector("input[type=text]");


submit.addEventListener("click", (e) => {
        call(input.value)
})