import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";

const DateRangePickerValue = ({ dateRange, setDateRange }) => {
  const [value, setValue] = React.useState(dateRange);
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DateRangePicker"]}>
        <DateRangePicker
          calendars={2}
          localeText={{ start: "Review start", end: "Review end" }}
          defaultValue={value}
          value={value}
          onChange={(newValue) => setValue(newValue)}
          onClose={() => setDateRange(value)}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
};
export default DateRangePickerValue;
