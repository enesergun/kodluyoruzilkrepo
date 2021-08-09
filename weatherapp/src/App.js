import './App.css';
import React from 'react'
import  { WeatherProvider } from './context/WeatherContext'
import Weather from './components/Weather'
import CityDropdown  from './components/CityDropdown'
import GetCity from './components/GetCity'

function App() {
  return (
    <div className="App">
      <WeatherProvider>
  
        <CityDropdown />
        <GetCity />
        <Weather />

      </WeatherProvider>
    </div>
  );
}

export default App;
