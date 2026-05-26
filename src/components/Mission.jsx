import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Calendar, Heart } from 'lucide-react';

export default function Mission() {
  return (
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
  );
}
