import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import dayjs from "dayjs";

const headLabels = [
  "Project",
  "Site",
  "Data recovery(%)",
  "Last timestamp",
  "Status",
];

const dataKeys = [
  "project_name",
  "site_name",
  "data_covery",
  "updated_at",
  "issue_status",
];
const MissingDataTable = ({ missingData, onSelectRow }) => {
  const handleClick = (i) => {
    onSelectRow(missingData[i]);
  };

  return (
    <TableContainer component={Paper} sx={{ maxWidth: "max-content" }}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            {headLabels.map((headLabel, index) => (
              <TableCell key={index} align={index === 0 ? "left" : "center"}>
                {headLabel}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {missingData.map((row, index) => (
            <TableRow
              hover
              key={index}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
                cursor: "pointer",
              }}
              onClick={() => handleClick(index)}
            >
              {dataKeys.map((key, i) => (
                <TableCell
                  key={i}
                  align={i === 2 ? "center" : "left"}
                  component={i === 0 ? "th" : null}
                  scope={i === 0 ? "row" : null}
                  sx={{ textTransform: "capitalize" }}
                >
                  {i === 3 ? dayjs(row[key]).format("YYYY-MM-DD") : row[key]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default MissingDataTable;
