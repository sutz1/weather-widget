# Basic Weather App
This project is meant to test my skills in web development. First I intend to make a simple weather webpage, with hopes to add additional widgets and extensions. The app is hosted on Github Pages and can be accessed here: https://sutz1.github.io/weather-widget

## Upcoming Featuers and Ideas
* Find out why javascript does not run when accessing via in-app browser (example: opening link in Slack or LinkedIn).
* Add search bar to allow for queries based by city. This will be the default behavior if app is unable to get user's location
* Better front-end design. As of now there is very basic CSS implemented into the widget. I intend to make this much more sophisticated and modern over time
* Unit tests
* Better error handling/notification if openweather or other future dependencies are down.
* Other weather features like 7-day forecast for example.
* Environment variable store to handle API keys.


## Development Notes
* A HashMap stores a variety of svg elements and can be found in `src/models/weather-icons.ts`. This should include all possible descriptions from OpenWeather's API response, but will be added onto in-case any element is missing. Should an element be missing, you will see a question mark displayed on the screen where the icon should be. You will also see in the console a message stating the icon is not found in the library.

* An automatic refresh has been added for 12000 milliseconds (2 minutes). This can be adjusted in `index.ts` within the `intervalId` variable


## References and Credits
* Weather assets and images from amcharts.com: https://www.amcharts.com/free-animated-svg-weather-icons/

