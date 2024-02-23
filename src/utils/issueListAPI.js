import axios from "./axios";

export const getIssueListByDateRangeAndType = async (
  date_from,
  date_to,
  issue_type
) => await axios.post(`/list-issues`, { date_from, date_to, issue_type });

export const updateIssueStatusById = async (id, issue_status) =>
  await axios.put(`/issue/${id}`, { issue_status });

export const createIssueCommentById = async (id, comments) =>
  await axios.post(`/issues/${id}/comment`, null, {
    params: {
      comments,
    },
  });

export const getAllCommentsAndUpdatesByIssueId = async (id) =>
  await axios.get(`/issues/${id}/commment`);
