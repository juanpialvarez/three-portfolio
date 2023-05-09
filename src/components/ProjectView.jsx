import React, { Suspense, useRef } from 'react';
import {
  Decal,
  OrbitControls,
  Preload,
  Float,
  useTexture,
} from '@react-three/drei';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import CanvasLoader from './Loader.jsx';
import { styles } from '../styles.js';
import { github } from '../assets/index.js';

const Ball = ({ icon }) => {
  const decal = useTexture(icon);
  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight instensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[0.5, 2]} />
        <meshStandardMaterial
          color={'#fff8eb'}
          polygonOffset
          polygonOffsetUnits={-5}
          flatShading
        />
        <Decal position={[0, 0, 0]} map={decal} />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas frameloop='always' gl={{ preseveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball icon={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

const ProjectView = ({ project, useOutsideProjectCloser }) => {
  const inputRef = useRef(null);
  useOutsideProjectCloser(inputRef);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0 }}
      ref={inputRef}
      className='blue-gradient h-full max-sm:w-full w-[500px] p-[1px] shadow-card overflow-scroll
       m-auto px-10'
    >
      <div className='w-full'>
        <h1 className={styles.sectionHeadText}>{project.name}</h1>
        <p className={styles.sectionSubText}>{project.description}</p>
      </div>
      <h3 className={`${styles.sectionHeadText}`}>Techs</h3>
      <div className='w-full flex justify-around'>
        {project.techs.map((tech, index) => (
          <div className='w-20 h-40' key={index}>
            <BallCanvas icon={tech} />
          </div>
        ))}
      </div>
      <div className='flex w-full justify-evenly items-center mb-5'>
        <a
          href={project.github}
          className='bg-blue-500 hover:bg-blue-700 rounded-full'
        >
          <img src={github} alt='github' className='h-20' />
        </a>
        <a
          href={project.website}
          className='bg-blue-500 hover:bg-blue-700 text-white 
            font-bold py-2 px-2 rounded-md w-20 text-center'
        >
          Hosted Project
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectView;
