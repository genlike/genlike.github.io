var scenery

var buttonUP, buttonDOWN, buttonLEFT, buttonRIGHT;



function init(){
    scenery = new Scenery();
    scenery.render();

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup",onKeyUp);
    window.addEventListener("resize", onResize);
}

function animate() {
    'use strict';
    
    
    //console.log("Running..." + "UP :" + buttonUP+ "DOWN :" + buttonDOWN + "LEFT :" + buttonLEFT + "RIGHT :" + buttonRIGHT);

    let delta = scenery.clock.getDelta();

    if(buttonUP)
        scenery.chair.moveChair(false);
    if (buttonDOWN)
        scenery.chair.moveChair();
    if (buttonLEFT)
        scenery.chair.rotateChair(false);
    if (buttonRIGHT)
        scenery.chair.rotateChair();
    
    scenery.chair.updateMovement(delta);


    var test = this;
    setTimeout(function () {
        requestAnimationFrame(animate);
    }, 1000 / 60);

    scenery.render();

    }

    function onResize() {


        let aspect = window.innerWidth / window.innerHeight;
        scenery.camera.left   = -scenery.frustumSize * aspect / 2;
        scenery.camera.right  = scenery.frustumSize * aspect / 2;
        scenery.camera.top    = scenery.frustumSize / 2;
        scenery.camera.bottom = -scenery.frustumSize / 2;
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
        console.log(e.keyCode);
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
        //case 115: //s
            //ball.userData.jumping = !ball.userData.jumping;
            //break;
        case 69:  //E
        case 101: //e
            scenery.traverse(function (node) {
                if (node instanceof THREE.AxisHelper) {
                    node.visible = !node.visible;
                }
            });
        break;

        case  49: // 1
            scenery.moveCamera(100,0,0);
        break;
        
        case  50: // 2
            scenery.moveCamera(-100,0,0);
        break;
        
        case  51: // 3
            scenery.moveCamera(0,0,100);
        break;

        case  52: // 4
        scenery.camera.position.x = 100;
        scenery.camera.position.y = 100;
        scenery.camera.position.z = 100;
        scenery.camera.lookAt(scenery.chair.position); 
        break;
        }
    }
