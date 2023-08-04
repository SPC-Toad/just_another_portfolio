import axios from 'axios';
import React, {useState, useEffect, useRef} from 'react'
import './Weather.css'

function Weather() {
    const [data, setData] = useState();

    const [location, setLocation] = useState('Boston');

    const inputRef = useRef();

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=ae80337c5d47af0ce26464cba0b88dd1`;

    const handleChange = () => {
        setLocation(inputRef.current.value);
    };

    const fetchData = () => {
        axios.get(url).then((response) => {
            setData(response.data);
        })
    };

    useEffect(() => {
        fetchData();
    }, [location]);

  return (
    <div id='weather-container'>
        <div id='search-container'>
            <input id='search-text' type='text' ref={inputRef} placeholder='Type City'/>
            <div id='search-button' onClick={handleChange}>Search</div>
        </div>
        <img id='weather-icon' src={`https://openweathermap.org/img/wn/${data?.weather[0]?.icon}@2x.png`} alt='err' />
        <div id='basic-info-container'>
            <div>{data?.weather[0]?.main}</div>
            <div>{Math.floor(data?.main?.temp - 273.15) * 9 / 5 + 32}&deg;F</div>
        </div>
        <div id='weather-item'>Feels Like: {Math.floor(data?.main?.feels_like - 273.15) * 9 / 5 + 32}&deg;F</div>
        <div id='weather-item'>Humidity: {data?.main?.humidity}%</div>
        <div id='weather-item'>Wind Speed: {Math.floor(data?.wind?.speed * 9/4)}mph</div>
        <div id='wind-info-container'>Wind Direction: {data?.wind?.deg}&deg;</div>
    </div>
  )
}

export default Weather