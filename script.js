function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("active");
}

/* WEATHER API (Demo Only, No Key Required) */
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showWeather);
}

function showWeather(pos) {
    const lat = pos.coords.latitude;
    const lon = pos.coords.longitude;

    document.getElementById("weather-location").innerHTML = "Your Location";
    document.getElementById("weather-temp").innerHTML = "Temperature: 18°C";
    document.getElementById("weather-desc").innerHTML = "Clear Sky (Demo)";
}
