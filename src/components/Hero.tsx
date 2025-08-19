import React from 'react';
import { Sparkles, ShoppingCart, Star } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToProducts = () => {
    const productsSection = document.getElementById('products-section');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start mb-6">
              <Sparkles className="text-yellow-400 mr-2" size={32} />
              <span className="text-yellow-400 font-semibold text-lg">¡Limpieza Premium!</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Tu Hogar
              <span className="block text-yellow-400">Siempre Impecable</span>
            </h1>
            
            <p className="text-xl lg:text-2xl mb-8 text-blue-100 leading-relaxed">
              Descubre nuestra selección premium de productos de limpieza. 
              Calidad profesional para mantener tu hogar brillante y saludable.
            </p>

            {/* Features */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-8">
              <div className="flex items-center">
                <Star className="text-yellow-400 mr-2" size={20} />
                <span className="text-blue-100">Productos Premium</span>
              </div>
              <div className="flex items-center">
                <Sparkles className="text-yellow-400 mr-2" size={20} />
                <span className="text-blue-100">Resultados Garantizados</span>
              </div>
              <div className="flex items-center">
                <ShoppingCart className="text-yellow-400 mr-2" size={20} />
                <span className="text-blue-100">Envío Rápido</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={scrollToProducts}
                className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                Ver Productos
              </button>
              <button
                onClick={scrollToProducts}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-900 transition-all duration-200"
              >
                Ofertas Especiales
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop&crop=center"
                alt="Productos de limpieza premium"
                className="rounded-2xl shadow-2xl w-full h-auto transform hover:scale-105 transition-transform duration-300"
              />
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-yellow-400 text-blue-900 px-4 py-2 rounded-full font-bold shadow-lg animate-bounce">
                ¡Nuevo!
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-green-500 text-white px-4 py-2 rounded-full font-bold shadow-lg">
                Eco-Friendly
              </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-green-400 rounded-2xl transform rotate-6 scale-105 opacity-20"></div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl lg:text-4xl font-bold text-yellow-400 mb-2">500+</div>
            <div className="text-blue-100">Productos</div>
          </div>
          <div>
            <div className="text-3xl lg:text-4xl font-bold text-yellow-400 mb-2">10K+</div>
            <div className="text-blue-100">Clientes Felices</div>
          </div>
          <div>
            <div className="text-3xl lg:text-4xl font-bold text-yellow-400 mb-2">24h</div>
            <div className="text-blue-100">Envío Express</div>
          </div>
          <div>
            <div className="text-3xl lg:text-4xl font-bold text-yellow-400 mb-2">5★</div>
            <div className="text-blue-100">Valoración</div>
          </div>
        </div>
      </div>

      {/* Wave Bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-16 fill-gray-50">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;