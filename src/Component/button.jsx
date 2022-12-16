import React from 'react'
import { useWeatherr } from '../context/Weather'


export default function Button(props) {
  const Weather= useWeatherr();
  console.log(Weather.data)
  return (
    <div className='btn'>
        <button onClick={props.onClick}>{props.value}</button>
    </div>
  )
}
