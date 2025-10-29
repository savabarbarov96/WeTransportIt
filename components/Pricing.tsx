import React from 'react';
import { PHONE_NUMBER } from '../constants';

const Pricing: React.FC = () => {
  const movingServices = [
    { service: '1 хамал', price: '25 лв/час' },
    { service: '2 хамала', price: '45 лв/час' },
    { service: '3 хамала', price: '65 лв/час' },
    { service: 'Минимално време', price: '2 часа' },
  ];

  const transportServices = [
    { vehicle: 'Бус до 1.5 тона', price: 'От 50 лв' },
    { vehicle: 'Камион до 3.5 тона', price: 'От 80 лв' },
    { vehicle: 'Голям камион', price: 'Договаряне' },
    { vehicle: 'Цена на километър (>30км)', price: '1-1.50 лв/км' },
  ];

  const additionalServices = [
    { service: 'Опаковане на вещи', price: '20-40 лв/час' },
    { service: 'Демонтаж на мебели', price: 'Договаряне' },
    { service: 'Монтаж на мебели', price: 'Договаряне' },
    { service: 'Извозване на отпадъци', price: 'От 40 лв' },
  ];

  return (
    <section id="pricing" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Ценоразпис на услуги
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Прозрачни цени без скрити такси. Крайната цена зависи от обем, разстояние и сложност.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Moving Services Table */}
          <div className="flex flex-col">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-6">Хамалски услуги</h3>
            <div className="bg-gray-50 rounded-lg shadow-lg p-6 flex-grow">
              <table className="w-full">
                <tbody>
                  {movingServices.map((item, index) => (
                    <tr key={index} className="border-b border-gray-200 last:border-b-0">
                      <td className="py-3 text-gray-700 font-medium">{item.service}</td>
                      <td className="py-3 text-right text-gray-900 font-semibold">{item.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Transportation Table */}
          <div className="flex flex-col">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-6">Транспорт</h3>
            <div className="bg-gray-50 rounded-lg shadow-lg p-6 flex-grow">
              <table className="w-full">
                <tbody>
                  {transportServices.map((item, index) => (
                    <tr key={index} className="border-b border-gray-200 last:border-b-0">
                      <td className="py-3 text-gray-700 font-medium">{item.vehicle}</td>
                      <td className="py-3 text-right text-gray-900 font-semibold">{item.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Additional Services Table */}
          <div className="flex flex-col">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-6">Допълнителни услуги</h3>
            <div className="bg-gray-50 rounded-lg shadow-lg p-6 flex-grow">
              <table className="w-full">
                <tbody>
                  {additionalServices.map((item, index) => (
                    <tr key={index} className="border-b border-gray-200 last:border-b-0">
                      <td className="py-3 text-gray-700 font-medium">{item.service}</td>
                      <td className="py-3 text-right text-gray-900 font-semibold">{item.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-blue-800 text-white rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold">Специални оферти</h3>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-lg">
                <p className="bg-blue-700 p-3 rounded-md">10% отстъпка при преместване на цял апартамент</p>
                <p className="bg-blue-700 p-3 rounded-md">Безплатна оценка на място за гр. Стара Загора</p>
            </div>
        </div>

        <div className="mt-12 text-center">
            <a href="#contact" className="inline-block bg-orange-500 text-white font-bold text-lg px-10 py-4 rounded-lg hover:bg-orange-600 transition-colors">
                Получи безплатна оферта
            </a>
            <p className="mt-4 text-gray-600">Обадете се на <a href={`tel:${PHONE_NUMBER}`} className="font-bold text-blue-800 hover:underline">{PHONE_NUMBER}</a> за точна цена според вашите нужди</p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
