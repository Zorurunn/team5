import { Stack, Typography } from "@mui/material";
import SignInForm from "./_components/SignInForm";
import Image from "next/image";
import Header from "../client/_components/header&footer/Header";
import { Footer } from "../client/_components/header&footer/Footer";

export default function SignIn() {
  return (
    <Stack height={"100vh"}>
      <Header />
      <Stack
        height={"100%"}
        justifyContent={"space-between"}
        alignItems={"center"}
        px={4}
        py={8}
      >
        <SignInForm />
      </Stack>
      <Footer />
    </Stack>
  );
}
