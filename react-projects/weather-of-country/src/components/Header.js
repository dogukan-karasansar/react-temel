import React from "react";
import { useWeather } from "../context/WeatherContext";

export default function Header() {
  const { city } = useWeather();
  return <div style={{color: 'black', fontWeight: 'bold', fontSize: "25px", margin: "20px"}}>{city} Hava Durumu</div>;
}
