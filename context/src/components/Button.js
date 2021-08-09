import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

export default function Button() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div>
      Active Theme: {theme}
      <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        Change Theme
      </button>
    </div>
  );
}
