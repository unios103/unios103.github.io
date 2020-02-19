var header,
  e_title,
  padding,
  canvas1,
  cvs1,
  home_parents,
  canvas_home,
  cvs_home,
  // header.js-5:func = new canvas_function();
  func,
  wid,
  rad = Math.PI / 180,
  click_flag = false,
  rotate = 0,
  sub_rot = 180,
  open = true,
  speed = 0;

function get_id() {
  header = document.getElementById("header");
  e_title = document.getElementById("e_title");
  padding = document.getElementById("header_bottom_padding");
  canvas_home = document.getElementById("cvs_home");
  cvs_home = canvas_home.getContext("2d");
  canvas1 = document.getElementById("menu");
  cvs1 = canvas1.getContext("2d");
}

// メニューが開かれているかどうかの判定と再初期化
function button_click() {
  click_flag = !click_flag;
  open = false;
  rotate = 0;
  sub_rot = 180;
  speed = 0;
}
