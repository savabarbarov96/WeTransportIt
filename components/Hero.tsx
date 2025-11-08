import React from 'react';
import { motion } from 'framer-motion';
import { PHONE_NUMBER, PHONE_NUMBER_RAW } from '../constants';
import { PhoneIcon } from './IconComponents';

const Hero: React.FC = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.2,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const title = "WE TRANSPORT IT";
  const letters = title.split("");

  return (
    <section id="home" className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black min-h-screen overflow-hidden">
      {/* Animated background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-transparent to-orange-400/5"></div>

      {/* Geometric accent lines */}
      <div className="absolute top-20 left-0 w-32 sm:w-64 h-1 bg-gradient-to-r from-orange-500 to-transparent"></div>
      <div className="absolute bottom-40 right-0 w-48 sm:w-96 h-1 bg-gradient-to-l from-orange-400 to-transparent"></div>

      <div className="relative z-10 min-h-screen flex items-center pt-20">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="text-white text-center lg:text-left"
            >
              {/* Large Bold Title */}
              <motion.div
                variants={titleVariants}
                initial="hidden"
                animate="visible"
                className="mb-4 sm:mb-6"
              >
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tighter leading-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {letters.map((letter, index) => (
                    <motion.span
                      key={index}
                      variants={letterVariants}
                      className="inline-block"
                      style={{
                        textShadow: '0 0 40px rgba(251, 146, 60, 0.3)',
                      }}
                    >
                      {letter === " " ? "\u00A0" : letter}
                    </motion.span>
                  ))}
                </h1>
              </motion.div>

              {/* Bulgarian Subtitle */}
              <motion.div variants={slideInLeft}>
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
                  <span className="text-white">Професионални Хамалски и</span>
                </h2>
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
                  <span className="text-orange-400 drop-shadow-[0_0_25px_rgba(251,146,60,0.5)]">
                    Транспортни Услуги
                  </span>
                </h2>
              </motion.div>

              {/* Description */}
              <motion.p
                variants={itemVariants}
                className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed"
              >
                Бързо, надеждно и на достъпни цени. Обслужваме Стара Загора, Казанлък, Чирпан, Раднево и цялата област.
              </motion.p>

              {/* Call to Action Buttons */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 mb-6 sm:mb-8 justify-center lg:justify-start"
              >
                <motion.a
                  href={`tel:${PHONE_NUMBER_RAW}`}
                  className="group relative px-8 py-4 bg-orange-500 text-white font-bold rounded-lg overflow-hidden shadow-lg shadow-orange-500/50"
                  whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(251, 146, 60, 0.4)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative flex items-center justify-center">
                    <motion.div
                      animate={{ rotate: [0, 15, -15, 0] }}
                      transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
                    >
                      <PhoneIcon className="h-6 w-6 mr-3" />
                    </motion.div>
                    <span>Обади се сега: {PHONE_NUMBER}</span>
                  </div>
                </motion.a>

                <motion.a
                  href="#contact"
                  className="group relative px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-lg border-2 border-white/30 overflow-hidden"
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: 'rgba(255, 255, 255, 0.15)',
                    borderColor: 'rgba(251, 146, 60, 0.5)'
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative">Безплатна оферта за 5 минути</span>
                </motion.a>
              </motion.div>

              {/* Working Hours Badge */}
              <motion.div
                variants={itemVariants}
                className="flex justify-center lg:justify-start"
              >
                <div className="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-orange-500/20 to-orange-400/10 border border-orange-500/30 rounded-full backdrop-blur-sm">
                  <p className="text-xs sm:text-sm font-semibold text-orange-300">
                    Работно време: Пон-Нед: 7:00-20:00
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Side - Van Image */}
            <motion.div
              variants={slideInRight}
              initial="hidden"
              animate="visible"
              className="relative hidden lg:block mt-8 lg:mt-0"
            >
              {/* Spotlight glow effect */}
              <div className="absolute inset-0 bg-gradient-radial from-orange-500/30 via-orange-400/10 to-transparent blur-3xl"></div>

              {/* Van Image */}
              <motion.img
                src="/assets/van.png"
                alt="We Transport It Van"
                className="relative z-10 w-full h-auto drop-shadow-2xl"
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Accent glow behind van */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-500/20 rounded-full blur-[100px] -z-10"></div>
            </motion.div>
          </div>

          {/* Stats moved to bottom on mobile, inline on desktop */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mt-8 sm:mt-12 lg:mt-20"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-4xl mx-auto">
              <motion.div
                variants={itemVariants}
                className="text-center p-4 sm:p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-orange-500/50 transition-all duration-300"
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
              >
                <p className="font-bold text-sm sm:text-base lg:text-lg text-white">Над 500 успешни превоза</p>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="text-center p-4 sm:p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-orange-500/50 transition-all duration-300"
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
              >
                <p className="font-bold text-sm sm:text-base lg:text-lg text-white">Професионален екип с опит</p>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="text-center p-4 sm:p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-orange-500/50 transition-all duration-300"
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
              >
                <p className="font-bold text-sm sm:text-base lg:text-lg text-white">Работим 7 дни в седмицата</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
};

export default Hero;
