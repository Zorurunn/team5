"use client";

import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button, Stack, Container, Typography } from "@mui/material";
const items = [
  {
    bgImg: (
      <Stack
        width={"100%"}
        height={"80vh"}
        justifyContent={"center"}
        sx={{
          backgroundImage: "url(/thumbnail/Guccibag.jpeg)",
          backgroundPosition: "center",
          backgroundSize: "contain",
          objectFit: "contain",
        }}
      >
        <Container maxWidth={"lg"}>
          <Stack width={"100%"} height={"100%"} alignItems={"flex-end"} gap={3}>
            <Typography color={"#FB2E86"} fontSize={20} fontWeight={700}>
              GUCCI MOON SIDE MINI <br />
              SHOULDER BAG
            </Typography>
            <Typography color={"#FFFFF7"} fontSize={58} fontWeight={800}>
              онцлох загвар
            </Typography>
            <Button
              sx={{
                bgcolor: "#FB2E86",
                color: "#FFFFFF",
                py: "5px",
                px: "10px",
                width: "fit-content",
              }}
            >
              Дэлгэрэнгүй
            </Button>
          </Stack>
        </Container>
      </Stack>
    ),
  },
  {
    bgImg: (
      <Stack
        width={"100%"}
        height={"80vh"}
        justifyContent={"center"}
        sx={{
          backgroundImage: "url(/thumbnail/sneakers1.jpg)",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <Container maxWidth={"lg"}>
          <Stack width={"100%"} height={"100%"} alignItems={"flex-end"} gap={3}>
            <Typography color={"#FB2E86"} fontSize={40} fontWeight={700}>
              Jordan 1 Low
            </Typography>
            <Typography color={"#FFFFF7"} fontSize={58} fontWeight={800}>
              онцлох загвар
            </Typography>
            <Button
              sx={{
                bgcolor: "#FB2E86",
                color: "#FFFFFF",
                py: "5px",
                px: "10px",
                width: "fit-content",
              }}
            >
              Дэлгэрэнгүй
            </Button>
          </Stack>
        </Container>
      </Stack>
    ),
  },
  {
    bgImg: (
      <Stack
        width={"100%"}
        height={"80vh"}
        justifyContent={"center"}
        sx={{
          backgroundImage: "url(/product4.jpg)",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <Container maxWidth={"lg"}>
          <Stack width={"100%"} height={"100%"} alignItems={"flex-end"} gap={3}>
            <Typography color={"#FB2E86"} fontSize={16} fontWeight={700}>
              Nikon
              <br />
              D850
            </Typography>
            <Typography color={"#FFFFFF"} fontSize={53} fontWeight={800}>
              онцлох загвар
            </Typography>
            <Button
              sx={{
                bgcolor: "#FB2E86",
                color: "#FFFFFF",
                py: "5px",
                px: "10px",
                width: "fit-content",
              }}
            >
              Дэлгэрэнгүй
            </Button>
          </Stack>
        </Container>
      </Stack>
    ),
  },
];

export const IndexCard = () => {
  return (
    <Carousel animation="slide" autoPlay={true} duration={100}>
      {items.map((item, i) => (
        <Paper key={i}>
          <Stack>{item.bgImg}</Stack>
        </Paper>
      ))}
    </Carousel>
  );
};
