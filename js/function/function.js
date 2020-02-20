function canvas_function() {
  // header.js
  this.rotation = function(rot, pos) {
    cvs1.translate(pos * 4, pos * 4);
    cvs1.rotate(rad * rot);
    cvs1.translate(-pos * 4, -pos * 4);
  };

  this.f_rect = function(pos) {
    for (let i = 0; i < 3; i++) {
      let dot_pos = 2 * (i + 1) * pos - pos / 2;
      cvs1.fillRect(dot_pos, dot_pos, pos, pos);
    }
  };

  this.click_flag_true = function(pos, rot) {
    rot += 180;
    if (rot < 0) {
      rot = 0;
    }
    if (rot >= 0 && rot < 90) {
      func.rotation(rot - 90, pos);
      for (let i = 0; i < 3; i++) {
        let dot_pos = 2 * (i + 1) * pos - pos / 2;
        cvs1.fillRect(dot_pos, dot_pos, pos, pos);
      }
    }
  };

  this.click_flag_false = function(pos, rot) {
    if (rot < 90) {
      func.rotation(90 - rot, pos);
      for (let i = 0; i < 3; i++) {
        let dot_pos = 2 * (i + 1) * pos - pos / 2;
        cvs1.fillRect(dot_pos, dot_pos, pos, pos);
      }
    }
  };

  // effect.js
  this.get_mouse_position = function(e) {};

  // 要素のサイズを可変に
  // header.js
  this.resize = function() {
    // canvasサイズと解像度の設定
    let title_menu = e_title.clientHeight * devicePixelRatio;
    canvas1.width = title_menu;
    canvas1.height = title_menu;
    canvas1.style.width = String(canvas1.width / devicePixelRatio) + "px";
    canvas1.style.height = String(canvas1.height / devicePixelRatio) + "px";
    wid = title_menu;
    // headerの下に余白を作る
    let header_height = header.clientHeight;
    padding.style.height = header_height + "px";
    // homeのcanvasサイズ
    let div_home_w = window.innerWidth * devicePixelRatio;
    let div_home_h = (window.innerHeight - header_height) * devicePixelRatio;
    canvas_home.width = div_home_w;
    canvas_home.height = div_home_h;
    canvas_home.style.width =
      String(canvas_home.width / devicePixelRatio) + "px";
    canvas_home.style.height =
      String(canvas_home.height / devicePixelRatio) + "px";
  };

  // effect.js,home.js
  this.background_size = function() {
    canvas_background.width = window.innerWidth * devicePixelRatio;
    canvas_background.height = window.innerHeight * devicePixelRatio;
    canvas_background.style.width =
      String(canvas_background.width / devicePixelRatio) + "px";
    canvas_background.style.height =
      String(canvas_background.height / devicePixelRatio) + "px";
    canvas_trailing.width = window.innerWidth * devicePixelRatio;
    canvas_trailing.height = window.innerHeight * devicePixelRatio;
    canvas_trailing.style.width =
      String(canvas_trailing.width / devicePixelRatio) + "px";
    canvas_trailing.style.height =
      String(canvas_trailing.height / devicePixelRatio) + "px";
    window_size_w = canvas_trailing.width;
    window_size_h = canvas_trailing.height;
  };
}
