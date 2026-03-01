import { useEffect, useState } from "react";

export const ScrollBehavior = (): [boolean] => {
  const [scrollActive, setScrollActive] = useState<boolean>(window.scrollY > 0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollActive(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return [scrollActive];
};

export const ActionMenu = (): [boolean, () => void] => {
  const [menuActive, setMenuStatus] = useState<boolean>(false);

  const toggleMenu = () => setMenuStatus(!menuActive);
  return [menuActive, toggleMenu];
};
