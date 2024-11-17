import React, { useState } from "react";
import Button from "@mui/material/Button";
import "./SearchBox.css";

import TextField from "@mui/material/TextField";

export const SearchBox = ({updateWeather}) => {

  const [city, setCity] = useState("");

  const getweatherInfo=async()=>{
     let response= await fetch(`${API_URL}?q=${city}&appid=${API_key}&units=metric`)
     let jsonResponse= await response.json()
     

     let result={
      city:city,
      temp:jsonResponse.main.temp,
      minTemp:jsonResponse.main.temp_min,
      maxTemp:jsonResponse.main.temp_max,
      humidity:jsonResponse.main.humidity,
      feelslike:jsonResponse.main.feels_like,
      

     }
     console.log(result)
     return result
  }

  const API_URL="https://api.openweathermap.org/data/2.5/weather"
  const API_key="51cdb81fdc62c043d7acac41ddc25d73"

  let handleChange = (event) => {
    setCity(event.target.value);
    
  };

  let handleSubmit= async(event)=>{
     event.preventDefault()
     console.log(city)
     setCity("")
     let newInfo=await getweatherInfo()
     updateWeather(newInfo)
  }

  return (
    <div className="search-box">
      <h3>Search for the weather</h3>
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City name"
          value={city}
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <Button variant="contained" type="submit">
          Search
        </Button>
      </form>
    </div>
  );
};
