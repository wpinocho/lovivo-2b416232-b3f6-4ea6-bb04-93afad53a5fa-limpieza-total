import React, { useState } from 'react';
import Header from '../components/Header';
import Store from '../components/Store';
import Cart from '../components/Cart';
import { CartProvider } from '../contexts/CartContext';

const Index = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-50">
        <Header onCartClick={() => setIsCartOpen(true)} />
        <Store />
        <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      </div>
    </CartProvider>
  );
};

export default Index;