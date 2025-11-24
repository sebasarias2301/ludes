import React from 'react';
import { Target, Lightbulb, AlertTriangle, CheckCircle2, Users } from 'lucide-react';

const Project: React.FC = () => {
  return (
    <section id="proyecto" className="py-16 bg-ludes-orange/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-ludes-orange mb-4">El Proyecto</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Buscamos desarrollar un plan recreativo donde se fomente la coordinación motriz por medio de experiencias artísticas, fortaleciendo habilidades blandas y activando redes sociales para la visibilización.
            </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Situation Problem */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border-t-8 border-ludes-pink hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                    <AlertTriangle className="w-8 h-8 text-ludes-pink mr-3" />
                    <h3 className="font-display font-bold text-xl text-gray-800">Situación Problema</h3>
                </div>
                <ul className="space-y-3 text-gray-600 list-disc pl-5">
                    <li>Sedentarismo y pocos espacios de recreación.</li>
                    <li>Baja presencia digital y carencia de recursos.</li>
                    <li>Afectación del bienestar integral de los beneficiarios.</li>
                    <li>Falta de personal y recursos materiales.</li>
                </ul>
            </div>

            {/* Social Necessity */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border-t-8 border-ludes-yellow hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                    <Target className="w-8 h-8 text-ludes-yellow mr-3" />
                    <h3 className="font-display font-bold text-xl text-gray-800">Necesidad Social</h3>
                </div>
                <p className="text-gray-600 mb-4">
                    Se requieren programas innovadores para fortalecer el desarrollo motriz y creativo.
                </p>
                <p className="text-gray-600">
                    Es vital visibilizar capacidades en redes sociales, sensibilizando a la comunidad y generando apoyo para la asociación.
                </p>
            </div>

            {/* Justification */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border-t-8 border-ludes-teal hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                    <CheckCircle2 className="w-8 h-8 text-ludes-teal mr-3" />
                    <h3 className="font-display font-bold text-xl text-gray-800">Justificación</h3>
                </div>
                <p className="text-gray-600">
                    La recreación a través del arte aporta al desarrollo físico, social y emocional. Promueve la inclusión, cooperación, respeto y convivencia.
                </p>
                <div className="mt-4 bg-ludes-teal/10 p-3 rounded-xl text-sm text-ludes-teal font-semibold">
                    Mejora la calidad de vida y autonomía de los estudiantes.
                </div>
            </div>
        </div>

        {/* Methodology */}
        <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-xl overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-ludes-orange/10 rounded-bl-full -mr-16 -mt-16"></div>
            
            <h3 className="text-3xl font-display font-bold text-center text-ludes-brown mb-10 relative z-10">Metodología</h3>
            
            <div className="grid md:grid-cols-2 gap-10 relative z-10">
                <div className="flex items-start space-x-4">
                   <div className="bg-ludes-orange/20 p-3 rounded-full">
                       <Lightbulb className="w-6 h-6 text-ludes-orange" />
                   </div>
                   <div>
                       <h4 className="font-bold text-lg text-gray-800 mb-2">Enfoque Central</h4>
                       <p className="text-gray-600">
                           Centrada en actividades recreativas y artísticas para estimular la motricidad y creatividad.
                       </p>
                   </div>
                </div>

                <div className="flex items-start space-x-4">
                   <div className="bg-ludes-pink/20 p-3 rounded-full">
                       <Users className="w-6 h-6 text-ludes-pink" />
                   </div>
                   <div>
                       <h4 className="font-bold text-lg text-gray-800 mb-2">Participación</h4>
                       <p className="text-gray-600">
                           Las practicantes participarán activamente en eventos programados y generarán nuevos espacios para el disfrute de los educandos.
                       </p>
                   </div>
                </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-100 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="p-4 bg-gray-50 rounded-2xl">
                    <span className="block text-2xl font-bold text-ludes-teal mb-1">3.5</span>
                    <span className="text-xs text-gray-500 uppercase tracking-wide">Meses</span>
                </div>
                <div className="p-4 bg-gray-50 rounded-2xl">
                    <span className="block text-2xl font-bold text-ludes-teal mb-1">2</span>
                    <span className="text-xs text-gray-500 uppercase tracking-wide">Veces/Semana</span>
                </div>
                <div className="p-4 bg-gray-50 rounded-2xl">
                    <span className="block text-lg font-bold text-gray-700 mb-1">Miércoles</span>
                    <span className="text-xs text-gray-500">9:00 - 10:30 AM</span>
                </div>
                <div className="p-4 bg-gray-50 rounded-2xl">
                    <span className="block text-lg font-bold text-gray-700 mb-1">Viernes</span>
                    <span className="text-xs text-gray-500">11:00 - 1:00 PM</span>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Project;