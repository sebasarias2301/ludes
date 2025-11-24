import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-ludes-brown py-12 text-white text-center">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-display font-bold text-ludes-yellow mb-4">MUCHAS GRACIAS</h2>
        <p className="text-ludes-orange font-bold text-xl mb-8">CQT</p>
        
        <div className="border-t border-white/10 pt-8 text-sm text-gray-300">
          <p>Asociación Ludes Creativo Pereira &copy; 2025</p>
          <p>Desarrollado con fines informativos para el proyecto de intervención social.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;