import React from 'react';
import Sketch from 'react-p5';

const SketchSphereP5 = (radius) => {
    radius = Number(radius);

    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(400, 400, p5.WEBGL).parent(canvasParentRef);
    };

    const draw = (p5) => {
        p5.background(220);
        p5.rotateY(p5.frameCount * 0.01);
        p5.sphere(radius);
    };

    return <Sketch setup={setup} draw={draw} />;
}
export default SketchSphereP5;