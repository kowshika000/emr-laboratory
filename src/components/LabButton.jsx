import { Box, Button } from "@mui/material";
import React from "react";

const LabButton = ({ label, onClick, colors, textColor }) => {
  const stylebtn = {
    backgroundColor: colors
      ? colors
      : label === "Close"
      ? "rgb(233, 106, 106)"
      : "rgb(25, 131, 131)",
    color: textColor ? textColor : "white",
  };
  return (
    <Box>
      <Button variant="contained" sx={stylebtn} onClick={onClick}>
        {label}
      </Button>
    </Box>
  );
};

export default LabButton;
