import React from 'react'
import dynamic from 'next/dynamic'

const Sketch = dynamic(() => import('react-p5'), { ssr: false })

const V2 = () => {
    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
        p5.background('#000')
    };
    let x = 1

    // Function to draw the wave
    const draw = (p5) => {
        const thickness = p5.random(1, 5);
        p5.strokeWeight(thickness);
      
        // Set the line color to a random grayscale value between 0 and 255
        const colorVal = p5.random(255);
        p5.stroke(colorVal);
      
        // Calculate the noise value based on the current frame count
        const noiseVal = p5.noise(p5.frameCount * 1);
      
        // Calculate the circle position and size based on the mouse position and noise value
        const x = p5.mouseX;
        const y = p5.mouseY;
        const diameter = p5.map(noiseVal, 0, 1, 50, 100);
      
        // Draw the circle
        p5.ellipse(x, y, diameter);
      
        // Add a glitch effect to the circle
        if (p5.random(1) < 0.05) {
          const x3 = p5.random(p5.width);
          const y3 = p5.random(p5.height);
          const diameter2 = p5.random(50, 100);
          p5.ellipse(x3, y3, diameter2);
          const r = p5.random(255);
          const g = p5.random(255);
          const b = p5.random(255);
          const colorVal = p5.color(r, g, b);
          p5.stroke(colorVal);
        }
      };
      

    const keyPressed = (p5) => {
        if (p5.keyIsPressed && (p5.key === 's' || p5.key === 'S')) {
            p5.saveCanvas('my_artwork', 'png');
        }
    }

    return <Sketch setup={setup} draw={draw} keyPressed={keyPressed} />;
};

export default V2;
