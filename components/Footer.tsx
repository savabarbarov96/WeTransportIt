import React from 'react';
import { NAV_LINKS, PHONE_NUMBER, EMAIL_ADDRESS, FACEBOOK_URL, TIKTOK_URL, SERVICES } from '../constants';
import { PhoneIcon, EnvelopeIcon } from './IconComponents';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <h3 className="text-2xl font-bold text-white">We Transport It</h3>
            <p className="text-gray-400 text-base">
              Вашият надежден партньор за хамалски и транспортни услуги в Стара Загора и региона. Бързо, сигурно и на достъпни цени.
            </p>
            <div className="flex space-x-6">
              <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href={TIKTOK_URL} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <span className="sr-only">TikTok</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2.999c-4.962 0-9 4.038-9 9s4.038 9 9 9 9-4.038 9-9-4.038-9-9-9zm4.232 9.045c-.073.021-.148.037-.222.045v3.633c0 1.956-1.588 3.544-3.544 3.544s-3.544-1.588-3.544-3.544V8.557c.108.003.216.012.324.012.839 0 1.642-.333 2.222-.914.58-.58.914-1.384.914-2.223h2.328v6.786c.002.505.414.915.918.914.505-.002.915-.414.914-.918V8.67h2.234v3.375c0 2.44-1.986 4.425-4.425 4.425-1.002 0-1.936-.334-2.68-.895z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Услуги</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {SERVICES.slice(0,4).map((item) => (
                    <li key={item.title}>
                      <a href="#services" className="text-base text-gray-300 hover:text-white">{item.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Информация</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {NAV_LINKS.slice(2).map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-base text-gray-300 hover:text-white">{item.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-1 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Контакти</h3>
                 <ul role="list" className="mt-4 space-y-4">
                    <li className="flex">
                        <PhoneIcon className="h-6 w-6 text-gray-400 mr-2 flex-shrink-0" />
                        <a href={`tel:${PHONE_NUMBER}`} className="text-base text-gray-300 hover:text-white">{PHONE_NUMBER}</a>
                    </li>
                    <li className="flex">
                        <EnvelopeIcon className="h-6 w-6 text-gray-400 mr-2 flex-shrink-0" />
                        <a href={`mailto:${EMAIL_ADDRESS}`} className="text-base text-gray-300 hover:text-white">{EMAIL_ADDRESS}</a>
                    </li>
                    <li>
                        <p className="text-base text-gray-300">Работно време: Пон-Нед: 7:00-20:00</p>
                    </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 xl:text-center">&copy; {new Date().getFullYear()} We Transport It. Всички права запазени.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
