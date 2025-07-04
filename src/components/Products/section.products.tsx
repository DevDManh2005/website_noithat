import { Button } from "antd";
import ProductCard from "@/components/Products/card.products";

interface Product {
    id: number;
    name: string;
    price: string;
    image: string;
    badge?: string;
    category: string;
}

interface ProductSectionProps {
    title: string;
    products: Product[];
    activeTab: string;
    setActiveTab: (tab: string) => void;
    visible: number;
    setVisible: React.Dispatch<React.SetStateAction<number>>;
}

const ProductSection = ({ title, products, activeTab, setActiveTab, visible, setVisible }: ProductSectionProps) => {
    const tabItemStyle = (isActive: boolean) => ({
        cursor: "pointer",
        padding: "8px 16px",
        fontWeight: isActive ? "600" : "500",
        borderBottom: isActive ? "3px solid #106f85" : "3px solid transparent",
        color: isActive ? "#106f85" : "#333",
        textTransform: "uppercase" as const,
        userSelect: "none" as const,
    });

    const filteredProducts = activeTab === "all"
        ? products.filter(p => p.category === "hot" || p.category === "featured" || p.category === "bestseller" || p.category === "promotion")
        : products.filter(p => p.category === activeTab);

    const handleViewMore = () => setVisible((prev: number) => prev + 4);
    const handleViewLess = () => setVisible(8);

    return (
        <div className="container mx-auto my-10 bg-white p-6 rounded border border-gray-200 shadow-sm">
            <h2 className="text-xl font-bold text-[#106f85] uppercase text-center mb-6 relative">
                <div className="w-30 h-[2px] bg-[#106f85] mx-auto mb-2"></div>
                {title}
                <div className="w-30 h-[2px] bg-[#106f85] mx-auto mt-2"></div>
            </h2>

            <div className="flex justify-center gap-6 mb-6 select-none">
                {["all", "promotion", "featured", "bestseller"].map(key => (
                    <div
                        key={key}
                        onClick={() => {
                            setActiveTab(key);
                            setVisible(8);
                        }}
                        style={tabItemStyle(activeTab === key)}
                    >
                        {key === "all" ? "Tất cả" :
                            key === "promotion" ? "Khuyến mãi" :
                                key === "featured" ? "Nổi bật" :
                                    key === "bestseller" ? "Bán chạy" : key}
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {filteredProducts.slice(0, visible).map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>

            <div className="text-center mt-6 flex justify-center gap-4 flex-wrap">
                {visible < filteredProducts.length && (
                    <Button className="bg-[#106f85] text-white" onClick={handleViewMore}>
                        Xem thêm sản phẩm
                    </Button>
                )}
                {visible > 8 && (
                    <Button className="bg-gray-500 text-white" onClick={handleViewLess}>
                        Ẩn bớt
                    </Button>
                )}
            </div>
        </div>
    );
};

export default ProductSection;