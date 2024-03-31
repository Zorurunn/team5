import mongoose, { Schema, model } from "mongoose";

const viewSchema = new Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  viewQty: {
    type: Number,
    required: true,
  },
});

export const ViewModel = model("view", viewSchema);
