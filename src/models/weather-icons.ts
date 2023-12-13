const CLOUDY = require("../weather-assets/animated/cloudy.svg")
const DAY = require("../weather-assets/animated/day.svg");
const PARTLY_CLOUDY = require("../weather-assets/animated/cloudy-day-3.svg");
const RAIN = require("../weather-assets/animated/rainy-6.svg");
const LIGHT_RAIN = require("../weather-assets/animated/rainy-4.svg");
const THUNDERSTORM = require("../weather-assets/animated/thunder.svg");
const SNOW = require("../weather-assets/animated/snowy-6.svg");
const UNKNOWN = require("../assets/weather-assets/Other/Black_question_mark.png");

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
  map.set("Unknown", UNKNOWN);
  map.set("overcast clouds", CLOUDY);

  return map;
}
