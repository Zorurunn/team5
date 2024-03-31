import { Stack, SvgIconTypeMap, Typography } from "@mui/material";
import React from "react";

type headerCardProps = {
  title: string;
  icon: React.JSX.Element;
  value: number;
  date: string;
};
export const HeaderCard = (props: headerCardProps) => {
  const { title, icon, value, date } = props;

  return (
    <Stack
      height={136}
      borderRadius={3}
      px={3}
      py={2}
      sx={{ backgroundColor: "#fff" }}
      justifyContent={"space-between"}
    >
      <Stack direction={"row"} gap={1} alignItems={"center"}>
        {icon}
        <Typography fontWeight={600} fontSize={16}>
          {title}
        </Typography>
      </Stack>
      <Typography fontWeight={700} fontSize={32}>
        {title === "Орлого"
          ? new Intl.NumberFormat().format(value) + "₮"
          : value}
      </Typography>
      <Typography fontWeight={400} fontSize={14} color={"text.secondary"}>
        {date}
      </Typography>
    </Stack>
  );
};
