import { Router } from "express";
import {
  createGeneralCategory,
  createSubCategory,
  getGeneralCategories,
  getSubCategories,
  updateSubCategory,
} from "../controllers/category.controller";

const categoryRouter = Router();

categoryRouter
  .post("/createGeneralCategory", createGeneralCategory)
  .post("/updateSubCategory", updateSubCategory)
  .get("/getGeneralCategories", getGeneralCategories)
  .get("/getSubCategories", getSubCategories)
  .post("/createSubCategory", createSubCategory);

export default categoryRouter;
