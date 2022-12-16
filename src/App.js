
import React from "react";
import Card from "./Component/Card";
import Button from "./Component/button";
import Input from "./Component/input";
import  "./App.css"
import { useWeatherr } from './context/Weather';
import {getWeatherDataforLocation} from "./Api/index"
import { useEffect } from "react";

function App() {
useEffect(()=>{


  function successCallback(position){
    console.log(position.coords.latitude);
    const location= getWeatherDataforLocation(position.coords.latitude,position.coords.longitude).then((data)=>Weather.setdata(data))
    
    console.log(Weather.data)
  }
  function errorCallback(error){
    console.log(error);
  }
  navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
},[])
  const Weather= useWeatherr();
  console.log(Weather)
  return (
    <div className="App">
      
     <h1>Weather Forecast</h1>
         <Input />
         <Button onClick={Weather.fetchDataforcity} value="Search"/>
         <Card />
         <Button value="Refresh"/>
         </div>
    
  );
}

export default App;
