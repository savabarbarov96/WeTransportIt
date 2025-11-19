import React from 'react';
import { motion } from 'framer-motion';
import { theme } from '../theme';
import {
  UsersIcon,
  CheckIcon,
  MapPinIcon,
  PhoneIcon,
  ClockIcon,
  TruckIcon,
  WrenchScrewdriverIcon,
  ArchiveBoxIcon
} from '../components/IconComponents';
import { PHONE_NUMBER, EMAIL_ADDRESS, WHATSAPP_URL } from '../constants';

const StaraZagoraMovingPage: React.FC = () => {
  const localAreas = [
    'Стара Загора - Център',
    'Стара Загора - Три Чучура',
    'Стара Загора - Самара',
    'Стара Загора - Железник',
    'Стара Загора - Казански',
    'Казанлък',
    'Чирпан',
    'Раднево',
    'Гълъбово',
    'Николаево',
    'Павел баня',
    'Братя Даскалови',
    'Мъглиж'
  ];

  const movingServices = [
    {
      icon: <UsersIcon className="h-14 w-14" />,
      title: 'Жилищно преместване',
      description: 'Пълно преместване на апартаменти и къщи в Стара Загора и региона',
      details: [
        'Еднофамилни домове',
        'Апартаменти - всички етажи',
        'Студентски жилища',
        'Вили и ваканционни имоти'
      ]
    },
    {
      icon: <TruckIcon className="h-14 w-14" />,
      title: 'Товарене и разтоварване',
      description: 'Професионално товарене на мебели и всякакви вещи',
      details: [
        'Тежки мебели и обзавеждане',
        'Битова техника',
        'Кашони и багаж',
        'Строителни материали'
      ]
    },
    {
      icon: <WrenchScrewdriverIcon className="h-14 w-14" />,
      title: 'Монтаж и демонтаж',
      description: 'Разглобяване и сглобяване на мебели при преместване',
      details: [
        'Гардероби и скринове',
        'Легла и спални',
        'Кухненски шкафове',
        'Офис мебели'
      ]
    },
    {
      icon: <ArchiveBoxIcon className="h-14 w-14" />,
      title: 'Опаковане',
      description: 'Сигурно опаковане на всички ваши вещи',
      details: [
        'Чупливи предмети',
        'Картини и огледала',
        'Електроника',
        'Дрехи и текстил'
      ]
    }
  ];

  const whyChooseUs = [
    {
      title: 'Познаваме региона',
      description: 'Работим в Стара Загора и областта - знаем всички улици, квартали и достъпи'
    },
    {
      title: 'Безплатен оглед',
      description: 'За района на Стара Загора правим безплатен оглед на място за точна оценка'
    },
    {
      title: 'Бързо реагиране',
      description: 'Можем да дойдем същия ден или следващия ден при спешност'
    },
    {
      title: 'Местна фирма',
      description: 'Базирани сме в Стара Загора - винаги сме наблизо и достъпни'
    }
  ];

  return (
    <div style={{ fontFamily: theme.fonts.body }}>
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ background: theme.gradients.hero }}
      >
        {/* Diagonal stripe pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `repeating-linear-gradient(
                -45deg,
                transparent,
                transparent 40px,
                ${theme.colors.accent.orange} 40px,
                ${theme.colors.accent.orange} 42px
              )`
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
              className="flex items-center justify-center gap-3 mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <MapPinIcon
                className="h-12 w-12"
                style={{ color: theme.colors.accent.orange }}
              />
              <span
                className="text-3xl font-bold"
                style={{
                  fontFamily: theme.fonts.heading,
                  color: theme.colors.accent.bright,
                  letterSpacing: '2px'
                }}
              >
                СТАРА ЗАГОРА
              </span>
            </motion.div>

            <h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6"
              style={{
                fontFamily: theme.fonts.heading,
                color: theme.colors.neutral.offWhite,
                lineHeight: 1.2
              }}
            >
              ХАМАЛСКИ УСЛУГИ<br />И ПРЕМЕСТВАНЕ
            </h1>

            <p
              className="text-2xl sm:text-3xl mb-8"
              style={{
                color: theme.colors.neutral.lightGrey,
                fontFamily: theme.fonts.accent
              }}
            >
              в Стара Загора и региона
            </p>

            <motion.div
              className="inline-block px-6 py-3 rounded-lg mb-12"
              style={{
                backgroundColor: theme.colors.success,
                boxShadow: `0 8px 30px rgba(6, 214, 160, 0.3)`
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="flex items-center gap-3">
                <CheckIcon
                  className="h-7 w-7"
                  style={{ color: theme.colors.primary.dark }}
                />
                <span
                  className="text-xl font-bold"
                  style={{
                    fontFamily: theme.fonts.heading,
                    color: theme.colors.primary.dark,
                    letterSpacing: '1px'
                  }}
                >
                  БЕЗПЛАТЕН ОГЛЕД В СТАРА ЗАГОРА
                </span>
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="inline-flex items-center justify-center gap-3 px-8 py-5 rounded-lg text-2xl font-bold transition-all duration-300 transform hover:scale-105"
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
                className="inline-flex items-center justify-center gap-3 px-8 py-5 rounded-lg text-2xl font-bold transition-all duration-300 transform hover:scale-105"
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
      </section>

      {/* Local Coverage Section */}
      <section
        className="py-20"
        style={{ backgroundColor: theme.colors.neutral.offWhite }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2
              className="text-5xl sm:text-6xl font-bold mb-4"
              style={{
                fontFamily: theme.fonts.heading,
                color: theme.colors.primary.dark
              }}
            >
              ПОКРИТИЕ НА РЕГИОНА
            </h2>
            <p
              className="text-xl"
              style={{ color: theme.colors.neutral.darkGrey }}
            >
              Обслужваме всички квартали и градове в Старозагорска област
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: {
                transition: { staggerChildren: 0.05 }
              }
            }}
          >
            {localAreas.map((area) => (
              <motion.div
                key={area}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: theme.colors.accent.orange,
                  color: theme.colors.neutral.offWhite
                }}
                className="p-4 rounded-lg text-center font-semibold transition-all"
                style={{
                  backgroundColor: 'white',
                  border: `2px solid ${theme.colors.accent.orange}`,
                  color: theme.colors.primary.dark
                }}
              >
                {area}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section
        className="py-20 relative"
        style={{ backgroundColor: theme.colors.primary.dark }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl sm:text-6xl font-bold text-center mb-16"
            style={{
              fontFamily: theme.fonts.heading,
              color: theme.colors.neutral.offWhite
            }}
          >
            ХАМАЛСКИ УСЛУГИ
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {movingServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="p-8 rounded-xl relative group"
                style={{
                  backgroundColor: theme.colors.primary.main,
                  border: `2px solid ${theme.colors.accent.orange}`
                }}
              >
                <div
                  className="absolute top-0 left-0 w-2 h-full rounded-l-xl transition-all duration-300"
                  style={{
                    backgroundColor: theme.colors.accent.orange,
                    width: '4px'
                  }}
                />

                <div className="flex items-start gap-6">
                  <div
                    className="flex-shrink-0 p-4 rounded-lg"
                    style={{
                      backgroundColor: theme.colors.accent.orange,
                      color: theme.colors.neutral.offWhite
                    }}
                  >
                    {service.icon}
                  </div>

                  <div className="flex-1">
                    <h3
                      className="text-2xl font-bold mb-2"
                      style={{
                        fontFamily: theme.fonts.heading,
                        color: theme.colors.neutral.offWhite
                      }}
                    >
                      {service.title}
                    </h3>
                    <p
                      className="text-lg mb-4"
                      style={{ color: theme.colors.neutral.lightGrey }}
                    >
                      {service.description}
                    </p>

                    <ul className="space-y-2">
                      {service.details.map((detail, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <div
                            className="w-2 h-2 rounded-full"
                            style={{ backgroundColor: theme.colors.success }}
                          />
                          <span style={{ color: theme.colors.neutral.offWhite }}>
                            {detail}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
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
            ЗАЩО ДА НИ ИЗБЕРЕТЕ?
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-6 p-6 rounded-xl"
                style={{
                  backgroundColor: 'white',
                  border: `2px solid ${theme.colors.neutral.medGrey}`
                }}
              >
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold"
                  style={{
                    backgroundColor: theme.colors.accent.orange,
                    color: theme.colors.neutral.offWhite,
                    fontFamily: theme.fonts.heading
                  }}
                >
                  {index + 1}
                </div>
                <div>
                  <h3
                    className="text-2xl font-bold mb-2"
                    style={{
                      fontFamily: theme.fonts.heading,
                      color: theme.colors.primary.dark
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-lg"
                    style={{ color: theme.colors.neutral.darkGrey }}
                  >
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-20"
        style={{ background: theme.gradients.hero }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-4xl sm:text-5xl font-bold mb-6"
              style={{
                fontFamily: theme.fonts.heading,
                color: theme.colors.neutral.offWhite
              }}
            >
              НУЖДАЕТЕ СЕ ОТ ХАМАЛИ В СТАРА ЗАГОРА?
            </h2>
            <p
              className="text-xl mb-8"
              style={{ color: theme.colors.neutral.lightGrey }}
            >
              Обадете се сега за безплатна оценка и консултация
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
                {PHONE_NUMBER}
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default StaraZagoraMovingPage;
