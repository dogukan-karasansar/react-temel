import React from "react";
import { useWeather } from "../context/WeatherContext";

export default function CitySelect() {
  const { city, setCity } = useWeather();
  const selectCity = (value) => {
    setCity(value);
  };
  return (
    <div
      style={{
        width: "600px",
        height: "50px",
        backgroundColor: "lightblue",
        display: "flex",
        borderRadius: "10px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <select
        onChange={(e) => selectCity(e.target.value)}
        name="city"
        id="city"
        defaultValue={city}
        style={{
          width: "350px",
          height: "30px",
          borderRadius: "5px",
          borderWidth: "0px",
          padding: "5px",
          color: "#c8d4d3",
          fontWeight: "bold",
        }}
      >
        <option value="İstanbul">İstanbul</option>
        <option value="Ankara">Ankara</option>
        <option value="İzmir">İzmir</option>
        <option value="Ardahan">Ardahan</option>
      </select>
    </div>
  );
}
