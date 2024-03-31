"use client";
// to do: contact information ii inputiin design iig uurchiluh
// mapalj baraanuudaa uruh
import { Container, Stack } from "@mui/material";
import { ContactInfo } from "./ContactInfo";
import { ProductList } from "./ProductList";
import { OrderPrice } from "./OrderPrice";
import { useData } from "@/components/provider/DataProvider";

const Main = () => {
  const { totalPrice, addCart } = useData();
  return (
    <Stack bgcolor={"#fff"}>
      <Container maxWidth={"lg"}>
        <Stack direction={"row"} width={"100%"} py={10} gap={3}>
          <ContactInfo />
          <Stack width={"35%"} gap={4}>
            <ProductList addCart={addCart} />
            <OrderPrice price={totalPrice} />
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
};

export default Main;
