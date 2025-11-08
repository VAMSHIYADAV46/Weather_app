import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function Search({ updateInfo }) {
  const [city, setCity] = useState("");

  async function getResponse() {
    try {
      // FASTEST API: wttr.in
      const res = await fetch(`https://wttr.in/${city}?format=j1`);
      const json = await res.json();

      if (!json.nearest_area) {
        alert("City not found");
        return null;
      }

      // Extract data from wttr.in
      const area = json.nearest_area[0];
      const current = json.current_condition[0];
      const today = json.weather[0];
      const astro = today.astronomy[0];

      const weatherInfo = {
        location: {
          city: area.areaName[0].value,
          country: area.country[0].value,
          latitude: area.latitude,
          longitude: area.longitude,
        },

        current: {
          temperature: Number(current.FeelsLikeC).toFixed(2) + "°C",
          weatherDesc: current.weatherDesc[0].value,        // text description
          weatherCode: Number(current.weatherCode),         // numeric code
          windSpeed: Number(current.windspeedKmph).toFixed(2) + " km/h",
        },

        today: {
          date: today.date,
          maxTemp: Number(today.maxtempC).toFixed(2) + "°C",
          minTemp: Number(today.mintempC).toFixed(2) + "°C",
          sunrise: astro.sunrise,
          sunset: astro.sunset,
        },
      };

      return weatherInfo;

    } catch (error) {
      console.error("wttr.in error:", error);
      return null;
    }
  }

  async function onSubmit(event) {
    event.preventDefault();
    if (!city.trim()) {
      alert("Please enter a city name");
      return;
    }

    const data = await getResponse();
    if (data) updateInfo(data);

    setCity("");
  }

  return (
    <Box
      component="form"
      onSubmit={onSubmit}
      sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
      noValidate
      autoComplete="off"
    >
      <TextField
        label="City"
        variant="outlined"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <br />
      <Button variant="contained" type="submit">
        Search
      </Button>
    </Box>
  );
}
