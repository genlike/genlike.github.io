
const acceleration = 1.000;

const minSpeed = 10; 
const maxSpeed = 20;


const speedCap = 500;

class Ball extends GraphicalObject {
    
    constructor(x,y,z,radius=7.5, color=0xffffff){
        super();
        let initialSpeed = 20;
        let speed = new THREE.Vector3(initialSpeed,0,0);
        this.userData ={Speed:speed}
        //material = new THREE.MeshBasicMaterial({color: 0xff0000, wireframe:true});
		this.targetPosition = new THREE.Vector3(-x,-y,-z);
        this.color = color;
        this.radius = radius;
        this.sphere = new THREE.Object3D();
        this.addSphere(this.sphere,x,y,z);
        this.add(this.sphere);

    }

    addSphere(obj,x,y,z) {
        'use scrict';

        let geometry = new THREE.SphereGeometry(this.radius,30,10);
        let material = new THREE.MeshBasicMaterial({ color: this.color, wireframe: false});
        let mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(x,y,z);
        mesh.add(new THREE.AxesHelper(10));
        obj.add(mesh);
    }

    updateMovement(delta){

        if (this.userData.Speed.length() < speedCap) {
			let currPosition = this.position;
			console.log(currPosition);
			console.log(this.targetPosition);
			let accelerationVec = this.targetPosition.clone().sub(currPosition);
			let r = accelerationVec.length();
			accelerationVec.normalize();
			accelerationVec.multiplyScalar(0.25);
			//if (r != 0) accelerationVec.multiplyScalar(this.userData.Speed.length()**2/r);
            this.userData.Speed.add(accelerationVec);
		}
        
        this.oldPosition = this.position;
        let newPosition = new THREE.Vector3( this.position.x + (this.userData.Speed.x)*delta,
                                            this.position.y, 
                                            this.position.z + (this.userData.Speed.z)*delta);
		//this.applyRotation(delta);
	
		return newPosition;
    }

    applyMovement(newPosition){
        
        this.position.x = newPosition.x;
        this.position.y = newPosition.y;
        this.position.z = newPosition.z;
    }

    applyRotation(delta){
        let matrix = new THREE.Matrix4();
        let direction = this.userData.Speed.clone();

        let angle = (direction.length()*delta)/this.radius;
        direction.normalize();
        direction.cross(new THREE.Vector3(0,-1,0));
        matrix.makeRotationAxis(direction,angle)


        this.sphere.applyMatrix(matrix);
        

    }

}
