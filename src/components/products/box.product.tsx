// src/ProductBox.tsx
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

// Dữ liệu sản phẩm giả lập
const productsData: Product[] = [
  { id: 1, name: 'Bộ bàn ghế ăn gỗ Cao Cấp 6 ghế', category: 'Nội thất phòng ăn', price: 5471000, image: 'https://via.placeholder.com/250/FF5733/FFFFFF?text=BG+An+Go1' },
  { id: 2, name: 'Bộ bàn ghế ăn gỗ Sồi 6 ghế', category: 'Nội thất phòng ăn', price: 3999000, image: 'https://via.placeholder.com/250/33FF57/FFFFFF?text=BG+An+Go2', isPopular: true, discountPercentage: 10 },
  { id: 3, name: 'Bộ bàn ghế ăn gỗ Xoan Đào 6 ghế', category: 'Nội thất phòng ăn', price: 7200000, image: 'https://via.placeholder.com/250/5733FF/FFFFFF?text=BG+An+Go3', isPopular: true },
  { id: 4, name: 'Bộ bàn ghế ăn gỗ 6 ghế sang trọng', category: 'Nội thất phòng ăn', price: 8642000, image: 'https://via.placeholder.com/250/FF33CC/FFFFFF?text=BG+An+Go4' },
  { id: 5, name: 'Bộ bàn ghế ăn gỗ Sồi 6 ghế (Mới)', category: 'Nội thất phòng ăn', price: 7459000, image: 'https://via.placeholder.com/250/33CCFF/FFFFFF?text=BG+An+Go5' },
  { id: 6, name: 'Bộ bàn ghế ăn gỗ Sồi 6 ghế (Phiên bản 2)', category: 'Nội thất phòng ăn', price: 7856000, image: 'https://via.placeholder.com/250/CC33FF/FFFFFF?text=BG+An+Go6', discountPercentage: 5 },
  { id: 7, name: 'Bộ bàn ghế ăn gỗ Xoan Đào 6 ghế (Đặc biệt)', category: 'Nội thất phòng ăn', price: 7594000, image: 'https://via.placeholder.com/250/33FFCC/FFFFFF?text=BG+An+Go7' },
  { id: 8, name: 'Bộ bàn ghế ăn gỗ Xoan Đào 6 ghế (Phiên bản mới)', category: 'Nội thất phòng ăn', price: 6923800, image: 'https://via.placeholder.com/250/FFCC33/FFFFFF?text=BG+An+Go8', isPopular: true },
  { id: 9, name: 'Bộ bàn ghế ăn tròn xoay', category: 'Nội thất phòng ăn', price: 8672000, image: 'https://via.placeholder.com/250/CCFF33/FFFFFF?text=BG+An+Tron' },
  { id: 10, name: 'Bộ Drap Cotton Hàn Quốc', category: 'Nội thất phòng ngủ', price: 562000, image: 'https://via.placeholder.com/250/33CCEE/FFFFFF?text=Drap' },
  { id: 11, name: 'Ghế Sofa SF01', category: 'Phòng khách', price: 19999000, image: 'https://via.placeholder.com/250/FF9933/FFFFFF?text=Sofa1' },
  { id: 12, name: 'Ghế Sofa SF02', category: 'Phòng khách', price: 15968000, image: 'https://via.placeholder.com/250/9933FF/FFFFFF?text=Sofa2' },
];

function ProductBox() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(productsData);
  const [sortBy, setSortBy] = useState<string>('default');
  const [wishlist, setWishlist] = useState<Product[]>([]); // State để quản lý wishlist

  // Load wishlist từ localStorage khi component mount
  useEffect(() => {
    try {
      const storedWishlist = localStorage.getItem('wishlist');
      if (storedWishlist) {
        const parsedWishlist: Product[] = JSON.parse(storedWishlist);
        setWishlist(parsedWishlist);
        console.log("Wishlist đã được tải từ localStorage:", parsedWishlist);
      } else {
        console.log("Không tìm thấy wishlist trong localStorage. Khởi tạo rỗng.");
      }
    } catch (error) {
      console.error("Lỗi khi đọc wishlist từ localStorage:", error);
      setWishlist([]); // Đặt lại rỗng nếu có lỗi đọc
    }
  }, []); // [] đảm bảo chỉ chạy một lần khi component được mount

  // Save wishlist vào localStorage mỗi khi wishlist thay đổi
  useEffect(() => {
    try {
      localStorage.setItem('wishlist', JSON.stringify(wishlist));
      console.log("Wishlist đã được lưu vào localStorage:", wishlist);
    } catch (error) {
      console.error("Lỗi khi lưu wishlist vào localStorage:", error);
    }
  }, [wishlist]); // [wishlist] đảm bảo chạy mỗi khi wishlist thay đổi

  // Tìm giá min/max từ dữ liệu sản phẩm để đặt giới hạn cho thanh trượt
  const minPriceGlobal = Math.min(...productsData.map(p => p.price));
  const maxPriceGlobal = Math.max(...productsData.map(p => p.price));

  const [minPriceFilter, setMinPriceFilter] = useState<number>(minPriceGlobal);
  const [maxPriceFilter, setMaxPriceFilter] = useState<number>(maxPriceGlobal);

  // Cập nhật giá trị lọc ban đầu khi component mount (nếu cần thiết, có thể bỏ qua nếu đã set ở trên)
  useEffect(() => {
    // Đảm bảo giá trị ban đầu của bộ lọc giá khớp với phạm vi toàn cầu
    setMinPriceFilter(minPriceGlobal);
    setMaxPriceFilter(maxPriceGlobal);
  }, []);

  useEffect(() => {
    let results: Product[] = productsData.filter(product =>
      (product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (product.price >= minPriceFilter && product.price <= maxPriceFilter)
    );

    if (sortBy === 'price-asc') {
      results.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      results.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'newest') {
      results.sort((a, b) => b.id - a.id);
    } else if (sortBy === 'popular') {
        results.sort((a, b) => (b.isPopular ? 1 : 0) - (a.isPopular ? 1 : 0));
    }

    setFilteredProducts(results);
  }, [searchTerm, sortBy, minPriceFilter, maxPriceFilter]);

  const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value <= maxPriceFilter) {
      setMinPriceFilter(value);
    } else {
      setMinPriceFilter(maxPriceFilter);
    }
  };

  const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value >= minPriceFilter) {
      setMaxPriceFilter(value);
    } else {
      setMaxPriceFilter(minPriceFilter);
    }
  };

  // Hàm thêm/xóa sản phẩm vào wishlist
  const handleToggleWishlist = (product: Product) => {
    setWishlist(prevWishlist => {
      const isProductInWishlistNow = prevWishlist.some(item => item.id === product.id);
      let newWishlist;

      if (isProductInWishlistNow) {
        // Nếu đã có, xóa khỏi wishlist
        newWishlist = prevWishlist.filter(item => item.id !== product.id);
        console.log(`Đã xóa sản phẩm ID ${product.id} khỏi wishlist.`, newWishlist);
      } else {
        // Nếu chưa có, thêm vào wishlist
        newWishlist = [...prevWishlist, product];
        console.log(`Đã thêm sản phẩm ID ${product.id} vào wishlist.`, newWishlist);
      }
      return newWishlist;
    });
  };

  // Hàm kiểm tra xem sản phẩm có trong wishlist không
  const isProductInWishlist = (productId: number) => {
    return wishlist.some(item => item.id === productId);
  };


  return (
    <div className="container mx-auto p-4 flex flex-col lg:flex-row">
      {/* Sidebar - Cột bên trái */}
      <aside className="w-full lg:w-1/4 pr-4 mb-8 lg:mb-0">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-gray-800 mb-4">DANH MỤC SẢN PHẨM</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-blue-600 font-semibold hover:underline flex justify-between items-center">
                Sản phẩm
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </a>
              {/* Sub-categories */}
              <ul className="ml-4 mt-2 space-y-1">
                <li><a href="#" className="text-gray-600 hover:text-blue-600 hover:underline">Sản phẩm nổi bật</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600 hover:underline">Sản phẩm khuyến mãi</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600 hover:underline">Nội thất văn phòng</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600 hover:underline">Nội thất gia đình</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600 hover:underline">Phòng bếp</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600 hover:underline">Đồ trang trí</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600 hover:underline">Sofa</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600 hover:underline">Đồ dùng văn phòng</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600 hover:underline">Dụng cụ nhà bếp</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600 hover:underline">Phòng khách</a></li>
              </ul>
            </li>
          </ul>

          {/* Lọc theo giá */}
          <div className="mt-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex justify-between items-center">
              Giá
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" /></svg>
            </h3>
            <div className="bg-gray-100 p-4 rounded-md text-center text-gray-600">
                <div className="mb-4">
                  <input
                      type="range"
                      min={minPriceGlobal}
                      max={maxPriceGlobal}
                      value={minPriceFilter}
                      onChange={handleMinPriceChange}
                      className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer accent-blue-500"
                  />
                  <p className="text-sm mt-2">Giá tối thiểu: <span className="font-semibold text-gray-800">{minPriceFilter.toLocaleString('vi-VN')} VND</span></p>
                </div>
                <div>
                  <input
                      type="range"
                      min={minPriceGlobal}
                      max={maxPriceGlobal}
                      value={maxPriceFilter}
                      onChange={handleMaxPriceChange}
                      className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer accent-blue-500"
                  />
                  <p className="text-sm mt-2">Giá tối đa: <span className="font-semibold text-gray-800">{maxPriceFilter.toLocaleString('vi-VN')} VND</span></p>
                </div>
                <p className="mt-4 text-sm text-gray-700">
                  Khoảng giá: <span className="font-bold">{minPriceFilter.toLocaleString('vi-VN')}Đ</span> – <span className="font-bold">{maxPriceFilter.toLocaleString('vi-VN')}Đ</span>
                </p>
            </div>
          </div>
        </div>
      </aside>

      {/* Nội dung chính - Cột bên phải */}
      <main className="w-full lg:w-3/4">
        {/* Thanh tìm kiếm và sắp xếp */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
          <input
            type="text"
            placeholder="Tìm kiếm sản phẩm hoặc danh mục..."
            className="w-full sm:w-2/3 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
            value={searchTerm}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
          />
          <div className="relative w-full sm:w-1/3">
            <select
              className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-blue-500 shadow-sm"
              value={sortBy}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSortBy(e.target.value)}
            >
              <option value="default">Sắp xếp mặc định</option>
              <option value="newest">Mới nhất</option>
              <option value="price-asc">Giá: Tăng dần</option>
              <option value="price-desc">Giá: Giảm dần</option>
              <option value="popular">Phổ biến</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
        </div>

        {/* Danh sách sản phẩm */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product: Product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl relative">
                {/* Nhãn "Phổ biến" hoặc "%" */}
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

                {/* Biểu tượng yêu thích */}
                <div className="absolute top-2 right-2">
                  <button
                    onClick={() => handleToggleWishlist(product)}
                    className={`text-gray-400 hover:text-red-500 transition duration-200 ${isProductInWishlist(product.id) ? 'text-red-500' : ''}`}
                    title={isProductInWishlist(product.id) ? "Xóa khỏi yêu thích" : "Thêm vào yêu thích"}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill={isProductInWishlist(product.id) ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 22.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
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
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500 text-lg py-10">Không tìm thấy sản phẩm nào.</p>
          )}
        </div>
      </main>
    </div>
  );
}

export default ProductBox;