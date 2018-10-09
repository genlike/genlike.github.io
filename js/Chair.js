const acceleration = 4;
const speedCap = 50;
const angularAcceleration = 2*Math.PI*0.01;
const angularSpeedCap = 2 * Math.PI * 4;
const torusRadius = 0.3;

class Chair extends GraphicalObject {

    constructor(x,y,z,numberLegs=3,wheelCenterDistance=3.4, color=0x00ff00){
        super();
        this.chair_top = new GraphicalObject();
        this.chair_bottom = new GraphicalObject();
        this.chair_wheels = new GraphicalObject();

        this.userData = { Speed: 0, rotationSpeed: 0};
        //let material = new THREE.MeshBasicMaterial({color: color, wireframe:true});

        // Bottom Section
        let n=numberLegs;
        //Initial position of first wheel
        let rotation = 3*Math.PI / 2;
        for(let i=0;i<n;i++){
            rotation += (2*Math.PI)/n
            // Position and rotation around Y axis
            
            this.addChairWheel(this.chair_wheels, x + wheelCenterDistance * Math.cos(rotation), y - 8, z - wheelCenterDistance * Math.sin(rotation), Math.PI/2);

            // Position, rotation around Y axis and leg length
            this.addChairWheelSupport(this.chair_bottom, x + (wheelCenterDistance / 2) * Math.cos(rotation), y - 7.7, z - (wheelCenterDistance / 2) * Math.sin(rotation), rotation, wheelCenterDistance);
        }
        this.chair_bottom.add(this.chair_wheels);

        //Center Section
        this.addChairCenterPiece(this.chair_bottom,x,y-1,z);


        //ChairSection
        this.addChairSeat(this.chair_top,x,y-2,z);
        this.addChairBack(this.chair_top,x,y-2,z);


        //Adding to the scene
        this.add(this.chair_top);
        this.add(this.chair_bottom);
    }

    addChairSeat(obj,x,y,z){
        'use strict';
        let geometry = new THREE.CubeGeometry(5, 1, 5);
        let material = new THREE.MeshBasicMaterial({ color: 0xff00ff, wireframe: true });
        let mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(x, y-2, z);
        obj.add(mesh);
    }

    addChairBack(obj, x, y, z) {
        'use strict';
        let geometry = new THREE.CubeGeometry(5, 5, 1);
        let material = new THREE.MeshBasicMaterial({ color: 0xff00ff, wireframe: true });
        let mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(x, y, z-3);
        obj.add(mesh);
    }


    addChairCenterPiece(obj, x,y,z){
        'use strict';
        let geometry = new THREE.CubeGeometry(1, 3, 1);
        let material = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true });
        let mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(x, y-5, z);
        obj.add(mesh);
    }

    addChairWheel(obj,x,y,z,rad){
        'use strict';
    
        let geometry = new THREE.TorusGeometry(torusRadius, 0.2, 16, 100);
        let material = new THREE.MeshBasicMaterial({ color: 0xffff00 , wireframe: true});
        let mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(x,y,z);
        mesh.rotateY(rad);
        mesh.add(new THREE.AxisHelper(5));
        obj.add(mesh);
    }

    addChairWheelSupport(obj, x, y, z, rad, length) {
        'use strict';

        let geometry = new THREE.CubeGeometry(length+0.4, 0.2, 1);
        let material = new THREE.MeshBasicMaterial({ color: 0xffff00, wireframe: true });
        let mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(x, y, z);
        mesh.rotateY(rad);
        obj.add(mesh);
    }
    rotateChair( Right=true){
        if (Right && this.userData.rotationSpeed > -angularSpeedCap){
            this.userData.rotationSpeed -= angularAcceleration;
        }
        
        if (!Right && this.userData.rotationSpeed < angularSpeedCap){
            this.userData.rotationSpeed += angularAcceleration;
        }

    }

    rotateWheels(direction){
        this.chair_wheels.children.forEach( wheel => {
    
            let wheelDirection = new THREE.Vector3();
            wheel.getWorldDirection(wheelDirection);
            let angle = wheelDirection.angleTo(direction);
            //console.log(wheel);
            wheel.rotation.y += angle+Math.PI/2;
            wheel.rotation.z += this.userData.Speed/torusRadius;
        });
        this.chair_wheels.children
    }
    moveChair( Forward=true){

        if (Forward && this.userData.Speed > -speedCap)
            this.userData.Speed -= acceleration
        if (!Forward && this.userData.Speed < speedCap)
            this.userData.Speed += acceleration
    }

    updateMovement(delta){
        /* atrito movimentacao */
        if (Math.abs(this.userData.rotationSpeed) > 0) {
            if (this.userData.rotationSpeed < 0) {
                this.userData.rotationSpeed += angularAcceleration / (2.3);
            } else {
                this.userData.rotationSpeed -= angularAcceleration / (2.3);
            }
        }
    
        this.chair_top.rotateY(this.userData.rotationSpeed*delta);
        /* atrito translacao */ 
        if (Math.abs(this.userData.Speed) > 0) {
            if (this.userData.Speed < 0) {
                this.userData.Speed += acceleration/4; 
            } else { 
                this.userData.Speed -= acceleration/4; 
            }
        }

        let chairDirection = new THREE.Vector3();
        this.chair_top.getWorldDirection(chairDirection);

        this.position.add(new THREE.Vector3((this.userData.Speed * chairDirection.x) * delta, 0, (this.userData.Speed * chairDirection.z) *delta ));
		if (Math.abs(this.userData.Speed)>0.01)
			this.rotateWheels(chairDirection);

    }
}
