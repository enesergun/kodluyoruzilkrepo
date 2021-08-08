import { useEffect, useState } from "react";
import { useFormik, Formik } from 'formik'
import axios from 'axios';
import Weather from "./Weather";
import CITIES from '../cities'

/* const CITIES = ['Adana', 'Adıyaman', 'Afyon', 'Ağrı', 'Amasya', 'Ankara', 'Antalya', 'Artvin',
'Aydın', 'Balıkesir', 'Bilecik', 'Bingöl', 'Bitlis', 'Bolu', 'Burdur', 'Bursa', 'Çanakkale',
'Çankırı', 'Çorum', 'Denizli', 'Diyarbakır', 'Edirne', 'Elazığ', 'Erzincan', 'Erzurum', 'Eskişehir',
'Gaziantep', 'Giresun', 'Gümüşhane', 'Hakkari', 'Hatay', 'Isparta', 'Mersin', 'İstanbul', 'İzmir', 
'Kars', 'Kastamonu', 'Kayseri', 'Kırklareli', 'Kırşehir', 'Kocaeli', 'Konya', 'Kütahya', 'Malatya', 
'Manisa', 'Kahramanmaraş', 'Mardin', 'Muğla', 'Muş', 'Nevşehir', 'Niğde', 'Ordu', 'Rize', 'Sakarya',
'Samsun', 'Siirt', 'Sinop', 'Sivas', 'Tekirdağ', 'Tokat', 'Trabzon', 'Tunceli', 'Şanlıurfa', 'Uşak',
'Van', 'Yozgat', 'Zonguldak', 'Aksaray', 'Bayburt', 'Karaman', 'Kırıkkale', 'Batman', 'Şırnak',
'Bartın', 'Ardahan', 'Iğdır', 'Yalova', 'Karabük', 'Kilis', 'Osmaniye', 'Düzce'] */


/* axios('api.openweathermap.org/data/2.5/weather?q=Burdur&appid=44d66f46cb89e2e484c0cfe9a25a9308') */   
const API_URL = "https://api.openweathermap.org/data/2.5/onecall?units=metric&lang=tr&"; // ${API_URL}lat=${cityInfo.latitude}&lon=${cityInfo.longitude}&appid=${API_KEY}
//"https://api.openweathermap.org/data/2.5/onecall?lat=${cityInfo.latitude}&lon=${cityInfo.longitude}&exclude=current,minutely,hourly,alerts&appid=${API key}"
const API_KEY = "44d66f46cb89e2e484c0cfe9a25a9308"                 
/* {
            return CITIES.indexOf(cInfo);
        } */

function Cities() {
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


    /* const cities = axios('https://api.openweathermap.org/data/2.5/weather?q=Burdur&appid=44d66f46cb89e2e484c0cfe9a25a9308')
			.then((res) => res.data)
			.catch((e) => console.log(e));


    const { handleSubmit, handleChange, values } = useFormik({
		initialValues: cities,
		onSubmit: (values) => {
			console.log(values);
		},
	}); */
    
    /* const [cities, setCities] = useState([]); */

	/* useEffect(() => {
		axios('https://api.openweathermap.org/data/2.5/weather?q=Burdur&appid=44d66f46cb89e2e484c0cfe9a25a9308')
			.then((res) => setCities(res.data))
			.catch((e) => console.log(e));
	}, []); */

    /* const data = axios('https://api.openweathermap.org/data/2.5/weather?q=Burdur&appid=44d66f46cb89e2e484c0cfe9a25a9308').then((resp) => console.log(resp.data)) // axiosla datayı cekiorum */
    

    

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

                <br />
                <br />

                {/* <div>
                    {JSON.stringify(values)}
                </div> */}
            </form>
            <Weather values={values}/>
        </div>
        
    )
}

export default Cities
