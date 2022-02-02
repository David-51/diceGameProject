import * as THREE from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.module.min.js';

const scene = new THREE.Scene();
const canvasElement = document.getElementById('dice');

const camera = new THREE.PerspectiveCamera(80, canvasElement.clientWidth / canvasElement.clientHeight , 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
    canvas: canvasElement
});

renderer.setClearColor(0x0e004b);

const diceGeometry = new THREE.BoxGeometry(5,5,5);

const materials = [
    new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('public/images/face1.png')}), // RIGHT side
    new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('public/images/face6.png')}), // LEFT side
    new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('public/images/face2.png')}), // TOP side
    new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('public/images/face5.png')}), // BOTTOM side
    new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('public/images/face3.png')}), // FRONT Side
    new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('public/images/face4.png')}), // BACK side
]

const dice = new THREE.Mesh(diceGeometry, materials);

camera.position.set(3,7,5)
camera.lookAt(0,0,0)

scene.add(dice);
window.addEventListener('load', ()=>{
    renderer.render(scene, camera);    
})
/**
 * 
 * @param {string} diceNumber 
 * @param {MeshObject} dice 
 * @param {int} rotation 
 */

function diceRotation(diceNumber, dice, rotation){
    
    // rotation necessary to get the dice up to the target number
    const number = {
        un: {
            x: 2 * Math.PI,
            z: Math.PI / 2 + 2 * Math.PI,
        },    
        deux: { // Position de repos
            x: 2 * Math.PI,
            z: 2 * Math.PI,
        },
        trois: {
            x: 3 * Math.PI / 2,
            z: 2 * Math.PI,
        },
        quatre: {
            x: Math.PI / 2 + 2 * Math.PI,
            z: 2 * Math.PI,
        },
        cinq: {
            x: Math.PI + 2 * Math.PI,
            z: 2 * Math.PI,
        },
        six: {
            x: 2 * Math.PI,
            z: 3 * Math.PI / 2
        }
    }
    rotation = rotation * 2 * Math.PI;
    let diceTarget = {
        x: eval('number.' + diceNumber + '.x') + rotation,
        z: eval('number.' + diceNumber + '.z') + rotation
    }
    if((dice.rotation.x < diceTarget.x) || (dice.rotation.z < diceTarget.z)){
        if(dice.rotation.x >= diceTarget.x){      
            dice.rotation.x = diceTarget.x
        }
        else{
            dice.rotation.x += 0.15;
        }
        if(dice.rotation.z >= diceTarget.z){
            dice.rotation.z = diceTarget.z
        }
        else{
            dice.rotation.z += 0.15
        }
    }
    else{
    return false;
    }
}

// random target
function randomTarget(){
    const stringTarget = ['un', 'deux', 'trois', 'quatre', 'cinq', 'six'];
    let target = Math.floor(Math.random()*6);
    return stringTarget[target];
}

function diceAnimation(){
    dice.rotation.x = 0;
    dice.rotation.z = 0;
    
    let targetRotation = randomTarget();
    console.log(targetRotation);
    
    function animate(){        
        const animationFrame = requestAnimationFrame(animate);                                        
        const rotation = diceRotation(targetRotation, dice, 1, animationFrame);     
    
        if(rotation === false){
            cancelAnimationFrame(animationFrame);            
            return 'endAnim';
        }
        renderer.render(scene, camera);        
    }
    animate();
}


document.getElementsByTagName('body')[0].addEventListener('click', ()=>{
    diceAnimation();
})