// canvasの描画
function loop() {
  requestAnimationFrame(loop);
  func = new canvas_function();
  func.resize();
  draw();
}

// 弁当メニュー（？）の切替
function draw() {
  if (!canvas1 || !canvas1.getContext) {
    return false;
  }
  cvs1.clearRect(0, 0, wid, wid);
  speed += 0.4;
  rotate += speed;
  cvs1.fillStyle = "#000";
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
    if (rot <= 360) {
      // 基本グループ（ドット）の回転
      func.rotation(rot, position);
    }
    // 基本グループ（ドット）の描画
    func.f_rect(position);
    if (click_flag) {
      // /→×への変更
      func.media(true);
      func.click_flag_true(position, (sub_rot -= speed));
    } else {
      // ×→/への変更
      func.media(false);
      func.click_flag_false(position, rot);
    }
  }
}

window.requestAnimFrame = (function() {
  return function(callback) {
    window.setTimeout(callback, 1000 / 60);
  };
})();

function speed_func() {
  const startTime = performance.now(); // 開始時間
  draw(); // 計測する処理
  const endTime = performance.now(); // 終了時間
  console.log(endTime - startTime); // 何ミリ秒かかったかを表示する
}
requestAnimFrame(loop);
