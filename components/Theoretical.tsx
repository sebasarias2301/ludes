import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen } from 'lucide-react';

const Theoretical: React.FC = () => {
  const [openSection, setOpenSection] = useState<string | null>('definitions');

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <section id="teorico" className="py-16 bg-ludes-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-ludes-brown">Marco Teórico</h2>
            <div className="w-24 h-1 bg-ludes-orange mx-auto mt-4 rounded-full"></div>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                Fundamentos conceptuales y guías de acción que sustentan nuestra intervención pedagógica y recreativa.
            </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
            {/* Definitions */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <button 
                    onClick={() => toggleSection('definitions')}
                    className="w-full px-6 py-5 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
                >
                    <div className="flex items-center">
                        <BookOpen className="w-6 h-6 text-ludes-orange mr-4" />
                        <span className="text-lg font-bold text-gray-800 text-left">Conceptos de Discapacidad</span>
                    </div>
                    {openSection === 'definitions' ? <ChevronUp className="text-gray-400"/> : <ChevronDown className="text-gray-400"/>}
                </button>
                
                {openSection === 'definitions' && (
                    <div className="px-6 pb-6 pt-2 bg-white text-gray-600 space-y-4 border-t border-gray-100 animate-in slide-in-from-top-2">
                        <p className="italic bg-orange-50 p-4 rounded-lg text-sm">
                            <strong>Discapacidad (OMS 2001):</strong> Condición que nace de la interacción entre una deficiencia física, sensorial, cognitiva o mental y las barreras sociales o del entorno.
                        </p>
                        <div className="grid md:grid-cols-3 gap-4 mt-4">
                            <div className="bg-gray-50 p-4 rounded-xl border-t-4 border-ludes-teal">
                                <strong className="text-ludes-teal block mb-2">Cognitiva/Intelectual</strong>
                                <p className="text-sm">Alteración en funciones para aprender, comprender y resolver problemas.</p>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-xl border-t-4 border-ludes-teal">
                                <strong className="text-ludes-teal block mb-2">Física/Motriz</strong>
                                <p className="text-sm">Limitaciones en la movilidad o control motor.</p>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-xl border-t-4 border-ludes-teal">
                                <strong className="text-ludes-teal block mb-2">Síndrome de Down</strong>
                                <p className="text-sm">Condición genética (cromosoma 21 extra). Rasgos físicos distintivos.</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Dos and Donts */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <button 
                    onClick={() => toggleSection('guidelines')}
                    className="w-full px-6 py-5 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
                >
                    <div className="flex items-center">
                        <div className="w-6 h-6 rounded-full bg-ludes-teal flex items-center justify-center text-white font-bold text-xs mr-4">✓</div>
                        <span className="text-lg font-bold text-gray-800 text-left">Guía de Intervención</span>
                    </div>
                    {openSection === 'guidelines' ? <ChevronUp className="text-gray-400"/> : <ChevronDown className="text-gray-400"/>}
                </button>
                
                {openSection === 'guidelines' && (
                    <div className="px-6 pb-6 pt-2 bg-white text-gray-600 border-t border-gray-100 animate-in slide-in-from-top-2">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h4 className="font-bold text-green-600 mb-3 flex items-center text-sm uppercase tracking-wide bg-green-50 p-2 rounded-lg w-fit">
                                    Lo que SE PUEDE hacer
                                </h4>
                                <ul className="space-y-3 text-sm text-gray-600">
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">✓</span>
                                        Fomentar aprendizaje adaptado y personalizado.
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">✓</span>
                                        Actividades lúdicas y artísticas constantes.
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">✓</span>
                                        Estimular motricidad fina y gruesa.
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">✓</span>
                                        Potenciar la comunicación verbal y no verbal.
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-bold text-red-500 mb-3 flex items-center text-sm uppercase tracking-wide bg-red-50 p-2 rounded-lg w-fit">
                                    Lo que NO SE DEBE hacer
                                </h4>
                                <ul className="space-y-3 text-sm text-gray-600">
                                    <li className="flex items-start">
                                        <span className="text-red-500 mr-2">✕</span>
                                        Sobreproteger limitando su independencia.
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-red-500 mr-2">✕</span>
                                        Subestimar sus capacidades de aprendizaje.
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-red-500 mr-2">✕</span>
                                        Imponer actividades que generen frustración excesiva.
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-red-500 mr-2">✕</span>
                                        Tratar con condescendencia o lástima.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Theoretical;