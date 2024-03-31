"use client";

import { TABS } from "@/constants";
import { Box, Stack, Tab, Tabs as MuiTabs, Typography } from "@mui/material";
import { useState } from "react";

export const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };
  return (
    <Stack width={"100%"}>
      <Stack sx={{ borderBottom: 1, borderColor: "divider" }}>
        <MuiTabs
          value={activeTab}
          onChange={handleChange}
          aria-label="basic tabs example"
          sx={{
            color: "#fff",
            "& .MuiTabs-indicator": {
              bgcolor: "#121316",
            },
          }}
        >
          {TABS.map((tab) => {
            return (
              <Tab
                key={tab.label}
                label={tab.label}
                sx={{
                  color: "text.secondary",
                  fontSize: "16px",
                  "&.Mui-selected": {
                    color: "text.primary",
                    fontWeight: "600",
                  },
                }}
              />
            );
          })}
        </MuiTabs>
      </Stack>
    </Stack>
  );
};
