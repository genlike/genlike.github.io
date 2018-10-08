
class Chair extends GraphicalObject {
    constructor(x,y,z,numberLegs=3,wheelCenterDistance=3.4){
        super(x,y,z);
        this.numberLegs = numberLegs;
        this.wheelCenterDistance=wheelCenterDistance;
    }
}



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