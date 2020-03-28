var DD = new Date(),
  time = DD.getSeconds(),
  loadAnim = new loadAnimation(),
  s = 0;

WebFont.load({
  custom: {
    families: ["Sacramento"]
  },
  active: function() {
    loadAnim.loading();
  }
});

window.onload = function load() {
  loadFlag = false;
};

const checkLoad = () => {
  let anim = requestAnimationFrame(checkLoad);
  let now = new Date();
  if (time + 15 <= now.getSeconds()) {
    loadFlag = false;
  }
  if (!loadFlag) {
    var loading = document.getElementById("load");
    let mainContents = document.getElementById("mainContents");
    mainContents.style.opacity = 1;
    loading.style.zIndex = -1;
    loading.style.opacity = 0;
    cancelAnimationFrame(anim);
  }
};

checkLoad();
