import { Router } from "express";
import { addRating } from "../controllers/rating.controller";

const ratingRouter = Router();

ratingRouter.post("/addRating", addRating);

export default ratingRouter;
