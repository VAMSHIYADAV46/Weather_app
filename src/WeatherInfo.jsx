import Search from "./search"
import ActionAreaCard from "./card"
import { useState } from "react"

export default function Wheatherinfo() {
    const [Wheatherinfo, setWeatherInfo] = useState({
        current: {
        cloudcover: "72%",
        humidity: "87%",
        temperature: "25°C",
        weatherDesc: "Light rain shower",
        windSpeed: "16 km/h"
        },
        location: {
        city: "Nirmal",
        country: "India",
        latitude: "19.100",
        longitude: "78.350",
        region: "Andhra Pradesh"
        },
        today: {
        date: "2025-07-08",
        maxTemp: "25°C",
        minTemp: "22°C",
        sunHours: "10.5",
        sunrise: "05:45 AM",
        sunset: "06:58 PM",
        uvIndex: "1"
        }
    });

    function updateInfo(newInfo) {
        setWeatherInfo(newInfo)
    }
    return(
        <>
        <Search updateInfo = {updateInfo}></Search>
        <ActionAreaCard info={Wheatherinfo}></ActionAreaCard>
        </>
    )
}