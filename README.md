# Basic Weather App (name TBD)
This project is meant to test my skills in web development. First I intend to make a simple weather webpage, with hopes to add additional widgets and extensions. The app is hosted on Github Pages and can be accessed here: https://sutz1.github.io/weather-widget/

## PreRequisites
Before you are able to use this repository, you will need an API key from OpenWeather. This is free, but you will need to make an account: https://openweathermap.org/ . Once completed, you can then click on your username on the top-right of the webpage -> My API Keys, and your API key will be listed. You will need this key in the usage instructions below. Should you ever accidentally delete or expose this key to the public, you can delete and request a new key on the `My API Keys` page.

## Usage
1. In a terminal, `cd` into the directory of which you'd like this project to live in
 * `cd Documents/`
2. Once in your directory, run the following in your terminal: `git clone https://github.com/sutz1/sutz-weather-app.git`
3. `cd` into the weather app directory `cd sutz-weather-app/`
4. `npm install`
5. To launch the server locally, run `npm run dev`. Vite will give output on where to access your server `Local:   http://localhost:5173/`
 * Type this address into your web browser to access your weather app.
6. Replace the placeholder value for `APP_ID` within `src/credentials.ts` with your API key found on openweather
 * IMPORTANT, DO NOT COMMIT THIS CHANGE OR YOU WILL BE EXPOSING YOUR CREDENTIALS
7. Replace the placeholder value for `UNITS` to the unit type you prefer -> https://openweathermap.org/current#data

## Development Notes
* A HashMap stores a variety of svg elements and can be found in `src\models`. This should include all possible descriptions from OpenWeather's API response, but will be added onto in-case any element is missing. Should an element be missing, you will see a question mark displayed on the screen where the icon should be. You will also see in the console a message stating the icon is not found in the library.

* An automatic refresh has been added for 12000 milliseconds (2 minutes). This can be adjusted in `index.ts` within the `intervalId` variable


## References and Credits
* Weather assets and images from amcharts.com: https://www.amcharts.com/free-animated-svg-weather-icons/

