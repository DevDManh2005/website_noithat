import { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductSection from "@/components/Products/section.products";
import TestimonialSlider from "@/components/slider/TestimonialSlider";
import NewsSlider from "@/components/slider/NewsSlider";
import BannerSlider from "@/components/layout/app.banner";

interface Product {
    id: number;
    name: string;
    price: string;
    image: string;
    badge?: string;
    category: string;
}

const productList: Product[] = [
    { id: 1, name: "Kệ tivi phòng khách KTV96", price: "4.750.000đ", image: "https://toanmanh.com/wp-content/uploads/2022/10/ke-tivi-phong-khach-dep.jpg", badge: "Hot", category: "hot" },
    { id: 2, name: "Kệ tivi gỗ tự nhiên KTV91", price: "6.500.000đ", image: "https://toanmanh.com/wp-content/uploads/2022/10/ke-tivi-phong-khach-dep.jpg", badge: "New", category: "featured" },
    { id: 3, name: "Kệ tivi cao cấp", price: "4.550.000đ", image: "https://toanmanh.com/wp-content/uploads/2022/10/ke-tivi-phong-khach-dep.jpg", badge: "-10%", category: "promotion" },
    { id: 4, name: "Kệ Thờ Gỗ Xoan Đào", price: "4.999.000đ", image: "https://toanmanh.com/wp-content/uploads/2022/03/500daa1da5e976d5ccf962a744ec6587-500x500-2-400x400.jpg", badge: "Bán chạy", category: "bestseller" },
    { id: 5, name: "Bàn làm việc gỗ sồi", price: "3.200.000đ", image: "https://toanmanh.com/wp-content/uploads/2022/10/ke-tivi-phong-khach-dep.jpg", badge: "Hot", category: "hot" },
    { id: 6, name: "Ghế sofa vải cao cấp", price: "8.500.000đ", image: "https://toanmanh.com/wp-content/uploads/2022/03/500daa1da5e976d5ccf962a744ec6587-500x500-2-400x400.jpg", badge: "New", category: "featured" },
    { id: 7, name: "Đèn trang trí hiện đại", price: "1.150.000đ", image: "https://toanmanh.com/wp-content/uploads/2022/10/ke-tivi-phong-khach-dep.jpg", badge: "-15%", category: "promotion" },
    { id: 8, name: "Tủ sách gỗ công nghiệp", price: "5.800.000đ", image: "https://toanmanh.com/wp-content/uploads/2022/10/ke-tivi-phong-khach-dep.jpg", badge: "Bán chạy", category: "bestseller" },
    { id: 9, name: "Bàn ăn mặt kính", price: "6.000.000đ", image: "https://toanmanh.com/wp-content/uploads/2022/03/ghe-g11-1-500x500-2-400x400.jpg", badge: "Hot", category: "hot" },
    { id: 10, name: "Ghế ăn gỗ tự nhiên", price: "2.700.000đ", image: "https://toanmanh.com/wp-content/uploads/2022/10/ke-tivi-phong-khach-dep.jpg", badge: "New", category: "featured" },
    { id: 11, name: "Thảm trải sàn cao cấp", price: "1.900.000đ", image: "https://toanmanh.com/wp-content/uploads/2022/03/500daa1da5e976d5ccf962a744ec6587-500x500-2-400x400.jpg", badge: "-5%", category: "promotion" },
    { id: 12, name: "Kệ tivi phòng khách KTV96 (phiên bản lớn)", price: "5.250.000đ", image: "https://toanmanh.com/wp-content/uploads/2022/10/ke-tivi-phong-khach-dep.jpg", badge: "Hot", category: "hot" },
    { id: 13, name: "Bàn trang điểm gỗ", price: "4.800.000đ", image: "https://toanmanh.com/wp-content/uploads/2022/10/ke-tivi-phong-khach-dep.jpg", badge: "New", category: "featured" },
    { id: 14, name: "Ghế làm việc văn phòng", price: "3.100.000đ", image: "https://toanmanh.com/wp-content/uploads/2022/03/500daa1da5e976d5ccf962a744ec6587-500x500-2-400x400.jpg", badge: "Bán chạy", category: "bestseller" },
];

const HomePage = () => {
    const [activeTabHot, setActiveTabHot] = useState<string>("all");
    const [visibleHot, setVisibleHot] = useState<number>(8);
    const [activeTabPromo, setActiveTabPromo] = useState<string>("all");
    const [visiblePromo, setVisiblePromo] = useState<number>(8);

    return (
            <div className="font-sans bg-[#f5f5f5] min-h-screen">
                <BannerSlider />
                <ProductSection
                    title="Sản phẩm hot"
                    products={productList}
                    activeTab={activeTabHot}
                    setActiveTab={setActiveTabHot}
                    visible={visibleHot}
                    setVisible={setVisibleHot}
                />
                <ProductSection
                    title="Sản phẩm khuyến mãi"
                    products={productList}
                    activeTab={activeTabPromo}
                    setActiveTab={setActiveTabPromo}
                    visible={visiblePromo}
                    setVisible={setVisiblePromo}
                />
                <TestimonialSlider />
                <NewsSlider />
            </div>
    );
};

export default HomePage;