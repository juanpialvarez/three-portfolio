import React, { useMemo, useRef } from 'react';
import { extend } from '@react-three/fiber';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import montserrat from '../../assets/fonts/montserrat.json';

extend({ TextGeometry });

const Text = (props) => {
  const mesh = useRef();
  const { hovered, position, text, rotation } = props;
  const font = new FontLoader().parse(montserrat);
  const config = useMemo(
    () => ({
      font: font,
      size: 0.1,
      height: 0.1,
      curveSegments: 10,
      bevelEnabled: true,
      bevelThickness: 0,
      bevelSize: 0.009,
      bevelOffset: 0,
      bevelSegments: 10,
    }),
    [font]
  );
  return (
    <group scale={1} position={position} rotation={rotation}>
      <mesh ref={mesh}>
        <textGeometry center args={[text, config]} />
        {!hovered ? (
          <meshStandardMaterial color={0xff36cb} />
        ) : (
          <meshStandardMaterial color={0xffffff} />
        )}
      </mesh>
    </group>
  );
};

export default Text;
