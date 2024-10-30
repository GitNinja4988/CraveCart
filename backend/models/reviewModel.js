import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
  dishId: { type: String, required: true },
  reviewerName: { type: String, required: true },
  reviewText: { type: String, required: true },
  rating: { type: Number, required: true },
});

const Review = mongoose.model('Review', reviewSchema);

export default Review;
