import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment, Float, Stars, Sparkles } from '@react-three/drei';
import { CookieModel, StickModel, ChocolateChipModel, NutModel, WheatModel } from './Models';
import { Suspense } from 'react';

export function BakeryScene() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas shadows dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={50} />
        <Suspense fallback={null}>
          <Environment preset="sunset" />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} castShadow />
          <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />

          <Float speed={2} rotationIntensity={1} floatIntensity={1}>
            <group position={[-3, 1, 0]}>
              <CookieModel color="#8B4513" scale={1.5} />
            </group>
          </Float>

          <Float speed={1.5} rotationIntensity={2} floatIntensity={1.5}>
            <group position={[3, -1, 1]}>
              <StickModel color="#D2B48C" scale={1.2} />
            </group>
          </Float>

          <Float speed={3} rotationIntensity={0.5} floatIntensity={2}>
            <group position={[0, 2, -2]}>
              <CookieModel color="#DEB887" scale={0.8} />
            </group>
          </Float>

          {/* Floating Ingredients */}
          {[...Array(10)].map((_, i) => (
            <Float key={`chip-${i}`} speed={1 + Math.random()} rotationIntensity={2} floatIntensity={1}>
              <group position={[(Math.random() - 0.5) * 10, (Math.random() - 0.5) * 10, (Math.random() - 0.5) * 5]}>
                <ChocolateChipModel scale={0.5 + Math.random()} />
              </group>
            </Float>
          ))}

          {[...Array(5)].map((_, i) => (
            <Float key={`nut-${i}`} speed={1 + Math.random()} rotationIntensity={2} floatIntensity={1}>
              <group position={[(Math.random() - 0.5) * 10, (Math.random() - 0.5) * 10, (Math.random() - 0.5) * 5]}>
                <NutModel scale={0.8 + Math.random()} />
              </group>
            </Float>
          ))}

          {[...Array(8)].map((_, i) => (
            <Float key={`wheat-${i}`} speed={1 + Math.random()} rotationIntensity={1} floatIntensity={1}>
              <group position={[(Math.random() - 0.5) * 12, (Math.random() - 0.5) * 10, (Math.random() - 0.5) * 5]}>
                <WheatModel scale={0.6 + Math.random() * 0.4} />
              </group>
            </Float>
          ))}

          <Sparkles count={100} scale={10} size={1} speed={0.5} color="#F5DEB3" />
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        </Suspense>
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
}
