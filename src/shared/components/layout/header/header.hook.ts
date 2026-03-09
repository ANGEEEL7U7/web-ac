import { useEffect, useState } from "react";
import { BreakPoints } from "@shared/utils";

export const IsSmallScreen = (): boolean => {
  const [size, setSize] = useState<boolean>(false);

  useEffect(() => {
    const handleSize = () => setSize(window.innerWidth < BreakPoints.sm);
    window.addEventListener("resize", handleSize);

    handleSize();

    return () => window.removeEventListener("resize", handleSize);
  }, []);
  return size;
};
