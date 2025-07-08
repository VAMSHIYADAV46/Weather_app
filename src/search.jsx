import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function Search({updateInfo}) {
  const [city, setCity] = useState("");

  const API_KEY = "d4f849366d22d4736338119860a835ce"
//   const API_URL = "http://api.openweathermap.org/geo/1.0/direct";

  async function getResponse() {
    try {
      let response = await fetch(`https://wttr.in/${city}?format=j1`);
    //   let response = await fetch(`${API_URL}?q=${city}&limit=5&appid=${API_KEY}`);
      
      const json = await response.json();
    const weatherInfo = {
    location: {
        city: json.nearest_area[0].areaName[0].value,
        region: json.nearest_area[0].region[0].value,
        country: json.nearest_area[0].country[0].value,
        latitude: json.nearest_area[0].latitude,
        longitude: json.nearest_area[0].longitude,
    },
    current: {
        temperature: json.current_condition[0].FeelsLikeC + "°C",
        weatherDesc: json.current_condition[0].weatherDesc[0].value,
        humidity: json.current_condition[0].humidity + "%",
        cloudcover: json.current_condition[0].cloudcover + "%",
        windSpeed: json.current_condition[0].windspeedKmph + " km/h",
    },
    today: {
        date: json.weather[0].date,
        maxTemp: json.weather[0].maxtempC + "°C",
        minTemp: json.weather[0].mintempC + "°C",
        uvIndex: json.weather[0].uvIndex,
        sunHours: json.weather[0].sunHour,
        sunrise: json.weather[0].astronomy[0].sunrise,
        sunset: json.weather[0].astronomy[0].sunset
    }
    };
    return weatherInfo
    console.log(weatherInfo);
      
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  function onSubmit(event) {
    event.preventDefault(); // prevent page refresh
    console.log("City:", city);
    let newInfo = getResponse();
    updateInfo(newInfo)
    setCity("");
    
  }

  function onChange(event) {
    setCity(event.target.value);
  }

  return (
    <Box
      component="form"
      onSubmit={onSubmit}
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-basic"
        name="input"
        label="City"
        variant="outlined"
        value={city}
        onChange={onChange}
      />
      <br />
      <Button variant="contained" type="submit">Search</Button>
    </Box>
  );
}
