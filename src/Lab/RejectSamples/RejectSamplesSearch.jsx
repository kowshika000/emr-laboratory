import { Box } from "@mui/material";
import React from "react";
import LabInput from "../../components/LabInput";

const RejectSamplesSearch = () => {
  return (
    <Box className="searchContainer">
      <LabInput label={"MR No"} />
      <LabInput label={"Date "} type="date" />
      <LabInput label={"Patient Name"} />
      <LabInput label={"Doctor"} />
    </Box>
  );
};

export default RejectSamplesSearch;
