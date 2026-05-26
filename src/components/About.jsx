import React from 'react';
import { motion } from 'framer-motion';
import { Check, ChevronRight, Award } from 'lucide-react';

export default function About({ handleNavClick }) {
  return (
    <section id="about" className="py-20 sm:py-28 relative overflow-hidden bg-navy-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section title */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy-900 tracking-tight">
            Who We Are
          </h2>
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
              <strong>Founding Status:</strong> Established on <strong>August 27, 2011</strong> under the visionary chairmanship of <strong>Dr. Amitabh Khanna</strong>.
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
                  'Diabetic Exercise Programs',
                  'Speciality In Obesity',
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
            className="relative lg:translate-y-6"
          >
            {/* Back card outline glow */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-medical-500 to-skycare-500 rounded-3xl opacity-20 blur-2xl z-0" />

            <div className="relative overflow-hidden rounded-3xl shadow-2xl z-10 aspect-[4/3] group border-4 border-white">
              <img
                src="/about_dda.webp"
                alt="DDA Healthcare Consultation"
                className="w-full h-full object-cover object-[center_20%] group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-start p-6">
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
  );
}
