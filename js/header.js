var canvas, cvs, size, wid;
window.requestAnimFrame = (function() {
  return function(callback) {
    window.setTimeout(callback, 1000 / 60);
  };
})();
function loop() {
  requestAnimationFrame(loop);
  canvas = document.getElementById("menu");
  cvs = canvas.getContext("2d");
  size = new canvas_size();
  size.resize();
  draw();
}
function draw() {
  if (!canvas || !canvas.getContext) {
    return false;
  }
  cvs.clearRect(0, 0, wid, wid);
  dot();
}
function dot() {
  let position = wid / 4;
  for (let i = 0; i < 3; i++) {
    cvs.fillRect(
      i * (position + position / 2),
      i * (position + position / 2) + position / 4,
      position / 2,
      position / 2
    );
  }
}

requestAnimFrame(loop);
