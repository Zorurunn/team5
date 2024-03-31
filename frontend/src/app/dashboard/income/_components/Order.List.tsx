import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { COLUMNS, ROWS } from "@/constants";
import { Stack } from "@mui/material";

export default function OrderList() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper
      sx={{
        width: "100%",
        overflow: "hidden",
        borderRadius: "12px",
        border: "1px solid #ECEDF0",
      }}
    >
      <TableContainer sx={{ maxHeight: 740 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {COLUMNS.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{
                    minWidth: column.minWidth,
                    fontSize: column.fontSize,
                    color: column.fontColor,
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody sx={{ px: "20px", maxHeight: 740 }}>
            {ROWS
              .slice
              //   page * rowsPerPage,
              //   page * rowsPerPage + rowsPerPage
              ()
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.order}>
                    <TableCell>
                      <Stack>{"#" + row.ID}</Stack>
                    </TableCell>
                    <TableCell>
                      <Stack>{row.order}</Stack>
                      <Stack>{row.phoneNum}</Stack>
                    </TableCell>
                    <TableCell>
                      <Stack>
                        {new Intl.NumberFormat().format(row.pay) + "₮"}
                      </Stack>
                    </TableCell>
                    <TableCell>
                      <Stack>{row.date}</Stack>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

// {COLUMNS.map((column) => {
//   const value = row[column.id];
//   return (
//     <TableCell key={column.id} align={column.align}>
//       <Stack p={2}>
//         {column.format && typeof value === "number"
//           ? column.format(value) + "₮"
//           : value}
//       </Stack>
//     </TableCell>
//   );
// })}
