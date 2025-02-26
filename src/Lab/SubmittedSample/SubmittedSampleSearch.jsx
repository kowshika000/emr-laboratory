import { Box } from "@mui/material";
import React from "react";
import LabInput from "../../components/LabInput";
import LabButton from "../../components/LabButton";

const SubmittedSampleSearch = () => {
  const option = [{ label: "All", value: "all" }];
  return (
    <Box className="searchContainer">
      <LabInput label={"MRD No"} />
      <LabInput label={"Patient Name"} />
      <LabInput label={"Doctor"} />
      <LabInput label={"Insurance"} type="select" options={option} />
      <LabInput label={"Emergency"} type="select" options={option} />
      <LabInput label={"EMR Status"} type="select" options={option} />
      <LabInput label={"Mobile No"} />
      <LabInput label={"Visit Date"} type="date" />
      <LabInput label={"Test Name"} />
      <LabInput label={"Test Category"} type="select" options={option} />
      <LabInput label={"Bill Status"} type="select" options={option} />
      <Box mt={"auto"}>
        <LabButton label={"Search"} />
      </Box>
    </Box>
  );
};

export default SubmittedSampleSearch;
