import React, { useEffect, useState } from "react";
import { ThemeMode } from "./theme.types";
import { ThemeContext } from "./theme.context";
import { IS_DARK } from "@shared/utils/const";

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<ThemeMode>(IS_DARK ? 'dark' : 'light');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const changeTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return <ThemeContext.Provider value={{ theme, changeTheme }}>
    {children}
  </ThemeContext.Provider>;
};

