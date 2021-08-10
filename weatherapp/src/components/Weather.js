import React from 'react'
import { useContext, useEffect } from "react"
import WeatherContext from '../context/WeatherContext'
import { search } from './GetCity'

import CITIES from '../cities'


function Weather() {
    const { city,setWeatherInfo, weatherInfo } = useContext(WeatherContext);

    if (weatherInfo === []) {
        
    }
    
    
    useEffect(() => {
        search(city).then( (dailyForecastList) => setWeatherInfo(dailyForecastList))
    }, [city, setWeatherInfo ])
    
    return (
        <div className="container">
            
            <div className="days">
                <div className="day">
                    <div className="dayName">Wed</div>
                    <div className="weatherIcon"></div>
                    <div className="temps">{weatherInfo.daily[0].temp.max}</div>
                </div>
                <div className="day">
                    <div className="dayName">Wed</div>
                    <div className="weatherIcon"></div>
                    <div className="temps">77 64</div>
                </div>
                <div className="day">
                    <div className="dayName">Wed</div>
                    <div className="weatherIcon"></div>
                    <div className="temps">77 64</div>
                </div>
                <div className="day">
                    <div className="dayName">Wed</div>
                    <div className="weatherIcon"></div>
                    <div className="temps">77 64</div>
                </div>
                <div className="day">
                    <div className="dayName">Wed</div>
                    <div className="weatherIcon"></div>
                    <div className="temps">77 64</div>
                </div>
                <div className="day">
                    <div className="dayName">Wed</div>
                    <div className="weatherIcon"></div>
                    <div className="temps">77 64</div>
                </div>
                <div className="day">
                    <div className="dayName">Wed</div>
                    <div className="weatherIcon"></div>
                    <div className="temps">77 64</div>
                </div>

                <br />
                <br />

               {/*  {JSON.stringify(weatherInfo.daily[0].temp.max)} */}
            </div>
            
             
            
             
            
        </div>
    )
}

export default Weather
