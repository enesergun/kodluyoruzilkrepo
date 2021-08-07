import { useEffect, useState } from "react";
import { useFormik } from 'formik'
import axios from 'axios'

const cities = ['Adana', 'Adıyaman', 'Afyon', 'Ağrı', 'Amasya', 'Ankara', 'Antalya', 'Artvin',
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

    axios('https://api.openweathermap.org/data/2.5/weather?q=Burdur&appid=44d66f46cb89e2e484c0cfe9a25a9308').then((resp) => console.log(resp.data)) // axiosla datayı cekiorum

    return (
        <div>
            <select name="city" /* onChange={handleChange} */>
                <option value="burdur">Burdur</option>
                <option value="antalya">Antalya</option>
                <option value="ankara">Ankara</option>
            </select>
            
        </div>
    )
}

export default Cities
