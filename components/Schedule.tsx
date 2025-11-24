import React from 'react';
import { Calendar } from 'lucide-react';
import { ScheduleItem } from '../types';

const scheduleData: ScheduleItem[] = [
    {
        module: "Módulo 1: Diagnóstico",
        title: "Agosto",
        activities: [
            { week: "Semana 1 (11 y 15)", description: "Acreditación y Visita de reconocimiento." },
            { week: "Semana 2 (20 y 22)", description: "Acompañamiento programa de inclusión (Parque del Café) y Test motriz + Pintura." },
            { week: "Semana 3 & 4 (27 y 29)", description: "Estimulación de agarre y Rondas recreativas." }
        ]
    },
    {
        module: "Módulo 2: Motricidad",
        title: "Septiembre",
        activities: [
            { week: "Semana 2 (10 y 12)", description: "Estimulación lanzar y atrapar (Piscina) y Activación dinámica (Colchonetas)." },
            { week: "Semana 3 (17 y 19)", description: "Actividades de elasticidad." },
            { week: "Semana 4 (25 y 26)", description: "Día de Amor y Amistad, Circuito en Piscina." }
        ]
    },
    {
        module: "Módulo 3: Creatividad",
        title: "Octubre",
        activities: [
            { week: "Semana 2 (8 y 10)", description: "Elección de personajes, dibujo y cambio de vestimenta." },
            { week: "Semana 3 (15 y 17)", description: "Creación de disfraces." },
            { week: "Semana 4 (22 y 24)", description: "Terminar los disfraces." },
            { week: "Semana 5 (29 y 31)", description: "Caminata con temática de Halloween." }
        ]
    },
    {
        module: "Módulo 4: Cierre",
        title: "Noviembre",
        activities: [
            { week: "1 al 3", description: "Fin de semana en finca (Retos y actividades en conjunto)." },
            { week: "Semana 4 (12 y 14)", description: "Preparación de acto para la clausura." },
            { week: "Semana 5 (19 y 21)", description: "Preparación para clausura." },
            { week: "27 de Noviembre", description: "CLAUSURA." }
        ]
    }
];

const Schedule: React.FC = () => {
  return (
    <section id="cronograma" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-display font-bold text-center text-ludes-orange mb-12">Cronograma de Actividades</h2>

        <div className="relative">
            {/* Vertical Line for Desktop */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-ludes-teal/20"></div>

            <div className="space-y-12">
                {scheduleData.map((item, index) => (
                    <div key={index} className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                        
                        <div className="w-full md:w-1/2 p-4">
                            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 relative overflow-hidden group hover:border-ludes-orange transition-colors">
                                <div className={`absolute top-0 left-0 w-2 h-full ${index % 2 === 0 ? 'bg-ludes-pink' : 'bg-ludes-yellow'}`}></div>
                                <div className="flex justify-between items-start mb-4 pl-4">
                                    <div>
                                        <h3 className="font-bold text-lg text-gray-800">{item.module}</h3>
                                        <span className="text-sm font-semibold text-ludes-teal uppercase tracking-wider">{item.title}</span>
                                    </div>
                                    <Calendar className="w-6 h-6 text-gray-400 group-hover:text-ludes-orange transition-colors" />
                                </div>
                                <ul className="pl-4 space-y-3">
                                    {item.activities.map((act, i) => (
                                        <li key={i} className="text-sm text-gray-600 border-l border-gray-200 pl-3">
                                            <span className="block font-bold text-gray-700">{act.week}</span>
                                            {act.description}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Dot on timeline */}
                        <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-white border-4 border-ludes-teal rounded-full items-center justify-center z-10">
                            <div className="w-2 h-2 bg-ludes-teal rounded-full"></div>
                        </div>
                        
                        <div className="w-full md:w-1/2 p-4 hidden md:block"></div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;