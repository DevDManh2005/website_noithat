import { useEffect, useState } from "react";
import { Button, Select } from "antd";
const { Option } = Select;

interface CartSummaryProps {
    total: number;
    discount: number;
}

interface Voucher {
    id: string;
    label: string;
    amount: number;
}

const CartSummary: React.FC<CartSummaryProps> = ({ total, discount }) => {
    const [vouchers, setVouchers] = useState<Voucher[]>([]);

    useEffect(() => {
        // Giả lập gọi API
        const fetchVouchers = async () => {
            // Sau thay bằng api thật
            const data: Voucher[] = [
                { id: "discount_50000", label: "Giảm 50,000₫", amount: 50000 },
                { id: "discount_100000", label: "Giảm 100,000₫", amount: 100000 },
                { id: "freeship", label: "Miễn phí vận chuyển", amount: 0 },
            ];
            setVouchers(data);
        };

        fetchVouchers();
    }, []);

    return (
        <div className="w-full lg:w-[300px] bg-white border rounded-lg p-6 shadow-sm h-fit">
            <h3 className="text-lg font-bold mb-4">Tóm tắt đơn hàng</h3>
            <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Voucher</label>
                <Select defaultValue="none" className="w-full">
                    <Option value="none">Chọn mã voucher</Option>
                    {vouchers.map((v) => (
                        <Option key={v.id} value={v.id}>
                            {v.label}
                        </Option>
                    ))}
                </Select>
            </div>
            <div className="space-y-2">
                <div className="flex justify-between">
                    <span>Tạm tính:</span>
                    <span>{total.toLocaleString()}₫</span>
                </div>
                <div className="flex justify-between">
                    <span>Giảm giá voucher:</span>
                    <span>{discount.toLocaleString()}₫</span>
                </div>
                <div className="flex justify-between font-semibold text-[#106f85] border-t pt-3">
                    <span>Tổng số tiền:</span>
                    <span>{(total - discount).toLocaleString()}₫</span>
                </div>
            </div>
            <Button type="primary" className="bg-[#106f85] w-full mt-4">
                Mua hàng
            </Button>
        </div>
    );
};

export default CartSummary;
