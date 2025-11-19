import React from 'react';
import { motion } from 'framer-motion';
import { theme } from '../theme';
import {
  TruckIcon,
  CheckIcon,
  MapPinIcon,
  PhoneIcon,
  ClockIcon,
  ComputerDesktopIcon,
  BuildingOfficeIcon,
  ShieldCheckIcon,
  ArchiveBoxIcon
} from '../components/IconComponents';
import { PHONE_NUMBER, EMAIL_ADDRESS, WHATSAPP_URL } from '../constants';

const TransportServicesPage: React.FC = () => {
  const transportTypes = [
    {
      icon: <TruckIcon className="h-16 w-16" />,
      title: 'Вътрешноградски транспорт',
      description: 'Бърз и надежден превоз в рамките на града',
      features: [
        'Превоз на мебели и обзавеждане',
        'Транспорт на битова техника',
        'Превоз на товари и материали',
        'Експресни доставки'
      ]
    },
    {
      icon: <MapPinIcon className="h-16 w-16" />,
      title: 'Междуградски транспорт',
      description: 'Транспорт между всички градове в България',
      features: [
        'София - Стара Загора',
        'Пловдив - Стара Загора',
        'Варна - Бургас',
        'Всички направления в страната'
      ]
    },
    {
      icon: <ComputerDesktopIcon className="h-16 w-16" />,
      title: 'Транспорт на техника',
      description: 'Специализиран превоз на чувствителна техника',
      features: [
        'Хладилници и фризери',
        'Перални и съдомиални машини',
        'Телевизори и аудио техника',
        'Компютри и офис оборудване'
      ]
    },
    {
      icon: <BuildingOfficeIcon className="h-16 w-16" />,
      title: 'Бизнес транспорт',
      description: 'Транспортни решения за фирми и организации',
      features: [
        'Офис преместване',
        'Складови доставки',
        'Търговски стоки',
        'Редовни маршрути'
      ]
    }
  ];

  const vehicles = [
    {
      name: 'Малък товарен',
      capacity: 'До 1 тон',
      dimensions: '2.5м x 1.5м x 1.5м',
      ideal: 'Малки товари, битова техника, багаж'
    },
    {
      name: 'Среден товарен',
      capacity: 'До 1.5 тона',
      dimensions: '3.5м x 2м x 2м',
      ideal: 'Апартаменти, офиси, средни товари'
    },
    {
      name: 'Голям товарен',
      capacity: 'До 3 тона',
      dimensions: '4.5м x 2.2м x 2.2м',
      ideal: 'Големи премествания, множество товари'
    }
  ];

  const advantages = [
    {
      icon: <ClockIcon className="h-12 w-12" />,
      title: 'Навременна доставка',
      text: 'Спазваме договорените срокове и работим с график'
    },
    {
      icon: <ShieldCheckIcon className="h-12 w-12" />,
      title: 'Застраховка',
      text: 'Всички товари са застраховани при транспорт'
    },
    {
      icon: <TruckIcon className="h-12 w-12" />,
      title: 'Модерен автопарк',
      text: 'Поддържани и надеждни товарни автомобили'
    },
    {
      icon: <ArchiveBoxIcon className="h-12 w-12" />,
      title: 'Грижа за товара',
      text: 'Професионално фиксиране и опаковане'
    }
  ];

  return (
    <div style={{ fontFamily: theme.fonts.body }}>
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ background: theme.gradients.hero }}
      >
        {/* Grid pattern background */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(${theme.colors.accent.orange} 1px, transparent 1px),
                linear-gradient(90deg, ${theme.colors.accent.orange} 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              className="inline-flex items-center justify-center gap-4 mb-6 px-8 py-4 rounded-xl"
              style={{
                backgroundColor: theme.colors.accent.orange,
                boxShadow: `0 10px 40px rgba(255, 107, 53, 0.4)`
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <TruckIcon
                className="h-14 w-14"
                style={{ color: theme.colors.neutral.offWhite }}
              />
            </motion.div>

            <h1
              className="text-5xl sm:text-6xl lg:text-8xl font-bold mb-6"
              style={{
                fontFamily: theme.fonts.heading,
                color: theme.colors.neutral.offWhite,
                lineHeight: 1.1,
                letterSpacing: '2px'
              }}
            >
              ТРАНСПОРТНИ<br />УСЛУГИ
            </h1>

            <p
              className="text-2xl sm:text-3xl mb-6"
              style={{
                color: theme.colors.accent.bright,
                fontFamily: theme.fonts.accent,
                fontWeight: 600
              }}
            >
              Навсякъде в България
            </p>

            <p
              className="text-xl sm:text-2xl mb-12 max-w-3xl mx-auto"
              style={{ color: theme.colors.neutral.lightGrey }}
            >
              Професионален превоз на товари, мебели и битова техника между всички градове
            </p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-lg text-2xl font-bold transition-all duration-300 transform hover:scale-105"
                style={{
                  background: theme.gradients.accent,
                  color: theme.colors.neutral.offWhite,
                  fontFamily: theme.fonts.heading,
                  boxShadow: `0 10px 40px rgba(255, 107, 53, 0.5)`
                }}
              >
                <PhoneIcon className="h-7 w-7" />
                {PHONE_NUMBER}
              </a>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-lg text-2xl font-bold transition-all duration-300 transform hover:scale-105"
                style={{
                  backgroundColor: theme.colors.success,
                  color: theme.colors.primary.dark,
                  fontFamily: theme.fonts.heading,
                  boxShadow: `0 10px 40px rgba(6, 214, 160, 0.4)`
                }}
              >
                WHATSAPP
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Animated scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div
            className="w-6 h-10 rounded-full border-2 flex items-start justify-center p-2"
            style={{ borderColor: theme.colors.accent.orange }}
          >
            <motion.div
              className="w-1 h-2 rounded-full"
              style={{ backgroundColor: theme.colors.accent.orange }}
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Transport Types Section */}
      <section
        className="py-20"
        style={{ backgroundColor: theme.colors.neutral.offWhite }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2
              className="text-5xl sm:text-6xl font-bold mb-4"
              style={{
                fontFamily: theme.fonts.heading,
                color: theme.colors.primary.dark
              }}
            >
              ВИДОВЕ ТРАНСПОРТ
            </h2>
            <p
              className="text-xl"
              style={{ color: theme.colors.neutral.darkGrey }}
            >
              Разнообразни решения за всяка транспортна нужда
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {transportTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, boxShadow: `0 20px 60px rgba(0,0,0,0.15)` }}
                className="p-8 rounded-xl relative overflow-hidden group"
                style={{
                  backgroundColor: 'white',
                  border: `3px solid ${theme.colors.accent.orange}`,
                  boxShadow: '0 10px 30px rgba(0,0,0,0.08)'
                }}
              >
                {/* Gradient bar on hover */}
                <div
                  className="absolute top-0 left-0 w-full h-2 transition-all duration-300"
                  style={{ background: theme.gradients.accent }}
                />

                <div className="relative z-10">
                  <div
                    className="inline-block p-4 rounded-xl mb-6"
                    style={{
                      backgroundColor: theme.colors.accent.orange,
                      color: theme.colors.neutral.offWhite
                    }}
                  >
                    {type.icon}
                  </div>

                  <h3
                    className="text-3xl font-bold mb-3"
                    style={{
                      fontFamily: theme.fonts.heading,
                      color: theme.colors.primary.dark
                    }}
                  >
                    {type.title}
                  </h3>

                  <p
                    className="text-lg mb-6"
                    style={{ color: theme.colors.neutral.darkGrey }}
                  >
                    {type.description}
                  </p>

                  <ul className="space-y-3">
                    {type.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckIcon
                          className="h-6 w-6 flex-shrink-0 mt-0.5"
                          style={{ color: theme.colors.success }}
                        />
                        <span
                          className="text-base"
                          style={{ color: theme.colors.primary.dark }}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vehicles Section */}
      <section
        className="py-20 relative"
        style={{ backgroundColor: theme.colors.primary.dark }}
      >
        {/* Pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `repeating-linear-gradient(
                45deg,
                transparent,
                transparent 30px,
                ${theme.colors.accent.orange} 30px,
                ${theme.colors.accent.orange} 32px
              )`
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2
              className="text-5xl sm:text-6xl font-bold mb-4"
              style={{
                fontFamily: theme.fonts.heading,
                color: theme.colors.neutral.offWhite
              }}
            >
              НАШ АВТОПАРК
            </h2>
            <p
              className="text-xl"
              style={{ color: theme.colors.neutral.lightGrey }}
            >
              Избери подходящия товарен автомобил за теб
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {vehicles.map((vehicle, index) => (
              <motion.div
                key={vehicle.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ scale: 1.05 }}
                className="p-8 rounded-xl text-center relative overflow-hidden group"
                style={{
                  backgroundColor: theme.colors.primary.main,
                  border: `2px solid ${theme.colors.accent.orange}`
                }}
              >
                {/* Gradient overlay on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: theme.gradients.accent }}
                />

                <div className="relative z-10">
                  <TruckIcon
                    className="h-20 w-20 mx-auto mb-6"
                    style={{ color: theme.colors.accent.orange }}
                  />

                  <h3
                    className="text-3xl font-bold mb-4"
                    style={{
                      fontFamily: theme.fonts.heading,
                      color: theme.colors.neutral.offWhite
                    }}
                  >
                    {vehicle.name}
                  </h3>

                  <div className="space-y-3 mb-6">
                    <div
                      className="py-2 px-4 rounded-lg"
                      style={{ backgroundColor: theme.colors.primary.dark }}
                    >
                      <p
                        className="text-sm font-semibold"
                        style={{ color: theme.colors.neutral.lightGrey }}
                      >
                        Товароносимост
                      </p>
                      <p
                        className="text-lg font-bold"
                        style={{ color: theme.colors.accent.bright }}
                      >
                        {vehicle.capacity}
                      </p>
                    </div>

                    <div
                      className="py-2 px-4 rounded-lg"
                      style={{ backgroundColor: theme.colors.primary.dark }}
                    >
                      <p
                        className="text-sm font-semibold"
                        style={{ color: theme.colors.neutral.lightGrey }}
                      >
                        Размери
                      </p>
                      <p
                        className="text-lg font-bold"
                        style={{ color: theme.colors.accent.bright }}
                      >
                        {vehicle.dimensions}
                      </p>
                    </div>
                  </div>

                  <p
                    className="text-base"
                    style={{ color: theme.colors.neutral.lightGrey }}
                  >
                    <span className="font-semibold">Идеален за:</span> {vehicle.ideal}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section
        className="py-20"
        style={{ backgroundColor: theme.colors.neutral.offWhite }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl sm:text-6xl font-bold text-center mb-16"
            style={{
              fontFamily: theme.fonts.heading,
              color: theme.colors.primary.dark
            }}
          >
            НАШИТЕ ПРЕДИМСТВА
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <motion.div
                  className="inline-flex items-center justify-center w-24 h-24 rounded-full mb-6"
                  style={{
                    backgroundColor: theme.colors.accent.orange,
                    color: theme.colors.neutral.offWhite
                  }}
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {advantage.icon}
                </motion.div>

                <h3
                  className="text-2xl font-bold mb-3"
                  style={{
                    fontFamily: theme.fonts.heading,
                    color: theme.colors.primary.dark
                  }}
                >
                  {advantage.title}
                </h3>

                <p
                  className="text-base"
                  style={{ color: theme.colors.neutral.darkGrey }}
                >
                  {advantage.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-20 relative overflow-hidden"
        style={{ background: theme.gradients.hero }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-5xl sm:text-6xl font-bold mb-6"
              style={{
                fontFamily: theme.fonts.heading,
                color: theme.colors.neutral.offWhite
              }}
            >
              НУЖЕН ВИ Е ТРАНСПОРТ?
            </h2>
            <p
              className="text-xl mb-8"
              style={{ color: theme.colors.neutral.lightGrey }}
            >
              Свържете се с нас за безплатна оферта и консултация
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-lg text-2xl font-bold transition-all duration-300 transform hover:scale-105"
                style={{
                  background: theme.gradients.accent,
                  color: theme.colors.neutral.offWhite,
                  fontFamily: theme.fonts.heading,
                  boxShadow: `0 10px 40px rgba(255, 107, 53, 0.5)`
                }}
              >
                <PhoneIcon className="h-7 w-7" />
                ОБАДЕТЕ СЕ
              </a>

              <a
                href={`mailto:${EMAIL_ADDRESS}`}
                className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-lg text-2xl font-bold transition-all duration-300"
                style={{
                  backgroundColor: theme.colors.primary.light,
                  color: theme.colors.neutral.offWhite,
                  fontFamily: theme.fonts.heading,
                  border: `2px solid ${theme.colors.accent.orange}`
                }}
              >
                ИЗПРАТЕТЕ EMAIL
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TransportServicesPage;
