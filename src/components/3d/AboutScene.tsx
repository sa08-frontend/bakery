import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera, Environment, Float, PresentationControls } from '@react-three/drei';
import { CookieModel, StickModel, ChocolateChipModel, NutModel, WheatModel } from './Models';
import { Suspense } from 'react';

export function AboutScene() {
  return (
    <div className="w-full h-full">
      <Canvas shadows dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />
        <Suspense fallback={null}>
          <Environment preset="sunset" />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} castShadow />
          
          <PresentationControls
            global
            snap
            rotation={[0, 0.3, 0]}
            polar={[-Math.PI / 3, Math.PI / 3]}
            azimuth={[-Math.PI / 1.4, Math.PI / 1.4]}
          >
            <Float speed={2} rotationIntensity={1} floatIntensity={1}>
              <group position={[0, 0.5, 0]}>
                <CookieModel color="#8B4513" scale={1.2} />
              </group>
            </Float>

            <Float speed={1.5} rotationIntensity={2} floatIntensity={1.5}>
              <group position={[1, -1, 0.5]} rotation={[0, 0, Math.PI / 6]}>
                <StickModel color="#D2B48C" scale={0.8} />
              </group>
            </Float>

            <Float speed={2.5} rotationIntensity={1.5} floatIntensity={2}>
              <group position={[-1.2, -0.5, -0.5]}>
                <CookieModel color="#DEB887" scale={0.7} />
              </group>
            </Float>

            {/* Decorative ingredients */}
            <Float speed={3} rotationIntensity={2} floatIntensity={1}>
              <group position={[1.5, 0.5, -1]}>
                <ChocolateChipModel scale={0.8} />
              </group>
            </Float>

            <Float speed={2} rotationIntensity={2} floatIntensity={1}>
              <group position={[-1.5, 1, -0.5]}>
                <NutModel scale={1} />
              </group>
            </Float>

            <Float speed={1.5} rotationIntensity={1} floatIntensity={1}>
              <group position={[0, -1.5, -1]}>
                <WheatModel scale={0.8} />
              </group>
            </Float>
          </PresentationControls>
        </Suspense>
      </Canvas>
    </div>
  );
}
