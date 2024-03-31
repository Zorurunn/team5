import mongoose, { Schema, model } from "mongoose";

const orderSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  deliveryDetails: {
    type: {
      firstName: String,
      lastName: String,
      postalCode: Number,
      countryName: String,
      cityName: String,
      addressDetail: String,
      phoneNumber: Number,
    },
    required: true,
  },
  orderedProducts: {
    type: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
        },
        name: String,
        price: Number,
        discount: Number,
        quantity: Number,
        thumbnailUrl: String,
        color: String,
        merchantId: String,
      },
    ],
    required: true,
  },
  deliveryStatus: {
    type: String,
    required: true,
  },

  createdAt: Date,
  updatedAt: Date,
});

export const OrderModel = model("order", orderSchema);
