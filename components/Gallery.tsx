import React from 'react';
import { Camera, MapPin, Palette, Waves } from 'lucide-react';

const Gallery: React.FC = () => {
  // Configuración de imágenes.
  // Las imágenes deben estar en la carpeta public/assets/
  const images = [
    {
      url: "/assets/taller_mascaras.jpg", 
      title: "Taller de Máscaras",
      location: "Entorno Natural",
      icon: <Palette className="w-6 h-6" />,
      description: "Espacio de creatividad y motricidad fina al aire libre, elaborando y luciendo nuestros antifaces.",
      gradient: "from-orange-400 to-pink-500"
    },
    {
      url: "/assets/parque_consota.jpg",
      title: "Salida Parque Consotá",
      location: "Parque Consotá",
      icon: <MapPin className="w-6 h-6" />,
      description: "Integración comunitaria y disfrute de los espacios recreativos de la ciudad en el Parque Consotá.",
      gradient: "from-cyan-400 to-blue-600"
    },
    {
      url: "/assets/sede_ludes.jpg",
      title: "Nuestra Sede",
      location: "Ludes Creativo",
      icon: <Camera className="w-6 h-6" />,
      description: "Actividades manuales y de integración en nuestra sede, bajo el mural de bienvenida.",
      gradient: "from-yellow-400 to-orange-500"
    },
    {
      url: "/assets/piscina_actividad.jpg",
      title: "Dinámica Grupal",
      location: "Zona Húmeda",
      icon: <Waves className="w-6 h-6" />,
      description: "Ejercicios de coordinación y socialización en espacios abiertos y zona de piscina.",
      gradient: "from-emerald-400 to-teal-600"
    }
  ];

  return (
    <section id="galeria" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold text-ludes-teal mb-4">Galería de Experiencias</h2>
          <div className="w-24 h-1 bg-ludes-orange mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Momentos reales de nuestro proyecto: arte, recreación y comunidad en Ludes Creativo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((img, index) => (
            <div 
              key={index} 
              className={`group relative overflow-hidden rounded-3xl shadow-xl cursor-pointer h-96 border-4 border-white bg-gradient-to-br ${img.gradient}`}
            >
              {/* Contenido Fallback (Visible si la imagen no carga) */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6 text-center z-0">
                <div className="bg-white/20 p-4 rounded-full mb-4 backdrop-blur-md shadow-inner">
                    {img.icon}
                </div>
                <h3 className="text-2xl font-bold font-display mb-2 drop-shadow-md">{img.title}</h3>
                <p className="text-sm font-medium opacity-90 mb-6">{img.location}</p>
                
                {/* Instrucción técnica discreta */}
                <div className="mt-auto px-4 py-2 bg-black/10 rounded-xl backdrop-blur-sm border border-white/20 w-full">
                    <p className="text-[10px] uppercase tracking-wider opacity-80 mb-1 font-bold">Archivo requerido:</p>
                    <code className="text-xs font-mono break-all text-white/90">
                        {img.url}
                    </code>
                </div>
              </div>
              
              {/* Imagen Real */}
              <img 
                src={img.url} 
                alt={img.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 z-10"
                onError={(e) => {
                   // Ocultar la etiqueta img si falla la carga para mostrar el gradiente de fondo
                   e.currentTarget.style.display = 'none';
                }}
              />
              
              {/* Overlay Hover Effect (Solo visible cuando hay imagen o al pasar el mouse) */}
              <div className="absolute inset-0 bg-gradient-to-t from-ludes-brown/90 via-ludes-brown/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 z-20 flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0">
                  <div className="flex items-center space-x-2 mb-2 text-ludes-yellow">
                    {img.icon}
                    <span className="text-xs font-bold uppercase tracking-widest">{img.location}</span>
                  </div>
                  <h3 className="text-2xl font-bold font-display text-white mb-3">{img.title}</h3>
                  <p className="text-sm text-gray-100 leading-relaxed border-l-2 border-ludes-orange pl-3">
                    {img.description}
                  </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
            <p className="text-sm text-gray-400 bg-gray-50 inline-block px-4 py-2 rounded-full border border-gray-100">
                <span className="text-ludes-orange font-bold">*</span> Las imágenes corresponden a actividades reales del proyecto 2025.
            </p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;