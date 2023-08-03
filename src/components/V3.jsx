import React from 'react'
import dynamic from 'next/dynamic';

const Sketch = dynamic(() => import('react-p5'), { ssr: false });

const V3 = () => {
  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
    p5.background(0);
    p5.strokeWeight(2);
    p5.noFill();
  };

  const draw = (p5) => {
    // Set the line color to a random emissive value
    const r = p5.random(255);
    const g = p5.random(255);
    const b = p5.random(255);
    const emissiveColor = p5.color(r, g, b);
    emissiveColor.setAlpha(150); // set the alpha value to 150 for transparency effect
    p5.stroke(emissiveColor);

    // Calculate the line endpoint positions based on the mouse position
    const x1 = 0;
    const y1 = p5.height / 2;
    const x2 = p5.mouseX;
    const y2 = p5.mouseY;

    // Draw the line
    p5.line(x1, y1, x2, y2);
  };

  return <Sketch setup={setup} draw={draw} />;
};

export default V3;
