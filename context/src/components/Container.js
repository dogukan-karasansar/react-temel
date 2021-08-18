import React from "react";
import { useTheme } from "../context/ThemeContext";
import Button from "./Button";
import Header from "./Header";
import Profile from "./Profile";

export default function Container() {
  const { theme } = useTheme();

  return (
    <div className={`App ${theme === "dark" ? "dark" : "light"}`}>
      <Header />
      <br />
      <Button />
      <br />
      <Profile />
    </div>
  );
}
