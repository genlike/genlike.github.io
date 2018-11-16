class Scenery extends THREE.Scene {

    constructor() {
        super();
        this.frustumSize = 150;
        this.renderer = new THREE.WebGLRenderer({
            antialias: true
        });

        this.clock = new THREE.Clock();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(this.renderer.domElement);

        this.background = new THREE.Color(0x232323);

        this.createScene();
        this.createCamera();
        this.createPerspectiveCamera();
        // this.createSpotLights();
        this.createDirectionalLight();
        this.currCamera = this.Pcamera;
		this.createCameraControl();
    }
	
	
	createCameraControl(){
		this.controls = new THREE.OrbitControls( this.currCamera);
	}

	

    createChessBoard() {

        let geo = new THREE.BoxGeometry(200, 5, 200);

        geo.normalsNeedUpdate = true;
        let mat = new THREE.MeshPhongMaterial({color: 0x303030});

        let texture = new THREE.TextureLoader().load("textures/CG1.jpg");
        // texture.wrapS = THREE.RepeatWrapping;
        // texture.wrapT = THREE.RepeatWrapping;
        geo.faceVertexUvs[0] = [];
        for (let i = 0; i < geo.faces.length; i++) {
            geo.faceVertexUvs[0].push([
                new THREE.Vector2(0, 0),
                new THREE.Vector2(0, 0),
                new THREE.Vector2(0, 0),
            ]);
        }
        // Map texture to upper face
        geo.faceVertexUvs[0][4][0].set(0, 1);
        geo.faceVertexUvs[0][4][1].set(0, 0);
        geo.faceVertexUvs[0][4][2].set(1, 1);
        geo.faceVertexUvs[0][5][0].set(0, 0);
        geo.faceVertexUvs[0][5][1].set(1, 0);
        geo.faceVertexUvs[0][5][2].set(1, 1);

        texture.minFilter = THREE.LinearFilter;
        mat.map = texture;

        mat.shininess = 30;
        mat.flatShading = THREE.SmoothShading;
        mat.needsUpdate = true;
        geo.computeFaceNormals();

        let obj = new THREE.Mesh(geo, mat);
        return obj;
    }

    createFloor() {

        let geo = new THREE.BoxGeometry(530, 1, 530);
        let mat = new THREE.MeshPhongMaterial({color: 0x727171});
        mat.shininess = 30;
        mat.flatShading = THREE.SmoothShading;
        mat.needsUpdate = true;
        geo.computeFaceNormals();
        let obj = new THREE.Mesh(geo, mat);
        obj.position.add(new THREE.Vector3(0, -3, 0));
        return obj;


    }

    createWalls() {

        let wallWidth = 400;
        let wallHeight = 330;
        let wallDepth = 1;
        let wallDistance = 200;

        // WALL 1
        let geo = new THREE.BoxGeometry(wallWidth, wallHeight, wallDepth);
        let mat = new THREE.MeshPhongMaterial({color: 0x383838});
        mat.shininess = 30;
        mat.flatShading = THREE.SmoothShading;
        mat.needsUpdate = true;
        geo.computeFaceNormals();
        let obj = new THREE.Mesh(geo, mat);
        obj.position.add(new THREE.Vector3(0, 0, wallDistance));
        this.add(obj);

        // WALL 2
        let geo2 = new THREE.BoxGeometry(wallDepth, wallHeight, wallWidth);
        let mat2 = new THREE.MeshPhongMaterial({color: 0x383838});
        mat2.shininess = 30;
        mat2.flatShading = THREE.SmoothShading;
        mat2.needsUpdate = true;
        geo.computeFaceNormals();
        let obj2 = new THREE.Mesh(geo2, mat2);
        obj2.position.add(new THREE.Vector3(wallDistance, 0, 0));
        this.add(obj2);

        // WALL 3
        let geo3 = new THREE.BoxGeometry(wallWidth, wallHeight, wallDepth);
        let mat3 = new THREE.MeshPhongMaterial({color: 0x383838});
        mat3.shininess = 30;
        mat3.flatShading = THREE.SmoothShading;
        mat3.needsUpdate = true;
        geo3.computeFaceNormals();
        let obj3 = new THREE.Mesh(geo3, mat3);
        obj3.position.add(new THREE.Vector3(0, 0, -wallDistance));
        this.add(obj3);


        // WALL 4
        let geo4 = new THREE.BoxGeometry(wallDepth, wallHeight, wallWidth);
        let mat4 = new THREE.MeshPhongMaterial({color: 0x383838});
        mat4.shininess = 30;
        mat4.flatShading = THREE.SmoothShading;
        mat4.needsUpdate = true;
        geo.computeFaceNormals();
        let obj4 = new THREE.Mesh(geo4, mat4);
        obj4.position.add(new THREE.Vector3(-wallDistance, 0, 0));

        this.add(obj4);


    }


    createScene() {

        this.board = this.createChessBoard();
        this.add(this.board);
        this.test = this.board;
        this.floor = this.createFloor();
        this.add(this.floor);

        this.createWalls();
		this.ball = new Ball(0,10,30);
		this.add(this.ball);

        let light = new THREE.PointLight(0xffffff, 2);
        light.position.set(0, 100, 0);
        light.add(new THREE.AxesHelper(10));
        this.add(light)

    }

    moveCamera(x, y, z) {

        this.currCamera.position.x = x;
        this.currCamera.position.y = y;
        this.currCamera.position.z = z;
        this.currCamera.lookAt(this.position);
    }


    createCamera() {

        let aspect = window.innerWidth / window.innerHeight;
        this.camera = new THREE.OrthographicCamera(this.frustumSize * aspect / -2, this.frustumSize * aspect / 2, this.frustumSize / 2, this.frustumSize / -2, 1, 1000);

        // camera = new THREE.OrthographicCamera( 45 / - 2, 45 / 2, 45 / 2, 45 / - 2, 1, 2000); //Ainda nao estao as 3 camaras,


        this.camera.position.x = 0;
        this.camera.position.y = 100;
        this.camera.position.z = 0;

        this.camera.lookAt(this.position);

    }

    createPerspectiveCamera() {

        this.Pcamera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);

        this.Pcamera.position.x = -150;
        this.Pcamera.position.y = 150;
        this.Pcamera.position.z = 0;
        this.Pcamera.lookAt(new THREE.Vector3(0, 0, 0));

    }


    render() {

        this.renderer.render(this, this.currCamera);

    }

    moveCamera(x, y, z) {
        this.currCamera.position.x = x;
        this.currCamera.position.y = y;
        this.currCamera.position.z = z;
        this.currCamera.lookAt(this.position);
    }

    createDirectionalLight() {

        this.defaultIntensity_d = 2;
        this.directionalLight = new THREE.DirectionalLight(0xffffff, this.defaultIntensity_d);

        this.add(this.directionalLight);
        this.directionalLight.position.set(-2 * this.slightBasePos, 2 * this.slightHeight, 2 * this.slightBasePos);

        let axisHelper = new THREE.AxesHelper(5);
        this.directionalLight.add(axisHelper);

    }

    slightToggle(i) {
        if (this.slights[i - 1].intensity === 0) {
            this.slights[i - 1].intensity = this.defaultIntensity_s;
        } else {
            this.slights[i - 1].intensity = 0;
        }
    }
}

