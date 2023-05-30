import React, { useState, useEffect } from "react";
import axios from "axios";

const Weather = ({ capital }) => {
  const [weather, setWeather] = useState([]);

  const apiKey = process.env.REACT_APP_API_KEY;

  const iconWeather = weather.weather
  console.log(iconWeather);
  const iconUrl = `http://openweathermap.org/img/w/${iconWeather?.[0].icon}.png`;

  const url = `http://api.openweathermap.org/data/2.5/weather?q=${capital}&APPID=${apiKey}&units=metric`;

  useEffect(() => {
    axios.get(url).then((response) => {
      setWeather(response.data);
    });
  }, [url]);

  return (
    <div>
      <h2>Weather in {capital}</h2>
      {weather.main && (
        <div>
          <p>
            <b>temperature:</b> {weather.main.temp} Celsius
          </p>
          <img src={iconUrl} width="70"
            height="70" alt="weather icon" />
          <p>
            <b>wind:</b> {weather.wind.speed} m/s
          </p>
        </div>
      )}
    </div>
  );
};


export default Weather;
