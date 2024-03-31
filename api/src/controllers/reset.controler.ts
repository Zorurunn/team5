import { RequestHandler } from "express";
import nodemailer from "nodemailer";
import { UserModel } from "../models";

// SENDEMAIL
export const sendEmail: RequestHandler = async (req, res) => {
  const { email } = req.body;

  const user = await UserModel.findOne({ email: email });

  if (!user) {
    return res.status(401).json({
      message: "Хэрэглэгч олдсонгүй",
    });
  }

  const otpCode = Math.floor(Math.random() * 10000);

  try {
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "uulaaka73@gmail.com",
        pass: "utrhxcutldbgdjuk",
      },
    });
    const mailOptions = {
      from: "uulaaka73@gmail.com",
      to: email,
      subject: "from Food Delivery",
      text: `Нэг удаагын code: ${otpCode}`,
    };
    await transporter.sendMail(mailOptions);

    const checkotb = await UserModel.updateOne(
      {
        _id: user.id,
      },
      { $set: { otp: otpCode } }
    );

    res.json({ message: `Нэг удаагын код ${email}-руу амжилттай илгээгдлээ` });
  } catch (error) {
    res.status(500).json(error);
  }
};

// RESETPASSWORD
export const reserPassword: RequestHandler = async (req, res) => {
  const { email, code, newPassword } = req.body;

  const user = await UserModel.findOne({ email: email, otp: code });

  if (!user) {
    return res.status(401).json({
      message: "Нэг удаагийн код буруу байна.",
    });
  }
  try {
    if (user.otp == code) {
      await UserModel.updateOne(
        { email: email },
        {
          password: newPassword,
          updatedAt: new Date(),
        }
      );
    }

    res.json({ message: "Хэрэглэгчийн нууц үг шинэчлэгдсэн" });
  } catch (error) {
    res.status(500).json(error);
  }
};
