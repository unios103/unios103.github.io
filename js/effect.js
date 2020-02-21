function effect() {
  if (!canvas1 || !canvas1.getContext) {
    return false;
  }
  let ctx = cvs_trailing;
  requestAnimationFrame(effect);
  func = new canvas_function();
  func.background_size();
  if (navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/i)) {
  } else {
    ctx.fillStyle = "rgba(255,255,255,0.01)";
    ctx.fillRect(0, 0, window_size_w, window_size_h);
    draw_trailing();
    // speed_func();
  }
}

function draw_rain() {}

function draw_trailing() {
  let ctx = cvs_trailing;
  event();
  if (trailing_flag) {
    ctx.fillStyle = "#000";
    ctx.fillRect(mouse_pos_x, mouse_pos_y, 10, 10);
  }
}

function event() {
  canvas_trailing.addEventListener(
    "mouseout",
    () => {
      trailing_flag = false;
    },
    false
  );
  canvas_trailing.addEventListener(
    "mouseover",
    () => {
      trailing_flag = true;
    },
    false
  );
  if (--event_interval == 0) {
    canvas_trailing.addEventListener(
      "mousemove",
      e => {
        mouse_pos_x = e.offsetX * devicePixelRatio;
        mouse_pos_y = e.offsetY * devicePixelRatio;
      },
      false
    );
    event_interval = 18;
  }
}

function speed_func() {
  const startTime = performance.now(); // 開始時間
  draw_trailing(); // 計測する処理
  const endTime = performance.now(); // 終了時間
  console.log(endTime - startTime); // 何ミリ秒かかったかを表示する
}

window.requestAnimFrame = (function() {
  return function(callback) {
    window.setTimeout(callback, 1000 / 60);
  };
})();

requestAnimFrame(effect);
