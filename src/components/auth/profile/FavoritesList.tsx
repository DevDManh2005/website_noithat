import { Button } from "antd";
import { FaRegHeart } from "react-icons/fa";
import { useCart } from "@/context/CartContext";
import ProductCard from "@/components/Products/card.products";

const FavoritesList = () => {
    const { favorites, removeFromFavorite } = useCart();

    return (
        <div className="bg-white p-6 rounded border border-gray-200 shadow-sm">
            <h2 className="text-xl font-bold text-[#106f85] mb-4">Danh sách yêu thích</h2>
            {favorites.length === 0 ? (
                <p>Chưa có sản phẩm yêu thích nào.</p>
            ) : (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {favorites.map((product) => (
                        <div key={product.id} className="relative">
                            <ProductCard product={product} />
                            <Button
                                className="absolute top-2 right-2 bg-red-500 text-white"
                                onClick={() => removeFromFavorite(product.id)}
                                icon={<FaRegHeart />}
                                disableRipple
                            >
                                Xóa
                            </Button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default FavoritesList;