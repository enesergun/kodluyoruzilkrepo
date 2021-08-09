import './App.css';
import React from 'react'



import  { WeatherProvider } from './context/WeatherContext'
import Weather from './components/Weather'

function App() {
  return (
    <div className="App">
      <WeatherProvider>
        <Weather />
      </WeatherProvider>
    </div>
  );
}

export default App;
