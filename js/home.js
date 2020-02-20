function home_props() {
  requestAnimationFrame(home_props);
  func = new canvas_function();
}

window.requestAnimFrame = (function() {
  return function(callback) {
    window.setTimeout(callback, 1000 / 60);
  };
})();

requestAnimFrame(home_props);
