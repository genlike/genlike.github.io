
const acceleration = 1;
const speedCap = 53.5;
const angularAcceleration = 2*Math.PI*0.01;
const angularSpeedCap = 2 * Math.PI * 4;
const torusRadius = 0.3;

class Ball extends GraphicalObject {
    
    constructor(x,y,z,radius=30, color=0xffffff){
        super();
        let initialSpeed = getRandom(30,53.5);
        let speed = new THREE.Vector3(initialSpeed*getRandom(-1,1),0,initialSpeed*getRandom(-1,1));
        //speed.normalize();
        this.userData ={Speed:speed}
        //material = new THREE.MeshBasicMaterial({color: 0xff0000, wireframe:true});
        this.color = color;
        this.radius = radius;
        this.addSphere(x,y,z);

    }



    addSphere(x,y,z) {
        'use scrict';

        let geometry = new THREE.SphereGeometry(this.radius,30,30);
        let material = new THREE.MeshBasicMaterial({ color: this.color, wireframe: true});
        let mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(x,y,z);
        this.add(mesh);
    }

    updateMovement(delta){

        /* SpeedCap 
        if (this.userData.Speed < speedCap)
            this.userData.Speed += acceleration;
        */
        this.oldPosition = this.position;
        let newPosition = new THREE.Vector3( this.position.x + (this.userData.Speed.x) * delta, 
                                            this.position.y, 
                                            this.position.z + (this.userData.Speed.z) *delta);
        //console.log(this.position);
        

        return newPosition;
    }

    applyMovement(newPosition){
        this.position.x = newPosition.x;
        this.position.y = newPosition.y;
        this.position.z = newPosition.z;
    }
}
