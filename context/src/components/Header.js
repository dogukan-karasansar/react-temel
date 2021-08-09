import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

export default function Header() {
  const { theme, setTheme } = useContext(ThemeContext);
  return <div>Active Theme: {theme}</div>;
}
