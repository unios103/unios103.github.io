var button,
  canvas,
  cvs,
  func,
  wid,
  rad = Math.PI / 180,
  click_flag = false,
  rotate = 0,
  sub_rot = 180,
  open = true,
  speed = 0;

function get_id() {
  canvas = document.getElementById("menu");
  cvs = canvas.getContext("2d");
}

// メニューが開かれているかどうかの判定と再初期化
function button_click() {
  click_flag = !click_flag;
  open = false;
  rotate = 0;
  sub_rot = 180;
  speed = 0;
}
