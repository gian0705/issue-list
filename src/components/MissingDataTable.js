import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const headLabels = [
  "Project",
  "Site",
  "Data recovery(%)",
  "Last timestamp",
  "Status",
];

const createData = (project, site, data_recovery, last_timestamp, status) => {
  return { project, site, data_recovery, last_timestamp, status };
};

const rows = [
  createData("Argentina", "Rosco", 0, "2021-01-29", "unreviewed"),
  createData("Argentina", "Newell", 0, "2021-01-29", "unreviewed"),
  createData("Argentina", "Lacker", 55.5, "2021-01-29", "unreviewed"),
  createData("Peru", "Mila", 0, "2021-01-29", "in review"),
];

const MissingDataTable = ({ onSelectRow }) => {
  const handleClick = (i) => {
    onSelectRow(rows[i]);
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
          {rows.map((row, index) => (
            <TableRow
              hover
              key={index}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
                cursor: "pointer",
              }}
              onClick={() => handleClick(index)}
            >
              {Object.keys(row).map((key, i) => (
                <TableCell
                  key={i}
                  align={i === 2 ? "center" : "left"}
                  component={i === 0 ? "th" : null}
                  scope={i === 0 ? "row" : null}
                  sx={{ textTransform: "capitalize" }}
                >
                  {row[key]}
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
