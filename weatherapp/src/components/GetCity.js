import axios from "axios";
import CITIES from '../cities'



const API_KEY = "a8e0802b5bb7b33a62b61f79c6716145"

/* const cityName = CITIESI.find(function (cInfo) {
    return cInfo.name === CITIES.trim().toLowerCase();
}); */

export const search = async (cityName) => {

    const getData  = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${CITIES[0][cityName].latitude}&lon=${CITIES[0][cityName].longitude}&exclude=current,minutely,hourly,alerts&appid=${API_KEY}`);

    const dailyForecastList = getData.data

    return dailyForecastList
}
