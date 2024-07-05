document.getElementById("getWeatherBtn").addEventListener("click", () => {
    const location = document.getElementById("locationInput").value;
    if (location) {
        fetchWeather(location);
    } else {
        alert("Please enter a location.");
    }
});

function fetchWeather(location) {
    const apiKey = `4950b66cc50190983e74214849cf066a`; // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                displayWeather(data);
            } else {
                alert(data.message);
            }
        })
        .catch(error => {
            console.error("Error fetching weather data:", error);
            alert("An error occurred while fetching the weather data.");
        });
}

function displayWeather(data) {
    document.getElementById("location").textContent = `${data.name}, ${data.sys.country}`;
    document.getElementById("temperature").textContent = `Temperature: ${data.main.temp}°C`;
    document.getElementById("description").textContent = `Weather: ${data.weather[0].description}`;
    document.getElementById("humidity").textContent = `Humidity: ${data.main.humidity}%`;
    document.getElementById("wind").textContent = `Wind Speed: ${data.wind.speed} m/s`;

    const weatherContainer = document.getElementById("weatherContainer");
    weatherContainer.classList.add("show");
}
