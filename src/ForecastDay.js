import React from "react";
import "./ForecastDay.css";
export default function ForecastDay(props) {
  console.log(props);
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return days[day];
  }
  function getIcon() {
    return `http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`;
  }
  return (
    <div>
      <div className="forecast-day">{day()}</div>
      <div className="forecast-icon">
        <img src={getIcon()} alt="weather icon" />
      </div>
      <div className="forecast-temperature">
        {Math.round(props.data.temp.max)}°C
      </div>
    </div>
  );
}
