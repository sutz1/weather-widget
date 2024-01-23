const CLOUDY = require("../../lib/dist/cloudy.svg");
const DAY = require("../../lib/dist/day.svg");
const PARTLY_CLOUDY = require("../../lib/dist/cloudy-day-3.svg");
const RAIN = require("../../lib/dist/rainy-6.svg");
const LIGHT_RAIN = require("../../lib/dist/rainy-4.svg");
const THUNDERSTORM = require("../../lib/dist/thunder.svg");
const SNOW = require("../../lib/dist/snowy-6.svg");
const UNKNOWN = require("../../lib/dist/Black_question_mark.png");
export function buildWeatherMap() {
    const map = new Map();
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
    map.set("overcast clouds", CLOUDY);
    map.set("unknown", UNKNOWN);
    return map;
}
//# sourceMappingURL=weather-icons.js.map