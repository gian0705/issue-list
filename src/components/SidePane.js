import React from "react";
import { Row, Col } from "react-bootstrap";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextareaAutosize from "./TextareaAutosize";
import Box from "@mui/material/Box";
import PersonIcon from "@mui/icons-material/Person";
import Button from "@mui/material/Button";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { blueGrey, lightBlue } from "@mui/material/colors";
import CommentList from "./CommentList";

const blurBgStyle = {
  filter: "blur(30px)",
  WebkitFilter: "blur(30px)",
  MozFilter: "blur(30px)",
  OFilter: "blur(30px)",
  zIndex: "1",
};

const sidePaneStyle = {
  transition: "width 0.5s ease-in-out",
  WebkitTransition: "width 0.5s ease-in-out",
  MozTransition: "width 0.5s ease-in-out",
  OTransition: "width 0.5s ease-in-out",
  zIndex: "10",
};
const sidePaneCloseStyle = {
  width: "0",
  overflow: "hidden",
  ...sidePaneStyle,
};
const sidePaneOpenStyle = {
  width: "40%",
  overflow: "auto",
  ...sidePaneStyle,
};

const personIconSx = {
  background: lightBlue[100],
  color: blueGrey[600],
  borderRadius: "50%",
};

const statusList = ["unreviewed", "in review", "ignore"];

const txtPlaceholder = "Some notes from";

const SidePane = ({ isOpen, selectedRow, setIsOpenSidePane }) => {
  const [status, setStatus] = React.useState("");

  const tmpSelectedRowInfo = React.useMemo(
    () => (isOpen ? selectedRow : {}),
    [isOpen, selectedRow]
  );

  React.useEffect(() => {
    if (isOpen && selectedRow?.status) {
      setStatus(selectedRow.status);
    }
  }, [isOpen, selectedRow]);

  const handleChange = (event) => {
    setStatus(event.target.value);
  };

  const handleBlurBg = () => {
    setIsOpenSidePane(false);
  };

  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/" onClick={() => {}}>
      All
    </Link>,
    <Link underline="hover" key="2" color="inherit" href="/" onClick={() => {}}>
      {selectedRow.project}
    </Link>,
    <Typography key="3" color="text.primary">
      {selectedRow.site}
    </Typography>,
  ];

  return (
    <React.Fragment>
      {isOpen && (
        <Box
          className="h-100 w-100 position-fixed top-0 start-0 bg-light opacity-75"
          style={blurBgStyle}
          onClick={handleBlurBg}
          sx={{
            cursor: "pointer",
          }}
        />
      )}
      <div
        className="h-100 w-0 position-fixed top-0 end-0 shadow bg-white rounded "
        style={isOpen ? sidePaneOpenStyle : sidePaneCloseStyle}
      >
        <div className="p-5">
          <Row noGutters className="gy-4">
            <Col xs={12}>
              <Breadcrumbs
                separator={<NavigateNextIcon fontSize="small" />}
                aria-label="breadcrumb"
              >
                {breadcrumbs}
              </Breadcrumbs>
            </Col>
            <Col xs={12} className="fw-bold">
              {"Missing data"}
            </Col>
            <Col md={5}>{"Data recovery"}</Col>
            <Col md={7}>{selectedRow.data_recovery}</Col>
            <Col md={5}>{"Last timestamp"}</Col>
            <Col md={7}>{selectedRow.last_timestamp}</Col>
            <Col md={5}>{"Status"}</Col>
            <Col md={7}>
              <FormControl fullWidth>
                <Select
                  value={status}
                  onChange={handleChange}
                  sx={{ textTransform: "capitalize" }}
                >
                  {statusList.map((e) => (
                    <MenuItem
                      key={e}
                      value={e}
                      sx={{ textTransform: "capitalize" }}
                    >
                      {e}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Col>
            <Col xs={12}>
              <TextareaAutosize placeholder={txtPlaceholder} />
            </Col>
            <Col className="mb-4 border-bottom border-2 border-secondary-subtle" />
          </Row>
          <p className="pb-4">{"Comments & issue history"}</p>
          <Row noGutters>
            <Col xs={12} md={1}>
              <PersonIcon sx={personIconSx} />
            </Col>
            <Col xs={12} md={9}>
              <TextareaAutosize
                customBg={blueGrey[200]}
                placeholder="write your comment"
              />
            </Col>
            <Col xs={12} md={2} className="m-auto">
              <Button
                variant="contained"
                color="success"
                sx={{ minWidth: 20, minHeight: 20 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-send"
                  viewBox="0 0 16 16"
                >
                  <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z" />
                </svg>
              </Button>
            </Col>
          </Row>
          <CommentList />
        </div>
      </div>
    </React.Fragment>
  );
};
export default SidePane;
