function effect() {
  if (!canvas1 || !canvas1.getContext) {
    return false;
  }
  let ctx = cvs_trailing;
  requestAnimationFrame(effect);
  func = new canvas_function();
  func.background_size();
  ctx.fillStyle = "#FFF1";
  ctx.fillRect(0, 0, window_size_w, window_size_h);
  draw_trailing();
  // if (--event_interval == 0) {
  //   speed_func();
  //   event_interval = 18;
  // }
}

function draw_rain() {}

function draw_trailing() {
  let ctx = cvs_trailing;
  if (--event_interval == 0) {
    canvas_trailing.addEventListener(
      "mousemove",
      e => {
        mouse_pos_x = e.offsetX;
        mouse_pos_y = e.offsetY;
      },
      false
    );
    event_interval = 18;
  }
}

// function speed_func() {
//   const startTime = performance.now(); // 開始時間
//   draw_trailing(); // 計測する処理
//   const endTime = performance.now(); // 終了時間
//   console.log(endTime - startTime); // 何ミリ秒かかったかを表示する
// }

window.requestAnimFrame = (function() {
  return function(callback) {
    window.setTimeout(callback, 1000 / 60);
  };
})();

requestAnimFrame(effect);
