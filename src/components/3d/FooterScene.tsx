import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera, Environment, Float } from '@react-three/drei';
import { CookieModel } from './Models';
import { Suspense } from 'react';

export function FooterScene() {
  return (
    <div className="w-24 h-24 mx-auto mb-4">
      <Canvas dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 0, 3]} fov={50} />
        <Suspense fallback={null}>
          <Environment preset="sunset" />
          <ambientLight intensity={0.5} />
          
          <Float speed={2} rotationIntensity={1} floatIntensity={1}>
            <CookieModel color="#8B4513" scale={0.8} />
          </Float>
        </Suspense>
      </Canvas>
    </div>
  );
}
