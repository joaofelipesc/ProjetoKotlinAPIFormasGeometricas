import React from "react";
import Sketch from "react-p5";

const SketchCylinderP5 = (radius, height) => {

    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(400, 400, p5.WEBGL).parent(canvasParentRef);
    };

    const draw = (p5) => {
        p5.background(220);
        p5.rotateY(p5.frameCount * 0.01);
        p5.rotateX(p5.frameCount*0.01);
        p5.cylinder(radius, height);
    };

    return <Sketch setup={setup} draw={draw} />;
}

export default SketchCylinderP5;
