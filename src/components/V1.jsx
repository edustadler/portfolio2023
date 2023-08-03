import React from 'react'
import dynamic from 'next/dynamic'

const Sketch = dynamic(() => import('react-p5'), { ssr: false })

const V1 = () => {
    let lineColor = 0;

    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
        p5.background('#000')
    };

    const draw = (p5) => {
        const thickness = p5.random(1, 5);
        p5.strokeWeight(thickness);

        if (p5.mouseIsPressed) {
            // Set the line color to a random mixed variant of five colors
            const colorVals = [
                [255, 0, 0],
                [0, 255, 0],
                [0, 0, 255],
                [255, 255, 0],
                [255, 0, 255]
            ];
            const r = colorVals[lineColor][0];
            const g = colorVals[lineColor][1];
            const b = colorVals[lineColor][2];
            const colorVal = p5.color(r, g, b);
            p5.stroke(colorVal);
            lineColor = (lineColor + 1) % colorVals.length;
        } else {
            const colorVal = p5.random(255);
            p5.stroke(colorVal);
        }

        const noiseVal = p5.noise(p5.frameCount * 0.8);
        const x1 = p5.mouseX;
        const y1 = p5.mouseY;
        const x2 = x1 + p5.map(noiseVal, 0, 100, -20, 200);
        const y2 = y1 + p5.map(noiseVal, 0, 100, -20, 200);

        p5.line(x1, y1, x2, y2);

        if (p5.random(1) < 0.50) {
            const x3 = p5.random(p5.width);
            const y3 = p5.random(p5.height);
            const x4 = x3 + p5.random(-50, 500);
            const y4 = y3 + p5.random(-50, 500);
            p5.line(x3, y3, x4, y4);
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

export default V1;
