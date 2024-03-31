"use cleint";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import { Option as BaseOption, optionClasses } from "@mui/base/Option";
import { useState } from "react";
import { CustomInput } from "@/components";
import { CardFormStep3Products } from "@/constants";
import { ProductFilterDropdownCard } from "@/components/Product.DropDown.Menu";
import { bgcolor } from "@mui/system";

const mapDate = ["Сараар", "Өдрөөр", "Жилээр"];

export const IncomeTable = () => {
  const [category, setCategory] = useState("");
  const [activeTab, setActiveTab] = useState("Өнөөдөр");

  const data = [{ name: "Өнөөдөр" }, { name: "7 хоног" }];
  return (
    <Stack
      width={"100%"}
      bgcolor={"#FFFFFF"}
      border={"1px solid #ECEDF0"}
      borderRadius={"12px"}
    >
      <Stack
        width={"100%"}
        direction={"row"}
        justifyContent={"space-between"}
        borderBottom={"1px solid #ECEDF0"}
        py={2.5}
        px={3}
      >
        <Typography fontSize={20} fontWeight={700} color={"#121316"}>
          Орлого
        </Typography>
        <Button
          sx={{
            borderRadius: "8px",
            bgcolor: "#1C20240A",
            color: "#121316",
            gap: "4px",
            display: "flex",
            alignItems: "center",
            padding: "8px, 12px, 8px, 12px",
          }}
        >
          <FileDownloadOutlinedIcon />
          <Typography>Хуулга татах</Typography>
        </Button>
      </Stack>
      <Stack
        width={"100%"}
        direction={"row"}
        justifyContent={"space-between"}
        py={2.5}
        px={3}
      >
        <Typography fontSize={20} fontWeight={700} color={"#121316"}>
          235,000₮
        </Typography>
        <Stack direction={"row"} gap={2}>
          {data.map((item, index) => {
            return (
              <Button
                key={index}
                sx={{
                  borderRadius: "8px",
                  border: "1px solid #ECEDF0",
                  padding: "8px, 12px, 8px, 12px",
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

          <ProductFilterDropdownCard
            title="Сараар"
            mapArr={mapDate}
            setState={setCategory}
          />
        </Stack>
      </Stack>
    </Stack>
  );
};
