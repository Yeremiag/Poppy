import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

	const scene = new THREE.Scene();
	const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

	let renderer;
	renderer = new THREE.WebGLRenderer( { antialias: true } );
	renderer.setSize( window.innerWidth, window.innerHeight );
	renderer.setAnimationLoop( animate );
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize( window.innerWidth, window.innerHeight );

	const geometry = new THREE.BoxGeometry( 1, 1, 1 );
	const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
	const cube = new THREE.Mesh( geometry, material );

	window.addEventListener( 'resize', onWindowResize );
			
	function onWindowResize() {
		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();

		renderer.setSize( window.innerWidth, window.innerHeight );

	}

	document.addEventListener('keydown', function(event) {
		switch (event.keyCode) {
			case 87: // W
				const targetPosition = camera.position.clone();
				targetPosition.z -= 1.0;
				camera.position.lerp(targetPosition, 0.1);
				//camera.position.z -= 0.1;
				break;
			case 65: // A
				//camera.position.lerp(camera.position.x - 0.1, 0.1);
				camera.position.x -= 0.1;
				break;
			case 83: // S
				//camera.position.lerp(camera.position.z + 0.1, 0.1);
				camera.position.z += 0.1;
				break;
			case 68: // D
				//camera.position.lerp(camera.position.x + 0.1, 0.1);
				camera.position.x += 0.1;
				break;
		}
	});

	//const ambientLight = new THREE.AmbientLight('white', 1);
  	//const mainLight = new THREE.DirectionalLight('white', 10);
	//const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
	//mainLight.position.set(10, 10, 10);
	//scene.add( directionalLight );
	//scene.add(ambientLight)
	//scene.add(mainLight)

	scene.add(cube);

	const loader = new GLTFLoader();

	loader.load( 'models/scene.gltf', function ( gltf ) {

		gltf.scene.position.set(0,-1,0);
		gltf.scene.rotation.set(0.4,1.57,0);
		gltf.scene.scale.x = 1.5;
		gltf.scene.scale.y = 1.5;
		gltf.scene.scale.z = 1.5;
		scene.add( gltf.scene );

	}, undefined, function ( error ) {

		console.error( error );

	} );

	camera.position.z = 5;


	function animate() {
		cube.rotation.x += 0.11;
		cube.rotation.y += 0.11;
		//camera.position.z += 0.01;
		renderer.render( scene, camera );
	}

	document.body.appendChild(renderer.domElement);
