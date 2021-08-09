import { createContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  /* Altaki gibi kullanılarak akşam ve sabaha göre gece sabah dark light ayarlanabilir */
  /* const hour = new Date().getHours();
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || hour >= 6 ? "dark" : "light"
  ); */

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    localStorage.setItem("theme", theme);
    console.log(theme);
  }, [theme]);

  const values = {
    theme,
    setTheme,
  };
  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  );
};
export default ThemeContext;
