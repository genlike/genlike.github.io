var scenery;

var buttonUP, buttonDOWN, buttonLEFT, buttonRIGHT;

var speedFactor = 1;

var wheelCamera = false;

var lvlUpInterval = 60000;


function init(){
    scenery = new Scenery();
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup",onKeyUp);
    /*Acho que nao podemos ter dois eventos de resize, mas tambem nao podemos passar argumentos na funcao, como fazer?*/
    window.addEventListener("resize", onResize);
    //setLvlUp();
}



function lvlup(){
    scenery.balls.forEach(ball => {
            ball.userData.Speed.multiplyScalar(1.5);
        }); 
    setTimeout(function() {
        lvlup();    
    }, lvlUpInterval);
}

function animate() {
    'use strict';

    let delta = scenery.clock.getDelta();
    scenery.tempballs = scenery.balls.slice(1);
    scenery.balls.forEach(ball => {
       let newPosition = ball.updateMovement(delta);
        ball.applyRotation(delta);

       /*Walls*/
       if (newPosition.x+ball.radius > scenery.poolTable.length/2 - scenery.poolTable.wallWidth/2 ||
        newPosition.x - ball.radius  < -scenery.poolTable.length/2 + scenery.poolTable.wallWidth/2){
            ball.userData.Speed.x = -ball.userData.Speed.x;
            newPosition = ball.oldPosition;
        }

      if (newPosition.z+ball.radius > scenery.poolTable.width/2 - scenery.poolTable.wallWidth/2 || 
        newPosition.z - ball.radius < -scenery.poolTable.width/2 + scenery.poolTable.wallWidth/2){
        
            ball.userData.Speed.z = -ball.userData.Speed.z;
            newPosition = ball.oldPosition;
        }

     /*COLISIONS WITH OTHER BALLS*/
      scenery.tempballs.forEach(tempball => {
        let rDist = (ball.radius + tempball.radius)**2;
        let ballDist = (newPosition.x - tempball.position.x)**2 + (newPosition.z - tempball.position.z)**2
        
        if (rDist >= ballDist){

            let SpeedInitialB1 = ball.userData.Speed.clone();
            let subSpeeds = ball.userData.Speed.clone();
            let SpeedInitialB2 = tempball.userData.Speed.clone();

            subSpeeds.sub(SpeedInitialB2);

            let subCenters = new THREE.Vector3(ball.position.x,ball.position.y,ball.position.z);
            subCenters.sub(tempball.position);

            let squaredLength = subCenters.lengthSq();

            let a = (subSpeeds.dot(subCenters))/squaredLength;
            
            subCenters.multiplyScalar(a);

            let SpeedFinalB1 = SpeedInitialB1.clone();
            SpeedFinalB1.sub(subCenters);



            ball.userData.Speed = SpeedFinalB1;
            let subCenters2 = new THREE.Vector3(tempball.position.x,tempball.position.y,tempball.position.z);
            subCenters2.sub(ball.position);
            subCenters2.multiplyScalar(a);

            let SpeedFinalB2 = SpeedInitialB2.clone();
            SpeedFinalB2.sub(subCenters2);

            tempball.userData.Speed = SpeedFinalB2;
                
            
        }
    });
   
      scenery.tempballs.shift();
      ball.applyMovement(newPosition);

    });


    requestAnimationFrame(animate);
    

    scenery.render();

    }



    function onResize() {

    	if(scenery.currCamera instanceof THREE.OrthographicCamera){
	        let aspect = window.innerWidth / window.innerHeight;
	        scenery.currCamera.left   = -scenery.frustumSize * aspect / 2;
	        scenery.currCamera.right  = scenery.frustumSize * aspect / 2;
	        scenery.currCamera.top    = scenery.frustumSize / 2;
	        scenery.currCamera.bottom = -scenery.frustumSize / 2;
	        scenery.currCamera.updateProjectionMatrix();
	        scenery.renderer.setSize( window.innerWidth, window.innerHeight );
	    }

	    if (scenery.currCamera instanceof THREE.PerspectiveCamera) {
    		scenery.renderer.setSize(window.innerWidth, window.innerHeight);
    
    		if (window.innerHeight > 0 && window.innerWidth > 0) {
      		  scenery.camera.aspect = window.innerWidth / window.innerHeight;
        	  scenery.camera.updateProjectionMatrix();
    		}
	    }

    }



    function onKeyUp(e){
        switch (e.keyCode) {
            case 38:
                speedFactor = speedFactor+0.25;
                console.log(speedFactor);
                buttonUP = false;
                break;
            case 40:
                speedFactor = speedFactor-0.25;
                console.log(speedFactor);
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


    function onKeyDown(e) {
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
            scenery.traverse(function (node) {
                if (node instanceof THREE.Mesh) {
                    node.material.wireframe = !node.material.wireframe;

                }
            });
            break;
        case 83:  //S
        case 69:  //E
        case 101: //e
            scenery.traverse(function (node) {
                if(node instanceof Ball){
                    node.traverse(function (e){
                        if (e instanceof THREE.AxisHelper) {
                            e.visible = !e.visible;
                        }
                    });
                }
            });
        break;

        case  49: // 1
            scenery.currCamera = scenery.camera;
            scenery.moveCamera(0,100,0);
        break;

        case  50: // 2
            scenery.currCamera = scenery.Pcamera;
            scenery.currCamera.lookAt(scenery.position);
            wheelCamera = false;
        break;

        case  51: // 3
            scenery.currCamera = scenery.closeCamera;
            scenery.currCamera.lookAt(new THREE.Vector3(0,0,0));
        break;

        }
    }

    function changeToWheelCamera(){
        'use strict'
        let cam = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 1000 );
        return cam;
    }

    function getRandom(min,max){
        'use strict'

        let r = Math.random();
        let interval = (max - min)
        interval = interval*r;
        return min+interval;
    }
