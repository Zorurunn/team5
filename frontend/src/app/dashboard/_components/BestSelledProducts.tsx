import { Divider, Stack, Typography } from "@mui/material";
import React from "react";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import { TableHeader } from "./TableHeader";
import { BestSelledLine } from "./BestSelledLine";
import { useData } from "@/components/provider/DataProvider";

// todo: after server implementation delete this mock data
// todo: use server side data instead of mock data

export const BestSelledProducts = () => {
  const { products } = useData();
  return (
    <Stack
      overflow={"hidden"}
      height={"100%"}
      borderRadius={3}
      px={3}
      py={3}
      sx={{ backgroundColor: "#fff" }}
      gap={4}
    >
      <Stack direction={"row"}>
        <Stack
          justifyContent={"center"}
          flexGrow={1}
          fontSize={18}
          fontWeight={600}
        >
          Шилдэг бүтээгдэхүүн
        </Stack>
        <ChevronRightOutlinedIcon />
      </Stack>
      <Stack gap={2} flexGrow={1}>
        <TableHeader />
        <Stack gap={2} flexGrow={1} overflow={"scroll"}>
          <Stack width={"100%"} height={"100%"} position={"relative"}>
            <Stack position={"absolute"} top={0} left={0}>
              {products.map((item, index) => {
                return (
                  <Stack key={index} width={"100%"}>
                    <BestSelledLine {...item} index={index + 1} />
                    <Divider />
                  </Stack>
                );
              })}
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
