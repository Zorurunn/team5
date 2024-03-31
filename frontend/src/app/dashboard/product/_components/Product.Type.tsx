import { CustomInput } from "@/components";
import {
  Button,
  CardActionArea,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  ChangeEventHandler,
  Dispatch,
  FocusEventHandler,
  SetStateAction,
  useState,
} from "react";
import { ProductColor } from "./ProductColor";
import { ProductSize } from "./ProductSIze";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
type productTypeProps = {
  colors: string[];
  setColors: Dispatch<SetStateAction<string[]>>;
  sizes: string[];
  setSizes: Dispatch<SetStateAction<string[]>>;
};
export const ProductType = (props: productTypeProps) => {
  const { colors, setColors, sizes, setSizes } = props;

  const [openColor, setOpenColor] = useState(false);
  const [openSize, setOpenSize] = useState(false);

  const removeColor = (index: number) => {
    setColors((prev) => prev.filter((_, idx) => idx !== index));
  };

  const removeSize = (index: number) => {
    setSizes((prev) => prev.filter((_, idx) => idx !== index));
  };

  return (
    <Stack padding={3} borderRadius={"12px"} bgcolor={"#FFFFFF"} gap={3}>
      <Typography fontSize={18} fontWeight={600} color={"text.primary"}>
        Төрөл
      </Typography>

      <Stack gap={2}>
        <Stack direction={"row"} alignItems={"center"} gap={3}>
          <Typography fontSize={16} fontWeight={400} color={"text.primary"}>
            Өнгө
          </Typography>
          <Stack direction={"row"} overflow={"scroll"} maxWidth={340}>
            <Stack direction={"row"} gap={3}>
              {colors.map((color, index) => (
                <Stack
                  position={"relative"}
                  sx={{
                    "&:hover .deleteColorBtn": {
                      display: "flex",
                    },
                  }}
                >
                  <Stack
                    key={index}
                    width={50}
                    height={50}
                    borderRadius={"50%"}
                    bgcolor={color}
                    border={1}
                  />

                  <IconButton
                    onClick={() => {
                      removeColor(index);
                    }}
                    className="deleteColorBtn"
                    sx={{
                      display: "none",
                      bgcolor: "#000",
                      position: "absolute",
                      top: "0",
                      right: "0",
                      width: 10,
                      height: 10,
                      justifyContent: "center",
                      alignItems: "center",
                      "&:hover": {
                        bgcolor: "#121316",
                      },
                    }}
                  >
                    <ClearOutlinedIcon
                      sx={{
                        color: "#fff",
                        fontSize: "12px",
                      }}
                    />
                  </IconButton>
                </Stack>
              ))}
            </Stack>
          </Stack>
          <Stack alignItems={"center"} justifyContent={"center"}>
            <IconButton
              onClick={() => {
                setOpenColor(true);
              }}
              size="small"
              aria-label="adds"
            >
              <Stack p={1.8} borderRadius={"50%"} bgcolor={"#ECEDF0"}>
                <AddIcon />
              </Stack>
            </IconButton>
            {openColor && (
              <ProductColor
                setColors={setColors}
                openColor={openColor}
                handleCloseColor={() => {
                  setOpenColor(false);
                }}
              />
            )}
          </Stack>
        </Stack>

        <Stack direction={"row"} alignItems={"center"} gap={3}>
          <Typography
            fontSize={16}
            fontWeight={400}
            color={"text.primary"}
            lineHeight={"20px"}
          >
            Хэмжээ
          </Typography>

          <Stack direction={"row"} overflow={"scroll"} maxWidth={320}>
            <Stack direction={"row"} gap={3}>
              {sizes.map((size, index) => (
                <Stack
                  position={"relative"}
                  sx={{
                    "&:hover .deleteSizeBtn": {
                      display: "flex",
                    },
                  }}
                >
                  <Stack
                    justifyContent={"center"}
                    alignItems={"center"}
                    key={index}
                    width={50}
                    height={50}
                    borderRadius={"50%"}
                    bgcolor={"#ECEDF0"}
                    border={1}
                  >
                    <Typography>{size}</Typography>
                  </Stack>

                  <IconButton
                    className="deleteSizeBtn"
                    onClick={() => {
                      removeSize(index);
                    }}
                    sx={{
                      display: "none",
                      bgcolor: "#000",
                      position: "absolute",
                      top: "0",
                      right: "0",
                      width: 10,
                      height: 10,
                      justifyContent: "center",
                      alignItems: "center",
                      "&:hover": {
                        bgcolor: "#121316",
                      },
                    }}
                  >
                    <ClearOutlinedIcon
                      sx={{
                        color: "#fff",
                        fontSize: "12px",
                      }}
                    />
                  </IconButton>
                </Stack>
              ))}
            </Stack>
          </Stack>
          <Stack alignItems={"center"} justifyContent={"center"}>
            <IconButton
              onClick={() => {
                setOpenSize(true);
              }}
              size="small"
              aria-label="adds"
            >
              <Stack p={1.8} borderRadius={"50%"} bgcolor={"#ECEDF0"}>
                <AddIcon />
              </Stack>
            </IconButton>
            {openSize && (
              <ProductSize
                setSizes={setSizes}
                openSize={openSize}
                handleCloseSize={() => {
                  setOpenSize(false);
                }}
              />
            )}
          </Stack>
        </Stack>
      </Stack>
      <Stack width={150}>
        <Button
          fullWidth
          sx={{
            border: "1px solid #D6D8DB",
            borderRadius: "8px",
            whiteSpace: "nowrap",
            padding: "8px",
            color: "#000",
          }}
        >
          <Typography fontSize={14} fontWeight={600}>
            Төрөл нэмэх
          </Typography>
        </Button>
      </Stack>
    </Stack>
  );
};
