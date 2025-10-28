import React, { memo, useMemo, useCallback } from 'react'
import DarkVeil from './DarkVeil';
import TextPressure from './TextPressure';
import ShinyText from './ShinyText';
import ContactButton from './ContactButton';
import GooeyNav from './GooeyNav';
// Memoize nav items to prevent recreation on every render
const NAV_ITEMS = [
  { label: "Home", href: "#top" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#" },
];

// Memoize nav props for performance
const NAV_PROPS = {
  items: NAV_ITEMS,
  particleCount: 12, // Reduced from 15
  particleDistances: [90, 10],
  particleR: 100,
  initialActiveIndex: 0,
  animationTime: 600,
  timeVariance: 300,
  colors: [1, 2, 3, 1, 2, 3, 1, 4]
};

const Nav = memo(() => {
  return <GooeyNav {...NAV_PROPS} />
});


// Memoize TextPressure props to prevent recalculation
const TEXT_PRESSURE_PROPS = {
  text: "Hello!",
  flex: true,
  alpha: false,
  stroke: false,
  width: true,
  weight: true,
  italic: true,
  textColor: "#ffffff",
  strokeColor: "#ff0000",
  minFontSize: 36
};

const Hero = memo(() => {
  // Memoize ShinyText props
  const shinyTextProps1 = useMemo(() => ({
    text: "Desoto Bits & Bytes",
    disabled: false,
    speed: 3,
    className: 'custom-class'
  }), []);

  const shinyTextProps2 = useMemo(() => ({
    text: "Artificial Intelligence", 
    disabled: false,
    speed: 3,
    className: 'custom-class'
  }), []);

  return (
    <div className='hero-center' id="top">
      <Nav />
      <DarkVeil />
      <div className="hero-container">
        <TextPressure {...TEXT_PRESSURE_PROPS} />
        <p className='hero-subtext'>
          You found us! Welcome to <span><ShinyText {...shinyTextProps1} /></span>. We build enterprise grade software,
          ranging from Mobile & Web applications to APIs and <span><ShinyText {...shinyTextProps2} /></span> integrations.
        </p>
        <ContactButton />
      </div>
    </div>
  )
});

export default Hero