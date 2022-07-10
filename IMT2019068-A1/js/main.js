import { vec3} from 'https://cdn.skypack.dev/gl-matrix';

import Renderer from "./renderer.js";
import vertexShaderSrc from "./vertex.js";
import fragmentShaderSrc from "./fragment.js";
import Triangle from "./Triangle.js";
import Shader from "./Shader.js";
import Parallelogram from "./parallelogram.js";
import Square from "./Square.js";

const renderer_right = new Renderer()
const gl = renderer_right.getGl();
var shapes = []
var angles = [0,0,0,0,0,0,0]

const static_shapes = [];
const shader = new Shader(gl, vertexShaderSrc, fragmentShaderSrc);
shader.use();

let max = 0.7, min = -0.7
let max_angle = 180, min_angle = 50


shapes.push(new Triangle(gl, Math.random() * (max - min) + min, Math.random() * (max - min) + min, 0, "yellow"));
for(let i=0;i<Math.floor(Math.random() * (max_angle - min_angle) + min_angle);i++){
  angles[0] -= 0.025;
  shapes[0].transform.setTranslate(vec3.fromValues(Math.cos(-0.025) * (shapes[0].transform.getTranslate()[0] - shapes[0].Cx) - Math.sin(-0.025) * (shapes[0].transform.getTranslate()[1] - shapes[0].Cy) + shapes[0].Cx, Math.sin(-0.025) * (shapes[0].transform.getTranslate()[0] - shapes[0].Cx) + Math.cos(-0.025) * (shapes[0].transform.getTranslate()[1] - shapes[0].Cy) + shapes[0].Cy, 0));
  shapes[0].transform.setRotate(vec3.fromValues(0, 0, 1), angles[0]);
  shapes[0].transform.updateFinalMatrix();
}


shapes.push(new Triangle(gl,Math.random() * (max - min) + min, Math.random() * (max - min) + min, 1, "orange"));
for(let i=0;i<Math.floor(Math.random() * (max_angle - min_angle) + min_angle);i++){
  angles[1] += 0.025;
  shapes[1].transform.setTranslate(vec3.fromValues(Math.cos(0.025) * (shapes[1].transform.getTranslate()[0] - shapes[1].Cx) - Math.sin(0.025) * (shapes[1].transform.getTranslate()[1] - shapes[1].Cy) + shapes[1].Cx, Math.sin(0.025) * (shapes[1].transform.getTranslate()[0] - shapes[1].Cx) + Math.cos(0.025) * (shapes[1].transform.getTranslate()[1] - shapes[1].Cy) + shapes[1].Cy, 0));
  shapes[1].transform.setRotate(vec3.fromValues(0, 0, 1), angles[1]);
  shapes[1].transform.updateFinalMatrix();
}

shapes.push(new Parallelogram(gl, Math.random() * (max - min) + min, Math.random() * (max - min) + min, 2));
for(let i=0;i<Math.floor(Math.random() * (max_angle - min_angle) + min_angle);i++){
  angles[2] -= 0.025;
  shapes[2].transform.setTranslate(vec3.fromValues(Math.cos(0.025) * (shapes[2].transform.getTranslate()[0] - shapes[2].Cx) - Math.sin(0.025) * (shapes[2].transform.getTranslate()[1] - shapes[2].Cy) + shapes[2].Cx, Math.sin(0.025) * (shapes[2].transform.getTranslate()[0] - shapes[2].Cx) + Math.cos(0.025) * (shapes[2].transform.getTranslate()[1] - shapes[2].Cy) + shapes[2].Cy, 0));
  shapes[2].transform.setRotate(vec3.fromValues(0, 0, 1), angles[2]);
  shapes[2].transform.updateFinalMatrix();
}



shapes.push(new Square(gl, Math.random() * (max - min) + min, Math.random() * (max - min) + min, 3));
for(let i=0;i<Math.floor(Math.random() * (max_angle - min_angle) + min_angle);i++){
  angles[3] += 0.025;
  shapes[3].transform.setTranslate(vec3.fromValues(Math.cos(0.025) * (shapes[3].transform.getTranslate()[0] - shapes[3].Cx) - Math.sin(0.025) * (shapes[3].transform.getTranslate()[1] - shapes[3].Cy) + shapes[3].Cx, Math.sin(0.025) * (shapes[3].transform.getTranslate()[0] - shapes[3].Cx) + Math.cos(0.025) * (shapes[3].transform.getTranslate()[1] - shapes[3].Cy) + shapes[3].Cy, 0));
  shapes[3].transform.setRotate(vec3.fromValues(0, 0, 1), angles[3]);
  shapes[3].transform.updateFinalMatrix();
}


shapes.push(new Triangle(gl,Math.random() * (max - min) + min, Math.random() * (max - min) + min, 4, "green"));
for(let i=0;i<Math.floor(Math.random() * (max_angle - min_angle) + min_angle);i++){
  angles[4] += 0.025;
  shapes[4].transform.setTranslate(vec3.fromValues(Math.cos(0.025) * (shapes[4].transform.getTranslate()[0] - shapes[4].Cx) - Math.sin(0.025) * (shapes[4].transform.getTranslate()[1] - shapes[4].Cy) + shapes[4].Cx, Math.sin(0.025) * (shapes[4].transform.getTranslate()[0] - shapes[4].Cx) + Math.cos(0.025) * (shapes[4].transform.getTranslate()[1] - shapes[4].Cy) + shapes[4].Cy, 0));
  shapes[4].transform.setRotate(vec3.fromValues(0, 0, 1), angles[4]);
  shapes[4].transform.updateFinalMatrix();
}

shapes.push(new Triangle(gl,Math.random() * (max - min) + min, Math.random() * (max - min) + min, 5, "lb"));
for(let i=0;i<Math.floor(Math.random() * (max_angle - min_angle) + min_angle);i++){
  angles[5] -= 0.025;
  shapes[5].transform.setTranslate(vec3.fromValues(Math.cos(-0.025) * (shapes[5].transform.getTranslate()[0] - shapes[5].Cx) - Math.sin(-0.025) * (shapes[5].transform.getTranslate()[1] - shapes[5].Cy) + shapes[5].Cx, Math.sin(-0.025) * (shapes[5].transform.getTranslate()[0] - shapes[5].Cx) + Math.cos(-0.025) * (shapes[5].transform.getTranslate()[1] - shapes[5].Cy) + shapes[5].Cy, 0));
  shapes[5].transform.setRotate(vec3.fromValues(0, 0, 1), angles[5]);
  shapes[5].transform.updateFinalMatrix();
}

shapes.push(new Triangle(gl,Math.random() * (max - min) + min, Math.random() * (max - min) + min, 6, "db"));
for(let i=0;i<Math.floor(Math.random() * (max_angle - min_angle) + min_angle);i++){
  angles[6] -= 0.025;
  shapes[6].transform.setTranslate(vec3.fromValues(Math.cos(-0.025) * (shapes[6].transform.getTranslate()[0] - shapes[6].Cx) - Math.sin(-0.025) * (shapes[6].transform.getTranslate()[1] - shapes[6].Cy) + shapes[6].Cx, Math.sin(-0.025) * (shapes[6].transform.getTranslate()[0] - shapes[6].Cx) + Math.cos(-0.025) * (shapes[6].transform.getTranslate()[1] - shapes[6].Cy) + shapes[6].Cy, 0));
  shapes[6].transform.setRotate(vec3.fromValues(0, 0, 1), angles[6]);
  shapes[6].transform.updateFinalMatrix();
}

for(let i=0;i<shapes.length;i++){
  shapes[i].draw(shader);
}


var mode = 0;
let angle = 0;
let config_centroid_X = 0;
let config_centroid_Y = 0;
window.onload = () =>{
  let elementSelected = -1
  renderer_right.getCanvas().addEventListener("click", (event) => {
    if (mode === 1) {
      let mouseX = event.clientX;
      let mouseY = event.clientY;
      let dist = 10;
      // console.log("Mouse Coordinates:" + mouseX, mouseY)
      const clipCoordinates = renderer_right.ConvertToCanvasCoord(mouseX-510, mouseY-70);
      console.log("Clip Coordinates: " + clipCoordinates[0], clipCoordinates[1])
      const position = new Float32Array([
        clipCoordinates[0],
        clipCoordinates[1],
      ]);
      console.log(clipCoordinates[0]);

      for (let i = 0; i < shapes.length; i++) {
        let sum =
          ((position[0] - shapes[i].Cx) ** 2 +
            (position[1] - shapes[i].Cy) ** 2) **
          (1 / 2);
        if (sum < dist) {
          dist = sum;
          elementSelected = i;
        }
      }
    }
  });
  window.addEventListener('keydown', (e)=>{
    var translateUpdate = vec3.create()
    if(e.key==='m'){
      if(mode===3){

        shapes.push(new Triangle(gl, Math.random() * (max - min) + min, Math.random() * (max - min) + min, 0, "yellow"));
        for(let i=0;i<Math.floor(Math.random() * (max_angle - min_angle) + min_angle);i++){
          angles[0] -= 0.025;
          shapes[0].transform.setTranslate(vec3.fromValues(Math.cos(-0.025) * (shapes[0].transform.getTranslate()[0] - shapes[0].Cx) - Math.sin(-0.025) * (shapes[0].transform.getTranslate()[1] - shapes[0].Cy) + shapes[0].Cx, Math.sin(-0.025) * (shapes[0].transform.getTranslate()[0] - shapes[0].Cx) + Math.cos(-0.025) * (shapes[0].transform.getTranslate()[1] - shapes[0].Cy) + shapes[0].Cy, 0));
          shapes[0].transform.setRotate(vec3.fromValues(0, 0, 1), angles[0]);
          shapes[0].transform.updateFinalMatrix();
        }


        shapes.push(new Triangle(gl,Math.random() * (max - min) + min, Math.random() * (max - min) + min, 1, "orange"));
        for(let i=0;i<Math.floor(Math.random() * (max_angle - min_angle) + min_angle);i++){
          angles[1] += 0.025;
          shapes[1].transform.setTranslate(vec3.fromValues(Math.cos(0.025) * (shapes[1].transform.getTranslate()[0] - shapes[1].Cx) - Math.sin(0.025) * (shapes[1].transform.getTranslate()[1] - shapes[1].Cy) + shapes[1].Cx, Math.sin(0.025) * (shapes[1].transform.getTranslate()[0] - shapes[1].Cx) + Math.cos(0.025) * (shapes[1].transform.getTranslate()[1] - shapes[1].Cy) + shapes[1].Cy, 0));
          shapes[1].transform.setRotate(vec3.fromValues(0, 0, 1), angles[1]);
          shapes[1].transform.updateFinalMatrix();
        }

        shapes.push(new Parallelogram(gl, Math.random() * (max - min) + min, Math.random() * (max - min) + min, 2));
        for(let i=0;i<Math.floor(Math.random() * (max_angle - min_angle) + min_angle);i++){
          angles[2] -= 0.025;
          shapes[2].transform.setTranslate(vec3.fromValues(Math.cos(0.025) * (shapes[2].transform.getTranslate()[0] - shapes[2].Cx) - Math.sin(0.025) * (shapes[2].transform.getTranslate()[1] - shapes[2].Cy) + shapes[2].Cx, Math.sin(0.025) * (shapes[2].transform.getTranslate()[0] - shapes[2].Cx) + Math.cos(0.025) * (shapes[2].transform.getTranslate()[1] - shapes[2].Cy) + shapes[2].Cy, 0));
          shapes[2].transform.setRotate(vec3.fromValues(0, 0, 1), angles[2]);
          shapes[2].transform.updateFinalMatrix();
        }


        shapes.push(new Square(gl, Math.random() * (max - min) + min, Math.random() * (max - min) + min, 3));
        for(let i=0;i<Math.floor(Math.random() * (max_angle - min_angle) + min_angle);i++){
          angles[3] += 0.025;
          shapes[3].transform.setTranslate(vec3.fromValues(Math.cos(0.025) * (shapes[3].transform.getTranslate()[0] - shapes[3].Cx) - Math.sin(0.025) * (shapes[3].transform.getTranslate()[1] - shapes[3].Cy) + shapes[3].Cx, Math.sin(0.025) * (shapes[3].transform.getTranslate()[0] - shapes[3].Cx) + Math.cos(0.025) * (shapes[3].transform.getTranslate()[1] - shapes[3].Cy) + shapes[3].Cy, 0));
          shapes[3].transform.setRotate(vec3.fromValues(0, 0, 1), angles[3]);
          shapes[3].transform.updateFinalMatrix();
        }

        shapes.push(new Triangle(gl,Math.random() * (max - min) + min, Math.random() * (max - min) + min, 4, "green"));
        for(let i=0;i<Math.floor(Math.random() * (max_angle - min_angle) + min_angle);i++){
          angles[4] += 0.025;
          shapes[4].transform.setTranslate(vec3.fromValues(Math.cos(0.025) * (shapes[4].transform.getTranslate()[0] - shapes[4].Cx) - Math.sin(0.025) * (shapes[4].transform.getTranslate()[1] - shapes[4].Cy) + shapes[4].Cx, Math.sin(0.025) * (shapes[4].transform.getTranslate()[0] - shapes[4].Cx) + Math.cos(0.025) * (shapes[4].transform.getTranslate()[1] - shapes[4].Cy) + shapes[4].Cy, 0));
          shapes[4].transform.setRotate(vec3.fromValues(0, 0, 1), angles[4]);
          shapes[4].transform.updateFinalMatrix();
        }

        shapes.push(new Triangle(gl,Math.random() * (max - min) + min, Math.random() * (max - min) + min, 5, "lb"));
        for(let i=0;i<Math.floor(Math.random() * (max_angle - min_angle) + min_angle);i++){
          angles[5] -= 0.025;
          shapes[5].transform.setTranslate(vec3.fromValues(Math.cos(-0.025) * (shapes[5].transform.getTranslate()[0] - shapes[5].Cx) - Math.sin(-0.025) * (shapes[5].transform.getTranslate()[1] - shapes[5].Cy) + shapes[5].Cx, Math.sin(-0.025) * (shapes[5].transform.getTranslate()[0] - shapes[5].Cx) + Math.cos(-0.025) * (shapes[5].transform.getTranslate()[1] - shapes[5].Cy) + shapes[5].Cy, 0));
          shapes[5].transform.setRotate(vec3.fromValues(0, 0, 1), angles[5]);
          shapes[5].transform.updateFinalMatrix();
        }

        shapes.push(new Triangle(gl,Math.random() * (max - min) + min, Math.random() * (max - min) + min, 6, "db"));
        for(let i=0;i<Math.floor(Math.random() * (max_angle - min_angle) + min_angle);i++){
          angles[6] -= 0.025;
          shapes[6].transform.setTranslate(vec3.fromValues(Math.cos(-0.025) * (shapes[6].transform.getTranslate()[0] - shapes[6].Cx) - Math.sin(-0.025) * (shapes[6].transform.getTranslate()[1] - shapes[6].Cy) + shapes[6].Cx, Math.sin(-0.025) * (shapes[6].transform.getTranslate()[0] - shapes[6].Cx) + Math.cos(-0.025) * (shapes[6].transform.getTranslate()[1] - shapes[6].Cy) + shapes[6].Cy, 0));
          shapes[6].transform.setRotate(vec3.fromValues(0, 0, 1), angles[6]);
          shapes[6].transform.updateFinalMatrix();
        }
      }

      if (mode===1) {
        let maxX = shapes[0].Cx;
        let minX = shapes[0].Cx;
        let maxY = shapes[0].Cy;
        let minY = shapes[0].Cy;
        angle = 0;
        for (let i = 0; i < shapes.length; i++) {
          if (maxX < shapes[i].Cx) {
            maxX = shapes[i].Cx;
          }
          if (minX > shapes[i].Cx) {
            minX = shapes[i].Cx;
          }
          if (maxY < shapes[i].Cy) {
            maxY = shapes[i].Cy;
          }
          if (minY > shapes[i].Cy) {
            minY = shapes[i].Cy;
          }
        }
        maxX += 0.1;
        minX -= 0.1;
        maxY += 0.1;
        minY -= 0.1;
        config_centroid_X = (maxX + minX) / 2;
        config_centroid_Y = (maxY + minY) / 2;
      }else if (mode === 2) {
        for(let i=0;i<shapes.length; i++){
          console.log(i);
          static_shapes.push(shapes[i].Cx);
          static_shapes.push(shapes[i].Cy);
        }
        console.log(static_shapes);
        shapes = []
        angles = [0,0,0,0,0,0,0]

      }
        mode+=1;
        if(mode >= 4) mode = mode%4;
        document.getElementById("Mode").innerText = "Mode:" + mode
        console.log(mode);
    }

    if(e.code ==='ArrowDown'){
      if(mode===1 && elementSelected!==-1){
        console.log("Arrow Down")
        shapes[elementSelected].Cy = shapes[elementSelected].Cy - 0.015;

        shapes[elementSelected].transform.setTranslate(
          vec3.fromValues(
          shapes[elementSelected].transform.getTranslate()[0],
          shapes[elementSelected].transform.getTranslate()[1] - 0.015, 0
        ));

        shapes[elementSelected].transform.updateFinalMatrix();
      }else if(mode===2){
        config_centroid_Y-=0.015
        for(let i=0;i<shapes.length;i++){
            shapes[i].Cy-=0.015

            shapes[i].transform.setTranslate(
              vec3.fromValues(shapes[i].transform.getTranslate()[0],
                shapes[i].transform.getTranslate()[1] - 0.015, 0)
            );
            shapes[i].transform.updateFinalMatrix();
        }
      }

    }
    else if(e.code ==='ArrowUp'){
      if(mode===1 && elementSelected!==-1){
        shapes[elementSelected].Cy = shapes[elementSelected].Cy + 0.015;
        shapes[elementSelected].transform.setTranslate(
          vec3.fromValues(
            shapes[elementSelected].transform.getTranslate()[0],
            shapes[elementSelected].transform.getTranslate()[1] + 0.015, 0
          ));

        shapes[elementSelected].transform.updateFinalMatrix();

      }else if(mode===2) {
        config_centroid_Y+=0.015
        for (let i = 0; i < shapes.length; i++) {
          shapes[i].Cy+=0.015
          shapes[i].transform.setTranslate(
            vec3.fromValues(
              shapes[i].transform.getTranslate()[0],
              shapes[i].transform.getTranslate()[1] + 0.015, 0)
          );
          shapes[i].transform.updateFinalMatrix();
        }
      }
    }
    else if(e.code ==='ArrowLeft'){
      if(mode===1 && elementSelected!==-1){
        shapes[elementSelected].Cx = shapes[elementSelected].Cx - 0.015;
        shapes[elementSelected].transform.setTranslate(
          vec3.fromValues(
            shapes[elementSelected].transform.getTranslate()[0] - 0.015,
            shapes[elementSelected].transform.getTranslate()[1], 0
          ));

        shapes[elementSelected].transform.updateFinalMatrix();
      }else if(mode===2){
        let i = 0;
        config_centroid_X-=0.015
        for (i = 0; i < shapes.length; i++) {
          shapes[i].Cx-=0.015
          shapes[i].transform.setTranslate(
            vec3.fromValues(shapes[i].transform.getTranslate()[0] - 0.015,
              shapes[i].transform.getTranslate()[1], 0)
          );
          shapes[i].transform.updateFinalMatrix();
        }
      }
    }
    else if(e.code ==='ArrowRight'){
      if(mode===1 && elementSelected!==-1){
        shapes[elementSelected].Cx = shapes[elementSelected].Cx + 0.015;
        shapes[elementSelected].transform.setTranslate(
          vec3.fromValues(
            shapes[elementSelected].transform.getTranslate()[0] + 0.015,
            shapes[elementSelected].transform.getTranslate()[1], 0
          ));

        shapes[elementSelected].transform.updateFinalMatrix();
      }else if(mode===2){
        config_centroid_X+=0.015
        // console.log("Arrow Right " + config_centroid_X, config_centroid_Y)
        for (let i = 0; i < shapes.length; i++) {
          shapes[i].Cx+=0.015
          shapes[i].transform.setTranslate(
            vec3.fromValues(shapes[i].transform.getTranslate()[0] + 0.025,
              shapes[i].transform.getTranslate()[1], 0)
          );
          shapes[i].transform.updateFinalMatrix();
        }
      }

    }
    else if(e.key ==='(' ){
      if(mode===1 && elementSelected!==-1) {
        console.log('(');
        angles[elementSelected] -= 0.025;
        shapes[elementSelected].transform.setTranslate(
          vec3.fromValues(
            Math.cos(-0.025) * (shapes[elementSelected].transform.getTranslate()[0] - shapes[elementSelected].Cx) - Math.sin(-0.025) * (shapes[elementSelected].transform.getTranslate()[1] - shapes[elementSelected].Cy) + shapes[elementSelected].Cx,
            Math.sin(-0.025) * (shapes[elementSelected].transform.getTranslate()[0] - shapes[elementSelected].Cx) + Math.cos(-0.025) * (shapes[elementSelected].transform.getTranslate()[1] - shapes[elementSelected].Cy) + shapes[elementSelected].Cy, 0));
        shapes[elementSelected].transform.setRotate(vec3.fromValues(0, 0, 1), angles[elementSelected]);
        shapes[elementSelected].transform.updateFinalMatrix();
      }else if(mode===2){
        angle-=0.025;
        console.log(angle)
        console.log("Rotate " + config_centroid_X, config_centroid_Y)
        for(let i=0;i<shapes.length;i++){
          shapes[i].transform.setTranslate(
            vec3.fromValues(
              Math.cos(-0.025) * (shapes[i].transform.getTranslate()[0] - config_centroid_X) - Math.sin(-0.025) * (shapes[i].transform.getTranslate()[1] - config_centroid_Y) + config_centroid_X,
              Math.sin(-0.025) * (shapes[i].transform.getTranslate()[0] - config_centroid_X) + Math.cos(-0.025) * (shapes[i].transform.getTranslate()[1] - config_centroid_Y) + config_centroid_Y, 0));
          shapes[i].transform.setRotate(vec3.fromValues(0, 0, 1), angle + angles[i]);
          shapes[i].transform.updateFinalMatrix();
        }
      }
    }

    else if(e.key ===')'){
      if(mode===1  && elementSelected!==-1) {
        console.log(')')
        angles[elementSelected] += 0.025;
        shapes[elementSelected].transform.setTranslate(
          vec3.fromValues(
            Math.cos(0.025) * (shapes[elementSelected].transform.getTranslate()[0] - shapes[elementSelected].Cx) - Math.sin(0.025) * (shapes[elementSelected].transform.getTranslate()[1] - shapes[elementSelected].Cy) + shapes[elementSelected].Cx,
            Math.sin(0.025) * (shapes[elementSelected].transform.getTranslate()[0] - shapes[elementSelected].Cx) + Math.cos(0.025) * (shapes[elementSelected].transform.getTranslate()[1] - shapes[elementSelected].Cy) + shapes[elementSelected].Cy, 0));
        shapes[elementSelected].transform.setRotate(vec3.fromValues(0, 0, 1), angles[elementSelected]);
        shapes[elementSelected].transform.updateFinalMatrix();
      }else if(mode===2){
        angle+=0.025;
        console.log(config_centroid_X, config_centroid_Y)
        for(let i=0;i<shapes.length;i++){
          shapes[i].transform.setTranslate(
            vec3.fromValues(
              Math.cos(0.025) * (shapes[i].transform.getTranslate()[0] - config_centroid_X) - Math.sin(0.025) * (shapes[i].transform.getTranslate()[1] - config_centroid_Y) + config_centroid_X,
              Math.sin(0.025) * (shapes[i].transform.getTranslate()[0] - config_centroid_X) + Math.cos(0.025) * (shapes[i].transform.getTranslate()[1] - config_centroid_Y) + config_centroid_Y, 0));
          shapes[i].transform.setRotate(vec3.fromValues(0, 0, 1), angle + angles[i]);
          shapes[i].transform.updateFinalMatrix();
        }
      }
    }else if(e.key==='-'){
      if(mode===1 && elementSelected!==-1){
        console.log('-')
        shapes[elementSelected].transform.setScale(
          vec3.fromValues(shapes[elementSelected].transform.getScale()[0]/1.005,
            shapes[elementSelected].transform.getScale()[1]/1.005, 1)
        );
        shapes[elementSelected].transform.updateFinalMatrix();
      }else if (mode === 2) {
        config_centroid_X = config_centroid_X / 1.005;
        config_centroid_Y = config_centroid_X / 1.005;
        for (let i = 0; i < shapes.length; i++) {
          shapes[i].Cy = (shapes[i].Cy / 1.005);
          shapes[i].Cx = (shapes[i].Cx / 1.005);
          shapes[i].transform.setTranslate(
            vec3.fromValues(
              shapes[i].transform.getTranslate()[0] / 1.005,
              shapes[i].transform.getTranslate()[1] / 1.005, 0)
          );
          shapes[i].transform.updateFinalMatrix();
          shapes[i].transform.setScale(
            vec3.fromValues(shapes[i].transform.getScale()[0] / 1.005,
              shapes[i].transform.getScale()[0] / 1.005, 1)
          );
          shapes[i].transform.updateFinalMatrix();
        } //end loop
      }
    }else if(e.key==='+'){
      if(mode===1 && elementSelected!==-1){
        console.log('+')
        shapes[elementSelected].transform.setScale(
          vec3.fromValues(shapes[elementSelected].transform.getScale()[0]*1.005,
            shapes[elementSelected].transform.getScale()[1]*1.005, 1)
        );
        shapes[elementSelected].transform.updateFinalMatrix();
      } else if (mode === 2) {
        config_centroid_X = config_centroid_X * 1.005;
        config_centroid_Y = config_centroid_X * 1.005;
        for (let i = 0; i < shapes.length; i++) {
          shapes[i].Cy = (shapes[i].Cy * 1.005);
          shapes[i].Cx = (shapes[i].Cx * 1.005);
          shapes[i].transform.setTranslate(
            vec3.fromValues(
              shapes[i].transform.getTranslate()[0] * 1.005,
              shapes[i].transform.getTranslate()[1] * 1.005, 0)
          );
          shapes[i].transform.updateFinalMatrix();
          shapes[i].transform.setScale(
            vec3.fromValues(shapes[i].transform.getScale()[0] * 1.005,
              shapes[i].transform.getScale()[0] * 1.005, 1));
          shapes[i].transform.updateFinalMatrix();
        } //end loop
      }
    }
  });
};

//Draw loop
function animate() {
  renderer_right.clearCanvas();
  for(let i=0;i<shapes.length;i++){
    shapes[i].draw(shader);
  }
  window.requestAnimationFrame(animate);
}

animate();
shader.delete();
