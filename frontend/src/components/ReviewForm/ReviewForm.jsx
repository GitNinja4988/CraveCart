import { useState } from 'react';
import './ReviewForm.css';

const ReviewForm = ({ dishId, onReviewSubmit }) => {
  const [reviewerName, setReviewerName] = useState('');
  const [headline, setHeadline] = useState('');
  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState(0);
  
  const handleStarClick = (starValue) => {
    setRating(starValue); // Set the clicked star as the rating
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onReviewSubmit({
      dishId,
      reviewerName,
      headline,
      reviewText,
      rating,
    });
    setReviewerName('');
    setHeadline('');
    setReviewText('');
    setRating(0);
  };

  return (
    <form onSubmit={handleSubmit} className="review-form">
      <h3>Rate this Dish</h3>

      <input
        type="text"
        placeholder="Your Name"
        value={reviewerName}
        onChange={(e) => setReviewerName(e.target.value)}
        required
      />
      
      <input
        type="text"
        placeholder="Review Headline"
        value={headline}
        onChange={(e) => setHeadline(e.target.value)}
        required
      />

      <textarea
        placeholder="Your Review"
        value={reviewText}
        onChange={(e) => setReviewText(e.target.value)}
        required
      />

      {/* Star Rating Section */}
      <div className="rating-stars">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={`star ${star <= rating ? 'selected' : ''}`} // Highlight selected stars
            onClick={() => handleStarClick(star)} // Handle star click
          >
            ★
          </span>
        ))}
      </div>

      <button type="submit">Submit Review</button>
    </form>
  );
};

export default ReviewForm;
