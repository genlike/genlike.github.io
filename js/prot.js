var scenery;

var buttonUP, buttonDOWN, buttonLEFT, buttonRIGHT;


var wheelCamera = false;


function init(){
    scenery = new Scenery();
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup",onKeyUp);
    window.addEventListener("resize", onResize);
}

function animate() {
    'use strict';

    let delta = scenery.clock.getDelta();
    scenery.tempballs = scenery.balls.slice(1);
    scenery.balls.forEach(ball => {
       let newPosition = ball.updateMovement(delta);
       //console.log(newPosition.x+ball.radius );
       // console.log(newPosition.x+ball.radius + "| |" + (scenery.poolTable.length/2 - scenery.poolTable.wallWidth/2));
       if (newPosition.x+ball.radius > scenery.poolTable.length/2 - scenery.poolTable.wallWidth/2 || newPosition.x - ball.radius  < -scenery.poolTable.length/2 + scenery.poolTable.wallWidth/2){
        //console.log(newPosition.x+ball.radius );
            newPosition = ball.oldPosition;
            ball.userData.Speed.x = -ball.userData.Speed.x;
        }
      if (newPosition.z+ball.radius > scenery.poolTable.width/2 - scenery.poolTable.wallWidth/2 || newPosition.z - ball.radius < -scenery.poolTable.width/2 + scenery.poolTable.wallWidth/2){
      //  console.log("Vertical");
        ball.userData.Speed.z = -ball.userData.Speed.z;
        newPosition = ball.oldPosition;
    }

     //console.log(scenery.tempballs);
      scenery.tempballs.forEach(tempball => {
        let rDist = (ball.radius + tempball.radius)**2;
        let ballDist = (newPosition.x - tempball.position.x)**2 + (newPosition.z - tempball.position.z)**2

        if (rDist >= ballDist){
            let SpeedInitialB1 = new THREE.Vector3(ball.userData.Speed.x,0,ball.userData.Speed.z);
            let subSpeeds = new THREE.Vector3(ball.userData.Speed.x,0,ball.userData.Speed.z);
            let SpeedInitialB2 = new THREE.Vector3(tempball.userData.Speed.x,0,tempball.userData.Speed.z);
            subSpeeds.sub(SpeedInitialB2);

            let subCenters = new THREE.Vector3(ball.position.x,ball.position.y,ball.position.z);
            subCenters.sub(tempball.position);

            let squaredLength = subCenters.lengthSq();
            let a = (subSpeeds.dot(subCenters))/squaredLength;
            subCenters.multiplyScalar(a);

            let SpeedFinalB1 = SpeedInitialB1.clone();
            SpeedFinalB1.sub(subCenters);

            ball.userData.Speed = SpeedFinalB1;

            let subSpeeds2 = new THREE.Vector3(tempball.userData.Speed.x,0,tempball.userData.Speed.z);
            subSpeeds2.sub(SpeedInitialB1);

            let subCenters2 = new THREE.Vector3(tempball.position.x,tempball.position.y,tempball.position.z);
            subCenters2.sub(ball.oldPosition);

            let squaredLength2 = subCenters2.lengthSq();
            let b = (subSpeeds2.dot(subCenters2))/squaredLength2;
            subCenters2.multiplyScalar(b);

            let SpeedFinalB2 = SpeedInitialB2.clone();
            SpeedFinalB2.sub(subCenters2);

            tempball.userData.Speed = SpeedFinalB2;

        }

      });
      scenery.tempballs.shift();
      //console.log(ball)
      ball.applyMovement(newPosition);

    });


////////////////////////////////////////////
/*    if (wheelCamera) {
        let wheelPos = scenery.chair.chair_wheels.children[0];
        let distance = 2;
        let vec = new THREE.Vector3();
        let vec2 = new THREE.Vector3();
        wheelPos.getWorldPosition(vec);
        wheelPos.getWorldDirection(vec2);
        scenery.camera.position.x = vec.x + vec2.x *distance ;
        scenery.camera.position.y = vec.y + vec2.y *distance;
        scenery.camera.position.z = vec.z + vec2.z*distance;
        scenery.camera.lookAt(vec);
    }
*/
/////////////////////////////////////////////


    setTimeout(function () {
        requestAnimationFrame(animate);
    }, 1000 / 60);

    scenery.render();

    }

    function onResize() {


        // let aspect = window.innerWidth / window.innerHeight;



        // scenery.camera.left   = -scenery.frustumSize * aspect / 2;
        // scenery.camera.right  = scenery.frustumSize * aspect / 2;
        // scenery.camera.top    = scenery.frustumSize / 2;
        // scenery.camera.bottom = -scenery.frustumSize / 2;

        scenery.camera.aspect = window.innerWidth / window.innerHeight;
        scenery.camera.updateProjectionMatrix();
        scenery.renderer.setSize( window.innerWidth, window.innerHeight );

        // renderer.setSize(window.innerWidth, window.innerHeight);
        //
        // if (window.innerHeight > 0 && window.innerWidth > 0) {
        //     camera.aspect = window.innerWidth / window.innerHeight;
        //     camera.updateProjectionMatrix();
        // }

    }

    function onKeyUp(e){
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
