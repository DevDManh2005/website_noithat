import { useState } from "react";
import { Button, Form, Input, Modal, Upload, Select } from "antd";

const { Option } = Select;

interface User {
    name: string;
    email: string;
    phone: string;
    address: string;
    avatar: string;
    province: string;
    district: string;
    ward: string;
}

interface PersonalInfoProps {
    user: User;
    setUser: (user: User) => void;
}

const provinces = ["Hà Nội", "TP.HCM", "Đà Nẵng"];
const districts = ["Quận 1", "Quận 2", "Quận 3"];
const wards = ["Phường 1", "Phường 2", "Phường 3"];

const PersonalInfo = ({ user, setUser }: PersonalInfoProps) => {
    const [form] = Form.useForm();
    const [avatarFile, setAvatarFile] = useState<File | null>(null);

    const handleUpdateProfile = (values: Partial<User>) => {
        const updatedUser = {
            ...user,
            ...values,
            avatar: avatarFile ? URL.createObjectURL(avatarFile) : user.avatar,
        };
        setUser(updatedUser);
        form.resetFields();
        setAvatarFile(null);
        Modal.success({ content: "Cập nhật thông tin thành công!" });
    };

    const handleCancel = () => {
        form.resetFields();
        setAvatarFile(null);
    };

    return (
        <div className="bg-white p-6 rounded border border-gray-200 shadow-sm">
            <h2 className="text-xl font-bold text-[#106f85] mb-4">Thông tin cá nhân</h2>
            <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0 flex flex-col items-center">
                    <div className="relative w-36 h-36 flex items-center justify-center">
                        <img
                            src={user.avatar || "/images/avatar.jpg"}
                            alt="Avatar"
                            className="w-32 h-32 rounded-full object-cover border-4 border-[#106f85] shadow-lg"
                        />
                        <div className="absolute inset-0 rounded-full border-4 border-white pointer-events-none"></div>
                    </div>
                    <Upload
                        accept="image/*"
                        beforeUpload={(file) => {
                            setAvatarFile(file);
                            return false; // Ngăn upload tự động
                        }}
                        showUploadList={false}
                        className="mt-2"
                    >
                        <Button  className="bg-[#106f85] text-white mt-2">
                            Chọn ảnh
                        </Button>
                    </Upload>
                </div>
                <div className="flex-1">
                    <Form form={form} initialValues={user} onFinish={handleUpdateProfile} layout="vertical">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Form.Item
                                name="name"
                                label="Tên hiển thị"
                                rules={[{ required: true, message: "Vui lòng nhập họ tên" }]}
                            >
                                <Input placeholder="Nhập họ tên" />
                            </Form.Item>
                            <Form.Item
                                name="email"
                                label="Email"
                                rules={[{ required: true, type: "email", message: "Vui lòng nhập email hợp lệ" }]}
                            >
                                <Input placeholder="Nhập email" />
                            </Form.Item>
                            <Form.Item
                                name="phone"
                                label="Số điện thoại"
                                rules={[{ required: true, message: "Vui lòng nhập số điện thoại" }]}
                            >
                                <Input placeholder="Nhập số điện thoại" />
                            </Form.Item>
                            <Form.Item name="province" label="Chọn Tỉnh/Thành phố" rules={[{ required: true, message: "Chọn tỉnh/thành phố" }]}> 
                                <Select placeholder="Chọn Tỉnh/Thành phố">
                                    {provinces.map((p) => (
                                        <Option key={p} value={p}>{p}</Option>
                                    ))}
                                </Select>
                            </Form.Item>
                            <Form.Item name="district" label="Chọn Quận/Huyện" rules={[{ required: true, message: "Chọn quận/huyện" }]}> 
                                <Select placeholder="Chọn Quận/Huyện">
                                    {districts.map((d) => (
                                        <Option key={d} value={d}>{d}</Option>
                                    ))}
                                </Select>
                            </Form.Item>
                            <Form.Item name="ward" label="Chọn Phường/Xã" rules={[{ required: true, message: "Chọn phường/xã" }]}> 
                                <Select placeholder="Chọn Phường/Xã">
                                    {wards.map((w) => (
                                        <Option key={w} value={w}>{w}</Option>
                                    ))}
                                </Select>
                            </Form.Item>
                        </div>
                        <Form.Item name="address" label="Nhập địa chỉ cụ thể" rules={[{ required: true, message: "Nhập địa chỉ cụ thể" }]}> 
                            <Input placeholder="Nhập địa chỉ cụ thể" />
                        </Form.Item>
                        <div className="flex gap-4">
                            <Button type="primary" htmlType="submit" className="bg-[#106f85]">
                                Lưu
                            </Button>
                            <Button onClick={handleCancel}>
                                Hủy
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default PersonalInfo;