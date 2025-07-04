// src/ForgotPassword.tsx
import React, { useState } from 'react';

function ForgotPassword() {
  const [email, setEmail] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError('');
    setSuccess('');

    if (!email) {
      setError('Vui lòng nhập địa chỉ email của bạn.');
      return;
    }

    if (!email.includes('@') || !email.includes('.')) {
      setError('Email không hợp lệ. Vui lòng kiểm tra lại.');
      return;
    }

    // Logic gửi yêu cầu đặt lại mật khẩu (giả lập)
    console.log('Đang gửi yêu cầu đặt lại mật khẩu cho:', email);

    // Giả lập cuộc gọi API
    setTimeout(() => {
      setSuccess(`Một liên kết đặt lại mật khẩu đã được gửi đến email "${email}". Vui lòng kiểm tra hộp thư đến của bạn.`);
      setEmail(''); // Xóa trường email sau khi gửi
      // Trong thực tế, bạn sẽ gửi yêu cầu này đến backend để họ gửi email.
    }, 2000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">QUÊN MẬT KHẨU</h2>
        <p className="text-center text-gray-600 text-sm mb-8">
          Vui lòng nhập địa chỉ email của bạn để nhận liên kết đặt lại mật khẩu.
        </p>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
            <span className="block sm:inline">{error}</span>
          </div>
        )}

        {success && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">
            <span className="block sm:inline">{success}</span>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 text-base font-semibold mb-2">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400 transition duration-200"
              placeholder="Nhập email của bạn"
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-black hover:bg-gray-800 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline transition duration-200 w-full"
            >
              Gửi yêu cầu
            </button>
          </div>
        </form>

        <p className="text-center text-gray-600 text-sm mt-6">
          <a href="#" className="text-blue-600 hover:underline font-semibold">
            Quay lại Đăng nhập
          </a>
        </p>
      </div>
    </div>
  );
}

export default ForgotPassword;