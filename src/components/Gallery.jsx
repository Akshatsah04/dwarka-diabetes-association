import React from 'react';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';

export default function Gallery({ galleryImages, setLightboxImage }) {
  return (
    <section id="gallery" className="py-20 sm:py-28 relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy-900 tracking-tight">
            Photo Gallery
          </h3>
          <p className="text-navy-500 mt-3 text-base sm:text-lg">
            Glimpses of our recent activities.
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

                  {/* Subtle click indicator on hover */}
                  <div className="absolute inset-0 bg-navy-950/10 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10" />
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
    </section>
  );
}
