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
        this.createPerspectiveCamera();
        this.createCloseUpCamera();
        this.currCamera = this.camera;
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

        //table of colors
        let colors = [
            0xff0000,0x880000,0xffff00,0x808000,0xffffff,
            0x008000,0x00ffff,0x008080,0x0000ff,0xFF00FF
        ]

        //this.add(new THREE.AxisHelper(40));

        this.poolTable = new PoolTable(0,0,0,tableWidth);
        this.balls = [];

        this.add(this.poolTable);

        for(let i = 0; i<numberOfBalls; i++){
            let randomZ = getRandom(-tableWidth/2+this.poolTable.wallWidth+this.poolTable.wallHeight/2,tableWidth/2-this.poolTable.wallWidth-this.poolTable.wallHeight/2);
            let randomX = getRandom(-tableWidth/4+this.poolTable.wallWidth+this.poolTable.wallHeight/2,tableWidth/4-this.poolTable.wallWidth-this.poolTable.wallHeight/2);
            let b = new Ball(0,0,0,this.poolTable.wallHeight/2,colors[i]);

            b.position.add(new THREE.Vector3(randomX, this.poolTable.wallHeight/2, randomZ));
            this.balls.forEach(ball => {
                do {
                    let rDist = (ball.radius + b.radius)**2;
                    let ballDist = (b.position.x - ball.position.x)**2 + (b.position.z - ball.position.z)**2;
                    if (rDist < ballDist){
                        break;
                    }
                    randomZ = getRandom(-tableWidth/2+this.poolTable.wallWidth+this.poolTable.wallHeight/2,tableWidth/2-this.poolTable.wallWidth-this.poolTable.wallHeight/2);
                    randomX = getRandom(-tableWidth/4+this.poolTable.wallWidth+this.poolTable.wallHeight/2,tableWidth/4-this.poolTable.wallWidth-this.poolTable.wallHeight/2);
                    b.position.x = randomX;
                    b.position.z = randomZ;
                }while (true)

            });


            this.balls.push(b);
            this.add(this.balls[i]);
    }


      /*  let a = new Ball(0,this.poolTable.wallHeight/2,0,this.poolTable.wallHeight/2,colors[0]);
        let b = new Ball(0,this.poolTable.wallHeight/2,0,this.poolTable.wallHeight/2,colors[1]);
        a.userData.Speed = new THREE.Vector3(0,0,-10);
        b.userData.Speed = new THREE.Vector3(0,0,10);
        a.position.add(new THREE.Vector3(0,0,20));
        b.position.add(new THREE.Vector3(0,0,-20));
        this.balls.push(a);
        this.add(this.balls[0]);
        this.balls.push(b);
        this.add(this.balls[1]);*/



    }


    createCamera() {

        let  aspect = window.innerWidth / window.innerHeight;
        this.camera = new THREE.OrthographicCamera( this.frustumSize * aspect / - 2, this.frustumSize * aspect / 2, this.frustumSize / 2, this.frustumSize / - 2, 1, 1000 );

        // camera = new THREE.OrthographicCamera( 45 / - 2, 45 / 2, 45 / 2, 45 / - 2, 1, 2000); //Ainda nao estao as 3 camaras,


        this.camera.position.x = 0;
        this.camera.position.y = 100;
        this.camera.position.z = 0;

        this.camera.lookAt(this.position);

    }

    createPerspectiveCamera() {

        this.Pcamera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000 );

        this.Pcamera.position.x = 100;
        this.Pcamera.position.y = 100;
        this.Pcamera.position.z = 100;

    }

    createCloseUpCamera(){
        this.closeCamera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000 );

        this.balls[0].add(this.closeCamera);
        this.closeCamera.position.x = 15;
        this.closeCamera.position.y = 25;
        this.closeCamera.position.z = 15;


    }

    render() {

        this.renderer.render(this, this.currCamera);

    }
    moveCamera(x,y,z){
        this.camera.position.x = x;
        this.camera.position.y = y;
        this.camera.position.z = z;
        this.camera.lookAt(this.position);
    }
}
