import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { useState } from 'react';

export default function ActionAreaCard({info}) {
    



  return (
    <Card sx={{ maxWidth: 600 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://images.unsplash.com/photo-1586789651284-54abdddab7d4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHdpbmR5JTIwd2hlYXJ0aGVyfGVufDB8fDB8fHww"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.location.city}
          </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Location: {info.location.city}, {info.location.region}, {info.location.country}  <br /> <br />
            Date: {info.today.date}  <br /> <br />
            Weather: {info.current.weatherDesc}  <br /> <br />
            Temperature: {info.current.temperature}  <br /> <br />
            Humidity: {info.current.humidity}  <br /> <br />
            Wind Speed: {info.current.windSpeed}  <br /> <br />
            Cloud Cover: {info.current.cloudcover}  <br /> <br />
            Sunrise: {info.today.sunrise} | Sunset: {info.today.sunset}  <br /> <br />
            UV Index: {info.today.uvIndex}
            </Typography>

        </CardContent>
      </CardActionArea>
    </Card>
  );
}
