import React, { useState, useEffect } from "react";
import "./Forecast.css";
import ForecastDay from "./ForecastDay";
import axios from "axios";
export default function Forecast(props) {
  const [forecastResult, setForecastResult] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleForecast(response) {
    setForecastResult(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    console.log(forecastResult);
    return (
      <div className="forecast">
        <div className="row">
          {forecastResult.map(function (dailyForecast, index) {
            if (index > 0 && index < 6) {
              return (
                <div className="col day-weather" key={index}>
                  <ForecastDay data={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=f8836810bbb4fb14b77719552c52c6d9&units=metric`;
    axios.get(apiUrl).then(handleForecast);
    return null;
  }
}
