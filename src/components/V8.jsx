import React, { useState } from 'react';
import dynamic from 'next/dynamic';

const Sketch = dynamic(() => import('react-p5'), { ssr: false });

const V8 = (p5) => {
  let density = 100;
  let points = [];
  let mult = 0.05
  let t = 2


  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(p5.windowWidth / 2, p5.windowHeight).parent(canvasParentRef);
    p5.frameRate(120);
    p5.noiseDetail(1)
    p5.pixelDensity(1)
    p5.angleMode(p5.DEGRE)
    /* p5.fill(255, 250, p5.random(80, 250), p5.random(0, 255)); */
    let space = p5.width / density;
    
    for (let i = 0; i < p5.width; i += space) {
      for (let t = 0; t < p5.height; t += space) {
        let x = p5.createVector(i + p5.random(0, 400), t + p5.random(0, 400));
        points.push(x);
      }
    }
    
    p5.background('#222224')
  };
  
  const draw = (p5) => {
    p5.noStroke()
    
    for (let l = 0; l < points.length; l++) {
      
      
      
      if(!onScreen(points[l])){
        let angle = p5.map(p5.noise(points[l].x * mult, points[l].y * mult), 10, 100, 200, 820)
        points[l].add(p5.createVector(p5.cos(angle), p5.sin(angle)))
        
        
      }
      if (p5.dist(p5.width / 2, p5.height / 2, points[l].x, points[l].y) < 400) {
        p5.fill(250)
        
        p5.ellipse(points[l].x, points[l].y, 1);
        
      }
      
      
    }
    p5.noFill()
    
  };

  const onScreen = (p5) => {
    p5.x >= 0 && p5.x >= p5.width && p5.y >= 0 && p5.y >= p5.width
  }
  

  const keyPressed = (p5) => {
    if (p5.key === 'g') {
      p5.saveCanvas('myCanvas', 'png');
    }
  };

  return <Sketch setup={setup} draw={draw} keyPressed={keyPressed} />;
};

export default V8;
