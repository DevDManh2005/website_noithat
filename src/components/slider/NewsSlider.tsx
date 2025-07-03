import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

interface ArrowProps {
    onClick?: () => void;
}

const CustomPrevArrow = ({ onClick }: ArrowProps) => (
    <div
        onClick={onClick}
        className="absolute left-[-20px] top-[40%] z-10 bg-white border shadow w-10 h-10 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-100"
    >
        <FaChevronLeft className="text-[#106f85] text-lg" />
    </div>
);

const CustomNextArrow = ({ onClick }: ArrowProps) => (
    <div
        onClick={onClick}
        className="absolute right-[-20px] top-[40%] z-10 bg-white border shadow w-10 h-10 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-100"
    >
        <FaChevronRight className="text-[#106f85] text-lg" />
    </div>
);

const NewsSlider = () => {
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
                },
            },
        ],
    };

    return (
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
    );
};

export default NewsSlider;