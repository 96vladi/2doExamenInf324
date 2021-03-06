      var camera;
      var controls;
      var scene;
      var renderer;

			init();
			animate();
			function init() {

				scene = new THREE.Scene();
				scene.background = new THREE.Color( 0xcccccc );
				scene.fog = new THREE.FogExp2( 0xcccccc, 0.002 );

				renderer = new THREE.WebGLRenderer( { antialias: true } );
				renderer.setPixelRatio( window.devicePixelRatio );
				renderer.setSize( window.innerWidth, window.innerHeight );
				document.body.appendChild( renderer.domElement );

				camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 1000 );
				camera.position.set( 400, 200, 0 );

				// controles

				controls = new THREE.OrbitControls( camera, renderer.domElement );
				controls.enableDamping = true;
				controls.dampingFactor = 0.05;
				controls.screenSpacePanning = false;
				controls.minDistance = 100;
				controls.maxDistance = 500;
				controls.maxPolarAngle = Math.PI / 2;
        controls.keyPanSpeed = 10;
        controls.keys = {
        	LEFT: 37,
        	UP: 0,
        	RIGHT: 39,
        	BOTTOM: 0
        }
        //Arboles
				var geometry = new THREE.CylinderBufferGeometry( 0, 10, 30, 4, 1 );
				var material = new THREE.MeshPhongMaterial( { color: 0x008000, flatShading: true } );

        //barriga
        var barriga = new THREE.SphereBufferGeometry( 20, 32, 32 );
        var barM = new THREE.MeshBasicMaterial( {color: 0xffffff} );
        var barri = new THREE.Mesh( barriga, barM );
        scene.add( barri );
        barri.position.x = 10;
        barri.position.y = 4;
        barri.position.z = 10;
        //Pecho
        var pecho = new THREE.SphereGeometry( 12, 32, 32 );
        var peM = new THREE.MeshBasicMaterial( {color: 0xffffff} );
        var pec = new THREE.Mesh( pecho, peM );
        scene.add( pec );
        pec.position.x = 10;
        pec.position.y = 25;
        pec.position.z = 10;
        //Cabeza
        var cabeza = new THREE.SphereGeometry( 7, 32, 32 );
        var caM = new THREE.MeshBasicMaterial( {color: 0xffffff} );
        var cab = new THREE.Mesh( cabeza, caM );
        scene.add( cab );
        cab.position.x = 10;
        cab.position.y = 38;
        cab.position.z = 10;
        //Ojos
        var ojo1 = new THREE.SphereGeometry( 1, 32, 32 );
        var ojoM1 = new THREE.MeshBasicMaterial( {color: 0x010101} );
        var oj1 = new THREE.Mesh( ojo1, ojoM1 );
        scene.add( oj1 );
        oj1.position.x = 15;
        oj1.position.y = 42;
        oj1.position.z = 8;
        var ojo2 = new THREE.SphereGeometry( 1, 32, 32 );
        var ojoM2 = new THREE.MeshBasicMaterial( {color: 0x010101} );
        var oj2 = new THREE.Mesh( ojo2, ojoM2 );
        scene.add( oj2 );
        oj2.position.x = 15;
        oj2.position.y = 42;
        oj2.position.z = 12;
        //Naris
        var nariz = new THREE.ConeGeometry( 2, 10, 5 );
        var naM = new THREE.MeshBasicMaterial( {color: 0xF9970A} );
        var na = new THREE.Mesh( nariz, naM );
        scene.add( na );
        na.position.x = 18;
        na.position.y = 40;
        na.position.z = 10.5;
        na.rotation.x = 90;
        na.rotation.y = 0;
        na.rotation.z = 30;
        //Botones
        var btn1 = new THREE.Mesh( ojo1, ojoM1 );
        var btn2 = new THREE.Mesh( ojo1, ojoM1 );
        var btn3 = new THREE.Mesh( ojo1, ojoM1 );
        scene.add(btn1);
        scene.add(btn2);
        scene.add(btn3);
        btn1.position.x = 21.5;
        btn1.position.y = 23;
        btn1.position.z = 10;
        btn2.position.x = 21.5;
        btn2.position.y = 27;
        btn2.position.z = 10;
        btn3.position.x = 20;
        btn3.position.y = 31;
        btn3.position.z = 10;
        //Bufanda
        var buf = new THREE.TorusGeometry( 6, 1, 16, 100 );
        var bufM = new THREE.MeshBasicMaterial( { color: 0xFF1B00 } );
        var bufa = new THREE.Mesh( buf, bufM );
        scene.add( bufa );
        bufa.position.x = 10;
        bufa.position.y = 35;
        bufa.position.z = 10;
        bufa.rotation.x = 139.8;
        bufa.rotation.y = 0;
        bufa.rotation.z = 180;
        var buf1 = new THREE.TorusGeometry( 11, 1, 16, 100 );
        var bufM1 = new THREE.MeshBasicMaterial( { color: 0xFF1B00 } );
        var bufa1 = new THREE.Mesh( buf1, bufM1 );
        scene.add( bufa1 );
        bufa1.position.x = 10;
        bufa1.position.y = 20;
        bufa1.position.z = 10;
        bufa1.rotation.x = 139.8;
        bufa1.rotation.y = 0;
        bufa1.rotation.z = 180;

        //Boca
        var b1 = new THREE.SphereGeometry( 1, 32, 32 );
        var b1M = new THREE.MeshBasicMaterial( {color: 0x5C4208} );
        var b1 = new THREE.Mesh( b1, b1M );
        scene.add( b1 );
        b1.position.x = 15.2;
        b1.position.y = 39;
        b1.position.z = 7;
        var b2 = new THREE.SphereGeometry( 1, 32, 32 );
        var b2M = new THREE.MeshBasicMaterial( {color: 0x5C4208} );
        var b2 = new THREE.Mesh( b2, b2M );
        scene.add( b2 );
        b2.position.x = 15.2;
        b2.position.y = 39;
        b2.position.z = 13;
        var b3 = new THREE.SphereGeometry( 1, 32, 32 );
        var b3M = new THREE.MeshBasicMaterial( {color: 0x5C4208} );
        var b3 = new THREE.Mesh( b3, b3M );
        scene.add( b3 );
        b3.position.x = 15.8;
        b3.position.y = 37;
        b3.position.z = 8.5;
        var b4 = new THREE.SphereGeometry( 1, 32, 32 );
        var b4M = new THREE.MeshBasicMaterial( {color: 0x5C4208} );
        var b4 = new THREE.Mesh( b4, b4M );
        scene.add( b4 );
        b4.position.x = 15.8;
        b4.position.y = 37;
        b4.position.z = 11.5;

        //BRAZOS
        function CustomSinCurve( scale ) {

	        THREE.Curve.call( this );

          this.scale = ( scale === undefined ) ? 1 : scale;

        }

        CustomSinCurve.prototype = Object.create( THREE.Curve.prototype );
        CustomSinCurve.prototype.constructor = CustomSinCurve;

        CustomSinCurve.prototype.getPoint = function ( t ) {
          var tx = t * 3 - 1.5;
	        var ty = Math.sin( 2 * Math.PI * t );
	        var tz = 0;

	        return new THREE.Vector3( tx, ty, tz ).multiplyScalar( this.scale );
        };

        var path = new CustomSinCurve( 20 );
        var braz = new THREE.TubeBufferGeometry( path, 20, 2, 8, false );
        var brazM = new THREE.MeshBasicMaterial( { color: 0xB05804 } );
        var brazos = new THREE.Mesh( braz, brazM );
        scene.add( brazos );
        brazos.position.x = 10;
        brazos.position.y = 30;
        brazos.position.z = 10;
        brazos.rotation.x = 139.8;  
        brazos.rotation.y = 20;
        brazos.rotation.z = 50;

        //SOMBRERO
        var points = [];
        for ( var i = 0; i < 10; i ++ ) {
	         points.push( new THREE.Vector2( Math.sin( i * 0.2 ) * 1 + 3, ( i - 5 ) * 1 ) );
         }
         var som = new THREE.LatheBufferGeometry( points );
         var somM = new THREE.MeshBasicMaterial( { color: 0x0467B0 } );
         var sombre = new THREE.Mesh( som, somM );
         scene.add( sombre );
         sombre.position.x = 9;
         sombre.position.y = 45;
         sombre.position.z = 8;
         sombre.rotation.x = 139.8;   
         sombre.rotation.y = 140;
         sombre.rotation.z = 39;

         //Arboles aleatorios
				for ( var i = 0; i < 500; i ++ ) {

					var mesh = new THREE.Mesh( geometry, material );
					mesh.position.x = Math.random() * 1600 - 800;
					mesh.position.y = 0;
					mesh.position.z = Math.random() * 1600 - 800;
					mesh.updateMatrix();
					mesh.matrixAutoUpdate = false;
					scene.add( mesh );

				}

				// luz
				var light = new THREE.DirectionalLight( 0xffffff );
				light.position.set( 1, 1, 1 );
				scene.add( light );
				var light = new THREE.DirectionalLight( 0x002288 );
				light.position.set( - 1, - 1, - 1 );
				scene.add( light );
				var light = new THREE.AmbientLight( 0x222222 );
				scene.add( light );

				window.addEventListener( 'resize', onWindowResize, false );
			}
			function onWindowResize() {
				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();
				renderer.setSize( window.innerWidth, window.innerHeight );
			}

			function animate() {
				requestAnimationFrame( animate );
				controls.update();
				render();
			}
			function render() {
				renderer.render( scene, camera );
			}
