import * as THREE from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.module.min.js';

class Dice{
    constructor(canvasElement){
        this.targetRotation = {
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
        this.camera;
        this.renderer;
        this.dice;
        this.target;
    }
        

    createDice(){
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
    }
    display(){
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
    
    diceRotation(randomTarget, rotation){
        let totalRotation = rotation * 2 * Math.PI;        
        const target = {
            x: eval('this.targetRotation.' + randomTarget.string + '.x'),
            z: eval('this.targetRotation .' + randomTarget.string + '.z')
        }
        console.log(target);
        console.log(randomTarget.string);

        if((this.dice.rotation.x < target.x) || (this.dice.rotation.z < target.z)){
            if(this.dice.rotation.x >= target.x){      
                this.dice.rotation.x = target.x
            }
            else{
                this.dice.rotation.x += 0.15;
            }
            if(this.dice.rotation.z >= target.z){
                this.dice.rotation.z = target.z
            }
            else{
                this.dice.rotation.z += 0.15
            }
        }
        else{
            return randomTarget.number;
        }
    }
    play(){
        this.dice.rotation.x = 0;
        this.dice.rotation.z = 0;
        
        this.target = this.randomTarget();        
        
        this.animate();
    }
    
    animate(){        
        const animationFrame = requestAnimationFrame(this.animate.bind(this));                                        
        const targetRotation = this.diceRotation(this.target, 1);          
        
        if(typeof targetRotation !== 'undefined'){
            cancelAnimationFrame(animationFrame);            
            console.log('number: ', this.target.number)
            return this.target.number;
        }
        this.renderer.render(this.scene, this.camera);        
    }

}
let test = new Dice('dice');
test.createDice();
test.display();
test.play();