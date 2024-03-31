import { Router } from "express";
import { reserPassword, sendEmail } from "../controllers";

const emailRouter = Router();

emailRouter.post("/sendEmail", sendEmail).post("/resetPassword", reserPassword);

export default emailRouter;
