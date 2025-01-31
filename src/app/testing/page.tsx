"use client";

import * as React from "react";
import { Suspense, useLayoutEffect } from "react";
import { Canvas } from "@react-three/fiber";
import {
  useGLTF,
  Environment,
  OrbitControls,
  Bounds,
  Stage,
} from "@react-three/drei";
import { motion } from "framer-motion";
import * as THREE from "three";

function Model({ url }: { url: string }) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} />;
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

export default function ModelViewer() {
  return (
    <div className="w-screen h-screen">
      <Canvas shadows camera={{ fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} castShadow />

        <Stage environment="city" intensity={0.5}>
          <Model url={"/portfolio/models/pinal.glb"} />
        </Stage>

        <OrbitControls
          autoRotate
          enablePan={true}
          enableZoom={true}
          enableDamping={true}
          dampingFactor={0.05}
        />
      </Canvas>
    </div>
  );
}
