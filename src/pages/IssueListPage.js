import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import MultipleSelectChip from "../components/MultipleSelectChip";
import DateRangePickerValue from "../components/DateRangePickerValue";
import MissingDataTable from "../components/MissingDataTable";
import SensorOutageTable from "../components/SensorOutageTable";
import SidePane from "../components/SidePane";
import useScrollBlock from "../hooks/useScrollBlock";

const IssueListPage = () => {
  const [isOpenSidePane, setIsOpenSidePane] = React.useState(false);
  const [selectedRowInfo, setSelectedRowInfo] = React.useState({});
  const [blockScroll, allowScroll] = useScrollBlock();

  React.useEffect(() => {
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
            <DateRangePickerValue />
          </Col>
          <Col md={6}>
            <MultipleSelectChip />
          </Col>
          <Col xs={12} className="d-flex flex-row align-items-center">
            <div
              className="bg-danger rounded-circle bg-opacity-25 me-2"
              style={{ width: "10px", height: "10px" }}
            />
            <p>Sites with missing data</p>
          </Col>
          <Col>
            <MissingDataTable onSelectRow={handleMissingDataTableRow} />
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
