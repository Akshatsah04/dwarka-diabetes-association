import React from 'react';
import { motion } from 'framer-motion';

export default function Team({ teamData }) {
  return (
    <section id="team" className="py-20 sm:py-28 relative bg-navy-50 overflow-hidden">
      {/* Floating gradient decorative shapes */}
      <div className="absolute top-1/3 right-1/10 w-96 h-96 bg-medical-300/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-1/10 w-96 h-96 bg-skycare-300/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy-900 tracking-tight">
            DDA TEAM
          </h3>
          <p className="text-navy-500 mt-3 text-base sm:text-lg">
            The compassionate physicians, healthcare advocates, and community leaders orchestrating wellness in Dwarka.
          </p>
          <div className="w-16 h-1 bg-medical-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Subsections: Founders, Patrons, Executives, Nominated */}
        {['founders', 'patrons', 'executives', 'nominated'].map((roleKey, idx) => {
          const roleTitle = roleKey === 'founders'
            ? 'Founders'
            : roleKey === 'patrons'
              ? 'Honorary Patrons'
              : roleKey === 'executives'
                ? 'Executive Committee'
                : 'Nominated Members';

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
  );
}
