import { createContext, useState, useEffect } from "react";
import axios from 'axios';

import CITIES from '../cities'

 
const API_URL = "https://api.openweathermap.org/data/2.5/onecall?units=metric&lang=tr&"; 
const API_KEY = "44d66f46cb89e2e484c0cfe9a25a9308"


const WeatherContext = createContext(null);


export const WeatherProvider = ({ children }) => {

    const [city, setCity] = useState("ankara");
    const [weatherInfo, setWeatherInfo] = useState([]);
    const [error, setError] = useState(null);


    const values = {
        city,
        error,
        setCity,
        weatherInfo
    };


    function fetchWeather(cityInfo) {
        axios(`https://api.openweathermap.org/data/2.5/onecall?lat=${cityInfo.latitude}&lon=${cityInfo.longitude}&exclude=current,minutely,hourly,alerts&appid=${API_KEY}`)
            .then(response => {
                setWeatherInfo(response.data);
            })
            .catch(err => {
                console.log(err);
                setError("HATA!")
            });
    }

    const cityInfo = CITIES.find(function (cInfo) {
        return cInfo.name === city.trim().toLowerCase();
    });

    console.log("city", city)

    function onChange(e) {
        setCity(e.target.value)
        fetchWeather(cityInfo)

    }

    return (
        <div>
            <form  onChange={(e) => onChange(e)}>
                <select name="city">
                {
                    CITIES.map((city, i) => (
                        <option  key={i}>{city.name}</option>
                    ))
                }
                </select>
            </form>
            <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
        </div>
        
    )
}

export default WeatherContext
