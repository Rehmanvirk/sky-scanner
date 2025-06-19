import React from 'react';
// import { formatTime } from '../utils/helpers';
import './WeatherDetails.css';

const WeatherDetails = ({ data, unit }) => {
  if (!data) return null;

  const windSpeed = unit === 'metric' ? 
    `${(data.wind.speed * 3.6).toFixed(1)} km/h` : 
    `${(data.wind.speed * 2.237).toFixed(1)} mph`;
  
  const visibility = unit === 'metric' ? 
    `${(data.visibility / 1000).toFixed(1)} km` : 
    `${(data.visibility / 1609).toFixed(1)} mi`;
  
  const mockUVIndex = Math.floor(Math.random() * 8);

  const getUVColor = (uvIndex) => {
    if (uvIndex < 3) return '#3EC70B'; 
    if (uvIndex < 6) return '#FFD24C'; 
    if (uvIndex < 8) return '#F24C3D'; 
    return '#9C2C77'; 
  };

  const uvPercentage = Math.min((mockUVIndex / 8) * 100, 100);
  const uvColor = getUVColor(mockUVIndex);

  return (
    <div className="weather-details">
      <div className="detail-item">
        <div className="detail-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
          </svg>
        </div>
        <div className="detail-label">Humidity</div>
        <div className="detail-value">{data.main.humidity}%</div>
      </div>
      
      <div className="detail-item">
        <div className="detail-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"></path>
          </svg>
        </div>
        <div className="detail-label">Wind Speed</div>
        <div className="detail-value">
          <span>{windSpeed}</span>
          <span 
            className="wind-direction" 
            style={{ transform: `rotate(${data.wind.deg}deg)` }}
          >
            ↑
          </span>
        </div>
      </div>
      
      <div className="detail-item">
        <div className="detail-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2v20M2 12h20M20 16H4M20 8H4"></path>
          </svg>
        </div>
        <div className="detail-label">Pressure</div>
        <div className="detail-value">{data.main.pressure} hPa</div>
      </div>
      
      <div className="detail-item">
        <div className="detail-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 12h20M12 2v20M20 16H4M20 8H4"></path>
          </svg>
        </div>
        <div className="detail-label">Visibility</div>
        <div className="detail-value">{visibility}</div>
      </div>
      
      <div className="detail-item">
        <div className="detail-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="5"></circle>
            <line x1="12" y1="1" x2="12" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="23"></line>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
            <line x1="1" y1="12" x2="3" y2="12"></line>
            <line x1="21" y1="12" x2="23" y2="12"></line>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
          </svg>
        </div>
        <div className="detail-label">UV Index</div>
        <div className="detail-value">
          <span>{mockUVIndex}</span>
          <div className="uv-indicator">
            <div 
              className="uv-level" 
              style={{ 
                left: `${uvPercentage}%`,
                backgroundColor: uvColor
              }}
            ></div>
          </div>
        </div>
      </div>
      
      <div className="detail-item">
        <div className="detail-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7"></path>
          </svg>
        </div>
        <div className="detail-label">Sunrise</div>
        <div className="detail-value">
          {/* {formatTime(data.sys.sunrise + data.timezone)} */}
        </div>
      </div>
      
      <div className="detail-item">
        <div className="detail-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 18a5 5 0 0 0-10 0"></path>
            <line x1="12" y1="9" x2="12" y2="2"></line>
            <line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line>
            <line x1="1" y1="18" x2="3" y2="18"></line>
            <line x1="21" y1="18" x2="23" y2="18"></line>
            <line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line>
            <line x1="23" y1="22" x2="1" y2="22"></line>
            <polyline points="16 5 12 9 8 5"></polyline>
          </svg>
        </div>
        <div className="detail-label">Sunset</div>
        <div className="detail-value">
          {/* {formatTime(data.sys.sunset + data.timezone)} */}
        </div>
      </div>
      
      <div className="detail-item">
        <div className="detail-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect>
            <polyline points="17 2 12 7 7 2"></polyline>
          </svg>
        </div>
        <div className="detail-label">Last Updated</div>
        <div className="detail-value">
          {new Date().toLocaleTimeString()}
        </div>
      </div>
    </div>
  );
};

export default WeatherDetails;