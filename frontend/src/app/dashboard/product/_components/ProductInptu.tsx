import { CustomInput } from "@/components";
import { Button, MenuItem, Stack, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { PRODUCT_INFO } from "@/constants";
import Link from "next/link";

export const ProductInput = () => {
  return (
    <Stack pt={4}>
      <Stack gap={4} mb={3}>
        <Link href="/dashboard/product/addProduct">
          <Button
            sx={{
              width: "fit-content",
              color: "common.white",
              bgcolor: "common.black",
              ":hover": {
                bgcolor: "#2f2f2f",
              },
              p: "16px 40px",
              gap: "8px",
              borderRadius: "8px",
            }}
          >
            <AddIcon />
            <Typography fontSize={16} fontWeight={600}>
              Бүтээгдэхүүн нэмэх
            </Typography>
          </Button>
        </Link>

        <Stack
          gap={2}
          justifyContent={"space-between"}
          direction={"row"}
          width={"100%"}
        >
          <Stack
            direction={"row"}
            width={"40%"}
            justifyContent={"space-between"}
          >
            <Stack width={"30%"}>
              <CustomInput
                iconType="category"
                type="text"
                adornment="start"
                select={true}
                bgcolor="#fff"
              >
                {PRODUCT_INFO.map((item) => (
                  <MenuItem value={item.name}>{item.name}</MenuItem>
                ))}
              </CustomInput>
            </Stack>
            <Stack width={"30%"}>
              <CustomInput
                iconType="$"
                type="text"
                adornment="start"
                select={true}
                bgcolor="#fff"
              >
                {PRODUCT_INFO.map((item) => (
                  <MenuItem value={item.category}>{item.category}</MenuItem>
                ))}
              </CustomInput>
            </Stack>
            <Stack width={"30%"}>
              <CustomInput
                iconType="calendar"
                type="textr"
                adornment="start"
                select={true}
                bgcolor="#fff"
              >
                {PRODUCT_INFO.map((item) => (
                  <MenuItem value={item.price}>{item.price}</MenuItem>
                ))}
              </CustomInput>
            </Stack>
          </Stack>
          <Stack width={"40%"}>
            <CustomInput
              placeHolder="Бүтээгдэхүүний нэр, SKU, UPC"
              adornment="start"
              type="search"
              bgcolor="#fff"
            />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
