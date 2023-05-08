import React, { Suspense, useEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import {
  OrbitControls,
  Preload,
  useAnimations,
  useGLTF,
} from '@react-three/drei';
import CanvasLoader from '../Loader';
import ButtonsThreeD from './ButtonsThreeD';
import View from './View';

const Desk = () => {
  const group = useRef(null);

  const office = useGLTF('Main_Desk/scene.gltf');
  const { actions, names } = useAnimations(office.animations, group);

  useEffect(() => {
    actions[names[0]].reset().fadeIn(0.5).play();
  }, [actions, names]);

  return (
    <group ref={group}>
      <hemisphereLight intensity={0.15} groundColor={'black'} />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />

      <primitive
        object={office.scene}
        scale={1}
        position={[0.6, -2, -15.5]}
        rotation={[-0.01, -0.2, 0]}
      />
    </group>
  );
};

const DeskCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isSmall, setIsSmall] = useState(false);
  const [view, setView] = useState('');

  const useOutsideAlerter = (ref) => {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setView('');
        }
      }
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [ref]);
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width:500px)');
    const mediaQuerySmall = window.matchMedia(
      '(max-width:800px) and (min-width:500px)'
    );
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    const handleMediaQuerySmallChange = (event) => {
      setIsSmall(event.matches);
    };

    mediaQuery.addEventListener('change', handleMediaQueryChange);
    mediaQuerySmall.addEventListener('change', handleMediaQuerySmallChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
      mediaQuerySmall.removeEventListener(
        'change',
        handleMediaQuerySmallChange
      );
    };
  }, []);

  const handleView = (event, view) => {
    if (view === 'Contact') {
      setView('Contact');
    } else if (view === 'Projects') {
      setView('Projects');
    } else if (view === 'About') {
      setView('About');
    }
  };

  const handleBack = () => {
    setView('');
  };

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
          enablePan={false}
          enableDamping={true}
          rotateSpeed={0.1}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          minAzimuthAngle={
            isMobile ? -Math.PI / 12.5 : isSmall ? -Math.PI / 18 : -Math.PI / 35
          }
          maxAzimuthAngle={
            isMobile ? Math.PI / 14 : isSmall ? Math.PI / 20.5 : Math.PI / 40
          }
        />
        <Desk />
        <ButtonsThreeD
          position={[-1, 0.4, -4.8]}
          textParams={{
            position: [-1.08, 0.32, -4],
            rotation: [0, 0.4, 0],
            text: 'Contact',
          }}
          handleView={handleView}
          view='Contact'
        />

        <ButtonsThreeD
          position={[0.2, 0.2, -8.8]}
          textParams={{
            position: [-0.01, 0.15, -8],
            rotation: [0, 0, 0],
            text: 'About',
          }}
          handleView={handleView}
          view='About'
        />
        <ButtonsThreeD
          position={[1.46, 0.6, -7.8]}
          textParams={{
            position: [1.04, 0.5, -7],
            rotation: [0, -0.3, 0],
            text: 'Projects',
          }}
          handleView={handleView}
          view='Projects'
        />
        <View
          view={view}
          useOutsideAlerter={useOutsideAlerter}
          handleBack={handleBack}
        />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default DeskCanvas;
