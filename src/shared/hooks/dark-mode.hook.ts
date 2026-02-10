import { useEffect, useState } from "react";

export const DarkMode = (): {
  isDark: boolean;
  setDark: () => void;
} => {
  const [isDark, setDark] = useState<boolean>(() => {
    const html: HTMLElement = document.documentElement;
    return html.hasAttribute("data-theme");
  });

  useEffect(() => {
    const html = document.documentElement;

    if (html.hasAttribute("data-theme")) {
      html.removeAttribute("data-theme");
    } else {
      html.setAttribute("data-theme", "dark");
    }
  }, [isDark]);

  const toggleDarkMode = () => setDark((prev) => !prev);

  return { isDark, setDark: toggleDarkMode };
};
