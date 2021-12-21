const apiKey = "a607699cd5d0d11e490df29ccbc983c8";

/**
 * Call API openWeather
 * @param city
 */
let call = function(city) {
    $.ajax({
        url: "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey + "&units=metric&lang=fr",
        method: "GET",
        dataType: "json"
    })

        .done(function (data) {
            citySpan.text(data.name);
            temperatureSpan.text(data.main.temp + "°C");
            humiditySpan.text(data.main.humidity + '%');
            windSpan.text(Math.round(parseFloat(data.wind.speed) * 3.6).toString()+ "km/h");
            descriptionSpan.text(data.weather[0].description);
            feelsLikeSpan.text(data.main.feels_like + "°C");
        })
        .fail(function (error) {
            errorP.text("Une erreur est survenue, pensez a vérifier l'orthographe");
        })
}

call("Paris")

const errorP = $("#form p");

const citySpan = $("#city span");
const temperatureSpan = $("#temperature span");
const humiditySpan = $("#humidity span");
const windSpan = $("#wind span");
const descriptionSpan = $("#description span");
const feelsLikeSpan = $("#feels_like span");

const submit = $("#form button");
const input = $("input[type=text]");

submit.click(function () {
    call(input.val());
})