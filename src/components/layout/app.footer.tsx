import type { FormProps } from 'antd';
import { Button, Form, Input } from 'antd';

type FieldType = {
    email?: string;
};

const AppFooter = () => {
    const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
        console.log('Success:', values);
    };

    return (
        <footer className="pt-[30px]">
            <div className="container flex justify-between pb-[30px]">
                <div className="basis-5/12">
                    <div className='mb-[16px]'>Logo</div>
                    <div>VPTS: 219 Nguyễn Sinh Sắc, Phường Hòa Khánh, TP Đà Nẵng</div>
                    <p>(024) 7300 1955</p>
                    <p>caodang@fpt.edu.vn</p>
                </div>
                <div className="basis-2/12">
                    <h2 className="text-[16px] font-medium mb-[16px]">Liên Kết</h2>
                    <ul>
                        <li className='py-[4px] cursor-pointer'>Thông tin giao hàng</li>
                        <li className='py-[4px] cursor-pointer'>Chính sách bảo mật</li>
                        <li className='py-[4px] cursor-pointer'>Chính sách giao hàng</li>
                        <li className='py-[4px] cursor-pointer'>Thanh toán an toàn</li>
                        <li className='py-[4px] cursor-pointer'>Chính sách hoàn trả</li>
                    </ul>
                </div>
                <div className="basis-2/12">
                    <h2 className="text-[16px] font-medium mb-[16px]">Hỗ Trợ</h2>
                    <ul>
                        <li className='py-[4px] cursor-pointer'>Customer service</li>
                        <li className='py-[4px] cursor-pointer'>Privacy Policy</li>
                        <li className='py-[4px] cursor-pointer'>Terms & Condition</li>
                        <li className='py-[4px] cursor-pointer'>Best Seller</li>
                        <li className='py-[4px] cursor-pointer'>Manufactures</li>
                    </ul>
                </div>
                <div className="basis-3/12">
                    <h2 className="text-[16px] font-medium mb-[16px]">Bảng Tin</h2>
                    <div className='pb-[8px]'>
                        Gets instant updates about our new products and special promos!
                    </div>
                    <Form
                        className='max-w-[800px]'
                        onFinish={onFinish}
                        autoComplete="off"
                        layout='vertical'
                    >
                        <Form.Item<FieldType>
                            name="email"
                            rules={[{ required: true, message: 'Email không được để trống!' }]}
                            className='!mb-[10px]'
                        >
                            <Input
                                placeholder="Nhập địa chỉ Email..."
                            />
                        </Form.Item>

                        <Button type="primary" htmlType="submit" className='w-[100px] !bg-red1 !text-body-bold !bg-[#106f85]'
                        >
                            Đăng ký
                        </Button>

                    </Form>
                </div>
            </div>
            <div className="py-[20px] border-t-1 border-[#ebe6e7]">
                <div className='container flex justify-between items-center'>
                    <div className='basis-5/12'>Thiết kế và lập trình bở FPT Polytechnic</div>
                    <ul className="basis-7/12 flex justify-end gap-x-10">
                        <li className='cursor-pointer'>Điều khoản & Điều kiện</li>
                        <li className='cursor-pointer'>Chính sách bảo mật</li>
                        <li className='cursor-pointer'>Chính sách giao hàng</li>
                        <li className='cursor-pointer'>Giới Thiệu</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default AppFooter