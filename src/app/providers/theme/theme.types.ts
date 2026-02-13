export type ThemeMode = "light" | "dark";
export interface ThemeContextProps {
  theme: ThemeMode;
  changeTheme: () => void;
}
