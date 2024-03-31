import { CustomInput } from "@/components";
import { Stack, TextField, TextareaAutosize } from "@mui/material";
import { ChangeEventHandler, FocusEventHandler } from "react";

type productNameSectionType = {
  handleBlur?:
    | FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>
    | undefined;
  handleChange:
    | ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
    | undefined;

  // product
  productName: string;
  productValue: string;
  productError?: boolean | undefined;
  // info
  descriptionName: string;
  descriptionValue: string;
  descriptionError?: boolean | undefined;
  // code
  serialNumberName: string;
  serialNumberValue: number | string;
  serialNumberError?: boolean | undefined;
};

const ProductNameSection = (props: productNameSectionType) => {
  const {
    handleChange,
    handleBlur,
    productName,
    productValue,
    productError,
    descriptionName,
    descriptionValue,
    descriptionError,
    serialNumberName,
    serialNumberValue,
    serialNumberError,
  } = props;
  return (
    <Stack width={"100%"} padding={3} borderRadius={"12px"} bgcolor={"#FFFFFF"}>
      <Stack gap={3}>
        <Stack>
          <CustomInput
            borderRadius="8px"
            size="medium"
            name={productName}
            value={productValue ?? "defaultValue"}
            handleChange={handleChange}
            onBlur={handleBlur}
            error={productError}
            label="Бүтээгдэхүүний нэр"
            type="text"
            placeHolder="нэр"
            helperText="Бүтээгдэхүүний нэрээ оруулна уу !"
          />
        </Stack>
        <Stack>
          <CustomInput
            borderRadius="8px"
            size="medium"
            name={descriptionName}
            value={descriptionValue ?? "defaultValue"}
            handleChange={handleChange}
            onBlur={handleBlur}
            error={descriptionError}
            type="text"
            multiLine={true}
            label="Нэмэлт мэдээлэл"
            placeHolder="Гол онцлог, давуу тал, техникийн үзүүлэлтүүдийг онцолсон дэлгэрэнгүй, сонирхолтой тайлбар."
          />
        </Stack>
        <Stack flexGrow={1}>
          <CustomInput
            borderRadius="8px"
            size="medium"
            name={serialNumberName}
            value={serialNumberValue ?? "defaultValue"}
            handleChange={handleChange}
            onBlur={handleBlur}
            error={serialNumberError}
            label="Барааны код"
            helperText="Incorrect Serial Number."
            type="text"
            placeHolder="#12345678"
          />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ProductNameSection;
