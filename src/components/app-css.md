```css
/* App.css - Main styles */
:root {
  --primary-color: #4361ee;
  --secondary-color: #3f37c9;
  --accent-color: #4cc9f0;
  --text-color: #f8f9fa;
  --background-dark: #0a1128;
  --background-light: #1a2a52;
  --success-color: #4ade80;
  --warning-color: #fbbf24;
  --danger-color: #f87171;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
  background: linear-gradient(135deg, var(--background-dark), var(--background-light));
  color: var(--text-color);
  min-height: 100vh;
}

.app {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
  position: relative;
  overflow-x: hidden;
}

.container {
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  position: relative;
}

/* App Wrapper */
.weather-app {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  padding: 30px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  max-width: 100%;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeIn 0.8s ease-out forwards;
}

@keyframes fadeIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .weather-app {
    padding: 20px;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 10px;
  }
  
  .weather-app {
    padding: 15px;
  }
}
```