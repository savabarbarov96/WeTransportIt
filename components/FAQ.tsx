import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQ_ITEMS } from '../constants';
import { ChevronDownIcon } from './IconComponents';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
    <section id="faq" className="py-16 sm:py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm font-semibold tracking-wide uppercase">
              Въпроси и отговори
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Често задавани въпроси
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Намерете отговори на най-често срещаните въпроси. Ако не намирате вашия, не се колебайте да се свържете с нас!
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="mt-12 sm:mt-16 space-y-4"
        >
          {FAQ_ITEMS.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <motion.div
                initial={false}
                animate={{
                  backgroundColor: openIndex === index ? 'rgb(255, 255, 255)' : 'rgb(249, 250, 251)',
                }}
                className="border-2 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
                style={{
                  borderColor: openIndex === index ? 'rgb(249, 115, 22)' : 'rgb(229, 231, 235)',
                }}
              >
                <motion.button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center text-left p-5 sm:p-6"
                  aria-expanded={openIndex === index}
                  whileHover={{ backgroundColor: 'rgb(255, 255, 255)' }}
                >
                  <span className="text-base sm:text-lg font-bold text-gray-900 pr-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {item.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <div className={`p-2 rounded-full ${
                      openIndex === index
                        ? 'bg-orange-100 text-orange-600'
                        : 'bg-gray-200 text-gray-500 group-hover:bg-gray-300'
                    } transition-colors duration-300`}>
                      <ChevronDownIcon className="h-5 w-5" />
                    </div>
                  </motion.div>
                </motion.button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <motion.div
                        initial={{ y: -10 }}
                        animate={{ y: 0 }}
                        exit={{ y: -10 }}
                        className="px-5 sm:px-6 pb-5 sm:pb-6"
                      >
                        <div className="pt-2 text-gray-600 leading-relaxed text-sm sm:text-base border-t border-gray-100">
                          <p>{item.answer}</p>
                        </div>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 sm:mt-16 text-center bg-gradient-to-r from-orange-50 to-purple-50 rounded-2xl p-8 sm:p-10 border border-orange-100"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Все още имате въпроси?
          </h3>
          <p className="text-gray-600 mb-6">
            Нашият екип е на разположение да отговори на всички ваши въпроси.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(249, 115, 22, 0.3)' }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold text-base sm:text-lg px-8 py-3 sm:py-4 rounded-xl shadow-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300"
          >
            Свържете се с нас
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
