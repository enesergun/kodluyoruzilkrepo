import './App.css';
import React, { useEffect } from 'react'



import Cities from './components/Cities'
import Weather from './components/Weather'

function App() {
  return (
    <div className="App">
      <Cities />
      <Weather />
    </div>
  );
}

export default App;
