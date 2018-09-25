/*global THREE, requestAnimationFrame, console*/

var camera, scene, renderer, clock;

var geometry, material, mesh;

var chair;

var buttonUP, buttonDOWN, buttonLEFT, buttonRIGHT;


const acceleration = 4;
const speedCap = 50;
const angacceleration = 2*Math.PI;
const rotationCap = 4*Math.PI;

function createScene() {
    'use strict';

    scene = new THREE.Scene();


    scene.add(new THREE.AxisHelper(40));

    createChair(0,5,0,3);
}

function createChair(x,y,z,legDistance) {
    'use strict';

    chair = new THREE.Object3D();
    chair.userData = { xSpeed: 0, rotSpeed: 0 };
    material = new THREE.MeshBasicMaterial({color: 0x00ff00, wireframe:true});

    // Bottom Section
    let n=3;
    //Initial position of first wheel
    let rotation = 3*Math.PI / 2;
    for(let i=0;i<n;i++){
        rotation += (2*Math.PI)/n
        // Position and rotation around Y axis
        addChairWheel(chair, x + legDistance * Math.cos(rotation), y - 8, z - legDistance * Math.sin(rotation), rotation);
        // Position, rotation around Y axis and leg length
        addChairWheelSupport(chair, x + (legDistance / 2) * Math.cos(rotation), y - 7.7, z - (legDistance / 2) * Math.sin(rotation), rotation, legDistance);
    }

    //Center Section
    addChairCenterPiece(chair,x,y,z);


    //ChairSection
    addChairSeat(chair,x,y,z);
    addChairBack(chair,x,y,z);


    //Adding to the scene
    scene.add(chair);

}

function addChairSeat(obj,x,y,z){
    geometry = new THREE.CubeGeometry(5, 1, 5);
    material = new THREE.MeshBasicMaterial({ color: 0xff00ff, wireframe: true });
    mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y-2, z);
    obj.add(mesh);
}

function addChairBack(obj, x, y, z) {
    geometry = new THREE.CubeGeometry(1, 5, 5);
    material = new THREE.MeshBasicMaterial({ color: 0xff00ff, wireframe: true });
    mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x-3, y, z);
    obj.add(mesh);
}


function addChairCenterPiece(obj, x,y,z){
    geometry = new THREE.CubeGeometry(1, 5, 1);
    material = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true });
    mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y-5, z);
    obj.add(mesh);
}

function addChairWheel(obj,x,y,z,rad){
    'use strict';

    geometry = new THREE.TorusGeometry(0.3, 0.2, 16, 100);
    material = new THREE.MeshBasicMaterial({ color: 0xffff00 , wireframe: true});
    mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x,y,z);
    mesh.rotateY(rad);
    obj.add(mesh);
}

function addChairWheelSupport(obj, x, y, z, rad, length) {
    'use strict';

    geometry = new THREE.CubeGeometry(length+0.4, 0.2, 1);
    material = new THREE.MeshBasicMaterial({ color: 0xffff00, wireframe: true });
    mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y, z);
    mesh.rotateY(rad);
    obj.add(mesh);
}


function createCamera() {
    'use strict';
    camera = new THREE.PerspectiveCamera(10,
                                         window.innerWidth / window.innerHeight,
                                         1,
                                         1000);
    camera.position.x = 200;
    camera.position.y = 200;
    camera.position.z = 200;
    camera.lookAt(scene.position);
}

function onResize() {
    'use strict';

    renderer.setSize(window.innerWidth, window.innerHeight);

    if (window.innerHeight > 0 && window.innerWidth > 0) {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
    }

}

function onKeyUp(e) {
    console.log("UP " + e.keyCode);
    switch (e.keyCode) {
        case 38:
            buttonUP = false;
            break;
        case 40:
            buttonDOWN = false;
            break;
        case 39:
            buttonRIGHT = false;
            break;
        case 37:
            buttonLEFT = false;
            break;
    }
}

function onKeyDown(e) {
    'use strict';
    
    console.log("DOWN " + e.keyCode);
/*
Arrow Type  Alt Code
UP          38
RIGHT       39
DOWN        40
LEFT        37
*/

    switch (e.keyCode) {
    case 38:
        buttonUP = true;
        break;
    case 40:
        buttonDOWN = true;
        break;
    case 39:
        buttonRIGHT = true;
        break;
    case 37:
        buttonLEFT = true;
        break;
    case 65: //A
    case 97: //a
        scene.traverse(function (node) {
            if (node instanceof THREE.Mesh) {
                node.material.wireframe = !node.material.wireframe;
            }
        });
        break;
    case 83:  //S
    case 115: //s
        ball.userData.jumping = !ball.userData.jumping;
        break;
    case 69:  //E
    case 101: //e
        scene.traverse(function (node) {
            if (node instanceof THREE.AxisHelper) {
                node.visible = !node.visible;
            }
        });
        break;
    }
}

function render() {
    'use strict';
    renderer.render(scene, camera);
}

function init() {
    'use strict';
    renderer = new THREE.WebGLRenderer({
        antialias: true
    });

    clock = new THREE.Clock();

    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    createScene();
    createCamera();
    chair.userData.xSpeed = 0;
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);
    window.addEventListener("resize", onResize);
}

function animate() {
    'use strict';




    if (buttonUP && chair.userData.xSpeed < speedCap)
        chair.userData.xSpeed += acceleration;

    if (buttonDOWN && chair.userData.xSpeed > -speedCap)
        chair.userData.xSpeed -= acceleration;

    if (buttonRIGHT && chair.userData.rotSpeed < rotationCap)
        chair.userData.rotSpeed += angacceleration;

    if (buttonLEFT && chair.userData.rotSpeed > -rotationCap)
        chair.userData.rotSpeed -= angacceleration;




    chair.position.x += chair.userData.xSpeed * clock.getDelta();
    // X axis movement
    if (Math.abs(chair.userData.xSpeed) > 0) {
        if (chair.userData.xSpeed < 0) {
            chair.userData.xSpeed += acceleration/4; 
        } else { 
            chair.userData.xSpeed -= acceleration/4; 
        }
        console.log(chair.userData.xSpeed + " - " + (acceleration/4) );
        if (Math.abs(chair.userData.xSpeed) <= acceleration/4)
            chair.userData.xSpeed = 0;
    }

    /*
    // Y axis rotation
    let temp = 2*Math.PI * clock.getDelta();
    chair.rotateY(chair.userData.rotSpeed*temp);
    if (Math.abs(chair.userData.rotSpeed) > 0) {
        if (chair.userData.rotSpeed < 0) {
            chair.userData.rotSpeed += angacceleration / 4;
        } else {
            chair.userData.rotSpeed -= angacceleration / 4;
        }
        console.log(chair.userData.rotSpeed + " - " + (angacceleration / 4));
        if (Math.abs(chair.userData.rotSpeed) <= angacceleration / 4)
            chair.userData.rotSpeed = 0;
    }
    */
    render();

    requestAnimationFrame(animate);
}
