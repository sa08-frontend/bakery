import { Canvas } from '@react-three/fiber';
import { Stars, Sparkles, Float } from '@react-three/drei';
import { Suspense } from 'react';
import { ChocolateChipModel, NutModel } from './Models';

export function GlobalBackground() {
  return (
    <div className="fixed inset-0 -z-20 pointer-events-none opacity-30">
      <Canvas dpr={[1, 2]}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.2} />
          <pointLight position={[10, 10, 10]} intensity={0.5} />
          
          <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade speed={0.5} />
          <Sparkles count={50} scale={20} size={2} speed={0.2} color="#F5DEB3" />

          {/* Very subtle floating elements in the far background */}
          {[...Array(5)].map((_, i) => (
            <Float key={`bg-chip-${i}`} speed={0.5} rotationIntensity={1} floatIntensity={1}>
              <group position={[(Math.random() - 0.5) * 20, (Math.random() - 0.5) * 20, -10]}>
                <ChocolateChipModel scale={0.3} />
              </group>
            </Float>
          ))}

          {[...Array(3)].map((_, i) => (
            <Float key={`bg-nut-${i}`} speed={0.4} rotationIntensity={1} floatIntensity={1}>
              <group position={[(Math.random() - 0.5) * 20, (Math.random() - 0.5) * 20, -12]}>
                <NutModel scale={0.4} />
              </group>
            </Float>
          ))}
        </Suspense>
      </Canvas>
    </div>
  );
}
