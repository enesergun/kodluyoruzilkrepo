import React from 'react'
import { useContext } from "react"
import WeatherContext from '../context/WeatherContext'
// key: 44d66f46cb89e2e484c0cfe9a25a9308

// endpoint : api.openweathermap.org/data/2.5/weather?q={city name}&appid=44d66f46cb89e2e484c0cfe9a25a9308



function Weather() {
    const { city, error, setCity ,weatherInfo} = useContext(WeatherContext);
    
    
    return (
        <div>
            
             
            
             
            
        </div>
    )
}

export default Weather
