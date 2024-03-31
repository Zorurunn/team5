import { Divider, Stack, Typography } from "@mui/material";
import React from "react";
import { OrderDetails } from "./OrderDetails";
import { TableHead } from "./TableHead";
import { ORDERINGS } from "@/constants";

export const OrderInfo = () => {
  return (
    <Stack
      width={"100%"}
      borderRadius={2}
      overflow={"hidden"}
      sx={{ backgroundColor: "#fff", border: "1px solid #ECEDF0" }}
    >
      <Stack>
        <Stack
          height={"72px"}
          justifyContent={"center"}
          px={3}
          py={3}
          position={"sticky"}
        >
          <Typography fontSize={20} fontWeight={700}>
            Захиалга
          </Typography>
        </Stack>
        <Stack flexGrow={1} maxHeight={700}>
          <TableHead />
          <Stack gap={2} flexGrow={1} overflow={"scroll"}>
            <Stack width={"100%"} height={"100%"}>
              {ORDERINGS.map((item, orderID) => {
                return (
                  <Stack
                    border={"0.1px solid #ECEDF0"}
                    key={item.orderID + orderID}
                  >
                    <OrderDetails {...item} index={orderID + 1} />
                    {/* <Divider /> */}
                  </Stack>
                );
              })}
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
