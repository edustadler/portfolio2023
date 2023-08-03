import dynamic from 'next/dynamic'

const Sketch = dynamic(() => import('react-p5'), { ssr: false })

const V4 = () => {
  let x, y, branchAngle;

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
    p5.frameRate(40);
    p5.strokeWeight(3);
    x = p5.width / 2;
    y = p5.height - 50;
    branchAngle = p5.PI / 3;
  };

  const draw = (p5) => {
    p5.background(255);
    p5.stroke(0, 255, 10);
    p5.translate(x, y);
    branch(p5, 90, 100);
  };

  const branch = (p5, len) => {
    p5.line(0, 10, 0, -len);
    p5.translate(0, -len);

    if (len > 3) {
      p5.push();
      p5.rotate(branchAngle + p5.random(-0.5, 0.1));
      branch(p5, len * 0.7);
      p5.pop();

      p5.push();
      p5.rotate(-branchAngle + p5.random(-0.1, 0.5));
      branch(p5, len * 0.7);
      p5.pop();
    }
  };

  const mouseisPressed = (p5) => {
    // add a random offset to the position of the lines
    p5.stroke(255, 0, 255);
  };

  return <Sketch setup={setup} draw={draw} mouseisPressed={mouseisPressed} />;
};

export default V4;
