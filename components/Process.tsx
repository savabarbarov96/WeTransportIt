import React from 'react';
import { motion } from 'framer-motion';
import { PROCESS_STEPS } from '../constants';

const Process: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const stepVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section id="process" className="py-16 sm:py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold tracking-wide uppercase">
              Лесно и бързо
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Как работим? Нашият процес в 4 стъпки
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Ние правим преместването лесно и безпроблемно.
          </p>
        </motion.div>

        <div className="mt-16 sm:mt-20">
          <div className="relative">
            {/* Animated connecting line for desktop */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={lineVariants}
              className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-1 bg-gradient-to-r from-blue-200 via-orange-200 to-blue-200 origin-left"
              style={{ transform: 'translateY(-50%)' }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-orange-400 to-blue-400 opacity-50 blur-sm"></div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={containerVariants}
              className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12"
            >
              {PROCESS_STEPS.map((step, index) => (
                <motion.div
                  key={index}
                  variants={stepVariants}
                  className="relative text-center group"
                >
                  {/* Step number badge */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold text-sm px-4 py-1 rounded-full shadow-lg">
                      Стъпка {index + 1}
                    </div>
                  </div>

                  {/* Icon circle with animations */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="relative flex items-center justify-center mx-auto w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 text-white shadow-2xl group-hover:shadow-blue-500/50"
                  >
                    {/* Animated glow ring */}
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0.2, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="absolute inset-0 rounded-full bg-blue-400 blur-md"
                    ></motion.div>

                    <div className="relative z-10">
                      {step.icon}
                    </div>
                  </motion.div>

                  {/* Content card */}
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="mt-8 bg-white rounded-2xl p-6 shadow-lg border border-gray-100 group-hover:border-blue-200 group-hover:shadow-xl transition-all duration-300"
                  >
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      {step.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </motion.div>

                  {/* Decorative element */}
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-transparent via-orange-300 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(59, 130, 246, 0.3)' }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold text-lg px-10 py-4 sm:py-5 rounded-xl shadow-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300"
          >
            Започнете сега
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
