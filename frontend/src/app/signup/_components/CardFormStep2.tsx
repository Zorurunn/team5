import { CustomInput } from "@/components";
import { Button, MenuItem, Stack, Typography } from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import * as yup from "yup";
import { useFormik } from "formik";
import { Loader } from "@/components/Loader";

export const arr = ["1", "2", "3", "4", "5"];

export const CardFormStep2 = ({
  setStep,
}: {
  setStep: Dispatch<SetStateAction<number>>;
}) => {
  const [open, setOpen] = useState(false);

  const validationSchema = yup.object({
    city: yup.string().required("Сонгоно уу"),
    district: yup.string().required("Сонгоно уу"),
    street: yup.string().required("Сонгоно уу"),
  });

  const formik = useFormik({
    initialValues: {
      city: "",
      district: "",
      street: "",
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
    <Stack maxWidth={"452px"} width={"100%"} p={3}>
      <Stack gap={3} width={"100%"}>
        <Typography fontSize={32} fontWeight={700}>
          Бүс нутгийн мэдээлэл
        </Typography>
        <CustomInput
          borderRadius="8px"
          name="city"
          label="Хот/Аймаг"
          type="text"
          placeHolder="Сонгох"
          select={true}
          handleChange={formik.handleChange}
          value={formik.values.city}
          error={formik.touched.city && Boolean(formik.errors.city)}
          helperText={String(formik.errors.city)}
          onBlur={formik.handleBlur}
        >
          {arr.map((item: any) => (
            <MenuItem sx={{ bgcolor: "#fff" }} key={item} value={item}>
              {item}
            </MenuItem>
          ))}
        </CustomInput>
        <CustomInput
          borderRadius="8px"
          name="district"
          label="Сум/Дүүрэг"
          type="text"
          placeHolder="Сонгох"
          select={true}
          handleChange={formik.handleChange}
          value={formik.values.district}
          error={formik.touched.district && Boolean(formik.errors.district)}
          helperText={String(formik.errors.district)}
          onBlur={formik.handleBlur}
        >
          {arr.map((item: any) => (
            <MenuItem sx={{ bgcolor: "#fff" }} key={item} value={item}>
              {item}
            </MenuItem>
          ))}
        </CustomInput>
        <CustomInput
          borderRadius="8px"
          name="street"
          label="Хороо"
          type="text"
          placeHolder="Сонгох"
          select={true}
          handleChange={formik.handleChange}
          value={formik.values.street}
          error={formik.touched.street && Boolean(formik.errors.street)}
          helperText={String(formik.errors.street)}
          onBlur={formik.handleBlur}
        >
          {arr.map((item: any) => (
            <MenuItem sx={{ bgcolor: "#fff" }} key={item} value={item}>
              {item}
            </MenuItem>
          ))}
        </CustomInput>
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
            setOpen(false);
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
  );
};
