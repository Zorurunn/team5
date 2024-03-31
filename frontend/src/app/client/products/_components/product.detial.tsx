"use client";
import Rating from "@mui/material/Rating";
import { Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { ProductParams, useData } from "@/components/provider/DataProvider";
import { FavoriteBorderOutlined } from "@mui/icons-material";
import { useState } from "react";

export const Productdetial = (props: ProductParams) => {
  const { addCart, setAddCart, productCount, setProductCount } = useData();
  const [selectImg, setSelectImg] = useState(0);
  const {
    images,
    productName,
    price,
    productType,
    description,
    rating,
    discount,
    merchantId,
    quantity,
  } = props;
  const colors = productType.productColor;
  return (
    <Container>
      <Stack
        width={"100%"}
        height={487}
        gap={4}
        direction={"row"}
        pt={6}
        pb={4}
      >
        <Stack height={"100%"} width={"50%"}>
          <Stack width={"100%"} height={"100%"} direction={"row"} gap={3}>
            <Stack
              width={"100%"}
              height={"100%"}
              gap={2}
              flexGrow={1}
              flexBasis={0}
            >
              {images &&
                images.map((item, index) => {
                  return (
                    <Stack
                      key={index}
                      onClick={() => {
                        setSelectImg(index);
                      }}
                      borderRadius={1}
                      width={"100%"}
                      height={"33%"}
                      position={"relative"}
                      bgcolor={"#FFFFFF"}
                    >
                      <Image
                        src={item}
                        alt="zurag bhgu bn"
                        fill
                        objectFit="cover"
                        style={{ borderRadius: "3px" }}
                      />
                    </Stack>
                  );
                })}
            </Stack>
            <Stack
              width={"100%"}
              height={"100%"}
              position={"relative"}
              flexGrow={3}
              flexBasis={0}
            >
              <Image
                src={images[selectImg]}
                alt="zurag bhgu bn"
                fill
                objectFit="cover"
                style={{ borderRadius: "3px" }}
              />
            </Stack>
          </Stack>
        </Stack>
        <Stack width={"50%"} gap={6} alignItems={"flex-start"}>
          <Stack gap={1.5}>
            <Typography color={"#111C85"} fontSize={36} fontWeight={800}>
              {productName}
            </Typography>
            <Stack spacing={1} direction={"row"} alignItems={"center"}>
              <Rating value={props.rating?.starAverage} readOnly />
              <Typography color={"#5A5C7E"} fontSize={15}>
                ({props.rating?.ratedQty})
              </Typography>
            </Stack>
            <Typography color={"#111C85"} fontSize={36} fontWeight={400}>
              {new Intl.NumberFormat().format(price ?? 0) + "₮"}
            </Typography>
            <Stack direction={"row"} gap={1.5} alignItems={"center"}>
              {colors &&
                colors.map((item) => {
                  return (
                    <Stack
                      width={20}
                      height={20}
                      borderRadius={"50%"}
                      sx={{ backgroundColor: item }}
                    ></Stack>
                  );
                })}
            </Stack>
            <Typography color={"#9295AA"} fontSize={17} fontWeight={400}>
              {description}
            </Typography>
          </Stack>
          <Stack direction={"row"} gap={2} alignItems={"center"}>
            <Button
              sx={{ bgcolor: "none" }}
              onClick={() => {
                let isShare = false;
                const newAddCart = addCart.map((element) => {
                  if (element.productId == props._id) {
                    element.quantity += productCount;
                    isShare = true;
                    return element;
                  } else {
                    return element;
                  }
                });
                if (!isShare) {
                  setAddCart([
                    ...addCart,
                    {
                      productId: props._id ?? "",
                      name: productName,
                      price: price ?? 0,
                      discount: discount ?? 0,
                      quantity: productCount,
                      thumbnailUrl: images[0],
                      color: productType.productColor[0],
                      merchantId: merchantId ?? "",
                    },
                  ]);
                } else {
                  setAddCart(newAddCart);
                }
              }}
            >
              <Typography color={"#151875"} fontSize={16} fontWeight={800}>
                add To Cart
              </Typography>
            </Button>
            <FavoriteBorderOutlined
              sx={{ color: "#151875", fontSize: "18px" }}
            />
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};
