'use client';

import { models } from '@/data/models';
import { ModelCard } from '@/components/ModelCard';
import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 2.5 // Delay grid animation until after intro
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

// Lightning effect component
function Lightning() {
  return (
    <motion.div
      className="absolute inset-0 pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 1, 0, 0.5, 0] }}
      transition={{
        duration: 0.5,
        times: [0, 0.1, 0.3, 0.4, 0.5],
        ease: "easeOut",
      }}
    >
      <div className="absolute inset-0 bg-amber-500/20" />
      <div className="absolute inset-0 bg-gradient-to-b from-amber-500/10 to-transparent" />
    </motion.div>
  );
}

export default function Home() {
  const [showLightning, setShowLightning] = useState(false);
  const introRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Trigger lightning effect after a delay
    const timer = setTimeout(() => {
      setShowLightning(true);
    }, 500);

    // Restore scroll position if returning from model detail
    const lastScrollPosition = sessionStorage.getItem('lastScrollPosition');
    // if (lastScrollPosition) {
    //   window.scrollTo({
    //     top: parseInt(lastScrollPosition),
    //     behavior: 'instant'
    //   });
    //   sessionStorage.removeItem('lastScrollPosition');
    // }

    return () => clearTimeout(timer);
  }, []);

  const scrollToProjects = () => {
    introRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        {showLightning && <Lightning />}
        <div className="text-center z-10 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
              Hi, I'm <span className="text-amber-500">Sodbileg</span>
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            <p className="text-xl md:text-2xl text-zinc-400 mb-12">
              Electrical Engineer & 3D Model Designer
            </p>
          </motion.div>
          <motion.button
            onClick={scrollToProjects}
            className="px-8 py-4 text-lg font-medium text-white bg-amber-500/10 border border-amber-500/20 rounded-lg hover:bg-amber-500/20 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Projects
          </motion.button>
        </div>
        {/* Animated circuit lines */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.25 }}
          transition={{ duration: 1, delay: 1.8 }}
        >
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0">
            <pattern id="circuit" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
              <path
                d="M10 10h30v30h-30z M15 25h20 M25 15v20 M40 25h10 M25 0v10 M25 40v10 M0 25h10"
                stroke="currentColor"
                strokeWidth="1"
                fill="none"
                className="text-amber-500/30"
              />
              <circle cx="25" cy="25" r="3" className="fill-amber-500/30" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#circuit)" />
          </svg>
        </motion.div>
      </div>

      {/* Projects Section */}
      <div ref={introRef} className="max-w-7xl mx-auto px-8 py-24">
        <div 
          // variants={container}
          // initial="hidden"
          // animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {models.map((model) => (
            <motion.div key={model.id} variants={item}>
              <ModelCard model={model} />
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}