import mongoose, { Schema, model } from "mongoose";

const ratingSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  rate: {
    type: Number,
    required: true,
  },
  comment: String,
});

export const RatingModel = model("rating", ratingSchema);
