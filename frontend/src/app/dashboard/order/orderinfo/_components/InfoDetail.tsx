"use client";

import { Stack } from "@mui/material";
import IdNumber from "./IdNumber";
import { UserInfo } from "./UserInfo";
import { OrderCard } from "./OrderCard";

export const InfoDetail = () => {
  return (
    <Stack
      width={"60%"}
      bgcolor={"#FFFFFF"}
      padding={3}
      height={700}
      borderRadius={"12px"}
      sx={{ border: "1px solid #ECEDF0" }}
    >
      <Stack gap={3}>
        <IdNumber orderID="#12345678" />
        <UserInfo
          name="Solongo Zoloo"
          phone="88556061"
          user="Zoloosoko0526@gmail.com"
        />
        <OrderCard
          image=""
          productName="WOMEN'S HORSEBIT MULE"
          date="2024-01-20"
          productID="30349049903"
          amount="3"
          price={225700}
          total="₮677,100"
        />
        <OrderCard
          image=""
          productName="WOMEN'S HORSEBIT MULE"
          date="2024-01-20"
          productID="30349049903"
          amount="1"
          price={12500}
          total="₮125,700"
        />
      </Stack>
    </Stack>
  );
};
