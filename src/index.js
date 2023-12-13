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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var credentials_1 = require("./credentials");
var axios_1 = require("axios");
var weather_icons_1 = require("./models/weather-icons");
// Assuming you have a similar structure for weather icons
var WEATHER_ICONS = (0, weather_icons_1.buildWeatherMap)();
var fetchData = function () { return __awaiter(void 0, void 0, void 0, function () {
    var position, longitude, latitude, response, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4 /*yield*/, new Promise(function (resolve, reject) {
                        navigator.geolocation.getCurrentPosition(resolve, reject);
                    })];
            case 1:
                position = _a.sent();
                longitude = position.coords.longitude.toString();
                latitude = position.coords.latitude.toString();
                return [4 /*yield*/, axios_1.default.get("https://api.openweathermap.org/data/2.5/weather?lat=".concat(latitude, "&lon=").concat(longitude, "&units=").concat(credentials_1.UNITS, "&radar=true&appid=").concat(credentials_1.API_KEY))];
            case 2:
                response = _a.sent();
                return [2 /*return*/, response.data];
            case 3:
                error_1 = _a.sent();
                console.error("Error fetching weather data:", error_1);
                return [2 /*return*/, null];
            case 4: return [2 /*return*/];
        }
    });
}); };
var updateWeather = function () { return __awaiter(void 0, void 0, void 0, function () {
    var weather, icon, weatherLocation, weatherIcon, temperature, condition, unknownIcon;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetchData()];
            case 1:
                weather = _a.sent();
                if (weather) {
                    icon = WEATHER_ICONS.get(weather.weather[0].description);
                    if (icon) {
                        // Update UI with weather data and icon
                        console.log("Weather in", weather.name);
                        console.log("Temperature:", Math.floor(weather.main.temp), "°F");
                        console.log("Feels like:", Math.floor(weather.main.feels_like), "°F");
                        console.log("Condition:", weather.weather[0].description);
                        console.log("Weather Icon:", icon);
                        weatherLocation = document.getElementById("location");
                        weatherIcon = document.getElementById("weather-icon");
                        temperature = document.getElementById("temperature");
                        condition = document.getElementById("condition");
                        weatherLocation.textContent = "Weather in ".concat(weather.name);
                        weatherIcon.src = icon;
                        temperature.textContent = "Temperature: ".concat(Math.floor(weather.main.temp), " \u00B0F");
                        condition.textContent = "Condition: ".concat(weather.weather[0].description);
                    }
                    else {
                        console.error("Icon not found in library. Please update the map to match the new description: ".concat(weather.weather[0].description));
                        unknownIcon = WEATHER_ICONS.get("Unknown");
                        console.log("Weather Icon (Unknown):", unknownIcon);
                    }
                }
                else {
                    console.log("Loading...");
                }
                return [2 /*return*/];
        }
    });
}); };
// Fetch data initially and set interval
updateWeather();
var intervalId = setInterval(updateWeather, 120000);
// Clear interval when necessary (e.g., when the component is unmounted)
clearInterval(intervalId);
//# sourceMappingURL=index.js.map