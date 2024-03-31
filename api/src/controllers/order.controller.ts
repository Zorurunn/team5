import { RequestHandler } from "express";
import { OrderModel, ProductModel } from "../models";
import mongoose from "mongoose";
import { log } from "console";

type orderedProductsType = {
  productId: {
    type: mongoose.Schema.Types.ObjectId;
    required: true;
  };
  name: string;
  price: number;
  discount: number;
  quantity: number;
  thumbnailUrl: string;
};

// CREATE ORDER
export const createOrder: RequestHandler = async (req, res) => {
  const { userId, deliveryDetails, orderedProducts, deliveryStatus } = req.body;

  try {
    // CHECK PRODUCT AND STOCK
    for (let i = 0; i < orderedProducts.length; i++) {
      const { productId, quantity, name } = orderedProducts[i];
      const thisProduct = await ProductModel.findOne({ _id: productId });

      if (!thisProduct) {
        return res.status(401).json({
          message: ` could not find this product -> "${name}" from data base`,
        });
      }

      if (
        thisProduct.remainQty < quantity ||
        quantity <= 0 ||
        thisProduct.remainQty === 0
      ) {
        return res.status(401).json({
          message: ` "${name}" no more stock`,
        });
      }
    }

    // DECREASE STOCK
    await ProductModel.bulkWrite(
      orderedProducts.map((item: orderedProductsType) => ({
        updateOne: {
          filter: { _id: item.productId },
          update: {
            $inc: { remainQty: -item.quantity },
          },
        },
      }))
    );

    // INCREASE SALED QTY
    await ProductModel.bulkWrite(
      orderedProducts.map((item: orderedProductsType) => ({
        updateOne: {
          filter: { _id: item.productId },
          update: {
            $inc: { saledQty: item.quantity },
          },
        },
      }))
    );

    // CREATE ORDER
    const myOrder = await OrderModel.create({
      userId,
      deliveryDetails,
      orderedProducts,
      deliveryStatus,
      createdAt: new Date(),
    });

    return res.json({ message: "Successfully order added", myOrder });
  } catch (error) {
    console.log(error);
    res.json(error);
  }
};
