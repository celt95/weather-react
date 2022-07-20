import React from "react";
import RainyDay from "./media/rainyday.png";
import SunnyDay from "./media/sunnyday.png";
import NiceSnowDay from "./media/nicesnowyday.png";

export default function MainWeatherIcon(props) {
  const codeMapping = {
    "01d": SunnyDay,
    "01n": SunnyDay,
    "02d": SunnyDay,
    "02n": SunnyDay,
    "03d": SunnyDay,
    "03n": SunnyDay,
    "04d": SunnyDay,
    "04n": SunnyDay,
    "09d": RainyDay,
    "09n": RainyDay,
    "10d": RainyDay,
    "10n": RainyDay,
    "11d": RainyDay,
    "11n": RainyDay,
    "13d": NiceSnowDay,
    "13n": NiceSnowDay,
    "50d": RainyDay,
    "50n": RainyDay,
  };

  return (
    <img
      className="mw-100"
      src={codeMapping[props.code]}
      alt="Icon displaying weather"
    />
  );
}
