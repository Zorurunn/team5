"use client";

import { Stack } from "@mui/material";
import { InfoDetail } from "./InfoDetail";
import DeliveryInfo from "./DeliveryInfo";
import PaymentInfo from "./PaymentInfo";

export const Mainpage = () => {
  return (
    <Stack
      width={"100%"}
      direction={"row"}
      justifyContent={"center"}
      gap={3}
      paddingTop={3}
    >
      <InfoDetail />
      <Stack width={"40%"} gap={3}>
        <DeliveryInfo location="Улаанбаатар, Сонгинохайрхан дүүрэг, 1-р хороо, 14r bair 8r orts 6r darvar" />
        <PaymentInfo
          productName="WOMEN'S HORSEBIT MULE"
          amount="2"
          price="₮677,100"
          total="₮807,800"
        />
      </Stack>
    </Stack>
  );
};
