import React, { useEffect } from 'react';
import './BackgroundAnimation.css';

const BackgroundAnimation = () => {
  useEffect(() => {
    createBackgroundAnimation();
  }, []);

  // Create floating clouds for background animation
  const createBackgroundAnimation = () => {
    const bgAnimation = document.getElementById('bg-animation');
    if (!bgAnimation) return;
    
    // Clear existing clouds
    bgAnimation.innerHTML = '';
    
    // Create floating clouds
    for (let i = 0; i < 10; i++) {
      const cloud = document.createElement('div');
      cloud.classList.add('floating-cloud');
      
      // Random size
      const size = Math.random() * 100 + 50;
      cloud.style.width = `${size}px`;
      cloud.style.height = `${size}px`;
      
      // Random position
      cloud.style.top = `${Math.random() * 100}%`;
      
      // Random animation duration
      const duration = Math.random() * 120 + 60;
      cloud.style.animationDuration = `${duration}s`;
      
      // Append to background
      bgAnimation.appendChild(cloud);
    }
  };

  return (
    <div className="bg-animation" id="bg-animation"></div>
  );
};

export default BackgroundAnimation;