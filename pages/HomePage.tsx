import React from 'react';
import { motion } from 'framer-motion';
import { theme } from '../theme';
import {
  TruckIcon,
  UsersIcon,
  BuildingOfficeIcon,
  MapPinIcon,
  PhoneIcon,
  CheckIcon,
  ClockIcon,
  ShieldCheckIcon,
  DocumentTextIcon,
  CalendarDaysIcon
} from '../components/IconComponents';
import { PHONE_NUMBER, EMAIL_ADDRESS, WHATSAPP_URL } from '../constants';

const HomePage: React.FC = () => {
  const cities = [
    'София', 'Пловдив', 'Варна', 'Бургас', 'Русе',
    'Стара Загора', 'Плевен', 'Сливен', 'Добрич', 'Шумен',
    'Перник', 'Хасково', 'Ямбол', 'Пазарджик', 'Благоевград'
  ];

  const services = [
    {
      icon: <UsersIcon className="h-16 w-16" />,
      title: 'Хамалски услуги',
      description: 'Професионално товарене, разтоварване и пренасяне на мебели и вещи във всички градове в България',
      features: [
        'Товарене и разтоварване',
        'Пренасяне на тежки мебели',
        'Монтаж и демонтаж',
        'Опаковане на вещи'
      ]
    },
    {
      icon: <TruckIcon className="h-16 w-16" />,
      title: 'Транспортни услуги',
      description: 'Превоз на мебели, битова техника и товари между всички градове в България',
      features: [
        'Вътрешноградски превози',
        'Междуградски превози',
        'Транспорт на битова техника',
        'Товарни автомобили различен размер'
      ]
    },
    {
      icon: <BuildingOfficeIcon className="h-16 w-16" />,
      title: 'Офис преместване',
      description: 'Комплексно преместване на офиси с минимални прекъсвания в работата',
      features: [
        'Планиране и организация',
        'Опаковане на офис оборудване',
        'Работим и през уикенда',
        'Застраховка'
      ]
    }
  ];

  const advantages = [
    {
      icon: <ClockIcon className="h-12 w-12" />,
      title: 'БЪРЗО',
      text: 'Светкавично изпълнение на услугите във всички градове'
    },
    {
      icon: <CheckIcon className="h-12 w-12" />,
      title: 'КАЧЕСТВЕНО',
      text: 'Професионална работа с гаранция за качество'
    },
    {
      icon: <ShieldCheckIcon className="h-12 w-12" />,
      title: 'ЗАСТРАХОВКА',
      text: 'Всички товари са застраховани при транспорт'
    }
  ];

  const processSteps = [
    {
      icon: <PhoneIcon className="h-10 w-10" />,
      number: 1,
      title: 'ОБАДЕТЕ СЕ',
      description: 'Свържете се с нас по телефон или WhatsApp и опишете нуждите си'
    },
    {
      icon: <DocumentTextIcon className="h-10 w-10" />,
      number: 2,
      title: 'ПОЛУЧЕТЕ ОФЕРТА',
      description: 'Ще получите безплатна оферта за до 5 минути'
    },
    {
      icon: <CalendarDaysIcon className="h-10 w-10" />,
      number: 3,
      title: 'УГОВОРЕТЕ ДЕН',
      description: 'Избираме удобна дата и час за изпълнение'
    },
    {
      icon: <CheckIcon className="h-10 w-10" />,
      number: 4,
      title: 'ГОТОВО',
      description: 'Нашият екип извършва преместването професионално'
    }
  ];

  return (
    <div style={{ fontFamily: theme.fonts.body }}>
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ background: theme.gradients.hero }}
      >
        {/* Animated geometric background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full"
            style={{
              backgroundImage: `repeating-linear-gradient(
                45deg,
                transparent,
                transparent 35px,
                ${theme.colors.accent.orange} 35px,
                ${theme.colors.accent.orange} 36px
              )`
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <motion.h1
              className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
              style={{
                fontFamily: theme.fonts.heading,
                color: theme.colors.neutral.offWhite,
                textShadow: `0 4px 20px rgba(0,0,0,0.3)`
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              WETRANSPORTIT
            </motion.h1>

            <motion.div
              className="inline-block mb-8 px-6 py-3 rounded-lg"
              style={{
                background: theme.gradients.accent,
                boxShadow: `0 10px 40px rgba(255, 107, 53, 0.3)`
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p
                className="text-2xl sm:text-3xl font-bold"
                style={{
                  fontFamily: theme.fonts.heading,
                  color: theme.colors.neutral.offWhite,
                  letterSpacing: '2px'
                }}
              >
                ОБСЛУЖВАМЕ ЦЯЛА БЪЛГАРИЯ
              </p>
            </motion.div>

            <motion.p
              className="text-xl sm:text-2xl mb-4"
              style={{ color: theme.colors.neutral.lightGrey }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Професионални хамалски и транспортни услуги
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="flex items-center gap-2" style={{ color: theme.colors.accent.bright }}>
                <MapPinIcon className="h-6 w-6" />
                <span className="text-lg font-semibold">Базирани в Стара Загора</span>
              </div>
              <div className="hidden sm:block w-1 h-6 rounded-full"
                style={{ backgroundColor: theme.colors.accent.orange }}
              />
              <div className="flex items-center gap-2" style={{ color: theme.colors.success }}>
                <CheckIcon className="h-6 w-6" />
                <span className="text-lg font-semibold">Безплатен оглед в района на Стара Загора</span>
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-lg text-xl font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                style={{
                  background: theme.gradients.accent,
                  color: theme.colors.neutral.offWhite,
                  boxShadow: `0 10px 30px rgba(255, 107, 53, 0.4)`
                }}
              >
                <PhoneIcon className="h-6 w-6" />
                <span style={{ fontFamily: theme.fonts.accent }}>{PHONE_NUMBER}</span>
              </a>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-lg text-xl font-bold transition-all duration-300 transform hover:scale-105"
                style={{
                  backgroundColor: theme.colors.success,
                  color: theme.colors.primary.dark,
                  boxShadow: `0 10px 30px rgba(6, 214, 160, 0.3)`
                }}
              >
                <span style={{ fontFamily: theme.fonts.accent }}>WHATSAPP</span>
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

      {/* Process Section */}
      <section
        className="py-20 relative"
        style={{ backgroundColor: theme.colors.primary.dark }}
      >
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `repeating-linear-gradient(
                0deg,
                transparent,
                transparent 50px,
                ${theme.colors.accent.orange} 50px,
                ${theme.colors.accent.orange} 51px
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
              КАК РАБОТИМ?
            </h2>
            <p
              className="text-xl"
              style={{ color: theme.colors.neutral.lightGrey }}
            >
              Лесно и бързо - само 4 стъпки до вашето преместване
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -10 }}
                className="relative text-center"
              >
                {/* Step number badge */}
                <div
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full flex items-center justify-center font-bold text-2xl z-10"
                  style={{
                    background: theme.gradients.accent,
                    color: theme.colors.neutral.offWhite,
                    boxShadow: `0 4px 20px rgba(255, 107, 53, 0.4)`
                  }}
                >
                  {step.number}
                </div>

                {/* Icon circle */}
                <div
                  className="inline-flex items-center justify-center w-24 h-24 rounded-full mb-6 mt-8"
                  style={{
                    backgroundColor: theme.colors.primary.main,
                    border: `3px solid ${theme.colors.accent.orange}`,
                    color: theme.colors.accent.bright
                  }}
                >
                  {step.icon}
                </div>

                {/* Content */}
                <h3
                  className="text-2xl font-bold mb-3"
                  style={{
                    fontFamily: theme.fonts.heading,
                    color: theme.colors.neutral.offWhite
                  }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-base"
                  style={{ color: theme.colors.neutral.lightGrey }}
                >
                  {step.description}
                </p>

                {/* Connecting arrow (except for last item) */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/3 -right-4 transform translate-x-full">
                    <svg
                      className="w-8 h-8"
                      style={{ color: theme.colors.accent.orange }}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-center mt-16"
          >
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="inline-flex items-center gap-3 px-10 py-5 rounded-lg text-2xl font-bold transition-all duration-300 transform hover:scale-105"
              style={{
                background: theme.gradients.accent,
                color: theme.colors.neutral.offWhite,
                fontFamily: theme.fonts.heading,
                boxShadow: `0 10px 40px rgba(255, 107, 53, 0.5)`
              }}
            >
              <PhoneIcon className="h-7 w-7" />
              ЗАПОЧНЕТЕ СЕГА
            </a>
          </motion.div>
        </div>
      </section>

      {/* Cities Coverage Section */}
      <section className="py-20" style={{ backgroundColor: theme.colors.neutral.offWhite }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2
              className="text-5xl sm:text-6xl font-bold mb-4"
              style={{
                fontFamily: theme.fonts.heading,
                color: theme.colors.primary.dark
              }}
            >
              ОБСЛУЖВАМЕ ВСИЧКИ ГРАДОВЕ
            </h2>
            <p className="text-xl" style={{ color: theme.colors.neutral.darkGrey }}>
              София, Пловдив, Варна, Бургас и всички останали градове в България
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.05
                }
              }
            }}
          >
            {cities.map((city, index) => (
              <motion.div
                key={city}
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1 }
                }}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: theme.colors.accent.orange,
                  color: theme.colors.neutral.offWhite
                }}
                className="p-4 rounded-lg text-center font-semibold transition-all cursor-default"
                style={{
                  backgroundColor: theme.colors.neutral.offWhite,
                  border: `2px solid ${theme.colors.neutral.medGrey}`,
                  color: theme.colors.primary.dark
                }}
              >
                {city}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section
        className="py-20 relative overflow-hidden"
        style={{ backgroundColor: theme.colors.primary.dark }}
      >
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0"
            style={{
              backgroundImage: `repeating-linear-gradient(
                90deg,
                transparent,
                transparent 50px,
                ${theme.colors.accent.orange} 50px,
                ${theme.colors.accent.orange} 51px
              )`
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            НАШИТЕ УСЛУГИ
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="p-8 rounded-xl relative overflow-hidden group"
                style={{
                  backgroundColor: theme.colors.primary.main,
                  border: `2px solid ${theme.colors.neutral.darkGrey}`
                }}
              >
                {/* Hover effect */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: theme.gradients.accent }}
                />

                <div className="relative z-10">
                  <div
                    className="mb-6 inline-block p-4 rounded-lg"
                    style={{
                      backgroundColor: theme.colors.accent.orange,
                      color: theme.colors.neutral.offWhite
                    }}
                  >
                    {service.icon}
                  </div>

                  <h3
                    className="text-3xl font-bold mb-4"
                    style={{
                      fontFamily: theme.fonts.heading,
                      color: theme.colors.neutral.offWhite
                    }}
                  >
                    {service.title}
                  </h3>

                  <p className="text-lg mb-6" style={{ color: theme.colors.neutral.lightGrey }}>
                    {service.description}
                  </p>

                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckIcon
                          className="h-6 w-6 flex-shrink-0 mt-0.5"
                          style={{ color: theme.colors.success }}
                        />
                        <span style={{ color: theme.colors.neutral.offWhite }}>
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

      {/* Advantages Section */}
      <section className="py-20" style={{ backgroundColor: theme.colors.neutral.offWhite }}>
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
            ЗАЩО НАС?
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="text-center p-8"
              >
                <div
                  className="inline-flex items-center justify-center w-24 h-24 rounded-full mb-6"
                  style={{
                    backgroundColor: theme.colors.accent.orange,
                    color: theme.colors.neutral.offWhite
                  }}
                >
                  {advantage.icon}
                </div>
                <h3
                  className="text-3xl font-bold mb-4"
                  style={{
                    fontFamily: theme.fonts.heading,
                    color: theme.colors.primary.dark
                  }}
                >
                  {advantage.title}
                </h3>
                <p className="text-lg" style={{ color: theme.colors.neutral.darkGrey }}>
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
              ГОТОВИ СМЕ ДА ВИ ПОМОГНЕМ
            </h2>
            <p className="text-xl mb-8" style={{ color: theme.colors.neutral.lightGrey }}>
              Свържете се с нас за безплатна консултация и оферта
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-lg text-xl font-bold transition-all duration-300 transform hover:scale-105"
                style={{
                  background: theme.gradients.accent,
                  color: theme.colors.neutral.offWhite,
                  boxShadow: `0 10px 30px rgba(255, 107, 53, 0.4)`
                }}
              >
                <PhoneIcon className="h-6 w-6" />
                <span style={{ fontFamily: theme.fonts.accent }}>ОБАДЕТЕ СЕ СЕГА</span>
              </a>

              <a
                href={`mailto:${EMAIL_ADDRESS}`}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-lg text-xl font-bold transition-all duration-300"
                style={{
                  backgroundColor: theme.colors.primary.light,
                  color: theme.colors.neutral.offWhite,
                  border: `2px solid ${theme.colors.accent.orange}`
                }}
              >
                <span style={{ fontFamily: theme.fonts.accent }}>ИЗПРАТЕТЕ EMAIL</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
