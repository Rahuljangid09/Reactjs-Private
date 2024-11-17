import React, { useState } from 'react'
import { SearchBox } from './SearchBox'
import { Info } from './Info'

export const WeatherApp = () => {
    const [weatherInfo, setWeatherInfo] = useState({
      city:"Pune",  
      temp:24,
      minTemp:24,
      maxTemp:24,
      humidity:24,
      feelslike:24,
      
    })

    let updateWeather=(newInfo)=>{
        setWeatherInfo(newInfo) 
    }
  return (
    <div>
        <h2>Weather app</h2>
        <SearchBox updateWeather={updateWeather}/>  
        <Info info={weatherInfo}/>
    </div>
  )
}
