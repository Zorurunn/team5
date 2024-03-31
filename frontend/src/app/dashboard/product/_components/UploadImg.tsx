"use client";
import { Badge, Button, IconButton, Stack, TextField } from "@mui/material";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { AddProductImg } from "./AddProductImg";
import Image from "next/image";
import CloseIcon from "@mui/icons-material/Close";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import { useBackDrop } from "@/components/provider/BackDropProvider";
type uploadImgType = {
  images: string[];
  setImages: Dispatch<SetStateAction<string[]>>;
  handleDelete: () => void;
  index: number;
};

export const UploadImg = (props: uploadImgType) => {
  const { images, setImages, handleDelete, index } = props;
  const { setOpenLoading } = useBackDrop();

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imgUrl, setImgUrl] = useState();

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;
    setSelectedFile(event.target.files[0]);
  };

  const handleImageUpload = async () => {
    if (selectedFile) {
      try {
        const formData = new FormData();
        formData.append("file", selectedFile);

        const res = await fetch(
          "https://api.cloudinary.com/v1_1/daeadzt2k/upload?upload_preset=g8m2bqqj",
          {
            method: "POST",
            body: formData,
          }
        );
        const data = await res.json();
        setImgUrl(data.secure_url);
      } catch (e) {
        console.log(e);
      }
    }
  };

  useEffect(() => {
    if (imgUrl) {
      const newImages = images.map((item, ind) => {
        if (ind === index) {
          item = imgUrl;
        }
        return item;
      });
      setImages(newImages);
      setOpenLoading(false);
    }
  }, [imgUrl]);

  useEffect(() => {
    if (selectedFile) {
      setOpenLoading(true);
      handleImageUpload();
    }
  }, [selectedFile]);
  return (
    <Stack
      sx={{
        "&:hover .deleteImgBtn": {
          display: "flex",
        },
      }}
      position={"relative"}
      overflow={"hidden"}
      width={125}
      height={125}
      borderRadius={2}
    >
      {images[index] ? (
        <Stack width={"100%"} height={"100%"} sx={{ border: imgUrl ? 0 : 1 }}>
          <Image
            alt="product image"
            src={images[index]}
            fill
            objectFit="cover"
          />
        </Stack>
      ) : (
        <TextField
          type="file"
          onChange={handleImageChange}
          variant="outlined"
          sx={{
            ".MuiInputBase-input": {
              width: "100%",
              fontSize: 8,
              textWrap: "wrap",
            },
            borderRadius: 2,
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            padding: 2,
            border: 1,
          }}
        />
      )}

      {/* DELETE BUTTON */}
      <IconButton
        onClick={() => {
          handleDelete();
        }}
        className="deleteImgBtn"
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
  );
};
