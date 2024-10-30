import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import userRouter from "./routes/userRoute.js";
import foodRouter from "./routes/foodRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";
import reviewRouter from "./routes/reviewRoute.js";  // Import the new review route
import 'dotenv/config';

// App config
const app = express();
const port = process.env.PORT || 4000;

// Middlewares
app.use(express.json());  // Parse JSON bodies
app.use(cors());          // Enable Cross-Origin Resource Sharing

// DB connection
connectDB();

// API Endpoints
app.use("/api/user", userRouter);     // User-related routes
app.use("/api/food", foodRouter);     // Food-related routes
app.use("/api/cart", cartRouter);     // Cart-related routes
app.use("/api/order", orderRouter);   // Order-related routes
app.use("/api/reviews", reviewRouter);  // Review-related routes

// Serve images from the uploads folder
app.use("/images", express.static('uploads'));

// Base route
app.get("/", (req, res) => {
    res.send("API Working");
});

// Start server
app.listen(port, () => console.log(`Server started on http://localhost:${port}`));
