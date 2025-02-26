import React, { useState } from "react";
import { Box, Checkbox, FormControlLabel } from "@mui/material";
import { styled } from "@mui/material/styles";

const CustomCheckbox = styled(Checkbox)(({ theme }) => ({
  color: "rgb(25, 131, 131)",
  "&.Mui-checked": {
    color: "rgb(25, 131, 131)",
  },
}));

const LabCheckBox = ({ label, onCheck, size = "small", color = "rgb(25, 131, 131)" }) => {
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    const isChecked = event.target.checked;
    setChecked(isChecked);

    if (onCheck) {
      onCheck(isChecked); 
    }
  };

  return (
    <Box>
      {label ? (
        <FormControlLabel
          control={
            <CustomCheckbox
              checked={checked}
              onChange={handleChange}
              size={size}
              sx={{ color, "&.Mui-checked": { color } }}
            />
          }
          label={label}
          labelPlacement="end"
        />
      ) : (
        <CustomCheckbox
          checked={checked}
          onChange={handleChange}
          size={size}
          sx={{ color, "&.Mui-checked": { color } }}
        />
      )}
    </Box>
  );
};

export default LabCheckBox;
