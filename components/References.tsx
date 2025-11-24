import React from 'react';
import { Landmark, GraduationCap, Search, ExternalLink } from 'lucide-react';

const References: React.FC = () => {
  return (
    <section id="referentes" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-ludes-orange">Referentes y Antecedentes</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                Experiencias significativas a nivel nacional y académico que orientan nuestra propuesta.
            </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
            {/* Fundaciones Nacionales */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all group">
                <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-ludes-orange transition-colors">
                    <Landmark className="w-8 h-8 text-ludes-orange group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-display font-bold text-xl text-gray-800 mb-4">Fundaciones Nacionales</h3>
                <ul className="space-y-4">
                    <li className="pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                        <strong className="text-ludes-brown block mb-1">Fundación Luna Crearte</strong>
                        <p className="text-sm text-gray-600">
                            Utiliza el arte como proyecto de vida para potenciar habilidades en personas con discapacidad.
                        </p>
                    </li>
                    <li className="pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                        <strong className="text-ludes-brown block mb-1">Arte Incluyente Colombia</strong>
                        <p className="text-sm text-gray-600">
                            Ofrece programas formativos artísticos enfocados en la inclusión social.
                        </p>
                    </li>
                    <li>
                        <strong className="text-ludes-brown block mb-1">Comfandi</strong>
                        <p className="text-sm text-gray-600">
                            Programa "Expresión sin barreras", promoviendo el acceso a la cultura.
                        </p>
                    </li>
                </ul>
            </div>

            {/* Programas Académicos */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all group">
                <div className="w-14 h-14 bg-teal-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-ludes-teal transition-colors">
                    <GraduationCap className="w-8 h-8 text-ludes-teal group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-display font-bold text-xl text-gray-800 mb-4">Programas Académicos</h3>
                <ul className="space-y-4">
                    <li className="pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                        <strong className="text-ludes-brown block mb-1">Univ. Tecnológica de Pereira</strong>
                        <p className="text-sm text-gray-600">
                            Proyecto "Recrea tu mente" liderado por Cristian Garcia, enfocado en recreación cognitiva.
                        </p>
                    </li>
                    <li>
                        <strong className="text-ludes-brown block mb-1">IDARTES (Programa Crea)</strong>
                        <p className="text-sm text-gray-600">
                            Talleres artísticos "Los Increíbles" para población con discapacidad.
                        </p>
                    </li>
                </ul>
            </div>

            {/* Investigación */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all group">
                <div className="w-14 h-14 bg-yellow-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-ludes-yellow transition-colors">
                    <Search className="w-8 h-8 text-yellow-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-display font-bold text-xl text-gray-800 mb-4">Investigación</h3>
                <ul className="space-y-4">
                    <li className="pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                        <strong className="text-ludes-brown block mb-1">UNIMINUTO</strong>
                        <p className="text-sm text-gray-600">
                            Estudios sobre artes plásticas para el desarrollo de la motricidad fina.
                        </p>
                    </li>
                    <li>
                        <strong className="text-ludes-brown block mb-1">Fund. Univ. Los Libertadores</strong>
                        <p className="text-sm text-gray-600">
                            Investigación en arteterapia, autoestima y bienestar emocional.
                        </p>
                    </li>
                </ul>
            </div>
        </div>

      </div>
    </section>
  );
};

export default References;