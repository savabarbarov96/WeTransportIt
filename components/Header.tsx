import React, { useState, useEffect } from 'react';
import { NAV_LINKS, PHONE_NUMBER, PHONE_NUMBER_RAW } from '../constants';
import { Bars3Icon, XMarkIcon, PhoneIcon } from './IconComponents';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0">
                        <a href="#home" className={`text-2xl font-bold ${isScrolled || isOpen ? 'text-gray-900' : 'text-white'}`}>
                            We Transport It
                        </a>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {NAV_LINKS.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className={`font-medium px-3 py-2 rounded-md text-sm transition-colors ${isScrolled ? 'text-gray-700 hover:bg-gray-200' : 'text-gray-200 hover:bg-white/10'}`}
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <a href={`tel:${PHONE_NUMBER_RAW}`} className="ml-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 transition-colors">
                            <PhoneIcon className="h-5 w-5 mr-2" />
                            Обади се сега
                        </a>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white ${isScrolled ? 'text-gray-700 bg-gray-200' : 'text-white bg-white/20'}`}
                            aria-controls="mobile-menu"
                            aria-expanded={isOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? <XMarkIcon className="block h-6 w-6" aria-hidden="true" /> : <Bars3Icon className="block h-6 w-6" aria-hidden="true" />}
                        </button>
                    </div>
                </div>
            </nav>

            {isOpen && (
                <div className="md:hidden bg-white" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {NAV_LINKS.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-gray-700 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                    <div className="pt-4 pb-3 border-t border-gray-200">
                         <div className="px-2">
                            <a href={`tel:${PHONE_NUMBER_RAW}`} className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-orange-500 hover:bg-orange-600">
                                <PhoneIcon className="h-5 w-5 mr-2" />
                                Обади се: {PHONE_NUMBER}
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
