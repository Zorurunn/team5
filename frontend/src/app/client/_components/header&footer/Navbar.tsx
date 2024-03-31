"use client";
import { InputAdornment, Stack, TextField, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Container } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";

export const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <Stack width={"100%"} bgcolor={"#FFFFFF"}>
      <Container maxWidth={"lg"}>
        <Stack
          width={"100%"}
          py={2}
          px={1}
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            gap={"25%"}
          >
            <Typography
              fontSize={34}
              fontWeight={700}
              color={"#0D0E43"}
              sx={{ cursor: "pointer" }}
            >
              Ecommerce
            </Typography>
            <Stack direction={"row"} alignItems={"center"} gap={3}>
              <Stack
                direction={"row"}
                alignItems={"center"}
                justifyContent={"center"}
                sx={{ cursor: "pointer" }}
                onClick={() => {
                  router.push("/client");
                }}
                color={
                  pathname.includes("category") ? "#0D0E43" : "primary.light"
                }
              >
                <Typography fontSize={16} fontWeight={400}>
                  Нүүр
                </Typography>
              </Stack>

              <Typography
                fontSize={16}
                fontWeight={400}
                sx={{ cursor: "pointer" }}
                onClick={() => {
                  router.push("/client/category");
                }}
                color={
                  !pathname.includes("category") ? "#0D0E43" : "primary.light"
                }
              >
                Ангилал
              </Typography>
            </Stack>
          </Stack>
          <Stack direction={"row"} alignItems={"center"}>
            <TextField
              sx={{}}
              variant="outlined"
              type="search"
              InputProps={{
                sx: {
                  background: "#FB2E86",
                },
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon sx={{ cursor: "pointer", color: "#FFFFFF" }} />
                  </InputAdornment>
                ),
              }}
              inputProps={{
                style: {
                  padding: "8px",
                  border: "2px solid #E7E6EF",
                  background: "#F7F7F8",
                },
              }}
            />
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
};
