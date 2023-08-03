import React from 'react'
import dynamic from 'next/dynamic';

const Sketch = dynamic(() => import('react-p5'), { ssr: false });

const V10 = (p5) => {



  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
    p5.frameRate(120);
    p5.noiseDetail(1)
    p5.angleMode(p5.DEGRE)
    
    
  };
  
  const draw = (p5) => {
    p5.background(0, 10);
    p5.stroke(p5.random(255), p5.random(255), p5.random(255))
    
    let speed = .01
    let n = p5.noise(speed * p5.random(p5.width) * 2)
    let n2 = p5.noise(speed * p5.random(p5.height) * 2)
    p5.square(p5.random(p5.width/2), n * 5, 10, 0, 0);
    p5.noFill()
    p5.loop()

  };

  const keyPressed = (p5) => {
    if (p5.key === 'g') {
      p5.saveGif(p5.START, 'mygif', 1);
      p5.saveGif(p5.STOP);
    }
  };
  const sketchProps = {
    loopLimit: 1, // or whatever value you want to set
  };

  return <Sketch setup={setup} draw={draw} keyPressed={keyPressed} {...sketchProps} />;
};

export default V10;
