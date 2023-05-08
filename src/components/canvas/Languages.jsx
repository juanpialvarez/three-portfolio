/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 .\public\languages\scene.gltf
Author: AnshiNoWara (https://sketchfab.com/AnshiNoWara)
License: SKETCHFAB Standard (https://sketchfab.com/licenses)
Source: https://sketchfab.com/3d-models/html-css-javascript-c705869a59ae4b3497ef7b5332963c3c
Title: HTML CSS JAVASCRIPT
*/

import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

const Languages = (props) => {
  const groupRef = useRef(null);
  const { icon } = props;
  const { nodes, materials } = useGLTF('/scene.gltf');
  return (
    <group {...props} dispose={null} ref={groupRef}>
      <group scale={0.01}>
        {icon === 'CSS' && (
          <mesh
            geometry={nodes.CSS_CSS_0.geometry}
            material={materials.material}
            position={[-3363.13, 36.99, 183.92]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
        )}

        {icon === 'HTML' && (
          <mesh
            geometry={nodes.HTML_HTML_0.geometry}
            material={materials.HTML}
            position={[0.11, 35.91, 183.65]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
        )}

        {icon === 'JS' && (
          <mesh
            geometry={nodes.JAVASCRIPT_JAVASCRIPT_0.geometry}
            material={materials.JAVASCRIPT}
            position={[3405.82, 34.99, 177.94]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
        )}
      </group>
    </group>
  );
};

useGLTF.preload('/scene.gltf');

export default Languages;