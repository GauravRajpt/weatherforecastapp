import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
import {getWeatherDataforCity} from "../Api/index"

const weatherContext= createContext(null);

export const useWeatherr= ()=>{
    return useContext(weatherContext);
}
export const WeatherProvider= (props)=>{
    const [data, setdata]= useState(null);
    const [city, setcity]= useState(null);

    const fetchDataforcity= async ()=>{
        const response = await getWeatherDataforCity(city);
        setdata(response);
    };
    return(
        <weatherContext.Provider value={{city,data,setdata,setcity,fetchDataforcity}}>
            {props.children}
        </weatherContext.Provider>
    )
}
