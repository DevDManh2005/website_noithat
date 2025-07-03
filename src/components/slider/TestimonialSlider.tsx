import Slider from "react-slick";

interface Testimonial {
    name: string;
    title: string;
    message: string;
    avatar: string;
}

const testimonials: Testimonial[] = [
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

const TestimonialSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
    };

    return (
        <div className="bg-amber-50 text-black py-12">
            <div className="container mx-auto max-w-4xl">
                <Slider {...settings}>
                    {testimonials.map((t, i) => (
                        <div key={i} className="flex flex-col items-center text-center px-4">
                            <div className="w-24 h-24 mb-4">
                                <img
                                    src={t.avatar}
                                    alt={t.name}
                                    className="w-full h-full rounded-full object-cover border-4 border-[#106f85] mx-auto shadow"
                                />
                            </div>
                            <p className="text-xl italic font-light max-w-2xl">“{t.message}”</p>
                            <p className="mt-4 font-bold text-lg">{t.name} - {t.title}</p>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default TestimonialSlider;