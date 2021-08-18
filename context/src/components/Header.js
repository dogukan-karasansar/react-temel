import React from "react";
import { useTheme } from "../context/ThemeContext";

export default function Header() {
  const { theme } = useTheme();
  return <div>Active Theme: {theme}</div>;
}
