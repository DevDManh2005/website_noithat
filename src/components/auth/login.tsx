// src/Login.tsx
import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>(''); // State để hiển thị thông báo lỗi
  const [success, setSuccess] = useState<string>(''); // State để hiển thị thông báo thành công

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Ngăn chặn hành vi submit mặc định của form

    setError(''); // Xóa lỗi cũ
    setSuccess(''); // Xóa thông báo thành công cũ

    // 1. Kiểm tra xác thực đầu vào cơ bản
    if (!email || !password) {
      setError('Vui lòng điền đầy đủ email và mật khẩu.');
      return;
    }

    // 2. Logic đăng nhập (giả lập)
    // Trong ứng dụng thực tế, bạn sẽ gửi dữ liệu này đến API backend để xác thực
    console.log('Đang đăng nhập với:', { email, password });

    // Giả lập cuộc gọi API
    setTimeout(() => {
      // Giả lập đăng nhập thành công (bạn có thể thay đổi điều kiện này)
      if (email === 'test@example.com' && password === 'password123') {
        setSuccess('Đăng nhập thành công! Chào mừng bạn trở lại.');
        setEmail('');
        setPassword('');
        // Sau khi đăng nhập thành công, bạn có thể chuyển hướng người dùng đến trang chính
        // Ví dụ: history.push('/dashboard');
      } else {
        setError('Email hoặc mật khẩu không đúng. Vui lòng thử lại.');
      }
    }, 1500);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">ĐĂNG NHẬP TÀI KHOẢN</h2>
        <p className="text-center text-gray-600 text-sm mb-8">
          Bạn chưa có tài khoản?{' '}
          <a href="#" className="text-blue-600 hover:underline font-semibold">
            Đăng ký tại đây
          </a>
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
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-base font-semibold mb-2">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400 transition duration-200"
              placeholder="Email"
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 text-base font-semibold mb-2">
              Mật khẩu <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              id="password"
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400 transition duration-200"
              placeholder="Mật khẩu"
              value={password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Link Quên mật khẩu */}
          <div className="text-left text-sm mb-6"> {/* Đổi thành text-left */}
            <a href="#" className="inline-block align-baseline font-semibold text-blue-600 hover:underline">
              Quên mật khẩu? Nhấn vào đây
            </a>
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-black hover:bg-gray-800 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline transition duration-200 w-full"
            >
              Đăng nhập
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;