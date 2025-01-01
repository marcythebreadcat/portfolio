'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Model3D } from '@/data/models';

export function ModelCard({ model }: { model: Model3D }) {
  const handleClick = () => {
    // Store the current scroll position in session storage
    sessionStorage.setItem('lastScrollPosition', window.scrollY.toString());
  };

  return (
    <Link href={`/models/${model.id}`} onClick={handleClick}>
      <motion.div
        layoutId={`card-container-${model.id}`}
        className="group relative bg-zinc-900 rounded-lg overflow-hidden hover:shadow-2xl hover:shadow-amber-500/20 transition-all duration-300"
      >
        <motion.div
          layoutId={`card-image-container-${model.id}`}
          className="relative h-64 bg-zinc-800"
        >
          <Image
            src={model.imageUrl}
            alt={model.title}
            fill
            className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
          />
        </motion.div>
        <motion.div 
          layoutId={`card-content-${model.id}`}
          className="p-6"
        >
          <motion.h2 
            layoutId={`title-${model.id}`}
            className="text-2xl font-bold text-white mb-3"
          >
            {model.title}
          </motion.h2>
          <motion.p 
            layoutId={`description-${model.id}`}
            className="text-amber-500/80 text-sm leading-relaxed mb-4"
          >
            {model.description}
          </motion.p>
          <div className="flex justify-end">
            <button className="px-4 py-2 text-sm text-white bg-transparent border border-amber-500/50 rounded-md hover:bg-amber-500/10 transition-colors duration-300">
              View Details
            </button>
          </div>
        </motion.div>
      </motion.div>
    </Link>
  );
}
