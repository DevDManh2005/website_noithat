import { IoMdLogOut } from "react-icons/io"
import { IoHome, IoSettingsSharp } from "react-icons/io5"
import { PiNotePencilBold } from "react-icons/pi"
import { RiFileList3Fill } from "react-icons/ri"
import { Link } from "react-router-dom"


import { useState } from 'react';
import { Layout, Menu } from 'antd';
import type { MenuProps } from 'antd';
type MenuItem = Required<MenuProps>['items'][number];
const { Sider } = Layout;

const SidebarApp = () => {
    const [collapsed, setCollapsed] = useState(false);

    const items: MenuItem[] = [
        {
            label: <Link
                to="/"
                className=" !hover:bg-red-600"
            >
                <span>Tổng quan</span>
            </Link>,
            key: '/',
            icon: <IoHome />
        },
        {
            label: <Link to='/'>Lịch Sử Mua Hàng</Link>,
            key: '/',
            icon: <RiFileList3Fill />
        },
        {
            label: <Link to='/'>Thông Tin Tài Khoản</Link>,
            key: '/',
            icon: <IoSettingsSharp />
        },
        {
            label: <Link to='/'>Thay Đổi Mật Khẩu</Link>,
            key: '/',
            icon: <PiNotePencilBold />
        },
        {
            label: <Link to='/'>Đăng Xuất</Link>,
            key: '/',
            icon: <IoMdLogOut />
        },

    ];

    return (
        <div className="basis-3/12 h-screen">
            <Sider
                trigger={null}
                collapsible
                collapsed={collapsed}
                className="!w-full !h-full !bg-white !max-w-full !min-w-0 overflow-hidden !py-4 !rounded-lg"
                style={{ width: '100%', height: '100%', backgroundColor: '#fff' }}
            >
                <div className="demo-logo-vertical" />
                <Menu
                    theme="light"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={items}
                    className="!h-full !overflow-hidden"
                />
            </Sider>
        </div>
    )
}

export default SidebarApp

