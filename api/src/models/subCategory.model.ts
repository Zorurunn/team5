import mongoose, { Schema, model } from "mongoose";

const subCategorySchema = new Schema({
  subCategoryName: {
    type: String,
    required: true,
  },
  generalCategoryId: [
    {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
  ],
  createdAt: Date,
  updatedAt: Date,
});

export const SubCategoryModel = model("subCategory", subCategorySchema);
