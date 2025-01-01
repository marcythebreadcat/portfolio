'use client';

import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, Environment, PresentationControls, OrbitControls, Stage } from '@react-three/drei';
import { motion } from 'framer-motion';

function Model({ url }: { url: string }) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} position={[0, 0, 0]} scale={1.5} />;
}

function Loader() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="relative w-24 h-24">
        <div className="absolute inset-0 border-4 border-amber-500/20 rounded-full"></div>
        <motion.div 
          className="absolute inset-0 border-4 border-t-amber-500 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        ></motion.div>
      </div>
    </div>
  );
}

export function ModelViewer({ url }: { url: string }) {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [10, 5, 10], fov: 45 }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <Stage environment="city" intensity={0.5}>
            <Model url={url} />
          </Stage>
          <OrbitControls 
            autoRotate
            autoRotateSpeed={0.5}
            enableZoom={true}
            enablePan={true}
            minDistance={5}
            maxDistance={20}
            minPolarAngle={Math.PI / 4}
            maxPolarAngle={Math.PI / 1.5}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}

export { Loader };
