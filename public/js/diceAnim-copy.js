import * as THREE from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.module.min.js';

class Dice{
    constructor(canvasElement){
        this.rotation = {
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
        this.scene = new THREE.Scene();
        this.canvasElement = document.getElementById(canvasElement);
    }

    display(){
        this.camera = new THREE.PerspectiveCamera(80, this.canvasElement.clientWidth / this.canvasElement.clientHeight , 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer({
            canvas: this.canvasElement
        });

        this.renderer.setClearColor(0x0e004b);

        const diceGeometry = new THREE.BoxGeometry(5,5,5);

        const materials = [
            new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('../images/face1.png')}), // RIGHT side
            new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('../images/face6.png')}), // LEFT side
            new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('../images/face2.png')}), // TOP side
            new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('../images/face5.png')}), // BOTTOM side
            new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('../images/face3.png')}), // FRONT Side
            new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('../images/face4.png')}), // BACK side
        ]

        this.dice = new THREE.Mesh(diceGeometry, materials);

        this.camera.position.set(3,7,5)
        this.camera.lookAt(0,0,0)

        this.scene.add(this.dice);
        window.addEventListener('load', ()=>{
            this.renderer.render(this.scene, this.camera);    
        })
    }

    randomTarget(){
        const stringTarget = ['un', 'deux', 'trois', 'quatre', 'cinq', 'six'];
        let target = Math.floor(Math.random()*6);
        return {
            string: stringTarget[target],
            number: target+1
        }
    }
    diceAnimation(){
        this.dice.rotation.x = 0;
        this.dice.rotation.z = 0;
        
        let targetRotation = randomTarget();
        console.log(targetRotation);
        
        function animate(){        
            const animationFrame = requestAnimationFrame(animate);                                        
            const rotation = diceRotation(targetRotation, this.dice, 1, animationFrame);     
        
            if(rotation === false){
                cancelAnimationFrame(animationFrame);            
                return 'endAnim';
            }
            renderer.render(this.scene, camera);        
        }
        animate();
    }


}
let test = new Dice('dice');
test.display();