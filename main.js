// SCENE
var scene = new THREE.Scene();

// WHEEL
var wheel = new HamsterWheel();
scene.add(wheel.group);

// CAMERA
var camera = new THREE.PerspectiveCamera(50, 8 / 6, .05, 100);
camera.position.set(10, 10, 10);
camera.lookAt(0, 0, 0);
camera.add(new THREE.PointLight());
scene.add(camera);

new THREE.OrbitControls(camera);

// RENDER
var renderer = new THREE.WebGLRenderer();
renderer.setSize(800, 600);
document.body.appendChild(renderer.domElement);

var frame = 0, maxFrame = 100;
var loop = function () {

    var per = frame / maxFrame,
    bias = Math.abs(.5 - per) / .5,
    r = Math.PI * 2 * per;

    requestAnimationFrame(loop);

    renderer.render(scene, camera);

    frame += 1;
    frame %= maxFrame;

};

loop();
