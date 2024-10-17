import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

	const scene = new THREE.Scene();
	//scene.background = new THREE.Color( 0xff0000 );
	const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

	const renderer = new THREE.WebGLRenderer();
	renderer.setSize( window.innerWidth, window.innerHeight );
	renderer.setAnimationLoop( animate );

	const geometry = new THREE.BoxGeometry( 1, 1, 1 );
	const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
	const cube = new THREE.Mesh( geometry, material );

	const geometry1 = new THREE.BoxGeometry( 1, 1, 1 );
	const material1 = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
	const cube1 = new THREE.Mesh( geometry, material );
	cube1.scale.x = 2;
	cube1.scale.y = 2;
	cube1.scale.z = 2;
	cube1.position.set(3,0,0);

	const geometry2 = new THREE.BoxGeometry( 1, 1, 1 );
	const material2 = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
	const cube2 = new THREE.Mesh( geometry, material );
	cube2.scale.x = 2;
	cube2.scale.y = 2;
	cube2.scale.z = 2;
	cube2.position.set(-3,0,0);
	const ambientLight = new THREE.AmbientLight('white', 1);

  	const mainLight = new THREE.DirectionalLight('white', 10);
  	mainLight.position.set(10, 10, 10);
	const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
	scene.add( directionalLight );
	//scene.add(ambientLight)
	//scene.add(mainLight)

	//scene.add(cube1);
	//scene.add(cube);
	//scene.add(cube2);

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
		cube1.rotation.x += 0.11;
		cube1.rotation.y += 0.11;
		cube2.rotation.x += 0.11;
		cube2.rotation.y += 0.11;

		renderer.render( scene, camera );
	}

	document.body.appendChild( renderer.domElement );
