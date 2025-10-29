import React from 'react';
import { PROCESS_STEPS } from '../constants';

const Process: React.FC = () => {
  return (
    <section id="process" className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Как работим? Нашият процес в 4 стъпки
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Ние правим преместването лесно и безпроблемно.
          </p>
        </div>

        <div className="mt-16">
          <div className="relative">
            {/* Desktop line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-300" style={{transform: 'translateY(-50%)'}}></div>

            <div className="relative grid grid-cols-1 md:grid-cols-4 gap-12">
              {PROCESS_STEPS.map((step, index) => (
                <div key={index} className="relative text-center">
                  <div className="flex items-center justify-center mx-auto w-24 h-24 rounded-full bg-blue-800 text-white shadow-lg">
                    {step.icon}
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-gray-900">{step.title}</h3>
                  <p className="mt-2 text-base text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
