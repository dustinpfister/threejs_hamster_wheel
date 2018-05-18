// SCENE
var scene = new THREE.Scene();

// WHEEL
var wheel = new HamsterWheel();
scene.add(wheel.group);

// GUY

var guy = new Guy();
guy.group.scale.set(.5, .5, .5);
guy.group.position.set(0,  - .4, -1);
guy.group.rotation.set(0, Math.PI / 2, 0)
scene.add(guy.group);

// CAMERA
var camera = new THREE.PerspectiveCamera(50, 8 / 6, .05, 100);
camera.position.set(5, 5, 5);
camera.lookAt(0, 0, 0);
camera.add(new THREE.PointLight());
scene.add(camera);

var controls = new THREE.OrbitControls(camera);
controls.autoRotate = true;


// RENDER
var renderer = new THREE.WebGLRenderer();
renderer.setSize(800, 600);
document.body.appendChild(renderer.domElement);

var frame = 0, maxFrame = 200;
var loop = function () {

    var per = frame / maxFrame,
    bias = Math.abs(.5 - per) / .5,
    r = Math.PI * 2 * per;

    requestAnimationFrame(loop);

    wheel.wheel.rotation.z = r;
    guy.moveLegs(per * 8);
    guy.moveArm('arm_right',  - .1 + .2 * bias, 0);
    guy.moveArm('arm_left', .1 - .2 * bias, 0);

	controls.update();
    renderer.render(scene, camera);

    frame += 1;
    frame %= maxFrame;

};

loop();
