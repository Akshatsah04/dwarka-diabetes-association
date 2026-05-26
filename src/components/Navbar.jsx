import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar({
  isScrolled,
  mobileMenuOpen,
  setMobileMenuOpen,
  activeSection,
  handleNavClick
}) {
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled
        ? 'bg-white/90 backdrop-blur-md shadow-md border-b border-navy-100 py-3'
        : 'bg-transparent py-5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2 group text-left cursor-pointer"
          >
            <div className="flex items-center justify-center p-1 rounded-xl bg-white shadow-md group-hover:scale-105 transition-transform duration-300 w-11 h-11 flex-shrink-0">
              <img src="/logo.webp" alt="DDA Logo" className="w-full h-full object-contain" />
            </div>
            <div>
              <span className={`text-xl font-bold tracking-wider font-sans block ${isScrolled ? 'text-navy-900' : 'text-white'}`}>
                DDA
              </span>
              <span className={`text-[9px] uppercase tracking-widest block font-bold ${isScrolled ? 'text-medical-600' : 'text-skycare-200'}`}>
                Dwarka Diabetes Association
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {['home', 'about', 'gallery', 'team', 'mission', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => handleNavClick(section)}
                className={`px-4 py-2 text-sm font-semibold rounded-xl capitalize tracking-wide transition-all duration-300 relative ${activeSection === section
                  ? isScrolled ? 'text-medical-600 bg-medical-50' : 'text-white bg-white/10'
                  : isScrolled ? 'text-navy-600 hover:text-medical-600 hover:bg-navy-50' : 'text-navy-200 hover:text-white hover:bg-white/5'
                  }`}
              >
                {section}
                {activeSection === section && (
                  <motion.div
                    layoutId="activeIndicator"
                    className={`absolute bottom-1 left-4 right-4 h-0.5 rounded-full ${isScrolled ? 'bg-medical-500' : 'bg-white'}`}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Mobile Hamburger Trigger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-xl transition-all duration-300 ${isScrolled
                ? 'text-navy-800 hover:bg-navy-100'
                : 'text-white hover:bg-white/10'
                }`}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-navy-100 overflow-hidden shadow-lg"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {['home', 'about', 'gallery', 'team', 'mission', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => handleNavClick(section)}
                  className={`block w-full text-left px-4 py-3 rounded-xl text-base font-semibold capitalize transition-all duration-300 ${activeSection === section
                    ? 'text-medical-600 bg-medical-50 border-l-4 border-medical-500'
                    : 'text-navy-600 hover:text-medical-500 hover:bg-navy-50'
                    }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
