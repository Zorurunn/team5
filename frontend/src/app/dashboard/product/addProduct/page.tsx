"use client";
import { Button, Stack } from "@mui/material";
import ProductNameSection from "../_components/Product.Name.Section";
import ProductImageSection from "../_components/Product.Image.Section";
import { ProductTotalPrice } from "../_components/Product.Total.Price";
import ProductGeneralCategory from "../_components/Product.General.Category";
import { ProductType } from "../_components/Product.Type";
import { ProductTag } from "../_components/Product.Tag";
import { useFormik } from "formik";
import * as yup from "yup";
import { BackTabs } from "@/components/Back.Tabs";
import { useEffect, useState } from "react";
import { AlertModal } from "../_components/Alert.Modal";
import { useData } from "@/components/provider/DataProvider";

const validationSchema = yup.object({
  productName: yup.string().required(),
  description: yup.string().required(),
  serialNumber: yup.string().required(),
  price: yup.number().required(),
  discount: yup.number().nullable(),
  remainQty: yup.number().required(),
  generalCategoryId: yup.string().required(),
  subCategoryId: yup.string().required(),
});

export default function Home() {
  const { createProduct } = useData();
  const [open, setOpen] = useState(false);
  const [colors, setColors] = useState<string[]>([]);
  const [sizes, setSizes] = useState<string[]>([]);
  const [images, setImages] = useState<string[]>([""]);
  const [tags, setTags] = useState<string[]>([]);

  const formik = useFormik({
    initialValues: {
      productName: "",
      description: "",
      serialNumber: "",
      price: null,
      discount: null,
      remainQty: null,
      generalCategoryId: "",
      subCategoryId: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      await createProduct({
        productName: values.productName,
        generalCategoryId: values.generalCategoryId,
        subCategoryId: values.subCategoryId,
        price: values.price,
        remainQty: values.remainQty,
        images: images,
        discount: values.discount,
        description: values.description,
        serialNumber: values.serialNumber,
        productType: {
          productColor: colors,
          productSize: sizes,
        },
        productTag: tags,
      });
    },
  });

  // YAGAAD interval time nemsen be ???
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setOpen(false);
  //   }, 4000);
  //   return () => clearInterval(interval);
  // }, []);

  console.log(formik.values.generalCategoryId);

  return (
    <Stack gap={3} width={"100%"}>
      <BackTabs text="Бүтээгдэхүүн" />
      <Stack direction={"row"} gap={5}>
        <Stack gap={2} width={"50%"}>
          <ProductNameSection
            productName={"productName"}
            productValue={formik.values.productName}
            productError={
              formik.touched.productName && Boolean(formik.errors.productName)
            }
            descriptionName={"description"}
            descriptionValue={formik.values.description}
            descriptionError={
              formik.touched.description && Boolean(formik.errors.description)
            }
            serialNumberName={"serialNumber"}
            serialNumberValue={formik.values.serialNumber}
            serialNumberError={
              formik.touched.serialNumber && Boolean(formik.errors.serialNumber)
            }
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
          />
          <ProductImageSection images={images} setImages={setImages} />
          <ProductTotalPrice
            priceName={"price"}
            priceValue={formik.values.price}
            priceError={formik.touched.price && Boolean(formik.errors.price)}
            discountName={"discount"}
            discountValue={formik.values.discount}
            discountError={
              formik.touched.price && Boolean(formik.errors.discount)
            }
            remainQtyName={"remainQty"}
            remainQtyValue={formik.values.remainQty}
            remainQtyError={
              formik.touched.remainQty && Boolean(formik.errors.remainQty)
            }
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
          />
        </Stack>
        <Stack gap={3} width={"50%"}>
          <ProductGeneralCategory
            generalCategoryId={"generalCategoryId"}
            generalCategoryValue={formik.values.generalCategoryId}
            generalCategoryError={
              (formik.touched.generalCategoryId &&
                Boolean(formik.errors.generalCategoryId)) ||
              (formik.touched.generalCategoryId &&
                formik.values.generalCategoryId ==
                  formik.initialValues.generalCategoryId)
            }
            subCategoryId={"subCategoryId"}
            subCategoryValue={formik.values.subCategoryId}
            subCategoryError={
              (formik.touched.subCategoryId &&
                Boolean(formik.errors.subCategoryId)) ||
              (formik.touched.subCategoryId &&
                formik.values.subCategoryId ==
                  formik.initialValues.subCategoryId)
            }
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
          />

          <ProductType
            colors={colors}
            setColors={setColors}
            sizes={sizes}
            setSizes={setSizes}
          />

          <ProductTag tags={tags} setTags={setTags} />
          <Stack alignSelf={"end"} direction={"row"} gap={1}>
            <Button
              sx={{
                borderRadius: "8px",
                border: "1px solid #D6D8DB",
                fontSize: "18px",
                fontWeight: "600",
                color: "#121316",
                bgcolor: "#FFFFFF",
                px: "20px",
                py: "10px",
              }}
            >
              Ноорог
            </Button>
            <Button
              sx={{
                ":disabled": { color: "gray" },
                borderRadius: "8px",
                fontSize: "18px",
                fontWeight: "600",
                color: "#FFFFFF",
                bgcolor: "#121316",
                px: "20px",
                py: "10px",
                ":hover": { bgcolor: "#393939" },
              }}
              onClick={() => {
                formik.handleSubmit();
              }}
              disabled={
                !formik.isValid ||
                !formik.dirty ||
                images.length === 0 ||
                colors.length === 0 ||
                sizes.length === 0 ||
                tags.length === 0
              }
            >
              Нийтлэх
            </Button>
            {open && (
              <AlertModal
                open={open}
                handleClose={() => {
                  setOpen(false);
                }}
              />
            )}
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
