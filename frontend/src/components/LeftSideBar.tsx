"use client";

import { SIDEBAR_LINES } from "@/constants";
import { Button, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

export const LeftSideBar = () => {
  const [selectedOption, setSelectedOption] =
    useState<string>("Хяналтын самбар");

  const pathName = usePathname();
  return (
    <Stack gap={2}>
      {SIDEBAR_LINES.map((item) => (
        <Link href={item.href} key={item.name + item.href}>
          <Stack
            py={1}
            bgcolor={pathName == item.href ? "#1C202414" : ""}
            color={"text.primary"}
            justifyContent={"flex-start"}
            textTransform={"none"}
            onClick={() => {
              setSelectedOption(item.name);
            }}
          >
            <Stack direction={"row"} gap={1} pl={3}>
              <item.icon className="w-8 h-8" />
              <Typography>{item.name}</Typography>
            </Stack>
          </Stack>
        </Link>
      ))}
    </Stack>
  );
};
