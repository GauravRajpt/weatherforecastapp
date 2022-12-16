const baseUrl= "https://api.weatherapi.com/v1/current.json?key=611fa44acd1c46ababe60052221312"

 export const getWeatherDataforCity= async (city)=>{
    const response= await fetch(`${baseUrl}&q=${city}`);
    return await response.json()
};

export const getWeatherDataforLocation= async (lat,lon)=>{
    const response= await fetch(`${baseUrl}&q=${lat},${lon}`);
    return await response.json()
};