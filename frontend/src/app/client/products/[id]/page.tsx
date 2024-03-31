"use client";

import { ProductParams, useData } from "@/components/provider/DataProvider";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Productdetial } from "../_components/product.detial";
import { MoreDetial } from "../_components/More.Detials";
import { AssociationProduct } from "../_components/Association.Products";
import { Stack } from "@mui/material";

const Page = () => {
  const { id } = useParams();
  const { products } = useData();
  const [thisProduct, setThisProduct] = useState<ProductParams>();

  useEffect(() => {
    if (products) {
      const product = products.filter((item) => item._id === id);
      setThisProduct(product[0]);
    }
  }, [products]);

  if (!thisProduct) return null;

  return (
    <Stack>
      <Productdetial {...thisProduct} />
      <MoreDetial {...thisProduct} />
      <AssociationProduct />
    </Stack>
  );
};

export default Page;
