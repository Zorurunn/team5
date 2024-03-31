"use client";

import { Stack } from "@mui/material";
import Link from "next/link";

export const TableHead = () => {
  return (
    <Stack
      width={"100%"}
      direction="row"
      height={44}
      bgcolor={"#F7F7F8"}
      sx={{
        display: "grid",
        gridTemplateColumns: "5fr 5fr 3fr 3fr 3fr 5fr 4fr",
        gap: 1,
        borderBottom: 1,
        borderTop: 1,
        borderColor: "divider",
        fontSize: "12px",
        fontWeight: "600",
        lineHeight: "16px",
        color: "text.secondary",
      }}
    >
      <Stack justifyContent={"center"} px={3}>
        Захиалгын ID дугаар
      </Stack>
      <Stack justifyContent={"center"}>Үйлчлүүлэгч</Stack>
      <Stack justifyContent={"center"}>Огноо</Stack>
      <Stack justifyContent={"center"}>Цаг</Stack>
      <Stack justifyContent={"center"}>Төлбөр</Stack>
      <Stack justifyContent={"center"}>Статус</Stack>
      <Stack justifyContent={"center"} alignItems={"center"}>
        Дэлгэрэнгүй
      </Stack>
    </Stack>
  );
};
