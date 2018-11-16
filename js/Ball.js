
const acceleration = 1.000;

const minSpeed = 10; 
const maxSpeed = 20;


const speedCap = 500;

class Ball extends GraphicalObject {
    
    constructor(x,y,z,radius=7.5, color=0xffffff){
        super();
        let initialSpeed = 10;
		this.step=0;
        let speed = new THREE.Vector3(initialSpeed,0,initialSpeed);
        this.userData ={Speed:speed}
        //material = new THREE.MeshBasicMaterial({color: 0xff0000, wireframe:true});
		this.targetPosition = new THREE.Vector3(-x,0,-z);
        this.color = color;
        this.radius = radius;
        this.sphere = new THREE.Object3D();
        this.addSphere(this.sphere,x,y,z);
        this.add(this.sphere);

    }

    addSphere(obj,x,y,z) {
        'use strict';

        let geometry = new THREE.SphereGeometry(this.radius,30,10);
        let material = new THREE.MeshBasicMaterial({ color: this.color, wireframe: false});
		
		let texture = new THREE.TextureLoader().load("textures/ball.jpg");
		let faceVertexUvs = geometry.faceVertexUvs[ 0 ];
		for (let i = 0; i < faceVertexUvs.length; i ++ ) {

			let uvs = faceVertexUvs[ i ];
			let face = geometry.faces[ i ];
			for ( let j = 0; j < 3; j ++ ) {
				uvs[ j ].x = face.vertexNormals[ j ].x * 0.4 + 0.5;
				uvs[ j ].y = face.vertexNormals[ j ].y * 0.4 + 0.5;

			}

		}
		texture.minFilter = THREE.LinearFilter;
        material.map = texture;
		material.flatShading = THREE.SmoothShading;
        material.needsUpdate = true;
        geometry.computeFaceNormals();
        let mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(x,y,z);
        mesh.add(new THREE.AxesHelper(10));
        obj.add(mesh);
    }

    updateMovement(delta){
	'use strict'
	/*
        if (this.userData.Speed.length() < speedCap) {
			let currPosition = this.position;
			let accelerationVec = this.targetPosition.clone();
			accelerationVec.sub(currPosition);
			let r = accelerationVec.length();
			accelerationVec.normalize();
			//accelerationVec.multiplyScalar(0.25);
			if (r != 0) accelerationVec.multiplyScalar((this.userData.Speed.length()*delta)**2/r);
            this.userData.Speed.add(accelerationVec);
			console.log(r);
		}
     */   
        this.oldPosition = this.position;
		this.step += ((delta/2) % 2*Math.PI);
		let direction = new THREE.Vector3(5*(this.userData.Speed.x)*delta*Math.cos(this.step), 0,-5*(this.userData.Speed.z)*delta*Math.sin(this.step));
		this.applyRotation(direction);
        let newPosition = direction.add(this.position);
	
		return newPosition;
    }

    applyMovement(newPosition){
        
        this.position.x = newPosition.x;
        this.position.y = newPosition.y;
        this.position.z = newPosition.z;
    }

    applyRotation(direction){
        let matrix = new THREE.Matrix4();
        let direction2 = direction.clone();
		//console.log(direction);
        let angle = (direction2.length())/this.radius;
        direction2.normalize();
        direction2.cross(new THREE.Vector3(0,-1,0));
        matrix.makeRotationAxis(direction2,angle)


        this.sphere.applyMatrix(matrix);
        

    }

}
