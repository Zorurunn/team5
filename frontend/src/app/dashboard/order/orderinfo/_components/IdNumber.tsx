"use client";

import {
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";

const statusMap = {
  delivered: {
    backgroundColor: "#C1E6CF",
    color: "#0A4E22",
    title: "Хүргэгдсэн",
  },
  neworder: {
    backgroundColor: "#FFFFFF",
    color: "text.secondary",
    title: "Шинэ захиалга",
  },
  ondelivery: {
    backgroundColor: "#B7DDFF",
    color: "#1890FF",
    title: "Хүргэлтэнд гарсан",
  },
  inprogress: {
    backgroundColor: "#ECEDF0",
    color: "text.secondary",
    title: "Бэлтгэгдэж байна",
  },
};

type OrderDetailsType = {
  orderID: string | number;
};
const IdNumber = (props: OrderDetailsType) => {
  const { orderID } = props;
  const [status, setStatus] = useState<keyof typeof statusMap>("inprogress");

  const handleChange = (event: SelectChangeEvent) => {
    setStatus(event.target.value as keyof typeof statusMap);
  };
  return (
    <Stack direction={"row"} width={"100%"} justifyContent={"space-between"}>
      <Stack fontSize={16}>
        <Typography fontWeight={400}>Захиалгын ID дугаар: </Typography>
        <Typography fontWeight={600}>{orderID}</Typography>
      </Stack>
      <Stack justifyContent={"center"} width={"fit-content"}>
        <Select
          value={status}
          onChange={handleChange}
          sx={{
            borderRadius: "50px",
            backgroundColor: statusMap[status].backgroundColor,
            color: statusMap[status].color,
            height: "32px",
            fontSize: "14px",
            fontWeight: "400",
          }}
        >
          {Object.keys(statusMap).map((item) => {
            return (
              <MenuItem
                key={item}
                value={item}
                sx={{
                  "&.MuiMenuItem-root": {
                    fontSize: "14px",
                    width: "fit-content",
                    backgroundColor: statusMap[status].backgroundColor,
                    color: statusMap[status].color,
                    borderRadius: "50px",
                    border: "1px solid divider ",
                  },
                }}
              >
                {statusMap[item as keyof typeof statusMap].title}
              </MenuItem>
            );
          })}
        </Select>
      </Stack>
    </Stack>
  );
};

export default IdNumber;
