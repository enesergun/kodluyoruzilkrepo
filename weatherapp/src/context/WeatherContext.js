import { createContext, useState, useEffect } from "react";
import axios from 'axios';

import CITIES from '../cities'

 
const API_KEY = "a8e0802b5bb7b33a62b61f79c6716145"

const WeatherContext = createContext(null);


export const WeatherProvider = ({ children }) => {

    const [city, setCity] = useState("ankara");
    const [weatherInfo, setWeatherInfo] = useState([]);
    /* const [error, setError] = useState(null); */


    const values = {
        city,
        setCity,
        weatherInfo,
        setWeatherInfo,
    };
    
    

    // api.openweathermap.org/data/2.5/onecall?lat=38.8&lon=12.09&callback=test
    // https://api.openweathermap.org/data/2.5/onecall?lat=${cityInfo.latitude}&lon=${cityInfo.longitude}&exclude=current,minutely,hourly,alerts&appid=${API_KEY}

    


    

    /* useEffect(() => {
        const ankara = CITIES.find(c => {
            return c.name === "ankara";
        });
        fetchWeather(ankara);
    }, []) */

    console.log(city)
    console.log(weatherInfo)


    return (
        <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
    )
}

export default WeatherContext
