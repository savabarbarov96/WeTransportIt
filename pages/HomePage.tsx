import React from 'react';
import Hero from '../components/Hero';
import BeforeAfter from '../components/BeforeAfter';
import Services from '../components/Services';
import Process from '../components/Process';
import QuickContact from '../components/QuickContact';
import Coverage from '../components/Coverage';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';

const HomePage: React.FC = () => {
  return (
    <div className="bg-gray-100 text-gray-800">
      <main>
        <Hero />
        <BeforeAfter />
        <QuickContact />
        <Services />
        <Process />
        <Coverage />
        <About />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
    </div>
  );
};

export default HomePage;
