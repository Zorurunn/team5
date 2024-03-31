"use client";

import { Container, Stack, Typography } from "@mui/material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import Link from "next/link";
import Image from "next/image";
import { NAVBAR_HEIGHT } from "@/constants";
import { useRouter } from "next/navigation";

export const BlackHeader = () => {
  const router = useRouter();
  return (
    <Stack bgcolor={"#121316"} height={NAVBAR_HEIGHT} justifyContent={"center"}>
      <Stack
        direction={"row"}
        gap={16}
        alignItems={"center"}
        width={"100%"}
        py={1}
        px={5}
        justifyContent={"space-between"}
      >
        <Image
          src="/Logo.png"
          alt=""
          width={24}
          height={20.54}
          style={{ cursor: "pointer" }}
          onClick={() => {
            router.push("/signin");
          }}
        />
        <Stack direction={"row"} gap={2} justifyContent={"center"}>
          <Link href={"./"}>
            <NotificationsNoneIcon
              fontSize="small"
              sx={{ color: "#fff" }}
            ></NotificationsNoneIcon>
          </Link>
          <Link href={"./"}>
            <Stack direction={"row"} gap={2} justifyContent={"center"}>
              <PermIdentityIcon fontSize="small" sx={{ color: "#fff" }} />
              <Typography fontSize={14} fontWeight={400} color={"#fff"}>
                Username
              </Typography>
            </Stack>
          </Link>
        </Stack>
      </Stack>
    </Stack>
  );
};
