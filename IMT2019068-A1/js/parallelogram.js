import { vec3, mat4 } from 'https://cdn.skypack.dev/gl-matrix';
import Transform from "./Transform.js";

export default class Parallelogram {
  constructor(gl, Cx, Cy, index) {
    this.gl = gl;
    this.Cx = Cx;
    this.Cy = Cy;
    this.index = index;

    this.vertexPositionData = new Float32Array([
      -0.1,  0.3, 0.0, 1, 0, 0.9,
      0.1, 0.1, 0.0, 1, 0, 0.9,
       -0.1, -0.1, 0.0, 1, 0, 0.9,
      -0.1, -0.1, 0.0, 1, 0, 0.9,
      0.1,  0.1, 0.0, 1, 0, 0.9,
      0.1, -0.3, 0.0, 1, 0, 0.9,
    ]);

    this.buffer = this.gl.createBuffer();
    if (!this.buffer) {
      throw new Error("Buffer could not be allocated");
    }

    this.transform = new Transform();
    this.transform.setTranslate(vec3.fromValues(Cx, Cy, 0));
    this.transform.updateFinalMatrix();
  }



  draw(shader) {
    const uModelTransformMatrix = shader.uniform("finalTransformMatrix");
    let elementPerVertex = 3;

    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.buffer);
    this.gl.bufferData(this.gl.ARRAY_BUFFER, this.vertexPositionData, this.gl.DYNAMIC_DRAW);

    const aPosition = shader.attribute("vertPosition");
    this.gl.enableVertexAttribArray(aPosition);
    this.gl.vertexAttribPointer(aPosition, elementPerVertex, this.gl.FLOAT, false, 6 * this.vertexPositionData.BYTES_PER_ELEMENT, 0);

    const aColor = shader.attribute("vertColor");
    this.gl.enableVertexAttribArray(aColor);
    this.gl.vertexAttribPointer(aColor, elementPerVertex, this.gl.FLOAT, false, 6 * this.vertexPositionData.BYTES_PER_ELEMENT, 3 * this.vertexPositionData.BYTES_PER_ELEMENT);

    shader.setUniformMatrix4fv(uModelTransformMatrix, this.transform.getFinalMatrix());

    this.gl.drawArrays(this.gl.TRIANGLES, 0, 6);
  }
}
