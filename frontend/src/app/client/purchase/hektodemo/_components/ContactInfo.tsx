"use client";

import { CustomInput } from "@/components";
import { Button, Stack, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

export const ContactInfo = () => {
  const validationSchema = yup.object({
    email: yup
      .string()
      .email("И-мэйл буруу байна")
      .required("И-мэйлээ оруулна уу"),
    firstname: yup.string(),
    lasrname: yup.string(),
    address: yup.string().required("Хаягаа оруулна уу"),
    appartment: yup.string(),
    city: yup.string(),
    cityname: yup.string().required("Хотоо оруулна уу"),
    postalcode: yup.number().required(),
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {},
  });
  return (
    <Stack width={"65%"} bgcolor={"#F8F8FD"} borderRadius={"3px"}>
      <Stack px={"42px"} py="67px" gap={"100px"}>
        <Stack gap={6}>
          <Typography fontWeight={800} fontSize={18} color={"#1D3178"}>
            Contact Information
          </Typography>
          <CustomInput
            variant="standard"
            type="text"
            borderColor="#BFC6E0"
            placeHolder="Email or mobile phone number"
            handleChange={formik.handleChange}
            value={formik.values.email}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={String(formik.errors.email)}
            onBlur={formik.handleBlur}
            bgcolor="none"
            sx={{
              "& input::placeholder": {
                color: "#C1C8E1",
              },
            }}
          />
          <Stack direction={"row"} gap={1} alignItems={"center"} fontSize={12}>
            <CheckBoxIcon fontSize="inherit" sx={{ color: "#19D16F" }} />
            <Typography fontSize={12} fontWeight={500} color={"#8A91AB"}>
              Keep me up to date on news and excluive offers
            </Typography>
          </Stack>
        </Stack>
        <Stack gap={6}>
          <Typography fontWeight={800} fontSize={18} color={"#1D3178"}>
            Shipping address
          </Typography>
          <Stack direction={"row"} width={"100%"} alignItems={"center"} gap={4}>
            <Stack width={"50%"}>
              <CustomInput
                variant="standard"
                type="text"
                borderColor="#BFC6E0"
                placeHolder="First name (optional)"
                handleChange={formik.handleChange}
                onBlur={formik.handleBlur}
                bgcolor="none"
                sx={{
                  "& input::placeholder": {
                    color: "#C1C8E1",
                  },
                }}
              />
            </Stack>
            <Stack width={"50%"}>
              <CustomInput
                variant="standard"
                type="text"
                borderColor="#BFC6E0"
                placeHolder="Last name"
                handleChange={formik.handleChange}
                onBlur={formik.handleBlur}
                bgcolor="none"
                sx={{
                  "& input::placeholder": {
                    color: "#C1C8E1",
                  },
                }}
              />
            </Stack>
          </Stack>
          <CustomInput
            variant="standard"
            type="text"
            borderColor="#BFC6E0"
            placeHolder="Address"
            handleChange={formik.handleChange}
            onBlur={formik.handleBlur}
            bgcolor="none"
            sx={{
              "& input::placeholder": {
                color: "#C1C8E1",
              },
            }}
          />
          <CustomInput
            variant="standard"
            type="text"
            borderColor="#BFC6E0"
            placeHolder="Appaetnentment,suit,e.t.c (optinal)"
            handleChange={formik.handleChange}
            onBlur={formik.handleBlur}
            bgcolor="none"
            sx={{
              "& input::placeholder": {
                color: "#C1C8E1",
              },
            }}
          />
          <CustomInput
            variant="standard"
            type="text"
            borderColor="#BFC6E0"
            placeHolder="City"
            handleChange={formik.handleChange}
            onBlur={formik.handleBlur}
            bgcolor="none"
            sx={{
              "& input::placeholder": {
                color: "#C1C8E1",
              },
            }}
          />
          <Stack direction={"row"} width={"100%"} alignItems={"center"} gap={4}>
            <Stack width={"50%"}>
              <CustomInput
                variant="standard"
                type="text"
                borderColor="#BFC6E0"
                placeHolder="Bangladesh"
                handleChange={formik.handleChange}
                onBlur={formik.handleBlur}
                bgcolor="none"
                sx={{
                  "& input::placeholder": {
                    color: "#C1C8E1",
                  },
                }}
              />
            </Stack>
            <Stack width={"50%"}>
              <CustomInput
                variant="standard"
                type="text"
                borderColor="#BFC6E0"
                placeHolder="Postal Code"
                handleChange={formik.handleChange}
                onBlur={formik.handleBlur}
                bgcolor="none"
                sx={{
                  "& input::placeholder": {
                    color: "#C1C8E1",
                  },
                }}
              />
            </Stack>
          </Stack>
        </Stack>
        <Button
          onClick={() => {
            formik.handleSubmit();
          }}
          sx={{
            bgcolor: "#FB2E86",
            width: "182px",
            height: "44px",
            fontSize: "16px",
            fontWeight: "800",
            color: "#fff",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Continue Shipping
        </Button>
      </Stack>
    </Stack>
  );
};
