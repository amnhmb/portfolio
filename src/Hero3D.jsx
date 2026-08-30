import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Icosahedron, MeshDistortMaterial, Float } from '@react-three/drei';

export default function Hero3D() {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      <Icosahedron args={[1.5, 2]} ref={meshRef}>
        <MeshDistortMaterial 
          color="#aa3bff" 
          wireframe={true}
          distort={0.4} 
          speed={2} 
          roughness={0.2}
        />
      </Icosahedron>
    </Float>
  );
}
