"use client";

import { Stack, Typography } from "@mui/material";

type OrderDetailsType = {
  name: string;
  user: string;
  phone: number;
};

export const UserInfo = (props: OrderDetailsType) => {
  const { name, user, phone } = props;

  return (
    <Stack width={"100%"} fontSize={16} fontWeight={400}>
      <Typography>Захиалагч: Хувь хүн </Typography>
      <Stack direction={"row"} alignItems={"center"} gap={1}>
        <Typography fontWeight={600}> {name}- </Typography>
        <Typography gap={1}>
          {user}, {phone}
        </Typography>
      </Stack>
    </Stack>
  );
};
