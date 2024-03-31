import { CustomInput } from "@/components";
import { IOSSwitch } from "@/components/IOSSwitch";
import { Stack, Typography } from "@mui/material";
import React, { ChangeEventHandler, FocusEventHandler, useState } from "react";

type productTotalPriceType = {
  handleBlur?:
    | FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>
    | undefined;
  handleChange:
    | ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
    | undefined;

  // Price
  priceName: string;
  priceValue: number | null;
  priceError?: boolean | undefined;
  // Discount
  discountName: string;
  discountValue: number | null;
  discountError: boolean | undefined;
  // Remain qty
  remainQtyName: string;
  remainQtyValue: number | null;
  remainQtyError?: boolean | undefined;
};

export const ProductTotalPrice = (props: productTotalPriceType) => {
  const {
    handleChange,
    handleBlur,
    priceName,
    priceValue,
    priceError,
    discountName,
    discountValue,
    discountError,
    remainQtyName,
    remainQtyValue,
    remainQtyError,
  } = props;
  const [checkDiscount, setCheckDiscount] = useState(false);
  return (
    <Stack width={"100%"} padding={3} borderRadius={"12px"} bgcolor={"#FFFFFF"}>
      <Stack gap={3}>
        <Stack>
          <CustomInput
            borderRadius="8px"
            name={priceName}
            value={priceValue ?? "defaultValue"}
            handleChange={handleChange}
            onBlur={handleBlur}
            error={priceError}
            label="Үндсэн үнэ"
            type="number"
            placeHolder="Үндсэн үнэ"
          />
        </Stack>
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Stack width={"45%"}>
            <Stack direction={"row"} alignItems={"center"} gap={1}>
              <IOSSwitch
                onChange={() => {
                  setCheckDiscount((prev) => !prev);
                }}
              />
              <Typography>Хямдралтай эсэх</Typography>
            </Stack>
            <CustomInput
              type="discount"
              name={discountName}
              value={discountValue ?? ""}
              error={discountError}
              handleChange={handleChange}
              onBlur={handleBlur}
              onClick={() => setCheckDiscount(true)}
              disabled={!checkDiscount}
            />
          </Stack>

          <Stack width={"45%"}>
            <CustomInput
              borderRadius="8px"
              name={remainQtyName}
              value={remainQtyValue ?? "defaultValue"}
              handleChange={handleChange}
              onBlur={handleBlur}
              error={remainQtyError}
              label="Үлдэгдэл тоо ширхэг"
              type="number"
              placeHolder="Үлдэгдэл тоо ширхэг"
            />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
