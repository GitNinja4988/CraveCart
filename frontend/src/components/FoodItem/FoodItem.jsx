import React, { useContext, useEffect, useState } from 'react';
import './FoodItem.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../Context/StoreContext';
import ReviewForm from "../ReviewForm/ReviewForm";

import { fetchReviews, submitReview } from '../../assets/assets';  // Assuming API calls for fetching and submitting reviews

const FoodItem = ({ image, name, price, desc, id }) => {
  const [itemCount, setItemCount] = useState(0);
  const { cartItems, addToCart, removeFromCart, url, currency } = useContext(StoreContext);

  // Reviews state
  const [reviews, setReviews] = useState([]);

  // Fetch reviews for this food item when the component mounts
  useEffect(() => {
    const loadReviews = async () => {
      const fetchedReviews = await fetchReviews(id);
      setReviews(fetchedReviews);
    };
    loadReviews();
  }, [id]);

  // Handle new review submission
  const handleReviewSubmit = async (newReview) => {
    await submitReview(newReview);
    setReviews([...reviews, newReview]);  // Update the local state with the new review
  };

  return (
    <div className='food-item'>
      <div className='food-item-img-container'>
        <img className='food-item-image' src={url + "/images/" + image} alt={name} />
        {!cartItems[id] ? (
          <img className='add' onClick={() => addToCart(id)} src={assets.add_icon_white} alt="Add to Cart" />
        ) : (
          <div className="food-item-counter">
            <img src={assets.remove_icon_red} onClick={() => removeFromCart(id)} alt="Remove from Cart" />
            <p>{cartItems[id]}</p>
            <img src={assets.add_icon_green} onClick={() => addToCart(id)} alt="Add More" />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p> <img src={assets.rating_starts} alt="Rating Stars" />
        </div>
        <p className="food-item-desc">{desc}</p>
        <p className="food-item-price">{currency}{price}</p>
      </div>

      {/* Reviews Section */}
      <div className="reviews-section">
        <h3>Customer Reviews</h3>
        {reviews.length > 0 ? (
          reviews.map((review) => (
            <div key={review._id} className="review">
              <p><strong>{review.reviewerName}</strong>: {review.reviewText} ({review.rating}/5)</p>
            </div>
          ))
        ) : (
          <p>No reviews yet.</p>
        )}
        
        {/* Add New Review */}
        <ReviewForm dishId={id} onReviewSubmit={handleReviewSubmit} />
      </div>
    </div>
  );
};

export default FoodItem;
