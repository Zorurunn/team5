import { Button, Stack, Typography } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Link from "next/link";

type BackTabsType = {
  text: string;
  // href: string;
};

export const BackTabs = (props: BackTabsType) => {
  return (
    <Stack
      width={"100%"}
      direction={"row"}
      gap={3}
      borderBottom={2}
      borderColor={"#eee"}
      borderRadius={"0px 0px 8px 8px"}
      px={2}
      py={1.5}
      fontSize={"16px"}
      fontWeight={"400"}
      bgcolor={"#ffff"}
    >
      <Link href={"./"}>
        <ChevronLeftIcon />
      </Link>
      <Typography>{props.text}</Typography>
    </Stack>
  );
};
