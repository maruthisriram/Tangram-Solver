import Transform from "./Transform.js";
import { vec3, mat4 } from 'https://cdn.skypack.dev/gl-matrix';

export default class Triangle{
  constructor(gl, Cx,Cy,index,color) {
  if(color==="yellow") {
    this.vertexPositionData = new Float32Array(
      [
        -0.1, -0.1, 0.0, 1.0, 1.0, 0.0,
        -0.1, 0.2, 0.0, 1.0, 1.0, 0.0,
        0.2, -0.1, 0.0, 1.0, 1.0, 0.7
      ]
    )
  }else if(color ==="orange"){
    this.vertexPositionData = new Float32Array(
      [
        -0.1, -0.1, 0.0, 0.9, 0.5, 0,
        -0.1, 0.2, 0.0, 0.9, 0.5, 0,
        0.2, -0.1, 0.0,0.9, 0.5, 0
      ]
    )
  }else if(color ==="green"){
    this.vertexPositionData = new Float32Array(
      [
        -0.1, -0.1, 0.0, 0.0, 1.0, 0,
        -0.1, 0.2, 0.0, 0.0, 1.0, 0,
        0.2, -0.1, 0.0,0.0, 1.0, 0
      ]
    )
  }else if(color ==="lb"){
    this.vertexPositionData = new Float32Array(
      [
        -0.1, -0.1, 0.0, 0.1, 1, 1,
        -0.1, 0.2, 0.0, 0.1, 1, 1,
        0.2, -0.1, 0.0, 0.1, 1, 1
      ]
    )
  }else if(color ==="db"){
    this.vertexPositionData = new Float32Array(
      [
        -0.1, -0.1, 0.0, 0, 0, 0.7,
        -0.1, 0.2, 0.0, 0, 0, 0.7,
        0.2, -0.1, 0.0, 0, 0, 0.7
      ]
    )
  }

    this.index = index;
    this._gl = gl;
    this._Cx = Cx;
    this._Cy = Cy;

    this.buffer = this._gl.createBuffer();
    if(!this.buffer){
      throw new Error("Buffer Not Created");
    }

    this.transform = new Transform();
    var translate = vec3.create();
    vec3.set(translate, Cx, Cy, 0)
    this.transform.setTranslate(translate);
    this.transform.updateFinalMatrix();

  }


  get gl() {
    return this._gl;
  }

  set gl(value) {
    this._gl = value;
  }

  get Cx() {
    return this._Cx;
  }

  set Cx(value) {
    this._Cx = value;
  }

  get Cy() {
    return this._Cy;
  }

  set Cy(value) {
    this._Cy = value;
  }

  draw(shader){
    const uModelTransformMatrix = shader.uniform("finalTransformMatrix");
    let elementPerVertex = 3;

    this._gl.bindBuffer(this._gl.ARRAY_BUFFER, this.buffer);
    this._gl.bufferData(this._gl.ARRAY_BUFFER, this.vertexPositionData, this._gl.DYNAMIC_DRAW);

    const aPosition = shader.attribute("vertPosition");
    this._gl.enableVertexAttribArray(aPosition);
    this._gl.vertexAttribPointer(aPosition, elementPerVertex, this._gl.FLOAT, false, 6 * this.vertexPositionData.BYTES_PER_ELEMENT, 0);

    const aColor = shader.attribute("vertColor");
    this._gl.enableVertexAttribArray(aColor);
    this._gl.vertexAttribPointer(aColor, elementPerVertex, this._gl.FLOAT, false, 6 * this.vertexPositionData.BYTES_PER_ELEMENT, 3 * this.vertexPositionData.BYTES_PER_ELEMENT);

    shader.setUniformMatrix4fv(uModelTransformMatrix, this.transform.getFinalMatrix());

    this._gl.drawArrays(this._gl.TRIANGLES, 0, 3);
  }
}
