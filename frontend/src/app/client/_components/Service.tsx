"use client";
import { Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";

const serviceItems = [
  {
    img: "/deliverycar.png",
    title: "Үнэгүй хүргэлт",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
  },
  {
    img: "/cashback.png",
    title: "Буцаан олголт",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
  },
  {
    img: "/premium.png",
    title: "Найдвартай",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
  },
  {
    img: "/callcenter.png",
    title: "24/7 тусламж",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
  },
];

export const HomePageService = () => {
  return (
    <Container maxWidth="lg">
      <Stack alignItems={"center"} pt={"56"} pb={"64px"}>
        <Typography
          color={"#151875"}
          fontSize={42}
          fontWeight={800}
          mb={"65px"}
        >
          Үйлчилгээний тухай
        </Typography>
        <Stack>
          <Grid container spacing={"29.8px"}>
            {serviceItems.map((item, index) => (
              <Grid item xs={3}>
                <Stack
                  width={1}
                  bgcolor={"common.white"}
                  pt={7}
                  pb={"45px"}
                  alignItems={"center"}
                  boxShadow={"1px 2px 10px #1C202414"}
                  px={"28px"}
                  gap={"27px"}
                >
                  <Stack position={"relative"} height={"65px"} width={"69px"}>
                    <Image alt="service" src={item.img} fill />
                  </Stack>
                  <Stack textAlign={"center"} gap={"15px"}>
                    <Typography color={"#151875"}>{item.title}</Typography>
                    <Typography
                      color={"#1A0B5B4D"}
                      fontSize={16}
                      fontWeight={700}
                    >
                      {item.text}
                    </Typography>
                  </Stack>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Stack>
    </Container>
  );
};
