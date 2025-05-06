import { useState } from "react";
import SearchBar from "./components/SearchBar";
// import WeatherCard from "./components/WeatherCard";
// import {Wcard} from "./components/Wcard"
import {Wcard} from "./components/MyCard"
import { fetchWeather } from "./weatherservice";

import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const [weather, setWeather] = useState(null);
  const [unit, setUnit] = useState("metric"); // Default is Celsius

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleUnit = () => {
    setUnit(unit === "metric" ? "imperial" : "metric");
    return unit
  };
  const handleSearch = async (city) => {
    const data = await fetchWeather(city, unit);
    setWeather(data);
  };


  return (

    <div >
          <SearchBar onSearch={handleSearch} />
      <h1>Weather App</h1>
      <button onClick={toggleDarkMode}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
      <button onClick={toggleUnit}>
        {unit === "metric" ? "Switch to °F" : "Switch to °C"}
      </button>
  
      {/* {weather && <WeatherCard weather={weather} unit={unit} />}  */}
      {weather && <Wcard weather={weather} unit={unit} search={handleSearch}/>}
    </div>
  );
}

export default App;
