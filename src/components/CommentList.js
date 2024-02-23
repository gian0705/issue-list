import React from "react";
import Box from "@mui/material/Box";
import PersonIcon from "@mui/icons-material/Person";
import { blueGrey, lightBlue } from "@mui/material/colors";
import dayjs from "dayjs";

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

const CommentList = ({ commentAndUpdateList }) => {
  const VerticalLine = (list, i) =>
    list.length !== 1 &&
    i < list.length - 1 && (
      <Box
        className="border-start border-2 border-secondary-subtle"
        sx={verticalLineSx}
      />
    );
  return (
    <Box sx={commentListSx}>
      {commentAndUpdateList.length
        ? commentAndUpdateList.map((data, i) => (
            <div key={i}>
              {data.new_issue_status && (
                <>
                  <Box sx={commentSx}>
                    <PersonIcon sx={personIconSx} />
                    <Box sx={commentDetailSx}>
                      <p>{dayjs(data.updated_at).format("YYYY-MM-DD")}</p>
                      <p>{`${data.created_by} update the status to ${data.new_issue_status}`}</p>
                    </Box>
                  </Box>

                  {VerticalLine(commentAndUpdateList, i)}
                </>
              )}

              {data.comments && (
                <>
                  <Box sx={commentSx}>
                    <PersonIcon sx={personIconSx} />
                    <Box sx={commentDetailSx}>
                      <p>{dayjs(data.updated_at).format("YYYY-MM-DD")}</p>
                      <p>{`${data.created_by} commented`}</p>
                      <Box
                        className="border border-2 border-secondary-subtle p-3 rounded "
                        sx={{ background: blueGrey[50], fontStyle: "italic" }}
                      >
                        {data.comments}
                      </Box>
                    </Box>
                  </Box>
                  {VerticalLine(commentAndUpdateList, i)}
                </>
              )}
            </div>
          ))
        : null}
    </Box>
  );
};

export default CommentList;
