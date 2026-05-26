import React from 'react';
import { MapPin, Phone, Clock, Mail, ExternalLink } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28 relative bg-navy-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section title */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy-900 tracking-tight">
            Connect With Us
          </h3>
          <div className="w-16 h-1 bg-medical-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Two-Column Balanced Grid: Left Details Cards, Right Full Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">

          {/* Left Column: Contact details */}
          <div className="space-y-6 flex flex-col justify-between">

            {/* Address Card */}
            <div className="bg-white rounded-3xl p-6 shadow-md border border-navy-100 flex items-start gap-4">
              <div className="w-12 h-12 bg-medical-50 text-medical-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-inner">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-navy-900 mb-1">Office Address</h4>
                <p className="text-sm text-navy-600 leading-relaxed">
                  Flat-302, 309 Gangotri Apts., DDA Pkt-1,<br />
                  Sector-12, Dwarka, New Delhi - 110078, India
                </p>
              </div>
            </div>

            {/* Phone & Timings Card */}
            <div className="bg-white rounded-3xl p-6 shadow-md border border-navy-100 flex items-start gap-4">
              <div className="w-12 h-12 bg-skycare-50 text-skycare-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-inner">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-navy-900 mb-1">Call Timings</h4>
                <p className="text-sm text-navy-600 leading-relaxed font-semibold">
                  +91 9810569594 , +91 9810639594
                </p>
                <p className="text-xs text-navy-400 mt-1.5 flex items-center gap-1 leading-relaxed">
                  <Clock className="w-3.5 h-3.5 text-medical-500 flex-shrink-0" />
                  <span>
                    Mon - Sat: 11:00 AM - 3:00 PM & 6:00 PM - 8:00 PM <br />
                    Sun: 11:00 AM - 3:00 PM
                  </span>
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
                  amitabkhanna@gmail.com / anupamakhanna1967@gmail.com
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Google Map Container */}
          <div className="rounded-3xl overflow-hidden shadow-md border border-navy-100 relative group min-h-[350px] lg:min-h-full bg-navy-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.810502120025!2d77.0396010753896!3d28.594738575685885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1ace15fa9b77%3A0x1b15304b39280ca0!2sDiabetes+Speciality+Center%2C+302%2C+Gangotri+Apartments%2C+Pocket+1%2C+Sector+12%2C+Dwarka%2C+New+Delhi%2C+Delhi+110078!5e0!3m2!1sen!2sin!4v1716666666666!5m2!1sen!2sin"
              className="w-full h-full border-0 shadow-lg"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            {/* Hover Indicator overlay */}
            <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-navy-800 text-xxs font-bold px-3 py-1.5 rounded-xl border border-navy-200 shadow-lg flex items-center gap-1 group-hover:scale-102 transition-transform">
              Interactive Map <ExternalLink className="w-3 h-3 text-medical-500" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
