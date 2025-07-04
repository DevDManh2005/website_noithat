import { BsCart3, BsEyeFill } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa6";
import { useCart } from "@/context/CartContext";
import { useNavigate } from "react-router-dom";

interface Product {
    id: number;
    name: string;
    price: string;
    image: string;
    badge?: string;
    category: string;
}

interface ProductCardProps {
    product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
    const { addToCart, addToFavorite, favorites } = useCart();
    const navigate = useNavigate();

    const handleAddToCart = () => {
        addToCart(product);
        alert(`Đã thêm ${product.name} vào giỏ hàng!`);
    };

    const handleAddToFavorite = () => {
        if (favorites.some((item) => item.id === product.id)) {
            alert(`${product.name} đã có trong danh sách yêu thích!`);
            return;
        }
        addToFavorite(product);
        alert(`Đã thêm ${product.name} vào danh sách yêu thích!`);
    };

    const handleViewDetail = () => {
        navigate(`/product/${product.id}`);
    };

    return (
        <div className="group relative border border-gray-200 hover:shadow-lg rounded overflow-hidden bg-white transition-shadow">
            {product.badge && (
                <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-[2px] rounded-sm z-10">
                    {product.badge}
                </span>
            )}
            <img
                src={product.image || undefined}
                alt={product.name}
                className="w-full h-[170px] object-contain border-b border-gray-200"
            />
            <div className="absolute top-0 right-0 w-full h-full bg-black/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute top-2 right-2 flex flex-col gap-2 translate-x-10 group-hover:translate-x-0 transition-transform duration-500">
                    <button
                        className="bg-white p-2 rounded-full shadow hover:bg-[#106f85] hover:text-white transition"
                        title="Thêm vào giỏ hàng"
                        onClick={handleAddToCart}
                    >
                        <BsCart3 size={18} />
                    </button>
                    <button
                        className="bg-white p-2 rounded-full shadow hover:bg-[#ff5b00] hover:text-white transition"
                        title="Yêu thích"
                        onClick={handleAddToFavorite}
                    >
                        <FaRegHeart size={18} />
                    </button>
                    <button
                        className="bg-white p-2 rounded-full shadow hover:bg-[#333] hover:text-white transition"
                        title="Xem chi tiết"
                        onClick={handleViewDetail}
                    >
                        <BsEyeFill size={18} />
                    </button>
                </div>
            </div>
            <div className="p-3 text-center">
                <h3 className="text-sm font-medium min-h-[40px]">{product.name}</h3>
                <p className="text-[#cc0000] font-semibold text-base mt-1">{product.price}</p>
            </div>
        </div>
    );
};

export default ProductCard;