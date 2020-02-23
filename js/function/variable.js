var header,
  e_title,
  menu_list,
  account_box,
  body_div,
  canvas1,
  cvs1,
  home_parents,
  sakura,
  donut,
  img_size,
  img_size_h,
  canvas_home,
  cvs_home,
  canvas_hello,
  cvs_hello,
  // header.js-5:func = new canvas_function();
  func,
  top_page_func,
  size,
  char_text,
  char_pos = [],
  wid,
  window_size_w,
  window_size_h,
  rad = Math.PI / 180,
  click_flag = false,
  rotate = 0,
  sub_rot = 360,
  open = true,
  speed = 1;

function get_id() {
  header = document.getElementById("header");
  e_title = document.getElementById("e_title");
  menu_list = document.getElementById("menu_list");
  account_box = document.getElementById("account_box");
  body_div = document.getElementById("body_div");
  sakura = document.getElementById("sakura");
  donut = document.getElementById("donut");
  canvas_home = document.getElementById("cvs_home");
  cvs_home = canvas_home.getContext("2d");
  canvas_hello = document.getElementById("hello");
  cvs_hello = canvas_hello.getContext("2d");
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
