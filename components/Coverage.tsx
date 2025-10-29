import React from 'react';
import { PRIMARY_CITIES, SECONDARY_CITIES } from '../constants';
import { MapPinIcon, CheckIcon } from './IconComponents';

const Coverage: React.FC = () => {
  return (
    <section id="coverage" className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-800 font-semibold tracking-wide uppercase">Зона на покритие</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Обслужваме цялата Старозагорска област
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 lg:mx-auto">
            Нашите професионални хамали и транспортни услуги са достъпни в следните градове и региони:
          </p>
        </div>

        <div className="mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Основни градове</h3>
                    <div className="space-y-4">
                    {PRIMARY_CITIES.map((city) => (
                        <div key={city} className="flex items-center p-4 bg-white rounded-lg shadow-md">
                            <MapPinIcon className="h-8 w-8 text-blue-800 flex-shrink-0" />
                            <span className="ml-4 text-xl font-semibold text-gray-800">{city}</span>
                        </div>
                    ))}
                    </div>
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Други населени места</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {SECONDARY_CITIES.map((city) => (
                        <div key={city} className="flex items-center">
                            <CheckIcon className="h-5 w-5 text-green-500" />
                            <span className="ml-2 text-base text-gray-700">{city}</span>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        </div>

        <div className="mt-12 text-center text-gray-600 bg-blue-50 p-6 rounded-lg">
          <p>Работим също и в съседни области при необходимост.</p>
          <p className="font-semibold">Обадете се за уточняване на цена според разстоянието!</p>
        </div>
      </div>
    </section>
  );
};

export default Coverage;
