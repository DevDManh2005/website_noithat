interface Order {
    id: number;
    date: string;
    total: string;
    status: string;
}

interface OrderHistoryProps {
    orders: Order[];
}

const OrderHistory = ({ orders }: OrderHistoryProps) => {
    return (
        <div className="bg-white p-6 rounded border border-gray-200 shadow-sm">
            <h2 className="text-xl font-bold text-[#106f85] mb-4">Lịch sử đơn hàng</h2>
            {orders.length === 0 ? (
                <p>Chưa có đơn hàng nào.</p>
            ) : (
                <div className="space-y-4">
                    {orders.map((order) => (
                        <div key={order.id} className="border-b pb-4">
                            <p><strong>Mã đơn hàng:</strong> {order.id}</p>
                            <p><strong>Ngày đặt:</strong> {order.date}</p>
                            <p><strong>Tổng tiền:</strong> {order.total}</p>
                            <p><strong>Trạng thái:</strong> {order.status}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default OrderHistory;