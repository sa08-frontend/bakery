import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera, Environment, Float, Sparkles } from '@react-three/drei';
import { CookieModel, StickModel } from './Models';
import { Suspense } from 'react';

export function SuccessScene() {
  return (
    <div className="w-full h-48 mb-8">
      <Canvas shadows dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />
        <Suspense fallback={null}>
          <Environment preset="sunset" />
          <ambientLight intensity={0.5} />
          
          <Float speed={4} rotationIntensity={2} floatIntensity={2}>
            <group position={[-1.5, 0, 0]}>
              <CookieModel color="#8B4513" scale={1.2} />
            </group>
          </Float>

          <Float speed={3} rotationIntensity={3} floatIntensity={2.5}>
            <group position={[1.5, 0, 0]} rotation={[0, 0, Math.PI / 4]}>
              <StickModel color="#D2B48C" scale={1} />
            </group>
          </Float>

          <Sparkles count={100} scale={5} size={2} speed={1} color="#FFD700" />
        </Suspense>
      </Canvas>
    </div>
  );
}
