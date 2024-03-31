"use client";

import { Button, Stack, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "next/link";
import { CustomInput } from "@/components";
import { Dispatch, SetStateAction, useState } from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import { useAuth } from "@/components/provider/AuthProvider";
import { Loader } from "@/components/Loader";

export const SignUpForm = ({
  setStep,
}: {
  setStep: Dispatch<SetStateAction<number>>;
}) => {
  const { signUp } = useAuth();
  const [open, setOpen] = useState(false);

  const validationSchema = yup.object({
    userName: yup.string().required("Нэрээ оруулна уу"),
    email: yup
      .string()
      .email("И-мэйл буруу байна")
      .required("И-мэйлээ оруулна уу"),
    phoneNumber: yup
      .string()
      .matches(/^(?=.*\d)[0-9]{8,8}$/)
      .required("Утасны дугаар оруулна уу"),
    password: yup
      .string()
      // .matches(
      //   /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      //   "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number, and One Special Case Character"
      // )
      .required("Нууц үгээ оруулна уу"),
    rePassword: yup
      .string()
      .required("Нууц үгээ давтаж оруулна уу")
      .oneOf([yup.ref("password")]),
  });

  const formik = useFormik({
    initialValues: {
      userName: "",
      email: "",
      phoneNumber: "",
      password: "",
      rePassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      setOpen(true);
      await signUp({
        userName: values.userName,
        email: values.email,
        phoneNumber: values.phoneNumber,
        password: values.password,
      });
      setOpen(false);
    },
  });
  return (
    <Stack padding={3} maxWidth={"400px"} width={"100%"}>
      <Stack gap={4}>
        <Typography
          fontSize={28}
          fontWeight="bold"
          variant="h4"
          textAlign="center"
          pb={4}
        >
          Бүртгүүлэх
        </Typography>
      </Stack>
      <Stack gap={3}>
        <CustomInput
          name="userName"
          label="Нэр"
          placeHolder="Нэр оруулна уу"
          handleChange={formik.handleChange}
          value={formik.values.userName}
          error={formik.touched.userName && Boolean(formik.errors.userName)}
          helperText={String(formik.errors.userName)}
          onBlur={formik.handleBlur}
          type="text"
        />
        <CustomInput
          name="email"
          label="Имэйл"
          placeHolder="Имэйл оруулна уу"
          handleChange={formik.handleChange}
          value={formik.values.email}
          error={formik.touched.email && Boolean(formik.errors.email)}
          onBlur={formik.handleBlur}
          helperText={String(formik.errors.email)}
          type="text"
        />
        <CustomInput
          name="phoneNumber"
          label="Утасны дугаар"
          placeHolder="Утасны дугаар оруулна уу"
          handleChange={formik.handleChange}
          value={formik.values.phoneNumber}
          error={
            formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)
          }
          helperText={String(formik.errors.phoneNumber)}
          onBlur={formik.handleBlur}
          type="tel"
        />
        <CustomInput
          name="password"
          label="Нууц үг"
          placeHolder="Нууц үгээ оруулна уу"
          handleChange={formik.handleChange}
          value={formik.values.password}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={String(formik.errors.password)}
          onBlur={formik.handleBlur}
          type="password"
          adornment="end"
        />
        <CustomInput
          name="rePassword"
          label="Нууц үг давтах"
          placeHolder="Нууц үгээ давтаж оруулна уу"
          handleChange={formik.handleChange}
          value={formik.values.rePassword}
          error={formik.touched.rePassword && Boolean(formik.errors.rePassword)}
          helperText={String(formik.errors.rePassword)}
          onBlur={formik.handleBlur}
          type="password"
          adornment="end"
        />
        <Stack>
          <Button
            fullWidth
            onClick={() => {
              formik.handleSubmit();
            }}
            disabled={!formik.isValid || open}
            variant="contained"
            sx={{
              justifyContent: "flex-end",
              py: "14.5px",
              background: "#FB2E86",
              color: "white",
              gap: "8px",
              "&:hover": {
                backgroundColor: "#E5E5E5",
                color: "#FB2E86",
              },
            }}
          >
            {open && <Loader />}
            <Typography mr={"28%"} fontSize={16} fontWeight={600}>
              Дараах
            </Typography>
            <ArrowForwardIcon fontSize="medium" />
          </Button>
        </Stack>
        <Stack border={1} borderColor="#ECEDF0"></Stack>
        <Stack direction={"row"} justifyContent={"center"} gap={1}>
          <Typography>Бүртгэлтэй юу?</Typography>
          <Link href={"/signin"}>
            <Typography color={"#551a8b"} borderBottom={"1px solid #551a8b"}>
              Нэвтрэх
            </Typography>
          </Link>
        </Stack>
      </Stack>
    </Stack>
  );
};
