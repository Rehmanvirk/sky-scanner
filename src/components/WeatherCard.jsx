import { WiDaySunny, WiRain, WiSnow } from 'react-icons/wi';
import './WeatherCard.css';

const WeatherCard = ({ weather,unit }) => {
  if (!weather) return <p>No data available</p>;

  const getWeatherIcon = (condition) => {
    switch (condition) {
      case 'Rain':
        return <WiRain size={50} />;
      case 'Snow':
        return <WiSnow size={50} />;
      default:
        return <WiDaySunny size={50} />;
    }
  };

  return (
    <div className="weather-card">
      <h2>{weather.name}, {weather.sys.country}</h2>
      <p className='temperature'>{weather.main.temp}°{unit === 'metric' ? 'C' : 'F'}</p>
      <p className='dscription'>{weather.weather[0].description}</p>
      {getWeatherIcon(weather.weather[0].main)}
    </div>
  );
};

export default WeatherCard;
