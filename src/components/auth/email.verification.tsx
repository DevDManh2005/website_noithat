// src/EmailVerification.tsx
import React, { useState } from 'react';

// Giả định email người dùng cần xác minh được truyền vào hoặc lấy từ ngữ cảnh người dùng
// Trong thực tế, email này sẽ được biết sau khi đăng ký hoặc đăng nhập
const userEmailForVerification = 'user@example.com'; // Thay thế bằng email thực tế

function EmailVerification() {
  const [verificationCode, setVerificationCode] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<string>('');
  const [isResending, setIsResending] = useState<boolean>(false);

  // Hàm xử lý việc gửi mã xác minh
  const handleSubmitCode = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!verificationCode) {
      setError('Vui lòng nhập mã xác minh.');
      return;
    }

    // Logic xác minh mã (giả lập)
    console.log(`Đang xác minh mã: ${verificationCode} cho email: ${userEmailForVerification}`);

    // Giả lập cuộc gọi API xác minh mã
    setTimeout(() => {
      if (verificationCode === '123456') { // Giả lập mã đúng
        setSuccess('Tài khoản của bạn đã được xác minh thành công! Bạn có thể đăng nhập.');
        setVerificationCode('');
        // Sau khi xác minh thành công, bạn có thể chuyển hướng người dùng
        // Ví dụ: history.push('/login');
      } else {
        setError('Mã xác minh không hợp lệ. Vui lòng kiểm tra lại hoặc yêu cầu gửi lại.');
      }
    }, 1500);
  };

  // Hàm xử lý việc gửi lại email xác minh
  const handleResendEmail = () => {
    setIsResending(true);
    setError('');
    setSuccess('');

    console.log(`Đang gửi lại email xác minh đến: ${userEmailForVerification}`);

    // Giả lập cuộc gọi API gửi lại email
    setTimeout(() => {
      setSuccess(`Email xác minh đã được gửi lại thành công đến "${userEmailForVerification}". Vui lòng kiểm tra hộp thư đến của bạn.`);
      setIsResending(false);
    }, 2000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">XÁC THỰC EMAIL</h2>
        <p className="text-center text-gray-600 text-sm mb-4">
          Một email với mã xác minh đã được gửi đến{' '}
          <span className="font-semibold text-blue-600">{userEmailForVerification}</span>.
          Vui lòng kiểm tra hộp thư đến của bạn (bao gồm thư mục Spam/Rác) và nhập mã vào ô bên dưới để xác minh tài khoản.
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

        <form onSubmit={handleSubmitCode}>
          <div className="mb-6">
            <label htmlFor="verification-code" className="block text-gray-700 text-base font-semibold mb-2">
              Mã xác minh <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="verification-code"
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400 transition duration-200 text-center tracking-widest text-lg"
              placeholder="Nhập mã (ví dụ: 123456)"
              value={verificationCode}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setVerificationCode(e.target.value)}
              required
              maxLength={6} // Giới hạn độ dài mã
            />
          </div>

          <div className="flex items-center justify-between mb-4">
            <button
              type="submit"
              className="bg-black hover:bg-gray-800 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline transition duration-200 w-full"
            >
              Xác nhận mã
            </button>
          </div>
        </form>

        <p className="text-center text-gray-600 text-sm mt-6">
          Chưa nhận được mã?{' '}
          <button
            onClick={handleResendEmail}
            disabled={isResending} // Vô hiệu hóa nút khi đang gửi lại
            className="text-blue-600 hover:underline font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isResending ? 'Đang gửi lại...' : 'Gửi lại email xác minh'}
          </button>
        </p>
        <p className="text-center text-gray-600 text-sm mt-2">
          <a href="#" className="text-blue-600 hover:underline font-semibold">
            Quay lại Đăng nhập
          </a>
        </p>
      </div>
    </div>
  );
}

export default EmailVerification;