import {  useEffect, useState } from 'react';
import { useGetWeatherQuery } from '../../store/weatherApi';
import style from "./Weather.module.scss"
function Weather() {
    const[description,setDesc] = useState("---")
    const [value, setValue] = useState("минск")
    const [city, setCity] = useState("минск")
    const [ico, setIco] = useState('')
    const [temp,setTemp] = useState('??')
    const [wind,setWind] = useState('??')
    const [humidity,setHumidity] = useState('??')
    const {data,isError,isFetching,requestId} = useGetWeatherQuery(city);
        useEffect(() => {
           const temp = String(Math.floor(data.main.temp))
            const wind = String(Math.floor(data.wind.speed))
            if(isFetching){
                setTemp("--")
                setDesc('---')
                setWind('--')
                setHumidity('--')
            }
            else{
                setTemp(isError?'??':temp)
                setDesc(isError?"---":data.weather[0].description)
                setWind(isError?"??":wind)
                setHumidity(isError?"??":data.main.humidity)
                setIco(data.weather[0].id)
            }
        }, [ isFetching,isError,requestId]);

    return (
        <div className={style.weather}>
            <input className={style.city} type='text' value={value} onChange={(e) => setValue(e.target.value)} onBlur={() => setCity(value)} onKeyUp={(event) => event.key === "Enter" && setCity(value)} />
            <i className = {`${style.icon} owf owf-${ico}`}></i>
            <div className={style.temp}>{temp}°C</div>
            <div className={style.desc}>{description}</div>
            <div className={style.wind}>Скорость ветра:{wind}м/с</div>
            <div className={style.humidity}>Влажность:{humidity}%</div>
        </div>
    )
}

export default Weather
