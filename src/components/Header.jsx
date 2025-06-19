import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <h1>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>
          </svg>
          Sky<span>Scanner</span>
        </h1>
      </div>
    </div>
  );
};

export default Header;