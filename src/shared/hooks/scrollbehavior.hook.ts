import { useEffect, useState } from "react";

export const ScrollBehavior = (): [number, boolean] => {
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

  return [position, scrollActive];
};

export default ScrollBehavior;
