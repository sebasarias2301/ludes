import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Institución', id: 'institucion' },
  { label: 'Proyecto', id: 'proyecto' },
  { label: 'Galería', id: 'galeria' },
  { label: 'Contexto', id: 'contexto' },
  { label: 'Marco Teórico', id: 'teorico' },
  { label: 'Referentes', id: 'referentes' },
  { label: 'Cronograma', id: 'cronograma' },
  { label: 'Recursos y Metas', id: 'recursos' },
];

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-ludes-orange/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <span className="font-display font-bold text-2xl text-ludes-orange">LUDES</span>
            <span className="font-display font-bold text-2xl text-ludes-teal ml-1">Creativo</span>
          </div>
          
          <div className="hidden lg:flex space-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-600 hover:text-ludes-orange px-2 py-2 rounded-md text-sm font-semibold transition-colors font-display"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-ludes-orange p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-b border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-600 hover:text-ludes-orange block px-3 py-2 rounded-md text-base font-semibold w-full text-left"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;