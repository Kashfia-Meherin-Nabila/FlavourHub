import MenuSection from '@/components/menusection';
import React from 'react';

const Menu = () => {
    return (
        <div className="min-h-screen bg-base-200 py-10">
      <h1 className="text-4xl font-bold text-center mb-10">
        Our Menu
      </h1>
      <MenuSection />
    </div>
    );
};

export default Menu;