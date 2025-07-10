import * as React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  Stack
} from '@mui/material';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import CloudIcon from '@mui/icons-material/Cloud';
import OpacityIcon from '@mui/icons-material/Opacity';
import AirIcon from '@mui/icons-material/Air';
import Brightness3Icon from '@mui/icons-material/Brightness3';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import WbTwilightIcon from '@mui/icons-material/WbTwilight';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';

const getWeatherIcon = (desc) => {
  const text = desc.toLowerCase();
  if (text.includes("sunny")) return <WbSunnyIcon />;
  if (text.includes("cloud")) return <CloudIcon />;
  if (text.includes("rain")) return <OpacityIcon />;
  if (text.includes("wind")) return <AirIcon />;
  if (text.includes("clear")) return <Brightness3Icon />;
  return <WbSunnyOutlinedIcon />;
};

const getWeatherImage = (desc) => {
  const text = desc.toLowerCase();
  if (text.includes("sunny"))
    return "https://images.unsplash.com/photo-1604228741406-3faa38f4907a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3Vubnl8ZW58MHx8MHx8fDA%3D";
  if (text.includes("cloud"))
    return "https://images.unsplash.com/uploads/14122598319144c6eac10/5f8e7ade?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNsb3VkeXxlbnwwfHwwfHx8MA%3D%3D";
  if (text.includes("rain"))
    return "https://images.unsplash.com/photo-1519692933481-e162a57d6721?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmFpbnxlbnwwfHwwfHx8MA%3D%3D";
  if (text.includes("clear"))
    return "https://plus.unsplash.com/premium_photo-1727730047398-49766e915c1d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2xlYXIlMjBza3l8ZW58MHx8MHx8fDA%3D";
  return "https://images.unsplash.com/photo-1601134467661-3d775b999c8b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
};

export default function ActionAreaCard({ info }) {
  return (
    <Card sx={{ maxWidth: 600, borderRadius: 3 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="160"
          image={getWeatherImage(info.current.weatherDesc)}
          alt="Weather condition"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.location.city}, {info.location.region}
          </Typography>
          <Typography variant="body2" color="text.secondary" mb={2}>
            {info.location.country} • {info.today.date}
          </Typography>

          <Stack direction="row" alignItems="center" spacing={1}>
            {getWeatherIcon(info.current.weatherDesc)}
            <Typography variant="body1">
              {info.current.weatherDesc}
            </Typography>
          </Stack>

          <Stack direction="row" spacing={2} mt={2}>
            <Stack direction="row" spacing={1} alignItems="center">
              <ThermostatIcon />
              <Typography>{info.current.temperature}</Typography>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center">
              <OpacityIcon />
              <Typography>{info.current.humidity}</Typography>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center">
              <AirIcon />
              <Typography>{info.current.windSpeed}</Typography>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center">
              <CloudIcon />
              <Typography>{info.current.cloudcover}</Typography>
            </Stack>
          </Stack>

          <Stack direction="row" spacing={2} mt={2}>
            <Stack direction="row" spacing={1} alignItems="center">
              <WbSunnyOutlinedIcon />
              <Typography>{info.today.sunrise}</Typography>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center">
              <WbTwilightIcon />
              <Typography>{info.today.sunset}</Typography>
            </Stack>
          </Stack>

          <Typography variant="body2" mt={2}>
            UV Index: {info.today.uvIndex}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
