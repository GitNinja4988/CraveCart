import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://CraveCart:CraveCart24@cluster0.ydal9.mongodb.net/food-del',  // Single slash here
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("DB Connected");
  } catch (error) {
    console.error("DB Connection Error:", error.message);
  }
};
