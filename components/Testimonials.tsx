import React from 'react';
import { TESTIMONIALS } from '../constants';
import { StarIcon } from './IconComponents';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Какво казват нашите клиенти
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Гордеем се с отличната си репутация и стотиците доволни клиенти.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8 flex flex-col">
              <div className="flex-1">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon
                      key={i}
                      className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
                <blockquote className="mt-6 text-gray-700">
                  <p>"{testimonial.quote}"</p>
                </blockquote>
              </div>
              <footer className="mt-6">
                <p className="font-semibold text-gray-900">{testimonial.author}</p>
                <p className="text-gray-600">{testimonial.location}</p>
              </footer>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
            <a href={process.env.FACEBOOK_URL || '#'} target="_blank" rel="noopener noreferrer" className="text-lg font-medium text-blue-800 hover:text-blue-900">
                Виж повече отзиви в Facebook &rarr;
            </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
