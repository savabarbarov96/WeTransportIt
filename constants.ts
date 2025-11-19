// Fix: Import React to use React.createElement and avoid JSX in a .ts file.
import React from 'react';
import type { NavLink, Service, Testimonial, FaqItem } from './types';
import { TruckIcon, UsersIcon, BuildingOfficeIcon, ComputerDesktopIcon, TrashIcon, ArchiveBoxIcon, CheckBadgeIcon, ClockIcon, WrenchScrewdriverIcon, ShieldCheckIcon, BanknotesIcon, CalendarDaysIcon, PhoneIcon, DocumentTextIcon, CheckIcon as ProcessCheckIcon, MapPinIcon, ChevronRightIcon } from './components/IconComponents';

export const PHONE_NUMBER = "+359 88 946 2299";
export const PHONE_NUMBER_RAW = "+359889462299";
export const EMAIL_ADDRESS = "wetransportit@abv.bg";
export const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=100092312070247";
export const TIKTOK_URL = "https://www.tiktok.com/@we.transport.it";
export const WHATSAPP_URL = `https://wa.me/${PHONE_NUMBER_RAW}`;
export const VIBER_URL = `viber://chat?number=${PHONE_NUMBER_RAW}`;

export const NAV_LINKS: NavLink[] = [
  { name: 'Начало', href: '#home' },
  { name: 'Услуги', href: '#services' },
  { name: 'Ценоразпис', href: '#pricing' },
  { name: 'Покритие', href: '#coverage' },
  { name: 'За нас', href: '#about' },
  { name: 'Контакти', href: '#contact' },
];

// Fix: Replaced JSX with React.createElement to be valid in a .ts file and fix parsing errors.
export const SERVICES: Service[] = [
    {
      icon: React.createElement(UsersIcon, { className: "h-12 w-12 text-blue-800" }),
      title: "Хамалски услуги",
      description: "Професионално товарене, разтоварване и пренасяне на мебели и вещи. Опитен екип с необходимото оборудване.",
      features: ["Товарене и разтоварване", "Пренасяне на тежки мебели", "Монтаж и демонтаж", "Опаковане на вещи"],
      cta: "Свържи се"
    },
    {
      icon: React.createElement(TruckIcon, { className: "h-12 w-12 text-blue-800" }),
      title: "Транспортни услуги",
      description: "Превоз на мебели, битова техника и всякакви товари в рамките на Старозагорска област и цялата страна.",
      features: ["Вътрешноградски превози", "Междуградски превози", "Транспорт на битова техника", "Товарни автомобили различен размер"],
      cta: "Свържи се"
    },
    {
      icon: React.createElement(BuildingOfficeIcon, { className: "h-12 w-12 text-blue-800" }),
      title: "Офис преместване",
      description: "Комплексно преместване на офиси с минимални прекъсвания в работата. Планиране, опаковане, транспорт.",
      features: ["Планиране и организация", "Опаковане на офис оборудване", "Работим и през уикенда", "Застраховка"],
      cta: "Запитване"
    },
    {
      icon: React.createElement(ComputerDesktopIcon, { className: "h-12 w-12 text-blue-800" }),
      title: "Пренасяне на битова техника",
      description: "Безопасно пренасяне на хладилници, перални, телевизори и друга голяма техника.",
      features: ["Професионално оборудване", "Защита от повреди", "Изнасяне от всички етажи"],
      cta: "Свържи се"
    },
    {
      icon: React.createElement(TrashIcon, { className: "h-12 w-12 text-blue-800" }),
      title: "Извозване на отпадъци",
      description: "Извозване на стари мебели, строителни отпадъци и ненужни вещи.",
      features: ["Стари мебели", "Строителни отпадъци", "Почистване след ремонт"],
      cta: "Свържи се"
    },
    {
      icon: React.createElement(ArchiveBoxIcon, { className: "h-12 w-12 text-blue-800" }),
      title: "Опаковане и материали",
      description: "Професионално опаковане на вещи и предоставяне на опаковъчни материали.",
      features: ["Кашони и кутии", "Въздушно фолио", "Stretch фолио", "Одеяла за мебели"],
      cta: "Запитване"
    }
  ];

export const PRIMARY_CITIES = ["Стара Загора", "Казанлък", "Чирпан", "Раднево"];
export const SECONDARY_CITIES = [
    "Гълъбово", "Николаево", "Павел баня", "Братя Даскалови", 
    "Мъглиж", "Опан", "Гурково", "Шипка", "Съединение"
];

// Fix: Replaced JSX with React.createElement to allow for correct type inference, fixing errors in components consuming this data.
export const ADVANTAGES = [
    { icon: React.createElement(ClockIcon, { className: "h-12 w-12 text-orange-500" }), title: "БЪРЗО", text: "Винаги се стараем да впечатлим нашите клиенти със светкавично изпълнение на нашите услуги." },
    { icon: React.createElement(CheckBadgeIcon, { className: "h-12 w-12 text-orange-500" }), title: "КАЧЕСТВЕНО", text: "Знаем, че вие искате работата да бъде свършена качествено и точно това е, което ще получите от нас." },
    { icon: React.createElement(ShieldCheckIcon, { className: "h-12 w-12 text-orange-500" }), title: "ЧИСТО", text: "Чистим толкова добре, че след нас не остава и прашинка." },
    { icon: React.createElement(WrenchScrewdriverIcon, { className: "h-12 w-12 text-orange-500" }), title: "ПРЕЦИЗНО", text: "Без значение дали трябва да изкопаем канал за кабел или да бутнем цяла стена, винаги работим с хирургическа точност и прецизност." },
    { icon: React.createElement(BanknotesIcon, { className: "h-12 w-12 text-orange-500" }), title: "НА ДОСТЪПНИ ЦЕНИ", text: "Ще ви изготвим индивидуална оферта с цена, на която няма да можете да устоите." }
];

export const TESTIMONIALS: Testimonial[] = [
    { quote: "Много професионална работа! Пренесоха ни цялото обзавеждане за 3 часа. Внимателни с мебелите, всичко пристигна без драскотина. Препоръчвам!", author: "Мария Иванова", location: "Стара Загора", rating: 5 },
    { quote: "Отлична цена-качество. Хамалите бяха точни, работиха бързо и организирано. Ще ги ползвам отново.", author: "Георги Петров", location: "Казанлък", rating: 5 },
    { quote: "Преместихме офиса си с тяхна помощ. Без стрес, без проблеми. Професионален подход от начало до край.", author: "Иван Димитров, собственик на фирма", location: "Стара Загора", rating: 5 }
];

// Fix: Replaced JSX with React.createElement to allow for correct type inference, fixing errors in components consuming this data.
export const PROCESS_STEPS = [
    { icon: React.createElement(PhoneIcon, { className: "h-10 w-10" }), title: "Стъпка 1: Запитване", description: "Обадете се или попълнете формата за оферта. Разкажете ни какво трябва да преместите." },
    { icon: React.createElement(DocumentTextIcon, { className: "h-10 w-10" }), title: "Стъпка 2: Оферта", description: "Получавате безплатна оферта за до 5 минути. Прозрачна цена без скрити такси." },
    { icon: React.createElement(CalendarDaysIcon, { className: "h-10 w-10" }), title: "Стъпка 3: Планиране", description: "Уговаряме удобна дата и час. При необходимост - оглед на място." },
    { icon: React.createElement(ProcessCheckIcon, { className: "h-10 w-10" }), title: "Стъпка 4: Изпълнение", description: "Нашият екип извършва преместването професионално. Вашите вещи пристигат безопасно." }
];

export const FAQ_ITEMS: FaqItem[] = [
    { question: "Колко струва преместване на апартамент?", answer: "Цената зависи от обема на вещите, броя етажи и разстоянието. Средно за двустаен апартамент с 2 хамала и транспорт цената е 150-250 лв. Обадете се за точна оферта." },
    { question: "Работите ли в почивни дни?", answer: "Да, работим 7 дни в седмицата, включително в празнични дни. При работа в неделя и празници може да има леко увеличение на цената." },
    { question: "Застраховани ли са товарите при транспорт?", answer: "Да, имаме застраховка за транспортираните товари. При повреда по наша вина поемаме отговорност." },
    { question: "Колко време отнема преместване?", answer: "Зависи от обема. Средно едностаен апартамент отнема 2-3 часа, двустаен 3-4 часа, тристаен 4-6 часа." },
    { question: "Предоставяте ли опаковъчни материали?", answer: "Да, можем да предоставим кашони, фолио, одеяла и други материали срещу допълнителна такса." },
    { question: "До кои градове извършвате транспорт?", answer: "Обслужваме цялата Старозагорска област и при необходимост цялата страна. Виж секция 'Покритие' за повече информация." }
];
