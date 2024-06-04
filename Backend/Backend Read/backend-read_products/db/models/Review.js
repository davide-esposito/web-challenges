import mongoose from "mongoose";

const { Schema } = mongoose;

const reviewSchema = new Schema({
  _id: Schema.Types.ObjectId,
  title: { type: String, required: true },
  text: { type: String },
  rating: { type: Number },
});

const Review = mongoose.models.Review || mongoose.model("Review", reviewSchema);

export default Review;
