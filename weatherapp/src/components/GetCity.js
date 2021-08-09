import React from 'react'
import { useContext } from "react"
import WeatherContext from '../context/WeatherContext'
import CITIES from '../cities'
import axios from 'axios';


const API_KEY = "b352577505407626b1cf515aaf82ff08"


function GetCity() {
    const { city, setWeatherInfo, setError} = useContext(WeatherContext)

    function fetchWeather(cityInfo) {
        axios(`https://jsonplaceholder.typicode.com/users`)
            .then(response => {
                setWeatherInfo(response.data);
            })
            .catch(err => {
                
                setError("HATA!")
            });
    }

    const cityInfo = CITIES.find(function (cInfo) {
        return cInfo.name === city.trim().toLowerCase();
    });


    
    return (
        <div>
            
        </div>
    )
}

export default GetCity
