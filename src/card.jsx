import * as React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  Stack
} from "@mui/material";

import WbSunnyIcon from "@mui/icons-material/WbSunny";
import CloudIcon from "@mui/icons-material/Cloud";
import OpacityIcon from "@mui/icons-material/Opacity";
import AirIcon from "@mui/icons-material/Air";
import Brightness3Icon from "@mui/icons-material/Brightness3";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import WbTwilightIcon from "@mui/icons-material/WbTwilight";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";

// --------------------------------------------------
// WTTR.IN WeatherCode → Background Images
// --------------------------------------------------
const wttrImageMap = {
  // Sunny / Clear
  113: "https://images.unsplash.com/photo-1604228741406-3faa38f4907a?w=600&auto=format&fit=crop&q=60",

  // Partly Cloudy
  116: "https://images.unsplash.com/uploads/14122598319144c6eac10/5f8e7ade?w=600&auto=format&fit=crop&q=60",

  // Cloudy / Overcast
  119: "https://images.unsplash.com/uploads/14122598319144c6eac10/5f8e7ade?w=600&auto=format&fit=crop&q=60",
  122: "https://images.unsplash.com/uploads/14122598319144c6eac10/5f8e7ade?w=600&auto=format&fit=crop&q=60",

  // Fog
  143: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600&auto=format&fit=crop&q=60",

  // Light Drizzle / Light Rain
  176: "https://images.unsplash.com/photo-1519692933481-e162a57d6721?w=600&auto=format&fit=crop&q=60",
  263: "https://images.unsplash.com/photo-1519692933481-e162a57d6721?w=600&auto=format&fit=crop&q=60",
  266: "https://images.unsplash.com/photo-1519692933481-e162a57d6721?w=600&auto=format&fit=crop&q=60",

  // Moderate / Heavy Rain
  296: "https://images.unsplash.com/photo-1519692933481-e162a57d6721?w=600&auto=format&fit=crop&q=60",
  299: "https://images.unsplash.com/photo-1519692933481-e162a57d6721?w=600&auto=format&fit=crop&q=60",
  302: "https://images.unsplash.com/photo-1519692933481-e162a57d6721?w=600&auto=format&fit=crop&q=60",
  305: "https://images.unsplash.com/photo-1519692933481-e162a57d6721?w=600&auto=format&fit=crop&q=60",
  308: "https://images.unsplash.com/photo-1519692933481-e162a57d6721?w=600&auto=format&fit=crop&q=60",

  // Snow
  320: "https://images.unsplash.com/photo-1608889175123-8f1b9f3e3c2c?w=600&auto=format&fit=crop&q=60",
  323: "https://images.unsplash.com/photo-1608889175123-8f1b9f3e3c2c?w=600&auto=format&fit=crop&q=60",
  326: "https://images.unsplash.com/photo-1608889175123-8f1b9f3e3c2c?w=600&auto=format&fit=crop&q=60",

  // Thunderstorm
  389: "https://images.unsplash.com/photo-1500674425229-f692875b0ab7?w=600&auto=format&fit=crop&q=60",
  392: "https://images.unsplash.com/photo-1500674425229-f692875b0ab7?w=600&auto=format&fit=crop&q=60",
  395: "https://images.unsplash.com/photo-1500674425229-f692875b0ab7?w=600&auto=format&fit=crop&q=60"
};

// Fallback image
const fallbackImage =
  "https://images.unsplash.com/photo-1601134467661-3d775b999c8b?w=600&auto=format&fit=crop&q=60";

// Return correct background image
const getWeatherImage = (code) => {
  return wttrImageMap[code] || fallbackImage;
};

// --------------------------------------------------
// WTTR.IN → Icon Map
// --------------------------------------------------
const getWeatherIcon = (code) => {
  if (code === 113) return <WbSunnyIcon />;                  // Sunny
  if (code === 116) return <WbSunnyOutlinedIcon />;         // Partly cloudy
  if (code === 119 || code === 122) return <CloudIcon />;   // Cloudy/Overcast
  if (code === 143) return <Brightness3Icon />;             // Fog/Mist

  // Rain
  if (code >= 176 && code <= 308) return <OpacityIcon />;

  // Snow
  if (code >= 320 && code <= 326) return <AcUnitIcon />;

  // Thunderstorm
  if (code >= 389) return <ThunderstormIcon />;

  return <WbSunnyOutlinedIcon />;  
};

export default function ActionAreaCard({ info }) {
  const code = Number(info.current.weatherCode);

  return (
    <Card sx={{ maxWidth: 600, minWidth: 400, borderRadius: 3 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="160"
          image={getWeatherImage(code)}
          alt="Weather condition"
        />

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.location.city}, {info.location.country}
          </Typography>

          <Typography variant="body2" color="text.secondary" mb={2}>
            {info.today.date}
          </Typography>

          {/* Weather Description */}
          <Stack direction="row" alignItems="center" spacing={1}>
            {getWeatherIcon(code)}
            <Typography variant="body1">
              {info.current.weatherDesc}
            </Typography>
          </Stack>

          {/* Temperature + Wind */}
          <Stack direction="row" spacing={2} mt={2}>
            <Stack direction="row" spacing={1} alignItems="center">
              <WbSunnyOutlinedIcon />
              <Typography>{info.current.temperature}</Typography>
            </Stack>

            <Stack direction="row" spacing={1} alignItems="center">
              <AirIcon />
              <Typography>{info.current.windSpeed}</Typography>
            </Stack>
          </Stack>

          {/* Sunrise + Sunset */}
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

          {/* Min/Max */}
          <Typography variant="body2" mt={2}>
            Max: {info.today.maxTemp} • Min: {info.today.minTemp}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
