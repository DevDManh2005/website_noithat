import { useState } from "react";
import PersonalInfo from "@/components/auth/profile/PersonalInfo";

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

  return (
    <div className="bg-[#f7f7f7] min-h-screen flex flex-col">
      <main className="flex flex-1 container mx-auto py-8 gap-8">
        <section className="flex-1">
            <PersonalInfo user={user} setUser={setUser} />
        </section>
      </main>
    </div>
  );
};

export default Profile;