// src/components/layout/appmanh.tsx

import React, { useState } from 'react';
import ProductBox from './ProductBox.tsx';
import FavoriteBox from './FavoriteBox.tsx';
import type { Product } from '../../types/Product.ts';

const DUMMY_PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Sofa Beige R5',
    price: 139000000,
    image: '/images/sofa.jpg',
  },
  {
    id: 2,
    name: 'Bàn ăn mặt đá',
    price: 8500000,
    image: '/images/ban.jpg',
  },
  {
    id: 3,
    name: 'Ghế thư giãn',
    price: 4500000,
    image: '/images/ghe.jpg',
  },
];

const AppManh: React.FC = () => {
  const [favorites, setFavorites] = useState<Product[]>([]);

  const handleAddFavorite = (id: number) => {
    const product = DUMMY_PRODUCTS.find((p) => p.id === id);
    if (product && !favorites.some((f) => f.id === id)) {
      setFavorites([...favorites, product]);
    }
  };

  const handleRemoveFavorite = (id: number) => {
    setFavorites(favorites.filter((p) => p.id !== id));
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Sản phẩm</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {DUMMY_PRODUCTS.map((product) => (
          <ProductBox key={product.id} product={product} onAddFavorite={handleAddFavorite} />
        ))}
      </div>

      <h2 className="text-xl font-bold mt-8 mb-4">Sản phẩm yêu thích</h2>
      <FavoriteBox favorites={favorites} onRemoveFavorite={handleRemoveFavorite} />
    </div>
  );
};

export default AppManh;
