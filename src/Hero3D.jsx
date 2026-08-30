import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Icosahedron, Float } from '@react-three/drei';

export default function Hero3D() {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      // Very slow, calm rotation
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.05;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.08;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <Icosahedron args={[1.8, 4]} ref={meshRef}>
        <meshPhysicalMaterial 
          color="#ffffff"
          metalness={0.1}
          roughness={0}
          transmission={0.9} // Glass-like transparency
          thickness={1}
          envMapIntensity={2}
          clearcoat={1}
          clearcoatRoughness={0}
        />
      </Icosahedron>
    </Float>
  );
}
