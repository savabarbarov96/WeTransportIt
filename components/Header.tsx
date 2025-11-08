import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_LINKS, PHONE_NUMBER, PHONE_NUMBER_RAW } from '../constants';
import { Bars3Icon, XMarkIcon, PhoneIcon } from './IconComponents';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        setIsOpen(false);

        const targetId = href.replace('#', '');
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const headerOffset = 80;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled
                    ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100'
                    : 'bg-gradient-to-b from-black/50 to-transparent backdrop-blur-sm'
            }`}
        >
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <motion.div
                        className="flex-shrink-0"
                        whileHover={{ scale: 1.05 }}
                    >
                        <a
                            href="#home"
                            onClick={(e) => handleNavClick(e, '#home')}
                            className={`text-xl sm:text-2xl font-black tracking-tight transition-colors ${
                                isScrolled || isOpen ? 'text-gray-900' : 'text-white'
                            }`}
                            style={{ fontFamily: 'Montserrat, sans-serif' }}
                        >
                            WE TRANSPORT IT
                        </a>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-1">
                        {NAV_LINKS.map((link, index) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href)}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`font-semibold px-4 py-2 rounded-lg text-sm transition-all duration-200 ${
                                    isScrolled
                                        ? 'text-gray-700 hover:bg-orange-50 hover:text-orange-600'
                                        : 'text-white hover:bg-white/10'
                                }`}
                            >
                                {link.name}
                            </motion.a>
                        ))}
                    </div>

                    {/* Desktop CTA Button */}
                    <div className="hidden md:block">
                        <motion.a
                            href={`tel:${PHONE_NUMBER_RAW}`}
                            whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(249, 115, 22, 0.3)' }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center px-5 py-2.5 border-2 border-transparent text-sm font-bold rounded-xl text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg"
                        >
                            <PhoneIcon className="h-5 w-5 mr-2" />
                            Обади се сега
                        </motion.a>
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex md:hidden">
                        <motion.button
                            whileTap={{ scale: 0.95 }}
                            onClick={toggleMenu}
                            type="button"
                            className={`inline-flex items-center justify-center p-2.5 rounded-xl focus:outline-none transition-all duration-200 ${
                                isScrolled
                                    ? 'text-gray-700 bg-gray-100 hover:bg-gray-200'
                                    : 'text-white bg-white/20 hover:bg-white/30'
                            }`}
                            aria-controls="mobile-menu"
                            aria-expanded={isOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            <AnimatePresence mode="wait">
                                {isOpen ? (
                                    <motion.div
                                        key="close"
                                        initial={{ rotate: -90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: 90, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <XMarkIcon className="block h-6 w-6" />
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="menu"
                                        initial={{ rotate: 90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: -90, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <Bars3Icon className="block h-6 w-6" />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.button>
                    </div>
                </div>
            </nav>

            {/* Mobile menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 shadow-lg overflow-hidden"
                        id="mobile-menu"
                    >
                        <motion.div
                            className="px-4 pt-4 pb-3 space-y-2"
                            initial="closed"
                            animate="open"
                            variants={{
                                open: {
                                    transition: { staggerChildren: 0.07 }
                                },
                                closed: {
                                    transition: { staggerChildren: 0.05, staggerDirection: -1 }
                                }
                            }}
                        >
                            {NAV_LINKS.map((link) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => handleNavClick(e, link.href)}
                                    variants={{
                                        open: {
                                            y: 0,
                                            opacity: 1,
                                            transition: {
                                                y: { stiffness: 1000, velocity: -100 }
                                            }
                                        },
                                        closed: {
                                            y: 20,
                                            opacity: 0,
                                            transition: {
                                                y: { stiffness: 1000 }
                                            }
                                        }
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                    className="text-gray-700 hover:bg-orange-50 hover:text-orange-600 block px-4 py-3 rounded-xl text-base font-semibold transition-all duration-200"
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                        </motion.div>

                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="pt-4 pb-4 border-t border-gray-200 px-4"
                        >
                            <motion.a
                                href={`tel:${PHONE_NUMBER_RAW}`}
                                whileTap={{ scale: 0.95 }}
                                className="w-full flex items-center justify-center px-5 py-3 border-2 border-transparent rounded-xl shadow-lg text-base font-bold text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 transition-all duration-300"
                            >
                                <PhoneIcon className="h-5 w-5 mr-2" />
                                Обади се: {PHONE_NUMBER}
                            </motion.a>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
};

export default Header;
