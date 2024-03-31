"use client";
// import { HighLightProducts } from "./_components/HighLight.Products";
import { IndexCard } from "./_components/Index.Card";
import { NewProducts } from "./_components/New.Products";
import { Container, Stack } from "@mui/material";
import { HomePageService } from "./_components/Service";
import { HighLightProducts } from "./_components/HighLight.Products";

export default function Home() {
  return (
    <Stack gap={4}>
      <IndexCard />
      <HighLightProducts />
      <NewProducts />
      <HomePageService />
    </Stack>
  );
}
