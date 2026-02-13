import React, { useEffect, useState } from "react";
import { ThemeMode } from "./theme.types";
import { ThemeContext } from "./theme.context";


export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<ThemeMode>("light");

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const changeTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return <ThemeContext.Provider value={{ theme, changeTheme }}>
    {children}
  </ThemeContext.Provider>;
};

