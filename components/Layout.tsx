import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { theme } from '../theme';
import {
  PhoneIcon,
  Bars3Icon,
  XMarkIcon
} from './IconComponents';
import {
  PHONE_NUMBER,
  EMAIL_ADDRESS,
  FACEBOOK_URL,
  TIKTOK_URL,
  WHATSAPP_URL,
  VIBER_URL,
  PHONE_NUMBER_RAW
} from '../constants';
import FloatingButtons from './FloatingButtons';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const navigation = [
    { name: 'Начало', path: '/' },
    { name: 'Хамали Стара Загора', path: '/hamalski-uslugi-stara-zagora' },
    { name: 'Транспорт', path: '/transportni-uslugi' },
  ];

  return (
    <div style={{ fontFamily: theme.fonts.body, backgroundColor: theme.colors.neutral.offWhite }}>
      {/* Header */}
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: scrolled
            ? `${theme.colors.primary.dark}ee`
            : 'transparent',
          backdropFilter: scrolled ? 'blur(10px)' : 'none',
          boxShadow: scrolled ? `0 4px 20px rgba(0,0,0,0.3)` : 'none'
        }}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <motion.span
                className="text-2xl sm:text-3xl font-bold tracking-tight"
                style={{
                  fontFamily: theme.fonts.heading,
                  color: theme.colors.accent.orange,
                  textShadow: '0 2px 10px rgba(255, 107, 53, 0.3)'
                }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                WETRANSPORTIT
              </motion.span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navigation.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-base font-semibold transition-all duration-200 relative group"
                  style={{
                    color: location.pathname === item.path
                      ? theme.colors.accent.orange
                      : theme.colors.neutral.offWhite
                  }}
                >
                  {item.name}
                  <span
                    className="absolute bottom-0 left-0 w-full h-0.5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"
                    style={{ backgroundColor: theme.colors.accent.orange }}
                  />
                </Link>
              ))}

              {/* Phone CTA */}
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold transition-all duration-300 transform hover:scale-105"
                style={{
                  background: theme.gradients.accent,
                  color: theme.colors.neutral.offWhite,
                  boxShadow: `0 4px 15px rgba(255, 107, 53, 0.4)`
                }}
              >
                <PhoneIcon className="h-5 w-5" />
                <span className="hidden lg:inline">{PHONE_NUMBER}</span>
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg transition-colors"
              style={{
                color: theme.colors.neutral.offWhite,
                backgroundColor: mobileMenuOpen
                  ? theme.colors.accent.orange
                  : 'transparent'
              }}
            >
              {mobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
              style={{
                backgroundColor: theme.colors.primary.dark,
                borderTop: `1px solid ${theme.colors.accent.orange}`
              }}
            >
              <div className="px-4 py-6 space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="block px-4 py-3 rounded-lg font-semibold transition-colors"
                    style={{
                      color: location.pathname === item.path
                        ? theme.colors.neutral.offWhite
                        : theme.colors.neutral.lightGrey,
                      backgroundColor: location.pathname === item.path
                        ? theme.colors.accent.orange
                        : 'transparent'
                    }}
                  >
                    {item.name}
                  </Link>
                ))}
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="block px-4 py-3 rounded-lg font-bold text-center"
                  style={{
                    background: theme.gradients.accent,
                    color: theme.colors.neutral.offWhite
                  }}
                >
                  <PhoneIcon className="h-5 w-5 inline-block mr-2" />
                  {PHONE_NUMBER}
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Main Content */}
      <main className="pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer
        className="py-12"
        style={{
          backgroundColor: theme.colors.primary.dark,
          borderTop: `2px solid ${theme.colors.accent.orange}`
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Company Info */}
            <div>
              <h3
                className="text-2xl font-bold mb-4"
                style={{
                  fontFamily: theme.fonts.heading,
                  color: theme.colors.accent.orange
                }}
              >
                WETRANSPORTIT
              </h3>
              <p
                className="text-base mb-4"
                style={{ color: theme.colors.neutral.lightGrey }}
              >
                Професионални хамалски и транспортни услуги в цяла България
              </p>
              <p
                className="text-sm"
                style={{ color: theme.colors.neutral.medGrey }}
              >
                Базирани в Стара Загора
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4
                className="text-lg font-bold mb-4"
                style={{
                  fontFamily: theme.fonts.heading,
                  color: theme.colors.neutral.offWhite
                }}
              >
                БЪРЗИ ВРЪЗКИ
              </h4>
              <ul className="space-y-2">
                {navigation.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className="transition-colors"
                      style={{
                        color: theme.colors.neutral.lightGrey
                      }}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4
                className="text-lg font-bold mb-4"
                style={{
                  fontFamily: theme.fonts.heading,
                  color: theme.colors.neutral.offWhite
                }}
              >
                КОНТАКТИ
              </h4>
              <div className="space-y-3">
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="block transition-colors"
                  style={{ color: theme.colors.accent.bright }}
                >
                  📞 {PHONE_NUMBER}
                </a>
                <a
                  href={`mailto:${EMAIL_ADDRESS}`}
                  className="block transition-colors"
                  style={{ color: theme.colors.neutral.lightGrey }}
                >
                  ✉️ {EMAIL_ADDRESS}
                </a>
                <div className="flex gap-4 mt-4">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                    style={{ backgroundColor: theme.colors.success }}
                  >
                    <span className="text-white font-bold">W</span>
                  </a>
                  <a
                    href={VIBER_URL}
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                    style={{ backgroundColor: '#7360f2' }}
                  >
                    <span className="text-white font-bold">V</span>
                  </a>
                  <a
                    href={FACEBOOK_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                    style={{ backgroundColor: '#1877f2' }}
                  >
                    <span className="text-white font-bold">f</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            className="pt-8 border-t text-center"
            style={{ borderColor: theme.colors.primary.main }}
          >
            <p
              className="text-sm"
              style={{ color: theme.colors.neutral.medGrey }}
            >
              © {new Date().getFullYear()} WeTransportIt. Всички права запазени.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Action Buttons */}
      <FloatingButtons />
    </div>
  );
};

export default Layout;
