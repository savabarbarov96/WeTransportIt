import React from 'react';
import { SERVICES } from '../constants';
import { CheckIcon } from './IconComponents';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">Нашите Услуги</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Предлагаме пълен спектър от хамалски и транспортни услуги, за да отговорим на всички ваши нужди.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => (
            <div
              key={index}
              className="flex flex-col bg-gray-50 rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="flex-shrink-0 p-6 flex justify-center items-center">
                {service.icon}
              </div>
              <div className="flex-1 p-6 pt-0 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 text-center">{service.title}</h3>
                  <p className="mt-3 text-base text-gray-600 text-center">{service.description}</p>
                  <ul className="mt-4 space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <div className="flex-shrink-0">
                          <CheckIcon className="h-6 w-6 text-green-500" />
                        </div>
                        <p className="ml-3 text-base text-gray-600">{feature}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6 text-center">
                  <p className="text-lg font-semibold text-gray-800 bg-gray-200 inline-block px-4 py-1 rounded-full">
                    {service.price}
                  </p>
                  <a
                    href="#contact"
                    className="mt-4 block w-full bg-blue-800 text-white text-center px-4 py-3 rounded-md font-bold hover:bg-blue-900 transition-colors"
                  >
                    {service.cta}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
