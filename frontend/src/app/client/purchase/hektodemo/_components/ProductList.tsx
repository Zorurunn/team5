"use client";

import { Stack } from "@mui/material";
import { ProductForm } from "./ProductForm";
import { cartProductType } from "@/common/types";

export const ProductList = ({ addCart }: { addCart: cartProductType[] }) => {
  return (
    <Stack width={"100%"} gap={3}>
      {addCart.map((item, index) => {
        return <ProductForm key={index} {...item} />;
      })}
    </Stack>
  );
};
