import React from 'react';
import { WHATSAPP_URL, VIBER_URL } from '../constants';

const FloatingButtons: React.FC = () => {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col space-y-3">
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Свържете се с нас в WhatsApp"
        className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-green-600 transition-transform hover:scale-110"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.487 5.235 3.487 8.413 0 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.433-9.89-9.889-9.89-5.452 0-9.887 4.429-9.888 9.888.001 2.225.651 4.288 1.902 6.043l-1.453 5.305 5.441-1.441z" />
        </svg>
      </a>
      <a
        href={VIBER_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Свържете се с нас във Viber"
        className="w-14 h-14 bg-purple-600 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-purple-700 transition-transform hover:scale-110"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
            <path d="M14.4,2.9c-2.4-1.8-5.6-2.4-8.5-1.7C3.1,1.9,0.8,3.7,0.1,6.3c-1,3.8,1,7.9,4.4,9.8c2.4,1.3,5.2,1.3,7.6,0.2c2.8-1.3,4.9-3.9,5.5-7c0.8-3.5-0.4-7.2-3.2-9.4V2.9z M10.8,16.5c-3,0.3-5.8-1.5-6.6-4.3c-0.8-2.8,0.7-5.7,3.5-6.5c0.5-0.1,1-0.1,1.5-0.1c2.1,0,4.1,1.2,5.1,3.1c1,2,0.6,4.5-1,6C12.7,16.1,11.7,16.5,10.8,16.5z"/>
            <path d="M21.5,4.5c-0.3-0.9-0.8-1.8-1.5-2.5c-1-1-2.2-1.7-3.5-2c-0.3,0-0.6,0.2-0.6,0.5c0,0.3,0.2,0.6,0.5,0.6c1.1,0.3,2.1,0.8,3,1.6c0.6,0.6,1.1,1.3,1.3,2.1c0.1,0.3,0.4,0.5,0.7,0.4C21.4,5.1,21.6,4.8,21.5,4.5z"/>
            <path d="M19.3,2.3C18.8,1.8,18.2,1.4,17.5,1.1c-0.3-0.1-0.6,0-0.7,0.3s0,0.6,0.3,0.7c0.6,0.3,1.1,0.6,1.6,1c0.2,0.2,0.5,0.2,0.7,0C19.5,2.8,19.5,2.5,19.3,2.3z"/>
        </svg>
      </a>
    </div>
  );
};

export default FloatingButtons;
