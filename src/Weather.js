import React, { useState } from "react";
import "./Weather.css";
import "./WeatherResult";
import axios from "axios";
import WeatherResult from "./WeatherResult";
export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [result, setResult] = useState({ ready: false });

  function search() {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f8076bd4bc37c523b0e21539b245eabc&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleResponse(response) {
    setResult({
      ready: true,
      city: response.data.name,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      icon: response.data.weather[0].icon,
    });
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  if (result.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Type a city..."
            className="search-engine"
            onChange={updateCity}
          />
          <input type="submit" value="Search" className="search-button mt-3" />
        </form>
        <WeatherResult result={result} />
      </div>
    );
  } else {
    search();
    return "Loading..";
  }
}
