import React, { useState } from 'react';
import { FAQ_ITEMS } from '../constants';
import { ChevronDownIcon } from './IconComponents';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Често задавани въпроси
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Намерете отговори на най-често срещаните въпроси. Ако не намирате вашия, не се колебайте да се свържете с нас!
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {FAQ_ITEMS.map((item, index) => (
            <div key={index} className="border border-gray-200 rounded-lg">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex justify-between items-center text-left p-4 sm:p-6"
                aria-expanded={openIndex === index}
              >
                <span className="text-lg font-medium text-gray-900">{item.question}</span>
                <ChevronDownIcon 
                  className={`h-6 w-6 text-gray-500 transform transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`} 
                />
              </button>
              {openIndex === index && (
                <div className="px-4 sm:px-6 pb-4 sm:pb-6 text-gray-600 leading-relaxed">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
