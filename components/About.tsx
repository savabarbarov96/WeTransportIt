import React from 'react';
import { ADVANTAGES } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Защо да изберете We Transport It?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            We Transport It е доверена фирма за хамалски и транспортни услуги в Стара Загора с опит от 5+ години. Нашият екип от професионални хамали е обучен за работа с всякакви видове товари - от деликатна битова техника до тежки мебели.
          </p>
        </div>

        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {ADVANTAGES.map((advantage, index) => (
            <div key={index} className="flex">
              <div className="flex-shrink-0">
                {advantage.icon}
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-bold text-gray-900">{advantage.title}</h3>
                <p className="mt-1 text-base text-gray-600">{advantage.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8">
            <div className="bg-gray-50 rounded-lg p-8 flex flex-col items-center justify-center text-center">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full">
                    <div className="border-r border-gray-200 pr-4 last:border-r-0">
                        <p className="text-4xl font-extrabold text-blue-800">500+</p>
                        <p className="mt-2 text-lg font-medium text-gray-700">Успешни превоза</p>
                    </div>
                    <div className="border-r border-gray-200 pr-4 last:border-r-0">
                        <p className="text-4xl font-extrabold text-blue-800">50+</p>
                        <p className="mt-2 text-lg font-medium text-gray-700">Фирмени клиенти</p>
                    </div>
                    <div>
                        <p className="text-4xl font-extrabold text-blue-800">98%</p>
                        <p className="mt-2 text-lg font-medium text-gray-700">Доволни клиенти</p>
                    </div>
                </div>
            </div>
            <div className="w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden sm:aspect-w-2 sm:aspect-h-3">
                <img 
                  src="https://placehold.co/800x600/1E3A8A/FFFFFF?text=Екипът+на\nWe+Transport+It" 
                  alt="Екип We Transport It" 
                  className="w-full h-full object-center object-cover"
                />
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;
