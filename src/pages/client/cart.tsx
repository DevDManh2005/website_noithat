import type { CartItem } from "@/components/cart/CartItem";
import CartSummary from "@/components/cart/CartSummary";
import CartTable from "@/components/cart/CartTable";
import { useState } from "react";

const CartPage: React.FC = () => {

    const [cartItems, setCartItems] = useState<CartItem[]>([
        {
            id: 1,
            name: "Bộ bàn ghế ăn gỗ cao su",
            image: "/images/ghe.png",
            price: 5471000,
            quantity: 1,
        },
        {
            id: 2,
            name: "Bộ bàn ghế ăn gỗ cao su",
            image: "/images/ghe.png",
            price: 5471000,
            quantity: 1,
        },
    ]);

    const handleQuantityChange = (id: number, delta: number) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id
                    ? { ...item, quantity: Math.max(1, item.quantity + delta) }
                    : item
            )
        );
    };

    const handleRemoveItem = (id: number) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    const handleClearCart = () => {
        setCartItems([]);
    };

    const total = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );
    const discount = 0;

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col lg:flex-row gap-6">
                <CartTable
                    cartItems={cartItems}
                    handleQuantityChange={handleQuantityChange}
                    handleRemoveItem={handleRemoveItem}
                    handleClearCart={handleClearCart}
                />
                <CartSummary total={total} discount={discount} />
            </div>
        </div>
    );
};

export default CartPage;