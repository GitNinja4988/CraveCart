import express from 'express';
import { addReview, getReviews } from '../controllers/reviewController.js';  // Import the review controller

const router = express.Router();

// Route to add a new review
router.post('/', addReview);

// Route to fetch reviews by dishId
router.get('/:dishId', getReviews);

export default router;  // Export the router
