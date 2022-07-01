import React, { useState } from "react";
import axios from "axios";
import CurrentPosition from "./CurrentPosition";
import WeatherResults from "./WeatherResults";
export default function Search() {
  const [city, setCity] = useState(null);
  const [result, setResult] = useState(null);
  function searchWeather(response) {
    setResult(response.data);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f8076bd4bc37c523b0e21539b245eabc&units=metric`;
    axios.get(apiUrl).then(searchWeather);
  }
  return (
    <div className="Search">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Type a city..."
          onChange={updateCity}
        />
        <input type="submit" value="Search" />
      </form>
      <CurrentPosition />
      <WeatherResults result={result} />
    </div>
  );
}
