import { Box } from "@mui/material";
import React from "react";
import LabInput from "../../components/LabInput";

const PrintReportSearch = () => {
  const option = [
    { label: "Test Clinic", value: "testClinic" },
    { label: "Test", value: "test" },
  ];
  return (
    <Box className="searchContainer">
      <LabInput label={"Lab Name"} type="select" options={option} />
    </Box>
  );
};

export default PrintReportSearch;
