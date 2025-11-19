import React from 'react';
import { motion } from 'framer-motion';
import { PRIMARY_CITIES, SECONDARY_CITIES } from '../constants';
import { MapPinIcon, CheckIcon } from './IconComponents';

const Coverage: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="coverage" className="py-16 sm:py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:text-center"
        >
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold tracking-wide uppercase">
              Зона на покритие
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Обслужваме цялата страна
          </h2>
          <p className="mt-4 max-w-2xl text-lg sm:text-xl text-gray-600 lg:mx-auto leading-relaxed">
            Базирани в <span className="font-semibold text-blue-800">Стара Загора</span> и в <span className="font-semibold text-gray-700">околностите</span>
          </p>
        </motion.div>

        <div className="mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Primary Cities */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Основни градове
              </h3>
              <div className="space-y-4">
                {PRIMARY_CITIES.map((city, index) => (
                  <motion.div
                    key={city}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="group flex items-center p-5 bg-white rounded-xl shadow-md hover:shadow-xl border border-gray-100 hover:border-blue-200 transition-all duration-300"
                  >
                    <div className="relative">
                      <motion.div
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.5, 0.2, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.2,
                        }}
                        className="absolute inset-0 rounded-full bg-blue-400 blur-md"
                      ></motion.div>
                      <div className="relative bg-gradient-to-br from-blue-500 to-blue-700 p-2 rounded-full">
                        <MapPinIcon className="h-7 w-7 text-white" />
                      </div>
                    </div>
                    <span className="ml-4 text-xl font-semibold text-gray-800 group-hover:text-blue-800 transition-colors">
                      {city}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Secondary Cities */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Други населени места
              </h3>
              <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {SECONDARY_CITIES.map((city) => (
                    <motion.div
                      key={city}
                      variants={itemVariants}
                      whileHover={{ x: 5 }}
                      className="flex items-center group"
                    >
                      <CheckIcon className="h-5 w-5 text-green-500 group-hover:text-green-600 flex-shrink-0 transition-colors" />
                      <span className="ml-3 text-base text-gray-700 group-hover:text-gray-900 transition-colors">
                        {city}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="relative bg-gradient-to-r from-blue-50 via-orange-50 to-blue-50 p-8 rounded-2xl shadow-lg border border-blue-100">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-500 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
              Важна информация
            </div>
            <p className="text-lg text-gray-700 mt-4">
              Работим също и в съседни области при необходимост.
            </p>
            <p className="font-bold text-xl text-blue-800 mt-2">
              Обадете се за уточняване на цена според разстоянието!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Coverage;
