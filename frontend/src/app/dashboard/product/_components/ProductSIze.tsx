import { CustomInput } from "@/components";
import {
  Button,
  Card,
  IconButton,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import { Dispatch, SetStateAction, useState } from "react";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import * as yup from "yup";
import { useFormik } from "formik";

const sizes = [
  { size: "XS" },
  { size: "S" },
  { size: "M" },
  { size: "L" },
  { size: "XL" },
  { size: "XXL" },
  { size: "XXXL" },
];

export const ProductSize = ({
  setSizes,
  openSize,
  handleCloseSize,
}: {
  setSizes: Dispatch<SetStateAction<string[]>>;
  openSize: boolean;
  handleCloseSize: () => void;
}) => {
  const [activeBorder, setActiveBorder] = useState("");
  const [size, setSize] = useState("");
  return (
    <Modal
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      open={openSize}
    >
      <Card
        sx={{
          position: "relative",
          width: 500,
          height: 200,
          p: "24px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          gap: "20px",
          borderRadius: "16px",
        }}
      >
        <Stack
          onClick={() => {
            handleCloseSize();
          }}
          position={"absolute"}
          top={0}
          right={0}
          width={"fit-content"}
        >
          <IconButton>
            <ClearOutlinedIcon />
          </IconButton>
        </Stack>
        <Stack></Stack>
        <Stack alignItems={"center"} gap={4} width={"100%"}>
          <Stack gap={2} direction={"row"} flexWrap={"wrap"}>
            {sizes.map((item, index) => (
              <Stack
                justifyContent={"center"}
                alignItems={"center"}
                key={index}
                width={50}
                height={50}
                borderRadius={"50%"}
                bgcolor={"#ECEDF0"}
                sx={{
                  border:
                    activeBorder === item.size ? "1.5px solid black" : "0",
                }}
                onClick={() => {
                  setActiveBorder(item.size);
                  setSize(item.size);
                }}
              >
                <Typography>{item.size}</Typography>
              </Stack>
            ))}
          </Stack>
          <Button
            onClick={() => {
              if (!size) {
                return;
              }
              setSizes((prev) => [...prev, size]);
            }}
            sx={{
              fontSize: "16px",
              fontWeight: "600",
              borderRadius: "8px",
              p: "12px",
              width: "50%",
              bgcolor: "#000",
              color: "#fff",
              "&:hover": {
                bgcolor: "#393939",
              },
            }}
          >
            Хэмжээ нэмэх
          </Button>
        </Stack>
      </Card>
    </Modal>
  );
};
