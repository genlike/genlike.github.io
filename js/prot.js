var scenery;

var buttonUP, buttonDOWN, buttonLEFT, buttonRIGHT;


var wheelCamera = false;


function init(){
    scenery = new Scenery();
    //scenery.render();

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup",onKeyUp);
    window.addEventListener("resize", onResize);
}

function animate() {
    'use strict';
    
    
    //console.log("Running..." + "UP :" + buttonUP+ "DOWN :" + buttonDOWN + "LEFT :" + buttonLEFT + "RIGHT :" + buttonRIGHT);

    let delta = scenery.clock.getDelta();

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
                if (node instanceof THREE.AxisHelper) {
                    node.visible = !node.visible;
                }
            });
        break;

        case  49: // 1
            if (wheelCamera)
                scenery.createCamera();
            scenery.moveCamera(100,0,0);
        break;
        
        case  50: // 2
            if (wheelCamera)
                scenery.createCamera();
            scenery.moveCamera(0,100,0);
            wheelCamera = false;
        break;
        
        case  51: // 3
            if (wheelCamera)
                scenery.createCamera();
            scenery.moveCamera(0,0,100);
            wheelCamera = false;
        break;
        case  52: // 4
            if (wheelCamera)
                scenery.createCamera();
            scenery.moveCamera(100,100,100);
            wheelCamera = false;
        break;
        case  53: // 4
            if (!wheelCamera) scenery.camera = changeToWheelCamera();
            wheelCamera = true;
        break;
        }
    }

    function changeToWheelCamera(){
        'use strict'
        let cam = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 1000 );
        return cam;
    }