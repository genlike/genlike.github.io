class Scenery {

    constructor(){
        this.acceleration = 4;
        this.speedCap = 50;
        this.speedCap = 50;
        this.angularAcceleration = 2*Math.PI*0.01;
        this.angularSpeedCap = 2 * Math.PI * 4;
        this.frustumSize = 50;

        renderer = new THREE.WebGLRenderer({
            antialias: true
        });

        clock = new THREE.Clock();
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        this.createScene();
        this.createCamera();
        chair.userData.xSpeed = 0;
        window.addEventListener("keydown", this.onKeyDown);
        window.addEventListener("keyup",this.onKeyUp);
        window.addEventListener("resize", this.onResize);
    }



    createScene() {

        scene = new THREE.Scene();

        scene.add(new THREE.AxisHelper(40));

        createChair(0,5,0,3);
        createTable(0,5,12);

        //createLamp(13,-3.5,5);

        scene.add(new Lamp(13,-3.5,5));

    }


    createCamera() {

        var aspect = window.innerWidth / window.innerHeight;
        camera = new THREE.OrthographicCamera( this.frustumSize * aspect / - 2, this.frustumSize * aspect / 2, this.frustumSize / 2, this.frustumSize / - 2, 1, 1000 );

        // camera = new THREE.OrthographicCamera( 45 / - 2, 45 / 2, 45 / 2, 45 / - 2, 1, 2000); //Ainda nao estao as 3 camaras,


        camera.position.x = 100 ;
        camera.position.y = 100 ;
        camera.position.z = 100 ;

        camera.lookAt(scene.position);

    }


    onResize() {


        var aspect = window.innerWidth / window.innerHeight;
        camera.left   = - frustumSize * aspect / 2;
        camera.right  =   frustumSize * aspect / 2;
        camera.top    =   frustumSize / 2;
        camera.bottom = - frustumSize / 2;
        camera.updateProjectionMatrix();
        renderer.setSize( window.innerWidth, window.innerHeight );


        // renderer.setSize(window.innerWidth, window.innerHeight);
        //
        // if (window.innerHeight > 0 && window.innerWidth > 0) {
        //     camera.aspect = window.innerWidth / window.innerHeight;
        //     camera.updateProjectionMatrix();
        // }

    }


    render() {

        renderer.render(scene, camera);
    }

     animate() {
        'use strict';

        let delta = clock.getDelta();
        if (buttonDOWN && chair.userData.xSpeed > -speedCap)
            chair.userData.xSpeed -= acceleration ;

        if (buttonUP && chair.userData.xSpeed < speedCap)
            chair.userData.xSpeed += acceleration ;

        if (buttonRIGHT && chair.userData.zSpeed > -angularSpeedCap/*-speedCap*/){
                chair.userData.rotationSpeed -= angularAcceleration;
            }
            //chair.userData.zSpeed -= acceleration ;

        if (buttonLEFT && chair.userData.zSpeed < angularSpeedCap/*speedCap*/){
            chair.userData.rotationSpeed += angularAcceleration;
        }
            //chair.userData.zSpeed += acceleration ;


            if (Math.abs(chair.userData.xSpeed) > 0) {
                if (chair.userData.xSpeed < 0) {
                    chair.userData.xSpeed += acceleration/4;
                } else {
                    chair.userData.xSpeed -= acceleration/4;
                }
                if (Math.abs(chair.userData.xSpeed) <= acceleration/4)
                chair.userData.xSpeed = 0;
            }
            /*
            if (Math.abs(chair.userData.zSpeed) > 0) {
                if (chair.userData.zSpeed < 0) {
                    chair.userData.zSpeed += acceleration / 4;
                } else {
                    chair.userData.zSpeed -= acceleration / 4;
                }
                if (Math.abs(chair.userData.zSpeed) <= acceleration / 4)
                chair.userData.zSpeed = 0;
            }
            */


           if (Math.abs(chair.userData.rotationSpeed) > 0) {
               if (chair.userData.rotationSpeed < 0) {
                   chair.userData.rotationSpeed += angularAcceleration / 4;
                } else {
                    chair.userData.rotationSpeed -= angularAcceleration / 4;
                }
                if (Math.abs(chair.userData.rotationSpeed) <= angularAcceleration / 4)
                chair.userData.rotationSpeed = 0;
            }

            let chair_top = chair.getObjectByName("chair_top");
    		chair_top.rotateY(chair.userData.rotationSpeed*delta);

            //let matrix4 = (THREE.Matrix4) chair.position.matrix;
            let chairDirection = new THREE.Vector3();
            chair_top.getWorldDirection(chairDirection);


            chair.position.add(new THREE.Vector3((chair.userData.xSpeed * chairDirection.x) * delta, 0, (chair.userData.xSpeed * chairDirection.z) *delta ));
    		//if (Math.abs(chair.userData.xSpeed)>0.01) //TODO
    			//rotateWheels(chair, chairDirection);

            var test = this;
            setTimeout(function () {
                requestAnimationFrame(function(){

                    test.animate();
                });
            }, 1000 / 60);




            this.render();

        }



        onKeyUp(e) {
            switch (e.keyCode) {
                case 38:
                    buttonUP = false;
                    break;
                case 40:
                    buttonDOWN = false;
                    break;
                case 39:
                    buttonRIGHT = false;
                    break;
                case 37:
                    buttonLEFT = false;
                    break;
            }
        }


        onKeyDown(e) {
            'use strict';

        /*
        Arrow Type  Alt Code
        UP          38
        RIGHT       39
        DOWN        40
        LEFT        37
        1           49
        2           50
        3           51
        4           52
        */

            switch (e.keyCode) {
            case 38:
                buttonUP = true;
                break;
            case 40:
                buttonDOWN = true;
                break;
            case 39:
                buttonRIGHT = true;
                break;
            case 37:
                buttonLEFT = true;
                break;
            case 65: //A
            case 97: //a
                scene.traverse(function (node) {
                    if (node instanceof THREE.Mesh) {
                        node.material.wireframe = !node.material.wireframe;

                    }
                });
                break;
            case 83:  //S
            //case 115: //s
                //ball.userData.jumping = !ball.userData.jumping;
                //break;
            case 69:  //E
            case 101: //e
                scene.traverse(function (node) {
                    if (node instanceof THREE.AxisHelper) {
                        node.visible = !node.visible;
                    }
                });
                break;

            case  49: // 1
                camera.position.x = 100 ;
                camera.position.y = 0;
                camera.position.z = 0;
                camera.lookAt(scene.position);
                break;
            case  50: // 2
                camera.position.x = 0;
                camera.position.y = 100 ;
                camera.position.z = 0;
                camera.lookAt(scene.position);
                break;
            case  51: // 3
                camera.position.x = 0;
                camera.position.y = 0;
                camera.position.z = 100 ;
                camera.lookAt(scene.position);
                break;
            case  52: // 4
                camera.position.x = 100 ;
                camera.position.y = 100 ;
                camera.position.z = 100;
                camera.lookAt(scene.position);
                break;
            }
        }


}
