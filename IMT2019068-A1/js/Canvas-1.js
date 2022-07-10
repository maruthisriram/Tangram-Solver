var vertexShaderText = [
  'precision mediump float;',
  '',
  'attribute vec2 vertPosition;',
  'attribute vec3 vertColor;',
  'varying vec3 fragColor;',
  '',
  'void main()',
  '{',
  '   gl_Position = vec4(vertPosition,0.0,1.0);',
  'fragColor = vertColor;',
  '}'
].join('\n');



var fragmentShaderText = [
  'precision mediump float;',
  '',
  'varying vec3 fragColor;',
  '',
  'void main()',
  '{',
  '   gl_FragColor = vec4(fragColor, 1.0);',
  '}'
].join('\n')


function createShader(gl, type, source) {
  var shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  var success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
  if (success) {
    return shader;
  }

  console.log(gl.getShaderInfoLog(shader));
  gl.deleteShader(shader);
}

function createProgram(gl, vertexShader, fragmentShader) {
  var program = gl.createProgram();
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);
  var success = gl.getProgramParameter(program, gl.LINK_STATUS);
  if (success) {
    return program;
  }

  console.log(gl.getProgramInfoLog(program));
  gl.deleteProgram(program);
}

function InitDemo() {
  var canvas = document.getElementById("game-surface");
  var gl = canvas.getContext("webgl");
  if (!gl) {
    return;
  }

  var vertexShaderSource = vertexShaderText
  var fragmentShaderSource = fragmentShaderText;

  var vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
  var fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);

  var program = createProgram(gl, vertexShader, fragmentShader);

  var positionAttributeLocation = gl.getAttribLocation(program, "vertPosition");
  var colorAttribLocation = gl.getAttribLocation(program, "vertColor");
  var positionBuffer = gl.createBuffer();

  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
  var positions = [
    //orange
    -0.25, 0.5,0.9, 0.5, 0,
    0.25, 0, 0.9, 0.5, 0,
    0.25, 0.5,0.9, 0.5, 0,

    // dark blue
    -0.25, 0.5, 0, 0, 0.7,
    -0.25,0.0, 0, 0, 0.7,
    0.25, 0.0, 0, 0, 0.7,
    //
    // green
    -0.25, 0.5, 0, 1, 0,
    0.0, 0.75, 0, 1, 0,
    0.25, 0.5, 0, 1, 0,
    //
    // yellow
    0, 0, 1, 1, 0,
    0.25, 0, 1, 1, 0,
    0, -0.25, 1, 1, 0,
    //
    // light blue
    -0.25, -0.25, 0.1, 1, 1,
    0.0, -0.5, 0.1, 1, 1,
    0, -0.25, 0.1, 1, 1,
    //
    // Square
    -0.25, 0.0, 1, 0, 0,
    -0.25, -0.25, 1, 0, 0,
    0.0, 0.0, 1, 0, 0,

    0.0, 0.0, 1, 0, 0,
    0.0, -0.25, 1, 0, 0,
    -0.25, -0.25, 1, 0, 0,

    // Parallelogram
    0.0, -0.25, 1, 0, 0.9,
    0.25, 0.0, 1, 0, 0.9,
    0.25, -0.25, 1, 0, 0.9,
    //
    0.25, -0.25, 1, 0, 0.9,
    0.0, -0.5, 1, 0, 0.9,
    0.0, -0.25, 1, 0, 0.9
  ];

  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);


  gl.canvas.width = 500
  gl.canvas.height = 500
  gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

  // Clear the canvas
  gl.clearColor(0.32, 0.56, 0.45, 0);
  gl.clear(gl.COLOR_BUFFER_BIT);

  gl.useProgram(program);

  gl.enableVertexAttribArray(positionAttributeLocation);
  gl.enableVertexAttribArray(colorAttribLocation);

  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
  gl.vertexAttribPointer(
    positionAttributeLocation,
    2,
    gl.FLOAT,
    false,
    5 * Float32Array.BYTES_PER_ELEMENT,
    0);
  gl.vertexAttribPointer(
    colorAttribLocation,
    3,
    gl.FLOAT,
    false,
    5 * Float32Array.BYTES_PER_ELEMENT,
    2 * Float32Array.BYTES_PER_ELEMENT
  )
  var primitiveType = gl.TRIANGLES;
  var count = 27;
  gl.drawArrays(primitiveType, 0, count);
}

InitDemo();
