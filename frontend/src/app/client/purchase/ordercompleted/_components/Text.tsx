"use client";

import { Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Text = () => {
  const router = useRouter();
  return (
    <Stack
      width={"70%"}
      px={24}
      paddingBottom={8}
      alignItems={"center"}
      gap={4}
      position="relative"
      borderBottom="1px dashed #D2D1D1"
      borderLeft="1px dashed #D2D1D1"
    >
      <Image
        style={{ position: "absolute", top: 0, left: -47 }}
        alt="checkImage"
        src={"/images/clock.png"}
        width={94}
        height={94}
      ></Image>
      <Image
        style={{ position: "absolute", bottom: -35, right: -20 }}
        alt="checkImage"
        src={"/images/list.png"}
        width={60}
        height={70}
      ></Image>
      <Image
        alt="checkImage"
        src={"/images/grouped.png"}
        width={87}
        height={80}
      ></Image>
      <Typography fontSize={36} fontWeight={800} color={"#101750"}>
        Таны захиалга амжилттай
      </Typography>
      <Typography
        fontWeight={600}
        fontSize={16}
        color={"#8D92A7"}
        textAlign="center"
      >
        Thank you for your order! Your order is being processed and will be
        completed within 3-6 hours. You will receive an email confirmation when
        your order is completed.
      </Typography>
      <Button
        sx={{
          width: "208px",
          fontSize: "16px",
          fontWeight: "600",
          backgroundColor: "#FF1788",
          color: "#fff",
        }}
        onClick={() => {
          router.push("/client");
        }}
      >
        Үргэлжлүүлэх
      </Button>
    </Stack>
  );
};

export default Text;
