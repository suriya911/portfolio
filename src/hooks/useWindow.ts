"use client";

import { useEffect, useState } from "react";

function useWindow() {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return {
    ...windowSize,
    isMobile: windowSize.width > 0 && windowSize.width < 768,
    isTablet: windowSize.width >= 768 && windowSize.width < 1024,
  };
}

export default useWindow;
