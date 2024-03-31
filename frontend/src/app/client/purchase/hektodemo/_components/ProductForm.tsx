"use client";

import { cartProductType } from "@/common/types";
import { useData } from "@/components/provider/DataProvider";
import { Stack, Typography } from "@mui/material";
import Image from "next/image";

export const ProductForm = (props: cartProductType) => {
  const { numberFormatter } = useData();
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      gap={3}
      pb={3}
      sx={{ borderBottom: "1px solid #E1E1E4" }}
    >
      {" "}
      <Stack position={"relative"} width={86} height={74}>
        <Image
          src={props.thumbnailUrl}
          alt="product picture"
          fill
          objectFit="cover"
        />
      </Stack>
      <Stack width={"100%"} gap={1}>
        <Typography fontSize={14} fontWeight={800}>
          {props.name}
        </Typography>
        <Stack
          width={"100%"}
          direction={"row"}
          alignItems={"flex-end"}
          justifyContent={"space-between"}
        >
          <Stack gap={1}>
            <Stack direction={"row"} gap={1} alignItems={"center"}>
              <Typography fontSize={12} fontWeight={800} color={"#A1A8C1"}>
                Өнгө:
              </Typography>
              <Stack
                width={10}
                height={10}
                borderRadius={"50%"}
                bgcolor={props.color}
              ></Stack>
            </Stack>
            <Typography fontSize={12} fontWeight={800} color={"#A1A8C1"}>
              Тоо ширхэг: {props.quantity}
            </Typography>
          </Stack>
          <Typography fontSize={14} fontWeight={700} color={"#151875"}>
            {numberFormatter.format(props.quantity * props.price) + "₮"}
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};
