import axios from "axios";
import { WeatherData } from "./models/weather-data";

const fetchData = async (): Promise<WeatherData | null> => {
    console.info(`starting data fetch`)
    try {
        const location = await new Promise<GeolocationPosition>((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
        });

        const longitude = location.coords.longitude.toString();
        const latitude = location.coords.latitude.toString();

        const response = await axios.get<WeatherData>(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&radar=true&appid=238e0668ffd9bc840dfd3c6f0d09365b`
        );

        console.info('data fetched successfully');
        return response.data;
    } catch (error) {
        if (error instanceof Error) {
            console.error("Error fetching weather data:", error.message);
        }
        throw error;
    }
};

const updateWeather = async () => {
    console.info("Beginning to update weather");
    const weather = await fetchData();

    if (weather) {
        console.log("WEATHER UPDATED SUCCESSFULLY");
        console.log("Weather in", weather.name);
        console.log("Temperature:", Math.floor(weather.main.temp), "°F");
        console.log("Feels like:", Math.floor(weather.main.feels_like), "°F");
        console.log("Condition:", weather.weather[0]?.description);
        const weatherLocation = document.getElementById("location") as HTMLHeadingElement;
        const temperature = document.getElementById("temperature") as HTMLParagraphElement;
        const condition = document.getElementById("condition") as HTMLParagraphElement;
        weatherLocation.textContent = `Weather in ${weather.name}`;
        temperature.textContent = `Temperature: ${Math.floor(weather.main.temp)} °F`;
        condition.textContent = `Condition: ${weather.weather[0]?.description}`;
    } else {
        console.log(`Loading...`);
    }
}

// Fetch data initially and set interval
updateWeather();
const intervalId = setInterval(updateWeather, 120000);

// Clear interval when necessary (e.g., when the component is unmounted)
clearInterval(intervalId);