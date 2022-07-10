const vertexShaderSrc = `
        attribute vec3 vertPosition;
        uniform mat4 finalTransformMatrix;
        attribute vec3 vertColor;
        varying vec3 fragColor;
        void main () {
          gl_Position = finalTransformMatrix * vec4(vertPosition, 1.0);
          gl_PointSize = 5.0;
          fragColor = vertColor;
        }
	  `;

export default vertexShaderSrc;
