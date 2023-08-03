import React from 'react'
import dynamic from 'next/dynamic';

const Sketch = dynamic(() => import('react-p5'), { ssr: false });

const V9 = (p5) => {
  let density = 100;
  let points = [];
  let mult = 0.008

  let e1
  let e2
  let d1
  let d2
  let u1
  let u2


  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(p5.windowWidth / 2, p5.windowHeight).parent(canvasParentRef);
    p5.frameRate(120);
    p5.noiseDetail(1)
    p5.angleMode(p5.DEGRE)
    /* p5.fill(255, 250, p5.random(80, 250), p5.random(0, 255)); */
    let space = p5.width / density;

    for (let i = 0; i <= p5.width; i += space) {
      for (let t = 0; t <= p5.height; t += space) {
        let x = p5.createVector(i + p5.random(-200, 200), t + p5.random(-20, 20));
        points.push(x);
      }
    }

    e1 = p5.random(250, 255)
    e2 = 0
    d1 = 0
    d2 = 0
    u1 = 0
    u2 = p5.random(20, 100)
    
  };
  
  const draw = (p5) => {
    p5.background(0, 1);
    p5.stroke(p5.random(205, 235), 200, 200, 10);
    p5.noFill()
    
    for (let l = 0; l < points.length; l++) {
      let angle = p5.map(p5.noise(points[l].x * mult, points[l].y * mult), 20, 100, 100, 300)
      points[l].add(p5.createVector(p5.cos(angle * 3), p5.sin(angle * p5.random(200))))
      
      if (p5.dist(p5.width / 2, p5.height - 512, points[l].x, points[l].y) < 350) {
        p5.beginShape(p5.LINES);
        p5.vertex(points[l].x / 1, points[l].y / 1);
        p5.vertex(points[l].x / 1, points[l].y / 1);
        p5.vertex(points[l].x / 1, points[l].y / 1);
        p5.vertex(points[l].x / 1, points[l].y);
        p5.vertex(points[l].x , points[l].y);
        p5.endShape();
        
        l++
      }
      
    }
    /* p5.loop() */
  };

  const windowResized = (p5) => {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
  }

  const keyPressed = (p5) => {
    if (p5.key === 'g') {
      p5.saveCanvas('myCanvas', 'png');
    }
  };

  return <Sketch setup={setup} draw={draw} keyPressed={keyPressed} windowResized={windowResized} />;
};

export default V9;
