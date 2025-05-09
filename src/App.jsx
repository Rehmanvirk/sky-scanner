import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import SearchBox from './components/SearchBox';
import CurrentWeather from './components/CurrentWeather';
import WeatherDetails from './components/WeatherDetails';
import UnitToggle from './components/UnitToggle';
import ErrorMessage from './components/ErrorMessage';
import Loader from './components/Loader';
import BackgroundAnimation from './components/BackgroundAnimation';
import './App.css';

function App() {
  // API Key - Replace with your own OpenWeatherMap API key
  const API_KEY = "e995d9b4b1138ac7f5aaef646fb9944c";
  const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

  // State
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({ show: false, message: '' });
  const [currentUnit, setCurrentUnit] = useState('metric'); // 'metric' for Celsius, 'imperial' for Fahrenheit

  // Fetch weather data by city name
  const fetchWeatherData = async (city) => {
    setLoading(true);
    setError({ show: false, message: '' });

    try {
      const url = `${BASE_URL}?q=${city}&appid=${API_KEY}&units=${currentUnit}`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error('City not found or API error');
      }

      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setError({ 
        show: true, 
        message: 'Unable to fetch weather data. Please try again.' 
      });
    } finally {
      setLoading(false);
    }
  };

  // Fetch weather by coordinates
  const fetchWeatherByCoords = async (lat, lon) => {
    setLoading(true);
    setError({ show: false, message: '' });

    try {
      const url = `${BASE_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=${currentUnit}`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error('Location not found or API error');
      }

      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setError({ 
        show: true, 
        message: 'Unable to fetch weather data. Please try again.' 
      });
    } finally {
      setLoading(false);
    }
  };

  // Get Current Location
  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      setLoading(true);
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchWeatherByCoords(latitude, longitude);
        },
        (error) => {
          console.error('Geolocation error:', error);
          setError({
            show: true,
            message: 'Unable to get your location. Please allow location access or search for a city.'
          });
          setLoading(false);
        }
      );
    } else {
      setError({
        show: true,
        message: 'Geolocation is not supported by your browser.'
      });
    }
  };

  // Toggle Temperature Unit
  const toggleTemperatureUnit = (checked) => {
    const newUnit = checked ? 'imperial' : 'metric';
    setCurrentUnit(newUnit);
  };

  // Re-fetch data when unit changes
  useEffect(() => {
    if (weatherData) {
      if (weatherData.coord) {
        fetchWeatherByCoords(weatherData.coord.lat, weatherData.coord.lon);
      } else if (weatherData.name) {
        fetchWeatherData(weatherData.name);
      }
    }
  }, [currentUnit]);

  // Load default city or get user location on initial load
  useEffect(() => {
    getCurrentLocation();
    
    // If geolocation fails or takes too long, load a default city
    const timer = setTimeout(() => {
      if (!weatherData) {
        fetchWeatherData('London');
      }
    }, 3000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app">
      <BackgroundAnimation />
      
      <div className="container">
        {loading && <Loader />}
        
        <div className="weather-app">
          <Header />
          
          {error.show && <ErrorMessage message={error.message} />}
          
          <SearchBox 
            onSearch={fetchWeatherData} 
            onLocationClick={getCurrentLocation} 
          />
          
          {weatherData && (
            <>
              <CurrentWeather 
                data={weatherData} 
                unit={currentUnit} 
              />
              
              <WeatherDetails 
                data={weatherData} 
                unit={currentUnit} 
              />
              
              <UnitToggle 
                unit={currentUnit} 
                onToggle={toggleTemperatureUnit} 
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;