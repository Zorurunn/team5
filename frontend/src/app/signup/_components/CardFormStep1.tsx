"use client";

import { Button, Stack, TextField, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { CustomInput } from "../../../components";
import { Dispatch, SetStateAction, useState } from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import { Loader } from "@/components/Loader";

export function CardFormStep1({
  setStep,
}: {
  setStep: Dispatch<SetStateAction<number>>;
}) {
  const [open, setOpen] = useState(false);

  const validationSchema = yup.object({
    storeName: yup.string().required("Нэрээ оруулна уу"),
  });

  const formik = useFormik({
    initialValues: {
      storeName: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      // await signup({
      //   email: values.email,
      //   name: values.name,
      //   password: values.password,
      //   address: values.address,
      // });
      setOpen(true);
      await console.log(formik.values);
      setOpen(false);
    },
  });
  return (
    <Stack width={452} p={3} gap={3}>
      <Typography
        sx={{
          fontSize: "32px",
          fontWeight: "700",
          color: "text.primary",
        }}
      >
        Дэлгүүрийн мэдээлэл
      </Typography>
      <Stack
        sx={{
          gap: "16px",
          width: "100%",
        }}
      >
        <Stack
          sx={{
            gap: "8px",
          }}
        >
          <CustomInput
            name="storeName"
            label=" Танай дэлгүүрийн нэр юу вэ?"
            placeHolder="Дэлгүүрийн нэр"
            type="text"
            handleChange={formik.handleChange}
            value={formik.values.storeName}
            error={formik.touched.storeName && Boolean(formik.errors.storeName)}
            helperText={String(formik.errors.storeName)}
            onBlur={formik.handleBlur}
            sx={{
              fontSize: "16px",
              fontWeight: "400",
            }}
          />
        </Stack>
        <Stack
          direction="row"
          sx={{
            width: "100%",
            justifyContent: "space-between",
            pt: "40px",
          }}
        >
          <Stack
            onClick={() => {
              setStep((prev) => prev - 1);
            }}
            sx={{
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              backgroundColor: "#1C20240A",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ArrowBackIcon fontSize="medium" sx={{ color: "text.primary" }} />
          </Stack>
          <Button
            sx={{
              width: "fit-content",
              py: "8px",
              pr: "10px",
              background: "#FB2E86",
              color: "white",
              "&:hover": {
                backgroundColor: "#E5E5E5",
                color: "#FB2E86",
              },
              gap: "8px",
            }}
            variant="contained"
            fullWidth
            disabled={!formik.isValid || open}
            onClick={() => {
              formik.handleSubmit();
              setStep((prev) => prev + 1);
            }}
          >
            {open && <Loader />}
            <Typography fontSize={16} fontWeight={600}>
              Дараах
            </Typography>
            <ArrowForwardIcon fontSize="medium" />
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
}
