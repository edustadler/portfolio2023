import dynamic from 'next/dynamic';

const Sketch = dynamic(() => import('react-p5'), { ssr: false });

const V6 = (p5) => {
  let density = 100;
  let points = [];
  let mult = 0.0012

  let e1
  let e2
  let d1
  let d2
  let u1
  let u2


  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
    p5.background(0);
    p5.frameRate(120);
    p5.noiseDetail(1)
    p5.angleMode(p5.DEGRE)
    /* p5.fill(255, 250, p5.random(80, 250), p5.random(0, 255)); */
    let space = p5.width / density;

    for (let i = 0; i < p5.width; i += space) {
      for (let t = 0; t < p5.height; t += space) {
        let x = p5.createVector(i + p5.random(-100, 200), t + p5.random(-10, 10));
        points.push(x);
      }
    }

    e1 = p5.random(255)
    e2 = p5.random(255)
    d1 = p5.random(255)
    d2 = p5.random(255)
    u1 = p5.random(255)
    u2 = p5.random(255)

  };

  const draw = (p5) => {
    p5.noStroke();

    for (let l = 0; l < points.length; l++) {

      let e = p5.map(points[l].x, 0, p5.width, e1, e2)
      let d = p5.map(points[l].x, 0, p5.width, d1, d2)
      let u = p5.map(points[l].x, 0, p5.width, u1, u2)
      let aplha = p5.map(p5.dist(p5.width / 2 , p5.height / 2, points[l].x, points[l].y), 0, 400, 400, 0)

      let angle = p5.map(p5.noise(points[l].x * mult, points[l].y * mult), 0, 20, 0, 400)
      p5.fill(e, d, u, aplha)

      points[l].add(p5.createVector(p5.cos(angle), p5.sin(angle)))
      if (p5.dist(p5.width / 2, p5.height / 2, points[l].x, points[l].y) < 800) {

        p5.ellipse(points[l].x, points[l].y, 1);
      }

    }
  };

  const keyPressed = (p5) => {
    if (p5.key === 'g') {
      p5.saveCanvas('myCanvas', 'png');
    }
  };

  return <Sketch setup={setup} draw={draw} keyPressed={keyPressed} />;
};

export default V6;
