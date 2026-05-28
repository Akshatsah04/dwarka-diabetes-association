import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import './App.css';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

// Import Static Data Layer
import { teamData, galleryImages } from './data/ddaData';

// Import Modular Components
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import Lightbox from './components/Lightbox';
import Team from './components/Team';
import Mission from './components/Mission';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [lightboxImage, setLightboxImage] = useState(null);

  // 1. Initial mounting simulated load time to trigger heartbeat loading screen
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  // 2. Global Scroll Event handling (adapt header transparency, scroll-to-top, and intersection highlight)
  useEffect(() => {
    const handleScroll = () => {
      // adapt navbar background opacity
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // show/hide scroll-to-top float button
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }

      // Highlight active section on scroll tracking
      const sections = ['home', 'about', 'gallery', 'team', 'mission', 'contact'];
      const scrollPosition = window.scrollY + 160; // offset for fixed header

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 3. Smooth page-scroll controller targeting anchors cleanly
  const handleNavClick = (sectionId) => {
    setMobileMenuOpen(false); // Close mobile drawer overlay if open
    
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      const headerOffset = 80; // height of fixed navbar
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="relative min-h-screen font-sans selection:bg-medical-500 selection:text-white bg-navy-50">

      {/* 1. INITIAL MOUNT HEARTBEAT LOADER */}
      <AnimatePresence>
        {loading && <Loader />}
      </AnimatePresence>

      {/* 2. TRANSLUCENT FIXED NAVBAR */}
      <Navbar
        isScrolled={isScrolled}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        activeSection={activeSection}
        handleNavClick={handleNavClick}
      />

      {/* 3. HERO LANDING SECTION */}
      <Hero handleNavClick={handleNavClick} />

      {/* 4. ABOUT SECTION ("WHO WE ARE") */}
      <About handleNavClick={handleNavClick} />

      {/* 5. GALLERY SECTION */}
      <Gallery galleryImages={galleryImages} setLightboxImage={setLightboxImage} />

      {/* 6. IMMERSIVE LIGHTBOX POPUP MODAL */}
      <Lightbox lightboxImage={lightboxImage} setLightboxImage={setLightboxImage} />

      {/* 7. TEAM GRID BOARD */}
      <Team teamData={teamData} />

      {/* 8. MISSION AND CORE PILLARS BLOCK */}
      <Mission />

      {/* 9. CONTACT DETAILS, MAP, AND FORM */}
      <Contact />

      {/* 10. SYSTEM FOOTER */}
      <Footer handleNavClick={handleNavClick} />

      {/* 11. FLOATING BACK TO TOP BUTTON */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-6 right-6 p-4 bg-medical-500 hover:bg-medical-600 text-white rounded-2xl shadow-xl hover:shadow-medical-500/35 transition-all z-30 cursor-pointer group"
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>



      <Analytics />
      <SpeedInsights />

    </div>
  );
}
