import React, { useEffect } from 'react';
import './BackgroundAnimation.css';

const BackgroundAnimation = () => {
  useEffect(() => {
    createBackgroundAnimation();
  }, []);

  const createBackgroundAnimation = () => {
    const bgAnimation = document.getElementById('bg-animation');
    if (!bgAnimation) return;
    
    bgAnimation.innerHTML = '';
    
    for (let i = 0; i < 10; i++) {
      const cloud = document.createElement('div');
      cloud.classList.add('floating-cloud');
      
      const size = Math.random() * 100 + 50;
      cloud.style.width = `${size}px`;
      cloud.style.height = `${size}px`;
      
      cloud.style.top = `${Math.random() * 100}%`;
      
      const duration = Math.random() * 120 + 60;
      cloud.style.animationDuration = `${duration}s`;
      
      bgAnimation.appendChild(cloud);
    }
  };

  return (
    <div className="bg-animation" id="bg-animation"></div>
  );
};

export default BackgroundAnimation;