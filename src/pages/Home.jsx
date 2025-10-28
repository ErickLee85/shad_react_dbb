import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Testimonials from '../components/Testimonials'
import GooeyNav from '../components/GooeyNav'
import MagicBento from '../components/MagicBento'
import BlurText from '../components/BlurText'

function Home() {

  function handleAnimationComplete() {
    console.log('lol, it worked :)')
  }
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
                 <MagicBento 
                  textAutoHide={true}
                  enableStars={true}
                  enableSpotlight={true}
                  enableBorderGlow={true}
                  enableTilt={true}
                  enableMagnetism={true}
                  clickEffect={true}
                  spotlightRadius={300}
                  particleCount={12}
                  glowColor="132, 0, 255"
                />
               </div>
           </div>
  )
}

export default Home