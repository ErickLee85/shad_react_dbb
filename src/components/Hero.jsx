import React from 'react'
import DarkVeil from './DarkVeil';
import SplitText from "./SplitText";
import TextPressure from './TextPressure';
import FallingText from './FallingText';
import ShinyText from './ShinyText';
import ContactButton from './ContactButton';
import GooeyNav from './GooeyNav'
;
const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};

const items = [
  { label: "Home", href: "#top" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#" },
];

function Nav() {
  return (
      <GooeyNav
        items={items}
        particleCount={15}
        particleDistances={[90, 10]}
        particleR={100}
        initialActiveIndex={0}
        animationTime={600}
        timeVariance={300}
        colors={[1, 2, 3, 1, 2, 3, 1, 4]}
      />
  )
}

function splitText() {
    return (
        <SplitText
                text="Software Development"
                className="hero-text"
                delay={100}
                duration={2.5}
                ease="elastic.out(1,0.3"
                splitType="words"
                from={{ opacity: 0, y: 20 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
                onLetterAnimationComplete={handleAnimationComplete}
                />
    )
}


function Hero() {
  return (
    <div className='hero-center' id="top">
      <Nav />
        <DarkVeil />
        <div className="hero-container">
                 <TextPressure
                    text="Hello!"
                    flex={true}
                    alpha={false}
                    stroke={false}
                    width={true}
                    weight={true}
                    italic={true}
                    textColor="#ffffff"
                    strokeColor="#ff0000"
                    minFontSize={36}
                />
        <p className='hero-subtext'>
             You found us! Welcome to <span><ShinyText text="Desoto Bits & Bytes" disabled={false} speed={3} className='custom-class' /></span>. We build enterprise grade software,
            ranging from Mobile & Web applications to APIs and <span><ShinyText text="Artificial Intelligence" disabled={false} speed={3} className='custom-class' /></span> integrations.
        </p>
           <ContactButton />
        </div>
    </div>
  )
}

export default Hero