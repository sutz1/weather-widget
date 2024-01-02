var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import axios from "axios";
const fetchData = () => __awaiter(void 0, void 0, void 0, function* () {
    console.info(`starting data fetch`);
    try {
        const location = yield new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
        });
        const longitude = location.coords.longitude.toString();
        const latitude = location.coords.latitude.toString();
        const response = yield axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&radar=true&appid=238e0668ffd9bc840dfd3c6f0d09365b`);
        console.info('data fetched successfully');
        return response.data;
    }
    catch (error) {
        if (error instanceof Error) {
            console.error("Error fetching weather data:", error.message);
        }
        throw error;
    }
});
const updateWeather = () => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    console.info("Beginning to update weather");
    const weather = yield fetchData();
    if (weather) {
        console.log("WEATHER UPDATED SUCCESSFULLY");
        console.log("Weather in", weather.name);
        console.log("Temperature:", Math.floor(weather.main.temp), "°F");
        console.log("Feels like:", Math.floor(weather.main.feels_like), "°F");
        console.log("Condition:", (_a = weather.weather[0]) === null || _a === void 0 ? void 0 : _a.description);
        const weatherLocation = document.getElementById("location");
        const temperature = document.getElementById("temperature");
        const condition = document.getElementById("condition");
        weatherLocation.textContent = `Weather in ${weather.name}`;
        temperature.textContent = `Temperature: ${Math.floor(weather.main.temp)} °F`;
        condition.textContent = `Condition: ${(_b = weather.weather[0]) === null || _b === void 0 ? void 0 : _b.description}`;
    }
    else {
        console.log(`Loading...`);
    }
});
updateWeather();
const intervalId = setInterval(updateWeather, 120000);
clearInterval(intervalId);
//# sourceMappingURL=index.js.map