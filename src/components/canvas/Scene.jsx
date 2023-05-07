/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 .\public\Main_Desk\scene.gltf
Author: haykel-shaba (https://sketchfab.com/haykel1993)
License: SKETCHFAB Standard (https://sketchfab.com/licenses)
Source: https://sketchfab.com/3d-models/office-work-desk-lowpoly-bureau-game-assets-cf723624ef1c400b98f540532391c61a
Title: OFFICE WORK DESK LOWPOLY BUREAU GAME ASSETS
*/

import React, { useEffect, useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

const Office = (props) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('Main_Desk/scene.gltf');
  const { actions, names } = useAnimations(animations, group);

  useEffect(() => {
    actions[names[0]].reset().fadeIn(0.5).play();
  }, [actions, names]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name='Sketchfab_Scene'>
        <group name='Sketchfab_model' rotation={[-Math.PI / 2, 0, 0]}>
          <group name='root'>
            <group name='GLTF_SceneRootNode' rotation={[Math.PI / 2, 0, 0]}>
              <group
                name='Fan_Head2_6'
                position={[-1.5, 1.68, 4.49]}
                rotation={[0, 0.81, 0]}
                scale={0.02}
              >
                <group
                  name='Fan_Tassle_015_3'
                  position={[-8.35, 10.11, 10.54]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={[1, 0.67, 1]}
                >
                  <group name='Mesh_2_2' position={[0, -11.22, 0]}>
                    <mesh
                      name='mesh_1'
                      geometry={nodes.mesh_1.geometry}
                      material={materials['Material.003']}
                      morphTargetDictionary={nodes.mesh_1.morphTargetDictionary}
                      morphTargetInfluences={nodes.mesh_1.morphTargetInfluences}
                    />
                  </group>
                </group>
                <group name='Mesh_5_5' position={[0, 1.73, 7.62]}>
                  <mesh
                    name='Object_11'
                    geometry={nodes.Object_11.geometry}
                    material={materials['Material.003']}
                  />
                </group>
              </group>
              <group
                name='Fan_Tassle_024_7'
                position={[-1.43, 1.54, 4.67]}
                rotation={[-Math.PI / 2, 0, 0.81]}
                scale={[0.02, 0.01, 0.02]}
              />
              <group
                name='Fan_Lock6_9'
                position={[-1.58, 1.74, 4.44]}
                rotation={[-Math.PI / 2, 0, 0.81]}
                scale={0.01}
              >
                <group name='Mesh_3_8'>
                  <mesh
                    name='Object_15'
                    geometry={nodes.Object_15.geometry}
                    material={materials['Material.003']}
                  />
                </group>
              </group>
              <group
                name='Fan_Blades7_11'
                position={[-1.41, 1.71, 4.58]}
                rotation={[-1.96, 0.35, 2.45]}
                scale={0.02}
              >
                <group name='Mesh_4_10' rotation={[0, 0, -Math.PI / 4]}>
                  <mesh
                    name='Object_18'
                    geometry={nodes.Object_18.geometry}
                    material={materials['Material.003']}
                  />
                </group>
              </group>
              <group
                name='Leaf001_64'
                position={[-2.46, 3.02, -0.38]}
                rotation={[0, 0.05, 0.01]}
                scale={[0.52, 0.6, 0.52]}
              >
                <mesh
                  name='Object_121'
                  geometry={nodes.Object_121.geometry}
                  material={materials['Material.004']}
                />
              </group>
              <group
                name='Leaf002_65'
                position={[-4.26, 1.45, 0.81]}
                scale={[0.52, 0.6, 0.52]}
              >
                <mesh
                  name='Object_123'
                  geometry={nodes.Object_123.geometry}
                  material={materials['Material.004']}
                />
              </group>
              <group
                name='Leaf003_66'
                position={[-2.14, 3.66, 0.69]}
                scale={[0.52, 0.6, 0.52]}
              >
                <mesh
                  name='Object_125'
                  geometry={nodes.Object_125.geometry}
                  material={materials['Material.004']}
                />
              </group>
              <group
                name='Leaf004_67'
                position={[-3.54, 3.74, 0.05]}
                scale={[0.52, 0.6, 0.52]}
              >
                <mesh
                  name='Object_127'
                  geometry={nodes.Object_127.geometry}
                  material={materials['Material.004']}
                />
              </group>
              <group
                name='Leaf005_68'
                position={[-2.53, 2.65, 1.97]}
                scale={[0.52, 0.6, 0.52]}
              >
                <mesh
                  name='Object_129'
                  geometry={nodes.Object_129.geometry}
                  material={materials['Material.004']}
                />
              </group>
              <group
                name='Leaf006_69'
                position={[-4.07, 3.8, 2.14]}
                scale={[0.52, 0.6, 0.52]}
              >
                <mesh
                  name='Object_131'
                  geometry={nodes.Object_131.geometry}
                  material={materials['Material.004']}
                />
              </group>
              <group
                name='Leaf007_72'
                position={[-2.46, 3.02, -0.38]}
                scale={[0.52, 0.6, 0.52]}
              >
                <mesh
                  name='Object_133'
                  geometry={nodes.Object_133.geometry}
                  material={materials['Material.004']}
                />
              </group>
              <group
                name='Leaf008_73'
                position={[-4.26, 1.45, 0.81]}
                scale={[0.52, 0.6, 0.52]}
              >
                <mesh
                  name='Object_135'
                  geometry={nodes.Object_135.geometry}
                  material={materials['Material.004']}
                />
              </group>
              <group
                name='Leaf009_74'
                position={[-2.14, 3.66, 0.69]}
                scale={[0.52, 0.6, 0.52]}
              >
                <mesh
                  name='Object_137'
                  geometry={nodes.Object_137.geometry}
                  material={materials['Material.004']}
                />
              </group>
              <group
                name='Leaf010_75'
                position={[-3.54, 3.74, 0.05]}
                scale={[0.52, 0.6, 0.52]}
              >
                <mesh
                  name='Object_139'
                  geometry={nodes.Object_139.geometry}
                  material={materials['Material.004']}
                />
              </group>
              <group
                name='Leaf011_76'
                position={[-2.53, 2.65, 1.97]}
                scale={[0.52, 0.6, 0.52]}
              >
                <mesh
                  name='Object_141'
                  geometry={nodes.Object_141.geometry}
                  material={materials['Material.004']}
                />
              </group>
              <group
                name='Leaf012_77'
                position={[-4.07, 3.8, 2.14]}
                scale={[0.52, 0.6, 0.52]}
              >
                <mesh
                  name='Object_143'
                  geometry={nodes.Object_143.geometry}
                  material={materials['Material.004']}
                />
              </group>
              <group
                name='Fan_Base1_1'
                position={[-1.51, 1.36, 4.49]}
                rotation={[-Math.PI / 2, 0, 1.6]}
                scale={0.02}
              >
                <group name='Mesh_6_0'>
                  <mesh
                    name='Object_5'
                    geometry={nodes.Object_5.geometry}
                    material={materials['Material.003']}
                  />
                </group>
              </group>
              <group
                name='Plane_13'
                position={[-0.01, 2.27, 3.62]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name='Object_20'
                  geometry={nodes.Object_20.geometry}
                  material={materials['Material.001']}
                />
                <mesh
                  name='Object_21'
                  geometry={nodes.Object_21.geometry}
                  material={materials['Material.002']}
                />
              </group>
              <group name='Plane001_14' position={[-3.18, 4.01, 3.92]}>
                <mesh
                  name='Object_23'
                  geometry={nodes.Object_23.geometry}
                  material={materials['Material.001']}
                />
                <mesh
                  name='Object_24'
                  geometry={nodes.Object_24.geometry}
                  material={materials['Material.006']}
                />
              </group>
              <group
                name='Cylinder_15'
                position={[-3.94, 3.6, 4.14]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={0.3}
              >
                <mesh
                  name='Object_26'
                  geometry={nodes.Object_26.geometry}
                  material={materials['Material.001']}
                />
              </group>
              <group
                name='Circle_16'
                position={[-3.96, 3.59, 3.89]}
                rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                scale={0.02}
              >
                <mesh
                  name='Object_28'
                  geometry={nodes.Object_28.geometry}
                  material={materials['Material.001']}
                />
              </group>
              <group
                name='Circle001_17'
                position={[-3.96, 3.59, 3.88]}
                rotation={[Math.PI / 2, -0.91, 0]}
                scale={0.02}
              >
                <mesh
                  name='Object_30'
                  geometry={nodes.Object_30.geometry}
                  material={materials['Material.001']}
                />
              </group>
              <group name='Cube_18' position={[-4.1, 2.41, 3.07]} scale={0.82}>
                <mesh
                  name='Object_32'
                  geometry={nodes.Object_32.geometry}
                  material={materials['Material.001']}
                />
              </group>
              <group
                name='Plane002_19'
                position={[-4.12, 1.19, 3.85]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={0.03}
              >
                <mesh
                  name='Object_34'
                  geometry={nodes.Object_34.geometry}
                  material={materials['Material.002']}
                />
              </group>
              <group
                name='Plane003_20'
                position={[-4.35, 2.73, 3.93]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={0.05}
              >
                <mesh
                  name='Object_36'
                  geometry={nodes.Object_36.geometry}
                  material={materials['Material.001']}
                />
              </group>
              <group
                name='Plane004_21'
                position={[-4.36, 2.41, 3.93]}
                rotation={[Math.PI / 2, -0.12, 0]}
                scale={0.05}
              >
                <mesh
                  name='Object_38'
                  geometry={nodes.Object_38.geometry}
                  material={materials['Material.001']}
                />
              </group>
              <group
                name='Plane005_22'
                position={[-4.35, 2.06, 3.93]}
                rotation={[Math.PI / 2, -0.1, 0]}
                scale={0.05}
              >
                <mesh
                  name='Object_40'
                  geometry={nodes.Object_40.geometry}
                  material={materials['Material.001']}
                />
              </group>
              <group
                name='Plane006_23'
                position={[-4.35, 1.71, 3.93]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={0.05}
              >
                <mesh
                  name='Object_42'
                  geometry={nodes.Object_42.geometry}
                  material={materials['Material.001']}
                />
              </group>
              <group
                name='Cube001_24'
                position={[3.8, 2.41, 3.07]}
                scale={0.82}
              >
                <mesh
                  name='Object_44'
                  geometry={nodes.Object_44.geometry}
                  material={materials['Material.001']}
                />
              </group>
              <group
                name='Plane007_25'
                position={[3.77, 1.19, 3.85]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={0.03}
              >
                <mesh
                  name='Object_46'
                  geometry={nodes.Object_46.geometry}
                  material={materials['Material.002']}
                />
              </group>
              <group
                name='Plane008_26'
                position={[3.67, 2.46, 3.93]}
                rotation={[Math.PI / 2, 0.02, 0]}
                scale={[0.06, 0.05, 0.05]}
              >
                <mesh
                  name='Object_48'
                  geometry={nodes.Object_48.geometry}
                  material={materials['Material.001']}
                />
              </group>
              <group
                name='Plane009_27'
                position={[4.23, 2.44, 3.93]}
                rotation={[Math.PI / 2, -0.13, 0]}
                scale={[0.06, 0.05, 0.05]}
              >
                <mesh
                  name='Object_50'
                  geometry={nodes.Object_50.geometry}
                  material={materials['Material.001']}
                />
              </group>
              <group
                name='Plane010_28'
                position={[4.09, 1.69, 3.93]}
                rotation={[Math.PI / 2, -0.09, 0]}
                scale={0.05}
              >
                <mesh
                  name='Object_52'
                  geometry={nodes.Object_52.geometry}
                  material={materials['Material.001']}
                />
              </group>
              <group
                name='Plane011_29'
                position={[3.98, 2.08, 3.93]}
                rotation={[Math.PI / 2, -0.02, 0]}
                scale={0.05}
              >
                <mesh
                  name='Object_54'
                  geometry={nodes.Object_54.geometry}
                  material={materials['Material.001']}
                />
              </group>
              <group
                name='Plane012_30'
                position={[3.97, 2.45, 3.93]}
                rotation={[Math.PI / 2, -0.14, 0]}
                scale={0.05}
              >
                <mesh
                  name='Object_56'
                  geometry={nodes.Object_56.geometry}
                  material={materials['Material.001']}
                />
              </group>
              <group
                name='Plane013_31'
                position={[3.87, 1.69, 3.93]}
                rotation={[Math.PI / 2, -0.12, 0]}
                scale={[0.06, 0.05, 0.05]}
              >
                <mesh
                  name='Object_58'
                  geometry={nodes.Object_58.geometry}
                  material={materials['Material.001']}
                />
              </group>
              <group
                name='Cube010_32'
                position={[-2.8, 1.86, 2.75]}
                scale={[0.04, 0.02, 0.03]}
              >
                <mesh
                  name='Object_60'
                  geometry={nodes.Object_60.geometry}
                  material={materials['Material.002']}
                />
              </group>
              <group
                name='Cube002_33'
                position={[-0.02, 3.8, 6.12]}
                scale={[0.03, 0.03, 0.27]}
              >
                <mesh
                  name='Object_62'
                  geometry={nodes.Object_62.geometry}
                  material={materials['Material.001']}
                />
              </group>
              <group
                name='Cube003_34'
                position={[-3.56, 0.85, 5.06]}
                scale={[0.26, 0.29, 0.26]}
              >
                <mesh
                  name='Object_64'
                  geometry={nodes.Object_64.geometry}
                  material={materials['Material.001']}
                />
              </group>
              <group
                name='Cube004_35'
                position={[-2.59, 0.87, 3.52]}
                rotation={[0, -0.2, 0]}
                scale={[0.27, 0.31, 0.27]}
              >
                <mesh
                  name='Object_66'
                  geometry={nodes.Object_66.geometry}
                  material={materials['Material.001']}
                />
              </group>
              <group
                name='Cube011_36'
                position={[-1.45, 0.85, 4.49]}
                rotation={[0, 0.37, 0]}
                scale={[0.03, 0.03, 0.04]}
              >
                <mesh
                  name='Object_68'
                  geometry={nodes.Object_68.geometry}
                  material={materials['Material.001']}
                />
              </group>
              <group name='Plane014_37' position={[-3.18, 0.54, 3.92]}>
                <mesh
                  name='Object_70'
                  geometry={nodes.Object_70.geometry}
                  material={materials['Material.008']}
                />
              </group>
              <group
                name='Cube006_38'
                position={[-0.6, 1.42, 4.8]}
                rotation={[0, 0.24, 0]}
                scale={[0, 0.05, 0.05]}
              >
                <mesh
                  name='Object_72'
                  geometry={nodes.Object_72.geometry}
                  material={materials['Material.003']}
                />
              </group>
              <group
                name='Cube005_39'
                position={[1.52, 0.7, 4.22]}
                rotation={[0, 0.25, 0]}
                scale={0.16}
              >
                <mesh
                  name='Object_74'
                  geometry={nodes.Object_74.geometry}
                  material={materials['Material.003']}
                />
              </group>
              <group
                name='Sphere_40'
                position={[0.44, 1.01, 5.15]}
                rotation={[0, -1.04, 0]}
                scale={0.04}
              >
                <mesh
                  name='Object_76'
                  geometry={nodes.Object_76.geometry}
                  material={materials['Material.003']}
                />
              </group>
              <group
                name='Plane015_41'
                position={[1.51, 2.25, 3.9]}
                rotation={[Math.PI / 2, 0.02, 1.19]}
                scale={[0.03, 0.12, 0.03]}
              >
                <mesh
                  name='mesh_33'
                  geometry={nodes.mesh_33.geometry}
                  material={materials['Material.003']}
                  morphTargetDictionary={nodes.mesh_33.morphTargetDictionary}
                  morphTargetInfluences={nodes.mesh_33.morphTargetInfluences}
                />
              </group>
              <group
                name='Plane021_42'
                position={[1.02, 1.72, 4.16]}
                rotation={[0, 0.24, 0]}
              >
                <mesh
                  name='Object_80'
                  geometry={nodes.Object_80.geometry}
                  material={materials['Material.003']}
                />
              </group>
              <group
                name='Plane016_43'
                position={[-0.68, 1.64, 4.4]}
                rotation={[0, -0.36, 0]}
              >
                <mesh
                  name='Object_82'
                  geometry={nodes.Object_82.geometry}
                  material={materials['Material.003']}
                />
              </group>
              <group
                name='Plane017_44'
                position={[-0.69, 1.58, 4.4]}
                rotation={[0, -0.36, 0]}
              >
                <mesh
                  name='Object_84'
                  geometry={nodes.Object_84.geometry}
                  material={materials['Material.003']}
                />
              </group>
              <group
                name='Plane018_45'
                position={[1.63, 1.8, 4.16]}
                rotation={[1.49, -0.32, -1.83]}
                scale={[1, 1.19, 1]}
              >
                <mesh
                  name='Object_86'
                  geometry={nodes.Object_86.geometry}
                  material={materials['Material.003']}
                />
              </group>
              <group
                name='Plane019_46'
                position={[1.71, 1.79, 4.17]}
                rotation={[1.49, -0.3, -1.83]}
                scale={[1, 0.92, 1]}
              >
                <mesh
                  name='Object_88'
                  geometry={nodes.Object_88.geometry}
                  material={materials['Material.003']}
                />
              </group>
              <group
                name='Plane020_47'
                position={[1.6, 1.32, 4.21]}
                rotation={[-Math.PI, 1.06, -Math.PI]}
                scale={[0.89, 1.07, 0.89]}
              >
                <mesh
                  name='Object_90'
                  geometry={nodes.Object_90.geometry}
                  material={materials['Material.003']}
                />
              </group>
              <group
                name='Plane022_48'
                position={[1.58, 1.07, 4.19]}
                rotation={[0, 0.25, 0]}
              >
                <mesh
                  name='Object_92'
                  geometry={nodes.Object_92.geometry}
                  material={materials['Material.003']}
                />
              </group>
              <group
                name='Plane023_49'
                position={[1.59, 0.72, 4.22]}
                rotation={[1.54, -0.11, -1.82]}
                scale={[0.84, 1, 0.84]}
              >
                <mesh
                  name='Object_94'
                  geometry={nodes.Object_94.geometry}
                  material={materials['Material.003']}
                />
              </group>
              <group
                name='Plane024_50'
                position={[1.67, 0.72, 4.25]}
                rotation={[1.55, -0.09, -1.82]}
                scale={[0.84, 0.77, 0.84]}
              >
                <mesh
                  name='Object_96'
                  geometry={nodes.Object_96.geometry}
                  material={materials['Material.003']}
                />
              </group>
              <group
                name='Plane025_51'
                position={[1.72, 0.69, 4.19]}
                rotation={[1.55, -0.07, -1.82]}
                scale={[0.71, 0.96, 0.71]}
              >
                <mesh
                  name='Object_98'
                  geometry={nodes.Object_98.geometry}
                  material={materials['Material.003']}
                />
              </group>
              <group
                name='Cube007_52'
                position={[3.5, 0.85, 4.6]}
                scale={[0.03, 0.03, 0.04]}
              >
                <mesh
                  name='Object_100'
                  geometry={nodes.Object_100.geometry}
                  material={materials['Material.001']}
                />
              </group>
              <group
                name='Cube008_53'
                position={[3.21, 1.38, 4.72]}
                rotation={[0, -0.01, 0]}
                scale={0.03}
              >
                <mesh
                  name='Object_102'
                  geometry={nodes.Object_102.geometry}
                  material={materials['Material.003']}
                />
              </group>
              <group
                name='Cylinder001_54'
                position={[2.37, 0.72, 4.08]}
                scale={0.18}
              >
                <mesh
                  name='Object_104'
                  geometry={nodes.Object_104.geometry}
                  material={materials['Material.003']}
                />
              </group>
              <group
                name='Cube009_55'
                position={[-0.09, 1.93, 4.18]}
                rotation={[-0.3, 0.48, 0.14]}
              >
                <mesh
                  name='Object_106'
                  geometry={nodes.Object_106.geometry}
                  material={materials['Material.003']}
                />
              </group>
              <group name='Armature_63'>
                <group name='GLTF_created_0'>
                  <primitive object={nodes.GLTF_created_0_rootJoint} />
                  <group
                    name='Tree_70_correction'
                    position={[-3.44, 0.4, 0.22]}
                    rotation={[0, 1.51, 0]}
                    scale={[0.52, 0.6, 0.52]}
                  >
                    <group name='Tree_70' />
                  </group>
                  <skinnedMesh
                    castShadow
                    name='Object_119'
                    geometry={nodes.Object_119.geometry}
                    material={materials['Material.004']}
                    skeleton={nodes.Object_119.skeleton}
                  />
                </group>
              </group>
              <group
                name='Plane026_78'
                position={[0.41, 1.24, -8.93]}
                scale={[2.8, 1, 1]}
              >
                <mesh
                  name='Object_145'
                  geometry={nodes.Object_145.geometry}
                  material={materials['Material.007']}
                />
              </group>
              <group
                name='Cube015_79'
                position={[-0.14, 0.65, -6.36]}
                rotation={[0, -0.51, 0]}
                scale={0.28}
              >
                <mesh
                  name='Object_147'
                  geometry={nodes.Object_147.geometry}
                  material={materials['Material.006']}
                />
              </group>
              <group
                name='Cube012_80'
                position={[-7.3, 1.86, 2.75]}
                scale={[0.04, 0.02, 0.03]}
              >
                <mesh
                  name='Object_149'
                  geometry={nodes.Object_149.geometry}
                  material={materials['Material.002']}
                />
              </group>
              <group
                name='Cube013_81'
                position={[5.03, 1.86, 2.75]}
                scale={[0.04, 0.02, 0.03]}
              >
                <mesh
                  name='Object_151'
                  geometry={nodes.Object_151.geometry}
                  material={materials['Material.002']}
                />
              </group>
              <group
                name='Cube014_82'
                position={[-7, 4.16, 3.25]}
                scale={[0.64, 0.12, 0.64]}
              >
                <mesh
                  name='Object_153'
                  geometry={nodes.Object_153.geometry}
                  material={materials['Material.001']}
                />
              </group>
              <group
                name='Cube016_83'
                position={[-7, 0.34, 3.25]}
                scale={[0.64, 0.12, 0.64]}
              >
                <mesh
                  name='Object_155'
                  geometry={nodes.Object_155.geometry}
                  material={materials['Material.001']}
                />
              </group>
              <group
                name='Cube017_84'
                position={[7.71, 4.16, 8.21]}
                rotation={[Math.PI / 2, 0, -Math.PI / 2]}
                scale={[0.64, 0.12, 0.64]}
              >
                <mesh
                  name='Object_157'
                  geometry={nodes.Object_157.geometry}
                  material={materials['Material.001']}
                />
              </group>
              <group
                name='Cube018_85'
                position={[-7.76, 4.16, 8.21]}
                rotation={[Math.PI / 2, 0, -Math.PI / 2]}
                scale={[0.64, 0.12, 0.64]}
              >
                <mesh
                  name='Object_159'
                  geometry={nodes.Object_159.geometry}
                  material={materials['Material.001']}
                />
              </group>
              <group
                name='Cube019_86'
                position={[7.56, 0.65, -6.36]}
                rotation={[0, -0.51, 0]}
                scale={0.28}
              >
                <mesh
                  name='Object_161'
                  geometry={nodes.Object_161.geometry}
                  material={materials['Material.006']}
                />
              </group>
              <group
                name='Cube020_87'
                position={[-8.08, 0.65, -6.36]}
                rotation={[0, -0.51, 0]}
                scale={0.28}
              >
                <mesh
                  name='Object_163'
                  geometry={nodes.Object_163.geometry}
                  material={materials['Material.006']}
                />
              </group>
              <group
                name='Cube021_88'
                position={[-15.97, 0.65, -6.36]}
                rotation={[0, -0.51, 0]}
                scale={0.28}
              >
                <mesh
                  name='Object_165'
                  geometry={nodes.Object_165.geometry}
                  material={materials['Material.006']}
                />
              </group>
              <group
                name='Cube022_89'
                position={[16.56, 0.65, -6.36]}
                rotation={[0, -0.51, 0]}
                scale={0.28}
              >
                <mesh
                  name='Object_167'
                  geometry={nodes.Object_167.geometry}
                  material={materials['Material.006']}
                />
              </group>
              <group
                name='Cube024_90'
                position={[0.39, 0.76, 2.75]}
                scale={0.02}
              >
                <mesh
                  name='Object_169'
                  geometry={nodes.Object_169.geometry}
                  material={materials['Material.009']}
                />
              </group>
              <group
                name='Plane028_91'
                position={[3.13, 0.54, 13.78]}
                rotation={[-Math.PI, 0, -Math.PI]}
              >
                <mesh
                  name='Object_171'
                  geometry={nodes.Object_171.geometry}
                  material={materials['Material.008']}
                />
                <mesh
                  name='Object_172'
                  geometry={nodes.Object_172.geometry}
                  material={materials['Material.006']}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
};

export default Office;

useGLTF.preload('./Main_Desk/scene.gltf');