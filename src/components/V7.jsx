import React from 'react'
import dynamic from 'next/dynamic';
import { useState } from 'react';

const Sketch = dynamic(() => import('react-p5'), { ssr: false });

const V7 = () => {
  let density = 100;
  let points = [];
  let mult = .02

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
    p5.background(0);
    p5.frameRate(120);
    p5.noiseDetail(10)
    p5.angleMode(p5.DEGRE)
    let space = p5.width / density;
    
    for (let i = 0; i < p5.width; i += space) {
      for (let t = 0; t < p5.height; t += space) {
        let x = p5.createVector(i, t);
        points.push(x);
      }
    }
  };

  const draw = (p5) => {
    p5.noStroke();
    
    for (let l = 2; l < points.length; l++) {
      p5.fill(p5.random(255), 0, 102);

      let angle = p5.map(p5.noise(points[l].x * mult, points[l].y * mult), 0, p5.random(500), 500, 1500)

      points[l].add(p5.createVector(p5.cos(angle), p5.sin(angle)))
      
      p5.ellipse(points[l].x, points[l].y, 2);
    }
  };

  // Create a function that listens for key presses and saves a GIF when 'g' is pressed
  const keyPressed = (p5) => {
    if (p5.key === 'g') {
      p5.saveCanvas('myCanvas', 'gif');
    }
  };

  return <Sketch setup={setup} draw={draw} keyPressed={keyPressed} />;
};

export default V7;
