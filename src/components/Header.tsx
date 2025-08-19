import React, { useState } from 'react';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { Link, useLocation } from 'react-router-dom';

interface HeaderProps {
  onCartClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onCartClick }) => {
  const { getItemCount } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const itemCount = getItemCount();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to="/" className="text-2xl font-bold hover:text-blue-200 transition-colors">
              LimpiezaMax
            </Link>
            <nav className="hidden md:flex space-x-6">
              <Link 
                to="/" 
                className={`hover:text-blue-200 transition-colors ${
                  isActive('/') ? 'text-blue-200 border-b-2 border-blue-200' : ''
                }`}
              >
                Inicio
              </Link>
              <Link 
                to="/about" 
                className={`hover:text-blue-200 transition-colors ${
                  isActive('/about') ? 'text-blue-200 border-b-2 border-blue-200' : ''
                }`}
              >
                Sobre Nosotros
              </Link>
              <a href="#productos" className="hover:text-blue-200 transition-colors">Productos</a>
              <a href="#ofertas" className="hover:text-blue-200 transition-colors">Ofertas</a>
              <a href="#contacto" className="hover:text-blue-200 transition-colors">Contacto</a>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={onCartClick}
              className="relative p-2 hover:bg-blue-700 rounded-lg transition-colors"
            >
              <ShoppingCart size={24} />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>

            <button
              className="md:hidden p-2 hover:bg-blue-700 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-blue-500">
            <div className="flex flex-col space-y-2 pt-4">
              <Link 
                to="/" 
                className={`hover:text-blue-200 transition-colors py-2 ${
                  isActive('/') ? 'text-blue-200' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </Link>
              <Link 
                to="/about" 
                className={`hover:text-blue-200 transition-colors py-2 ${
                  isActive('/about') ? 'text-blue-200' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre Nosotros
              </Link>
              <a href="#productos" className="hover:text-blue-200 transition-colors py-2">Productos</a>
              <a href="#ofertas" className="hover:text-blue-200 transition-colors py-2">Ofertas</a>
              <a href="#contacto" className="hover:text-blue-200 transition-colors py-2">Contacto</a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;