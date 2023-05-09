import React, { Suspense, useEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import {
  Float,
  OrbitControls,
  Preload,
  useAnimations,
  useGLTF,
} from '@react-three/drei';
import CanvasLoader from '../Loader';
import ButtonsThreeD from './ButtonsThreeD';
import View from './View';
import ProjectView from '../ProjectView';
import Header from '../Header';

const Desk = () => {
  const group = useRef(null);

  const office = useGLTF('Main_Desk/scene.gltf');
  const { actions, names } = useAnimations(office.animations, group);

  useEffect(() => {
    actions[names[0]].reset().fadeIn(0.5).play();
  }, [actions, names]);

  return (
    <group ref={group}>
      <hemisphereLight groundColor={'white'} />
      <ambientLight intensity={0.1} />
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
  const [project, setProject] = useState(null);
  const [viewRef, setViewRef] = useState(null);

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

  const useRefView = (ref, updater) => {
    useEffect(() => {
      if (ref.current) {
        setViewRef(ref.current);
      }
    }, [updater]);
  };

  const useOutsideProjectCloser = (ref) => {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setProject(null);
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

  const handleViewProject = (data) => {
    setProject(data);
  };

  const handleCloseProject = () => {
    setProject(null);
  };

  return (
    <>
      {!project && !view && (
        <div className='w-screen absolute z-50'>
          <Header />
        </div>
      )}
      {project && (
        <>
          <div className='h-screen z-20 absolute left-1/2 -translate-x-1/2'>
            <ProjectView
              project={project}
              handleCloseProject={handleCloseProject}
              useOutsideProjectCloser={useOutsideProjectCloser}
            />
          </div>
          <div className='h-screen w-screen bg-gray-500 opacity-50 z-10 absolute' />
        </>
      )}
      {view && (
        <div className='h-screen w-screen bg-gray-500 opacity-50 z-10 absolute' />
      )}
      <div className='h-screen z-0 '>
        <Canvas
          frameloop='always'
          shadows
          camera={{
            position: [0, 0, 0.1],
            fov: 25,
          }}
          gl={{ preseveDrawingBuffer: true }}
        >
          <Suspense fallback={<CanvasLoader />}>
            {!project && !view && (
              <OrbitControls
                enableZoom={false}
                enablePan={false}
                enableDamping={true}
                rotateSpeed={0.1}
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={Math.PI / 2}
                minAzimuthAngle={
                  isMobile
                    ? -Math.PI / 12.5
                    : isSmall
                    ? -Math.PI / 18
                    : -Math.PI / 35
                }
                maxAzimuthAngle={
                  isMobile
                    ? Math.PI / 14
                    : isSmall
                    ? Math.PI / 20.5
                    : Math.PI / 40
                }
              />
            )}

            <Desk />
            <Float speed={1} rotationIntensity={0.1} floatIntensity={0.5}>
              <ButtonsThreeD
                position={[-1, 0.4, -4.8]}
                textParams={{
                  position: [-1.08, 0.32, -4],
                  rotation: [0, 0.4, 0],
                  text: 'Contact',
                }}
                handleView={handleView}
                view='Contact'
                viewRef={viewRef}
              />
            </Float>
            <Float speed={1} rotationIntensity={0.1} floatIntensity={0.5}>
              <ButtonsThreeD
                position={[0.2, 0.2, -7.8]}
                textParams={{
                  position: [-0.01, 0.15, -7],
                  rotation: [0, 0, 0],
                  text: 'About',
                }}
                handleView={handleView}
                view='About'
                viewRef={viewRef}
              />
            </Float>
            <Float speed={1} rotationIntensity={0.1} floatIntensity={0.5}>
              <ButtonsThreeD
                position={[1.46, 0.6, -7.8]}
                textParams={{
                  position: [1.04, 0.5, -7],
                  rotation: [0, -0.3, 0],
                  text: 'Projects',
                }}
                handleView={handleView}
                view='Projects'
                viewRef={viewRef}
              />
            </Float>

            {!project && (
              <View
                view={view}
                useRefView={useRefView}
                useOutsideAlerter={useOutsideAlerter}
                handleBack={handleBack}
                handleViewProject={handleViewProject}
              />
            )}
          </Suspense>
          <Preload all />
        </Canvas>
      </div>
    </>
  );
};

export default DeskCanvas;
