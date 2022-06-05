import { createContext, useContext, useEffect, useReducer } from "react";
import { themeReducer } from "../Reducers/themeReducer";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useReducer(themeReducer, "light");
  useEffect(() => {
    const Theme = localStorage.getItem("Theme");
    if (Theme) {
      setTheme({ type: "TOGGLE_THEME", payload: { theme: Theme } });
    }
    if (Theme === "dark") {
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("Theme", theme);
    if (theme === "light") {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  });

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
export const useTheme = () => useContext(ThemeContext);
