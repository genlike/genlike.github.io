class Scenery extends THREE.Scene{
    
    constructor(){
        super();
        this.frustumSize = 100;
        
        this.renderer = new THREE.WebGLRenderer({
            antialias: true
        });

        this.clock = new THREE.Clock();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(this.renderer.domElement);

        this.createScene();
        this.createCamera();

    }

    getRandom(min,max){
        'use strict'
        let r = Math.random();
        let interval = (max - min)
        interval = interval*r;
        return min+interval;
    }

    createScene() {
        //General Arguments (z width, x lenght)
        let numberOfBalls = 10;
        let tableWidth = 150; 

        this.add(new THREE.AxisHelper(40));
        
        this.poolTable = new PoolTable(0,0,0,tableWidth);
        this.balls = [];
        this.add(this.poolTable);
        for(let i = 0; i<numberOfBalls; i++){
            let randomZ = this.getRandom(-tableWidth/2+this.poolTable.wallWidth+this.poolTable.wallHeight/2,tableWidth/2-this.poolTable.wallWidth-this.poolTable.wallHeight/2);
            let randomX = Math.random()*(-tableWidth/4+this.poolTable.wallWidth+this.poolTable.wallHeight/2,tableWidth/4-this.poolTable.wallWidth-this.poolTable.wallHeight/2);
            this.balls.push(new Ball(randomX, this.poolTable.wallHeight/2, randomZ,this.poolTable.wallHeight/2));
            this.add(this.balls[i]);
        }
    }


    createCamera() {

        let  aspect = window.innerWidth / window.innerHeight;
        this.camera = new THREE.OrthographicCamera( this.frustumSize * aspect / - 2, this.frustumSize * aspect / 2, this.frustumSize / 2, this.frustumSize / - 2, 1, 1000 );

        // camera = new THREE.OrthographicCamera( 45 / - 2, 45 / 2, 45 / 2, 45 / - 2, 1, 2000); //Ainda nao estao as 3 camaras,


        this.camera.position.x = 100;
        this.camera.position.y = 100;
        this.camera.position.z = 100;

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
