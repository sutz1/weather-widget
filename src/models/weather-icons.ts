import CLOUDY from "../assets/weather-assets/Animated/cloudy.svg";
import DAY from "../assets/weather-assets/animated/day.svg";
import PARTLY_CLOUDY from "../assets/weather-assets/Animated/cloudy-day-3.svg";
import RAIN from "../assets/weather-assets/Animated/rainy-6.svg";
import LIGHT_RAIN from "../assets/weather-assets/Animated/rainy-4.svg";
import THUNDERSTORM from "../assets/weather-assets/Animated/thunder.svg";
import SNOW from "../assets/weather-assets/Animated/snowy-6.svg";
import UNKNOWN from "../assets/weather-assets/Other/Black_question_mark.png";

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
