"use client";

import { Button, MenuItem, Stack, TextField, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { CustomInput } from "@/components";
import { CardFormStep3Experience, CardFormStep3Products } from "@/constants";
import { Dispatch, SetStateAction, useState } from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { Loader } from "@/components/Loader";

export function CardFormStep3({
  step,
  setStep,
}: {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
}) {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const validationSchema = yup.object({
    salesExprience: yup.string().required("Сонгоно уу"),
    productType: yup.string().required("Сонгоно уу"),
  });

  const formik = useFormik({
    initialValues: {
      salesExprience: "",
      productType: "",
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
    },
  });
  return (
    <Stack maxWidth={452} width={"100%"} gap={3} p={3}>
      <Typography fontSize={32} fontWeight={700} color={"text.primary"}>
        Жоохон танилцья
      </Typography>
      <Typography fontSize={16} fontWeight={400} color={"text.primary"}>
        Энэ мэдээллийг дэлгүүрийн тохиргоонд туслах зорилгоор ашиглана.
      </Typography>
      <Stack gap={2}>
        <Stack gap={3}>
          <CustomInput
            borderRadius="8px"
            name="salesExprience"
            label="Та борлуулалт хийж байсан туршлагатай юу?"
            type="text"
            placeHolder="Сонгох"
            select={true}
            handleChange={formik.handleChange}
            value={formik.values.salesExprience}
            error={
              formik.touched.salesExprience &&
              Boolean(formik.errors.salesExprience)
            }
            helperText={String(formik.errors.salesExprience)}
            onBlur={formik.handleBlur}
          >
            {CardFormStep3Experience.map((item) => {
              return <MenuItem value={item}>{item}</MenuItem>;
            })}
          </CustomInput>

          <CustomInput
            borderRadius="8px"
            name="productType"
            label="Та ямар төрлийн бүтээгдэхүүн борлуулах вэ?"
            type="text"
            placeHolder="Сонгох"
            select={true}
            handleChange={formik.handleChange}
            value={formik.values.productType}
            error={
              formik.touched.productType && Boolean(formik.errors.productType)
            }
            helperText={String(formik.errors.productType)}
            onBlur={formik.handleBlur}
          >
            {CardFormStep3Products.map((item) => {
              return <MenuItem value={item}>{item}</MenuItem>;
            })}
          </CustomInput>
        </Stack>
        <Stack direction="row" pt={5} justifyContent={"space-between"}>
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
              if (step == 4) {
                router.push("signin");
                setStep(0);
              }
              setOpen(false);
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
