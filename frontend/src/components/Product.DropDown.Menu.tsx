"use state";
import {
  KeyboardArrowDownOutlined,
  KeyboardArrowUpOutlined,
} from "@mui/icons-material";
import { Input, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";

type ProductFilterDropdownCardProps = {
  title: string;
  mapArr?: string[];
  setState: Dispatch<SetStateAction<string>>;
};

export const ProductFilterDropdownCard = (
  props: ProductFilterDropdownCardProps
) => {
  const { title, mapArr, setState } = props;
  const [isShown, setIsShown] = useState(false);

  return (
    <Stack position={"relative"}>
      <Stack
        sx={{ ":hover": { bgcolor: "#18BA51", color: "#ECEDF0" } }}
        bgcolor="white"
        direction="row"
        gap={1}
        borderRadius={2}
        p="8px 12px"
        border="1px solid #ECEDF0"
        alignItems={"center"}
        onClick={() => {
          setIsShown((prev) => !prev);
        }}
      >
        <CalendarTodayOutlinedIcon />
        <Typography fontWeight={600} fontSize={14} color={"#3F4145"}>
          {title}
        </Typography>
        {isShown ? <KeyboardArrowUpOutlined /> : <KeyboardArrowDownOutlined />}
      </Stack>
      {title !== "Сараар" ? (
        <Stack
          display={isShown ? "flex" : "none"}
          position={"absolute"}
          top={48}
          zIndex={10}
          bgcolor={"white"}
          borderRadius={2}
          width={"100%"}
          border={"1px solid #ECEDF0"}
        >
          {mapArr
            ? mapArr.map((item, index) => {
                return (
                  <Stack
                    direction={"row"}
                    p="8px 12px"
                    borderRadius={2}
                    key={index}
                    onClick={() => {
                      setState(item);
                      setIsShown((prev) => !prev);
                    }}
                  >
                    <Typography fontWeight={600} color={"#3F4145"}>
                      {item}
                    </Typography>
                  </Stack>
                );
              })
            : null}
        </Stack>
      ) : null}
    </Stack>
  );
};
