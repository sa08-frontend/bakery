import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshWobbleMaterial, useTexture } from '@react-three/drei';
import * as THREE from 'three';

export function CookieModel({ 
  color = '#8B4513', 
  scale = 1, 
  hover = false,
  name = ''
}: { 
  color?: string, 
  scale?: number, 
  hover?: boolean,
  name?: string
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  // Loading a realistic dough texture
  const texture = useTexture('https://picsum.photos/seed/bakery-dough/512/512');
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(2, 2);

  useFrame((state) => {
    if (meshRef.current) {
      // Rotation speed
      const rotationSpeed = hover ? 0.02 : 0.005;
      meshRef.current.rotation.y += rotationSpeed;

      // Bobbing effect when hovered
      if (hover) {
        meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 4) * 0.1 + 0.1;
      } else {
        // Subtle breathing effect when idle
        const breathing = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.02;
        meshRef.current.scale.set(breathing, breathing, breathing);
        meshRef.current.position.y = 0;
      }
    }
  });
  const isChoco = name.toLowerCase().includes('choco');
  const isWalnut = name.toLowerCase().includes('walnut');
  const isRaisin = name.toLowerCase().includes('raisin');
  const isMuesli = name.toLowerCase().includes('muesli');
  const isShrewsbury = name.toLowerCase().includes('shrewsbury');
  
  const toppingColor = isChoco ? '#1a0f0a' : isWalnut ? '#704214' : isRaisin ? '#2b1d0e' : '#d2b48c';
  const toppingCount = isShrewsbury ? 0 : (isMuesli ? 15 : 8);

  return (
    <group scale={scale}>
      <mesh ref={meshRef} castShadow receiveShadow>
        <cylinderGeometry args={[1, 1, 0.2, 32]} />
        <MeshWobbleMaterial 
          map={texture}
          color={color} 
          factor={hover ? 0.2 : 0.05} 
          speed={2} 
          roughness={0.9}
          metalness={0.05}
        />
      </mesh>
      
      {[...Array(toppingCount)].map((_, i) => {
        const angle = (i / toppingCount) * Math.PI * 2;
        const radius = 0.3 + Math.random() * 0.4;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        
        return (
          <mesh 
            key={i} 
            position={[x, 0.11, z]}
            rotation={[Math.random(), Math.random(), Math.random()]}
          >
            {isWalnut ? (
              <boxGeometry args={[0.2, 0.1, 0.15]} />
            ) : (
              <sphereGeometry args={[isMuesli ? 0.05 : 0.1, 8, 8]} />
            )}
            <meshStandardMaterial color={toppingColor} roughness={0.6} />
          </mesh>
        );
      })}
    </group>
  );
}

export function StickModel({ color = '#D2B48C', scale = 1, hover = false }: { color?: string, scale?: number, hover?: boolean }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  // Loading a realistic bread/crust texture
  const texture = useTexture('https://picsum.photos/seed/bread-crust/512/512');
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(1, 4);

  useFrame((state) => {
    if (meshRef.current) {
      // Rotation speed
      const rotationSpeed = hover ? 0.02 : 0.005;
      meshRef.current.rotation.y += rotationSpeed;

      // Bobbing effect when hovered
      if (hover) {
        meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 4) * 0.1 + 0.1;
      } else {
        // Subtle breathing effect when idle
        const breathing = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.02;
        meshRef.current.scale.set(breathing, breathing, breathing);
        meshRef.current.position.y = 0;
      }
    }
  });

  return (
    <group scale={scale} rotation={[Math.PI / 4, 0, 0]}>
      <mesh ref={meshRef} castShadow receiveShadow>
        <cylinderGeometry args={[0.15, 0.15, 2.5, 16]} />
        <meshStandardMaterial 
          map={texture}
          color={color} 
          roughness={1}
          metalness={0}
        />
      </mesh>
      
      {[...Array(12)].map((_, i) => (
        <mesh 
          key={i} 
          position={[
            (Math.random() - 0.5) * 0.2,
            (Math.random() - 0.5) * 2,
            (Math.random() - 0.5) * 0.2
          ]}
          rotation={[Math.random(), Math.random(), Math.random()]}
        >
          <boxGeometry args={[0.08, 0.15, 0.05]} />
          <meshStandardMaterial color="#F5DEB3" />
        </mesh>
      ))}
    </group>
  );
}

export function ChocolateChipModel({ scale = 1 }: { scale?: number }) {
  return (
    <mesh scale={scale} castShadow>
      <sphereGeometry args={[0.1, 8, 8]} />
      <meshStandardMaterial color="#1a0f0a" roughness={0.4} />
    </mesh>
  );
}

export function NutModel({ scale = 1 }: { scale?: number }) {
  return (
    <mesh scale={scale} castShadow>
      <boxGeometry args={[0.15, 0.1, 0.12]} />
      <meshStandardMaterial color="#704214" roughness={0.8} />
    </mesh>
  );
}

export function WheatModel({ scale = 1 }: { scale?: number }) {
  return (
    <group scale={scale}>
      {[...Array(5)].map((_, i) => (
        <mesh key={i} position={[0, i * 0.15, 0]} rotation={[0.5, i, 0]}>
          <sphereGeometry args={[0.08, 8, 4]} />
          <meshStandardMaterial color="#F5DEB3" roughness={1} />
        </mesh>
      ))}
      <mesh position={[0, 0.3, 0]}>
        <cylinderGeometry args={[0.01, 0.01, 0.8, 8]} />
        <meshStandardMaterial color="#F5DEB3" />
      </mesh>
    </group>
  );
}
