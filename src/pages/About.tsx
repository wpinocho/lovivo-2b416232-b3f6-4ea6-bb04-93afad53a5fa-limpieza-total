import React from 'react';
import { Award, Users, Truck, Shield, Star, Clock } from 'lucide-react';
import Layout from '../components/Layout';

const About = () => {
  const stats = [
    { icon: Users, label: 'Clientes Satisfechos', value: '10,000+' },
    { icon: Award, label: 'Años de Experiencia', value: '15+' },
    { icon: Truck, label: 'Entregas Realizadas', value: '50,000+' },
    { icon: Star, label: 'Calificación Promedio', value: '4.9/5' }
  ];

  const values = [
    {
      icon: Shield,
      title: 'Calidad Garantizada',
      description: 'Todos nuestros productos pasan por rigurosos controles de calidad para asegurar su efectividad.'
    },
    {
      icon: Truck,
      title: 'Entrega Rápida',
      description: 'Entregamos tus productos en 24-48 horas en toda la península ibérica.'
    },
    {
      icon: Clock,
      title: 'Atención 24/7',
      description: 'Nuestro equipo de atención al cliente está disponible las 24 horas del día.'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Sobre Nosotros</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Más de 15 años proporcionando soluciones de limpieza de calidad para hogares y empresas
          </p>
        </div>
      </div>

      {/* Story Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Nuestra Historia</h2>
              <p className="text-gray-600 mb-4">
                LimpiezaMax nació en 2008 con una misión simple: hacer que la limpieza sea más fácil, 
                efectiva y accesible para todos. Lo que comenzó como una pequeña empresa familiar se ha 
                convertido en uno de los distribuidores de productos de limpieza más confiables de España.
              </p>
              <p className="text-gray-600 mb-4">
                Nos especializamos en ofrecer productos de alta calidad a precios competitivos, 
                manteniendo siempre nuestro compromiso con la excelencia en el servicio al cliente.
              </p>
              <p className="text-gray-600">
                Hoy en día, servimos a más de 10,000 clientes satisfechos y continuamos creciendo 
                gracias a la confianza que depositan en nosotros día tras día.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop"
                alt="Productos de limpieza"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-lg shadow-lg">
                <div className="text-2xl font-bold">15+</div>
                <div className="text-sm">Años de experiencia</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Nuestros Números Hablan
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="text-blue-600" size={32} />
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Nuestros Valores
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="text-blue-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Nuestro Equipo
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
                alt="Carlos Martínez"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Carlos Martínez</h3>
              <p className="text-blue-600 mb-2">Director General</p>
              <p className="text-gray-600 text-sm">
                Fundador de LimpiezaMax con más de 20 años de experiencia en el sector.
              </p>
            </div>
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face"
                alt="Ana García"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Ana García</h3>
              <p className="text-blue-600 mb-2">Directora de Ventas</p>
              <p className="text-gray-600 text-sm">
                Especialista en atención al cliente y desarrollo de nuevos productos.
              </p>
            </div>
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
                alt="Miguel López"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Miguel López</h3>
              <p className="text-blue-600 mb-2">Jefe de Logística</p>
              <p className="text-gray-600 text-sm">
                Responsable de garantizar entregas rápidas y eficientes a todos nuestros clientes.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">¿Listo para una Limpieza Perfecta?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Únete a miles de clientes satisfechos que confían en LimpiezaMax para sus necesidades de limpieza.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Ver Productos
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default About;