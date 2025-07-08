import  { useState, useEffect } from 'react';

const ProductRatingSection = () => {
  // State management
  const [isLoggedIn] = useState(true); 
  const [reviews, setReviews] = useState([
    { id: 1, name: "Nguyễn Văn A", rating: 5, comment: "Sản phẩm tuyệt vời!", date: "2025-07-05" },
    { id: 2, name: "Trần Thị B", rating: 5, comment: "Chất lượng tốt!", date: "2025-07-04" },
  ]);
      const [newReview, setNewReview] = useState({ name: "Người dùng test", rating: 0, comment: "" });

  const [error, setError] = useState("");

  // Load reviews from localStorage on mount
  useEffect(() => {
    const storedReviews = localStorage.getItem("productReviews");
    if (storedReviews) {
      setReviews(JSON.parse(storedReviews));
    }
  }, []);

  // Save reviews to localStorage whenever reviews change
  useEffect(() => {
    localStorage.setItem("productReviews", JSON.stringify(reviews));
  }, [reviews]);

  // Calculate rating distribution
  const ratingCounts = [0, 0, 0, 0, 0];
  reviews.forEach(review => {
    ratingCounts[5 - review.rating]++;
  });
  const totalReviews = reviews.length;
  const ratingPercentages = ratingCounts.map(count => 
    totalReviews > 0 ? ((count / totalReviews) * 100).toFixed(0) : 0
  );


  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewReview(prev => ({ ...prev, [name]: value }));
};

  // Handle rating change (select from left to right)
  const handleRatingChange = (rating: number) => {
    setNewReview(prev => ({ ...prev, rating }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!isLoggedIn) {
      setError("Vui lòng đăng nhập để bình luận!");
      return;
    }
    if (newReview.rating === 0) {
      setError("Vui lòng chọn số sao!");
      return;
    }
    if (!newReview.comment.trim()) {
      setError("Vui lòng nhập bình luận!");
      return;
    }

    const review = {
      id: reviews.length + 1,
      name: newReview.name,
      rating: newReview.rating,
      comment: newReview.comment,
      date: new Date().toISOString().split('T')[0],
    };

    setReviews(prev => [...prev, review]);
    setNewReview({ name: "", rating: 0, comment: "" });
    setError("");
  };

  const averageRating = totalReviews > 0
  ? (reviews.reduce((sum, r) => sum + r.rating, 0) / totalReviews).toFixed(1)
  : 0;
  const satisfiedCount = reviews.filter(r => r.rating >= 4).length;



  return (
    <div className="container mx-auto p-4 max-w-4xl">
<h2 className="text-2xl font-bold text-gray-800 mb-6">Đánh giá sản phẩm</h2>

<div className="mb-8 flex flex-col md:flex-row md:items-start md:justify-between gap-6">
  {/* Bên trái: Tổng số khách hàng hài lòng */}
  <div className="md:w-1/3 ">

    <div className="text-lg font-medium flex items-center mb-1 ">
  <span className="text-xl mr-1">
    <img src="images/saoo.png" height={30} width={30} alt="" />
  </span>
  {averageRating}/5 
</div>


    <div className="text-lg font-semibold text-gray-700 pt-4">{satisfiedCount} khách hàng hài lòng</div>

     <div className="mb-8 text-lg text-gray-4 pt-4">
        <p>{totalReviews} đánh giá</p>
      </div>
  </div>

  {/* Bên phải: Biểu đồ đánh giá sao */}
  <div className="md:w-2/3">
    {[5, 4, 3, 2, 1].map((star) => (
      <div key={star} className="flex items-center mb-3 w-full">
        {/* Sao và số đánh giá */}
          <span className="text-lg font-semibold mr-2">{star} ★</span>
        {/* Thanh phần trăm */}
        <div className="flex-1 mx-4">
          <div className="w-full bg-gray-200 rounded-full h-4">
            <div
              className="bg-black h-4 rounded-full"
              style={{ width: `${ratingPercentages[5 - star]}%` }}
            ></div>
          </div>
        </div>

        {/* Phần trăm số */}
        <div className="w-12 text-sm text-gray-600 text-right">
          {ratingPercentages[5 - star]}%
        </div>
      </div>
    ))}
  </div>
</div>

      {/* Review Form */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-6">Viết đánh giá của bạn</h3>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {!isLoggedIn ? (
          <div className="text-center text-gray-600">
            <p>Vui lòng <a href="#" className="text-blue-500 underline">đăng nhập</a> để bình luận!</p>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Đánh giá của bạn</label>
              <div className="flex">
                {[1, 2, 3, 4, 5].map(star => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => handleRatingChange(star)}
                    className={`text-2xl mx-1 ${
                      newReview.rating >= star ? 'text-yellow-400' : 'text-gray-300'
                    }`}
                  >
                    ★
                  </button>
                ))}
              </div>
            </div>
            <div className="mb-4">
                <h3 className='block text-xl font-medium text-gray-700 mb-2'>{newReview.name}</h3>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Bình luận</label>
              <textarea
                name="comment"
                value={newReview.comment}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg h-24 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                disabled={!isLoggedIn}
              />
            </div>
            <button
              type="button"
              onClick={handleSubmit}
              className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition-colors disabled:bg-gray-400"
              disabled={!isLoggedIn}
            >
              Gửi đánh giá
            </button>
          </>
        )}
      </div>

      {/* Display Reviews */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Bình luận</h3>
        {reviews.map(review => (
          <div key={review.id} className="border-b py-4">
            <div className="flex items-center mb-2">
              <span className="font-semibold mr-2">{review.name}</span>
              <span className="text-yellow-400">{'★'.repeat(review.rating)}</span>
            </div>
            <p className="text-gray-600 mb-1">{review.comment}</p>
            <p className="text-sm text-gray-500">{review.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductRatingSection;