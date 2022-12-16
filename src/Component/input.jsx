import React from 'react'
import { useWeatherr } from '../context/Weather';

export default function Input(props) {
  const Weather= useWeatherr();
  console.log(Weather)
  return (
    <div className='input'>
        <input type="text"
         placeholder={props.placeholder}
         spellCheck= "false"
         onChange={(e)=>Weather.setcity(e.target.value)}
         />
    </div>
  )
}
