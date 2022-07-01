import React from "react";
export default function WeatherResults(props) {
  if (props.result === null) {
    return null;
  } else {
    return <div>temperature : {props.result.main.temp}°C</div>;
  }
}
