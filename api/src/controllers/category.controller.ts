import { RequestHandler } from "express";
import { GeneralCategoryModel, SubCategoryModel } from "../models";
import { Model } from "mongoose";

// CREATE GENERAL CATEGORY
export const createGeneralCategory: RequestHandler = async (req, res) => {
  const { generalCategoryName } = req.body;

  try {
    const categoryExists = await GeneralCategoryModel.find({
      generalCategoryName,
    });

    if (categoryExists.length) {
      return res.status(401).json({
        message: "category already exists",
      });
    }

    await GeneralCategoryModel.create({
      generalCategoryName,
      createdAt: new Date(),
    });

    return res.json({ message: "Successfully category added" });
  } catch (error) {
    res.json(error);
  }
};

// CREATE SUB CATEGORY
export const createSubCategory: RequestHandler = async (req, res) => {
  const { subCategoryName, generalCategoryId } = req.body;

  try {
    const categoryExists = await SubCategoryModel.find({
      subCategoryName,
    });

    if (categoryExists.length) {
      return res.status(401).json({
        message: "category already exists. Update it !!!",
      });
    }

    //
    // id
    // rating unelge number
    // comment
    // product ID

    // product Model
    // rating
    // nemeed rate hiisen hunii toond huwaana
    // dundaj  4.5
    // niit heden hun unelgee ugsun  1000 hun

    //
    //
    //

    await SubCategoryModel.create({
      subCategoryName,
      generalCategoryId,
      createdAt: new Date(),
    });

    return res.json({ message: "Successfully category added" });
  } catch (error) {
    res.json(error);
  }
};
// UPDATE SUB CATEGORY
export const updateSubCategory: RequestHandler = async (req, res) => {
  const { subCategoryName, generalCategoryId } = req.body;

  try {
    const categoryExists = await SubCategoryModel.find({
      subCategoryName,
    });
    if (!categoryExists.length) {
      return res.status(401).json({
        message: "no sub category exists. first create sub category",
      });
    }
    const categoryExistsWithGeneral = await SubCategoryModel.find({
      subCategoryName,
      generalCategoryId,
    });

    if (categoryExistsWithGeneral.length) {
      return res.status(401).json({
        message: "category already exists",
      });
    }

    await SubCategoryModel.updateOne(
      {
        subCategoryName,
      },
      { $push: { generalCategoryId: generalCategoryId }, updatedAt: new Date() }
    );

    return res.json({ message: "Successfully category updated" });
  } catch (error) {
    res.json(error);
  }
};

// GET GENERAL CATEGORY
export const getGeneralCategories: RequestHandler = async (req, res) => {
  try {
    const generalCategories = await GeneralCategoryModel.find({});

    return res.json(generalCategories);
  } catch (error) {
    res.json(error);
  }
};

// GET SUB CATEGORY
export const getSubCategories: RequestHandler = async (req, res) => {
  try {
    const subCategories = await SubCategoryModel.find({});

    return res.json(subCategories);
  } catch (error) {
    res.json(error);
  }
};
