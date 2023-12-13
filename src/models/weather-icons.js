"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildWeatherMap = void 0;
var CLOUDY = require("../weather-assets/animated/cloudy.svg");
var DAY = require("../weather-assets/animated/day.svg");
var PARTLY_CLOUDY = require("../weather-assets/animated/cloudy-day-3.svg");
var RAIN = require("../weather-assets/animated/rainy-6.svg");
var LIGHT_RAIN = require("../weather-assets/animated/rainy-4.svg");
var THUNDERSTORM = require("../weather-assets/animated/thunder.svg");
var SNOW = require("../weather-assets/animated/snowy-6.svg");
var UNKNOWN = require("../assets/weather-assets/Other/Black_question_mark.png");
function buildWeatherMap() {
    var map = new Map();
    map.set("broken clouds", CLOUDY);
    map.set("clear sky", DAY);
    map.set("few clouds", PARTLY_CLOUDY);
    map.set("scattered clouds", CLOUDY);
    map.set("shower rain", RAIN);
    map.set("rain", RAIN);
    map.set("thunderstorm", THUNDERSTORM);
    map.set("snow", SNOW);
    map.set("mist", LIGHT_RAIN);
    map.set("light rain", LIGHT_RAIN);
    map.set("heavy intensity rain", RAIN);
    map.set("moderate rain", RAIN);
    map.set("Unknown", UNKNOWN);
    map.set("overcast clouds", CLOUDY);
    return map;
}
exports.buildWeatherMap = buildWeatherMap;
//# sourceMappingURL=weather-icons.js.map