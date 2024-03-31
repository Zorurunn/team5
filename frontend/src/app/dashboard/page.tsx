"use client";
import { HeaderCard } from "./_components/HeaderCard";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { Grid, Stack } from "@mui/material";
import { BarChartContainer } from "./_components/BarChartContainer";
import { SalesBarChart } from "./_components/SalesBarChart";
import { BestSelledProducts } from "./_components/BestSelledProducts";
import { AreasBarChart } from "./_components/AreasBarChart";
type ratingType = {
  userId: string;
  productId: string;
  rate: number;
  comment: string;
};

export default function Home() {
  return (
    <Stack height={"100%"}>
      {/* HEADER CARDS */}
      <Stack gap={3} my={3}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <HeaderCard
              title="Орлого"
              icon={<AttachMoneyIcon sx={{ fontSize: 20 }} />}
              value={235000}
              date="Өнөөдөр"
            />
          </Grid>
          <Grid item xs={4}>
            <HeaderCard
              title="Захиалга"
              icon={<ContentPasteIcon sx={{ fontSize: 20 }} />}
              value={58}
              date="Өнөөдөр"
            />
          </Grid>
          <Grid item xs={4}>
            <HeaderCard
              title="Хэрэглэгч"
              icon={<PersonOutlineOutlinedIcon sx={{ fontSize: 20 }} />}
              value={980}
              date="Өнөөдөр"
            />
          </Grid>
        </Grid>

        {/* DASHBOARD MAIN AREA CHARTS */}
        <Grid container spacing={2} flexGrow={1} mb={3}>
          <Grid item xs={6}>
            <BestSelledProducts />
          </Grid>
          <Grid item xs={6} container spacing={2}>
            <Grid item xs={12}>
              <BarChartContainer title="Борлуулалт">
                <SalesBarChart />
              </BarChartContainer>
            </Grid>
            <Grid item xs={12}>
              <BarChartContainer title="Идэвхтэй бүс нутаг">
                <AreasBarChart />
              </BarChartContainer>
            </Grid>
          </Grid>
        </Grid>
      </Stack>
    </Stack>
  );
}
