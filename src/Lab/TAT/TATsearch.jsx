import { Box } from "@mui/material";
import React from "react";
import LabInput from "../../components/LabInput";

const TATsearch = () => {
  const option = [{ label: "Dispatched", value: "dispatched" }];
  return (
    <Box className="searchContainer">
      <LabInput label={"MR No"} />
      <LabInput label={"Patient Name"} />
      <LabInput label={"Date "} type="date" />
      <LabInput label={"Refer Clinic/Doctor"} />
      <LabInput label={"SID "} />
      <LabInput label={"Test Name"} />
      <LabInput label={"Status"} type="select" options={option} />
    </Box>
  );
};

export default TATsearch;
