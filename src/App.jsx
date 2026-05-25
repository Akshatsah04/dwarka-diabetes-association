import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Activity,
  Heart,
  Users,
  MapPin,
  Phone,
  Mail,
  Menu,
  X,
  ArrowUp,
  Check,
  Calendar,
  Award,
  ChevronRight,
  ShieldAlert,
  Clock,
  ExternalLink,
  ChevronLeft
} from 'lucide-react';
import './App.css';

// Custom data for Team Section
const teamData = {
  founders: [
    {
      name: 'Dr. Amitabh Khanna',
      role: 'Founding Chairman (Est. Aug 27, 2011)',
      qualifications: 'MD, Senior Diabetologist & Clinical Advisor',
      avatar: '/amitabh_khanna.webp',
    },
    {
      name: 'Dr. Anupama Khanna',
      role: 'Co-Founder & Chief Diabetologist',
      qualifications: 'MD (Medicine), Senior Consultant Endocrinologist',
      avatar: '/anupama_khanna.webp',
    },
  ],
  patrons: [
    {
      name: 'Dr. Vinod Mittal',
      role: 'Senior Medical Patron & Consultant Cardiologist',
      qualifications: 'MD, DM (Cardiology), Senior Consultant',
      avatar: '/vinod_mittal.webp',
    },
    {
      name: 'Dr. Sanjeev Gulati',
      role: 'Senior Medical Patron & Consultant Nephrologist',
      qualifications: 'MD, DM (Nephrology), Senior Consultant & Director',
      avatar: '/sanjeev_gulati.webp',
    },
    {
      name: 'Dr. Saket Kant',
      role: 'Senior Medical Patron & Consultant Endocrinologist',
      qualifications: 'MD, DM (Endocrinology), Diabetologist',
      avatar: '/saket_kant.webp',
    },
  ],
  executives: [
    {
      name: 'Dr. Deepak Arora',
      role: 'Executive Coordinator & General Physician',
      qualifications: 'MBBS, Family Medicine Specialist',
      avatar: '/deepak_arora.webp',
    },
    {
      name: 'Dr. Manoj Sinha',
      role: 'Executive Director & Senior Consultant',
      qualifications: 'MBBS, MD (Medicine), Senior Advisor',
      avatar: '/manoj_sinha.webp',
    },
    {
      name: 'Dr. Prabhat Sinha',
      role: 'Executive Consultant & Medical Specialist',
      qualifications: 'MBBS, MD, Max Healthcare Consultant',
      avatar: '/prabhat_sinha.webp',
    },
    {
      name: 'Dr. Naveen Bajaj',
      role: 'Executive Consultant & Pediatric Diabetologist',
      qualifications: 'MBBS, MD (Pediatrics), Clinical Diabetologist',
      avatar: '/naveen_bajaj.webp',
    },
    {
      name: 'Dr. Prasenjit Panda',
      role: 'Executive Consultant & Clinical Diabetologist',
      qualifications: 'MBBS, MD (Medicine), Senior Specialist',
      avatar: '/prasenjit_panda.webp',
    },
    {
      name: 'Dr. Chandramani Punjabi',
      role: 'Executive Consultant & Senior Diabetologist',
      qualifications: 'MBBS, MD (Medicine), Senior Advisor',
      avatar: '/chandramani_punjabi.webp',
    },
    {
      name: 'Dr. Shamshad Ali',
      role: 'Executive Consultant & Clinical Specialist',
      qualifications: 'MBBS, MD (Medicine), Senior Clinical Advisor',
      avatar: '/shamshad_ali.webp',
    },
    {
      name: 'Dr. Manoj Rawat',
      role: 'Executive Consultant & Clinical Specialist',
      qualifications: 'MBBS, MD (Medicine), Senior Advisor',
      avatar: '/manoj_rawat.webp',
    },
    {
      name: 'Dr. Amit Pendharkar',
      role: 'Executive Consultant & Senior Cardiologist',
      qualifications: 'MBBS, MD, DM (Cardiology), Senior Advisor',
      avatar: '/amit_pendharkar.webp',
    },
    {
      name: 'Dr. Amit Ranjan Sultania',
      role: 'Executive Consultant & Clinical Specialist',
      qualifications: 'MBBS, MD (Medicine), Senior Advisor',
      avatar: '/amit_sultania.webp',
    },

  ],
  nominated: [
    {
      name: 'Dr. Teja Ram',
      role: 'Nominated Member & Medical Advisor',
      qualifications: 'MBBS, MD, Senior Consultant',
      avatar: '/teja_ram.webp',
    },
    {
      name: 'Dr. Rakesh Mishra',
      role: 'Nominated Member & Clinical Specialist',
      qualifications: 'MBBS, MD (Medicine), General Physician',
      avatar: '/rakesh_mishra.webp',
    },
    {
      name: 'Dr. Pranav Shankar',
      role: 'Nominated Member & Senior Consultant',
      qualifications: 'MBBS, MD, Consultant Diabetologist',
      avatar: '/pranav_shankar.webp',
    }
  ]
};

// Custom data for Gallery
const galleryImages = [
  {
    id: 1,
    url: '/gallery_event_1.webp',
    title: 'Seminar: Hypertension & Comorbidities',
    description: 'Dwarka Diabetes Association hosted a scientific exchange symposium focusing on the management of hypertension and related cardiovascular risks. Dr. Amit Pendharkar spoke on therapeutic pathways, moderated by Dr. Amitabh Khanna at Radisson Blu, Dwarka.'
  },
  {
    id: 2,
    url: '/gallery_event_2.webp',
    title: 'DDA Board & Executive Members',
    description: 'Founding Chairman Dr. Amitabh Khanna and Chief Diabetologist Dr. Anupama Khanna standing with DDA executive coordinators and senior medical advisors during the Annual Scientific Exchange Meeting.'
  },
  {
    id: 3,
    url: '/gallery_event_3.webp',
    title: 'Symposium: Decoding Diabetes Care',
    description: 'Specialist physicians gathered at DDA\'s interactive colloquium focused on therapeutic advances in microbiome health, micronutrient balance, and metabolic care protocols.'
  },
  {
    id: 4,
    url: '/gallery_event_4.webp',
    title: 'Academic Rooftop Exchange Dinner',
    description: 'Prominent clinicians, advisors, and general practitioners sharing experiences and collaborating on community metabolic screening initiatives during our outdoor evening symposium.'
  },
  {
    id: 5,
    url: '/gallery_event_5.webp',
    title: 'DDA Scientific Colloquium Panel',
    description: 'DDA executive panel and delegates reviewing clinical case files, patient awareness programs, and community support pathways in Dwarka.'
  },
  {
    id: 6,
    url: '/gallery_event_6.webp',
    title: 'Felicitation of Medical Speakers',
    description: 'Founding Chairman Dr. Amitabh Khanna and DDA members presenting a wellness token of appreciation to guest speakers during a scientific academic colloquium in Dwarka.'
  },
  {
    id: 7,
    url: '/gallery_event_7.webp',
    title: 'Seminar: Metabolic Harmony Update 2026',
    description: 'DDA academic flyer inviting specialists to the Metabolic Harmony Update 2026 at Hotel Jaiminis Landmark, Dwarka. Chaired by Dr. Manoj Kumar Rawat and Dr. J. Rawat, moderated by Dr. Amitabh Khanna.'
  },
  {
    id: 8,
    url: '/gallery_event_8.webp',
    title: 'CME on Microbiome & Metabolism',
    description: 'Dr. Amitabh Khanna presenting a scientific session on gut microbiome health and insulin resistance to practicing local physicians at Fire & Ice Restaurant, Dwarka Sector 10.'
  },
  {
    id: 9,
    url: '/gallery_event_9.webp',
    title: 'CME Lecture & Closing Address',
    description: 'Scientific panel speaker delivering a CME update on patient glycemic control, concluding with an interactive Q&A session with local healthcare practitioners.'
  },
  {
    id: 10,
    url: '/gallery_event_10.webp',
    title: 'Symposium: Decoding Diabetes Care CME',
    description: 'DDA CME flyer detailing the Friday scientific symposium at Fire & Ice, Dwarka Sector 10. Featured Dr. Amitabh Khanna as speaker, Dr. Ankur Jain as chairperson, and Dr. Sharad Srivastava as moderator.'
  },
  {
    id: 11,
    url: '/gallery_event_11.webp',
    title: 'Novo Nordisk Semaglutide Power Forum',
    description: 'Dr. Amitabh Khanna presenting as moderator at the Cardio-Metabolic Health Tech Summit. The session focused on Semaglutide therapeutic outcomes and metabolic breakthroughs.'
  },
  {
    id: 12,
    url: '/gallery_event_12.webp',
    title: 'Cardio-Metabolic CME & Clinical Update',
    description: 'DDA advisory panel speaker presenting clinical research results on glycemic regulation and lipid profiling to Dwarka family physicians during an indoor CME seminar.'
  },
  {
    id: 13,
    url: '/gallery_event_13.webp',
    title: 'DDA Annual General Assembly Delegates',
    description: 'A gathering of senior female diabetologists, clinical nutritionists, and guest delegates attending the annual administrative and healthcare planning assembly of DDA.'
  },
  {
    id: 14,
    url: '/gallery_event_14.webp',
    title: 'Cardio-Metabolic Tech Summit Banquet',
    description: 'Advisory board members and delegates enjoying scientific presentations and an academic banquet dinner during the annual medical congress in Delhi NCR.'
  },
  {
    id: 15,
    url: '/gallery_event_15.webp',
    title: 'CME Scientific Audience & Delegates',
    description: 'Senior consulting nephrologists, cardiologists, and endocrinologists listening attentively to the latest clinical review data on metabolic medicine during a DDA summit.'
  },
  {
    id: 16,
    url: '/gallery_event_16.webp',
    title: 'Symposium: CKM Syndrome & Heart Failure',
    description: 'Scientific presentation on Cardio-Kidney-Metabolic (CKM) Syndrome pathogenesis and Lyvelsa therapy advancements during a DDA academic colloquium.'
  },
  {
    id: 17,
    url: '/gallery_event_17.webp',
    title: 'DDA CME Academic Audience Seating',
    description: 'Founding Chairman Dr. Amitabh Khanna in plaid blazer and senior physicians listening to clinical case studies during a DDA scientific colloquium in New Delhi.'
  },
  {
    id: 18,
    url: '/gallery_event_18.webp',
    title: 'Joint Scientific Podium Lecture',
    description: 'DDA panel speakers delivering a joint presentation on metabolic dysfunction and kidney disease management during a local healthcare seminar.'
  },
  {
    id: 19,
    url: '/gallery_event_19.webp',
    title: 'Organ Protection in Diabetes Forum',
    description: 'Academic forum flyer detailing DDA\'s panel discussion on organ protection. Chaired by Dr. Amitabh Khanna, featuring Dr. Saket Kant, Dr. Saket Bhardwaj, and Dr. Yogesh Kumar Chhabra.'
  },
  {
    id: 20,
    url: '/gallery_event_20.webp',
    title: 'Scientific Panel Dialogue & Panelists',
    description: 'Dr. Amitabh Khanna conducting an interactive panel discussion with senior cardiologists and endocrinologists at the DDA annual medical council meeting.'
  }
];

export default function App() {
  const [loading, setLoading] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [lightboxImage, setLightboxImage] = useState(null);

  // Contact Form State
  const [formState, setFormState] = useState({ name: '', email: '', phone: '', message: '' });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  // Simulation loading animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  // Monitor Scroll Behavior
  useEffect(() => {
    const handleScroll = () => {
      // Navbar opaque state
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Show back to top button
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }

      // Highlight active section based on scroll position
      const sections = ['home', 'about', 'gallery', 'team', 'mission', 'contact'];
      const scrollPosition = window.scrollY + 120; // offset

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Form Input Change Handler
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
    // Clear error
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  // Form Validation
  const validateForm = () => {
    const errors = {};
    if (!formState.name.trim()) errors.name = 'Name is required';
    if (!formState.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      errors.email = 'Invalid email address';
    }
    if (!formState.phone.trim()) {
      errors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formState.phone.replace(/[\s-+]/g, '').slice(-10))) {
      errors.phone = 'Please enter a valid 10-digit number';
    }
    if (!formState.message.trim()) errors.message = 'Message is required';

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Form Submit Handler
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccessModal(true);
      setFormState({ name: '', email: '', phone: '', message: '' });
    }, 1500);
  };

  // Navigation Click Handler (Smooth Scroll)
  const handleNavClick = (sectionId) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // height of fixed navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
    }
  };



  return (
    <div className="relative min-h-screen font-sans selection:bg-medical-500 selection:text-white bg-navy-50">

      {/* 1. INITIAL MOUNT PULSE LOADING SCREEN */}
      <AnimatePresence>
        {loading && (
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
            <motion.p
              className="mt-2 text-xs md:text-sm text-navy-400 tracking-widest font-mono"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              COMMUNITY • INTEGRITY • SUPPORT
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. FIXED GLASS NAVBAR */}
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

      {/* 3. HERO SECTION */}
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
            {/* Tagline pill */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-skycare-200 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-medical-400 animate-ping" />
              Empowering Dwarka Against Diabetes
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight max-w-5xl font-sans">
              DWARKA DIABETES <br />
              <span className="bg-gradient-to-r from-medical-300 via-skycare-300 to-medical-200 bg-clip-text text-transparent">
                ASSOCIATION
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl text-navy-200 max-w-3xl leading-relaxed mb-10">
              Dwarka Diabetes Association (DDA) is a community-driven organization dedicated to spreading awareness, promoting prevention, and supporting individuals affected by diabetes.
            </p>

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
                Join Free Camps
              </button>
            </div>
          </motion.div>

          {/* Quick Stat Bar */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="mt-20 max-w-4xl mx-auto grid grid-cols-3 gap-4 md:gap-8 border border-white/10 rounded-3xl p-6 sm:p-8 bg-white/5 backdrop-blur-md"
          >
            {[
              { val: '5000+', label: 'Citizens Screened' },
              { val: '120+', label: 'Wellness Camps' },
              { val: '35+', label: 'Expert Doctors' }
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

      {/* 4. ABOUT SECTION */}
      <section id="about" className="py-20 sm:py-28 relative overflow-hidden bg-navy-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Section title */}
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <h2 className="text-base text-medical-600 font-extrabold uppercase tracking-widest mb-2">
              Who We Are
            </h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy-900 tracking-tight">
              Dedicated to Combating Diabetes In Dwarka
            </h3>
            <div className="w-16 h-1 bg-medical-500 mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Text column */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 }
              }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h4 className="text-2xl font-bold text-navy-900 bg-gradient-to-r from-medical-600 to-skycare-600 bg-clip-text text-transparent">
                Dwarka Diabetes Association
              </h4>
              <p className="text-navy-600 leading-relaxed text-base">
                Dwarka Diabetes Association is a professional association of specialist doctors and healthcare experts committed to diabetes and obesity awareness, prevention, education, and patient care in Dwarka, New Delhi. Our aim is to promote better health through increased awareness, early diagnosis, timely treatment, and healthy lifestyle practices for diabetes and other lifestyle-related disorders.
              </p>
              <p className="text-navy-600 leading-relaxed text-base">
                Our vision is to build a healthier society by reducing the burden and complications of diabetes through awareness, prevention, and evidence-based medical care. We are also dedicated to keeping healthcare professionals updated with the latest advances and developments in the management of diabetes, obesity, and other metabolic disorders through continuous academic and scientific activities.
              </p>
              
              <div className="p-4 bg-medical-50/50 rounded-2xl border border-medical-100/50 text-xs sm:text-sm text-navy-700">
                <strong>Founding Status:</strong> Established on <strong>August 27, 2011</strong> under the visionary chairmanship of <strong>Dr. Amitabh Khanna</strong>. Formally registered as a medical advocacy and community wellness society (Reg No. S/RS/SW/0794/2012) under the Societies Registration Act XXI of 1860.
              </div>

              {/* Special Programs Section */}
              <div className="space-y-4 pt-2">
                <h5 className="text-lg font-bold text-navy-900 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-medical-500" />
                  Our Special Programs:
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    'Gestational Diabetes Awareness',
                    'Diabetic Foot Care',
                    'Diabetic Retinopathy Awareness',
                    'Diabetes Education Programs',
                    'Diabetic Exercise Programs'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-navy-700 group/item hover:text-medical-600 transition-colors">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-medical-100 flex items-center justify-center text-medical-600 shadow-sm group-hover/item:bg-medical-500 group-hover/item:text-white transition-colors duration-300">
                        <Check className="w-4 h-4" />
                      </div>
                      <span className="text-sm font-semibold transition-all duration-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6">
                <button
                  onClick={() => handleNavClick('mission')}
                  className="px-6 py-3 bg-white hover:bg-navy-100 border border-navy-200 text-navy-800 font-bold rounded-2xl shadow-sm transition-all duration-300 flex items-center gap-2 group"
                >
                  Our Mission & Goals
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>

            {/* Image Column */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 }
              }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              {/* Back card outline glow */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-medical-500 to-skycare-500 rounded-3xl opacity-20 blur-2xl z-0" />

              <div className="relative overflow-hidden rounded-3xl shadow-2xl z-10 aspect-[4/3] group border-4 border-white">
                <img
                  src="/about_dda.webp"
                  alt="DDA Healthcare Consultation"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-white text-sm font-semibold tracking-wide bg-medical-500/80 backdrop-blur-sm px-4 py-2 rounded-xl">
                    Dedicated Support Sessions
                  </span>
                </div>
              </div>

              {/* Overlay Stat Chip */}
              <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-xl flex items-center gap-4 border border-navy-100 z-20 max-w-[220px]">
                <div className="w-12 h-12 bg-skycare-100 rounded-xl flex items-center justify-center text-skycare-600">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-navy-900 font-mono">100%</div>
                  <div className="text-[10px] uppercase font-bold text-navy-500 tracking-wider">
                    Specialist Doctor Forum
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 5. GALLERY SECTION */}
      <section id="gallery" className="py-20 sm:py-28 relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Section title */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-base text-medical-600 font-extrabold uppercase tracking-widest mb-2">
              Our Footprint
            </h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy-900 tracking-tight">
              Community Gallery
            </h3>
            <p className="text-navy-500 mt-3 text-base sm:text-lg">
              Moments from our recent medical screening camps, lifestyle workshops, and community education drives.
            </p>
            <div className="w-16 h-1 bg-medical-500 mx-auto mt-4 rounded-full" />
          </div>

          {/* Infinite Marquee Photo Gallery */}
          {galleryImages.length > 0 ? (
            <div className="relative w-full overflow-hidden py-4 group">
              {/* Sleek Gradient Fades for Premium Glassmorphism Look */}
              <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-20 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-20 pointer-events-none" />

              {/* Scrolling wrapper */}
              <div className="flex w-max gap-6 animate-marquee hover:[animation-play-state:paused] py-2">
                {[...galleryImages, ...galleryImages].map((image, idx) => (
                  <div
                    key={`${image.id}-${idx}`}
                    onClick={() => setLightboxImage(image)}
                    className="flex-shrink-0 w-[290px] sm:w-[340px] lg:w-[390px] group/card relative cursor-pointer overflow-hidden rounded-3xl shadow-md hover:shadow-xl hover:shadow-medical-500/5 transition-all duration-500 aspect-[4/3] border border-navy-100/80 bg-navy-950"
                  >
                    <img 
                      src={image.url} 
                      alt={image.title} 
                      className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                    
                    {/* Overlay details */}
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/95 via-navy-950/40 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <span className="inline-flex self-start px-2 py-0.5 bg-medical-500/20 text-medical-300 text-[9px] font-bold uppercase tracking-wider rounded-md border border-medical-500/30 mb-2">
                        Event Photo
                      </span>
                      <h4 className="text-white text-base font-bold leading-snug">
                        {image.title}
                      </h4>
                      <p className="text-skycare-200 text-xs mt-1.5 font-medium line-clamp-2 leading-relaxed">
                        {image.description}
                      </p>
                      <div className="text-white flex items-center gap-1.5 text-[10px] mt-4 uppercase tracking-wider font-bold text-medical-300 group-hover/card:translate-x-1 transition-transform">
                        Enlarge Details <ExternalLink className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    {/* Corner Tag */}
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-navy-800 text-[10px] font-bold tracking-wider px-3.5 py-1.5 rounded-full border border-navy-100 shadow-sm">
                      DDA ARCHIVE
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              className="max-w-xl mx-auto text-center p-10 sm:p-16 rounded-[2rem] bg-navy-50/50 border border-navy-100/50 flex flex-col items-center space-y-4"
            >
              <div className="w-16 h-16 rounded-2xl bg-medical-50 text-medical-500 flex items-center justify-center animate-pulse">
                <Users className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-navy-900">Gallery Updates Coming Soon</h4>
              <p className="text-sm text-navy-500 leading-relaxed">
                We are currently updating our community gallery with fresh photos from recent diabetes diagnostic camps, health seminars, and local walkathons. New high-quality event photos will be available here shortly!
              </p>
            </motion.div>
          )}
        </div>

        {/* 5B. LIGHTBOX MODAL */}
        <AnimatePresence>
          {lightboxImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-navy-950/95 backdrop-blur-md z-50 flex items-center justify-center p-4"
              onClick={() => setLightboxImage(null)}
            >
              {/* Close Button */}
              <button
                onClick={() => setLightboxImage(null)}
                className="absolute top-4 right-4 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-55"
              >
                <X className="w-6 h-6" />
              </button>

              <motion.div
                initial={{ scale: 0.95, y: 15 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 15 }}
                transition={{ type: 'spring', damping: 25 }}
                className="max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row border border-navy-200"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Photo */}
                <div className="md:w-3/5 relative bg-navy-950">
                  <img
                    src={lightboxImage.url}
                    alt={lightboxImage.title}
                    className="w-full h-full object-cover max-h-[300px] md:max-h-[500px]"
                  />
                </div>
                {/* Info details */}
                <div className="md:w-2/5 p-6 sm:p-8 flex flex-col justify-center bg-white space-y-4">
                  <div className="inline-flex self-start px-3 py-1 bg-medical-50 text-medical-700 text-xs font-semibold rounded-full border border-medical-100">
                    DDA Initiatives
                  </div>
                  <h4 className="text-xl sm:text-2xl font-bold text-navy-900 leading-snug">
                    {lightboxImage.title}
                  </h4>
                  <p className="text-navy-600 leading-relaxed text-sm sm:text-base">
                    {lightboxImage.description}
                  </p>
                  <div className="pt-4 border-t border-navy-100 flex items-center justify-between text-xs text-navy-400">
                    <span className="font-semibold flex items-center gap-1 text-navy-500">
                      <Calendar className="w-4 h-4 text-medical-500" /> Delhi NCR Drive
                    </span>
                    <span>Dwarka, Delhi</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* 6. TEAM SECTION */}
      <section id="team" className="py-20 sm:py-28 relative bg-navy-50 overflow-hidden">
        {/* Floating gradient decorative shapes */}
        <div className="absolute top-1/3 right-1/10 w-96 h-96 bg-medical-300/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/10 w-96 h-96 bg-skycare-300/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Section title */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-base text-medical-600 font-extrabold uppercase tracking-widest mb-2">
              Our Pillars
            </h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy-900 tracking-tight">
              DDA TEAM & ADVISORS
            </h3>
            <p className="text-navy-500 mt-3 text-base sm:text-lg">
              The compassionate physicians, healthcare advocates, and community leaders orchestrating wellness in Dwarka.
            </p>
            <div className="w-16 h-1 bg-medical-500 mx-auto mt-4 rounded-full" />
          </div>

          {/* Subsections: Founders, Patrons, Executives, Nominated */}
          {['founders', 'patrons', 'executives', 'nominated'].map((roleKey, idx) => {
            const roleTitle = roleKey === 'founders'
              ? 'A. Founders & Presidents'
              : roleKey === 'patrons'
                ? 'B. Honorary Medical Patrons'
                : roleKey === 'executives'
                  ? 'C. Executive Coordinators'
                  : 'D. Nominated Members';

            const list = teamData[roleKey];

            return (
              <div key={roleKey} className={idx > 0 ? 'mt-16 md:mt-24' : ''}>
                <h4 className="text-xl sm:text-2xl font-extrabold text-navy-900 border-l-4 border-medical-500 pl-4 mb-8">
                  {roleTitle}
                </h4>

                {/* Team cards grid */}
                <div className={`grid grid-cols-1 sm:grid-cols-2 ${(roleKey === 'executives' || roleKey === 'nominated') ? 'lg:grid-cols-3' : 'lg:grid-cols-2 max-w-4xl'} gap-8`}>
                  {list.map((member, memberIdx) => (
                    <motion.div
                      key={member.name}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-50px' }}
                      transition={{ duration: 0.5, delay: memberIdx * 0.1 }}
                      className="group relative bg-white rounded-3xl p-6 shadow-md border border-navy-100 glow-hover-teal flex flex-col sm:flex-row gap-6 items-center sm:items-start text-center sm:text-left"
                    >
                      {/* Member Portrait */}
                      <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden shadow-md flex-shrink-0 border-2 border-white group-hover:scale-102 transition-transform duration-300 bg-navy-50">
                        <img
                          src={member.avatar}
                          alt={member.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                      </div>

                      {/* Member Info */}
                      <div className="flex-grow space-y-2">
                        <span className="inline-block px-3 py-1 bg-medical-50 text-medical-600 text-[10px] font-bold uppercase tracking-wider rounded-md border border-medical-100">
                          {roleKey.slice(0, -1)}
                        </span>
                        <h5 className="text-lg font-bold text-navy-900 group-hover:text-medical-600 transition-colors">
                          {member.name}
                        </h5>
                        <p className="text-sm font-semibold text-navy-700 leading-snug">
                          {member.role}
                        </p>
                        <p className="text-xs text-navy-500 italic">
                          {member.qualifications}
                        </p>

                        {/* Interactive glow border on card hover */}
                        <div className="absolute inset-0 border border-transparent group-hover:border-medical-500/20 rounded-3xl transition-all duration-300" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 7. MISSION SECTION */}
      <section id="mission" className="py-20 sm:py-28 relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Main callout block */}
          <div className="bg-gradient-to-tr from-navy-900 via-navy-900 to-navy-950 rounded-[2.5rem] p-8 sm:p-16 text-center text-white relative overflow-hidden shadow-2xl border border-white/5">
            {/* Background design accents */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-medical-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-skycare-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center">
              <div className="p-4 bg-white/10 border border-white/10 rounded-2xl text-medical-300 backdrop-blur-md mb-6">
                <Award className="w-8 h-8" />
              </div>

              <h3 className="text-base text-medical-400 font-extrabold uppercase tracking-widest mb-4">
                Our Mission
              </h3>

              <p className="text-xl sm:text-2xl md:text-3xl font-bold leading-relaxed mb-10 max-w-4xl">
                "Dwarka Diabetes Association (DDA) is committed to building a healthier society through continuous physician training, public education, active diagnostic camps, and charitable care."
              </p>

              <div className="w-24 h-0.5 bg-medical-500/50 mb-12" />

              {/* Four Core Pillars with Icons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full text-left">
                {[
                  {
                    icon: <Award className="w-6 h-6" />,
                    title: 'Doctor Education',
                    desc: 'Conducting regular update programs for practicing doctors to make them aware of the latest in the fields of diabetes, cardiology, and related subjects.'
                  },
                  {
                    icon: <Users className="w-6 h-6" />,
                    title: 'Public Awareness',
                    desc: 'Doing regular educational programs for the general public to make them aware of diabetes and other common lifestyle diseases.'
                  },
                  {
                    icon: <Calendar className="w-6 h-6" />,
                    title: 'Diagnostic Camps',
                    desc: 'Holding regular camps for various sections of society to detect and treat fresh and uncontrolled cases of the disease.'
                  },
                  {
                    icon: <Heart className="w-6 h-6" />,
                    title: 'Charitable Medical Care',
                    desc: 'Providing poor and underprivileged patients with diabetes free medical consultations, support, and essential medicines.'
                  }
                ].map((pillar, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.5, delay: idx * 0.12 }}
                    className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm flex flex-col items-start hover:bg-white/10 transition-colors duration-300"
                  >
                    <div className="w-12 h-12 bg-medical-500/20 text-medical-300 rounded-xl flex items-center justify-center mb-4">
                      {pillar.icon}
                    </div>
                    <h4 className="text-base sm:text-lg font-bold text-white mb-2">{pillar.title}</h4>
                    <p className="text-xs text-navy-200 leading-relaxed">{pillar.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. CONTACT SECTION */}
      <section id="contact" className="py-20 sm:py-28 relative bg-navy-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Section title */}
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <h2 className="text-base text-medical-600 font-extrabold uppercase tracking-widest mb-2">
              Connect With Us
            </h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy-900 tracking-tight">
              Get In Touch
            </h3>
            <div className="w-16 h-1 bg-medical-500 mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            {/* Left Column: Contact details (5/12 span) */}
            <div className="lg:col-span-5 space-y-6">

              {/* Address Card */}
              <div className="bg-white rounded-3xl p-6 shadow-md border border-navy-100 flex items-start gap-4">
                <div className="w-12 h-12 bg-medical-50 text-medical-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-inner">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-navy-900 mb-1">Our Office Address</h4>
                  <p className="text-sm text-navy-600 leading-relaxed">
                    Dwarka Diabetes Association (DDA)<br />
                    Flat-302, Gangotri Apts., DDA Pkt-1,<br />
                    Sector-12, Dwarka, New Delhi - 110078, India
                  </p>
                  <p className="text-xs text-medical-600 mt-2 font-bold uppercase tracking-wider">
                    Reg No: S/RS/SW/0794/2012 (Est. Aug 27, 2011)
                  </p>
                </div>
              </div>

              {/* Phone & Timings Card */}
              <div className="bg-white rounded-3xl p-6 shadow-md border border-navy-100 flex items-start gap-4">
                <div className="w-12 h-12 bg-skycare-50 text-skycare-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-inner">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-navy-900 mb-1">Call Center Timings</h4>
                  <p className="text-sm text-navy-600 leading-relaxed font-semibold">
                    +91 9810949594
                  </p>
                  <p className="text-xs text-navy-400 mt-1 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-medical-500" /> Mon - Sat: 9:00 AM - 6:00 PM
                  </p>
                </div>
              </div>

              {/* Email Card */}
              <div className="bg-white rounded-3xl p-6 shadow-md border border-navy-100 flex items-start gap-4">
                <div className="w-12 h-12 bg-medical-50 text-medical-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-inner">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-navy-900 mb-1">Email Inquiries</h4>
                  <p className="text-sm text-navy-600 leading-relaxed font-semibold">
                    info@dwarkadiabetes.org / support@dwarkadiabetes.org
                  </p>
                </div>
              </div>

              {/* Visual Map Container */}
              <div className="rounded-3xl overflow-hidden shadow-md border border-navy-100 relative group aspect-[4/3] bg-navy-200">
                {/* Embed Real Google Map */}
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.810502120025!2d77.0396010753896!3d28.594738575685885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1ace15fa9b77%3A0x1b15304b39280ca0!2sDiabetes+Speciality+Center%2C+302%2C+Gangotri+Apartments%2C+Pocket+1%2C+Sector+12%2C+Dwarka%2C+New+Delhi%2C+Delhi+110078!5e0!3m2!1sen!2sin!4v1716666666666!5m2!1sen!2sin" 
                  className="w-full h-full rounded-3xl border-0 shadow-lg" 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>

                {/* Hover Indicator overlay */}
                <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm text-navy-800 text-xxs font-bold px-3 py-1.5 rounded-xl border border-navy-200 shadow-lg flex items-center gap-1 group-hover:scale-102 transition-transform">
                  Interactive Map <ExternalLink className="w-3 h-3 text-medical-500" />
                </div>
              </div>
            </div>

            {/* Right Column: Contact form (7/12 span) */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-[2rem] p-6 sm:p-10 shadow-lg border border-navy-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-medical-500/5 rounded-full blur-2xl" />

                <h4 className="text-xl sm:text-2xl font-bold text-navy-900 mb-2">Send Us A Message</h4>
                <p className="text-navy-500 text-sm mb-6 leading-relaxed">
                  Have questions about upcoming health checkup camps or interested in registration? Drop us your details, and our coordination team will reply within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div>
                      <label htmlFor="name" className="block text-xs font-bold text-navy-700 uppercase tracking-wider mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3.5 rounded-xl bg-navy-50 border ${formErrors.name ? 'border-red-500 focus:ring-red-400' : 'border-navy-200 focus:border-medical-500 focus:ring-medical-400/20'
                          } text-sm focus:outline-none focus:ring-4 transition-all`}
                        placeholder="John Doe"
                      />
                      {formErrors.name && (
                        <p className="text-xs text-red-500 mt-1 font-semibold flex items-center gap-1">
                          <ShieldAlert className="w-3.5 h-3.5" /> {formErrors.name}
                        </p>
                      )}
                    </div>
                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-xs font-bold text-navy-700 uppercase tracking-wider mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3.5 rounded-xl bg-navy-50 border ${formErrors.email ? 'border-red-500 focus:ring-red-400' : 'border-navy-200 focus:border-medical-500 focus:ring-medical-400/20'
                          } text-sm focus:outline-none focus:ring-4 transition-all`}
                        placeholder="john@example.com"
                      />
                      {formErrors.email && (
                        <p className="text-xs text-red-500 mt-1 font-semibold flex items-center gap-1">
                          <ShieldAlert className="w-3.5 h-3.5" /> {formErrors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-xs font-bold text-navy-700 uppercase tracking-wider mb-2">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      value={formState.phone}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3.5 rounded-xl bg-navy-50 border ${formErrors.phone ? 'border-red-500 focus:ring-red-400' : 'border-navy-200 focus:border-medical-500 focus:ring-medical-400/20'
                        } text-sm focus:outline-none focus:ring-4 transition-all`}
                      placeholder="+91 9810949594"
                    />
                    {formErrors.phone && (
                      <p className="text-xs text-red-500 mt-1 font-semibold flex items-center gap-1">
                        <ShieldAlert className="w-3.5 h-3.5" /> {formErrors.phone}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-bold text-navy-700 uppercase tracking-wider mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      value={formState.message}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3.5 rounded-xl bg-navy-50 border ${formErrors.message ? 'border-red-500 focus:ring-red-400' : 'border-navy-200 focus:border-medical-500 focus:ring-medical-400/20'
                        } text-sm focus:outline-none focus:ring-4 transition-all resize-none`}
                      placeholder="Write your request or health consultation inquiry details..."
                    ></textarea>
                    {formErrors.message && (
                      <p className="text-xs text-red-500 mt-1 font-semibold flex items-center gap-1">
                        <ShieldAlert className="w-3.5 h-3.5" /> {formErrors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 bg-gradient-to-r from-medical-500 to-skycare-500 hover:from-medical-600 hover:to-skycare-600 text-white font-bold rounded-xl shadow-md hover:shadow-medical-500/25 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending Inquiry...
                      </span>
                    ) : 'Submit Inquiry'}
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>

        {/* Form Success Overlay Popup */}
        <AnimatePresence>
          {showSuccessModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-navy-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.95, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 20 }}
                className="max-w-md w-full bg-white rounded-3xl p-8 text-center shadow-2xl border border-navy-100 flex flex-col items-center"
              >
                <div className="w-16 h-16 bg-medical-50 text-medical-500 rounded-2xl flex items-center justify-center mb-6 shadow-inner animate-[bounce_1s_ease-in-out_1]">
                  <Check className="w-8 h-8" />
                </div>
                <h4 className="text-xl sm:text-2xl font-bold text-navy-900 mb-2">Message Sent Successfully!</h4>
                <p className="text-navy-600 text-sm leading-relaxed mb-6">
                  Thank you for contacting the **Dwarka Diabetes Association (DDA)**. Our wellness support cell coordinator has received your request and will follow up with you shortly.
                </p>
                <button
                  onClick={() => setShowSuccessModal(false)}
                  className="w-full py-3 px-6 bg-navy-900 hover:bg-navy-800 text-white font-bold rounded-xl transition-all shadow-md cursor-pointer"
                >
                  Close & Return
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* 9. FOOTER SECTION */}
      <footer className="bg-navy-950 text-white pt-16 pb-10 border-t border-white/5 relative overflow-hidden">
        {/* Floating gradient details */}
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-medical-500/5 rounded-full blur-3xl translate-y-1/2 translate-x-1/2" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 pb-12 border-b border-white/10">

            {/* Branding (span 5) */}
            <div className="md:col-span-5 space-y-4">
              <div className="flex items-center gap-2.5">
                <div className="flex items-center justify-center p-1 rounded-xl bg-white shadow-md w-11 h-11 flex-shrink-0">
                  <img src="/logo.webp" alt="DDA Logo" className="w-full h-full object-contain" />
                </div>
                <span className="text-2xl font-extrabold tracking-wide">DDA</span>
              </div>
              <p className="text-navy-300 text-sm leading-relaxed max-w-sm">
                Dwarka Diabetes Association is a dedicated volunteer-led medical advocacy group. Our target is bringing diabetes screenings, early diagnosis tools, and metabolic coaching support to all residents of Dwarka.
              </p>

              {/* Emergency reminder card */}
              <div className="inline-flex items-center gap-2 p-3 bg-red-500/10 border border-red-500/20 text-red-300 rounded-xl text-xs max-w-sm">
                <ShieldAlert className="w-5 h-5 flex-shrink-0" />
                <span><strong>Note:</strong> DDA is a medical awareness association, not an emergency hospital. For acute insulin crises, call emergency services.</span>
              </div>
            </div>

            {/* Quick links (span 3) */}
            <div className="md:col-span-3 space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-wider text-skycare-200">
                Navigation Links
              </h4>
              <ul className="space-y-2">
                {['home', 'about', 'gallery', 'team', 'mission', 'contact'].map((section) => (
                  <li key={section}>
                    <button
                      onClick={() => handleNavClick(section)}
                      className="text-navy-300 hover:text-white text-sm capitalize transition-colors flex items-center gap-1.5 group cursor-pointer"
                    >
                      <ChevronRight className="w-3.5 h-3.5 text-medical-500 group-hover:translate-x-0.5 transition-transform" />
                      {section}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact details (span 4) */}
            <div className="md:col-span-4 space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-wider text-skycare-200">
                Direct Contact
              </h4>
              <div className="space-y-3 text-sm text-navy-300">
                <p className="flex items-start gap-2.5">
                  <MapPin className="w-5 h-5 text-medical-400 flex-shrink-0 mt-0.5" />
                  <span>Flat 302, Gangotri Apartments, DDA Pocket-1, Sector-12, Dwarka, New Delhi – 110078</span>
                </p>
                <p className="flex items-center gap-2.5">
                  <Phone className="w-5 h-5 text-medical-400 flex-shrink-0" />
                  <span>+91 9810949594</span>
                </p>
                <p className="flex items-center gap-2.5">
                  <Mail className="w-5 h-5 text-medical-400 flex-shrink-0" />
                  <span>info@dwarkadiabetes.org</span>
                </p>
              </div>
            </div>

          </div>

          {/* Copyright Bar */}
          <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-navy-400 gap-4">
            <p>
              &copy; {new Date().getFullYear()} Dwarka Diabetes Association (DDA). All Rights Reserved.
            </p>
            <p className="flex items-center gap-1 text-[11px]">
              Made with <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" /> for the community of Dwarka.
            </p>
          </div>
        </div>
      </footer>

      {/* 10. FLOATING BACK TO TOP BUTTON */}
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

    </div>
  );
}
