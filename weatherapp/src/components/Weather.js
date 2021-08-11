import React from 'react'
import { useContext, useEffect } from "react"
import WeatherContext from '../context/WeatherContext'
import { search } from './GetCity'

import CITIES from '../cities'


const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


function Weather() {
    const { city,setWeatherInfo, weatherInfo } = useContext(WeatherContext);

    const dayArray = weatherInfo.daily.map((d)=> {
        const date = new Date(d.dt * 1000)
        return date.getDay()
    })

    const daysShort = ["Paz", "Pzt", "Sal", "Çar", "Per", "Cum", "Cts"];
    
    
    
    useEffect(() => {
        search(city).then( (dailyForecastList) => setWeatherInfo(dailyForecastList))
    }, [city, setWeatherInfo ])
    
    return (
        <div className="container">
            
            <div className="days">
                {
                    weatherInfo.daily.map((day, i) => (
                        <div className="day" key={i}>
                            <div className="dayName">{daysShort[dayArray[i]]}</div>
                            <div className="weatherIcon">
                                <img src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`} alt="" />
                            </div>
                            <div className="temps">
                                <div className="max">{day.temp.max}</div>
                                <div className="min">{day.temp.min}</div>
                            </div>
                        </div>
                    ) )
                }
                 {/* <div className="day">
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
                <br /> */}

              
            </div>
            
             
            
             
            
        </div>
    )
}

export default Weather
