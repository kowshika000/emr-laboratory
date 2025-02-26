import React from "react";
import LabTable from "../../components/LabTable";
import { Box } from "@mui/material";

const OrderTable = () => {
  const columns = [
    {
      titleName: "Investigation Ordered",
      children: [
        { field: "testCategory", headerName: "Test Category" },
        { field: "ordered", headerName: "Ordered" },
        { field: "sampleCollected", headerName: "Sample Collected" },
        { field: "pending", headerName: "Pending" },
      ],
      style:"marigEnd 2px solid black"
    },
    {
      titleName: "Lab Ordered Status",
      children: [
        { field: "testCategory", headerName: "Test Category" },
        { field: "acessionPending", headerName: "Acession Pending" },
        { field: "processingPending", headerName: "Processing Pending" },
        { field: "authPending", headerName: "Authentication Pending" },
        { field: "completed", headerName: "Completed" },
      ],
    },
  ];

  const rows = [
    {
      id: 1,
      testCategory: "Biochemistry",
      ordered: "xxx",
      sampleCollected: "xxx",
      pending: "xxx",
      acessionPending: "xxx",
      processingPending: "xxx",
      authPending: "xxx",
      completed: "xxx",
    },
    {
      id: 2,
      testCategory: "Haematology",
      ordered: "xxx",
      sampleCollected: "xxx",
      pending: "xxx",
      acessionPending: "xxx",
      processingPending: "xxx",
      authPending: "xxx",
      completed: "xxx",
    },
    {
      id: 3,
      testCategory: "Radiology",
      ordered: "xxx",
      sampleCollected: "xxx",
      pending: "xxx",
      acessionPending: "xxx",
      processingPending: "xxx",
      authPending: "xxx",
      completed: "xxx",
    },
  ];


  return (
    <div className="d-flex gap-5" style={{ flexDirection: "column" }}>
      <Box className="w-100">
        <LabTable columns={columns} rows={rows}  />
      </Box>
    </div>
  );
};

export default OrderTable;
