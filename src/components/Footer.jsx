import React from 'react';
import { ShieldAlert, ChevronRight, MapPin, Phone, Mail, Heart } from 'lucide-react';

export default function Footer({ handleNavClick }) {
  return (
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
              Dwarka Diabetes Association is a professional association of specialist doctors and healthcare experts committed to diabetes and obesity awareness, prevention, education, and patient care.
            </p>

            {/* Emergency reminder card */}
            <div className="inline-flex items-center gap-2 p-3 bg-red-500/10 border border-red-500/20 text-red-300 rounded-xl text-xs max-w-sm">
              <ShieldAlert className="w-5 h-5 flex-shrink-0" />
              <span><strong>Note:</strong> DDA is a medical awareness association, not an emergency hospital.</span>
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
  );
}
