import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import FilterListIcon from "@mui/icons-material/FilterList";
import { visuallyHidden } from "@mui/utils";

const createData = (
  project,
  site,
  measurement,
  type,
  height,
  orientation,
  days,
  first_observed,
  last_observed,
  link,
  status
) => {
  return {
    project,
    site,
    measurement,
    type,
    height,
    orientation,
    days,
    first_observed,
    last_observed,
    link,
    status,
  };
};

const rows = [
  createData(
    "Argentina",
    "Rosco",
    "Wspd_59m_SW",
    "wind_speed",
    59,
    0,
    13,
    "2024-01-01",
    "2024-01-18",
    "Plot",
    "in_review"
  ),
  createData(
    "Argentina",
    "Rosco",
    "Wspd_59m_SW",
    "wind_speed",
    59,
    0,
    13,
    "2024-01-01",
    "2024-01-18",
    "Plot",
    "in_review"
  ),
  createData(
    "Argentina",
    "Rosco",
    "Wspd_59m_SW",
    "wind_speed",
    59,
    0,
    13,
    "2024-01-01",
    "2024-01-18",
    "Plot",
    "in_review"
  ),
  createData(
    "Argentina",
    "Rosco",
    "Wspd_59m_SW",
    "wind_speed",
    59,
    0,
    13,
    "2024-01-01",
    "2024-01-18",
    "Plot",
    "in_review"
  ),
  createData(
    "Argentina",
    "Rosco",
    "Wspd_59m_SW",
    "wind_speed",
    59,
    0,
    13,
    "2024-01-01",
    "2024-01-18",
    "Plot",
    "in_review"
  ),
  createData(
    "Argentina",
    "Rosco",
    "Wspd_59m_SW",
    "wind_speed",
    59,
    0,
    13,
    "2024-01-01",
    "2024-01-18",
    "Plot",
    "in_review"
  ),
  createData(
    "Argentina",
    "Rosco",
    "Wspd_59m_SW",
    "wind_speed",
    59,
    0,
    13,
    "2024-01-01",
    "2024-01-18",
    "Plot",
    "in_review"
  ),
];

const descendingComparator = (a, b, orderBy) => {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
};

const getComparator = (order, orderBy) => {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
};

const stableSort = (array, comparator) => {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
};

const headCells = [
  {
    id: "project",
    label: "Project",
  },
  {
    id: "site",
    label: "Site",
  },
  {
    id: "measurement",
    label: "Measurement",
  },
  {
    id: "type",
    label: "Type",
  },
  {
    id: "height",
    label: "Height(m)",
  },
  {
    id: "orientation",
    label: "Orientation(deg)",
  },
  {
    id: "days",
    label: "Days",
  },
  {
    id: "first_observed",
    label: "First observed",
  },
  {
    id: "last_observed",
    label: "Last observed",
  },
  {
    id: "link",
    label: "Link",
  },
  {
    id: "status",
    label: "Status",
  },
];

const EnhancedTableHead = (props) => {
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell, i) => (
          <TableCell
            key={i}
            align={i === 4 || i === 5 || i === 6 ? "center" : "left"}
            padding="normal"
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

EnhancedTableHead.propTypes = {
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const EnhancedTableToolbar = () => {
  return (
    <Toolbar className="d-flex justify-content-end">
      <Tooltip title="Filter list">
        <IconButton>
          <FilterListIcon />
        </IconButton>
      </Tooltip>
    </Toolbar>
  );
};

const SensorOutageTable = () => {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState(headCells[1].id); //
  //   const [rowsPerPage, setRowsPerPage] = React.useState(rows.length);  // ToDo

  const rowsPerPage = rows.length;

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const visibleRows = React.useMemo(
    () => stableSort(rows, getComparator(order, orderBy)).slice(0, rowsPerPage),
    [order, orderBy, rowsPerPage]
  );

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", maxWidth: "max-content", mb: 2 }}>
        <EnhancedTableToolbar />
        <TableContainer>
          <Table aria-labelledby="tableTitle" size="medium">
            <EnhancedTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {visibleRows.map((row, index) => {
                return (
                  <TableRow key={index}>
                    {Object.keys(row).map((key, i) => (
                      <TableCell
                        key={i}
                        align={
                          i === 4 || i === 5 || i === 6 ? "center" : "left"
                        }
                        component={i === 0 ? "th" : null}
                        scope={i === 0 ? "row" : null}
                        sx={{ textTransform: "capitalize" }}
                      >
                        {row[key]}
                      </TableCell>
                    ))}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
};
export default SensorOutageTable;
