import React, { useRef } from 'react';
import About from '../About';
import Contact from '../Contact';
import { Html } from '@react-three/drei';
import Projects from '../Projects';

const View = (props) => {
  const refDiv = useRef();
  const { view, useRefView, useOutsideAlerter, handleBack, handleViewProject } =
    props;
  useOutsideAlerter(refDiv);
  useRefView(refDiv, view);
  return (
    <group>
      <mesh {...props}>
        <Html fullscreen as='div' className='flex justify-center items-center'>
          <div ref={refDiv}>
            {view === 'About' && <About handleBack={handleBack} />}
            {view === 'Contact' && <Contact handleBack={handleBack} />}
            {view === 'Projects' && (
              <Projects
                handleBack={handleBack}
                handleViewProject={handleViewProject}
              />
            )}
          </div>
        </Html>
      </mesh>
    </group>
  );
};

export default View;
