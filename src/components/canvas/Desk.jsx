import React, { Suspense, useEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, SpotLight, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

const Desk = () => {
  const desk = useGLTF('./Main_Desk/scene.gltf');
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor={'black'} />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSoze={1024}
      />
      <primitive
        object={desk.scene}
        scale={1}
        position={[0.6, -2, -15.5]}
        rotation={[-0.01, -0.2, 0]}
      />
    </mesh>
  );
};

const DeskCanvas = () => {
  const [mousePos, setMousePos] = useState({});

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mousePos]);

  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{
        position: [0, 0, 0.1],
        fov: 25,
      }}
      gl={{ preseveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          minAzimuthAngle={-Math.PI / 20}
          maxAzimuthAngle={Math.PI / 30}
        />
        <Desk />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default DeskCanvas;
