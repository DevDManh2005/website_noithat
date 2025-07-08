import React, { useState, useEffect } from 'react';

// Định nghĩa kiểu dữ liệu cho một sản phẩm
interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  isPopular?: boolean;
  discountPercentage?: number;
}

// Dữ liệu FavoriteList (được chuyển từ Favorite sang Product)
const FavoriteList: Product[] = [
  { id: 1, name: "Kệ tivi phòng khách KTV96", price: 4750000, image: "https://toanmanh.com/wp-content/uploads/2022/10/ke-tivi-phong-khach-dep.jpg", isPopular: true, category: "hot" },
  { id: 7, name: "Đèn trang trí hiện đại", price: 1150000, image: "https://toanmanh.com/wp-content/uploads/2022/10/ke-tivi-phong-khach-dep.jpg", discountPercentage: 15, category: "promotion" },
  { id: 8, name: "Tủ sách gỗ công nghiệp", price: 5800000, image: "https://toanmanh.com/wp-content/uploads/2022/10/ke-tivi-phong-khach-dep.jpg", isPopular: true, category: "bestseller" },
  { id: 9, name: "Bàn ăn mặt kính", price: 6000000, image: "https://toanmanh.com/wp-content/uploads/2022/03/ghe-g11-1-500x500-2-400x400.jpg", isPopular: true, category: "hot" },
  { id: 12, name: "Kệ tivi phòng khách KTV96 (phiên bản lớn)", price: 5250000, image: "https://toanmanh.com/wp-content/uploads/2022/10/ke-tivi-phong-khach-dep.jpg", isPopular: true, category: "hot" },
  { id: 13, name: "Bàn trang điểm gỗ", price: 4800000, image: "https://toanmanh.com/wp-content/uploads/2022/10/ke-tivi-phong-khach-dep.jpg", isPopular: false, category: "featured" },
  { id: 14, name: "Ghế làm việc văn phòng", price: 3100000, image: "https://toanmanh.com/wp-content/uploads/2022/03/500daa1da5e976d5ccf962a744ec6587-500x500-2-400x400.jpg", isPopular: true, category: "bestseller" },
];

const Wishlist: React.FC = () => {
  const [wishlistItems, setWishlistItems] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [displayedWishlistItems, setDisplayedWishlistItems] = useState<Product[]>([]);

  // Load wishlist từ localStorage hoặc sử dụng FavoriteList khi component mount
  useEffect(() => {
    try {
      const storedWishlist = localStorage.getItem('favorites');
      if (storedWishlist) {
        const parsedWishlist: Product[] = JSON.parse(storedWishlist);
        setWishlistItems(parsedWishlist);
        console.log("Wishlist đã được tải từ localStorage:", parsedWishlist);
      } else {
        // Nếu không có dữ liệu trong localStorage, sử dụng FavoriteList
        setWishlistItems(FavoriteList);
        console.log("Khởi tạo wishlist với FavoriteList:", FavoriteList);
      }
    } catch (error) {
      console.error("Lỗi khi đọc wishlist từ localStorage:", error);
      setWishlistItems(FavoriteList); // Fallback to FavoriteList if error
    }
  }, []);

  // Save wishlist vào localStorage mỗi khi wishlistItems thay đổi
  useEffect(() => {
    try {
      localStorage.setItem('wishlist', JSON.stringify(wishlistItems));
      console.log("Wishlist đã được lưu vào localStorage:", wishlistItems);
    } catch (error) {
      console.error("Lỗi khi lưu wishlist vào localStorage:", error);
    }
  }, [wishlistItems]);

  // Effect để lọc danh sách sản phẩm yêu thích
  useEffect(() => {
    const filteredResults = wishlistItems.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setDisplayedWishlistItems(filteredResults);
  }, [wishlistItems, searchTerm]);

  // Hàm để xóa một sản phẩm khỏi danh sách yêu thích
  const handleRemoveFromWishlist = (productId: number) => {
    setWishlistItems(prevItems => {
      const newItems = prevItems.filter(item => item.id !== productId);
      return newItems;
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Sản phẩm yêu thích của bạn</h2>

      <div className="mb-6">
        <input
          type="text"
          placeholder="Tìm kiếm trong sản phẩm yêu thích..."
          className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
          value={searchTerm}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
        />
      </div>

      {displayedWishlistItems.length === 0 ? (
        <p className="text-center text-gray-500 text-lg py-10">
          {searchTerm ? `Không tìm thấy sản phẩm nào khớp với "${searchTerm}" trong danh sách yêu thích của bạn.` : 'Danh sách yêu thích của bạn đang trống. Hãy thêm một vài sản phẩm nhé!'}
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {displayedWishlistItems.map(product => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl relative">
              {(product.isPopular || product.discountPercentage) && (
                <div className="absolute top-2 left-2 flex gap-2">
                  {product.isPopular && (
                    <span className="bg-green-500 text-white text-xs font-semibold px-2 py-0.5 rounded-full">
                      Phổ biến
                    </span>
                  )}
                  {product.discountPercentage && (
                    <span className="bg-red-500 text-white text-xs font-semibold px-2 py-0.5 rounded-full">
                      -{product.discountPercentage}%
                    </span>
                  )}
                </div>
              )}

              <div className="absolute top-2 right-2">
                <button
                  onClick={() => handleRemoveFromWishlist(product.id)}
                  className="text-gray-400 hover:text-red-500 transition duration-200 bg-white rounded-full p-1 shadow-md"
                  title="Xóa khỏi danh sách yêu thích"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-1 leading-tight">{product.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{product.category}</p>
                <p className="text-xl font-bold text-blue-600">
                  {product.price.toLocaleString('vi-VN')} VND
                </p>
                <button className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200">
                  Thêm vào giỏ hàng
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;