import { useEffect, useState } from "react";

export const ScrollBehavior = (): [boolean, number] => {
  const [scrollActive, setScrollActive] = useState<boolean>(window.scrollY > 0);
  const [position, setPosition] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollActive(window.scrollY > 0);
      setPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return [scrollActive, position];
};

export const ActionMenu = (): [boolean, () => void] => {
  const [menuActive, setMenuStatus] = useState<boolean>(false);

  const toggleMenu = () => setMenuStatus(!menuActive);
  return [menuActive, toggleMenu];
};
