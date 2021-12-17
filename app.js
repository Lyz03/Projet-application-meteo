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
                        cityP.innerText = data.name;
                        temperatureP.innerText = data.main.temp + "°C";
                        humidityP.innerText = data.main.humidity + '%';
                        windP.innerText = data.wind.speed + "m/s";
                })
            )
            .catch((error) => {
                    errorP.innerText = "Une erreur est survenue, pensez a vérifier l'orthographe"
            } )
}

call("Paris")


const errorP = document.querySelector("#form p");

const cityP = document.querySelector("#city p");
const temperatureP = document.querySelector("#temperature p");
const humidityP = document.querySelector("#humidity p");
const windP = document.querySelector("#wind p");
const submit = document.querySelector("input[type=submit]");
const input = document.querySelector("input[type=text]");


submit.addEventListener("click", (e) => {
        call(input.value)
})