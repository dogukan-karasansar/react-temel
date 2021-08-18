import { useTheme } from "../context/ThemeContext";

export default function Button() {
  const { theme, setTheme } = useTheme();
  return (
    <div>
      Active Theme: {theme}
      <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        Change Theme
      </button>
    </div>
  );
}
