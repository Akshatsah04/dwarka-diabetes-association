import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Clock, Mail, ExternalLink, ShieldAlert, Check } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', phone: '', message: '' });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formState.name.trim()) errors.name = 'Full name is required.';
    
    if (!formState.email.trim()) {
      errors.email = 'Email address is required.';
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      errors.email = 'Please provide a valid email.';
    }
    
    if (!formState.phone.trim()) {
      errors.phone = 'Phone number is required.';
    } else if (!/^\+?[\d\s-]{10,15}$/.test(formState.phone.replace(/\s/g, ''))) {
      errors.phone = 'Please provide a valid 10-15 digit phone number.';
    }
    
    if (!formState.message.trim()) {
      errors.message = 'Message content cannot be blank.';
    }
    
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);
    // Simulate API request submission
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccessModal(true);
      setFormState({ name: '', email: '', phone: '', message: '' });
    }, 1200);
  };

  return (
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
                      type="type"
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
  );
}
