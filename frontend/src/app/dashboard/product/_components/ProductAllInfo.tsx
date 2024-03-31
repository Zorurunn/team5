"use client";

import { Button, Stack, Typography, makeStyles } from "@mui/material";
import { useState } from "react";
import { ProductInput } from "./ProductInptu";
import { ProductScroll } from "./ProductScroll";
import { Tabs } from "./Tabs";

export const ProductAllInfo = () => {
  return (
    <Stack width={"100%"} height={"100%"}>
      <Tabs />
      <ProductInput />
      <ProductScroll />
    </Stack>
  );
};
