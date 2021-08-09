import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import Button from "./Button";
import Header from "./Header";

export default function Container() {
  const { theme } = useContext(ThemeContext);;

  return (
    <div className={`App ${theme === "dark" ? "dark" : "light"}`}>
      <Header />
      <br />
      <Button />
    </div>
  );
}
