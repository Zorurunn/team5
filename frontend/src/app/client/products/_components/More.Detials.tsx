"use client";

import { Container, Stack, Typography, Box, Tab } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Tabs from "@mui/material/Tabs";
import { useState } from "react";
import { ProductRating } from "./Product.Rating";
import { AllComment } from "./All.Comment";
import { ProductParams } from "@/components/provider/DataProvider";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
export const MoreDetial = (props: ProductParams) => {
  const { productName, description } = props;

  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Stack width={"100%"} bgcolor={"#F9F8FE"}>
      <Container maxWidth={"lg"}>
        <Stack width={"100%"} py={6}>
          <Box sx={{ width: "100%" }}>
            <Box sx={{ borderColor: "#151875" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                sx={{
                  color: "#fff",
                  "& .MuiTabs-indicator": {
                    bgcolor: "#151875",
                  },
                }}
              >
                <Tab
                  sx={{
                    color: "#151875",
                    fontSize: "24px",
                    fontWeight: "800",
                    "&.Mui-selected": {
                      color: "#151875",
                      fontSize: "24px",
                      fontWeight: "800",
                    },
                  }}
                  {...a11yProps(0)}
                  label="Нэмэлт мэдээлэл"
                />
                <Tab
                  sx={{
                    color: "#151875",
                    fontSize: "24px",
                    fontWeight: "800",
                    "&.Mui-selected": {
                      color: "#151875",
                      fontSize: "24px",
                      fontWeight: "800",
                    },
                  }}
                  {...a11yProps(1)}
                  label="Үнэлгээ"
                />
              </Tabs>
            </Box>

            <CustomTabPanel value={value} index={0}>
              <Stack gap={1}>
                <Typography color={"#151875"} fontSize={22} fontWeight={800}>
                  {productName}
                </Typography>
                <Typography color={"#A9ACC6"} fontSize={16} fontWeight={800}>
                  {description}
                </Typography>
              </Stack>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              <ProductRating {...props} />
            </CustomTabPanel>
          </Box>
        </Stack>
      </Container>
    </Stack>
  );
};
