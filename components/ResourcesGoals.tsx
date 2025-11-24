import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { Coins, User, Map, Package } from 'lucide-react';

const data = [
  { name: 'Coord. Motriz', value: 70, color: '#F97316' },
  { name: 'Creatividad', value: 40, color: '#FACC15' },
  { name: 'Visibilidad Web', value: 60, color: '#14B8A6' },
];

const ResourcesGoals: React.FC = () => {
  return (
    <section id="recursos" className="py-16 bg-ludes-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Resources Grid */}
        <h2 className="text-3xl font-display font-bold text-center text-ludes-brown mb-12">Recursos Disponibles</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            <div className="bg-white p-6 rounded-2xl shadow-sm border-b-4 border-ludes-brown">
                <div className="w-12 h-12 bg-ludes-brown/10 rounded-full flex items-center justify-center mb-4">
                    <User className="text-ludes-brown" />
                </div>
                <h3 className="font-bold text-lg mb-2">Humanos</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Directora Lucero Vega</li>
                    <li>• Practicantes UTP</li>
                    <li>• Profesores rotativos (Alcaldía)</li>
                    <li>• Psicóloga rotativa</li>
                </ul>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border-b-4 border-ludes-orange">
                <div className="w-12 h-12 bg-ludes-orange/10 rounded-full flex items-center justify-center mb-4">
                    <Map className="text-ludes-orange" />
                </div>
                <h3 className="font-bold text-lg mb-2">Locativos</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Sede Ludes Creativo</li>
                    <li>• Parque del Café</li>
                </ul>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border-b-4 border-ludes-pink">
                <div className="w-12 h-12 bg-ludes-pink/10 rounded-full flex items-center justify-center mb-4">
                    <Package className="text-ludes-pink" />
                </div>
                <h3 className="font-bold text-lg mb-2">Materiales/Tec</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Artículos de papelería</li>
                    <li>• Pinturas (escasas)</li>
                    <li>• Instrumentos (dañados)</li>
                    <li className="text-red-400 italic">• Sin recursos tecnológicos</li>
                </ul>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border-b-4 border-ludes-yellow">
                <div className="w-12 h-12 bg-ludes-yellow/10 rounded-full flex items-center justify-center mb-4">
                    <Coins className="text-yellow-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Financieros</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Apoyo Alcaldía</li>
                    <li>• Sec. Recreación y Deporte</li>
                    <li>• Mensualidad alumnos</li>
                </ul>
            </div>
        </div>

        {/* Goals & Products */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
            
            <div className="bg-white p-8 rounded-3xl shadow-lg">
                <h3 className="text-2xl font-display font-bold text-gray-800 mb-6 text-center">Metas del Proyecto</h3>
                <div className="h-64 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={data}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} />
                            <XAxis dataKey="name" tick={{fontSize: 12}} />
                            <YAxis domain={[0, 100]} />
                            <Tooltip cursor={{fill: 'transparent'}} />
                            <Bar dataKey="value" radius={[10, 10, 0, 0]}>
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>
                <p className="text-center text-xs text-gray-400 mt-4">% de mejora/cumplimiento esperado</p>
            </div>

            <div>
                <h3 className="text-3xl font-display font-bold text-ludes-teal mb-6">Productos Esperados</h3>
                
                <div className="space-y-6">
                    <div className="bg-ludes-pink/10 p-6 rounded-2xl border border-ludes-pink/30">
                        <h4 className="font-bold text-ludes-pink text-xl mb-2">Tangibles</h4>
                        <p className="text-gray-700">
                            Redes sociales activas, página web, recursos adicionales para manualidades y evidencias del proceso.
                        </p>
                    </div>

                    <div className="bg-ludes-orange/10 p-6 rounded-2xl border border-ludes-orange/30">
                        <h4 className="font-bold text-ludes-orange text-xl mb-2">Intangibles</h4>
                        <p className="text-gray-700">
                            El disfrute de los espacios, memorias afectivas, desarrollo formativo y mejora en la calidad de vida.
                        </p>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default ResourcesGoals;