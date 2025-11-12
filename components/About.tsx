import React from 'react';
import { motion } from 'framer-motion';
import { ADVANTAGES, FACEBOOK_URL, TIKTOK_URL } from '../constants';

const About: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
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
    <section id="about" className="relative py-16 sm:py-24 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-orange-100 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-semibold tracking-wide uppercase">
              За нас
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            ЗАЩО ДА ИЗБЕРЕТЕ НАС?
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
            We Transport It е доверена фирма за хамалски и транспортни услуги в Стара Загора с опит от 5+ години. Нашият екип от професионални хамали е обучен за работа с всякакви видове товари - от деликатна битова техника до тежки мебели.
          </p>
        </motion.div>

        {/* Advantages Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {ADVANTAGES.map((advantage, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group relative bg-white rounded-2xl p-6 sm:p-8 shadow-lg border-2 border-orange-100 hover:border-orange-300 hover:shadow-2xl transition-all duration-300"
            >
              {/* Icon with gradient background */}
              <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-orange-100 to-orange-50 rounded-2xl mb-4 group-hover:from-orange-200 group-hover:to-orange-100 transition-all duration-300">
                {advantage.icon}
              </div>
              {/* Number Badge */}
              <div className="absolute top-4 right-4 w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                {index + 1}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                {advantage.title}
              </h3>
              <p className="text-base text-gray-600 leading-relaxed">
                {advantage.text}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Social Media Follow Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-400 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-800 rounded-full blur-3xl opacity-20"></div>

          <div className="relative z-10 text-center">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Последвайте ни в социалните мрежи!
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-white/90 mb-8 max-w-2xl mx-auto"
            >
              Бъдете част от нашата общност и следете новини, съвети и специални оферти
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 bg-white text-orange-600 font-bold text-lg px-8 py-4 rounded-xl shadow-lg hover:bg-gray-50 transition-all duration-300 w-full sm:w-auto justify-center"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
                Facebook
              </motion.a>
              <motion.a
                href={TIKTOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 bg-white text-orange-600 font-bold text-lg px-8 py-4 rounded-xl shadow-lg hover:bg-gray-50 transition-all duration-300 w-full sm:w-auto justify-center"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
                TikTok
              </motion.a>
            </motion.div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-20 bg-white rounded-2xl shadow-xl border-2 border-orange-100 p-8 sm:p-12"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-4"
            >
              <p className="text-4xl sm:text-5xl font-extrabold text-orange-500 mb-2">500+</p>
              <p className="text-lg font-medium text-gray-700">Успешни превоза</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-4 border-l border-r border-gray-200 sm:border-l sm:border-r-0"
            >
              <p className="text-4xl sm:text-5xl font-extrabold text-orange-500 mb-2">50+</p>
              <p className="text-lg font-medium text-gray-700">Фирмени клиенти</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-4"
            >
              <p className="text-4xl sm:text-5xl font-extrabold text-orange-500 mb-2">98%</p>
              <p className="text-lg font-medium text-gray-700">Доволни клиенти</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
