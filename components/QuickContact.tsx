import React from 'react';
import { motion } from 'framer-motion';
import { PHONE_NUMBER, PHONE_NUMBER_RAW, EMAIL_ADDRESS, WHATSAPP_URL, VIBER_URL } from '../constants';
import { PhoneIcon, EnvelopeIcon, ClockIcon } from './IconComponents';

const QuickContact: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const contactMethods = [
    {
      icon: <PhoneIcon className="h-8 w-8" />,
      title: 'Позвънете сега',
      value: PHONE_NUMBER,
      description: 'Директна линия за запитвания',
      href: `tel:${PHONE_NUMBER_RAW}`,
      gradient: 'from-blue-500 to-blue-700',
      hoverGradient: 'from-blue-600 to-blue-800',
    },
    {
      icon: <EnvelopeIcon className="h-8 w-8" />,
      title: 'Изпратете имейл',
      value: EMAIL_ADDRESS,
      description: 'Отговаряме в рамките на 24 часа',
      href: `mailto:${EMAIL_ADDRESS}`,
      gradient: 'from-orange-500 to-orange-700',
      hoverGradient: 'from-orange-600 to-orange-800',
    },
  ];

  const quickLinks = [
    {
      name: 'WhatsApp',
      href: WHATSAPP_URL,
      color: 'bg-green-500 hover:bg-green-600',
      icon: '💬',
    },
    {
      name: 'Viber',
      href: VIBER_URL,
      color: 'bg-purple-600 hover:bg-purple-700',
      icon: '📱',
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Subtle background patterns */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-0 left-0 w-full h-full"
             style={{
               backgroundImage: `radial-gradient(circle at 2px 2px, #000 1px, transparent 0)`,
               backgroundSize: '40px 40px'
             }}>
        </div>
      </div>

      {/* Animated gradient orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 right-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-20 left-0 w-96 h-96 bg-orange-400 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <div className="inline-block mb-4">
            <motion.span
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              className="px-4 py-2 bg-gradient-to-r from-blue-100 to-orange-100 text-blue-800 rounded-full text-sm font-semibold tracking-wide uppercase"
            >
              Свържете се с нас
            </motion.span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Готови сме да ви помогнем
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Получете безплатна оферта за 5 минути или уговорете час за оглед
          </p>
        </motion.div>

        {/* Main contact cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-6 mb-8"
        >
          {contactMethods.map((method, index) => (
            <motion.a
              key={index}
              href={method.href}
              variants={itemVariants}
              whileHover={{ scale: 1.03, y: -5 }}
              whileTap={{ scale: 0.98 }}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-gray-100 hover:border-transparent transition-all duration-300 overflow-hidden"
            >
              {/* Animated gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${method.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>

              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-start space-x-4">
                  {/* Icon container */}
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                    className={`flex-shrink-0 p-4 rounded-xl bg-gradient-to-br ${method.gradient} text-white shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                  >
                    {method.icon}
                  </motion.div>

                  {/* Text content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-white mb-1 transition-colors duration-300">
                      {method.title}
                    </h3>
                    <p className="text-sm text-gray-500 group-hover:text-white/80 mb-2 transition-colors duration-300">
                      {method.description}
                    </p>
                    <p className="text-lg font-semibold text-gray-800 group-hover:text-white break-all transition-colors duration-300">
                      {method.value}
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative corner element */}
              <div className="absolute top-0 right-0 w-20 h-20 opacity-10">
                <div className={`absolute inset-0 bg-gradient-to-br ${method.gradient} transform rotate-45 translate-x-10 -translate-y-10`}></div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Working hours and quick links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sm:p-8"
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            {/* Working hours */}
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0 p-3 rounded-lg bg-gradient-to-br from-gray-700 to-gray-900 text-white">
                <ClockIcon className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Работно време</p>
                <p className="text-lg font-bold text-gray-900">Понеделник - Неделя: 7:00 - 20:00</p>
              </div>
            </div>

            {/* Quick messaging links */}
            <div className="flex flex-col sm:flex-row gap-3">
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide sm:self-center">
                Или пишете директно:
              </p>
              <div className="flex gap-3">
                {quickLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center justify-center space-x-2 px-6 py-3 ${link.color} text-white font-bold rounded-lg shadow-md hover:shadow-lg transition-all duration-300`}
                  >
                    <span className="text-xl">{link.icon}</span>
                    <span>{link.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-8"
        >
          <p className="text-gray-600 text-sm">
            Всички запитвания се обработват бързо и професионално
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default QuickContact;
