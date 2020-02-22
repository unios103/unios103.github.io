function home_props() {
  requestAnimationFrame(home_props);
  func = new canvas_function();
  cvs_home.clearRect(0, 0, window_size_w, window_size_h);
  if (navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/i)) {
    // スマホ・タブレット（iOS・Android）の場合
    if (window.innerHeight > window.innerWidth) {
      // 縦に持っていた時
    } else {
      // 横に持っていた時
    }
  } else {
    // PCの場合の処理を記述
    if (window.innerHeight > window.innerWidth * 0.8) {
    } else {
      draw_home();
    }
  }
}

function draw_home() {
  let font_home = "bold " + window_size_h / 10 + "px  'Raleway'";
  let ctx = cvs_home;
  let hello = cvs_hello;
  let size = Math.sqrt(window_size_h * window_size_h + img_size * img_size);
  ctx.font = font_home;
  ctx.fillStyle = "#000";
  ctx.textBaseline = "top";
  let text = ctx.measureText(" ...");
  ctx.fillText("MY NAME IS ...", size / 1.4 + text.width, size / 1.8);

  font_home = window_size_h / 12 + "px 'Sacramento'";
  hello.font = font_home;
  hello.fillStyle = "#EB7A77";
  hello.textAlign = "center";
  hello.textBaseline = "hanging";
  text = hello.measureText("Hello");
  hello.translate(size / 1.4 + text.width / 2, size / 1.88);
  hello.rotate(-26 * rad);
  hello.translate(-(size / 1.4 + text.width / 2), -(size / 1.88));
  hello.fillText("Hello", size / 1.4 + text.width / 2, size / 1.88);
}

function top_page() {
  var that = this;
  that.my_name = function() {
    let ctx = cvs_home;
    let hello = cvs_hello;
  };
}

window.requestAnimFrame = (function() {
  return function(callback) {
    window.setTimeout(callback, 1000 / 60);
  };
})();

requestAnimFrame(home_props);
