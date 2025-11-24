import React from 'react';
import { Scale, Users2 } from 'lucide-react';
import { Law } from '../types';

const laws: Law[] = [
    { title: "Ley 181 de 1995", description: "Reconoce el derecho al deporte, la recreación y el aprovechamiento del tiempo libre." },
    { title: "CONPES 166 (2013)", description: "Política Pública Nacional de Discapacidad e Inclusión Social: promueve participación efectiva e igualdad." },
    { title: "Art. 47 Constitución Política", description: "El Estado debe implementar política de prevención, rehabilitación e integración social." },
    { title: "Ley 1346 de 2009", description: "Aprobación de la Convención sobre los derechos de las personas con discapacidad (ONU)." },
    { title: "Ley 1618 de 2013", description: "Garantiza el pleno ejercicio de derechos de las personas con discapacidad." },
    { title: "Ley 2297 de 2023", description: "Ley del cuidador: reconocer, dignificar y apoyar el trabajo de cuidadores." },
    { title: "Ley 1145 de 2007", description: "Organiza el Sistema Nacional de Discapacidad (SND)." },
    { title: "Ley 1996 de 2019", description: "Garantiza plena capacidad legal, eliminando la interdicción por un sistema de apoyos." },
    { title: "Ley 361 de 1997", description: "Mecanismos de integración social para personas con limitación." },
    { title: "Ley 2466 de 2025", description: "Reforma Laboral: Cuotas de contratación para empresas según número de empleados." },
];

const Context: React.FC = () => {
  return (
    <section id="contexto" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Social Context */}
        <div className="mb-20">
            <div className="flex items-center mb-8">
                <div className="bg-ludes-pink p-3 rounded-xl mr-4 text-white">
                    <Users2 className="w-8 h-8" />
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-800">Contexto Social</h2>
            </div>
            
            <div className="bg-ludes-pink/5 border border-ludes-pink/20 rounded-3xl p-8">
                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="font-bold text-xl text-ludes-brown mb-4">Población</h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            La asociación trabaja con <strong>13 personas</strong> en condición de discapacidad y vulnerabilidad social, incluyendo discapacidad cognitiva y síndrome de Down.
                        </p>
                        <h3 className="font-bold text-xl text-ludes-brown mb-4 mt-6">Situación Actual</h3>
                        <p className="text-gray-700 leading-relaxed">
                            Enfrentan barreras de inclusión social y estigmatización. La fundación busca ser un espacio de crecimiento, pero enfrenta limitaciones en infraestructura, recursos materiales y digitales.
                        </p>
                    </div>
                    <div className="bg-white rounded-2xl p-6 shadow-sm">
                        <h4 className="text-center font-display font-bold text-gray-600 mb-6">Nivel Socioeconómico</h4>
                        <div className="flex justify-around items-end h-40 space-x-4">
                            <div className="flex flex-col items-center w-1/3">
                                <div className="text-lg font-bold text-ludes-teal mb-2">4</div>
                                <div className="w-full bg-ludes-teal/30 h-24 rounded-t-lg relative group">
                                    <div className="absolute bottom-0 w-full bg-ludes-teal h-[30%] rounded-t-lg transition-all duration-500"></div>
                                </div>
                                <span className="text-sm font-semibold mt-2 text-gray-500">Alto</span>
                            </div>
                            <div className="flex flex-col items-center w-1/3">
                                <div className="text-lg font-bold text-ludes-orange mb-2">8</div>
                                <div className="w-full bg-ludes-orange/30 h-32 rounded-t-lg relative group">
                                    <div className="absolute bottom-0 w-full bg-ludes-orange h-[60%] rounded-t-lg transition-all duration-500"></div>
                                </div>
                                <span className="text-sm font-semibold mt-2 text-gray-500">Medio</span>
                            </div>
                            <div className="flex flex-col items-center w-1/3">
                                <div className="text-lg font-bold text-ludes-yellow mb-2">1</div>
                                <div className="w-full bg-ludes-yellow/30 h-16 rounded-t-lg relative group">
                                    <div className="absolute bottom-0 w-full bg-ludes-yellow h-[10%] rounded-t-lg transition-all duration-500"></div>
                                </div>
                                <span className="text-sm font-semibold mt-2 text-gray-500">Bajo</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Legal Context */}
        <div>
            <div className="flex items-center mb-8">
                <div className="bg-ludes-teal p-3 rounded-xl mr-4 text-white">
                    <Scale className="w-8 h-8" />
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-800">Contexto Legal</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {laws.map((law, index) => (
                    <div key={index} className="bg-gray-50 p-6 rounded-2xl border-l-4 border-ludes-teal hover:bg-white hover:shadow-md transition-all">
                        <h4 className="font-bold text-ludes-teal text-lg mb-2">{law.title}</h4>
                        <p className="text-sm text-gray-600">{law.description}</p>
                    </div>
                ))}
            </div>
        </div>

      </div>
    </section>
  );
};

export default Context;