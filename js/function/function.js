function canvas_function() {
  this.resize = function() {
    let title_menu =
      document.getElementById("e_title").clientHeight * devicePixelRatio;
    canvas.width = title_menu;
    canvas.height = title_menu;
    canvas.style.width = String(canvas.width / devicePixelRatio) + "px";
    canvas.style.height = String(canvas.height / devicePixelRatio) + "px";
    wid = title_menu;
  };
  this.rotation = function(rot, pos) {
    cvs.translate(pos * 4, pos * 4);
    cvs.rotate(rad * rot);
    cvs.translate(-pos * 4, -pos * 4);
  };

  this.f_rect = function(pos) {
    for (let i = 0; i < 3; i++) {
      let dot_pos = 2 * (i + 1) * pos - pos / 2;
      cvs.fillRect(dot_pos, dot_pos, pos, pos);
    }
  };

  this.click_flag_true = function(pos, rot) {
    if (rot < 0) {
      rot = 0;
    }
    if (rot >= 0 && rot < 90) {
      func.rotation(rot - 90, pos);
      for (let i = 0; i < 3; i++) {
        let dot_pos = 2 * (i + 1) * pos - pos / 2;
        cvs.fillRect(dot_pos, dot_pos, pos, pos);
      }
    }
  };

  this.click_flag_false = function(pos, rot) {
    if (rot < 90) {
      func.rotation(90 - rot, pos);
      for (let i = 0; i < 3; i++) {
        let dot_pos = 2 * (i + 1) * pos - pos / 2;
        cvs.fillRect(dot_pos, dot_pos, pos, pos);
      }
    }
  };
}
