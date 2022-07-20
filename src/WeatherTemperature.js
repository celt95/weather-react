import React, { useState } from "react";
export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("Celsius");
  function displayFahrenheit(event) {
    event.preventDefault();
    setUnit("Fahrenheit");
  }
  function displayCelsius(event) {
    event.preventDefault();
    setUnit("Celsius");
  }
  function Fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }
  if (unit === "Celsius") {
    return (
      <div>
        <span>{Math.round(props.celsius)}</span>
        <span>°C</span> |
        <a href="#" onClick={displayFahrenheit}>
          °F
        </a>
      </div>
    );
  } else {
    return (
      <div>
        <span>{Math.round(Fahrenheit())}</span>
        <a href="#" onClick={displayCelsius}>
          °C
        </a>
        |<span>°F</span>
      </div>
    );
  }
}
