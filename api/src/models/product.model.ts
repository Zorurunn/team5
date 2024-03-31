import mongoose, { Schema, model } from "mongoose";

const productSchema = new Schema({
  productName: {
    type: String,
    required: true,
  },
  generalCategoryId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  subCategoryId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  remainQty: {
    type: Number,
    required: true,
  },
  quantiy: {
    type: Number,
    required: true,
  },
  images: [
    {
      type: String,
      required: true,
    },
  ],
  discount: {
    type: Number,
    required: false,
    default: 0,
  },
  description: {
    type: String,
    required: true,
  },
  serialNumber: {
    type: String,
    required: true,
  },
  productType: {
    productColor: [
      {
        type: String,
        required: true,
      },
    ],
    productSize: [
      {
        type: String,
        required: true,
      },
    ],
  },

  productTag: [
    {
      type: String,
      required: true,
    },
  ],
  viewsCount: {
    type: Number,
    required: false,
  },
  rating: {
    ratedQty: {
      type: Number,
      default: 0,
    },
    starAverage: {
      type: Number,
      default: 0,
    },
  },
  merchantId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  saledQty: {
    type: Number,
  },

  createdAt: Date,
  updatedAt: Date,
});

export const ProductModel = model("product", productSchema);
