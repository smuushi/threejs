import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 500);
camera.position.set(0,0,100);
camera.lookAt(0,0,0);

const renderer = new THREE.WebGLRenderer();

renderer.setSize( window.innerWidth, window.innerHeight );

document.body.appendChild( renderer.domElement);




const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial( {color: 0x00ff89 });

const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

const lineMaterial = new THREE.LineBasicMaterial({color: 0x0000ff});
const points = [];

points.push(new THREE.Vector3(-10, 0, 0));
points.push(new THREE.Vector3(0, 10, 0));
points.push(new THREE.Vector3(10, 0, 0));

const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);

const line = new THREE.Line(lineGeometry, lineMaterial);
scene.add(line);


camera.position.z = 20;
let coefficient = 1;

console.log(scene)
function animate() {

    requestAnimationFrame(animate);
    
    if (cube.position.y > 10) {
        coefficient = -1;
    } else if (cube.position.y < 0) {
        coefficient = 1;
    }
    cube.position.y += 0.01 * coefficient;
    // console.log(cube.position)

    cube.rotation.x += 0.05;
    cube.rotation.y += 0.05;

    renderer.render(scene, camera);

}

animate();