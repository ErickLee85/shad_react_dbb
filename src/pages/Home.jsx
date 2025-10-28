import React, { useCallback, useMemo } from 'react'
import Hero from '../components/Hero'
import MagicBento from '../components/MagicBento'
import { Sparkles } from '../components/Sparkles';
import RotatingText from '../components/RotatingText';
import ShinyText from '../components/ShinyText';
import CodingTerminal from '../components/CodingTerminal';


function Home() {
  const handleAnimationComplete = useCallback(() => {
    console.log('lol, it worked :)')
  }, []);

  // Memoize heavy bento props to prevent re-renders
  const bentoProps = useMemo(() => ({
    textAutoHide: true,
    enableStars: true,
    enableSpotlight: true,
    enableBorderGlow: true,
    enableTilt: false, // Disable for better performance
    enableMagnetism: false, // Disable for better performance  
    clickEffect: true,
    spotlightRadius: 300,
    particleCount: 16, // Reduced from 12
    glowColor: "132, 0, 255"
  }), []);

  return (
    <div className='home-container'>
      <Hero />
      <div className="bento-container" id="services">
        <Sparkles />
        <MagicBento {...bentoProps} />
      </div>
      <div className='coding-terminal-container'>
        <ShinyText 
          text="Setting up your project..." 
          disabled={false} 
          speed={1} 
          className='custom-class text-3xl text-center text-white relative z-20' 
        />
           <CodingTerminal />
      </div>
    </div>
  )
}

export default Home