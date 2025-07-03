import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

interface ArrowProps {
    onClick?: () => void;
}

interface Banner {
    id: number;
    src: string;
    alt: string;
}

const CustomPrevArrow = ({ onClick }: ArrowProps) => (
    <div
        onClick={onClick}
        className="absolute left-4 top-1/2 z-10 bg-white border shadow w-10 h-10 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-100"
    >
        <FaChevronLeft className="text-[#106f85] text-lg" />
    </div>
);

const CustomNextArrow = ({ onClick }: ArrowProps) => (
    <div
        onClick={onClick}
        className="absolute right-4 top-1/2 z-10 bg-white border shadow w-10 h-10 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-100"
    >
        <FaChevronRight className="text-[#106f85] text-lg" />
    </div>
);

const banners: Banner[] = [
    { id: 1, src: "/images/banner.png", alt: "Banner 1" },
    { id: 2, src: "/images/banner.png", alt: "Banner 2" },
    { id: 3, src: "/images/banner.png", alt: "Banner 3" },
];

const BannerSlider = () => {
    const settings = {
        dots: true,
        arrows: true,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div className="container mx-auto mt-4">
            <Slider {...settings}>
                {banners.map((banner) => (
                    <div key={banner.id} className="px-2">
                        <img
                            src={banner.src || null}
                            alt={banner.alt}
                            className="w-full  object-cover rounded-md shadow"
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default BannerSlider;