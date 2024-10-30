import Review from '../models/reviewModel.js';  // Adjust the path if necessary

// Add a new review
export const addReview = async (req, res) => {
  const { dishId, reviewerName, reviewText, rating } = req.body;

  try {
    const review = new Review({
      dishId,
      reviewerName,
      reviewText,
      rating,
    });

    await review.save();
    res.status(201).json({ message: 'Review added successfully!' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Fetch reviews by dishId
export const getReviews = async (req, res) => {
  const { dishId } = req.params;

  try {
    const reviews = await Review.find({ dishId });
    res.json(reviews);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
