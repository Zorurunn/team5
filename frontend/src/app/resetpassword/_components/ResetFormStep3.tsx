"use client";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Stack, Typography } from "@mui/material";
import { CustomInput } from "@/components";
import { Button } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import { useAuth } from "@/components/provider/AuthProvider";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction, useState } from "react";
import { Loader } from "@/components/Loader";

export const ResetFormStep3 = ({
  index,
  setIndex,
}: {
  index: number;
  setIndex: Dispatch<SetStateAction<number>>;
}) => {
  const router = useRouter();
  const { resetPassword, userEmail, userOtp } = useAuth();
  const [open, setOpen] = useState(false);

  const validationSchema = yup.object({
    newPassword: yup.string().required("Шинэ нууц үгээ оруулна уу"),
    reNewPassword: yup
      .string()
      .required("")
      .oneOf([yup.ref("newPassword")]),
  });

  const formik = useFormik({
    initialValues: {
      newPassword: "",
      reNewPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      setOpen(true);
      await resetPassword({
        email: userEmail,
        code: userOtp,
        newPassword: values.newPassword,
      });
      setIndex((prev) => prev + 1);
      setOpen(false);
    },
  });

  return (
    <Stack
      maxWidth={"450px"}
      width={"100%"}
      padding={4}
      spacing={6}
      sx={{ justifyContent: "center", alignItems: " center" }}
    >
      <Typography fontSize={28} fontWeight={700}>
        Шинэ нууц үг зохиох
      </Typography>
      <Stack gap={6} width={"100%"}>
        <Stack gap={3}>
          <CustomInput
            name="newPassword"
            label="Шинэ нууц үг"
            placeHolder="Шинэ нууц үгээ оруулна уу"
            type="password"
            adornment="end"
            handleChange={formik.handleChange}
            value={formik.values.newPassword}
            error={
              formik.touched.newPassword && Boolean(formik.errors.newPassword)
            }
            onBlur={formik.handleBlur}
            helperText={String(formik.errors.newPassword)}
          />

          <CustomInput
            name="reNewPassword"
            label="Шинэ нууц үг давтах "
            placeHolder="Шинэ нууц үгээ давтаж оруулна уу"
            type="password"
            adornment="end"
            handleChange={formik.handleChange}
            value={formik.values.reNewPassword}
            error={
              formik.touched.reNewPassword &&
              Boolean(formik.errors.reNewPassword)
            }
            onBlur={formik.handleBlur}
            helperText={String(formik.errors.reNewPassword)}
          />
        </Stack>
        <Button
          fullWidth
          onClick={() => {
            formik.handleSubmit();
            if (index == 2) {
              router.push("/client");
            }
            setIndex(0);
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
              backgroundColor: "#e5e5e5",
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
    </Stack>
  );
};
