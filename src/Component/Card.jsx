import React from 'react'
import { useWeatherr } from '../context/Weather'

export default function Card() {
  const Weather= useWeatherr();
  return (
    <div className='Card'>
        {Weather?.data?.location?.name ?<>
        <img src={Weather?.data?.current?.condition.icon} alt="weather.png"></img>
        <h2>{Weather?.data?.current?.temp_c}°C</h2>
        <h2>{Weather?.data?.location?.name},{Weather?.data?.location?.region}</h2></>:<h2>try again, Name not found</h2>}
    </div>
  
  )
}
