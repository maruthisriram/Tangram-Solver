import { vec3, mat4 } from 'https://cdn.skypack.dev/gl-matrix';

export default class Transform {
  constructor() {
    this.translate = vec3.fromValues(0, 0, 0);
    this.scale = vec3.fromValues(1, 1, 1);
    this.angle = 0;
    this.axis = vec3.fromValues(0, 0, 1);

    this.finalTransformMatrix = mat4.create();
    mat4.identity(this.finalTransformMatrix);


    this.updateFinalMatrix();
  }

  getFinalMatrix() {
    return this.finalTransformMatrix;
  }


  updateFinalMatrix() {
    mat4.identity(this.finalTransformMatrix);
    mat4.translate(this.finalTransformMatrix, this.finalTransformMatrix, this.translate);
    mat4.rotate(this.finalTransformMatrix, this.finalTransformMatrix, this.angle, this.axis);
    mat4.scale(this.finalTransformMatrix, this.finalTransformMatrix, this.scale);
  }

  setTranslate(translationVec) {
    this.translate = translationVec;
  }

  getTranslate() {
    return this.translate;
  }

  setScale(scalingVec) {
    this.scale = scalingVec;
  }

  getScale() {
    return this.scale;
  }

  setRotate(rotationAxis, rotationAngle) {
    this.angle = rotationAngle;
    this.axis = rotationAxis;
  }

}
