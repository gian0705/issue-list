import React from "react";
import Box from "@mui/material/Box";
import PersonIcon from "@mui/icons-material/Person";
import { blueGrey, lightBlue } from "@mui/material/colors";

const commentListSx = {
  display: "flex",
  flexFlow: "column",
  gap: "10px",
  marginTop: "40px",
};

const commentSx = {
  display: "flex",
  flexFlow: "row",
  gap: "10px",
};
const commentDetailSx = {
  display: "flex",
  flexFlow: "column",
  gap: "5px",
};

const personIconSx = {
  background: lightBlue[100],
  color: blueGrey[600],
  borderRadius: "50%",
};

const verticalLineSx = {
  height: "25px",
  marginLeft: "10px",
  marginTop: "-5px",
};

const CommentList = () => {
  return (
    <Box sx={commentListSx}>
      <Box sx={commentSx}>
        <PersonIcon sx={personIconSx} />
        <Box sx={commentDetailSx}>
          <p>{"2021-01-08"}</p>
          <p>{"user@email.com update the status to 'In review'"}</p>
        </Box>
      </Box>
      <Box
        className="border-start border-2 border-secondary-subtle"
        sx={verticalLineSx}
      />
      <Box sx={commentSx}>
        <PersonIcon sx={personIconSx} />
        <Box sx={commentDetailSx}>
          <p>{"2021-01-08"}</p>
          <Box
            className="border border-2 border-secondary-subtle p-3 rounded "
            sx={{ background: blueGrey[50], fontStyle: "italic" }}
          >
            {
              "Reviewed issue and found the communications had gone down. Continuing diagnosis."
            }
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CommentList;
