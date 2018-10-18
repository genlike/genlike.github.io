class Ball extends GraphicalObject {
    constructor(x,y,z,radius=30, color=0xffffff){
        super();

        //material = new THREE.MeshBasicMaterial({color: 0xff0000, wireframe:true});
        this.color = color;
        this.radius = radius;
        this.addLampSphere(x,y,z);
    }

    addLampSphere(x,y,z) {
        'use scrict';

        let geometry = new THREE.SphereGeometry(this.radius,30,30);
        let material = new THREE.MeshBasicMaterial({ color: this.color, wireframe: true});
        let mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(x,y,z);
        this.add(mesh);
    }
}
