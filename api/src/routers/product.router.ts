import { Router } from "express";
import {
  viewUpdate,
  createProduct,
  updateProduct,
  getProducts,
} from "../controllers/product.controller";

const productRouter = Router();

productRouter
  .post("/createProduct", createProduct)
  .post("/updateProduct", updateProduct)
  .post("/viewUpdate", viewUpdate)
  .get("/getProducts", getProducts);

export default productRouter;
