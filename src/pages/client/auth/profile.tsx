import { useState } from "react";
import { Tabs } from "antd";
import FavoritesList from "@/components/auth/profile/FavoritesList";
import OrderHistory from "@/components/auth/profile/OrderHistory";
import PersonalInfo from "@/components/auth/profile/PersonalInfo";

interface User {
    name: string;
    email: string;
    phone: string;
    address: string;
    avatar: string;
}

interface Order {
    id: number;
    date: string;
    total: string;
    status: string;
}

const Profile = () => {
    const [user, setUser] = useState<User>({
        name: "Nguyễn Văn A",
        email: "nguyenvana@example.com",
        phone: "0123 456 789",
        address: "123 Đường Láng, Hà Nội",
        avatar: "/images/avatar.png",
    });

    const orders: Order[] = [
        { id: 1, date: "01/07/2025", total: "4.750.000đ", status: "Đã giao" },
        { id: 2, date: "28/06/2025", total: "6.500.000đ", status: "Đang xử lý" },
    ];

    const items = [
        {
            key: "1",
            label: "Thông tin cá nhân",
            children: <PersonalInfo user={user} setUser={setUser} />,
        },
        {
            key: "2",
            label: "Lịch sử đơn hàng",
            children: <OrderHistory orders={orders} />,
        },
        {
            key: "3",
            label: "Danh sách yêu thích",
            children: <FavoritesList />,
        },
    ];

    return (
        <div className="container mx-auto my-10">
            <Tabs defaultActiveKey="1" items={items} className="profile-tabs" />
        </div>
    );
};

export default Profile;