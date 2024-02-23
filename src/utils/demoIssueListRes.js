export const demoMissingData = [
  {
    uuid: "283d46fc-922a-409a-b764-d43496f7cb08",
    measurement_location_uuid: "69a63277-596b-41be-89c6-35bf2b88a3d1",
    measurement_location_name: "M1000",
    project_name: "AX-Demo",
    date_from: "2024-01-16T03:52:46.681",
    date_to: "2024-02-16T03:52:46.681",
    issue_status: "in_review",
    issue_type: "missing_data",
    issue_details: {},
    alerts_device_type: "sensor",
    notes: "Test",
    notify_users: false,
    pause_notification_till_date: "2024-05-15",
    resolved_on: null,
    resolved_by: null,
    updated_at: "2024-02-16T05:06:49.749879",
    updated_by: " user@test.com",
    created_at: "2024-02-17T06:45:45.458335",
    created_by: "userX@gmail.com",
  },
  {
    uuid: "59b36200-9418-4940-9638-bae9ccc842a2",
    measurement_location_uuid: "69a63277-596b-41be-89c6-35bf2b88a3d1",
    measurement_location_name: "M1000",
    project_name: "AX-Demo-1",
    date_from: "2023-01-16T03:52:46.681",
    date_to: "2023-02-16T03:52:46.681",
    issue_status: "ignore",
    issue_type: "sensor_failure",
    issue_details: {},
    alerts_device_type: "sensor",
    notes: "Test",
    notify_users: true,
    pause_notification_till_date: "2024-06-15",
    resolved_on: null,
    resolved_by: null,
    updated_at: "2024-02-18T05:08:48.175703",
    updated_by: "user@test.com",
    created_at: "2024-02-17T06:45:45.458335",
    created_by: "userX@gmail.com",
  },
];

export const demoCommentsAndUpdatedPerIssue = [
  {
    uuid: "4bf1313b-879d-44a7-ba3a-e51e4dc9becb",
    issue_uuid: "59b36200-9418-4940-9638-bae9ccc842a2",
    comments: null,
    created_at: "2024-02-17T06:44:29.713922",
    created_by: null,
    updated_at: "2024-02-17T06:44:29.713922",
    updated_by: null,
    new_issue_status: "in_review",
    prev_issue_status: "unreviewed",
    new_notification_status: null,
    prev_notification_status: null,
    new_pause_notification_till_date: "2024-05-15",
    prev_pause_notification_till_date: null,
  },
  {
    uuid: "5b9cc769-19b3-473b-91ee-562550b5717d",
    issue_uuid: "59b36200-9418-4940-9638-bae9ccc842a2",
    comments: "bla bla",
    created_at: "2024-02-17T06:45:45.458335",
    created_by: "userX@gmail.com",
    updated_at: "2024-02-17T06:45:45.458335",
    updated_by: null,
    new_issue_status: null,
    prev_issue_status: null,
    new_notification_status: null,
    prev_notification_status: null,
    new_pause_notification_till_date: null,
    prev_pause_notification_till_date: null,
  },
  {
    uuid: "1f503953-3c82-4bcf-9eaf-70a898bbc6c0",
    issue_uuid: "59b36200-9418-4940-9638-bae9ccc842a2",
    comments: null,
    created_at: "2024-02-17T06:47:23.209321",
    created_by: null,
    updated_at: "2024-02-17T06:47:23.209321",
    updated_by: null,
    new_issue_status: "ignore",
    prev_issue_status: "in_review",
    new_notification_status: true,
    prev_notification_status: false,
    new_pause_notification_till_date: "2024-06-15",
    prev_pause_notification_till_date: "2024-05-15",
  },
];