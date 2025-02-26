import { Box } from "@mui/material";
import React from "react";
import LabInput from "../../components/LabInput";
import LabButton from "../../components/LabButton";

const ConsumptionSearch = () => {
  const option = [
    { label: "Yes", value: "yes" },
    { label: "No", value: "no" },
  ];
  return (
    <Box className="searchContainer">
      <LabInput label={"Speciality"} type="select" options={option} />
      <LabInput label={"Period From "} type="date" />
      <LabInput label={"Period To "} type="date" />
      <LabInput label={"Lab Test Name"} type="select" options={option} />
      <LabInput label={"Machine Name"} type="select" options={option} />
      <Box mt={"auto"}>
        <LabButton label={"Search"} />
      </Box>
    </Box>
  );
};

export default ConsumptionSearch;
