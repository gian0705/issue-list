import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const statusList = ["unreviewed", "in_review", "ignore"];

const getStyles = (status, selectedStatus, theme) => {
  return {
    fontWeight:
      selectedStatus.indexOf(status) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
};

const MultipleSelectChip = ({ statuses, setStatuses }) => {
  const theme = useTheme();
  const [selectedStatuses, setSelectedStatuses] = React.useState(statuses);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setSelectedStatuses(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-chip-label">Status</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={selectedStatuses}
          onChange={handleChange}
          onClose={() => setStatuses(selectedStatuses)}
          input={<OutlinedInput id="select-multiple-chip" label="Status" />}
          renderValue={(selected) => (
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 0.5,
                textTransform: "capitalize",
              }}
            >
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {statusList.map((e) => (
            <MenuItem
              key={e}
              value={e}
              style={getStyles(e, selectedStatuses, theme)}
              sx={{ textTransform: "capitalize" }}
            >
              {e}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};
export default MultipleSelectChip;
