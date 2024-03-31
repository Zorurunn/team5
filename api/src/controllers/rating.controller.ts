import { RequestHandler } from "express";
import { ProductModel } from "../models";
import { RatingModel } from "../models/rating.model";
import jwt from "jsonwebtoken";
type Payload = {
  id: string;
};
// ADD RATING
export const addRating: RequestHandler = async (req, res) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      message: "Invalid credentials: AUTHORIZATION NOT FOUND",
    });
  }
  const { id } = jwt.verify(authorization, "secret-key") as Payload;
  const { productId, rate, comment } = req.body;

  const isRated = await RatingModel.find({ userId: id, productId });
  if (isRated)
    return res.status(401).json({
      message: "already rated",
    });
  try {
    // ADD RATING MODEL
    await RatingModel.create({
      userId: id,
      productId,
      rate,
      comment,
    });

    // PRODUCT UPDATE
    const product = await ProductModel.findOne({ _id: productId });

    if (!product)
      return res.status(401).json({
        message: "can not find this  product",
      });

    const ratedQty = product.rating?.ratedQty;
    const starAverage = product.rating?.starAverage;
    if (ratedQty === undefined || starAverage === undefined)
      return res.status(401).json({
        message: "can not find ratings field",
      });
    const totalStar = starAverage * ratedQty;
    if (ratedQty === 0) {
      await ProductModel.updateOne(
        { _id: productId },
        {
          "rating.ratedQty": 1,
          "rating.starAverage": rate,
        }
      );
    } else {
      const newStarAverage = (totalStar + rate) / (ratedQty + 1);
      const aa = await ProductModel.updateOne(
        { _id: productId },
        {
          $inc: { "rating.ratedQty": 1 },
          "rating.starAverage": Math.floor(newStarAverage),
        }
      );
    }

    return res.json({ message: "rating added" });
  } catch (error) {
    res.json(error);
  }
};
