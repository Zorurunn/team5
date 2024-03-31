"use client";

import { Container, Stack } from "@mui/material";
import Text from "./Text";

const OrderCompleted = () => {
  return (
    <Stack bgcolor={"#fff"}>
      <Container maxWidth={"xl"}>
        <Stack width={"100%"} py={20}>
          <Stack width={"100%"} alignItems={"center"}>
            <Text />
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
};

export default OrderCompleted;
