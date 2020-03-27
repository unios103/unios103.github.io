var DD = new Date();
var time = DD.getSeconds();
var loadAnim = new loadAnimation();
var s = 0;

loadAnim.loading();
loadAnim.loadChar();

// window.onload = function load() {
//   loadFlag = false;
// };

const checkLoad = () => {
  let anim = requestAnimationFrame(checkLoad);
  let now = new Date();
  if (time + 8 <= now.getSeconds()) {
    // loadFlag = false;
  }
  if (!loadFlag) {
    var loading = document.getElementById("load");
    loading.style.zIndex = -1;
    loading.style.opacity = 0;
    // cancelAnimationFrame(anim);
  }
};

checkLoad();
