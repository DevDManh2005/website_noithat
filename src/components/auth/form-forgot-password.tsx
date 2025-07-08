

import type { FormProps } from 'antd';
import { Button, Form, Input } from 'antd';

type FieldType = {
    email?: string;
};

const ForgotPasswordForm = () => {
    const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Form
            className='max-w-[800px]'
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            layout='vertical'
        >
            <Form.Item<FieldType>
                label="Email"
                name="email"
                rules={[{ required: true, message: 'Email không được để trống!' }]}
            >
                <Input />
            </Form.Item>

            <Button type="primary" htmlType="submit" className='w-full !bg-red1 !text-body-bold !bg-[#106f85]'>Gửi Yêu Cầu</Button>

        </Form>
    )
}

export default ForgotPasswordForm;