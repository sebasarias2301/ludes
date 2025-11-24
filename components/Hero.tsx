import React from 'react';
import { Users, Heart, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-24 pb-12 md:pt-32 md:pb-20 bg-ludes-cream overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
            src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop" 
            alt="Background Texture" 
            className="w-full h-full object-cover opacity-5"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ludes-cream/90 to-ludes-cream/50"></div>
      </div>

      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-ludes-orange/10 blur-3xl z-0"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-ludes-pink/10 blur-3xl z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-block px-4 py-1 mb-6 rounded-full bg-ludes-pink/20 text-ludes-brown font-semibold text-sm animate-in fade-in slide-in-from-bottom-4 duration-700">
          2025-2
        </div>
        
        <h1 className="text-5xl md:text-7xl font-display font-bold text-ludes-orange mb-4 drop-shadow-sm animate-in fade-in slide-in-from-bottom-6 duration-1000">
          CONEXIONES QUE
          <span className="block text-ludes-teal mt-2">TRANSFORMAN</span>
        </h1>
        
        <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100">
          Un proyecto de intervención social y recreativa para el fortalecimiento de habilidades y lazos comunitarios.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-6 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-200">
          <div className="bg-white p-6 rounded-3xl shadow-lg border-2 border-ludes-yellow transform hover:-translate-y-1 transition-transform">
            <Heart className="w-10 h-10 text-ludes-orange mx-auto mb-3" />
            <h3 className="font-display font-bold text-lg text-gray-800">Yeraldin Ceballos</h3>
            <p className="text-sm text-gray-500">Gestora del Proyecto</p>
          </div>
          <div className="bg-white p-6 rounded-3xl shadow-lg border-2 border-ludes-pink transform hover:-translate-y-1 transition-transform">
            <Users className="w-10 h-10 text-ludes-pink mx-auto mb-3" />
            <h3 className="font-display font-bold text-lg text-gray-800">Erika Pantoja</h3>
            <p className="text-sm text-gray-500">Gestora del Proyecto</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;