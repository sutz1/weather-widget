"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const credentials_1 = require("./credentials");
const axios_1 = __importDefault(require("axios"));
const weather_icons_1 = require("./models/weather-icons");
// Assuming you have a similar structure for weather icons
const WEATHER_ICONS = (0, weather_icons_1.buildWeatherMap)();
const fetchData = () => __awaiter(void 0, void 0, void 0, function* () {
    console.info(`starting data fetch`);
    try {
        const position = yield new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
        });
        const longitude = position.coords.longitude.toString();
        const latitude = position.coords.latitude.toString();
        const response = yield axios_1.default.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=${credentials_1.UNITS}&radar=true&appid=${credentials_1.API_KEY}`);
        console.info('data fetched successfully');
        return response.data;
    }
    catch (error) {
        console.error("Error fetching weather data:", error);
        return null;
    }
});
const updateWeather = () => __awaiter(void 0, void 0, void 0, function* () {
    console.info("Beginning to update weather");
    const weather = yield fetchData();
    if (weather) {
        const icon = WEATHER_ICONS.get(weather.weather[0].description);
        if (icon) {
            // Update UI with weather data and icon
            console.log("Weather in", weather.name);
            console.log("Temperature:", Math.floor(weather.main.temp), "°F");
            console.log("Feels like:", Math.floor(weather.main.feels_like), "°F");
            console.log("Condition:", weather.weather[0].description);
            console.log("Weather Icon:", icon);
            const weatherLocation = document.getElementById("location");
            const weatherIcon = document.getElementById("weather-icon");
            const temperature = document.getElementById("temperature");
            const condition = document.getElementById("condition");
            weatherLocation.textContent = `Weather in ${weather.name}`;
            weatherIcon.src = icon;
            temperature.textContent = `Temperature: ${Math.floor(weather.main.temp)} °F`;
            condition.textContent = `Condition: ${weather.weather[0].description}`;
        }
        else {
            console.error(`Icon not found in library. Please update the map to match the new description: ${weather.weather[0].description}`);
            const unknownIcon = WEATHER_ICONS.get("Unknown");
            console.log("Weather Icon (Unknown):", unknownIcon);
        }
    }
    else {
        console.log("Loading...");
    }
});
// Fetch data initially and set interval
updateWeather();
const intervalId = setInterval(updateWeather, 120000);
// Clear interval when necessary (e.g., when the component is unmounted)
clearInterval(intervalId);
