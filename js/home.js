function home_props() {
  requestAnimationFrame(home_props);
  func = new canvas_function();
  top_page_func = new top_page();
  cvs_home.clearRect(0, 0, window_size_w, window_size_h);
  if (navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/i)) {
    // スマホ・タブレット（iOS・Android）の場合
    if (window.innerHeight > window.innerWidth) {
      // 縦に持っていた時
      sakura.style.width = 100 + "vw";
      sakura.style.opacity = 0;
      donut.style.opacity = 1;
      if (window.innerHeight > window.innerWidth * 1.4) {
        ios_android_h(0);
      } else {
        ios_android_h(img_size_h / 10);
      }
    } else {
      // 横に持っていた時
      sakura.style.height = 100 + "vh";
      sakura.style.opacity = 1;
      donut.style.opacity = 0;
      pc_h(0);
    }
  } else {
    // PCの場合の処理を記述
    if (window.innerHeight > window.innerWidth * 0.75) {
      sakura.style.height = 100 + "vh";
      sakura.style.width = 40 + "%";
      sakura.style.objectFit = "cover";
      sakura.style.opacity = 0.7;
      donut.style.opacity = 0;
      pc_h(img_size / 8);
    } else {
      sakura.style.height = 100 + "vh";
      sakura.style.opacity = 1;
      donut.style.opacity = 0;
      pc_h(0);
    }
  }
}

function top_page() {
  var that = this;
  that.my_name = function(ctx) {
    ctx.fillStyle = "#000";
    ctx.textBaseline = "top";
    ctx.fillText("MY NAME IS ...", char_pos[0], char_pos[1]);
  };
  that.me = function(hello, save) {
    hello.strokeStyle = "#434343";
    hello.fillStyle = "#434343";
    hello.lineWidth = 1.7;
    hello.beginPath();
    hello.moveTo(char_pos[0] - save / 2, char_pos[1] - text / 32);
    hello.lineTo((char_pos[0] - text / 2) * 0.97, char_pos[1] - text / 32);
    hello.moveTo(char_pos[0] + save / 2, char_pos[1] - text / 32);
    hello.lineTo((char_pos[0] + text / 2) * 1.03, char_pos[1] - text / 32);
    hello.stroke();
    hello.fillText("unos103's portfolio", char_pos[0], char_pos[1]);
  };
  that.hello = function(hello) {
    hello.fillStyle = "#EB7A77";
    hello.textAlign = "center";
    hello.textBaseline = "hanging";
    hello.translate(char_pos[0], char_pos[1]);
    hello.rotate(-26 * rad);
    hello.translate(-char_pos[0], -char_pos[1]);
    hello.fillText("Hello", char_pos[0], char_pos[1]);
  };
}

function ios_android_h(h) {
  {
    let ctx = cvs_home;
    let hello = cvs_hello;
    font_style_home = "bold " + img_size / 13 + "px  'Raleway'";
    ctx.font = font_style_home;
    ctx.textAlign = "center";
    text = ctx.measureText("MY NAME IS ...");
    char_pos = [
      (img_size - text.width) / 2.2 + text.width / 2,
      img_size_h / 4 - h
    ];
    top_page_func.my_name(ctx);
    font_style_home = img_size / 25 + "px  'Raleway'";
    let save = text.width;
    hello.font = font_style_home;
    text = hello.measureText("unos103's portfolio").width;
    hello.textAlign = "center";
    char_pos[1] += text / 3.4;
    top_page_func.me(hello, save);
    font_style_home = img_size_h / 30 + "px 'Sacramento'";
    hello.font = font_style_home;
    text = hello.measureText("Hello");
    char_pos = [(img_size - save) / 2.2, img_size_h / 4.2 - h];
    top_page_func.hello(hello);
  }
}

function pc_h(w) {
  let ctx = cvs_home;
  let hello = cvs_hello;
  font_style_home = "bold " + (img_size_h / 17 - w / 17) + "px  'Raleway'";
  ctx.font = font_style_home;
  text = ctx.measureText("MY NAME IS ...");
  char_pos = [
    (img_size_h - text.width) / 2.5 + text.width / 2 - w,
    img_size_h / 3.85
  ];
  top_page_func.my_name(ctx);
  font_style_home = img_size_h / 38 - w / 38 + "px  'Raleway'";
  hello.font = font_style_home;
  let save = text.width;
  hello.textAlign = "center";
  text = hello.measureText("unos103's portfolio").width;
  char_pos[0] += save / 2;
  char_pos[1] += text / 2.9;
  top_page_func.me(hello, save);
  font_style_home = img_size_h / 25 - w / 25 + "px 'Sacramento'";
  hello.font = font_style_home;
  text = hello.measureText("Hello").width;
  char_pos = [(img_size_h - text) / 2.6 + text - w, img_size_h / 4];
  top_page_func.hello(hello);
  let menu_font = window_size_h / 38 - w / 38 + window_size_h / 25 - w / 25;
  menu_list.style.fontSize = menu_font / 2 + "px";
  account_box.style.fontSize = menu_font / 3.4 + "px";
}

window.requestAnimFrame = (function() {
  return function(callback) {
    window.setTimeout(callback, 1000 / 60);
  };
})();

requestAnimFrame(home_props);
