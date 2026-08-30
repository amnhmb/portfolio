import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Icosahedron, MeshDistortMaterial, Float, Edges } from '@react-three/drei';

export default function Hero3D() {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      // Slower, calmer rotation
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.05;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.08;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <Icosahedron args={[1.8, 1]} ref={meshRef}>
        <MeshDistortMaterial 
          color="#0ea5e9" 
          transparent
          opacity={0.15}
          distort={0.2} 
          speed={1.5} 
          roughness={0.5}
        />
        {/* Wireframe edges for a tech/hardware feel but kept calm and thin */}
        <Edges
          scale={1}
          threshold={15} 
          color="#0ea5e9"
          transparent
          opacity={0.4}
        />
      </Icosahedron>
    </Float>
  );
}
