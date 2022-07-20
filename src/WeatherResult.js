import React from "react";
import FormattedDate from "./FormattedDate";
import MainWeatherIcon from "./MainWeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherResult(props) {
  return (
    <div className="WeatherResult">
      <div className="row">
        <div className="col-6 city-values">
          <h1>{props.result.city}</h1>
          <div>
            Last updated:
            <span>
              <FormattedDate date={props.result.date} />
            </span>
          </div>
          <div>
            <WeatherTemperature celsius={props.result.temperature} />
          </div>
          <div className="weather-details">
            <div className="text-capitalize">{props.result.description}</div>
            <div>
              Humidity: <span> {props.result.humidity} </span> %
            </div>
            <div>
              Wind: <span>{Math.round(props.result.wind)}</span> m/s
            </div>
          </div>
        </div>
        <div className="col-6">
          <MainWeatherIcon code={props.result.icon} />
        </div>
      </div>
    </div>
  );
}
