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
}
