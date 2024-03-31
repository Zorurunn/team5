"use client";

import { Button, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { Modal } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { useData } from "@/components/provider/DataProvider";
import { useAuth } from "@/components/provider/AuthProvider";

type SignOutProps = {
  openSignOut: boolean;
  setOpenSignOut: Dispatch<SetStateAction<boolean>>;
  handleOut: () => void;
};

export const SignOutConfirm = ({
  openSignOut,
  setOpenSignOut,
  handleOut,
}: SignOutProps) => {
  const router = useRouter();
  const { signOut } = useAuth();

  return (
    <Modal
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      open={openSignOut}
      onClose={() => {
        handleOut();
      }}
    >
      <Stack bgcolor={"#fff"} p={1}>
        <Typography
          py={5}
          color={"#171717"}
          fontSize={20}
          fontWeight={600}
          width={1}
          textAlign={"center"}
        >
          Та системээс гарахдаа итгэлтэй байна уу?
        </Typography>
        <Stack flexDirection={"row"} width={1} gap={"1px"}>
          <Typography
            onClick={() => {
              signOut();
              router.push("/signin");
            }}
            width={0.5}
            bgcolor={"#7E33E033"}
            textAlign={"center"}
            fontSize={20}
            fontWeight={600}
            padding={"20px"}
            sx={{
              "&:hover": {
                backgroundColor: "#7E33E0",
                color: "common.white",
                cursor: "pointer",
              },
            }}
          >
            Тийм
          </Typography>

          <Typography
            onClick={() => {
              handleOut();
            }}
            width={0.5}
            bgcolor={"#7E33E033"}
            textAlign={"center"}
            fontSize={20}
            fontWeight={600}
            padding={"20px"}
            sx={{
              "&:hover": {
                backgroundColor: "#7E33E0",
                color: "common.white",
              },
              cursor: "pointer",
            }}
          >
            Үгүй
          </Typography>
        </Stack>
      </Stack>
    </Modal>
  );
};
