import React from 'react';
// import { formatDate } from '../utils/helpers';
import './CurrentWeather.css';

const CurrentWeather = ({ data, unit }) => {
  if (!data) return null;

  const temp = Math.round(unit === 'metric' ? 
    data.main.temp : 
    (data.main.temp * 9/5) + 32);
  
  const feelsLike = Math.round(unit === 'metric' ? 
    data.main.feels_like : 
    (data.main.feels_like * 9/5) + 32);

  return (
    <div className="current-weather">
      <div className="weather-main">
        <div className="location">
          <h2>{data.name}</h2>
          <p>{data.sys.country}</p>
        </div>
        <div className="date-time">
          {/* {formatDate(data.dt + data.timezone)} */}
        </div>
        <div className="temperature">
          {temp}<span>°{unit === 'metric' ? 'C' : 'F'}</span>
        </div>
        <div className="weather-description">
          <span>{data.weather[0].description}</span>
        </div>
        <div className="feels-like">
          Feels like <span>{feelsLike}</span>°
        </div>
      </div>
      <div className="weather-icon">
        <img 
          src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} 
          alt={data.weather[0].description} 
        />
      </div>
    </div>
  );
};

export default CurrentWeather;