class Lamp extends GraphicalObject {
    constructor(x,y,z,radius=30){
        super();

        //material = new THREE.MeshBasicMaterial({color: 0xff0000, wireframe:true});
        this.radius = radius;
        this.addLampBase(x,y ,z);
        this.addLampPole(x, y + 5.266, z);
        this.addLampSphere(x,y+10.5,z);
        this.addLampCover(x,y+10.5,z);

    }

    addLampSphere(x,y,z) {
        'use scrict';

        let geometry = new THREE.SphereGeometry(0.58,20,20);
        let material = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true});
        let mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(x,y,z);
        this.add(mesh);
    }

    addLampCover(x,y,z) {
        'use scrict';

        let geometry = new THREE.BoxGeometry(3.21,3.21,0.14);
        let material = new THREE.MeshBasicMaterial({ color: 0xffff00, wireframe: true});
        let mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(x,y,z+1.55);
        this.add(mesh);

        geometry = new THREE.BoxGeometry(3.21,3.21,0.14);
        material = new THREE.MeshBasicMaterial({ color: 0xffff00, wireframe: true});
        mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(x,y,z-1.55);
        this.add(mesh);

        geometry = new THREE.BoxGeometry(3.21,3.21,0.14);
        material = new THREE.MeshBasicMaterial({ color: 0xffff00, wireframe: true});
        mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(x+1.55,y,z);
        mesh.rotateY(Math.PI / 2);
        this.add(mesh);

        geometry = new THREE.BoxGeometry(3.21,3.21,0.14);
        material = new THREE.MeshBasicMaterial({ color: 0xffff00, wireframe: true});
        mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(x-1.55,y,z);
        mesh.rotateY(Math.PI / 2);
        this.add(mesh);

    }
}
