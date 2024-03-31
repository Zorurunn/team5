import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/system";
import Image from "next/image";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Divider } from "@mui/material";

const style = {
  maxWidth: "274px",
  width: "100%",
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "#ffff",
  borderRadius: 6,
  boxShadow: 24,
  p: 6,
};

export const Alert = ({
  open,
  handleClose,
}: {
  open: boolean;
  handleClose: () => void;
}) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Box sx={style}>
        <Stack justifyContent={"center"} alignItems={"center"} gap={4}>
          <Stack justifyContent={"center"} alignItems={"center"} gap={2}>
            <Image
              width={100}
              height={100}
              src={"/FeaturedIcon.png"}
              alt="alert logo"
            />
            <Typography
              fontSize={18}
              fontWeight={600}
              color={"#121316"}
              id="transition-modal-description"
            >
              Бүтээгдэхүүн амжилттай нэмэгдлээ.
            </Typography>
          </Stack>
        </Stack>
      </Box>
    </Modal>
  );
};
