import { WeatherData } from "./models/weather-data";
import { API_KEY, UNITS } from "./credentials";
import axios from "axios";
import { buildWeatherMap } from "./models/weather-icons";
 // Assuming you have a similar structure for weather icons
 const WEATHER_ICONS = buildWeatherMap();

const fetchData = async (): Promise<WeatherData | null> => {
  console.info(`starting data fetch`)
  try {

    const position = await new Promise<GeolocationPosition>((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });

    const longitude = position.coords.longitude.toString();
    const latitude = position.coords.latitude.toString();

    const response = await axios.get<WeatherData>(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=${UNITS}&radar=true&appid=${API_KEY}`
    );
    
    console.info('data fetched successfully');
    return response.data;
  } catch (error: any) {
    console.error("Error fetching weather data:", error);
    return null;
  }
};

const updateWeather = async () => {
  console.info("Beginning to update weather");
  const weather = await fetchData();

  if (weather) {
    const icon = WEATHER_ICONS.get(weather.weather[0].description);

    if (icon) {
      // Update UI with weather data and icon
      console.log("Weather in", weather.name);
      console.log("Temperature:", Math.floor(weather.main.temp), "°F");
      console.log("Feels like:", Math.floor(weather.main.feels_like), "°F");
      console.log("Condition:", weather.weather[0].description);
      console.log("Weather Icon:", icon);
      const weatherLocation = document.getElementById("location") as HTMLHeadingElement
      const weatherIcon = document.getElementById("weather-icon") as HTMLImageElement;
      const temperature = document.getElementById("temperature") as HTMLParagraphElement;
      const condition = document.getElementById("condition") as HTMLParagraphElement;
      weatherLocation.textContent = `Weather in ${weather.name}`;
      weatherIcon.src = icon;
      temperature.textContent = `Temperature: ${Math.floor(weather.main.temp)} °F`;
      condition.textContent = `Condition: ${weather.weather[0].description}`;
    } else {
      console.error(
        `Icon not found in library. Please update the map to match the new description: ${weather.weather[0].description}`
      );
      const unknownIcon = WEATHER_ICONS.get("Unknown");
      console.log("Weather Icon (Unknown):", unknownIcon);
    }
  } else {
    console.log("Loading...");
  }
};

// Fetch data initially and set interval
updateWeather();
const intervalId = setInterval(updateWeather, 120000);

// Clear interval when necessary (e.g., when the component is unmounted)
clearInterval(intervalId);
