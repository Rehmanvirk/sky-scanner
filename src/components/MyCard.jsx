import React from "react";
import "./Wcard.css";


export const Wcard = ({weather, unit }) => {
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const today = weekdays[new Date().getDay()];
  // const today = new Date().getDay();
  const options = { month: "long", day: "numeric", year: "numeric" };
  const currentDate = new Date().toLocaleDateString("en-US", options);

  return (
    <div className="wcard">

      <div className="wcard-left">
        <div className="upper-card">
          <div className="day">{today}</div>
          <div className="date">{currentDate}</div>
          <div className="city">
            <h1>{weather.name}</h1>
          </div>
        </div>
        <div className="icon">
          <img src="./src/images/clouds.png" alt="icon" />
          <div className="temp">{weather.main.temp}°{unit === 'metric' ? 'C' : 'F'}</div>
          <div className="description">{weather.weather[0].description}</div>
        </div>
        <div className="lower-card"></div>
      </div>
      <div className="wcard-right">
        <div className="details">
          <div className="visibility">
            <p>Visibility</p>
            <p>16 km</p>
          </div>
          <div className="humidity">
            <p>Humidity</p>
            <p>16 %</p>
          </div>
          <div className="wind">
            <p>Wind</p>
            <p>16 km/h</p>
          </div>
        </div>
      </div>
    </div>
  );
};
