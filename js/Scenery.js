class Scenery extends THREE.Scene{

    constructor(){
        super();
        this.frustumSize = 50;

        this.buttonUP = false;
        this.buttonDOWN = false;
        this.buttonRIGHT = false;
        this.buttonLEFT = false;

        this.renderer = new THREE.WebGLRenderer({
            antialias: true
        });

        this.clock = new THREE.Clock();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(this.renderer.domElement);

        this.createScene();
        this.createCamera();

    }



    createScene() {

        this.add(new THREE.AxisHelper(40));
        this.chair = new Chair(0,5,0);
        this.add(this.chair);
        //createChair(0,5,0,3);
        //createTable(0,5,12);

        //createLamp(13,-3.5,5);
        this.add(new Table(0,5,12));
        this.add(new Lamp(13,-3.5,5));

    }


    createCamera() {

        let  aspect = window.innerWidth / window.innerHeight;
        this.camera = new THREE.OrthographicCamera( this.frustumSize * aspect / - 2, this.frustumSize * aspect / 2, this.frustumSize / 2, this.frustumSize / - 2, 1, 1000 );

        // camera = new THREE.OrthographicCamera( 45 / - 2, 45 / 2, 45 / 2, 45 / - 2, 1, 2000); //Ainda nao estao as 3 camaras,


        this.camera.position.x = 100 ;
        this.camera.position.y = 100 ;
        this.camera.position.z = 100 ;

        this.camera.lookAt(this.position);

    }

    render() {

        this.renderer.render(this, this.camera);
    }
    moveCamera(x,y,z){
        this.camera.position.x = x;
        this.camera.position.y = y;
        this.camera.position.z = z;
        this.camera.lookAt(this.position);    
    }
}
