'use client';
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

// Dynamically import Particles
const Particles = dynamic(() => import("./Particles"), { ssr: false });

const ParticlesWrapper = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const particleProps = isLargeScreen
    ? {
        particleCount: 900,
        particleBaseSize: 100,
        particleSpread: 12,
        speed: 0.1,
      }
    : {
        particleCount: 100,
        particleBaseSize: 50,
        particleSpread: 4,
        speed: 0.05,
      };

  return (
    <Particles
      {...particleProps}
      particleColors={['#ffffff']}
      moveParticlesOnHover={isLargeScreen}
      alphaParticles={isLargeScreen}
      disableRotation={!isLargeScreen}
      className="bg-transparent"
    />
  );
};

export default ParticlesWrapper;
