var loadFlag = true;
function loadAnimation() {
  this.loading = function() {
    var animCanvas = document.querySelector("#load");

    let loadCanvas = document.getElementById("cha");
    let lts = loadCanvas.getContext("2d");

    let div_home_w = window.innerWidth * devicePixelRatio;
    let div_home_h = window.innerHeight * devicePixelRatio;

    var isPortrait = false,
      width,
      height,
      w,
      h;

    const canvasSize = () => {
      if (window.innerHeight < window.innerWidth) {
        loadCanvas.width = div_home_h * 2;
        loadCanvas.height = div_home_h;
      } else {
        isPortrait = true;
        loadCanvas.width = div_home_w * 2;
        loadCanvas.height = div_home_w;
      }

      width = animCanvas.offsetWidth;
      height = animCanvas.offsetHeight;

      if (isPortrait) {
        w = window.innerWidth / 4;
      } else {
        w = window.innerHeight / 4;
      }
      h = w / 2;
    };

    canvasSize();

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
    light.position.set(200, 300, 700);
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

    var texture_;

    const loadingText = () => {
      lts.fillStyle = "rgba(0, 0, 0, 0.0)";
      lts.fillRect(0, 0, loadCanvas.width, loadCanvas.height);
      lts.fillStyle = "#ffd1da";
      lts.strokeStyle = "#ffd1da";
      lts.textAlign = "center";
      let append = 0;
      if (navigator.userAgent.match(/(iPhone|iPod|Android)/i)) {
        append += 100;
      }
      if (isPortrait) {
        lts.font = loadCanvas.width / 6 + append + "px 'Sacramento'";
      } else {
        lts.font = loadCanvas.height / 2 + append + "px 'Sacramento'";
      }
      lts.fillText("Loading", loadCanvas.width / 2, loadCanvas.height / 2);
      texture_ = new THREE.Texture(loadCanvas);
      texture_.needsUpdate = true;
      return texture_;
    };

    var textMaterial = new THREE.MeshPhongMaterial({
      map: loadingText(),
      side: THREE.DoubleSide,
      transparent: true
    });

    textMaterial.magFilter = THREE.LinearFilter;

    var textGeometry = new THREE.PlaneGeometry(w, h);
    var textMesh = new THREE.Mesh(textGeometry, textMaterial);
    scene.add(textMesh);
    textMesh.position.x = width / 10;
    textMesh.position.z = 100;
    textMesh.rotation.x = Math.PI * 180;

    var s = 1200,
      frontFlag = false;
    const updateVertices = () => {
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

      if (s % 2400 == 0) {
        frontFlag = !frontFlag;
      }
      if (frontFlag) {
        textMesh.rotation.x -= 0.006;
      } else {
        textMesh.rotation.x += 0.006;
      }
    };

    const render = () => {
      let loadMate = requestAnimationFrame(render);
      updateVertices();
      renderer.render(scene, camera);
      if (!loadFlag) {
        cancelAnimationFrame(loadMate);
      }
    };

    const onResize = () => {
      animCanvas.style.width = "";
      animCanvas.style.height = "";
      canvasSize();
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    render();

    window.addEventListener("resize", function() {
      onResize();
    });
  };
}
