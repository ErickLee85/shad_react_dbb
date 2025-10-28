import React, { useCallback, useMemo } from 'react'
import Hero from '../components/Hero'
import MagicBento from '../components/MagicBento'
import BlurText from '../components/BlurText'

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
    particleCount: 8, // Reduced from 12
    glowColor: "132, 0, 255"
  }), []);

  return (
    <div className='home-container'>
      <Hero />
      <div className="bento-container" id="services">
        <BlurText
          text="What we do"
          delay={150}
          animateBy="words"
          direction="top"
          onAnimationComplete={handleAnimationComplete}
          className="heading-text uppercase"
          rootMargin='0px'
          threshold={0.1}
        />
        <MagicBento {...bentoProps} />
      </div>
    </div>
  )
}

export default Home