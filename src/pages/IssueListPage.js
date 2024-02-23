import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import MultipleSelectChip from "../components/MultipleSelectChip";
import DateRangePickerValue from "../components/DateRangePickerValue";
import MissingDataTable from "../components/MissingDataTable";
import SensorOutageTable from "../components/SensorOutageTable";
import SidePane from "../components/SidePane";
import useScrollBlock from "../hooks/useScrollBlock";
import dayjs from "dayjs";
import { getIssueListByDateRangeAndType } from "../utils/issueListAPI";
import { demoMissingData } from "../utils/demoIssueListRes";

const today = dayjs();
const dateTwoWeeksAgo = dayjs().subtract(15, "day");

const IssueListPage = () => {
  const [isOpenSidePane, setIsOpenSidePane] = useState(false);
  const [selectedRowInfo, setSelectedRowInfo] = useState({});
  const [blockScroll, allowScroll] = useScrollBlock();
  const [dateRange, setDateRange] = useState([dateTwoWeeksAgo, today]);
  const [statuses, setStatuses] = useState([]);
  const [missingData, setMissingData] = useState([]);

  useEffect(() => {
    /**
     * Usage:
     */

    // const res = getIssueListByDateRangeAndType(
    //   dayjs(dateRange[0]).format("YYYY-MM-dd"),
    //   dayjs(dateRange[1]).format("YYYY-MM-dd"),
    //   statuses
    // );

    /**
     * Usage:
     * use res of API instead of demoMissingData
     */
    setMissingData(demoMissingData);
  }, [dateRange, statuses]);

  useEffect(() => {
    if (isOpenSidePane) blockScroll();
    else allowScroll();
  }, [isOpenSidePane]);

  const handleMissingDataTableRow = (info) => {
    setIsOpenSidePane(true);
    setSelectedRowInfo(info);
  };

  return (
    <section>
      <Container fluid className="p-4 ">
        <p className="pb-4 border-bottom border-2 border-secondary-subtle">
          Following is a summary of alerts related to sensor data
        </p>
        <Row noGutters className="pt-4 gy-5">
          <Col md={6}>
            <DateRangePickerValue
              dateRange={dateRange}
              setDateRange={setDateRange}
            />
          </Col>
          <Col md={6}>
            <MultipleSelectChip statuses={statuses} setStatuses={setStatuses} />
          </Col>
          <Col xs={12} className="d-flex flex-row align-items-center">
            <div
              className="bg-danger rounded-circle bg-opacity-25 me-2"
              style={{ width: "10px", height: "10px" }}
            />
            <p>Sites with missing data</p>
          </Col>
          <Col>
            <MissingDataTable
              missingData={missingData}
              onSelectRow={handleMissingDataTableRow}
            />
          </Col>
          <Col xs={12} className="d-flex flex-row align-items-center">
            <div
              className="bg-danger rounded-circle bg-opacity-25 me-2"
              style={{ width: "10px", height: "10px" }}
            />
            <p>Sites with sensor outage</p>
          </Col>
          <Col>
            <SensorOutageTable />
          </Col>
        </Row>
      </Container>
      <SidePane
        isOpen={isOpenSidePane}
        selectedRow={selectedRowInfo}
        setIsOpenSidePane={setIsOpenSidePane}
      />
    </section>
  );
};
export default IssueListPage;
