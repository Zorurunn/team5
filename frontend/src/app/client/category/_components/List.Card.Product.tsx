"use client";
import { Favorite, FavoriteBorder, Height } from "@mui/icons-material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ZoomInOutlinedIcon from "@mui/icons-material/ZoomInOutlined";
import { Box, Button, Modal, Rating, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { ProductParams, useData } from "@/components/provider/DataProvider";

import { useState } from "react";
import { useRouter } from "next/navigation";
export const ListCardProducts = (props: ProductParams) => {
  const router = useRouter();
  const {
    images,
    productName,
    description,
    price,
    rating,
    productType,
    discount,
    merchantId,
    quantity,
    _id,
  } = props;
  const { addCart, setAddCart } = useData();
  const colors = productType.productColor;
  const [fav, setFav] = useState(false);
  const [open, setOpen] = useState(false);
  return (
    <Stack width={1} flexDirection={"row"}>
      <Stack
        width={{ xs: 1 / 2, md: 1 / 4 }}
        sx={{
          aspectRatio: 1 / 1,
          "&:hover .card": {
            transform: "scale(1.05)",
            transition: "0.2s ease",
            bgcolor: "#EBF4F3",
          },
        }}
        position={"relative"}
        onClick={() => {
          router.push(`/client/products/${_id}`);
        }}
      >
        <Image
          className="card"
          alt="card image"
          style={{ objectFit: "cover", mixBlendMode: "multiply" }}
          fill
          src={images[0]}
        />
      </Stack>
      <Stack width={3 / 4} justifyContent={"space-between"} p={2}>
        <Box display={"flex"} flexDirection={"column"} gap={2}>
          <Stack flexDirection={"row"} gap={2}>
            <Typography color={"#151875"} fontSize={18} fontWeight={700}>
              {productName}
            </Typography>
            <Stack direction={"row"} gap={1} alignItems={"center"}>
              {colors &&
                colors.map((item) => {
                  return (
                    <Stack
                      width={10}
                      height={10}
                      borderRadius={"50%"}
                      sx={{ backgroundColor: item }}
                    ></Stack>
                  );
                })}
            </Stack>
          </Stack>
          <Stack flexDirection={"row"} gap={2} alignItems={"center"}>
            <Typography fontSize={21} fontWeight={400} color={"#151875"}>
              {new Intl.NumberFormat().format(price ?? 0) + "₮"}
            </Typography>
            <Stack spacing={1} direction={"row"} alignItems={"center"}>
              <Rating value={rating?.starAverage} readOnly />
              <Typography color={"#5A5C7E"} fontSize={15}>
                ({rating?.ratedQty})
              </Typography>
            </Stack>
          </Stack>
          <Typography fontSize={17.67} fontWeight={400} color={"#9295AA"}>
            {description}
          </Typography>
        </Box>
        <Stack
          width={1}
          height={1}
          bgcolor={"#00000000"}
          justifyContent={"space-between"}
          zIndex={1}
        >
          <Stack
            height={1}
            flexDirection={"row"}
            gap={2}
            p={"11px"}
            alignItems={"center"}
          >
            <Stack
              bgcolor={"transparent"}
              p={1}
              color={"#535399"}
              borderRadius={"50%"}
              sx={{ "&:hover": { bgcolor: "#FFFFFF" }, cursor: "pointer" }}
              onClick={(e) => {
                e.stopPropagation();
                if (addCart.length) {
                  setAddCart([
                    ...addCart,
                    {
                      productId: props._id ?? "",
                      name: productName,
                      price: price ?? 0,
                      discount: discount ?? 0,
                      quantity: quantity ?? 1,
                      thumbnailUrl: images[0],
                      color: productType.productColor[0],
                      merchantId: merchantId ?? "",
                    },
                  ]);
                } else {
                  setAddCart([
                    {
                      productId: props._id ?? "",
                      name: productName,
                      price: price ?? 0,
                      discount: discount ?? 0,
                      quantity: quantity ?? 1,
                      thumbnailUrl: images[0],
                      color: productType.productColor[0],
                      merchantId: merchantId ?? "",
                    },
                  ]);
                }
                router.push("/client/purchase/shoppingcart");
              }}
            >
              <ShoppingCartOutlinedIcon />
            </Stack>
            <Stack
              onClick={() => {
                setFav(true);
              }}
              bgcolor={"#ffffff99"}
              borderRadius={"50%"}
              color={fav ? "#e31b23" : "#535399"}
              alignItems={"start"}
              justifyContent={"start"}
              fontSize={20}
              sx={{ cursor: "pointer", "&:hover": { bgcolor: "#FFFFFF" } }}
            >
              {fav ? (
                <Favorite fontSize="inherit" color="inherit" />
              ) : (
                <FavoriteBorder fontSize="inherit" color="inherit" />
              )}
            </Stack>
            <Stack
              onClick={() => {
                router.push(`/client/products/${_id}`);
              }}
              bgcolor={"transparent"}
              p={1}
              color={"#535399"}
              borderRadius={"50%"}
              sx={{ "&:hover": { bgcolor: "#FFFFFF" }, cursor: "pointer" }}
            >
              <ZoomInOutlinedIcon />
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
