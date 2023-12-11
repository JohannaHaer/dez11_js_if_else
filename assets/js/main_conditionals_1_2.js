function checkWeather() {
    let weather = document.querySelector("#weatherInput").value
    let output = document.querySelector("#message")

    if(weather >= 8 && weather <= 10) {
        output.innerHTML = "super"
    } else if (weather >= 6 && weather <= 7) {
        output.innerHTML = "gut"
    } else if (weather >= 3 && weather <= 5) {
        output.innerHTML = "okay"
    } else if (weather >= 0 && weather <= 2) {
        output.innerHTML = "schecht"
    } else {
        output.innerHTML = "Wetter im Arsch"
    }
}