class Table extends GraphicalObject {
	
	constructor(x,y,z){
		super();

		this.addTableTop(this,x,y,z);
		this.addTableSupports(this, x - 7, y - 5, z - 4.3); 
		this.addTableSupports(this, x + 7, y - 5, z + 4.6);
		this.addTableSupports(this, x + 7, y - 5, z - 4.6);
		this.addTableSupports(this, x - 7, y - 5, z + 4.6);
		
	}

	addTableTop(obj,x,y,z) {	
		'use scrict';

		let geometry = new THREE.CubeGeometry(15,1,10);
		let material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true});
		let mesh = new THREE.Mesh(geometry, material);
		mesh.position.set(x,y - 1,z);
		obj.add(mesh);
	}

	addTableSupports(obj,x,y,z) {
		'use scrict';

		let geometry = new THREE.CylinderGeometry(0.5,0.5,7);
		let material = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true});
		let mesh = new THREE.Mesh(geometry, material);
		mesh.position.set(x,y,z);
		obj.add(mesh);
	}
}