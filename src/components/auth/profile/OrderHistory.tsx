import { Button } from "antd";

interface Order {
    id: string;
    code: string;
    image: string;
    items: string;
    quantity: number;
    amount: number;
    vat: boolean;
    status: string;
}

interface OrderHistoryProps {
    orders: Order[];
}

const OrderHistory = ({ orders }: OrderHistoryProps) => {

    const handleViewDetails = () => {
        // mã xử lý khi người dùng nhấn nút chi tiết nha
    };

    return (
        <div className="bg-white p-6 rounded border border-gray-200 shadow-sm">
            <h2 className="text-xl font-bold text-[#106f85] mb-4">Lịch sử đơn hàng</h2>
            <div className="space-y-4">
                {orders.map((order) => (
                    <div
                        key={order.id}
                        className="p-4 border rounded shadow-sm"
                    >
                        <div className="mb-2 flex flex-col sm:flex-row justify-between items-start sm:items-center">
                            <p className="font-semibold">Mã đơn hàng: {order.code}</p>
                            <p className="bg-gray-200 border border-gray-300 inline-block px-2 py-1 rounded">
                                {order.status}
                            </p>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="flex items-center space-x-4">
                                <img
                                    src={order.image}
                                    alt={order.items}
                                    className="w-16 h-16 object-cover rounded"
                                />
                                <div>
                                    <p className="font-bold">{order.items}</p>
                                    <p>{order.amount.toLocaleString()} đ</p>

                                    <p>Số lượng: {order.quantity}</p>
                                    {order.vat && (
                                        <p className="bg-gray-200 border border-gray-300 inline-block px-2 py-1 rounded">
                                            Đã xuất VAT
                                        </p>
                                    )}
                                </div>
                            </div>
                            <div className="text-right space-y-2">

                                <p className="font-semibold">Tổng thanh toán: {order.amount.toLocaleString()} VNĐ</p>
                                <Button
                                    type="primary"
                                    className="bg-[#106f85] text-white"
                                    onClick={() => handleViewDetails()}
                                >
                                    Chi tiết
                                </Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OrderHistory;