import React from 'react';
import { Heart } from 'lucide-react';
import type { Product } from '../../types/Product';

type Props = {
  product: Product;
  onAddFavorite: (id: number) => void;
};

const ProductBox: React.FC<Props> = ({ product, onAddFavorite }) => {
  return (
    <div className="border rounded-lg p-3 shadow-sm hover:shadow-lg transition duration-300">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-56 object-cover rounded"
        />
        <button
          className="absolute top-2 right-2 bg-white p-1 rounded-full shadow hover:text-red-500"
          onClick={() => onAddFavorite(product.id)}
        >
          <Heart size={20} />
        </button>
      </div>

      <div className="mt-3">
        <h3 className="text-base font-medium">{product.name}</h3>
        <p className="text-red-600 font-semibold">{product.price.toLocaleString()}₫</p>
      </div>
    </div>
  );
};

export default ProductBox;
