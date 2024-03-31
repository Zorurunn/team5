"use client";

import { CircularProgress, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import { CardFormStep2 } from "./_components/CardFormStep2";
import { CardFormStep3 } from "./_components/CardFormStep3";
import { CardFormStep1 } from "./_components/CardFormStep1";
import { SignUpForm } from "./_components/SignUpForm";
import ProgressStep from "./_components/ProgressStep";
import { useAuth } from "@/components/provider/AuthProvider";
import { Loader } from "@/components/Loader";
import { Footer } from "../client/_components/header&footer/Footer";
import Header from "../client/_components/header&footer/Header";

export default function SignUp() {
  const { step, setStep } = useAuth();

  return (
    <Stack height={"100vh"}>
      <Header />
      <Stack
        height={"100%"}
        justifyContent={"space-between"}
        alignItems={"center"}
        px={4}
        py={2}
        width={"100vw"}
      >
        <Stack
          width={"100%"}
          height={"100%"}
          justifyContent={"center"}
          alignItems={"center"}
          mb={5}
        >
          {step === 1 && <SignUpForm setStep={setStep} />}
          {step === 2 && (
            <Stack
              width={"100%"}
              height={"100%"}
              alignItems={"center"}
              gap={10}
              mt={5}
            >
              <ProgressStep step={step} />
              <CardFormStep1 setStep={setStep} />
            </Stack>
          )}
          {step === 3 && (
            <Stack
              width={"100%"}
              height={"100%"}
              alignItems={"center"}
              gap={10}
              mt={5}
            >
              <ProgressStep step={step} />
              <CardFormStep2 setStep={setStep} />
            </Stack>
          )}
          {step === 4 && (
            <Stack
              width={"100%"}
              height={"100%"}
              alignItems={"center"}
              gap={10}
              mt={5}
            >
              <ProgressStep step={step} />
              <CardFormStep3 setStep={setStep} step={step} />
            </Stack>
          )}
        </Stack>
      </Stack>
      <Footer />
    </Stack>
  );
}
