import ForgotPasswordForm from "@/components/auth/form-forgot-password";


const ForgotPasswordPage = () => {
    return (
        <div className="bg-bg-main pt-[20px] px-5 md:px-2 lg:px-0">
            <div className="container bg-white rounded-lg flex items-center justify-center py-7 px-5 mx-auto max-w-2xl md:max-w-3xl lg:max-w-[1230px]">
                <div className="w-full md:w-3/4 lg:w-1/2">
                    <div className="text-[16px] uppercase font-medium mb-[10px] flex items-center justify-center">Quên Mật Khẩu</div>
                    <ForgotPasswordForm />
                </div>
            </div>
        </div>
    )
}

export default ForgotPasswordPage;