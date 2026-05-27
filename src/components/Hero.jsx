import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

export default function Hero({ handleNavClick }) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-navy-950 overflow-hidden pt-20"
    >
      {/* Rich Background with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-luminosity scale-105 transform motion-safe:animate-[pulse-slow_8s_ease-in-out_infinite]"
        style={{ backgroundImage: `url('/hero_medical_bg.webp')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/80 to-navy-900/60" />

      {/* Floating background blobs */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-medical-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-skycare-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex flex-col items-center"
        >
          {/* Logo */}
          <div className="mb-6 p-3 bg-white/95 rounded-3xl shadow-2xl border border-navy-100/30 w-24 h-24 flex items-center justify-center hover:scale-105 transition-transform duration-500 backdrop-blur-md">
            <img src="/logo.webp" alt="DDA Logo" className="w-full h-full object-contain" />
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-10 leading-tight max-w-5xl font-sans">
            DWARKA DIABETES <br />
            <span className="bg-gradient-to-r from-medical-300 via-skycare-300 to-medical-200 bg-clip-text text-transparent">
              ASSOCIATION
            </span>
          </h1>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => handleNavClick('about')}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-medical-500 to-skycare-500 hover:from-medical-600 hover:to-skycare-600 text-white font-bold rounded-2xl shadow-lg hover:shadow-medical-500/20 shadow-medical-500/10 transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              Learn About DDA
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold rounded-2xl backdrop-blur-md transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Contact Us
            </button>
          </div>
        </motion.div>

        {/* Quick Stat Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          className="mt-20 max-w-4xl mx-auto grid grid-cols-3 gap-2 sm:gap-8 border border-white/10 rounded-3xl p-4 sm:p-8 bg-white/5 backdrop-blur-md"
        >
          {[
            { val: '800+', label: 'CME' },
            { val: '100+', label: 'Wellness Camps' },
            { val: '300+', label: 'Expert Doctors' }
          ].map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-2xl sm:text-4xl font-extrabold text-white bg-gradient-to-r from-medical-300 to-skycare-300 bg-clip-text text-transparent">
                {stat.val}
              </div>
              <div className="text-xxs sm:text-xs md:text-sm text-navy-300 mt-1 font-semibold uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-10">
        <svg className="relative block w-full h-[60px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C26.9,8.75,57.05,18.3,87.43,26.24,151.75,43.08,220.19,57.17,321.39,56.44Z" className="fill-navy-50"></path>
        </svg>
      </div>
    </section>
  );
}
