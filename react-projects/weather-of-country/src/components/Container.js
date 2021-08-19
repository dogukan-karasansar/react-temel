import React from "react";
import CitySelect from "./CitySelect";
import Header from "./Header";
import WeatherList from "./WeatherList";

export default function Container() {
  return (
    <div>
      <Header />
      <CitySelect />
      <WeatherList />
    </div>
  );
}
