import { PRODUCT_INFO } from "@/constants";
import { Grid, IconButton, Stack, TextField, Typography } from "@mui/material";
import Image from "next/image";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { useData } from "@/components/provider/DataProvider";
import { generalCategoryType, subCategoryType } from "@/common/types";

export const ProductScroll = () => {
  const { products, generalCategories, subCategories } = useData();

  return (
    <Stack width={"100%"} height={"65%"}>
      <Stack
        borderRadius={2}
        bgcolor={"#fff"}
        overflow={"scroll"}
        height={"100%"}
        border={"1px solid #ECEDF0"}
      >
        <Stack>
          <Grid
            position={"sticky"}
            top={0}
            left={0}
            container
            height={55}
            alignItems={"center"}
            bgcolor={"#fff"}
            zIndex={1}
            borderBottom={"1px solid #ECEDF0"}
          >
            <Grid xs={0.8} item></Grid>

            <Grid xs={1.7} item>
              <Typography fontWeight={600}>Бүтээгдэхүүн</Typography>
            </Grid>

            <Grid xs={1.7} item>
              <Typography fontWeight={600}>Ангилал</Typography>
            </Grid>

            <Grid xs={1.7} item>
              <Typography fontWeight={600}>Үнэ</Typography>
            </Grid>

            <Grid xs={1.7} item>
              <Typography fontWeight={600}>Үлдэгдэл</Typography>
            </Grid>

            <Grid xs={1.7} item>
              <Typography fontWeight={600}>Зарагдсан</Typography>
            </Grid>

            <Grid xs={1.7} item>
              <Typography fontWeight={600}> Нэмсэн огноо</Typography>
            </Grid>

            <Grid xs={1} item></Grid>
          </Grid>
          <Grid container>
            {products.map((item, index) => (
              <Grid
                key={index}
                container
                border={"0.5px solid #ECEDF0"}
                alignItems={"center"}
                justifyContent={"center"}
                height={80}
              >
                <Grid xs={0.8} item>
                  <Stack justifyContent="center" alignItems="center">
                    <TextField
                      sx={{
                        "& fieldset": {
                          border: "none",
                        },
                      }}
                      type="checkbox"
                    />
                  </Stack>
                </Grid>

                <Grid xs={1.7} item>
                  <Stack
                    direction={"row"}
                    justifyContent={"start"}
                    alignItems={"center"}
                    gap={2}
                  >
                    <Stack
                      borderRadius={"50%"}
                      overflow={"hidden"}
                      position={"relative"}
                      width={50}
                      height={50}
                    >
                      <Image
                        src={item.images[0]}
                        alt=""
                        fill
                        objectFit="cover"
                      />
                    </Stack>
                    <Stack>
                      <Typography
                        height={30}
                        maxWidth={80}
                        noWrap
                        textOverflow={"ellipsis"}
                        sx={{
                          lineClamp: "1",
                        }}
                      >
                        {item.productName}
                      </Typography>
                      <Typography>{item.serialNumber}</Typography>
                    </Stack>
                  </Stack>
                </Grid>

                <Grid xs={1.7} item>
                  <Typography>{}</Typography>
                </Grid>

                <Grid xs={1.7} item>
                  <Typography>{item.price}₮</Typography>
                </Grid>

                <Grid xs={1.7} item>
                  <Typography>{item.remainQty}</Typography>
                </Grid>

                <Grid xs={1.7} item>
                  <Typography>10</Typography>
                </Grid>

                <Grid xs={1.7} item>
                  <Typography>2024-01-10</Typography>
                </Grid>

                <Grid xs={0.5} item>
                  <IconButton>
                    <DeleteOutlineOutlinedIcon style={{ fill: "#d6d6d6" }} />
                  </IconButton>
                </Grid>
                <Grid xs={0.5} item>
                  <IconButton>
                    <EditOutlinedIcon style={{ fill: "#d6d6d6" }} />
                  </IconButton>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Stack>
    </Stack>
  );
};
