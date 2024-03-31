import { stepNodeType } from "@/common/types";
import { Container, Stack, Typography } from "@mui/material";

const nameArr = ["Дэлгүүрийн нэр", "Бүс нутаг", "Нэмэлт мэдээлэл"];
export default function ProgressStep({ step }: { step: number }) {
  // step iig props oor awah eswel provider aas awah
  // temporarily used static step number

  return (
    <Container maxWidth="xl">
      <Stack
        direction={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        width={"100%"}
      >
        <Stack
          direction={"row"}
          justifyContent={"center"}
          alignItems={"center"}
          width={"100%"}
          maxWidth={"1200px"}
        >
          {nameArr.map((item, index) => {
            return (
              <Node
                key={item}
                isActive={index + 1 < Number(step)}
                order={index * 2 + 1}
                title={item}
              >
                {index + 1}
              </Node>
            );
          })}

          <Stack
            flexGrow={1}
            order={2}
            height={8}
            sx={{ background: Number(step) > 2 ? "#FB2E86" : "#eee" }}
          />

          <Stack
            flexGrow={1}
            order={4}
            height={8}
            sx={{ background: Number(step) > 3 ? "#FB2E86" : "#eee" }}
          />
        </Stack>
      </Stack>
    </Container>
  );
}

const Node = (props: stepNodeType) => {
  const { children, isActive = false, order, title } = props;
  return (
    <Stack
      order={order}
      position={"relative"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Stack
        width={50}
        height={50}
        direction={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        borderRadius={"50%"}
        sx={{
          color: isActive ? "#fff" : "#000",
          background: isActive ? "#FB2E86" : "#eee",
        }}
      >
        {children}
      </Stack>
      <Typography
        width={"140px"}
        position={"absolute"}
        left={"-50%"}
        bottom={-30}
      >
        {title}
      </Typography>
    </Stack>
  );
};
