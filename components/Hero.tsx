import React from 'react';
import { PHONE_NUMBER, PHONE_NUMBER_RAW } from '../constants';
import { PhoneIcon } from './IconComponents';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative bg-gray-900 h-screen flex items-center justify-center text-white">
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ backgroundImage: "url('https://placehold.co/1920x1080/2d3748/cccccc?text=We+Transport+It')" }}
      ></div>
      <div className="absolute inset-0 bg-black opacity-60"></div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
          <span className="block">Професионални Хамалски и</span>
          <span className="block text-orange-400">Транспортни Услуги</span>
        </h1>
        <p className="mt-6 max-w-lg mx-auto text-xl text-gray-300 sm:max-w-3xl">
          Бързо, надеждно и на достъпни цени. Обслужваме Стара Загора, Казанлък, Чирпан, Раднево и цялата област.
        </p>
        <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <a
            href={`tel:${PHONE_NUMBER_RAW}`}
            className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 md:py-4 md:text-lg md:px-10 transition-transform transform hover:scale-105"
          >
            <PhoneIcon className="h-6 w-6 mr-3"/>
            Обади се сега: {PHONE_NUMBER}
          </a>
          <a
            href="#contact"
            className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-orange-500 bg-white hover:bg-gray-100 md:py-4 md:text-lg md:px-10 transition-transform transform hover:scale-105"
          >
            Безплатна оферта за 5 минути
          </a>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="text-center p-4 bg-white/10 rounded-lg">
                <p className="font-bold text-lg">Над 500 успешни превоза</p>
            </div>
            <div className="text-center p-4 bg-white/10 rounded-lg">
                <p className="font-bold text-lg">Професионален екип с опит</p>
            </div>
            <div className="text-center p-4 bg-white/10 rounded-lg">
                <p className="font-bold text-lg">Работим 7 дни в седмицата</p>
            </div>
        </div>
        <div className="mt-8 text-lg font-semibold bg-black/30 inline-block px-4 py-2 rounded-md">
            Работно време: Пон-Нед: 7:00-20:00
        </div>
      </div>
    </section>
  );
};

export default Hero;
