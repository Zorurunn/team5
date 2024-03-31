"use client";

import { Stack, Typography } from "@mui/material";

type OrderDetailsType = {
  location: string;
};
const DeliveryInfo = (props: OrderDetailsType) => {
  const { location } = props;
  return (
    <Stack
      width={"100%"}
      gap={2}
      sx={{ border: "1px solid #ECEDF0" }}
      borderRadius={"12px"}
      bgcolor={"#FFFFFF"}
    >
      <Stack
        paddingBottom={2}
        px={3}
        py={2}
        sx={{ borderBottom: "1px solid #ECEDF0 " }}
      >
        <Typography fontSize={16} fontWeight={400}>
          Хүргэлтийн мэдээлэл
        </Typography>
      </Stack>
      <Stack paddingBottom={6} px={3}>
        <Typography fontSize={16} fontWeight={400}>
          Гэр
        </Typography>
        <Typography fontSize={16} fontWeight={600}>
          {location}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default DeliveryInfo;
