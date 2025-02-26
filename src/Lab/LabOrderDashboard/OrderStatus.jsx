import React from "react";
import LabInput from "../../components/LabInput";
import { Box } from "@mui/material";
import LabButton from "../../components/LabButton";

const OrderStatus = () => {
  return (
    <Box className="searchContainer">
      <LabInput label={"Date From"} type="date" />
      <LabInput label={"Date To"} type="date" />
      <Box mt={"auto"}>
        <LabButton label={"Search"} />
      </Box>
    </Box>
  );
};

export default OrderStatus;
