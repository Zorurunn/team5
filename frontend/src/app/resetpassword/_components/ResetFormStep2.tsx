"use client";

import { Stack, Typography } from "@mui/material";
import { CustomInput } from "@/components";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Button } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import { useAuth } from "@/components/provider/AuthProvider";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export const ResetFormStep2 = ({
  setIndex,
}: {
  setIndex: Dispatch<SetStateAction<number>>;
}) => {
  const { userEmail, setUserOtp, sendEmail } = useAuth();
  const [open, setOpen] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const validationSchema = yup.object({
    code: yup.string().required("Нууц үг сэргээх кодоо оруулна уу"),
  });

  const formik = useFormik({
    initialValues: {
      code: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      setOpen(true);
      await setUserOtp(values.code);
      setOpen(false);
    },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setIsClicked(false);
    }, 5000);
    return () => clearInterval(interval);
  }, [isClicked]);

  return (
    <Stack
      maxWidth={"450px"}
      width={"100%"}
      padding={4}
      spacing={6}
      sx={{ justifyContent: "center", alignItems: " center" }}
    >
      <Typography fontSize={28} fontWeight={700}>
        Нууц үг сэргээх
      </Typography>
      <Stack gap={6} width={"100%"}>
        <Stack gap={2}>
          <Typography>
            Таны
            <Typography ml={1} color={"primary.main"} component={"span"}>
              {userEmail}
            </Typography>
            -руу нууц үг сэргээх код илгээх болно.
          </Typography>

          <Stack alignItems={"flex-end"} gap={1}>
            <CustomInput
              name="code"
              label="Нууц үг сэргээх код"
              placeHolder="Нууц үг сэргээх код оруулна уу"
              type="text"
              handleChange={formik.handleChange}
              value={formik.values.code}
              error={formik.touched.code && Boolean(formik.errors.code)}
              helperText={String(formik.errors.code)}
              onBlur={formik.handleBlur}
            />

            <Button
              onClick={() => {
                sendEmail({ email: userEmail });
                setIsClicked(true);
              }}
              sx={{
                color: "#551a8b",
              }}
              disabled={isClicked}
            >
              Код дахин илгээх
            </Button>
          </Stack>
        </Stack>
        <Button
          fullWidth
          onClick={() => {
            formik.handleSubmit();
            setIndex((prev) => prev + 1);
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
          {open && <Stack className="btnLoader"></Stack>}
          <Typography mr={"28%"} fontSize={16} fontWeight={600}>
            Нэвтрэх
          </Typography>
          <ArrowForwardIcon fontSize="medium" />
        </Button>
      </Stack>
    </Stack>
  );
};
