import React, { useState } from 'react';
import { PHONE_NUMBER, PHONE_NUMBER_RAW, EMAIL_ADDRESS, FACEBOOK_URL, TIKTOK_URL, WHATSAPP_URL, VIBER_URL } from '../constants';
import { PhoneIcon, EnvelopeIcon, MapPinIcon, UserIcon, PaperAirplaneIcon } from './IconComponents';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        service: 'Хамалски услуги',
        fromAddress: '',
        toAddress: '',
        message: '',
        gdpr: false,
    });
    const [errors, setErrors] = useState<Partial<typeof formData>>({});
    const [submitted, setSubmitted] = useState(false);

    const validate = () => {
        const newErrors: Partial<typeof formData> = {};
        if (!formData.name) newErrors.name = 'Името е задължително.';
        if (!formData.phone) {
            newErrors.phone = 'Телефонът е задължителен.';
        } else if (!/^(?:\+359|0)\s?8[7-9][2-9]\s?\d{3}\s?\d{3}$/.test(formData.phone)) {
            newErrors.phone = 'Невалиден български телефонен номер.';
        }
        if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Невалиден имейл адрес.';
        }
        if (!formData.gdpr) newErrors.gdpr = 'Трябва да се съгласите с обработката на лични данни.';
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validate()) {
            console.log('Form submitted:', formData);
            setSubmitted(true);
            // Here you would typically send the data to a server
            // For example:
            // fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) })
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        const checked = (e.target as HTMLInputElement).checked;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    return (
        <section id="contact" className="py-16 sm:py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                        Контакти и Безплатна Оферта
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
                        Свържете се с нас още сега и получете своята безплатна оферта до 5 минути!
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Изпратете запитване</h3>
                        {submitted ? (
                             <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4" role="alert">
                                <p className="font-bold">Благодарим!</p>
                                <p>Вашето запитване беше изпратено успешно. Ще се свържем с Вас до 30 минути.</p>
                             </div>
                        ) : (
                            <form onSubmit={handleSubmit} noValidate>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Име</label>
                                        <input type="text" name="name" id="name" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" value={formData.name} onChange={handleChange} />
                                        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Телефон</label>
                                        <input type="tel" name="phone" id="phone" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" value={formData.phone} onChange={handleChange}/>
                                        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Имейл (по желание)</label>
                                    <input type="email" name="email" id="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" value={formData.email} onChange={handleChange} />
                                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                                </div>
                                <div className="mt-6">
                                    <label htmlFor="service" className="block text-sm font-medium text-gray-700">Услуга</label>
                                    <select id="service" name="service" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" value={formData.service} onChange={handleChange}>
                                        <option>Хамалски услуги</option>
                                        <option>Транспорт</option>
                                        <option>Офис преместване</option>
                                        <option>Извозване</option>
                                        <option>Друго</option>
                                    </select>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                                    <div>
                                        <label htmlFor="fromAddress" className="block text-sm font-medium text-gray-700">Адрес "от"</label>
                                        <input type="text" name="fromAddress" id="fromAddress" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" value={formData.fromAddress} onChange={handleChange} />
                                    </div>
                                    <div>
                                        <label htmlFor="toAddress" className="block text-sm font-medium text-gray-700">Адрес "до"</label>
                                        <input type="text" name="toAddress" id="toAddress" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" value={formData.toAddress} onChange={handleChange} />
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Съобщение</label>
                                    <textarea id="message" name="message" rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" value={formData.message} onChange={handleChange}></textarea>
                                </div>
                                <div className="mt-6">
                                    <div className="flex items-start">
                                        <div className="flex h-5 items-center">
                                            <input id="gdpr" name="gdpr" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" checked={formData.gdpr} onChange={handleChange} />
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label htmlFor="gdpr" className="font-medium text-gray-700">Съгласен съм с обработка на лични данни</label>
                                        </div>
                                    </div>
                                    {errors.gdpr && <p className="text-red-500 text-xs mt-1">{errors.gdpr}</p>}
                                </div>
                                <div className="mt-6">
                                    <button type="submit" className="w-full flex justify-center items-center gap-2 py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-blue-800 hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors">
                                        <PaperAirplaneIcon className="h-5 w-5" />
                                        Изпрати запитване
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                    <div className="space-y-8">
                        <div className="bg-white p-8 rounded-lg shadow-lg">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Директен контакт</h3>
                            <ul className="space-y-4 text-lg">
                                <li className="flex items-center">
                                    <PhoneIcon className="h-6 w-6 text-blue-800 mr-3" />
                                    <a href={`tel:${PHONE_NUMBER_RAW}`} className="text-gray-700 hover:text-blue-800 font-bold">{PHONE_NUMBER}</a>
                                </li>
                                <li className="flex items-center">
                                    <EnvelopeIcon className="h-6 w-6 text-blue-800 mr-3" />
                                    <a href={`mailto:${EMAIL_ADDRESS}`} className="text-gray-700 hover:text-blue-800">{EMAIL_ADDRESS}</a>
                                </li>
                                <li className="flex items-start">
                                    <MapPinIcon className="h-6 w-6 text-blue-800 mr-3 mt-1" />
                                    <span className="text-gray-700">
                                        <strong>Работно време:</strong><br />
                                        Понеделник - Неделя: 7:00 - 20:00<br/>
                                        <strong>Адрес:</strong> Стара Загора (работим в цялата област)
                                    </span>
                                </li>
                            </ul>
                             <div className="mt-6 flex space-x-4">
                                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex-1 text-center py-3 px-4 bg-green-500 text-white rounded-md hover:bg-green-600 font-bold transition-colors">Пиши в WhatsApp</a>
                                <a href={VIBER_URL} target="_blank" rel="noopener noreferrer" className="flex-1 text-center py-3 px-4 bg-purple-600 text-white rounded-md hover:bg-purple-700 font-bold transition-colors">Пиши във Viber</a>
                            </div>
                        </div>
                        <div className="aspect-w-16 aspect-h-9 rounded-lg shadow-lg overflow-hidden">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d93965.8082103423!2d25.549219356847124!3d42.4243685418939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a866f332c94511%3A0x400a01269bf5c60!2sStara%20Zagora%2C%20Bulgaria!5e0!3m2!1sen!2sus!4v1626882209701!5m2!1sen!2sus"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                title="Карта на Стара Загора"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
