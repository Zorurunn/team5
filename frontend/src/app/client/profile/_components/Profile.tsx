"use client";

import { Stack, Typography } from "@mui/material";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import Image from "next/image";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { Box } from "@mui/material";
import { useState } from "react";
import { useData } from "@/components/provider/DataProvider";
import { EditProfileImg } from "./EditProfileImg";
import { CustomInput2 } from "./CustomInput2";
import { SignOutConfirm } from "./SignOut";
import { useRouter } from "next/navigation";
import Link from "next/link";

export const MyProfile = () => {
  const [open, setOpen] = useState(false);
  const [openSignOut, setOpenSignOut] = useState(false);
  const router = useRouter();
  const [imageUrl, setImageUrl] = useState("");

  return (
    <Stack width={"100%"} height={"80vh"} justifyContent={"center"}>
      <Stack justifyContent={"center"} alignItems={"center"}>
        <Stack spacing={3}>
          <Stack
            spacing={5}
            justifyContent={"center"}
            alignItems={"center"}
            paddingX={"20px"}
          >
            <Stack position={"relative"} width={"100%"} height={"100%"}>
              <Stack
                p={"50%"}
                border={1}
                borderRadius={"50%"}
                overflow={"hidden"}
                position={"relative"}
              >
                <Image fill objectFit="cover" src={"/catler.svg"} alt="" />
              </Stack>
              <Box
                onClick={() => {
                  setOpen(true);
                }}
              >
                <Stack
                  position={"absolute"}
                  bottom={0}
                  right={0}
                  zIndex={1}
                  width={34}
                  height={34}
                  border={1}
                  borderRadius={"50%"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  bgcolor={"#FFF"}
                >
                  <CreateOutlinedIcon sx={{ color: "primary.main" }} />
                </Stack>
              </Box>
              <EditProfileImg
                open={open}
                handleClose={() => setOpen(false)}
                setImageUrl={setImageUrl}
                imageUrl={imageUrl}
              />
            </Stack>
            <Typography fontSize={28} fontWeight={700}>
              Adolf Catler
            </Typography>
          </Stack>

          <Stack paddingX={"20px"} paddingTop={2} spacing={2}></Stack>
        </Stack>
        <Stack gap={2}>
          <CustomInput2 type="text" label="Таны нэр" />
          <CustomInput2 type="number" label="Утасны дугаар" />
          <CustomInput2 type="email" label="Имэйл хаяг" />
          <Stack
            direction={"row"}
            width={"100%"}
            py={2}
            px={1.7}
            gap={2}
            alignItems={"center"}
            sx={{
              cursor: "pointer",
            }}
          >
            <Stack
              border={1}
              borderColor={"#EEEFF2"}
              p={"5px"}
              borderRadius={"50%"}
            >
              <HistoryOutlinedIcon />
            </Stack>
            <Typography>Mercant</Typography>
          </Stack>

          <Stack
            direction={"row"}
            width={"100%"}
            py={2}
            px={1.7}
            gap={2}
            alignItems={"center"}
            sx={{
              cursor: "pointer",
            }}
            onClick={() => {
              setOpenSignOut(true);
            }}
          >
            <Stack
              border={1}
              borderColor={"#EEEFF2"}
              p={"5px"}
              borderRadius={"50%"}
            >
              <ExitToAppIcon />
            </Stack>
            <Typography>Гарах</Typography>
          </Stack>
          <SignOutConfirm
            openSignOut={openSignOut}
            handleOut={() => {
              setOpenSignOut(false);
            }}
            setOpenSignOut={setOpenSignOut}
          />
        </Stack>
      </Stack>
    </Stack>
  );
};
