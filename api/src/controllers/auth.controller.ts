import { RequestHandler } from "express";
import jwt from "jsonwebtoken";
import { UserModel } from "../models";

// SIGN UP
export const signUp: RequestHandler = async (req, res) => {
  const { userName, email, phoneNumber, password } = req.body;
  try {
    const userExist = await UserModel.find({ email: email });

    if (userExist.length) {
      return res.status(401).json({
        message: `${email} и-мэйлтэй хэрэглэгч өмнө бүртгэгдсэн байна`,
      });
    }

    const user = await UserModel.create({
      userName,
      email,
      phoneNumber,
      password,
      updatedAt: new Date(),
      createdAt: new Date(),
    });

    return res.json({ message: "Шинэ хэрэглэгч амжилттай үүслээ" });
  } catch (error) {
    res.json(error);
  }
};

// SIGN IN
export const signIn: RequestHandler = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({ email: email });

    if (!user) {
      return res.status(401).json({
        message: "Бүртгэлтэй хэрэглэгч олдсонгүй",
      });
    }

    const userpassword = await UserModel.findOne({ password: password });

    if (!userpassword) {
      return res.status(401).json({
        message: "Нууц үг буруу байна",
      });
    }

    const id = user._id;
    const token = jwt.sign({ id }, "secret-key");

    return res.json({ token, message: "Амжилттай нэвтэрлээ" });
  } catch (error) {
    res.json(error);
  }
};
