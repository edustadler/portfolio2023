import React, { useRef, useEffect } from 'react';

const YellowDot = () => {
  const dotRef = useRef();
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 767;

  useEffect(() => {
    if (!isMobile) {
      const dot = dotRef.current;

      dot.style.transformOrigin = '50% 50%';
      dot.style.backgroundColor = '#ffbf13';
      dot.style.borderRadius = '50%';
      dot.style.width = '15px';
      dot.style.height = '15px';
      dot.style.position = 'absolute';
      dot.style.zIndex = '9999';
      dot.style.opacity = '100%';
      dot.style.pointerEvents = 'none';
      dot.style.top = '-100px'; // Start offscreen to avoid initial jump
      dot.style.left = '-100px'; // Start offscreen to avoid initial jump
      dot.style.transition = 'transform 80s ease';
      dot.style.mixBlendMode = 'exclusion'

      const updateDotPosition = (event) => {
        dot.style.left = event.pageX + 'px'; // Subtract half of the width to center the dot on the cursor
        dot.style.top = event.pageY + 'px'; // Subtract half of the height to center the dot on the cursor
        
      };

      const handleMouseClick = (event) => {
        dot.style.left = event.pageX * 1 - 25 + 'px';
        dot.style.top = event.pageY * 1 - 25 + 'px';
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
