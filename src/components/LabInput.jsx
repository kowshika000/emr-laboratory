import React from "react";
import {
  TextField,
  Box,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";

const LabInput = ({
  label,
  value,
  onChange,
  type = "text",
  options = [],
  required = false,
  ...props
}) => {
  return (
    <Box sx={{ width: "100%" }}>
      {type === "select" ? (
        <FormControl
          required={required}
          variant="contained"
          sx={{ width: "100%" }}
        >
          <InputLabel
            sx={{
              color: "rgb(0, 0, 0)",
              fontSize: "14px", // Font size for label
              "&.Mui-focused": { color: "rgb(0, 0, 0)" },
            }}
          >
            {label}
          </InputLabel>
          <Select
            value={value}
            onChange={onChange}
            label={label}
            sx={{
              width: "100%",
              fontSize: "14px", // Font size for Select text
              "&:before": {
                borderBottom: "1px solid rgb(0, 0, 0)",
              },
              "&:after": {
                borderBottom: "1px solid rgb(0, 0, 0)",
              },
              "&.Mui-focused:before": {
                borderBottom: "1px solid rgb(0, 0, 0) !important",
              },
            }}
            {...props}
          >
            {options.map((option, index) => (
              <MenuItem
                key={index}
                value={option.value}
                sx={{ fontSize: "14px" }}
              >
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      ) : (
        <TextField
          label={label}
          value={value}
          onChange={onChange}
          variant="contained"
          fullWidth
          required={required}
          type={type === "textarea" ? undefined : type}
          multiline={type === "textarea"}
          rows={type === "textarea" ? 2 : undefined} // Default number of rows for textarea
          InputLabelProps={{
            shrink:
              type === "date" || type === "datetime-local" ? true : undefined,
            sx: {
              color: "rgb(0, 0, 0)",
              fontSize: "14px", // Font size for label
              "&.Mui-focused": { color: "rgb(0, 0, 0)" },
            },
          }}
          inputProps={{
            style: { fontSize: "14px" }, // Font size for input text
          }}
          sx={{
            "& .MuiInput-underline:before": {
              borderBottom: "1px solid rgb(0, 0, 0)",
            },
            "& .MuiInput-underline:hover:before": {
              borderBottom: "1px solid rgb(0, 0, 0)",
            },
            "& .MuiInput-underline:after": {
              borderBottom: "1px solid rgb(0, 0, 0)",
            },
          }}
          {...props}
        />
      )}
    </Box>
  );
};

export default LabInput;
