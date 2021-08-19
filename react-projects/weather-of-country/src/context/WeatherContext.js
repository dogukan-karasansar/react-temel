import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [city, setCity] = useState("İstanbul");
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    axios(
      "https://api.worldweatheronline.com/premium/v1/weather.ashx?key=c53258c0b4304fc49ed101309211908&q=+" +
        city +
        "&num_of_days=7&tp=24&format=json"
    )
      .then((res) => {
        setDatas(res.data.data.weather);
      })
      .catch((e) => console.log(e));
  }, [city]);

  const values = {
    datas,
    city,
    setCity,
  };

  return (
    <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
  );
};

export const useWeather = () => useContext(WeatherContext);
