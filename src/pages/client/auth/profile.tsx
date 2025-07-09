import { useState } from "react";
import PersonalInfo from "@/components/auth/profile/PersonalInfo";
import OrderHistory from "@/components/auth/profile/OrderHistory";

const Profile = () => {
  const [user, setUser] = useState({
    name: "Nguyễn Văn A",
    email: "nguyenvana@example.com",
    phone: "0123 456 789",
    address: "123 Đường Láng, Hà Nội",
    avatar: "/images/avatar.jpg",
    province: "Hà Nội",
    district: "Quận 1",
    ward: "Phường 1",
  });

  const sampleOrders = [
    {
      id: "2",
      code: "DH002",
      items: "Bánh mì nguyên cám",
      image: "/images/ghe.png",
      amount: 54000,
      quantity: 3,
      vat: false,
      status: "Đang xử lý"
    },
    {
      id: "3",
      code: "DH003",
      image: "/images/ghe.png",
      items: "Bánh mì ngũ cốc",
      amount: 64000,
      quantity: 4,
      vat: true,
      status: "Đã hủy"
    }
  ]
    ;

  return (
    <div className="bg-[#f7f7f7] min-h-screen flex flex-col">
      <main className="flex flex-1 container mx-auto py-8 gap-8">
        <section className="flex-1">
          <PersonalInfo user={user} setUser={setUser} />
          <OrderHistory orders={sampleOrders} />

        </section>
      </main>
    </div>
  );
};


export default Profile;