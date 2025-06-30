import { IoSearchSharp } from "react-icons/io5";
import { Button, Form, Input } from 'antd';
import { useRef, useState } from "react";
import { BsCart3 } from "react-icons/bs";
import { FaRegCircleUser, FaRegHeart, FaRegUser } from "react-icons/fa6";
import { Badge, Popover } from 'antd';
import { Dropdown } from 'antd';
import { Link, useNavigate } from "react-router-dom";
import { TbLogout } from "react-icons/tb";
import { RiUserSettingsLine } from "react-icons/ri";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";

import type { FormProps } from 'antd';
import type { MenuProps } from 'antd';
import { GrFormNext } from "react-icons/gr";
type FieldType = {
    search?: string;

};

const AppHeader = () => {
    const formRef = useRef<HTMLDivElement>(null);
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(true)
    const [user, setUser] = useState<{ fullName: string } | null>({ fullName: "Vũ Văn Sỹ" }); // Thông tin người dùng

    const handleLogout = async () => {
        //todo
        // Logic xử lý đăng xuất
        alert("Bạn đã đăng xuất!");
        setIsAuthenticated(false); // Cập nhật trạng thái khi đăng xuất
        setUser(null); // Xóa thông tin người dùng
    }
    const navigate = useNavigate();


    const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
        console.log('Success:', values);
    };

    const guestItems = [
        {
            label: <Link to="/login" className='font-medium text-caption text-center'>Đăng nhập</Link>,
            key: 'login',
        },
        {
            label: <Link to="/register" className='font-medium text-caption'>Đăng Ký</Link>,
            key: 'register',
        },
    ];

    const userItems = [
        {
            label: (
                <Link to="/edit-profile" className="flex items-center gap-x-2">
                    <FaRegUser className="text-[18px]" />
                    <span>Quản lý tài khoản</span>
                </Link>
            ),
            key: 'edit-profile',
        },
        {
            label: (<Link to="/profile/wishlist" className="flex items-center gap-x-2">
                <MdOutlineFavoriteBorder className="text-[18px]" />
                <span>Sản phẩm yêu thích</span>
            </Link>),
            key: 'wishlist',
        },
        {
            label: (<Link to="/change-password" className="flex items-center gap-x-2">
                <RiUserSettingsLine className="text-[18px]" />
                <span>Đổi mật khẩu</span>
            </Link>),
            key: 'change-password',
        },
        {
            label: (
                <div className="flex items-center gap-x-2">
                    <TbLogout className="text-[18px]" />
                    <label
                        style={{ cursor: 'pointer' }}
                        onClick={handleLogout}
                    >
                        Đăng xuất
                    </label>
                </div>
            ),
            key: 'logout',
        },
    ];

    const items: MenuProps['items'] = [
        {
            key: '1',
            label: (
                <>
                    <GrFormNext />
                    <Link to="/">Sản phẩm nổi bật</Link>
                </>
            ),
        },
        {
            key: '2',
            label: (
                <>
                    <GrFormNext />
                    <Link to="/">Sản phẩm Khuyến mãi</Link>
                </>
            ),
        },
        {
            key: '3',
            label: (
                <>
                    <GrFormNext />
                    <Link to="/">Nội Thất gia đình</Link>
                </>
            ),
        },
    ];

    return (
        <>
            <div className="bg-[#106f85] py-4">
                <div className="container flex justify-between items-center">
                    <div className="basis-2/12">
                        Logo
                    </div>
                    <div className="basis-5/12">
                        <div ref={formRef} className='!relative'>
                            <Form
                                onFinish={onFinish}
                                name="form-search"
                                className='!w-full h-[40px]'
                                autoComplete="off"
                            >
                                <Form.Item<FieldType>
                                    name="search"
                                    className='!mb-0 '
                                >
                                    <Input
                                        placeholder="Bạn tìm gì hôm nay..."
                                        className='h-[40px] !border-transparent !hover:border-transparent !focus:border-transparent'
                                    />
                                </Form.Item>
                                <Button type="primary" htmlType="submit" className='!flex justify-center items-center !absolute top-1/2 transform -translate-y-1/2 right-0 !bg-red1 !border-solid !border-2 !rounded-none !rounded-r-[6px] !px-[12px] !h-[40px]'>
                                    <IoSearchSharp className='!w-[22px] !h-[22px]' />
                                </Button>
                            </Form>
                        </div>
                    </div>
                    <div className="basis-5/12">
                        <div className="flex justify-end items-center">
                            <nav className="page-header__bottom">
                                <ul className="flex justify-between items-center gap-x-6">
                                    <li className="navigation__item">
                                        <Popover
                                            className="popover-carts"
                                            placement="topRight"
                                            rootClassName="popover-carts"
                                            title={"Sản phẩm mới thêm"}

                                            arrow={true}>
                                            <Badge
                                                // count={carts?.length ?? 0}
                                                count={10}
                                                size={"small"}
                                                showZero
                                                style={{ backgroundColor: '#ffb326' }}
                                            >
                                                <BsCart3 className='icon-cart top-[4px]' />
                                            </Badge>
                                        </Popover>
                                    </li>
                                    <li>
                                        <div>
                                            <FaRegHeart className='icon-cart' />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex items-center gap-x-1">
                                            <FaRegCircleUser className='icon-cart' />
                                            <p className="text-[#ffff]">Đăng nhập</p>
                                        </div>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <nav className="container h-[45px] flex items-center">
                <div className="basis-3/12 flex items-center">
                    <GiHamburgerMenu />
                    <Dropdown menu={{ items }} placement="bottom" className="!px-1">
                        <Button className="!border-none text-[14px] !shadow-none !font-medium uppercase">Danh mục sản phẩm</Button>
                    </Dropdown>
                </div>
                <ul className="basis-9/12 flex items-center">
                    <li>
                        <Link to="/" className='px-[12px] py-[8px] uppercase text-[14px] font-medium hover:text-[#337ab7]'>Trang chủ</Link>
                    </li>
                    <li>
                        <Link to="/" className='px-[12px] py-[8px] uppercase text-[14px] font-medium hover:text-[#337ab7]'>Giới Thiệu</Link>
                    </li>
                    <li>
                        <Link to="/" className='px-[12px] py-[8px] uppercase text-[14px] font-medium hover:text-[#337ab7]'>Sản Phẩm</Link>
                    </li>
                    <li>
                        <Link to="/" className='px-[12px] py-[8px] uppercase text-[14px] font-medium hover:text-[#337ab7]'>Tin Tức</Link>
                    </li>
                    <li>
                        <Link to="/" className='px-[12px] py-[8px] uppercase text-[14px] font-medium hover:text-[#337ab7]'>Liên Hệ</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default AppHeader