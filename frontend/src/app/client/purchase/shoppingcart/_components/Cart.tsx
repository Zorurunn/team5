"use client";

import { Button, Stack, Typography } from "@mui/material";
import { CartComponents } from "./CartComponents";
import { useData } from "@/components/provider/DataProvider";

export const Cart = () => {
  const { addCart, setAddCart } = useData();

  return (
    <Stack width={"100%"} paddingTop={"50px"} gap={5}>
      <Stack width={"100%"} gap={2}>
        {addCart.map((item, index) => {
          return <CartComponents key={index} {...item} />;
        })}
      </Stack>
      <Stack width={"100%"} alignItems={"self-end"}>
        <Button
          fullWidth
          onClick={() => {
            setAddCart([]);
          }}
          sx={{
            width: "173px",
            fontSize: "16px",
            fontWeight: "800",
            color: "#fff",
            backgroundColor: "#FB2E86",
            cursor: "pointer",
          }}
        >
          Карт цэвэрлэх
        </Button>
      </Stack>
    </Stack>
  );
};
