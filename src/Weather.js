import React, { useState } from "react";
import "./Weather.css";
import "./WeatherResult";
import axios from "axios";
import WeatherResult from "./WeatherResult";
export default function Weather(props) {
  const [result, setResult] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setResult({
      ready: true,
      city: response.data.name,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
    });
  }

  if (result.ready) {
    return (
      <div className="Weather">
        <form>
          <input
            type="search"
            placeholder="Type a city..."
            className="search-engine"
          />
          <input type="submit" value="Search" className="search-button" />
        </form>
        <WeatherResult result={result} />
      </div>
    );
  } else {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=f8076bd4bc37c523b0e21539b245eabc&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading..";
  }
}
