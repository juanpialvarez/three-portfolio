import React, { useRef, useState } from 'react';
import Text from './Text';

function ButtonsThreeD(props) {
  const mesh = useRef();
  const { textParams, handleView, view, viewRef } = props;
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  return (
    <group>
      <mesh
        receiveShadow
        {...props}
        ref={mesh}
        scale={1}
        onClick={(event) => {
          if (!viewRef || viewRef.childElementCount < 1) {
            handleView(event, view);
            setActive(!active);
          }
        }}
        onPointerOver={(event) => {
          if (!viewRef || viewRef.childElementCount < 1) {
            setHover(true);
          }
        }}
        onPointerOut={(event) => {
          setHover(false);
        }}
        rotation={textParams.rotation}
      >
        <boxGeometry args={[0.7, 0.25, 0.3]} />
        <meshStandardMaterial color={0x2b5bb5} />
      </mesh>

      <Text
        position={textParams.position}
        rotation={textParams.rotation}
        text={textParams.text}
        hovered={hovered}
      />
    </group>
  );
}

export default ButtonsThreeD;
