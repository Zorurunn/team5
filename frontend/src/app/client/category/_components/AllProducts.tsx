"use client";
import { Stack, Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import { GeneralCard } from "../../_components/GeneralCard";
import { useState } from "react";
import { generalCategoryType } from "@/common/types";
import { useData } from "@/components/provider/DataProvider";
import { useRouter } from "next/navigation";

export const AllProducts = () => {
  const [cards, setCards] = useState<generalCategoryType[]>();
  const { products } = useData();

  return (
    <Container maxWidth={"lg"}>
      <Stack width={"100%"}>
        <Grid
          width={"100%"}
          container
          spacing={{ xs: 2, md: 3 }}
          // columns={{ xs: 4, sm: 8 }}
          justifyContent={"space-between"}
        >
          {products &&
            products.map((item) => (
              <Grid item xs={3}>
                <Stack>
                  <GeneralCard {...item} />
                </Stack>
              </Grid>
            ))}
        </Grid>
      </Stack>
    </Container>
  );
};
