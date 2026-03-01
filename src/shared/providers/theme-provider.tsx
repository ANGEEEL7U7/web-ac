import React, { createContext, useContext, useEffect, useState } from "react";
import { IS_DARK } from "@shared/utils/const";
import { useCookies } from 'react-cookie';

export type ThemeMode = "light" | "dark";
export interface ThemeContextProps {
  theme: ThemeMode;
  changeTheme: () => void;
}
interface ThemeProviderProps { children: React.ReactNode }

const ThemeContext = createContext<ThemeContextProps | null>(null);

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [cookies, setCookie] = useCookies();
  const [theme, setTheme] = useState<ThemeMode>(
    cookies['mode'] ? cookies['mode'] : IS_DARK ? 'dark' : 'light'
  );

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    setCookie('mode', theme);
  }, [theme, setCookie]);

  const changeTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return <ThemeContext.Provider value={{ theme, changeTheme }}>
    {children}
  </ThemeContext.Provider>;
};

export const UseTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("theme debe usarse dentro del provider");
  return context;
};
