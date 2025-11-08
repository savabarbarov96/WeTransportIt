import React from 'react';
import { motion } from 'framer-motion';
import { PHONE_NUMBER } from '../constants';

const Pricing: React.FC = () => {
  const movingServices = [
    { service: '1 хамал', price: '25 лв/час' },
    { service: '2 хамала', price: '45 лв/час' },
    { service: '3 хамала', price: '65 лв/час' },
    { service: 'Минимално време', price: '2 часа' },
  ];

  const transportServices = [
    { vehicle: 'Бус до 1.5 тона', price: 'От 50 лв' },
    { vehicle: 'Камион до 3.5 тона', price: 'От 80 лв' },
    { vehicle: 'Голям камион', price: 'Договаряне' },
    { vehicle: 'Цена на километър (>30км)', price: '1-1.50 лв/км' },
  ];

  const additionalServices = [
    { service: 'Опаковане на вещи', price: '20-40 лв/час' },
    { service: 'Демонтаж на мебели', price: 'Договаряне' },
    { service: 'Монтаж на мебели', price: 'Договаряне' },
    { service: 'Извозване на отпадъци', price: 'От 40 лв' },
  ];

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

  const rowVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <section id="pricing" className="py-16 sm:py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-200 to-transparent"></div>
      <div className="absolute top-40 left-10 w-72 h-72 bg-orange-100 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-40 right-10 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-semibold tracking-wide uppercase">
              Прозрачни цени
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Ценоразпис на услуги
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Прозрачни цени без скрити такси. Крайната цена зависи от обем, разстояние и сложност.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {/* Moving Services Table */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -5 }}
            className="flex flex-col group"
          >
            <div className="text-center mb-6">
              <div className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-t-2xl">
                <h3 className="text-xl sm:text-2xl font-bold" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Хамалски услуги
                </h3>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl border-2 border-orange-100 p-6 sm:p-8 flex-grow group-hover:shadow-2xl group-hover:border-orange-200 transition-all duration-300">
              <table className="w-full">
                <tbody>
                  {movingServices.map((item, index) => (
                    <motion.tr
                      key={index}
                      variants={rowVariants}
                      className="border-b border-gray-200 last:border-b-0"
                    >
                      <td className="py-4 text-gray-700 font-medium text-sm sm:text-base">{item.service}</td>
                      <td className="py-4 text-right">
                        <span className="text-orange-600 font-bold text-base sm:text-lg">{item.price}</span>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Transportation Table */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -5 }}
            className="flex flex-col group"
          >
            <div className="text-center mb-6">
              <div className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-t-2xl">
                <h3 className="text-xl sm:text-2xl font-bold" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Транспорт
                </h3>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl border-2 border-blue-100 p-6 sm:p-8 flex-grow group-hover:shadow-2xl group-hover:border-blue-200 transition-all duration-300">
              <table className="w-full">
                <tbody>
                  {transportServices.map((item, index) => (
                    <motion.tr
                      key={index}
                      variants={rowVariants}
                      className="border-b border-gray-200 last:border-b-0"
                    >
                      <td className="py-4 text-gray-700 font-medium text-sm sm:text-base">{item.vehicle}</td>
                      <td className="py-4 text-right">
                        <span className="text-blue-600 font-bold text-base sm:text-lg">{item.price}</span>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Additional Services Table */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -5 }}
            className="flex flex-col group"
          >
            <div className="text-center mb-6">
              <div className="inline-block bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-t-2xl">
                <h3 className="text-xl sm:text-2xl font-bold" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Допълнителни услуги
                </h3>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl border-2 border-green-100 p-6 sm:p-8 flex-grow group-hover:shadow-2xl group-hover:border-green-200 transition-all duration-300">
              <table className="w-full">
                <tbody>
                  {additionalServices.map((item, index) => (
                    <motion.tr
                      key={index}
                      variants={rowVariants}
                      className="border-b border-gray-200 last:border-b-0"
                    >
                      <td className="py-4 text-gray-700 font-medium text-sm sm:text-base">{item.service}</td>
                      <td className="py-4 text-right">
                        <span className="text-green-600 font-bold text-base sm:text-lg">{item.price}</span>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </motion.div>

        {/* Special Offers */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white rounded-2xl p-8 sm:p-12 shadow-2xl relative overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-900 rounded-full blur-3xl opacity-20"></div>

          <div className="relative z-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Специални оферти
            </h3>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <motion.div
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(59, 130, 246, 0.3)' }}
                className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-white/20"
              >
                <p className="text-base sm:text-lg font-semibold">10% отстъпка при преместване на цял апартамент</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(59, 130, 246, 0.3)' }}
                className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-white/20"
              >
                <p className="text-base sm:text-lg font-semibold">Безплатна оценка на място за гр. Стара Загора</p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(249, 115, 22, 0.3)' }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold text-lg px-10 py-4 sm:py-5 rounded-xl shadow-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300"
          >
            Получи безплатна оферта
          </motion.a>
          <p className="mt-6 text-gray-600 text-base sm:text-lg">
            Обадете се на{' '}
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="font-bold text-orange-600 hover:text-orange-700 hover:underline transition-colors"
            >
              {PHONE_NUMBER}
            </a>{' '}
            за точна цена според вашите нужди
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
