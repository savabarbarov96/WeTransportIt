import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

interface BeforeAfterPair {
  before: string;
  after: string;
  title: string;
}

const BeforeAfter: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const pairs: BeforeAfterPair[] = [
    { before: '/assets/before1.jpg', after: '/assets/after1.jpg', title: 'Преместване на апартамент' },
    { before: '/assets/before2.jpg', after: '/assets/after2.jpg', title: 'Транспорт на офис' },
    { before: '/assets/before3.jpg', after: '/assets/after3.jpg', title: 'Товарене и разтоварване' },
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

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPosition(percent);
  };

  const handleTouchStart = () => {
    setIsDragging(true);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.touches[0].clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPosition(percent);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pairs.length);
    setSliderPosition(50);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + pairs.length) % pairs.length);
    setSliderPosition(50);
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

          {/* Before/After Slider */}
          <motion.div variants={itemVariants} className="mb-8 sm:mb-12">
            <div
              ref={containerRef}
              className="relative w-full max-w-4xl mx-auto aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-orange-500/20 border border-orange-500/20 bg-gray-900"
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {/* After Image (Background) */}
              <div className="absolute inset-0">
                <img
                  src={pairs[currentIndex].after}
                  alt="After"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 px-4 py-2 bg-orange-500/90 backdrop-blur-sm rounded-full">
                  <span className="text-white font-bold text-sm">СЛЕД</span>
                </div>
              </div>

              {/* Before Image (Foreground with clip) */}
              <div
                className="absolute inset-0 select-none"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
              >
                <img
                  src={pairs[currentIndex].before}
                  alt="Before"
                  className="w-full h-full object-cover"
                  draggable="false"
                />
                <div className="absolute top-4 left-4 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full">
                  <span className="text-gray-900 font-bold text-sm">ПРЕДИ</span>
                </div>
              </div>

              {/* Slider Handle */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-orange-500 cursor-ew-resize"
                style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
                onMouseDown={handleMouseDown}
                onTouchStart={handleTouchStart}
              >
                {/* Handle Circle */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-orange-500 rounded-full shadow-lg shadow-orange-500/50 flex items-center justify-center cursor-ew-resize hover:scale-110 transition-transform">
                  <div className="flex gap-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                    </svg>
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Current Project Title */}
            <div className="text-center mt-6">
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                {pairs[currentIndex].title}
              </h3>
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
                  onClick={() => {
                    setCurrentIndex(index);
                    setSliderPosition(50);
                  }}
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
