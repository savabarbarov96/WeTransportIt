import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { PHONE_NUMBER, PHONE_NUMBER_RAW } from '../constants';
import { PhoneIcon } from './IconComponents';
import Footer from './Footer';
import FloatingButtons from './FloatingButtons';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Начало', path: '/' },
    { name: 'Хамалски услуги СЗ', path: '/hamalski-uslugi-stara-zagora' },
    { name: 'Транспортни услуги', path: '/transportni-uslugi' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <div className="text-2xl sm:text-3xl font-extrabold">
                <span className="text-blue-800">We</span>
                <span className="text-orange-500">Transport</span>
                <span className="text-blue-800">It</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-base font-semibold transition-colors ${
                    isActive(link.path)
                      ? 'text-orange-500 border-b-2 border-orange-500'
                      : 'text-gray-700 hover:text-orange-500'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href={`tel:${PHONE_NUMBER_RAW}`}
                className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500 text-white font-bold rounded-md hover:bg-orange-600 transition-colors"
              >
                <PhoneIcon className="h-5 w-5" />
                <span className="hidden lg:inline">{PHONE_NUMBER}</span>
                <span className="lg:hidden">Обади се</span>
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <nav className="flex flex-col space-y-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-2 text-base font-semibold rounded-md transition-colors ${
                      isActive(link.path)
                        ? 'text-orange-500 bg-orange-50'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <a
                  href={`tel:${PHONE_NUMBER_RAW}`}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-orange-500 text-white font-bold rounded-md hover:bg-orange-600 transition-colors"
                >
                  <PhoneIcon className="h-5 w-5" />
                  {PHONE_NUMBER}
                </a>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1">
        {children}
      </div>

      {/* Footer */}
      <Footer />

      {/* Floating Buttons */}
      <FloatingButtons />
    </div>
  );
};

export default Layout;
