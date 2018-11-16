class Holofote extends GraphicalObject {

	constructor(color=0xff00ff){
		super();
		this.color = color;
		this.addSphere();
		this.addCone();
		
	}
	
	addSphere() {
        'use scrict';

        let geometry = new THREE.SphereGeometry(5,30,10);
        let material = new THREE.MeshStandardMaterial({ color: this.color, wireframe: false});
        let mesh = new THREE.Mesh(geometry, material);
        //mesh.position.set(x,y,z);
        //mesh.add(new THREE.AxisHelper(10));
        this.add(mesh);
    }
	
	
	addCone() {
        'use scrict';

        let geometry = new THREE.ConeBufferGeometry(5.4, 6, 25, 1, 0, 0, 8);
        let material = new THREE.MeshStandardMaterial({ color:  this.color, wireframe: false});
        let mesh = new THREE.Mesh(geometry, material);
        mesh.position.add(new THREE.Vector3(0,-6,0));
        //mesh.add(new THREE.AxisHelper(10));
        this.add(mesh);
    }
}