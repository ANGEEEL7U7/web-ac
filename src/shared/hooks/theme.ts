import { ThemeContext } from "@app/providers/theme/theme.context";
import { useContext } from "react";

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("theme debe usarse dentro del provider");
  return context;
};
