/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 .\public\icons\scene.gltf
Author: Aupuma (https://sketchfab.com/aupuma)
License: SKETCHFAB Editorial (https://sketchfab.com/licenses)
Source: https://sketchfab.com/3d-models/social-networks-3d-icons-pack-5aab7951f76e4172a1a6223229ecaf1b
Title: Social Networks 3D Icons Pack
*/

import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

const Icons = (props) => {
  const groupRef = useRef(null);
  const { icon, scale, xPos, yPos, zPos, xRotate, yRotate, zRotate } = props;
  const { nodes, materials } = useGLTF('icons/scene.gltf');
  return (
    <group
      {...props}
      dispose={null}
      scale={scale}
      ref={groupRef}
      position={[xPos, yPos, zPos]}
      rotation={[xRotate, yRotate, zRotate]}
    >
      {/* Gmail */}
      <hemisphereLight groundColor={'blue'} />
      <ambientLight intensity={0.1} />
      <pointLight position={[-10, 10, 10]} />
      {icon === 'Gmail' && (
        <group position={[-0.15, 0.08, 0]} scale={1.5}>
          <mesh
            geometry={nodes.Object_4.geometry}
            material={materials['SVGMat.001']}
          />
          <mesh
            geometry={nodes.Object_5.geometry}
            material={materials['Material.001']}
          />
          <mesh
            geometry={nodes.Object_6.geometry}
            material={materials['SVGMat.002']}
          />
          <mesh
            geometry={nodes.Object_7.geometry}
            material={materials['SVGMat.003']}
          />
          <mesh
            geometry={nodes.Object_8.geometry}
            material={materials['SVGMat.004']}
          />
          <mesh
            geometry={nodes.Object_9.geometry}
            material={materials['SVGMat.005']}
          />
        </group>
      )}

      {/* Instagram */}

      {icon === 'Instagram' && (
        <group
          position={[0, 0.07, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={2.96}
        >
          <mesh
            geometry={nodes.Object_11.geometry}
            material={materials['SVGMat.006']}
          />
          <mesh
            geometry={nodes.Object_12.geometry}
            material={materials['Material.003']}
          />
        </group>
      )}

      {/* LinkedIn */}

      {icon === 'LinkedIn' && (
        <group
          position={[0.14, 0.08, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.13}
        >
          <mesh
            geometry={nodes.Object_14.geometry}
            material={materials['SVGMat.007']}
          />
          <mesh
            geometry={nodes.Object_15.geometry}
            material={materials['SVGMat.008']}
          />
        </group>
      )}

      {/* What's App */}
      {icon === 'WA' && (
        <group position={[0.08, -0.06, 0]}>
          <mesh
            geometry={nodes.Object_19.geometry}
            material={materials['SVGMat.009']}
          />
          <mesh
            geometry={nodes.Object_20.geometry}
            material={materials['SVGMat.010']}
          />
        </group>
      )}

      {/* Twitter */}
      {icon === 'Twitter' && (
        <mesh
          geometry={nodes.Object_17.geometry}
          material={materials.SVGMat}
          position={[-0.1, -0.06, 0]}
          scale={[1, 0.72, 1]}
        />
      )}
    </group>
  );
};

useGLTF.preload('icons/scene.gltf');

export default Icons;
