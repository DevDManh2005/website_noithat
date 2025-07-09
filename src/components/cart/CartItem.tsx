import { Button, Tooltip } from "antd";
import { DeleteOutlined, MinusOutlined, PlusOutlined } from "@ant-design/icons";
export interface CartItem {
    id: number;
    name: string;
    image: string;
    price: number;
    quantity: number;
}
interface CartItemProps {
    item: CartItem;
    index: number;
    handleQuantityChange: (id: number, delta: number) => void;
    handleRemoveItem: (id: number) => void;
}

const CartItemComponent: React.FC<CartItemProps> = ({
    item,
    index,
    handleQuantityChange,
    handleRemoveItem,
}) => {
    return (
        <tr key={item.id} className="border-b hover:bg-gray-50">
            <td className="py-4">{index + 1}</td>
            <td className="py-4 flex items-center gap-3">
                <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 object-cover rounded border"
                />
                <span>{item.name}</span>
            </td>
            <td className="py-4">{item.price.toLocaleString()}₫</td>
            <td className="py-4">
                <div className="flex items-center border rounded w-fit">
                    <Button
                        icon={<MinusOutlined />}
                        onClick={() => handleQuantityChange(item.id, -1)}
                        className="border-none"
                        disabled={item.quantity <= 1}
                    />
                    <span className="px-3">{item.quantity}</span>
                    <Button
                        icon={<PlusOutlined />}
                        onClick={() => handleQuantityChange(item.id, 1)}
                        className="border-none"
                    />
                </div>
            </td>
            <td className="py-4">{(item.price * item.quantity).toLocaleString()}₫</td>
            <td className="py-4">
                <Tooltip title="Xóa sản phẩm">
                    <Button
                        icon={<DeleteOutlined />}
                        danger
                        type="text"
                        onClick={() => handleRemoveItem(item.id)}
                    />
                </Tooltip>
            </td>
        </tr>
    );
};

export default CartItemComponent;