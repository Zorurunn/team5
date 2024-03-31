"use client";

import { Button, Container, Stack } from "@mui/material";
import Image from "next/image";
import Header from "./client/_components/header&footer/Header";
import { Footer } from "./client/_components/header&footer/Footer";

export default function NotFound() {
  return (
    <Stack bgcolor={"#fff"}>
      <Header />
      <Container maxWidth={"lg"}>
        <Stack
          width={"100%"}
          height={"100vh"}
          py={10}
          alignItems={"center"}
          gap={8}
        >
          <Stack position={"relative"}>
            <Image src={"/404.png"} alt="404" width={1020} height={640} />
            <Stack
              position={"absolute"}
              bottom={85}
              left={210}
              fontWeight={800}
              fontSize={24}
            >
              Уучлаарай, таны хайсан мэдээлэл олдсонгүй
            </Stack>
          </Stack>
          <Button
            sx={{
              width: "165px",
              height: "44px",
              color: "#fff",
              bgcolor: "#FB2E86",
              fontWeight: "800",
              fontSize: "16px",
            }}
          >
            Нүүр хуудас
          </Button>
        </Stack>
      </Container>
      <Footer />
    </Stack>
  );
}
