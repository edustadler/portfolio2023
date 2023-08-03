import dynamic from 'next/dynamic';
import { useState } from 'react';

const Sketch = dynamic(() => import('react-p5'), { ssr: false });

const V5 = () => {
  const [particles, setParticles] = useState([]);

  const numParticles = 20;

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
    p5.noStroke();

    const particlesArray = [];

    for (let x = 0; x <= p5.width; x += 30) {
      for (let y = 0; y <= p5.height; y += 30) {
        const color = p5.color(p5.random(255), p5.random(255), p5.random(255));
        particlesArray.push({
          x,
          y,
          xAngle: p5.map(p5.mouseX, 0, p5.width, -4 * p5.PI, 4 * p5.PI, true),
          yAngle: p5.map(p5.mouseY, 0, p5.height, -4 * p5.PI, 4 * p5.PI, true),
          angle:
            p5.map(x / p5.width, 0, 1, -4 * p5.PI, 4 * p5.PI, true) +
            p5.map(y / p5.height, 0, 1, -4 * p5.PI, 4 * p5.PI, true),
          color,
        });
      }
    }

    setParticles(particlesArray);
  };

  const draw = (p5) => {
    p5.background(10, 10, 10, 50);

    for (let i = 0; i < particles.length; i++) {
      const { x, y, xAngle, yAngle, angle, color } = particles[i];

      const myX =
        x + 20 * p5.cos((2 * p5.PI * p5.frameCount) / 60 + angle + xAngle);
      const myY =
        y + 20 * p5.sin((2 * p5.PI * p5.frameCount) / 60 + angle + yAngle);

      // Switch between ellipse and rectangle mode based on the current frame count
      if (p5.frameCount % 60 < 30) {
        p5.ellipseMode(p5.CENTER);
        p5.ellipse(myX, myY, 10);
      } else {
        p5.rectMode(p5.CENTER);
        p5.rect(myX, myY, 10, 10);
      }

      // Check if mouse button is pressed
      if (p5.mouseIsPressed) {
        // Set particle color to random color
        p5.fill(color);
      } else {
        // Set default color
        p5.fill(40, 200, 40);
      }
    }
  };

  return <Sketch setup={setup} draw={draw} />;
};

export default V5;
