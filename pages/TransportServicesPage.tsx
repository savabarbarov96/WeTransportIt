import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PHONE_NUMBER, PHONE_NUMBER_RAW } from '../constants';
import { PhoneIcon, TruckIcon, MapPinIcon, CheckIcon, BuildingOfficeIcon, ComputerDesktopIcon, ArchiveBoxIcon } from '../components/IconComponents';
import Contact from '../components/Contact';

const TransportServicesPage: React.FC = () => {
  const vehicleTypes = [
    {
      name: "Малък товарен бус",
      capacity: "До 1 тон",
      dimensions: "Дължина 2.5м, обем 6-8 м³",
      ideal: "Малки апартаменти, битова техника, малък обем мебели"
    },
    {
      name: "Среден товарен автомобил",
      capacity: "До 2 тона",
      dimensions: "Дължина 4м, обем 12-15 м³",
      ideal: "Двустайни апартаменти, офисно оборудване, средни товари"
    },
    {
      name: "Голям товарен камион",
      capacity: "До 3.5 тона",
      dimensions: "Дължина 6м, обем 20-25 м³",
      ideal: "Тристайни апартаменти, къщи, офис преместване"
    },
  ];

  const transportServices = [
    "Вътрешноградски транспорт на мебели и вещи",
    "Междуградски превози из цялата страна",
    "Транспорт на битова техника (хладилници, перални, телевизори)",
    "Превоз на офисно оборудване",
    "Транспорт на строителни материали",
    "Извозване на стари мебели и отпадъци",
    "Експресни доставки (същия ден)",
    "Планирани премествания (уговорка предварително)",
  ];

  const majorCities = [
    "София", "Пловдив", "Варна", "Бургас", "Русе", "Стара Загора",
    "Плевен", "Сливен", "Добрич", "Шумен", "Перник", "Хасково",
    "Велико Търново", "Ямбол", "Пазарджик", "Благоевград", "Враца", "Габрово"
  ];

  const benefits = [
    "Застраховка на товарите по време на транспорт",
    "GPS проследяване на всички автомобили",
    "Професионални шофьори с дългогодишен опит",
    "Товарене и разтоварване включени в цената",
    "Гъвкави работни часове - работим 7 дни в седмицата",
    "Бърза реакция - можем да тръгнем в рамките на часове",
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 sm:py-32 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(0deg, #ff6b35 0px, #ff6b35 1px, transparent 1px, transparent 20px),
                             repeating-linear-gradient(90deg, #ff6b35 0px, #ff6b35 1px, transparent 1px, transparent 20px)`
          }}></div>
        </div>

        {/* Orange accent lines */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
        <div className="absolute top-20 left-0 w-1 h-64 bg-gradient-to-b from-orange-500 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block mb-6"
            >
              <span className="px-6 py-3 bg-orange-500 text-white text-sm font-bold tracking-widest uppercase border-l-4 border-orange-300">
                Цяла България
              </span>
            </motion.div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tight" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
              Транспортни Услуги<br />
              <span className="text-orange-500">В Цялата Страна</span>
            </h1>

            <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              Професионален превоз на мебели, битова техника и товари във всички градове на България.
              <span className="block mt-2 text-orange-400 font-bold">Бързо, сигурно и на достъпни цени!</span>
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <a
                href={`tel:${PHONE_NUMBER_RAW}`}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-orange-500 text-white text-lg font-bold uppercase tracking-wider hover:bg-orange-600 transition-all duration-300 border-b-4 border-orange-700 hover:border-orange-800"
              >
                <PhoneIcon className="h-6 w-6 group-hover:animate-pulse" />
                {PHONE_NUMBER}
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-transparent text-orange-500 text-lg font-bold uppercase tracking-wider border-2 border-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300"
              >
                Безплатна оферта
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Vehicle Types Section */}
      <section className="py-16 sm:py-24 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-4" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
              Наши <span className="text-orange-500">Превозни Средства</span>
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Разполагаме с различни типове товарни автомобили за всеки обем и нужда
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {vehicleTypes.map((vehicle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="bg-gray-900 border-2 border-gray-700 hover:border-orange-500 transition-all duration-300 overflow-hidden group"
              >
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-4 text-center">
                  <TruckIcon className="h-12 w-12 text-white mx-auto mb-2" />
                  <h3 className="text-2xl font-black text-white" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                    {vehicle.name}
                  </h3>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-orange-500 rounded-full p-1 mt-1">
                      <CheckIcon className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Товароносимост</p>
                      <p className="text-white font-bold">{vehicle.capacity}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-orange-500 rounded-full p-1 mt-1">
                      <CheckIcon className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Размери</p>
                      <p className="text-white font-bold">{vehicle.dimensions}</p>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-gray-700">
                    <p className="text-gray-400 text-sm mb-2">Идеален за:</p>
                    <p className="text-gray-200">{vehicle.ideal}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-4" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
              Транспортни <span className="text-orange-500">Услуги</span>
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {transportServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-gray-900 p-6 border-l-4 border-orange-500 hover:border-orange-400 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="bg-orange-500 rounded-full p-2 group-hover:bg-orange-400 transition-colors duration-300">
                      <CheckIcon className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <p className="text-gray-200 text-lg font-medium">{service}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Section */}
      <section className="py-16 sm:py-24 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-4" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
              Покритие <span className="text-orange-500">Цяла България</span>
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Осъществяваме транспортни услуги до всички градове и населени места в България
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-900 p-8 rounded-lg border-2 border-orange-500"
          >
            <div className="flex items-center gap-3 mb-8">
              <MapPinIcon className="h-8 w-8 text-orange-500" />
              <h3 className="text-2xl font-black text-white" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                Основни градове, които обслужваме
              </h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {majorCities.map((city, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                  className="flex items-center gap-2 bg-gray-800 p-3 rounded border border-gray-700 hover:border-orange-500 transition-all duration-300"
                >
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-200 font-medium">{city}</span>
                </motion.div>
              ))}
            </div>
            <div className="mt-8 pt-8 border-t border-gray-700 text-center">
              <p className="text-gray-300 text-lg">
                <span className="text-orange-400 font-bold">И още много други градове и села!</span>
                <br />
                Попитайте за транспорт до вашата дестинация
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-4" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
              Защо <span className="text-orange-500">Да Ни Изберете</span>
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex items-start gap-4 bg-gray-900 p-6 rounded-lg border border-gray-700 hover:border-orange-500 transition-all duration-300"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                    <CheckIcon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <p className="text-gray-200 text-lg font-medium pt-2">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-r from-orange-600 to-orange-500 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(45deg, #000 0px, #000 2px, transparent 2px, transparent 20px)`
          }}></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
              Нужда от транспорт?
            </h2>
            <p className="text-xl text-white mb-8 font-medium">
              Обадете се сега за безплатна оферта и резервация!
            </p>
            <a
              href={`tel:${PHONE_NUMBER_RAW}`}
              className="inline-flex items-center gap-3 px-10 py-5 bg-gray-900 text-white text-xl font-black uppercase tracking-wider hover:bg-gray-800 transition-all duration-300 border-4 border-white"
            >
              <PhoneIcon className="h-7 w-7" />
              {PHONE_NUMBER}
            </a>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <Contact />
    </div>
  );
};

export default TransportServicesPage;
