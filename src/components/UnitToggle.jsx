import React from 'react';
import './UnitToggle.css';

const UnitToggle = ({ unit, onToggle }) => {
  const handleChange = (e) => {
    onToggle(e.target.checked);
  };

  return (
    <div className="unit-toggle">
      <span className={unit === 'metric' ? 'unit-active' : 'unit-inactive'}>
        Celsius
      </span>
      <label className="switch">
        <input 
          type="checkbox" 
          checked={unit === 'imperial'}
          onChange={handleChange}
        />
        <span className="slider"></span>
      </label>
      <span className={unit === 'imperial' ? 'unit-active' : 'unit-inactive'}>
        Fahrenheit
      </span>
    </div>
  );
};

export default UnitToggle;