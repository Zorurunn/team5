"use client";
import { Container, Stack } from "@mui/material";
import { Title } from "./_components/Title";
import { Cart } from "./_components/Cart";
import { PaymnetCard } from "./_components/PaymentCard";
import { useData } from "@/components/provider/DataProvider";

const ShoppingCart = () => {
  const { totalPrice } = useData();
  return (
    <Stack bgcolor={"#fff"}>
      <Container maxWidth={"lg"}>
        <Stack width={"100%"} direction={"row"} gap={5} py={"100px"}>
          <Stack width="70%">
            <Title />
            <Cart />
          </Stack>
          <Stack width={"30%"}>
            <PaymnetCard price={totalPrice} />
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
};
export default ShoppingCart;
