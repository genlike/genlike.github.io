
const acceleration = 1.000;

const minSpeed = 10; 
const maxSpeed = 20;


const speedCap = 500;

class Ball extends GraphicalObject {
    
    constructor(x,y,z,radius=30, color=0xffffff){
        super();
        let initialSpeed = getRandom(minSpeed,maxSpeed);
        let speed = new THREE.Vector3(initialSpeed*getRandom(-1,1),0,initialSpeed*getRandom(-1,1));
        //speed.normalize();
        this.userData ={Speed:speed}
        //material = new THREE.MeshBasicMaterial({color: 0xff0000, wireframe:true});
        this.color = color;
        this.radius = radius;
        this.sphere = new THREE.Object3D();
        this.addSphere(this.sphere,x,y,z);
        this.add(this.sphere);

    }

    addSphere(obj,x,y,z) {
        'use scrict';

        let geometry = new THREE.SphereGeometry(this.radius,30,10);
        let material = new THREE.MeshBasicMaterial({ color: this.color, wireframe: true});
        let mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(x,y,z);
        mesh.add(new THREE.AxisHelper(10));
        obj.add(mesh);
    }

    updateMovement(delta){

        if (this.userData.Speed.length() < speedCap)
            this.userData.Speed.multiplyScalar(acceleration);
        
        this.oldPosition = this.position;
        let newPosition = new THREE.Vector3( this.position.x + (this.userData.Speed.x *speedFactor) * delta,
                                            this.position.y, 
                                            this.position.z + (this.userData.Speed.z*speedFactor) *delta);

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
