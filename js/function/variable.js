var header,
  e_title,
  padding,
  body_div,
  canvas1,
  cvs1,
  home_parents,
  canvas_home,
  cvs_home,
  canvas_background,
  cvs_background,
  canvas_trailing,
  cvs_trailing,
  // header.js-5:func = new canvas_function();
  func,
  wid,
  window_size_w,
  window_size_h,
  rad = Math.PI / 180,
  click_flag = false,
  rotate = 0,
  sub_rot = 360,
  open = true,
  speed = 1,
  mouse_pos_x,
  mouse_pos_y,
  trailing_flag = false;
event_interval = 18;

function get_id() {
  header = document.getElementById("header");
  e_title = document.getElementById("e_title");
  padding = document.getElementById("header_bottom_padding");
  body_div = document.getElementById("body_div");
  canvas_home = document.getElementById("cvs_home");
  cvs_home = canvas_home.getContext("2d");
  canvas1 = document.getElementById("menu");
  cvs1 = canvas1.getContext("2d");
  canvas_background = document.getElementById("background");
  cvs_background = canvas_background.getContext("2d");
  canvas_trailing = document.getElementById("trailing");
  cvs_trailing = canvas_trailing.getContext("2d");
}

// メニューが開かれているかどうかの判定と再初期化
function button_click() {
  click_flag = !click_flag;
  open = false;
  rotate = 0;
  sub_rot = 180;
  speed = 0;
}
