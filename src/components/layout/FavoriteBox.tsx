import React from 'react';
import { X } from 'lucide-react';
import type { Product } from '../../types/Product';

type Props = {
  favorites: Product[];
  onRemoveFavorite: (id: number) => void;
};

const FavoriteBox: React.FC<Props> = ({ favorites, onRemoveFavorite }) => {
  if (favorites.length === 0) {
    return <p className="text-gray-500 italic">Bạn chưa thêm sản phẩm nào vào yêu thích.</p>;
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {favorites.map((product) => (
        <div
          key={product.id}
          className="border p-3 rounded-lg relative shadow hover:shadow-md transition"
        >
          <button
            className="absolute top-2 right-2 text-gray-400 hover:text-red-500"
            onClick={() => onRemoveFavorite(product.id)}
          >
            <X size={20} />
          </button>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-40 object-cover rounded"
          />
          <h4 className="mt-2 font-medium text-sm">{product.name}</h4>
          <p className="text-red-600 font-bold text-sm">{product.price.toLocaleString()}₫</p>
        </div>
      ))}
    </div>
  );
};

export default FavoriteBox;
