"use client";
import { Button, Stack, Typography } from "@mui/material";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import { CustomInput } from "@/components";
import { useState } from "react";

export const Filter = () => {
  const [activeTab, setActiveTab] = useState("Өнөөдөр");
  const data = [{ name: "Өнөөдөр" }, { name: "7 хоног" }];

  return (
    <Stack
      width={"100%"}
      py={4}
      direction={"row"}
      justifyContent="space-between"
    >
      <Stack direction={"row"} gap={2}>
        {data.map((item, index) => {
          return (
            <Button
              key={index}
              sx={{
                borderRadius: "8px",
                border: "1px solid #ECEDF0",
                px: "20px",
                py: "8px",
                bgcolor: activeTab === item.name ? "#18BA51" : "#ffff",
                color: activeTab === item.name ? "#ECEDF0" : "#121316",
                ":hover": {
                  bgcolor: activeTab === item.name ? "#18BA51" : "#ffff",
                  color: activeTab === item.name ? "#ECEDF0" : "#121316",
                },
              }}
              onClick={() => {
                setActiveTab(item.name);
              }}
            >
              <Typography>{item.name}</Typography>
            </Button>
          );
        })}
        <Button
          sx={{
            bgcolor: "#FFFFFF",
            borderRadius: "8px",
            color: "#121316",
            border: "1px solid #ECEDF0",
            gap: "4px",
            display: "flex",
            alignItems: "center",
            px: "20px",
            py: "8px",
          }}
        >
          <CalendarTodayOutlinedIcon />
          <Typography>Сараар</Typography>
        </Button>
      </Stack>
      <Stack width={"302px"} direction={"row"} justifyContent={"center"}>
        <CustomInput
          borderRadius="8px"
          // to do: widthee yanzlah
          adornment="start"
          placeHolder="Дугаар, Имэйл"
          size="medium"
          bgcolor="#fff"
          sx={{
            fontSize: "14px",
            fontWeight: "400",
            color: "text.secondary",
          }}
          type="text"
        />
      </Stack>
    </Stack>
  );
};
