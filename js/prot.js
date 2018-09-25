/*global THREE, requestAnimationFrame, console*/

var camera, scene, renderer, clock;

var geometry, material, mesh;

var chair,table;

var buttonUP, buttonDOWN, buttonLEFT, buttonRIGHT;


const acceleration = 4;
const speedCap = 50;


function createScene() {
    'use strict';

    scene = new THREE.Scene();

    scene.add(new THREE.AxisHelper(40));

    createChair(0,5,0,3);
    createTable(8,10,18);

}

function createChair(x,y,z,legDistance) {
    'use strict';

    chair = new THREE.Object3D();
    chair.userData = { xSpeed: 0, zSpeed: 0 };
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

function createTable(x,y,z) {

	'use scrict';

	table = new THREE.Object3D();
	material = new THREE.MeshBasicMaterial({color: 0xff0000, wireframe:true});
	addTableTop(table,x,y,z);
	addTableSupports(table, x, y - 5, z);
	scene.add(table);
}


function addTableTop(obj,x,y,z) {
	'use scrict';

	geometry = new THREE.CubeGeometry(15,1,10);
	material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true});
	mesh = new THREE.Mesh(geometry, material);
	mesh.position.set(x,y,z);
	obj.add(mesh);
}

function addTableSupports(obj,x,y,z) {

	'use scrict';

	geometry = new THREE.CubeGeometry(0.7,0.7,7);
	material = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true});
	mesh = new THREE.Mesh(geometry, material);
	mesh.position.set(x - 9,y,z - 6.4);
	mesh.rotateX(Math.PI / 2);

	var sup2 = mesh.clone();
	sup2.position.set(x + 5, y, z + 3.1);

	var sup3 = mesh.clone();
	sup3.position.set(x + 5, y, z - 6.1);

	var sup4 = mesh.clone();
	sup4.position.set(x - 9, y, z + 2.7);

	obj.add(mesh);
	obj.add(sup2);
	obj.add(sup3);
	obj.add(sup4);

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
    
    let delta = clock.getDelta();
    if (buttonUP && chair.userData.xSpeed > -speedCap)
        chair.userData.xSpeed -= acceleration ;

    if (buttonDOWN && chair.userData.xSpeed < speedCap)
        chair.userData.xSpeed += acceleration ;

    if (buttonRIGHT && chair.userData.zSpeed > -speedCap)
        chair.userData.zSpeed -= acceleration ;

    if (buttonLEFT && chair.userData.zSpeed < speedCap)
        chair.userData.zSpeed += acceleration ;
    
    
    chair.position.add(new THREE.Vector3(chair.userData.xSpeed * delta, 0, chair.userData.zSpeed *delta ));

    // X axis movement
    if (Math.abs(chair.userData.xSpeed) > 0) {
        if (chair.userData.xSpeed < 0) {
            chair.userData.xSpeed += acceleration/4; 
        } else { 
            chair.userData.xSpeed -= acceleration/4; 
        }
        if (Math.abs(chair.userData.xSpeed) <= acceleration/4)
            chair.userData.xSpeed = 0;
    }
    if (Math.abs(chair.userData.zSpeed) > 0) {
        if (chair.userData.zSpeed < 0) {
            chair.userData.zSpeed += acceleration / 4;
        } else {
            chair.userData.zSpeed -= acceleration / 4;
        }
        if (Math.abs(chair.userData.zSpeed) <= acceleration / 4)
            chair.userData.zSpeed = 0;
    }
    render();
    requestAnimationFrame(animate);


}
