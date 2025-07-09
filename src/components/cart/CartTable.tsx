import { Button } from "antd";
import CartItemComponent from "./CartItem";
export interface CartItem {
    id: number;
    name: string;
    image: string;
    price: number;
    quantity: number;
}
interface CartTableProps {
    cartItems: CartItem[];
    handleQuantityChange: (id: number, delta: number) => void;
    handleRemoveItem: (id: number) => void;
    handleClearCart: () => void;
}

const CartTable: React.FC<CartTableProps> = ({
    cartItems,
    handleQuantityChange,
    handleRemoveItem,
    handleClearCart,
}) => {
    return (
        <div className="flex-1 bg-white p-6 border rounded-lg shadow-sm">
            <table className="w-full text-sm">
                <thead className="border-b text-gray-600">
                    <tr>
                        <th className="py-3 text-left font-semibold">STT</th>
                        <th className="py-3 text-left font-semibold">Sản phẩm</th>
                        <th className="py-3 text-left font-semibold">Giá</th>
                        <th className="py-3 text-left font-semibold">Số lượng</th>
                        <th className="py-3 text-left font-semibold">Thành tiền</th>
                        <th className="py-3"></th>
                    </tr>
                </thead>
                <tbody>
                    {cartItems.map((item, index) => (
                        <CartItemComponent
                            key={item.id}
                            item={item}
                            index={index}
                            handleQuantityChange={handleQuantityChange}
                            handleRemoveItem={handleRemoveItem}
                        />
                    ))}
                </tbody>
            </table>
            {cartItems.length > 0 && (
                <div className="mt-4">
                    <Button danger className="w-full" onClick={handleClearCart}>
                        Xóa hết giỏ hàng
                    </Button>
                </div>
            )}
        </div>
    );
};

export default CartTable;