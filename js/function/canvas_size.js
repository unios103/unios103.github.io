var canvas = document.getElementById("menu");
function canvas_size() {
  this.resize = function() {
    let title_menu = document.getElementById("e_title").clientHeight;
    canvas.width = title_menu;
    canvas.height = title_menu;
    wid = title_menu;
  };
}
