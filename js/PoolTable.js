class PoolTable extends GraphicalObject {
	constructor(x,y,z,width=150){
		super();
		this.width = width;
		this.length = width/2;
		this.wallWidth = 1;
		this.wallHeight = Math.sqrt(this.wallWidth**2 + this.length**2)/10;
		this.addTableFloor(this,x,y-1,z);
		this.addTableBigWall(this, x - this.length/2+this.wallWidth/2, y+this.wallHeight/2, z);
		this.addTableBigWall(this, x + this.length/2-this.wallWidth/2, y+this.wallHeight/2, z);
		this.addTableSmallWall(this, x, y+this.wallHeight/2, z - this.width/2+this.wallWidth/2);
		this.addTableSmallWall(this, x, y+this.wallHeight/2, z + this.width/2-this.wallWidth/2 );
	}

	addTableFloor(obj,x,y,z) {
		'use scrict';
		let geometry = new THREE.CubeGeometry(this.length,2,this.width);
		let material = new THREE.MeshBasicMaterial({ color: 0x50ff50, wireframe: true});
		let mesh = new THREE.Mesh(geometry, material);
		mesh.position.set(x,y,z);
		obj.add(mesh);
	}

	addTableBigWall(obj,x,y,z) {
		'use scrict';
		
		let geometry = new THREE.CubeGeometry(this.wallWidth,this.wallHeight,this.width);
		let material = new THREE.MeshBasicMaterial({ color: 0x8B4513, wireframe: true});
		let mesh = new THREE.Mesh(geometry, material);
		mesh.position.set(x,y,z);
		obj.add(mesh);
	}
	addTableSmallWall(obj,x,y,z) {
		'use scrict';

		let geometry = new THREE.CubeGeometry(this.length,this.wallHeight,this.wallWidth);
		let material = new THREE.MeshBasicMaterial({ color: 0x8B4513, wireframe: true});
		let mesh = new THREE.Mesh(geometry, material);
		mesh.position.set(x,y,z);
		obj.add(mesh);
	}
}