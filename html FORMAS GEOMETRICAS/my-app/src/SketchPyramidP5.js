import React from 'react';
import Sketch from 'react-p5';

const SketchPyramidP5 = (baseSize,pyramidHeight) => {
    baseSize = Number(baseSize);
    pyramidHeight = Number(pyramidHeight);

    baseSize= baseSize *2;
    pyramidHeight= pyramidHeight *2;


    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(400, 400, p5.WEBGL).parent(canvasParentRef);
    };

    const draw = (p5) => {
        p5.background(220);
        p5.rotateY(p5.frameCount * 0.01);

        p5.beginShape();
        p5.vertex(-baseSize/2, pyramidHeight/2, -baseSize/2);
        p5.vertex(baseSize/2, pyramidHeight/2, -baseSize/2);
        p5.vertex(baseSize/2, pyramidHeight/2, baseSize/2);
        p5.vertex(-baseSize/2, pyramidHeight/2, baseSize/2);
        // Top point of the pyramid.
        p5.vertex(0, -pyramidHeight/2, 0);
        p5.endShape('CLOSE');
        
        // Connecting the bottom edges to the top point to form the sides of the pyramid.
        p5.beginShape();
        p5.vertex(-baseSize/2, pyramidHeight/2, -baseSize/2);
        p5.vertex(baseSize/2, pyramidHeight/2, -baseSize/2);
        p5.vertex(0, -pyramidHeight/2, 0);
        p5.endShape('CLOSE');
        
        p5.beginShape();
        p5.vertex(baseSize/2, pyramidHeight/2, -baseSize/2);
        p5.vertex(baseSize/2, pyramidHeight/2, baseSize/2);
        p5.vertex(0, -pyramidHeight/2, 0);
        p5.endShape('CLOSE');
        
        p5.beginShape();
        p5.vertex(baseSize/2, pyramidHeight/2, baseSize/2);
        p5.vertex(-baseSize/2, pyramidHeight/2, baseSize/2);
        p5.vertex(0, -pyramidHeight/2, 0);
        p5.endShape('CLOSE');
        
        p5.beginShape();
        p5.vertex(-baseSize/2, pyramidHeight/2, baseSize/2);
        p5.vertex(-baseSize/2, pyramidHeight/2, -baseSize/2);
        p5.vertex(0, -pyramidHeight/2, 0);
        p5.endShape('CLOSE');
    };

    return <Sketch setup={setup} draw={draw} />;
}
export default SketchPyramidP5;
