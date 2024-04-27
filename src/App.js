import React from 'react';
import './App.css'; // Importing the CSS for styling
import WeatherApp from './WeatherApp'; // Importing the WeatherApp component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Simple Weather App</h1>
      </header>
      <WeatherApp />
    </div>
  );
}

export default App;
