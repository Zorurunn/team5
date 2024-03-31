"use client";
import { Container } from "@mui/material";
import { Mainpage } from "./_components/Mainpage";
import { Stack } from "@mui/system";
import { BackTabs } from "@/components/Back.Tabs";
export default function Home() {
  return (
    <Stack>
      <BackTabs text="Захиалгын дэлгэрэнгүй" />
      <Mainpage />
    </Stack>
  );
}
