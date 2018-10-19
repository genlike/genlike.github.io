class Scenery extends THREE.Scene{
    
    constructor(){
        super();
        this.frustumSize = 150;
        
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
        let numberOfBalls = 5;
        let tableWidth = 150; 

        //table of colors
        let colors = [
            0xff0000,0x800000,0xffff00,0x808000,0xffffff,
            0x008000,0x00ffff,0x008080,0x0000ff,0x000080
        ]

        this.add(new THREE.AxisHelper(40));
        
        this.poolTable = new PoolTable(0,0,0,tableWidth);
        this.balls = [];

        this.add(this.poolTable);
        
        for(let i = 0; i<numberOfBalls; i++){
            let randomZ = getRandom(-tableWidth/2+this.poolTable.wallWidth+this.poolTable.wallHeight/2,tableWidth/2-this.poolTable.wallWidth-this.poolTable.wallHeight/2);
            let randomX = getRandom(-tableWidth/4+this.poolTable.wallWidth+this.poolTable.wallHeight/2,tableWidth/4-this.poolTable.wallWidth-this.poolTable.wallHeight/2);
            let b = new Ball(0,0,0,this.poolTable.wallHeight/2,colors[i]);
            
            b.position.add(new THREE.Vector3(randomX, this.poolTable.wallHeight/2, randomZ));

            /*let direction = Math.random()*2*Math.PI;
            b.rotateY(direction);*/
            this.balls.push(b);
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
