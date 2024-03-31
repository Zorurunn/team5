"use client";

import { Stack, Typography } from "@mui/material";

const HeadTitle = () => {
  return (
    <Stack width={"100%"}>
      <Typography fontSize={24} fontWeight={800} color={"#1D3178"}>
        Hekto Demo
      </Typography>
      <Typography fontSize={12} fontWeight={400} color={"#1D3178"}>
        Cart/ Information/ Shipping/ Payment
      </Typography>
    </Stack>
  );
};

export default HeadTitle;
