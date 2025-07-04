// src/Register.tsx
import React, { useState } from 'react';

function Register() {
  const [lastName, setLastName] = useState<string>(''); // Họ
  const [firstName, setFirstName] = useState<string>(''); // Tên
  const [phoneNumber, setPhoneNumber] = useState<string>(''); // Số điện thoại
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>(''); // State để hiển thị thông báo lỗi
  const [success, setSuccess] = useState<string>(''); // State để hiển thị thông báo thành công

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Ngăn chặn hành vi submit mặc định của form

    setError(''); // Xóa lỗi cũ
    setSuccess(''); // Xóa thông báo thành công cũ

    // 1. Kiểm tra xác thực đầu vào
    if (!lastName || !firstName || !phoneNumber || !email || !password) {
      setError('Vui lòng điền đầy đủ tất cả các trường bắt buộc.');
      return;
    }

    // Kiểm tra định dạng email cơ bản (có thể phức tạp hơn với regex)
    if (!email.includes('@') || !email.includes('.')) {
      setError('Email không hợp lệ.');
      return;
    }

    if (password.length < 6) {
      setError('Mật khẩu phải có ít nhất 6 ký tự.');
      return;
    }

    // Trong hình ảnh không có trường xác nhận mật khẩu.
    // Trong thực tế, bạn RẤT NÊN có trường xác nhận mật khẩu để đảm bảo người dùng nhập đúng.
    // Ví dụ: if (password !== confirmPassword) { setError('Mật khẩu không khớp.'); return; }

    // 2. Logic đăng ký (giả lập)
    // Trong ứng dụng thực tế, bạn sẽ gửi dữ liệu này đến API backend
    console.log('Đang đăng ký với:', { lastName, firstName, phoneNumber, email, password });

    // Giả lập cuộc gọi API thành công
    setTimeout(() => {
      setSuccess('Đăng ký thành công! Bạn có thể đăng nhập ngay bây giờ.');
      setLastName('');
      setFirstName('');
      setPhoneNumber('');
      setEmail('');
      setPassword('');
      // Sau khi đăng ký thành công, bạn có thể chuyển hướng người dùng đến trang đăng nhập hoặc trang chính
      // Ví dụ: history.push('/login'); (nếu dùng react-router-dom)
    }, 1500);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 py-8">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-lg"> {/* Tăng max-w-lg để rộng hơn */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">ĐĂNG KÝ TÀI KHOẢN</h2>
        <p className="text-center text-gray-600 text-sm mb-8">
          Bạn đã có tài khoản?{' '}
          <a href="#" className="text-blue-600 hover:underline font-semibold">
            Đăng nhập tại đây
          </a>
        </p>

        <h3 className="text-lg font-bold text-gray-800 mb-4 uppercase tracking-wide border-b pb-2">THÔNG TIN CÁ NHÂN</h3>

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
            <label htmlFor="last-name" className="block text-gray-700 text-base font-semibold mb-2">
              Họ <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="last-name"
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400 transition duration-200"
              placeholder="Họ"
              value={lastName}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLastName(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="first-name" className="block text-gray-700 text-base font-semibold mb-2">
              Tên <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="first-name"
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400 transition duration-200"
              placeholder="Tên"
              value={firstName}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFirstName(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="phone-number" className="block text-gray-700 text-base font-semibold mb-2">
              Số điện thoại <span className="text-red-500">*</span>
            </label>
            <input
              type="tel" // Loại tel cho số điện thoại
              id="phone-number"
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400 transition duration-200"
              placeholder="Số điện thoại"
              value={phoneNumber}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPhoneNumber(e.target.value)}
              required
            />
          </div>

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

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-black hover:bg-gray-800 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline transition duration-200 w-full"
            >
              Đăng ký
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;