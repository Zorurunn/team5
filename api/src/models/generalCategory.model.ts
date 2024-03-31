import { Schema, model } from "mongoose";

const generalCategorySchema = new Schema({
  generalCategoryName: {
    type: String,
    required: true,
  },
  createdAt: Date,
  // updatedAt: Date,
});

export const GeneralCategoryModel = model(
  "generalCategory",
  generalCategorySchema
);
