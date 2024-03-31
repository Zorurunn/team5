"use client";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
// to do: make a calculatuion function

import { Stack, Typography } from "@mui/material";
type OrderDetailsType = {
  productName: string;
  amount: number;
  price: number;
  total: number;
};
const PaymentInfo = (props: OrderDetailsType) => {
  const { amount, productName, price, total } = props;
  return (
    <Stack
      width={"100%"}
      bgcolor={"#FFFFFF"}
      borderRadius={"12px"}
      sx={{ border: "1px solid " }}
    >
      <Stack px={3} py={2} sx={{ borderBottom: "1px solid #ECEDF0" }}>
        <Typography fontSize={16} fontWeight={400}>
          Төлбөрийн мэдээлэл
        </Typography>
      </Stack>
      <Stack px={3} paddingTop={3} paddingBottom={2} gap={"4px"}>
        <Typography fontSize={16} fontWeight={400} color={"text.secondary"}>
          Бүтээгдэхүүн
        </Typography>
        <Stack paddingBottom={2} gap={2}>
          <Stack
            sx={{
              borderBottom: 1,
              borderColor: "divider",
              color: "text.secondary",
            }}
          >
            <Stack
              direction={"row"}
              paddingBottom={2}
              sx={{
                display: "grid",
                gridTemplateColumns: "6fr 1fr 3fr",
                gap: 2,
                fontSize: "14px",
                fontWeight: "600",
              }}
            >
              <Stack justifyContent={"center"}>{productName} Women's...</Stack>
              <Stack justifyContent={"center"}>x{amount}</Stack>
              <Stack justifyContent={"center"} alignItems={"flex-end"}>
                {price}
              </Stack>
            </Stack>

            <Stack
              direction={"row"}
              paddingBottom={2}
              sx={{
                display: "grid",
                gridTemplateColumns: "6fr 1fr 3fr",
                gap: 2,
                fontSize: "14px",
                fontWeight: "600",
              }}
            >
              <Stack justifyContent={"center"}>{productName} Women's...</Stack>
              <Stack justifyContent={"center"}>x{amount}</Stack>
              <Stack justifyContent={"center"} alignItems={"flex-end"}>
                {price}
              </Stack>
            </Stack>
            <Stack
              direction={"row"}
              paddingBottom={2}
              sx={{
                display: "grid",
                gridTemplateColumns: "6fr 1fr 3fr",
                gap: 2,
                fontSize: "14px",
                fontWeight: "600",
              }}
            >
              <Stack justifyContent={"center"}>Хүргэлт</Stack>
              <Stack justifyContent={"center"}>
                <AirportShuttleIcon fontSize="small"></AirportShuttleIcon>
              </Stack>
              <Stack justifyContent={"center"} alignItems={"flex-end"}>
                ₮ 5,000
              </Stack>
            </Stack>
          </Stack>
          <Stack
            direction={"row"}
            sx={{
              display: "grid",
              gridTemplateColumns: "6fr 3fr",
              gap: 2,
              fontSize: "16px",
              fontWeight: "600",
              color: "text.primary",
            }}
          >
            <Stack justifyContent={"center"}>Нийт төлсөн дүн</Stack>
            <Stack justifyContent={"center"} alignItems={"flex-end"}>
              {total}
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default PaymentInfo;
