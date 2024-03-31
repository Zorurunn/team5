"use client";
import { Stack, Container, Typography, Paper } from "@mui/material";
import Grid from "@mui/material/Grid";
import { GeneralCard } from "./GeneralCard";
import { generalCategoryType } from "@/common/types";
import Carousel from "react-material-ui-carousel";
import { useRouter } from "next/navigation";
import { useData } from "@/components/provider/DataProvider";
import { useEffect, useState } from "react";
const step = [1, 2, 3, 4];

export const HighLightProducts = () => {
  const router = useRouter();
  const [cards, setCards] = useState<generalCategoryType[]>();
  const { products } = useData();

  const [selectedStep, setSelectedStep] = useState(1);
  const [delay, setDelay] = useState(4000);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;

    const timeoutId = setTimeout(() => {
      if (selectedStep != 4) {
        setSelectedStep(selectedStep + 1);
      } else {
        setSelectedStep(1);
      }
    }, delay);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [paused, selectedStep]);

  return (
    <Container maxWidth={"lg"}>
      <Stack width={"100%"} overflow={"hidden"}>
        <Stack alignItems={"center"} gap={6}>
          <Stack color={"#151875"} fontSize={42} fontWeight={800}>
            Онцлох бүтээгдэхүүн
          </Stack>
          <Stack
            sx={{
              width: "400%",
              height: "100%",
              position: "relative",
              left: `${150 - (selectedStep - 1) * 100}%`,
            }}
            flexDirection={"row"}
            justifyContent={"space-evenly"}
            gap={1}
            px={1}
          >
            <Stack
              sx={{ width: "100%" }}
              position={"relative"}
              flexDirection={"row"}
              justifyContent={"space-evenly"}
              gap={1}
            >
              {products
                .filter((i, top) => top < 12)
                .map((item, index) => (
                  <Stack key={index} width={"100%"}>
                    <GeneralCard {...item} />
                  </Stack>
                ))}
            </Stack>
          </Stack>
          <Stack flexDirection={"row"} gap={"6px"}>
            {step.map((item, index) => (
              <Stack
                onClick={() => {
                  setSelectedStep(item);
                }}
                key={index}
                width={selectedStep == item ? 24 : 16}
                height={4}
                bgcolor={selectedStep == item ? "#FB2E86" : "#FEBAD7"}
                borderRadius={"10px"}
                sx={{ cursor: "pointer", transition: "0.3s linear" }}
              ></Stack>
            ))}
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};
