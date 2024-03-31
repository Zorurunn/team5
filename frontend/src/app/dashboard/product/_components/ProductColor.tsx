import { CustomInput } from "@/components";
import { Button, Card, IconButton, Modal, TextField } from "@mui/material";
import { Stack } from "@mui/system";
import { Dispatch, SetStateAction, useState } from "react";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";

export const ProductColor = ({
  setColors,
  openColor,
  handleCloseColor,
}: {
  setColors: Dispatch<SetStateAction<string[]>>;
  openColor: boolean;
  handleCloseColor: () => void;
}) => {
  const [color, setColor] = useState("");
  return (
    <Modal
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      open={openColor}
    >
      <Card
        sx={{
          position: "relative",
          width: 400,
          height: 400,
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
            handleCloseColor();
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
        <Stack direction={"row"} alignItems={"center"} gap={2} width={"100%"}>
          <Stack width={"50%"}>
            <TextField
              type="color"
              onChange={(e) => {
                setColor(e.target.value);
              }}
            />
          </Stack>

          <Button
            onClick={() => {
              if (!color) {
                return;
              }
              setColors((prev) => [...prev, color]);
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
            Өнгө нэмэх
          </Button>
        </Stack>
      </Card>
    </Modal>
  );
};
