// Fix: Import React to provide the 'React' namespace for React.ReactNode.
import React from 'react';

export interface NavLink {
  name: string;
  href: string;
}

export interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  price: string;
  cta: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  location: string;
  rating: number;
}

export interface FaqItem {
  question: string;
  answer: string;
}
