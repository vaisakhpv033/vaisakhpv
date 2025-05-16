'use client';
import React, {useState, useEffect, useRef} from 'react'
import { ArrowDown } from 'lucide-react'
import BlurText from '@/Components/BlurText';
import SplashCursor from '@/Components/SplashCursor';
import GradientSphere from '@/Components/GradientSphere';
import Particles from '@/Components/Particles';

const Hero = () => {
  const [isAnimating, setIsAnimating] = useState(true);
  const [isInView, setIsInView] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
    }, {threshold: 0.5});

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <section id='home' ref={heroRef} className='h-dvh relative text-white-50 px-5 md:px-2'>
        <GradientSphere sphere1Glass={"gradient-sphere sphere-1"} sphere2Glass="gradient-sphere sphere-2"/>
        {isInView && <SplashCursor />}
        <div className='w-full h-full flex-center'>
            <div className="container relative w-full h-full">
                <Particles
                particleColors={['#ffffff', '#ffffff']}
                particleCount={900}
                particleSpread={15}
                speed={0.1}
                particleBaseSize={100}
                moveParticlesOnHover={true}
                alphaParticles={true}
                disableRotation={false}
                className="bg-transparent"
              />
        
                <div className="md:mt-40 mt-20 top-0 absolute">
                  <p className='font-medium md:text-2xl text-base md:px-5'>{!isAnimating && "Hey all I'm"}</p> 
                  <BlurText
                    text="VAISAKH P V"
                    delay={250}
                    animateBy="letters"
                    direction="top"
                    onAnimationComplete={() => setIsAnimating(false)}
                    className="font-bold md:text-9xl text-5xl md:px-5"
                  />
                  <h1 className='font-bold md:text-8xl text-5xl md:px-5 gradient-title'>FULL STACK</h1>
                </div>
                <div className='absolute w-full z-30 bottom-20 right-0'>
                  <div className='flex justify-between items-end'>
                    <div className="flex flex-col items-center md:gap-4 gap-1">
                      <p className='md:text-base text-xs md:px-5'>Explore</p>
                      <ArrowDown className='animate-bounce'/>
                    </div>
                    <div className='flex flex-col items-end'>
                      {/* <img src="/logo.png" alt="shape" className='w-12 h-12 rounded-full object-cover'/> */}
                      <h1 className='font-bold md:text-8xl text-5xl gradient-title'>DEVELOPER</h1>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero