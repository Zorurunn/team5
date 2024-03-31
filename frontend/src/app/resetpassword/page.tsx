"use client";

import { useAuth } from "@/components/provider/AuthProvider";
import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import { ResetFormStep1 } from "./_components/ResetFormStep1";
import { ResetFormStep2 } from "./_components/ResetFormStep2";
import { ResetFormStep3 } from "./_components/ResetFormStep3";
import { useState } from "react";
import Header from "../client/_components/header&footer/Header";
import { Footer } from "../client/_components/header&footer/Footer";

export default function ResetPassword() {
  const { index, setIndex } = useAuth();

  return (
    <Stack height={"100vh"}>
      <Header />
      <Stack
        justifyContent={"space-between"}
        alignItems={"center"}
        px={4}
        py={8}
      >
        {index === 0 && <ResetFormStep1 />}
        {index === 1 && <ResetFormStep2 setIndex={setIndex} />}
        {index === 2 && <ResetFormStep3 index={index} setIndex={setIndex} />}
      </Stack>
      <Footer />
    </Stack>
  );
}
