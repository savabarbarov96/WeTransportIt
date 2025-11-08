import React from 'react';
import { motion } from 'framer-motion';
import { TESTIMONIALS } from '../constants';
import { StarIcon } from './IconComponents';

const Testimonials: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-200 to-transparent"></div>
      <div className="absolute top-40 right-10 w-96 h-96 bg-yellow-100 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-yellow-100 text-yellow-700 rounded-full text-sm font-semibold tracking-wide uppercase">
              Доволни клиенти
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Какво казват нашите клиенти
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Гордеем се с отличната си репутация и стотиците доволни клиенти.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}
              className="group bg-white rounded-2xl shadow-xl p-6 sm:p-8 flex flex-col relative overflow-hidden border border-gray-100"
            >
              {/* Decorative quote mark */}
              <div className="absolute top-4 right-4 text-8xl text-orange-100 font-serif leading-none opacity-50 group-hover:opacity-70 transition-opacity">"</div>

              {/* Stars rating */}
              <div className="flex gap-1 relative z-10">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <StarIcon
                      className={`h-5 w-5 ${
                        i < testimonial.rating
                          ? 'text-yellow-400 drop-shadow-lg'
                          : 'text-gray-300'
                      }`}
                    />
                  </motion.div>
                ))}
              </div>

              {/* Quote content */}
              <blockquote className="mt-6 text-gray-700 flex-1 relative z-10">
                <p className="text-base sm:text-lg leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
              </blockquote>

              {/* Author info */}
              <footer className="mt-6 pt-6 border-t border-gray-100 relative z-10">
                <div className="flex items-center">
                  {/* Avatar placeholder with initials */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white font-bold shadow-lg">
                      {testimonial.author.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="font-bold text-gray-900" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
              </footer>

              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50/0 to-orange-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Facebook link */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 sm:mt-16 text-center"
        >
          <motion.a
            href={process.env.FACEBOOK_URL || '#'}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 text-lg font-semibold text-blue-600 hover:text-blue-700 transition-colors group"
          >
            <span>Виж повече отзиви в Facebook</span>
            <motion.svg
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </motion.svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
