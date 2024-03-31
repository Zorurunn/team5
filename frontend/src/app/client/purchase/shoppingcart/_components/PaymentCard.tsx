"use client";

import { useData } from "@/components/provider/DataProvider";
import { Button, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
type ProductTypeProps = {
  price: number;
};
export const PaymnetCard = (props: ProductTypeProps) => {
  const router = useRouter();
  const { numberFormatter } = useData();
  const { price } = props;
  return (
    <Stack width={"100%"} alignItems={"center"} gap={6}>
      <Typography fontSize={20} fontWeight={800} color={"#1D3178"}>
        Нийт төлөх
      </Typography>
      <Stack width={"100%"} bgcolor={"#F4F4FC"} borderRadius={3}>
        <Stack padding={4} gap={5}>
          <Stack
            width={"100%"}
            direction={"row"}
            paddingBlock={1}
            sx={{ borderBottom: "2px solid #E8E6F1" }}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Typography fontWeight={600} fontSize={18} color={"#1D3178"}>
              Нийлбэр:
            </Typography>
            <Typography fontSize={18} fontWeight={700} color={"#151875"}>
              {numberFormatter.format(price) + "₮"}
            </Typography>
          </Stack>
          <Stack
            width={"100%"}
            direction={"row"}
            paddingBlock={1}
            sx={{ borderBottom: "2px solid #E8E6F1" }}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Typography fontWeight={600} fontSize={18} color={"#1D3178"}>
              Төлөх дүн:
            </Typography>
            <Typography fontSize={20} fontWeight={700} color={"#151875"}>
              {numberFormatter.format(price) + "₮"}
            </Typography>
          </Stack>
          <Button
            fullWidth
            sx={{
              height: "40px",
              backgroundColor: "#19D16F",
              fontSize: "14px",
              fontWeight: 700,
              color: "#fff",
            }}
            onClick={() => {
              router.push("/client/purchase/hektodemo");
            }}
          >
            Худалдан авах
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};
