"use client";
import { CustomInput } from "@/components";
import { useData } from "@/components/provider/DataProvider";
import { GENERAL_CATEGORIES, SUB_CATEGORIES } from "@/constants";
import { MenuItem, Stack, Typography } from "@mui/material";
import { ChangeEventHandler, FocusEventHandler, useState } from "react";
type productGeneralCategoryType = {
  handleBlur?:
    | FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>
    | undefined;
  handleChange:
    | ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
    | undefined;

  // generalCategory
  generalCategoryId: string;
  generalCategoryValue: string;
  generalCategoryError?: boolean | undefined;

  // subCategory
  subCategoryId: string;
  subCategoryValue: string;
  subCategoryError?: boolean | undefined;
};

const ProductGeneralCategory = (props: productGeneralCategoryType) => {
  const { generalCategories, subCategories } = useData();
  const {
    generalCategoryId,
    generalCategoryValue,
    generalCategoryError,
    subCategoryId,
    subCategoryValue,
    subCategoryError,
    handleChange,
    handleBlur,
  } = props;
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <Stack width={"100%"} padding={3} borderRadius={"12px"} bgcolor={"#FFFFFF"}>
      <Stack gap={2}>
        <CustomInput
          borderRadius="8px"
          name={generalCategoryId}
          label="Ерөнхий ангилал"
          type="select"
          placeHolder="Сонгох"
          value={generalCategoryValue ?? "defualtValue"}
          handleChange={handleChange}
          onBlur={handleBlur}
          error={generalCategoryError}
          select={true}
          // onSelect={}
          sx={{
            fontSize: "16px",
            fontWeight: "400",
          }}
        >
          <MenuItem value={"defaultValue"} disabled>
            Aнгилал сонгоно уу
          </MenuItem>
          {generalCategories &&
            generalCategories.map((item) => (
              <MenuItem
                onSelect={() => {
                  setSelectedCategory(item._id);
                  console.log(selectedCategory);
                }}
                key={item._id}
                value={item._id}
              >
                {item.generalCategoryName}
              </MenuItem>
            ))}
        </CustomInput>
        <CustomInput
          borderRadius="8px"
          name={subCategoryId}
          label="Дэд ангилал"
          type="select"
          placeHolder="Сонгох"
          value={subCategoryValue ?? "defaultValue"}
          handleChange={handleChange}
          onBlur={handleBlur}
          error={subCategoryError}
          select={true}
          sx={{
            fontSize: "16px",
            fontWeight: "400",
          }}
        >
          <MenuItem value={"defaultValue"} disabled>
            Aнгилал сонгоно уу
          </MenuItem>
          {subCategories &&
            subCategories
              .filter((item) =>
                item.generalCategoryId.includes(generalCategoryValue)
              )
              .map((item) => {
                return (
                  <MenuItem key={item._id} value={item._id}>
                    {item.subCategoryName}
                  </MenuItem>
                );
              })}
        </CustomInput>
      </Stack>
    </Stack>
  );
};

export default ProductGeneralCategory;
