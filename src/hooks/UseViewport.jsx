import { useEffect, useState } from "react";

export const MOBILE_BREAKPOINT = 467;

const UseViewport = () => {
  const [width, setWidth] = useState(
    () => (window !== undefined && window.innerWidth) || 0
  );
  const [isMobile, setIsMobile] = useState(
    () =>
      (window.innerWidth !== undefined &&
        window.innerWidth < MOBILE_BREAKPOINT) ||
      false
  );

  useEffect(() => {
    const handler = () => {
      setWidth(window.innerWidth);
      setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
    };

    window.addEventListener("resize", handler);
    return window.addEventListener("resize", handler);
  }, []);

  return {
    width,
    isMobile,
  };
};

export default UseViewport;
