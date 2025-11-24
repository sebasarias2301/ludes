import React from 'react';
import { Mail, Phone, MapPin, Users } from 'lucide-react';

const Institution: React.FC = () => {
  return (
    <section id="institucion" className="py-16 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-ludes-cream rounded-[3rem] p-8 md:p-12 shadow-xl border-4 border-ludes-orange/20">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-4xl font-display font-bold text-ludes-brown mb-6">Institución</h2>
                        <h3 className="text-2xl font-bold text-ludes-teal mb-2">ASOCIACIÓN LUDES CREATIVO PEREIRA</h3>
                        <div className="w-20 h-2 bg-ludes-yellow rounded-full mb-6"></div>
                        
                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <div className="bg-white p-2 rounded-full shadow-md">
                                    <Users className="w-6 h-6 text-ludes-orange" />
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-gray-500 uppercase">Directora</p>
                                    <p className="text-lg font-bold text-gray-800">Lucero Vega Córdoba</p>
                                </div>
                            </div>

                            <div className="space-y-3 pt-4 border-t border-gray-200">
                                <h4 className="font-display font-bold text-lg text-gray-700">Contacto</h4>
                                <div className="flex items-center space-x-3 text-gray-600">
                                    <Phone className="w-5 h-5 text-ludes-pink" />
                                    <span>313 610 3013 – 312 242 9202</span>
                                </div>
                                <div className="flex items-center space-x-3 text-gray-600">
                                    <Mail className="w-5 h-5 text-ludes-pink" />
                                    <a href="mailto:asociacionludescreativopereira@gmail.com" className="hover:text-ludes-orange transition-colors">
                                        asociacionludescreativopereira@gmail.com
                                    </a>
                                </div>
                                <div className="flex items-center space-x-3 text-gray-600">
                                    <div className="w-5 h-5 flex items-center justify-center bg-gradient-to-tr from-yellow-400 to-purple-600 rounded-md text-white text-[10px] font-bold">IG</div>
                                    <span>@ludes_creativo</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-white p-6 rounded-3xl shadow-inner border border-gray-100 flex flex-col justify-center items-center text-center h-full">
                        <img 
                            src="https://picsum.photos/400/300?grayscale" 
                            alt="Directora Lucero Vega" 
                            className="w-48 h-48 object-cover rounded-full mb-6 border-4 border-ludes-yellow shadow-lg"
                        />
                        <p className="italic text-gray-600 text-lg">
                            "Un espacio de inclusión y desarrollo."
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Institution;