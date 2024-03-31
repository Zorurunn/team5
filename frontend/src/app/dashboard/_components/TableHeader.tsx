import { Stack } from "@mui/material";
import React from "react";

export const TableHeader = () => {
  return (
    <Stack
      direction={"row"}
      height={44}
      sx={{
        backgroundColor: "#D6D8DB",
        display: "grid",
        gridTemplateColumns: "1fr 6fr 3fr 3fr",
        gap: 1,
      }}
    >
      <Stack justifyContent={"center"} alignItems={"center"}>
        №
      </Stack>
      <Stack justifyContent={"center"} alignItems={"center"}>
        Бүтээгдэхүүн
      </Stack>
      <Stack justifyContent={"center"} alignItems={"center"}>
        Тоо ширхэг
      </Stack>
      <Stack justifyContent={"center"} alignItems={"center"}>
        Үнэ
      </Stack>
    </Stack>
  );
};
