"use client";

import { CircularProgress, Stack } from "@mui/material";
export default function Loading() {
  return (
    <Stack
      width={"100vw"}
      height={"100vh"}
      bgcolor={"common.white"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <CircularProgress />
    </Stack>
  );
}
