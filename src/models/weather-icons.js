"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WEATHER_ICONS = void 0;
var cloudy_svg_1 = require("../assets/weather-assets/Animated/cloudy.svg");
var day_svg_1 = require("../assets/weather-assets/Animated/day.svg");
var cloudy_day_3_svg_1 = require("../assets/weather-assets/Animated/cloudy-day-3.svg");
var rainy_6_svg_1 = require("../assets/weather-assets/Animated/rainy-6.svg");
var rainy_4_svg_1 = require("../assets/weather-assets/Animated/rainy-4.svg");
var thunder_svg_1 = require("../assets/weather-assets/Animated/thunder.svg");
var snowy_6_svg_1 = require("../assets/weather-assets/Animated/snowy-6.svg");
var Unknown_svg_1 = require("../assets/Other/Unknown.svg");
function buildWeatherMap() {
    var map = new Map();
    map.set("broken clouds", cloudy_svg_1.default);
    map.set("clear sky", day_svg_1.default);
    map.set("few clouds", cloudy_day_3_svg_1.default);
    map.set("scattered clouds", cloudy_svg_1.default);
    map.set("shower rain", rainy_6_svg_1.default);
    map.set("rain", rainy_6_svg_1.default);
    map.set("thunderstorm", thunder_svg_1.default);
    map.set("snow", snowy_6_svg_1.default);
    map.set("mist", rainy_4_svg_1.default);
    map.set("light rain", rainy_4_svg_1.default);
    map.set("heavy intensity rain", rainy_6_svg_1.default);
    map.set("moderate rain", rainy_6_svg_1.default);
    map.set("Unknown", Unknown_svg_1.default);
    map.set("overcast clouds", cloudy_svg_1.default);
    map.set("few clouds", cloudy_svg_1.default);
    return map;
}
exports.WEATHER_ICONS = buildWeatherMap();
//# sourceMappingURL=weather-icons.js.map