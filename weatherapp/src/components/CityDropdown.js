import React from 'react'
import { useContext } from "react"
import WeatherContext from '../context/WeatherContext'
import CITIES from '../cities'

function CityDropdown() {
    const { setCity} = useContext(WeatherContext)

    function onChange(e) {
        setCity(e.target.value)

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
        </div>
    )
}

export default CityDropdown
