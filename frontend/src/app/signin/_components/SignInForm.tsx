"use client";
import { Button, Stack, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "next/link";
import { CustomInput } from "@/components";
import Image from "next/image";
import * as yup from "yup";
import { useFormik } from "formik";
import { useAuth } from "@/components/provider/AuthProvider";
import { useState } from "react";
import { Loader } from "@/components/Loader";
import { useRouter } from "next/navigation";

export default function SignInForm() {
  const { signIn } = useAuth();
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const validationSchema = yup.object({
    email: yup
      .string()
      .email("И-мэйл буруу байна")
      .required("И-мэйлээ оруулна уу"),
    password: yup
      .string()
      // .matches(
      //   /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      //   "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number, and One Special Case Character"
      // )
      .required("Нууц үгээ оруулна уу"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      setOpen(true);
      await signIn({
        email: values.email,
        password: values.password,
      });
      router.push("client");
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
          Нэвтрэх
        </Typography>
      </Stack>
      <Stack gap={3}>
        <CustomInput
          name="email"
          label="Имэйл"
          placeHolder="Имэйл оруулна уу"
          type="text"
          handleChange={formik.handleChange}
          value={formik.values.email}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={String(formik.errors.email)}
          onBlur={formik.handleBlur}
        />
        <Stack alignItems={"flex-end"}>
          <CustomInput
            name="password"
            label="Нууц үг"
            placeHolder="Нууц үг оруулна уу"
            type="password"
            adornment="end"
            handleChange={formik.handleChange}
            value={formik.values.password}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={String(formik.errors.password)}
            onBlur={formik.handleBlur}
          />
          <Link href={"/resetpassword"}>
            <Typography fontSize={14} fontWeight={400}>
              Нууц үг сэргээх
            </Typography>
          </Link>
        </Stack>
        <Stack>
          <Button
            fullWidth
            onClick={() => {
              formik.handleSubmit();
              setOpen(false);
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
              Нэвтрэх
            </Typography>
            <ArrowForwardIcon fontSize="medium" />
          </Button>
        </Stack>
        <Stack width={"100%"} pt={2} gap={2}>
          <Stack border={1} borderColor="#ECEDF0"></Stack>
          <Typography
            alignSelf={"center"}
            color={"#551a8b"}
            borderBottom={"1px solid #551a8b"}
            sx={{
              cursor: "pointer",
            }}
          >
            Мерчант нэвтрэх
          </Typography>
          <Stack border={1} borderColor="#ECEDF0"></Stack>
          <Button
            fullWidth
            sx={{
              py: "10.5px",
              background: "#ECEDF0",
              color: "#000",
              direction: "row",
              gap: "8px",
            }}
          >
            <Image
              src="/signup-imgs/Google Logo.svg"
              alt=""
              width={24}
              height={24}
            />
            <Typography fontSize={12} fontWeight={200}>
              Google-ээр нэвтрэх
            </Typography>
          </Button>
          <Button
            fullWidth
            sx={{
              py: "10.5px",
              background: "#ECEDF0",
              color: "#000",
              direction: "row",
              gap: "8px",
            }}
          >
            <Image
              src="/signup-imgs/Microsoft Logo.svg"
              alt=""
              width={24}
              height={24}
            />
            <Typography fontSize={12} fontWeight={200}>
              Microsoft-оор нэвтрэх
            </Typography>
          </Button>
          <Button
            fullWidth
            sx={{
              py: "10.5px",
              background: "#ECEDF0",
              color: "#000",
              direction: "row",
              gap: "8px",
            }}
          >
            <Image
              src="/signup-imgs/Apple Logo.svg"
              alt=""
              width={24}
              height={24}
            />
            <Typography fontSize={12} fontWeight={200}>
              Apple-аар нэвтрэх
            </Typography>
          </Button>
          <Stack border={1} borderColor="#ECEDF0"></Stack>
        </Stack>
        <Stack direction={"row"} justifyContent={"center"} gap={1}>
          <Typography>Бүртгэлгүй юу?</Typography>
          <Link href={"/signup"}>
            <Typography color={"#551a8b"} borderBottom={"1px solid #551a8b"}>
              Бүртгүүлэх
            </Typography>
          </Link>
        </Stack>
      </Stack>
    </Stack>
  );
}
