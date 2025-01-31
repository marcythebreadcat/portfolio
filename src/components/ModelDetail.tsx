'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Model3D } from '@/data/models';
import { useRouter } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const ModelViewer = dynamic(() => import('./ModelViewer').then(mod => mod.ModelViewer), {
  ssr: false,
  loading: () => <div className="w-full h-full flex items-center justify-center">
    <div className="relative w-24 h-24">
      <div className="absolute inset-0 border-4 border-amber-500/20 rounded-full"></div>
      <motion.div 
        className="absolute inset-0 border-4 border-t-amber-500 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      ></motion.div>
    </div>
  </div>
});

export function ModelDetail({ model }: { model: Model3D }) {
  const router = useRouter();
  const [showModel, setShowModel] = useState(false);
  const scrollPosition = useRef(window.scrollY);

  useEffect(() => {
    // Store the scroll position when component mounts
    if(!scrollPosition.current) scrollPosition.current = window.scrollY;
  }, []);

  const handleClose = () => {
    // Restore scroll position before navigation
    window.scrollTo({
      top: scrollPosition.current,
      behavior: 'instant'
    });
  
    // Check if there's history to go back to
    if (window.history.length > 2) {
      router.back();
    } else {
      router.push('/');
    }
  };

  const handleViewModel = () => {
    setShowModel(true);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2, delay: 0.1 }}
        style={{ pointerEvents: "auto" }}
        className="fixed inset-0 z-50 overflow-hidden"
      >
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, delay: 0.1 }}
          className="absolute inset-0 pointer-events-none bg-black/90 backdrop-blur-md" 
        />

        <AnimatePresence>
          {showModel ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-60 bg-black"
            >
              <motion.button
                onClick={() => setShowModel(false)}
                className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-zinc-800/50 backdrop-blur-sm text-white/80 hover:bg-zinc-700/50 hover:text-white transition-all duration-300 flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                ✕
              </motion.button>
              <div className="w-screen h-screen relative">
                <Suspense fallback={<div className="w-full h-full flex items-center justify-center">
                  <div className="relative w-24 h-24">
                    <div className="absolute inset-0 border-4 border-amber-500/20 rounded-full"></div>
                    <motion.div 
                      className="absolute inset-0 border-4 border-t-amber-500 rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    ></motion.div>
                  </div>
                </div>}>
                  <ModelViewer url={model.modelUrl} />
                </Suspense>
              </div>
            </motion.div>
          ) : (
            <div className="pointer-events-auto w-full h-screen overflow-y-auto">
              <div className="min-h-screen p-8">
                <motion.div
                  layoutId={`card-container-${model.id}`}
                  className="relative bg-zinc-900 rounded-lg overflow-hidden max-w-6xl mx-auto shadow-2xl shadow-amber-500/10"
                >
                  <motion.div
                    layoutId={`card-image-container-${model.id}`}
                    className="relative h-[50vh] lg:h-[60vh]"
                  >
                    <Image
                      src={model.imageUrl}
                      alt={model.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-900/90" />
                  </motion.div>
                  <motion.div 
                    layoutId={`card-content-${model.id}`}
                    className="relative -mt-20 p-8 bg-gradient-to-t from-zinc-900 via-zinc-900/95 to-transparent"
                  >
                    <motion.h2
                      layoutId={`title-${model.id}`}
                      className="text-4xl font-bold text-white mb-4"
                    >
                      {model.title}
                    </motion.h2>
                    <motion.p
                      layoutId={`description-${model.id}`}
                      className="text-amber-500/80 text-lg mb-6"
                    >
                      {model.description}
                    </motion.p>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ delay: 0.3 }}
                      className="h-px w-full bg-amber-500/20 my-6"
                    />
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ delay: 0.4 }}
                      className="prose prose-invert prose-amber max-w-none mb-6"
                    >
                      <div 
                        className="text-zinc-300/90 text-lg leading-relaxed [&_ul]:mt-4 [&_ul]:space-y-2 [&_ul]:list-disc [&_ul]:pl-5 [&_li]:text-zinc-300/90"
                        dangerouslySetInnerHTML={{ __html: model.fullDescription }}
                      />
                    </motion.div>
                    <motion.button
                      onClick={handleViewModel}
                      className="w-full py-3 text-lg font-medium text-white bg-amber-500/10 border border-amber-500/20 rounded-lg hover:bg-amber-500/20 transition-colors duration-300 flex items-center justify-center gap-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
                        <path fillRule="evenodd" d="M.664 10.59a1.651 1.651 0 010-1.186A10.004 10.004 0 0110 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0110 17c-4.257 0-7.893-2.66-9.336-6.41zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                      </svg>
                      View 3D Model
                    </motion.button>
                  </motion.div>
                  <motion.button
                    onClick={handleClose}
                    className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-zinc-800/50 backdrop-blur-sm text-white/80 hover:bg-zinc-700/50 hover:text-white transition-all duration-300 flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    ✕
                  </motion.button>
                </motion.div>
              </div>
            </div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
}
