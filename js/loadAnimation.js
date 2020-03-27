var loadFlag = true;
function loadAnimation() {
  let that = this;
  this.loading = function() {
    var animCanvas = document.querySelector("#load");
    var width = animCanvas.offsetWidth,
      height = animCanvas.offsetHeight;

    var renderer = new THREE.WebGLRenderer({
      canvas: animCanvas,
      antialias: true
    });

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);
    renderer.setClearColor(0xffffff);

    var scene = new THREE.Scene();

    // カメラ
    var camera = new THREE.PerspectiveCamera(100, width / height, 0.1, 10000);
    camera.position.set(width / 10, 0, 300);

    // ライト(明るいところと影の２色に分かれるライト)
    var light = new THREE.HemisphereLight(0xffb8c7, 0xde7e8c, 0.6);
    scene.add(light);

    // ライト(平行光源)
    var light = new THREE.DirectionalLight(0xf77b97, 0.5);
    light.position.set(200, 300, 400);
    scene.add(light);

    // うにょうにょ
    // ジオメトリ
    var geometry = new THREE.IcosahedronGeometry(120, 4);
    for (var i = 0; i < geometry.vertices.length; i++) {
      var vector = geometry.vertices[i];
      vector._o = vector.clone();
    }

    // マテリアル(光沢感のある質感を表現)
    var material = new THREE.MeshPhongMaterial({
      emissive: 0xff6a8b,
      emissiveIntensity: 0.8,
      shininess: 0
    });

    // Meshを作成
    var shape = new THREE.Mesh(geometry, material);
    scene.add(shape);

    var s = 0;
    function updateVertices() {
      s += 20;

      for (let i = 0; i < geometry.vertices.length; i++) {
        // geometry.verticesは頂点座標
        var vector = geometry.vertices[i];
        // 座標は直接変えられないのでコピー
        vector.copy(vector._o);
        // noise.simplex3() -> 戻り値は-1～1の浮動小数点であり、起伏が激しい
        var perlin = noise.simplex3(
          vector.x * 0.006 + s * 0.0002,
          vector.y * 0.006 + s * 0.0003,
          vector.z * 0.006
        );
        var ratio = perlin * 0.15 + 0.5;
        // multiplyScalar() -> 伸ばす
        vector.multiplyScalar(ratio);
      }
      geometry.verticesNeedUpdate = true;
    }

    function render() {
      let loadMate = requestAnimationFrame(render);
      updateVertices();
      renderer.render(scene, camera);
      if (!loadFlag) {
        cancelAnimationFrame(loadMate);
      }
    }

    function onResize() {
      animCanvas.style.width = "";
      animCanvas.style.height = "";
      width = animCanvas.offsetWidth;
      height = animCanvas.offsetHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    }

    render();

    var resizeTm;

    window.addEventListener("resize", function() {
      resizeTm = clearTimeout(resizeTm);
      resizeTm = setTimeout(onResize, 200);
    });
  };

  this.loadChar = function() {
    let loadCanvas = document.getElementById("cha");
    let lts = loadCanvas.getContext("2d");
    let div_home_w = window.innerWidth * devicePixelRatio;
    let div_home_h = window.innerHeight * devicePixelRatio;
    loadCanvas.width = div_home_w;
    loadCanvas.height = div_home_h;
    loadCanvas.style.width = String(loadCanvas.width / devicePixelRatio) + "px";
    loadCanvas.style.height =
      String(loadCanvas.height / devicePixelRatio) + "px";
    let w = window.innerWidth;
    let h = window.innerHeight;
    lts.fillStyle = "#f77b97";
    lts.textAlign = "center";
    lts.font = w / 9 + "px 'Sacramento'";
    console.log(lts.font);
    lts.fillText("Loading", w, h);
  };
}
