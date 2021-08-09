import React from 'react'
import { useContext } from "react"
import WeatherContext from '../context/WeatherContext'



function Weather() {
    const { city, error, setCity ,weatherInfo, } = useContext(WeatherContext); 
    
    return (
        <div className="container">
            
            <div className="days">
                <div className="day">
                    <div className="dayName">Wed</div>
                    <div className="weatherIcon"></div>
                    <div className="temps"></div>
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
            </div>
            
             
            
             
            
        </div>
    )
}

export default Weather
