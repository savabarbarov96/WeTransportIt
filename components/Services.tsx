import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../constants';
import { CheckIcon } from './IconComponents';

const Services: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="services" className="py-16 sm:py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={titleVariants}
          className="text-center"
        >
          <motion.div className="inline-block mb-4">
            <span className="px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-semibold tracking-wide uppercase">
              Какво предлагаме
            </span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Нашите Услуги
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Предлагаме пълен спектър от хамалски и транспортни услуги, за да отговорим на всички ваши нужди.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {SERVICES.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -10,
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
              }}
              className="group flex flex-col bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 relative"
            >
              {/* Gradient accent on top */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600"></div>

              {/* Icon section with gradient background */}
              <div className="relative bg-gradient-to-br from-orange-50 to-white p-8 flex justify-center items-center">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative"
                >
                  {/* Glow effect behind icon */}
                  <div className="absolute inset-0 bg-orange-300 rounded-full blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                  <div className="relative">
                    {service.icon}
                  </div>
                </motion.div>
              </div>

              {/* Content section */}
              <div className="flex-1 p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 text-center mb-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {service.title}
                  </h3>
                  <p className="text-base text-gray-600 text-center leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features list */}
                  <ul className="mt-6 space-y-3">
                    {service.features.map((feature, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-start"
                      >
                        <div className="flex-shrink-0">
                          <div className="bg-green-100 rounded-full p-1">
                            <CheckIcon className="h-5 w-5 text-green-600" />
                          </div>
                        </div>
                        <p className="ml-3 text-sm sm:text-base text-gray-600">{feature}</p>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="mt-8">
                  <motion.a
                    href="#contact"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="block w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white text-center px-6 py-3 sm:py-4 rounded-xl font-bold shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/40 transition-all duration-300 relative overflow-hidden group"
                  >
                    <span className="relative z-10">{service.cta}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
