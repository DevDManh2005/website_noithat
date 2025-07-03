import { useState } from "react";
import { Button, Form, Input, Modal, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";

interface User {
    name: string;
    email: string;
    phone: string;
    address: string;
    avatar: string;
}

interface PersonalInfoProps {
    user: User;
    setUser: (user: User) => void;
}

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
                <div className="flex-shrink-0">
                    <img
                        src={user.avatar || null}
                        alt="Avatar"
                        className="w-32 h-32 rounded-full object-cover border-4 border-[#106f85]"
                    />
                    <Upload
                        accept="image/*"
                        beforeUpload={(file) => {
                            setAvatarFile(file);
                            return false; // Ngăn upload tự động
                        }}
                        showUploadList={false}
                        className="mt-2"
                    >
                        <Button icon={<UploadOutlined />} className="bg-[#106f85] text-white" disableRipple>
                            Thay đổi avatar
                        </Button>
                    </Upload>
                </div>
                <div className="flex-1">
                    <Form form={form} initialValues={user} onFinish={handleUpdateProfile} layout="vertical">
                        <Form.Item
                            name="name"
                            label="Họ tên"
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
                        <Form.Item
                            name="address"
                            label="Địa chỉ"
                            rules={[{ required: true, message: "Vui lòng nhập địa chỉ" }]}
                        >
                            <Input placeholder="Nhập địa chỉ" />
                        </Form.Item>
                        <div className="flex gap-4">
                            <Button type="primary" htmlType="submit" className="bg-[#106f85]" disableRipple>
                                Lưu
                            </Button>
                            <Button onClick={handleCancel} disableRipple>
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