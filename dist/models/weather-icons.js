"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildWeatherMap = void 0;
const cloudy_svg_1 = __importDefault(require("../assets/weather-assets/Animated/cloudy.svg"));
const day_svg_1 = __importDefault(require("../assets/weather-assets/animated/day.svg"));
const cloudy_day_3_svg_1 = __importDefault(require("../assets/weather-assets/Animated/cloudy-day-3.svg"));
const rainy_6_svg_1 = __importDefault(require("../assets/weather-assets/Animated/rainy-6.svg"));
const rainy_4_svg_1 = __importDefault(require("../assets/weather-assets/Animated/rainy-4.svg"));
const thunder_svg_1 = __importDefault(require("../assets/weather-assets/Animated/thunder.svg"));
const snowy_6_svg_1 = __importDefault(require("../assets/weather-assets/Animated/snowy-6.svg"));
const Black_question_mark_png_1 = __importDefault(require("../assets/weather-assets/Other/Black_question_mark.png"));
function buildWeatherMap() {
    const map = new Map();
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
    map.set("Unknown", Black_question_mark_png_1.default);
    map.set("overcast clouds", cloudy_svg_1.default);
    return map;
}
exports.buildWeatherMap = buildWeatherMap;
