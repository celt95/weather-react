import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
export default function Weather(props) {
  const [result, setResult] = useState({ ready: false });
  function handleResponse(response) {
    setResult({
      ready: true,
      city: response.data.name,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
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
        <div className="row">
          <div className="col-6 city-values">
            <h1>{result.city}</h1>
            <div>
              Last updated: <span>Sunday 18:35</span>
            </div>
            <div>
              <span>{Math.round(result.temperature)}</span>
              <a href="#">°C</a> |<a href="#">°F</a>
            </div>
            <div className="weather-details">
              <div className="text-capitalize">{result.description}</div>
              <div>
                Humidity: <span> {result.humidity} </span> %
              </div>
              <div>
                Wind: <span>{Math.round(result.wind)}</span> m/s
              </div>
            </div>
          </div>
          <div className="col-6">
            <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" />
          </div>
        </div>
      </div>
    );
  } else {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=f8076bd4bc37c523b0e21539b245eabc&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading..";
  }
}
