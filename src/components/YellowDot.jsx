import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const YellowDot = () => {
  const dotRef = useRef();
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 767;

  useEffect(() => {
    if (!isMobile) {
      const dot = dotRef.current;

      gsap.set(dot, {
        border: '1px solid red',
        transformOrigin: '50% 50%',
        backgroundColor: 'yellow',
        borderRadius: '50%',
        width: '50px',
        height: '50px',
        position: 'absolute',
        zIndex: 9999,
        pointerEvents: 'none',
        top: 0, // Start offscreen to avoid initial jump
        left: 0, // Start offscreen to avoid initial jump
      });

      const updateDotPosition = (event) => {
        gsap.to(dot, {
          x: event.clientX,
          y: event.clientY,
          duration: 0.6,
          ease: 'power3',
        });
      };

      const handleMouseClick = (event) => {
        dot.style.left = event.clientX * 2 + 'px';
        dot.style.top = event.clientY * 2 + 'px';
      };

      window.addEventListener('mousemove', updateDotPosition);
      window.addEventListener('click', handleMouseClick);

      return () => {
        window.removeEventListener('mousemove', updateDotPosition);
        window.removeEventListener('click', handleMouseClick);
      };
    }
  }, [isMobile]);

  return <div ref={dotRef} className="ball" />;
};

export default YellowDot;
