import { useEffect, useState } from "react";
import { useFormik, Formik } from 'formik'
import axios from 'axios';
import Weather from "./Weather";

const CITIES = ['Adana', 'Adıyaman', 'Afyon', 'Ağrı', 'Amasya', 'Ankara', 'Antalya', 'Artvin',
'Aydın', 'Balıkesir', 'Bilecik', 'Bingöl', 'Bitlis', 'Bolu', 'Burdur', 'Bursa', 'Çanakkale',
'Çankırı', 'Çorum', 'Denizli', 'Diyarbakır', 'Edirne', 'Elazığ', 'Erzincan', 'Erzurum', 'Eskişehir',
'Gaziantep', 'Giresun', 'Gümüşhane', 'Hakkari', 'Hatay', 'Isparta', 'Mersin', 'İstanbul', 'İzmir', 
'Kars', 'Kastamonu', 'Kayseri', 'Kırklareli', 'Kırşehir', 'Kocaeli', 'Konya', 'Kütahya', 'Malatya', 
'Manisa', 'Kahramanmaraş', 'Mardin', 'Muğla', 'Muş', 'Nevşehir', 'Niğde', 'Ordu', 'Rize', 'Sakarya',
'Samsun', 'Siirt', 'Sinop', 'Sivas', 'Tekirdağ', 'Tokat', 'Trabzon', 'Tunceli', 'Şanlıurfa', 'Uşak',
'Van', 'Yozgat', 'Zonguldak', 'Aksaray', 'Bayburt', 'Karaman', 'Kırıkkale', 'Batman', 'Şırnak',
'Bartın', 'Ardahan', 'Iğdır', 'Yalova', 'Karabük', 'Kilis', 'Osmaniye', 'Düzce']


/* axios('api.openweathermap.org/data/2.5/weather?q=Burdur&appid=44d66f46cb89e2e484c0cfe9a25a9308') */                    

function Cities() {

    const cities = axios('https://api.openweathermap.org/data/2.5/weather?q=Burdur&appid=44d66f46cb89e2e484c0cfe9a25a9308')
			.then((res) => res.data)
			.catch((e) => console.log(e));

    /* console.log(cities) */

    const { handleSubmit, handleChange, values } = useFormik({
		initialValues: cities,
		onSubmit: (values) => {
			console.log(values);
		},
	});
    
    /* const [cities, setCities] = useState([]); */

	/* useEffect(() => {
		axios('https://api.openweathermap.org/data/2.5/weather?q=Burdur&appid=44d66f46cb89e2e484c0cfe9a25a9308')
			.then((res) => setCities(res.data))
			.catch((e) => console.log(e));
	}, []); */

    /* const data = axios('https://api.openweathermap.org/data/2.5/weather?q=Burdur&appid=44d66f46cb89e2e484c0cfe9a25a9308').then((resp) => console.log(resp.data)) // axiosla datayı cekiorum */
    
    

    return (
        <form onSubmit={handleSubmit}>
            <select name="city" value={cities.name} onChange={handleChange}>
               {
                   CITIES.map((city, i) => (
                      <option value={city} key={i}>{city}</option>
                   ))
               }
            </select>

            <br />
            <br />

            <div>
                {JSON.stringify(values)}
            </div>
            <Weather values={values} handleSubmit={handleSubmit} handleChange={handleChange}/>
        </form>
    )
}

export default Cities
