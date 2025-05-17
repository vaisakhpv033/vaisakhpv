'use client';
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";

const SplashCursor = dynamic(() => import("./SplashCursor"), { ssr: false });

const SplashCursorWrapper = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  if (!isLargeScreen) return null;

  return <SplashCursor />;
};

export default SplashCursorWrapper;
