var rotate = 0,
  sub_rot = 180,
  not_first = false;

function button_click() {
  click_flag = !click_flag;
  not_first = true;
  rotate = 0;
  sym_rot = 180;
}

function loop() {
  requestAnimationFrame(loop);
  get_id();
  func = new canvas_function();
  func.resize();
  draw();
}

function draw() {
  if (!canvas || !canvas.getContext) {
    return false;
  }
  cvs.clearRect(0, 0, wid, wid);
  if (click_flag) {
    dot(rotate);
  } else {
    rotate++;
    dot(rotate);
  }
}

function dot(rot) {
  let position = wid / 8;
  if (not_first) {
    if (rot <= 180) {
      func.rotation(rot, position);
    }
    f_rect(position);
    symmetry(position, rot);
  } else {
    f_rect(position);
  }
}

function f_rect(pos) {
  for (let i = 0; i < 3; i++) {
    let dot_pos = 2 * (i + 1) * pos - pos / 2;
    cvs.fillRect(dot_pos, dot_pos, pos, pos);
  }
}

function symmetry(pos, rot) {
  if (rot < 90) {
    func.rotation(90 - rot, pos);
    for (let i = 0; i < 3; i++) {
      let dot_pos = 2 * (i + 1) * pos - pos / 2;
      cvs.fillRect(dot_pos, dot_pos, pos, pos);
    }
  }
}

window.requestAnimFrame = (function() {
  return function(callback) {
    window.setTimeout(callback, 1000 / 60);
  };
})();

requestAnimFrame(loop);
