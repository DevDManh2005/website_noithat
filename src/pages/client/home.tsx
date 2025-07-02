import { useRef, useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { BsCart3, BsEye, BsEyeFill } from "react-icons/bs";
import { FaChevronDown, FaChevronLeft, FaChevronRight, FaRegCircleUser, FaRegHeart } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrFormNext } from "react-icons/gr";
import { Button, Form, Input, Badge, Popover, Dropdown, Tabs } from "antd";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const productList = [
    {
        name: "Kệ tivi phòng khách KTV96",
        price: "4.750.000đ",
        image: "https://toanmanh.com/wp-content/uploads/2022/10/ke-tivi-phong-khach-dep.jpg",
        badge: "Hot",
        category: "hot"
    },
    {
        name: "Kệ tivi gỗ tự nhiên KTV91",
        price: "6.500.000đ",
        image: "https://toanmanh.com/wp-content/uploads/2022/10/ke-tivi-phong-khach-dep.jpg",
        badge: "New",
        category: "featured"
    },
    {
        name: "Kệ tivi cao cấp",
        price: "4.550.000đ",
        image: "https://toanmanh.com/wp-content/uploads/2022/10/ke-tivi-phong-khach-dep.jpg",
        badge: "-10%",
        category: "promotion"
    },
    {
        name: "Kệ Thờ Gỗ Xoan Đào",
        price: "4.999.000đ",
        image: "https://toanmanh.com/wp-content/uploads/2022/03/500daa1da5e976d5ccf962a744ec6587-500x500-2-400x400.jpg",
        badge: "Bán chạy",
        category: "bestseller"
    },
    {
        name: "Bàn làm việc gỗ sồi",
        price: "3.200.000đ",
        image: "https://toanmanh.com/wp-content/uploads/2022/10/ke-tivi-phong-khach-dep.jpg",
        badge: "Hot",
        category: "hot"
    },
    {
        name: "Ghế sofa vải cao cấp",
        price: "8.500.000đ",
        image: "https://toanmanh.com/wp-content/uploads/2022/03/500daa1da5e976d5ccf962a744ec6587-500x500-2-400x400.jpg",

        badge: "New",
        category: "featured"
    },
    {
        name: "Đèn trang trí hiện đại",
        price: "1.150.000đ",
        image: "https://toanmanh.com/wp-content/uploads/2022/10/ke-tivi-phong-khach-dep.jpg",
        badge: "-15%",
        category: "promotion"
    },
    {
        name: "Tủ sách gỗ công nghiệp",
        price: "5.800.000đ",
        image: "https://toanmanh.com/wp-content/uploads/2022/10/ke-tivi-phong-khach-dep.jpg",

        badge: "Bán chạy",
        category: "bestseller"
    },
    {
        name: "Bàn ăn mặt kính",
        price: "6.000.000đ",
        image: "https://toanmanh.com/wp-content/uploads/2022/03/ghe-g11-1-500x500-2-400x400.jpg",

        badge: "Hot",
        category: "hot"
    },
    {
        name: "Ghế ăn gỗ tự nhiên",
        price: "2.700.000đ",
        image: "https://toanmanh.com/wp-content/uploads/2022/10/ke-tivi-phong-khach-dep.jpg",

        badge: "New",
        category: "featured"
    },
    {
        name: "Thảm trải sàn cao cấp",
        price: "1.900.000đ",
        image: "https://toanmanh.com/wp-content/uploads/2022/03/500daa1da5e976d5ccf962a744ec6587-500x500-2-400x400.jpg",

        badge: "-5%",
        category: "promotion"
    },
    {
        name: "Kệ tivi phòng khách KTV96 (phiên bản lớn)",
        price: "5.250.000đ",
        image: "https://toanmanh.com/wp-content/uploads/2022/10/ke-tivi-phong-khach-dep.jpg",
        badge: "Hot",
        category: "hot"
    },
    {
        name: "Bàn trang điểm gỗ",
        price: "4.800.000đ",
        image: "https://toanmanh.com/wp-content/uploads/2022/10/ke-tivi-phong-khach-dep.jpg",

        badge: "New",
        category: "featured"
    },
    {
        name: "Ghế làm việc văn phòng",
        price: "3.100.000đ",
        image: "https://toanmanh.com/wp-content/uploads/2022/03/500daa1da5e976d5ccf962a744ec6587-500x500-2-400x400.jpg",


        badge: "Bán chạy",
        category: "bestseller"
    }
];


const testimonials = [
    {
        name: "Thanh Thương",
        title: "Sinh viên Ngoại Thương",
        message: "Lần đầu tiên mua tủ bên này rất ưng ý, đóng hàng chắc chắn, nhân viên chăm sóc nhẹ nhàng. Sẽ ủng hộ tiếp!",
        avatar: "/images/image.png",
    },
    {
        name: "Anh Tuấn",
        title: "Kỹ sư xây dựng",
        message: "Sản phẩm đẹp, giá hợp lý. Giao hàng nhanh, sẽ giới thiệu bạn bè.",
        avatar: "/images/image.png",

    },
    {
        name: "Minh Hằng",
        title: "Nhân viên văn phòng",
        message: "Rất thích phong cách phục vụ, tư vấn tận tình. Tủ đẹp hơn trong hình!",
        avatar: "/images/image.png",

    },
];
const CustomPrevArrow = ({ onClick }) => (
    <div
        onClick={onClick}
        className="absolute left-[-20px] top-[40%] z-10 bg-white border shadow w-10 h-10 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-100"
    >
        <FaChevronLeft className="text-[#106f85] text-lg" />
    </div>
);

const CustomNextArrow = ({ onClick }) => (
    <div
        onClick={onClick}
        className="absolute right-[-20px] top-[40%] z-10 bg-white border shadow w-10 h-10 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-100"
    >
        <FaChevronRight className="text-[#106f85] text-lg" />
    </div>
);

const HomePage = () => {
    const formRef = useRef(null);

    // --- State và hàm cho phần Sản phẩm Hot ---
    const [activeTabHot, setActiveTabHot] = useState("all");
    const [visibleHot, setVisibleHot] = useState(8);

    // --- State và hàm cho phần Sản phẩm Khuyến mãi ---
    const [activeTabPromo, setActiveTabPromo] = useState("all");
    const [visiblePromo, setVisiblePromo] = useState(8);

    const onFinish = (values) => {
        console.log("Search:", values);
    };

    // Hàm lọc sản phẩm cho hot
    const filteredHot = activeTabHot === "all"
        ? productList.filter(p => p.category === "hot" || p.category === "featured" || p.category === "bestseller")
        : productList.filter(p => p.category === activeTabHot);

    // Hàm lọc sản phẩm cho khuyến mãi
    const filteredPromo = activeTabPromo === "all"
        ? productList.filter(p => p.category === "promotion")
        : productList.filter(p => p.category === activeTabPromo);

    const handleViewMoreHot = () => setVisibleHot(prev => prev + 4);
    const handleViewMorePromo = () => setVisiblePromo(prev => prev + 4);

    // Tab style căn giữa và border active
    const tabItemStyle = (isActive) => ({
        cursor: "pointer",
        padding: "8px 16px",
        fontWeight: isActive ? "600" : "500",
        borderBottom: isActive ? "3px solid #106f85" : "3px solid transparent",
        color: isActive ? "#106f85" : "#333",
        textTransform: "uppercase",
        userSelect: "none"
    });
    const sliderSettings = {
        dots: true,
        arrows: true,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <div className="font-sans bg-[#f5f5f5] min-h-screen">

            {/* Sản phẩm Hot */}
            <div className="container mx-auto my-10 bg-white p-6 rounded border border-gray-200 shadow-sm">
                <h2 className="text-xl font-bold text-[#106f85] uppercase text-center mb-6 relative">
                    <div className="w-30 h-[2px] bg-[#106f85] mx-auto mb-2"></div>
                    Sản phẩm hot
                    <div className="w-30 h-[2px] bg-[#106f85] mx-auto mt-2"></div>
                </h2>

                {/* Tab */}
                <div className="flex justify-center gap-6 mb-6 select-none">
                    {["all", "promotion", "featured", "bestseller"].map(key => (
                        <div
                            key={key}
                            onClick={() => {
                                setActiveTabHot(key);
                                setVisibleHot(8); // reset khi đổi tab
                            }}
                            style={tabItemStyle(activeTabHot === key)}
                        >
                            {key === "all" ? "Tất cả" :
                                key === "promotion" ? "Khuyến mãi" :
                                    key === "featured" ? "Nổi bật" :
                                        key === "bestseller" ? "Bán chạy" : key}
                        </div>
                    ))}
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {filteredHot.slice(0, visibleHot).map((p, i) => (
                        <div
                            key={i}
                            className="group relative border border-gray-200 hover:shadow-lg rounded overflow-hidden bg-white transition-shadow"
                        >
                            {p.badge && (
                                <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-[2px] rounded-sm z-10">
                                    {p.badge}
                                </span>
                            )}

                            <img
                                src={p.image}
                                alt={p.name}
                                className="w-full h-[170px] object-contain border-b border-gray-200"
                            />

                            {/* Overlay icon khi hover */}
                            <div className="absolute top-0 right-0 w-full h-full bg-black/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="absolute top-2 right-2 flex flex-col gap-2 translate-x-10 group-hover:translate-x-0 transition-transform duration-500">
                                    <button
                                        className="bg-white p-2 rounded-full shadow hover:bg-[#106f85] hover:text-white transition"
                                        title="Thêm vào giỏ hàng"
                                    >
                                        <BsCart3 size={18} />
                                    </button>
                                    <button
                                        className="bg-white p-2 rounded-full shadow hover:bg-[#ff5b00] hover:text-white transition"
                                        title="Yêu thích"
                                    >
                                        <FaRegHeart size={18} />
                                    </button>
                                    <button
                                        className="bg-white p-2 rounded-full shadow hover:bg-[#333] hover:text-white transition"
                                        title="Xem chi tiết"
                                    >
                                        <BsEyeFill size={18} />
                                    </button>
                                </div>
                            </div>

                            <div className="p-3 text-center">
                                <h3 className="text-sm font-medium min-h-[40px]">{p.name}</h3>
                                <p className="text-[#cc0000] font-semibold text-base mt-1">{p.price}</p>
                            </div>
                        </div>

                    ))}
                </div>

                <div className="text-center mt-6 flex justify-center gap-4 flex-wrap">
                    {visibleHot < filteredHot.length && (
                        <Button
                            className="bg-[#106f85] text-white"
                            onClick={handleViewMoreHot}
                        >
                            Xem thêm sản phẩm
                        </Button>
                    )}

                    {visibleHot > 8 && (
                        <Button
                            className="bg-gray-500 text-white"
                            onClick={() => setVisibleHot(8)}
                        >
                            Ẩn bớt
                        </Button>
                    )}
                </div>

            </div>

            {/* Sản phẩm Khuyến mãi */}
            <div className="container mx-auto my-10 bg-white p-6 rounded border border-gray-200 shadow-sm">

                <h2 className="text-xl font-bold text-[#106f85] uppercase text-center mb-6 relative">
                    <div className="w-30 h-[2px] bg-[#106f85] mx-auto mb-2"></div>
                    Sản phẩm khuyến mãi
                    <div className="w-30 h-[2px] bg-[#106f85] mx-auto mt-2"></div>
                </h2>

                {/* Tab */}
                <div className="flex justify-center gap-6 mb-6 select-none">
                    {["all", "promotion", "featured", "bestseller"].map(key => (
                        <div
                            key={key}
                            onClick={() => {
                                setActiveTabPromo(key);
                                setVisiblePromo(8); // reset khi đổi tab
                            }}
                            style={tabItemStyle(activeTabPromo === key)}
                        >
                            {key === "all" ? "Tất cả" :
                                key === "promotion" ? "Khuyến mãi" :
                                    key === "featured" ? "Nổi bật" :
                                        key === "bestseller" ? "Bán chạy" : key}
                        </div>
                    ))}
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {filteredPromo.slice(0, visiblePromo).map((p, i) => (
                        <div
                            key={i}
                            className="group relative border border-gray-200  hover:shadow-lg rounded overflow-hidden bg-white transition-shadow"
                        >
                            {p.badge && (
                                <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-[2px] rounded-sm z-10">
                                    {p.badge}
                                </span>
                            )}

                            <img
                                src={p.image}
                                alt={p.name}
                                className="w-full h-[170px] object-contain border-b border-gray-200"
                            />

                            {/* Overlay icon khi hover */}
                            <div className="absolute top-0 right-0 w-full h-full bg-black/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="absolute top-2 right-2 flex flex-col gap-2 translate-x-10 group-hover:translate-x-0 transition-transform duration-500">
                                    <button
                                        className="bg-white p-2 rounded-full shadow hover:bg-[#106f85] hover:text-white transition"
                                        title="Thêm vào giỏ hàng"
                                    >
                                        <BsCart3 size={18} />
                                    </button>
                                    <button
                                        className="bg-white p-2 rounded-full shadow hover:bg-[#ff5b00] hover:text-white transition"
                                        title="Yêu thích"
                                    >
                                        <FaRegHeart size={18} />
                                    </button>
                                    <button
                                        className="bg-white p-2 rounded-full shadow hover:bg-[#333] hover:text-white transition"
                                        title="Xem chi tiết"
                                    >
                                        <BsEyeFill size={18} />
                                    </button>
                                </div>
                            </div>

                            <div className="p-3 text-center">
                                <h3 className="text-sm font-medium min-h-[40px]">{p.name}</h3>
                                <p className="text-[#cc0000] font-semibold text-base mt-1">{p.price}</p>
                            </div>
                        </div>

                    ))}
                </div>

                <div className="text-center mt-6 flex justify-center gap-4 flex-wrap">
                    {visiblePromo < filteredPromo.length && (
                        <Button
                            className="bg-[#106f85] text-white"
                            onClick={handleViewMorePromo}
                        >
                            Xem thêm sản phẩm
                        </Button>
                    )}

                    {visiblePromo > 8 && (
                        <Button
                            className="bg-gray-500 text-white"
                            onClick={() => setVisiblePromo(8)}
                        >
                            Ẩn bớt
                        </Button>
                    )}

                </div>

            </div>
            {/* Testimonial Slider */}
            <div className="bg-amber-50 text-black py-12">
                <div className="container mx-auto max-w-4xl">
                    <Slider
                        dots={true}
                        infinite={true}
                        speed={500}
                        slidesToShow={1}
                        slidesToScroll={1}
                        autoplay={true}
                        autoplaySpeed={4000}
                    >
                        {testimonials.map((t, i) => (
                            <div key={i} className="flex flex-col items-center text-center px-4">
                                {/* Avatar giữa */}
                                <div className="w-24 h-24 mb-4">
                                    <img
                                        src={t.avatar}
                                        alt={t.name}
                                        className="w-full h-full rounded-full object-cover border-4 border-[#106f85] mx-auto shadow"
                                    />
                                </div>
                                <p className="text-xl italic font-light max-w-2xl">
                                    “{t.message}”
                                </p>
                                <p className="mt-4 font-bold text-lg">{t.name} - {t.title}</p>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>



            {/* News Slider */}
            <div className="container mx-auto my-12">
                <h2 className="text-xl text-center font-bold uppercase text-[#106f85] mb-6 border-b pb-2">
                    <div className="w-30 h-[2px] bg-[#106f85] mx-auto mb-2"></div>
                    Tin tức mới nhất
                    <div className="w-30 h-[2px] bg-[#106f85] mx-auto mt-2"></div>

                </h2>
                <Slider {...sliderSettings}>
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="px-2">
                            <div className="bg-white rounded border border-gray-300 overflow-hidden shadow-sm">
                                <img
                                    src="https://s-housing.vn/wp-content/uploads/2022/07/noi-that-phong-cach-a-dong-15.jpg"
                                    alt="news"
                                    className="w-full h-[180px] object-cover"
                                />
                                <div className="p-4">
                                    <h3 className="text-md font-semibold mb-1">Xu hướng nội thất mới</h3>
                                    <p className="text-sm text-gray-600">
                                        Cập nhật những mẫu mã mới giúp căn nhà bạn thêm sang trọng và tiện nghi.
                                    </p>
                                </div>
                            </div>
                        </div>

                    ))}
                </Slider>
            </div>

        </div>
    );
};
export default HomePage;
