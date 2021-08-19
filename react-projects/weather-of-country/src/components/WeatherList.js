import React from "react";
import { useWeather } from "../context/WeatherContext";

export default function WeatherList() {
  const { datas } = useWeather();

  const days = [
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
    "Pazar",
  ];

  const today = days[new Date().getDay()];

  return (
    <div style={{ display: "flex", flexDirection: "row", marginTop: 75 }}>
      {datas.map((data, index) => (
        <div
          key={index}
          className={
            today === days[new Date(data.date).getDay().toLocaleString("tr-TR")]
              ? "todayCard"
              : "card"
          }
        >
          <p>{days[new Date(data.date).getDay().toLocaleString("tr-TR")]}</p>
          <img
            src={data.hourly[0].weatherIconUrl[0].value}
            style={{ width: "70px", height: "70px", borderRadius: "35px" }}
          />
          <div
            style={{
              flexDirection: "row",
              textAlign: "center",
              marginTop: "10px",
            }}
          >
            <span style={{ fontWeight: "bold" }}>{data.maxtempC}°</span>&nbsp;
            <span>{data.mintempC}°</span>
          </div>
        </div>
      ))}
    </div>
  );
}
