import React, { useRef } from 'react';
import About from '../About';
import Contact from '../Contact';
import { Html } from '@react-three/drei';
import Projects from '../Projects';

const View = (props) => {
  const refDiv = useRef();
  const { view, useOutsideAlerter } = props;
  useOutsideAlerter(refDiv);
  return (
    <group>
      <mesh {...props}>
        <Html fullscreen as='div' className='flex justify-center items-center'>
          <div ref={refDiv}>
            {view === 'About' && <About />}
            {view === 'Contact' && <Contact />}
            {view === 'Projects' && <Projects />}
          </div>
        </Html>
      </mesh>
    </group>
  );
};

export default View;
