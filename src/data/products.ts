import { Product } from '../types/product';

export const products: Product[] = [
  {
    id: '1',
    name: 'Detergente Líquido Premium',
    description: 'Detergente concentrado para ropa, elimina las manchas más difíciles',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=300&h=300&fit=crop',
    category: 'Lavandería',
    inStock: true,
    rating: 4.5
  },
  {
    id: '2',
    name: 'Limpiador Multiusos',
    description: 'Limpiador versátil para todas las superficies del hogar',
    price: 8.50,
    image: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=300&h=300&fit=crop',
    category: 'Limpieza General',
    inStock: true,
    rating: 4.2
  },
  {
    id: '3',
    name: 'Desinfectante Antibacterial',
    description: 'Elimina 99.9% de gérmenes y bacterias',
    price: 15.75,
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=300&fit=crop',
    category: 'Desinfección',
    inStock: true,
    rating: 4.8
  },
  {
    id: '4',
    name: 'Limpiacristales Profesional',
    description: 'Deja los cristales sin rayas ni residuos',
    price: 6.99,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop',
    category: 'Cristales',
    inStock: true,
    rating: 4.3
  },
  {
    id: '5',
    name: 'Suavizante de Telas',
    description: 'Suaviza y perfuma tu ropa con fragancia duradera',
    price: 9.25,
    image: 'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=300&h=300&fit=crop',
    category: 'Lavandería',
    inStock: true,
    rating: 4.6
  },
  {
    id: '6',
    name: 'Limpiador de Baños',
    description: 'Especializado para eliminar cal y jabón del baño',
    price: 11.50,
    image: 'https://images.unsplash.com/photo-1585421514738-01798e348b17?w=300&h=300&fit=crop',
    category: 'Baño',
    inStock: false,
    rating: 4.4
  },
  {
    id: '7',
    name: 'Desengrasante de Cocina',
    description: 'Elimina grasa y residuos de cocina eficazmente',
    price: 13.99,
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=300&fit=crop',
    category: 'Cocina',
    inStock: true,
    rating: 4.7
  },
  {
    id: '8',
    name: 'Ambientador Spray',
    description: 'Neutraliza olores y deja un aroma fresco',
    price: 7.75,
    image: 'https://images.unsplash.com/photo-1631540522556-206b2d2c9ad5?w=300&h=300&fit=crop',
    category: 'Ambientadores',
    inStock: true,
    rating: 4.1
  }
];

export const categories = [
  'Todos',
  'Lavandería',
  'Limpieza General',
  'Desinfección',
  'Cristales',
  'Baño',
  'Cocina',
  'Ambientadores'
];