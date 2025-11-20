import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface BeforeAfterPair {
  before: string;
  after: string;
  title: string;
}

const BeforeAfter: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const pairs: BeforeAfterPair[] = [
    { before: '/assets/before1.jpg', after: '/assets/after1.jpg', title: 'Преместване на апартамент' },
    { before: '/assets/before2.jpg', after: '/assets/after2.jpg', title: 'Транспорт на офис' },
    { before: '/assets/before3.jpg', after: '/assets/before3.jpg', title: 'Товарене и разтоварване' },
    { before: '/assets/before4.jpg', after: '/assets/after4.jpg', title: 'Професионален транспорт' },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
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

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pairs.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + pairs.length) % pairs.length);
  };

  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* Animated background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-transparent to-orange-400/5"></div>

      {/* Geometric accent lines */}
      <div className="absolute top-20 left-0 w-32 sm:w-64 h-1 bg-gradient-to-r from-orange-500 to-transparent"></div>
      <div className="absolute bottom-20 right-0 w-48 sm:w-96 h-1 bg-gradient-to-l from-orange-400 to-transparent"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Section Title */}
          <motion.div variants={titleVariants} className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 tracking-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              НАШАТА <span className="text-orange-400 drop-shadow-[0_0_25px_rgba(251,146,60,0.5)]">РАБОТА</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              Вижте резултатите от нашите професионални услуги преди и след
            </p>
          </motion.div>

          {/* Current Project Title */}
          <motion.div variants={itemVariants} className="text-center mb-6 sm:mb-8">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
              {pairs[currentIndex].title}
            </h3>
          </motion.div>

          {/* Before/After Comparison */}
          <motion.div
            key={currentIndex}
            initial="hidden"
            animate="visible"
            variants={itemVariants}
            className="mb-8 sm:mb-12"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 max-w-6xl mx-auto">
              {/* Before Image Card */}
              <motion.div
                variants={imageVariants}
                className="group relative overflow-hidden rounded-2xl shadow-2xl shadow-orange-500/10 border border-orange-500/20 bg-gray-900"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={pairs[currentIndex].before}
                    alt="Преди"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Label */}
                <div className="absolute top-4 left-4 px-5 py-2.5 bg-white/95 backdrop-blur-sm rounded-full shadow-lg">
                  <span className="text-gray-900 font-bold text-sm sm:text-base tracking-wide">ПРЕДИ</span>
                </div>

                {/* Bottom gradient for better text visibility */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/80 to-transparent pointer-events-none"></div>
              </motion.div>

              {/* After Image Card */}
              <motion.div
                variants={imageVariants}
                className="group relative overflow-hidden rounded-2xl shadow-2xl shadow-orange-500/20 border border-orange-500/30 bg-gray-900"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={pairs[currentIndex].after}
                    alt="След"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-900/40 via-orange-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Label */}
                <div className="absolute top-4 right-4 px-5 py-2.5 bg-orange-500/95 backdrop-blur-sm rounded-full shadow-lg shadow-orange-500/50">
                  <span className="text-white font-bold text-sm sm:text-base tracking-wide">СЛЕД</span>
                </div>

                {/* Bottom gradient for better visual */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-orange-900/60 to-transparent pointer-events-none"></div>

                {/* Checkmark icon overlay on hover */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 sm:w-20 sm:h-20 bg-orange-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-50 group-hover:scale-100 shadow-2xl shadow-orange-500/50">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </motion.div>
            </div>

            {/* Visual separator with arrow for desktop */}
            <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-center pointer-events-none">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center shadow-2xl shadow-orange-500/50 animate-pulse">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>

            {/* Visual separator with arrow for mobile */}
            <div className="lg:hidden flex items-center justify-center my-6">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center shadow-2xl shadow-orange-500/50">
                <svg className="w-6 h-6 text-white rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </motion.div>

          {/* Navigation Controls */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            {/* Navigation Buttons */}
            <div className="flex gap-4">
              <motion.button
                onClick={goToPrevious}
                className="px-6 py-3 bg-white/10 backdrop-blur-sm text-white font-bold rounded-lg border-2 border-white/30 hover:bg-white/15 hover:border-orange-500/50 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                ← Предишен
              </motion.button>
              <motion.button
                onClick={goToNext}
                className="px-6 py-3 bg-white/10 backdrop-blur-sm text-white font-bold rounded-lg border-2 border-white/30 hover:bg-white/15 hover:border-orange-500/50 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Следващ →
              </motion.button>
            </div>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {pairs.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-orange-500 w-8'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>

          {/* Bottom Stats */}
          <motion.div
            variants={itemVariants}
            className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto"
          >
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-orange-500/50 transition-all duration-300">
              <p className="text-2xl sm:text-3xl font-bold text-orange-400 mb-2">100%</p>
              <p className="text-sm sm:text-base text-gray-300">Удовлетворени клиенти</p>
            </div>
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-orange-500/50 transition-all duration-300">
              <p className="text-2xl sm:text-3xl font-bold text-orange-400 mb-2">500+</p>
              <p className="text-sm sm:text-base text-gray-300">Успешни превози</p>
            </div>
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-orange-500/50 transition-all duration-300">
              <p className="text-2xl sm:text-3xl font-bold text-orange-400 mb-2">7/7</p>
              <p className="text-sm sm:text-base text-gray-300">Работим всеки ден</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
};

export default BeforeAfter;
