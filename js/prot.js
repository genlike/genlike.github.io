/*global THREE, requestAnimationFrame, console*/

var camera, scene, renderer, clock;

var geometry, material, mesh;

var chair,table, lamp;

var buttonUP, buttonDOWN, buttonLEFT, buttonRIGHT;

var rotmatrix, angle;






// function createScene() {
//     'use strict';
//
//     scene = new THREE.Scene();
//
//     scene.add(new THREE.AxisHelper(40));
//
//     createChair(0,5,0,3);
//     createTable(0,5,12);
//
//     //createLamp(13,-3.5,5);
//
//     scene.add(new Lamp(13,-3.5,5));
//
// }

function createChair(x,y,z,legDistance) {
    'use strict';

    chair = new THREE.Object3D();
	let chair_top = new THREE.Object3D();
	chair_top.name = "chair_top";
	let chair_bottom = new THREE.Object3D();
	chair_bottom.name = "chair_bottom";
	let chair_legs = new THREE.Group();

    chair.userData = { xSpeed: 0, zSpeed: 0, direction: 0, rotationSpeed: 0};
    material = new THREE.MeshBasicMaterial({color: 0x00ff00, wireframe:true});

    // Bottom Section
    let n=3;
    //Initial position of first wheel
    let rotation = 3*Math.PI / 2;
	let chair_leg = new THREE.Group();
    for(let i=0;i<n;i++){
        rotation += (2*Math.PI)/n
        // Position and rotation around Y axis
        addChairWheel(chair_leg, x + legDistance * Math.cos(rotation), y - 8, z - legDistance * Math.sin(rotation), Math.PI/2);

        // Position, rotation around Y axis and leg length
        addChairWheelSupport(chair_leg, x + (legDistance / 2) * Math.cos(rotation), y - 7.7, z - (legDistance / 2) * Math.sin(rotation), rotation, legDistance);
		chair_legs.add(chair_leg);
		chair_leg = new THREE.Group();
    }

    //Center Section
	chair_bottom.add(chair_legs);
    addChairCenterPiece(chair_bottom,x,y-1,z);


    //ChairSection
    addChairSeat(chair_top,x,y-2,z);
    addChairBack(chair_top,x,y-2,z);


    //Adding to the scene
	chair.add(chair_top);
	chair.add(chair_bottom);
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
    geometry = new THREE.CubeGeometry(5, 5, 1);
    material = new THREE.MeshBasicMaterial({ color: 0xff00ff, wireframe: true });
    mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y, z-3);
    obj.add(mesh);
}


function addChairCenterPiece(obj, x,y,z){
    geometry = new THREE.CubeGeometry(1, 3, 1);
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
	mesh.add(new THREE.AxisHelper(5));
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
	addTableSupports(table, x - 7, y - 5, z - 4.3); //pomos y-5 em todos
	addTableSupports(table, x + 7, y - 5, z + 4.6);
	addTableSupports(table, x + 7, y - 5, z - 4.6);
	addTableSupports(table, x - 7, y - 5, z + 4.6);
	scene.add(table);
}


function addTableTop(obj,x,y,z) {
	'use scrict';

	geometry = new THREE.CubeGeometry(15,1,10);
	material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true});
	mesh = new THREE.Mesh(geometry, material);
	mesh.position.set(x,y - 1,z);
	obj.add(mesh);
}

function addTableSupports(obj,x,y,z) {

	'use scrict';

	geometry = new THREE.CylinderGeometry(0.5,0.5,7);
	material = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true});
	mesh = new THREE.Mesh(geometry, material);
	mesh.position.set(x,y,z);
	//mesh.rotateX(Math.PI / 2);

	obj.add(mesh);

}

// function createLamp(x,y,z) {
//     'use scrict';
//
//     lamp = new THREE.Object3D();
//     material = new THREE.MeshBasicMaterial({color: 0xff0000, wireframe:true});
//     addLampBase(lamp,x,y ,z);
//     addLampPole(lamp,x, y + 5.266, z);
//     addLampSphere(lamp,x,y+10.5,z);
//     addLampCover(lamp,x,y+10.5,z);
//     scene.add(lamp);
// }


//
// function addLampBase(obj,x,y,z){
//     'use scrict';
//
//     geometry = new THREE.CubeGeometry(5,0.3,5);
//     material = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true});
//     mesh = new THREE.Mesh(geometry, material);
//     mesh.position.set(x,y+ 0.150,z);
//     obj.add(mesh);
//
//     geometry = new THREE.CubeGeometry(2.5,0.25,2.5);
//     material = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true});
//     mesh = new THREE.Mesh(geometry, material);
//     mesh.position.set(x,y + 0.350,z);
//     obj.add(mesh);
// }
// function addLampPole(obj,x,y,z) {
//     'use scrict';
//
//     geometry = new THREE.CylinderGeometry(0.3,0.3,10,21);
//     material = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true});
//     mesh = new THREE.Mesh(geometry, material);
//     mesh.position.set(x,y,z);
//     obj.add(mesh);
// }
//
// function addLampSphere(obj,x,y,z) {
//     'use scrict';
//
//     geometry = new THREE.SphereGeometry(0.58,20,20);
//     material = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true});
//     mesh = new THREE.Mesh(geometry, material);
//     mesh.position.set(x,y,z);
//     obj.add(mesh);
// }
//
// function addLampCover(obj,x,y,z) {
//     'use scrict';
//
//     geometry = new THREE.BoxGeometry(3.21,3.21,0.14);
//     material = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true});
//     mesh = new THREE.Mesh(geometry, material);
//     mesh.position.set(x,y,z+1.55);
//     obj.add(mesh);
//
//     geometry = new THREE.BoxGeometry(3.21,3.21,0.14);
//     material = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true});
//     mesh = new THREE.Mesh(geometry, material);
//     mesh.position.set(x,y,z-1.55);
//     obj.add(mesh);
//
//     geometry = new THREE.BoxGeometry(3.21,3.21,0.14);
//     material = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true});
//     mesh = new THREE.Mesh(geometry, material);
//     mesh.position.set(x+1.55,y,z);
//     mesh.rotateY(Math.PI / 2);
//     obj.add(mesh);
//
//     geometry = new THREE.BoxGeometry(3.21,3.21,0.14);
//     material = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true});
//     mesh = new THREE.Mesh(geometry, material);
//     mesh.position.set(x-1.55,y,z);
//     mesh.rotateY(Math.PI / 2);
//     obj.add(mesh);
//
// }

// function createCamera() {
//     'use strict';
//
//
//     var aspect = window.innerWidth / window.innerHeight;
//     camera = new THREE.OrthographicCamera( frustumSize * aspect / - 2, frustumSize * aspect / 2, frustumSize / 2, frustumSize / - 2, 1, 1000 );
//
//     // camera = new THREE.OrthographicCamera( 45 / - 2, 45 / 2, 45 / 2, 45 / - 2, 1, 2000); //Ainda nao estao as 3 camaras,
//
//
//     camera.position.x = 100 ;
//     camera.position.y = 100 ;
//     camera.position.z = 100 ;
//
//     camera.lookAt(scene.position);
//
// }

// function onResize() {
//     'use strict';
//
//     var aspect = window.innerWidth / window.innerHeight;
//     camera.left   = - frustumSize * aspect / 2;
//     camera.right  =   frustumSize * aspect / 2;
//     camera.top    =   frustumSize / 2;
//     camera.bottom = - frustumSize / 2;
//     camera.updateProjectionMatrix();
//     renderer.setSize( window.innerWidth, window.innerHeight );


    // renderer.setSize(window.innerWidth, window.innerHeight);
    //
    // if (window.innerHeight > 0 && window.innerWidth > 0) {
    //     camera.aspect = window.innerWidth / window.innerHeight;
    //     camera.updateProjectionMatrix();
    // }

// }
//
// function onKeyUp(e) {
//     switch (e.keyCode) {
//         case 38:
//             buttonUP = false;
//             break;
//         case 40:
//             buttonDOWN = false;
//             break;
//         case 39:
//             buttonRIGHT = false;
//             break;
//         case 37:
//             buttonLEFT = false;
//             break;
//     }
// }
//
// function onKeyDown(e) {
//     'use strict';
//
// /*
// Arrow Type  Alt Code
// UP          38
// RIGHT       39
// DOWN        40
// LEFT        37
// 1           49
// 2           50
// 3           51
// 4           52
// */
//
//     switch (e.keyCode) {
//     case 38:
//         buttonUP = true;
//         break;
//     case 40:
//         buttonDOWN = true;
//         break;
//     case 39:
//         buttonRIGHT = true;
//         break;
//     case 37:
//         buttonLEFT = true;
//         break;
//     case 65: //A
//     case 97: //a
//         scene.traverse(function (node) {
//             if (node instanceof THREE.Mesh) {
//                 node.material.wireframe = !node.material.wireframe;
//
//             }
//         });
//         break;
//     case 83:  //S
//     //case 115: //s
//         //ball.userData.jumping = !ball.userData.jumping;
//         //break;
//     case 69:  //E
//     case 101: //e
//         scene.traverse(function (node) {
//             if (node instanceof THREE.AxisHelper) {
//                 node.visible = !node.visible;
//             }
//         });
//         break;
//
//     case  49: // 1
//         camera.position.x = 100 ;
//         camera.position.y = 0;
//         camera.position.z = 0;
//         camera.lookAt(scene.position);
//         break;
//     case  50: // 2
//         camera.position.x = 0;
//         camera.position.y = 100 ;
//         camera.position.z = 0;
//         camera.lookAt(scene.position);
//         break;
//     case  51: // 3
//         camera.position.x = 0;
//         camera.position.y = 0;
//         camera.position.z = 100 ;
//         camera.lookAt(scene.position);
//         break;
//     case  52: // 4
//         camera.position.x = 100 ;
//         camera.position.y = 100 ;
//         camera.position.z = 100;
//         camera.lookAt(scene.position);
//         break;
//     }
// }
//
// function render() {
//     'use strict';
//     renderer.render(scene, camera);
// }
//
// function init() {
//     'use strict';
//     renderer = new THREE.WebGLRenderer({
//         antialias: true
//     });
//
//     clock = new THREE.Clock();
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     document.body.appendChild(renderer.domElement);
//
//     createScene();
//     createCamera();
//     chair.userData.xSpeed = 0;
//     window.addEventListener("keydown", onKeyDown);
//     window.addEventListener("keyup", onKeyUp);
//     window.addEventListener("resize", onResize);
//
// }

// function rotateWheels(chair, direction){
// 	chair.getObjectByName("chair_bottom").children[0].children.forEach( leg => {
// 		let wheel = leg.children[0];
//
// 		let wheelDirection = new THREE.Vector3();
// 		wheel.getWorldDirection(wheelDirection);
// 		let angle = wheelDirection.angleTo(direction);
//
// 		wheel.rotateY(angle+Math.PI/2);
// 	});
// }
//


// function animate() {
//     'use strict';
//
//     let delta = clock.getDelta();
//     if (buttonDOWN && chair.userData.xSpeed > -speedCap)
//         chair.userData.xSpeed -= acceleration ;
//
//     if (buttonUP && chair.userData.xSpeed < speedCap)
//         chair.userData.xSpeed += acceleration ;
//
//     if (buttonRIGHT && chair.userData.zSpeed > -angularSpeedCap/*-speedCap*/){
//             chair.userData.rotationSpeed -= angularAcceleration;
//         }
//         //chair.userData.zSpeed -= acceleration ;
//
//     if (buttonLEFT && chair.userData.zSpeed < angularSpeedCap/*speedCap*/){
//         chair.userData.rotationSpeed += angularAcceleration;
//     }
//         //chair.userData.zSpeed += acceleration ;
//
//
//         if (Math.abs(chair.userData.xSpeed) > 0) {
//             if (chair.userData.xSpeed < 0) {
//                 chair.userData.xSpeed += acceleration/4;
//             } else {
//                 chair.userData.xSpeed -= acceleration/4;
//             }
//             if (Math.abs(chair.userData.xSpeed) <= acceleration/4)
//             chair.userData.xSpeed = 0;
//         }
//         /*
//         if (Math.abs(chair.userData.zSpeed) > 0) {
//             if (chair.userData.zSpeed < 0) {
//                 chair.userData.zSpeed += acceleration / 4;
//             } else {
//                 chair.userData.zSpeed -= acceleration / 4;
//             }
//             if (Math.abs(chair.userData.zSpeed) <= acceleration / 4)
//             chair.userData.zSpeed = 0;
//         }
//         */
//
//
//        if (Math.abs(chair.userData.rotationSpeed) > 0) {
//            if (chair.userData.rotationSpeed < 0) {
//                chair.userData.rotationSpeed += angularAcceleration / 4;
//             } else {
//                 chair.userData.rotationSpeed -= angularAcceleration / 4;
//             }
//             if (Math.abs(chair.userData.rotationSpeed) <= angularAcceleration / 4)
//             chair.userData.rotationSpeed = 0;
//         }
//
//         let chair_top = chair.getObjectByName("chair_top");
// 		chair_top.rotateY(chair.userData.rotationSpeed*delta);
//
//         //let matrix4 = (THREE.Matrix4) chair.position.matrix;
//         let chairDirection = new THREE.Vector3();
//         chair_top.getWorldDirection(chairDirection);
//
//
//         chair.position.add(new THREE.Vector3((chair.userData.xSpeed * chairDirection.x) * delta, 0, (chair.userData.xSpeed * chairDirection.z) *delta ));
// 		if (Math.abs(chair.userData.xSpeed)>0.01)
// 			rotateWheels(chair, chairDirection);
//
//         setTimeout(function () {
//             requestAnimationFrame(animate);
//         }, 1000 / 60);
//         render();
//
//     }
