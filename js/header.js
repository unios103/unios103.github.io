// canvasの描画
function loop() {
  requestAnimationFrame(loop);
  get_id();
  func = new canvas_function();
  func.resize();
  draw();
}

// 弁当メニュー（？）の切替
function draw() {
  if (!canvas || !canvas.getContext) {
    return false;
  }
  cvs.clearRect(0, 0, wid, wid);
  speed += 0.4;
  rotate += speed;
  if (click_flag) {
    dot(rotate);
  } else {
    dot(rotate);
  }
}

// 弁当メニューの描画
function dot(rot) {
  let position = wid / 8;
  // ページを開いた時
  if (open) {
    func.f_rect(position);
  } else {
    if (rot <= 180) {
      // 基本グループ（ドット）の回転
      func.rotation(rot, position);
    }
    // 基本グループ（ドット）の描画
    func.f_rect(position);
    if (click_flag) {
      // /→×への変更
      func.click_flag_true(position, (sub_rot -= speed));
    } else {
      // ×→/への変更
      func.click_flag_false(position, rot);
    }
  }
}

window.requestAnimFrame = (function() {
  return function(callback) {
    window.setTimeout(callback, 1000 / 60);
  };
})();

requestAnimFrame(loop);
