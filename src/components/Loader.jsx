import React from 'react';
import { motion } from 'framer-motion';

export default function Loader() {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-navy-950 text-white"
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      <div className="relative flex items-center justify-center">
        <motion.div
          className="absolute w-24 h-24 rounded-full bg-medical-500/20"
          animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute w-16 h-16 rounded-full bg-skycare-500/30"
          animate={{ scale: [1, 1.6, 1], opacity: [0.4, 0, 0.4] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
        />
        <div className="relative p-2 bg-white rounded-full shadow-2xl overflow-hidden w-24 h-24 flex items-center justify-center">
          <img src="/logo.webp" alt="DDA Logo" className="w-20 h-20 object-contain animate-pulse" />
        </div>
      </div>
      <motion.h2
        className="mt-6 text-xl md:text-2xl font-bold tracking-wide text-white uppercase"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        Dwarka Diabetes Association
      </motion.h2>
    </motion.div>
  );
}
