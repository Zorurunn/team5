"use client";
import { Stack, Typography } from "@mui/material";

export const Title = () => {
  return (
    <Stack
      width={"100%"}
      direction={"row"}
      alignItems={"center"}
      sx={{
        display: "grid",
        gridTemplateColumns: "5fr 2fr 3fr 2fr",
        gap: 1,
      }}
    >
      <Stack>
        <Typography fontSize={20} fontWeight={800} color={"#1D3178"}>
          Бүтээгдэхүүн
        </Typography>
      </Stack>
      <Stack>
        <Typography fontSize={20} fontWeight={800} color={"#1D3178"}>
          Үнэ
        </Typography>
      </Stack>
      <Stack>
        <Typography fontSize={20} fontWeight={800} color={"#1D3178"}>
          Тоо ширхэг
        </Typography>
      </Stack>
      <Stack alignItems={"self-end"} paddingRight={"10px"}>
        <Typography fontSize={20} fontWeight={800} color={"#1D3178"}>
          Нийт
        </Typography>
      </Stack>
    </Stack>
  );
};
