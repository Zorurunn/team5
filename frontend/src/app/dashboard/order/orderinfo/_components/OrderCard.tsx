"use client";

import { Stack, Typography } from "@mui/material";
import Image from "next/image";

type OrderDetailsType = {
  image: string;
  productName: string;
  date: number;
  productID: number;
  amount: number;
  price: number;
  total: number;
};
export const OrderCard = (props: OrderDetailsType) => {
  const { image, productID, productName, price, amount, date, total } = props;
  return (
    <Stack
      width={"100%"}
      direction={"row"}
      justifyContent={"space-between"}
      bgcolor={"#ECEDF0"}
      borderRadius={"12px"}
    >
      <Image src={image} alt="product-img" height={156} width={180} />
      <Stack px={3} py={2} gap="20px" color="text.secondary">
        <Stack gap={1} fontWeight={400}>
          <Typography fontSize={24} fontWeight={700} color={"text.primary"}>
            {productName}
          </Typography>
          <Typography gap={1} fontSize={14}>
            {date} <br />
            Бүтээгдэхүүний ID: {productID}
          </Typography>
        </Stack>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          fontWeight={400}
        >
          <Typography fontSize={16}>
            Тоо ширхэг: {amount} * {"₮" + new Intl.NumberFormat().format(price)}
          </Typography>
          <Typography fontWeight={600} fontSize={16} color={"text.primary"}>
            {total}
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};
