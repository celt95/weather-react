import React from "react";
export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <input type="search" placeholder="Type a city..." />
        <input type="submit" value="Search" />
      </form>
      <div className="row">
        <div className="col-6">
          <h1>Madrid</h1>
          <div>
            Last updated: <span>Sunday 18:35</span>
          </div>
          <div>
            <span> 21 </span>
            <a href="#">°C</a> |<a href="#">°F</a>
          </div>
          <div className="weather-details">
            <div> Clear Sky</div>
            <div>
              Humidity: <span> 66 </span> %
            </div>
            <div>
              Wind: <span>5</span> m/s
            </div>
          </div>
        </div>
        <div className="col-6">
          <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" />
        </div>
      </div>
    </div>
  );
}
