import * as React from "react";
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";

const today = dayjs();
const dateTwoWeeksAgo = dayjs().subtract(15, "day");

const DateRangePickerValue = () => {
  const [value, setValue] = React.useState([dateTwoWeeksAgo, today]);
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DateRangePicker"]}>
        <DateRangePicker
          calendars={2}
          localeText={{ start: "Review start", end: "Review end" }}
          defaultValue={value}
          value={value}
          onChange={(newValue) => setValue(newValue)}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
};
export default DateRangePickerValue;
