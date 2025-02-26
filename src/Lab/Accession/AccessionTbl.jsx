import React, { useState } from "react";
import LabTable from "../../components/LabTable";
import LabButton from "../../components/LabButton";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Dialog,
  DialogContent,
  FormControl,
  FormControlLabel,
  IconButton,
  Radio,
  RadioGroup,
} from "@mui/material";
import LabInput from "../../components/LabInput";
import { BarcodeOutlined, UndoOutlined } from "@ant-design/icons";
import BarcodeGenerate from "../../components/BarcodeGenerate";

const AccessionTbl = ({ setActiveTab }) => {
  const navigate = useNavigate();
  const [showConfirm, setShowConfirm] = useState(false);
  const [value, setValue] = useState("approve");
  const [showBarcode, setShowBarcode] = useState(false);
  const [selectedBarcode, setSelectedBarcode] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const columns = [
    { field: "type", headerName: "Type" },
    { field: "options", headerName: "Options" },
    { field: "mrNo", headerName: "MR No" },
    { field: "date", headerName: "Date" },
    { field: "patientName", headerName: "Patient Name" },
    { field: "doctor", headerName: "Doctor" },
    { field: "sampleType", headerName: "Sample Type" },
    { field: "testName", headerName: "Test Name" },
    { field: "labIdNo", headerName: "Lab ID NO" },
    { field: "option", headerName: "Option" },
  ];
  const rows = [
    {
      id: 1,
      type: "OP",
      mrNo: "MR002",
      date: "10/23/2024",
      patientName: "Abdul",
      doctor: "Riyaz",
      sampleType: "Blood",
      testName: "CBC",
      labIdNo: "34352001",
      barcode: "98765431034",
    },
  ];
  const handleOptionClick = (row) => {
    return (
      <div>
        <IconButton onClick={() => setActiveTab("1")}>
          <UndoOutlined />
        </IconButton>
      </div>
    );
  };

  const rejectOption = [
    {
      label: "Haemolysed sample",
      value: "haemolysedSample",
    },
    {
      label: "Incorrect sample",
      value: "incorrectSample",
    },
    {
      label: "Sample Insufficient",
      value: "sampleInsufficient",
    },
    {
      label: "Test Rejection",
      value: "testRejection",
    },
  ];

  const radioStyle = {
    color: "rgb(25, 131, 131)",
    "&.Mui-checked": {
      color: "rgb(25, 131, 131)",
    },
  };

  const handleOkClick = () => {
    if (value === "approve") {
      setActiveTab("4");
    } else if (value === "reject") {
      setActiveTab("7");
    }
  };

  const handleShowBarcode = (barcode) => {
    setSelectedBarcode(barcode);
    setShowBarcode(true);
  };

  const handleBarcode = (row) => {
    return (
      <IconButton onClick={() => handleShowBarcode(row.barcode)}>
        <BarcodeOutlined size={"10px"} />
      </IconButton>
    );
  };

  return (
    <div>
      <LabTable
        columns={columns}
        rows={rows}
        onOptionClick={handleOptionClick}
        checkBox={true}
        onOptionsShow={handleBarcode}
      />
      <div className="btnAlign">
        <LabButton label={"Confirm"} onClick={() => setShowConfirm(true)} />
      </div>
      {showConfirm && (
        <Dialog open={true} onClose={() => setShowConfirm(false)} fullWidth>
          <DialogContent>
            <h6>Confirm Sample Accession</h6>
            <Box>
              <Box sx={{ color: "inherit" }}>Acknowledge </Box>
              <FormControl>
                <RadioGroup row value={value} onChange={handleChange}>
                  <FormControlLabel
                    value="approve"
                    control={<Radio sx={radioStyle} />}
                    label="Approve"
                  />
                  <FormControlLabel
                    value="reject"
                    control={<Radio sx={radioStyle} />}
                    label="Reject"
                  />
                </RadioGroup>
              </FormControl>
            </Box>
            <Box mt={2}>
              {value === "reject" && (
                <Box mb={2}>
                  <LabInput
                    label={"Reject Reason"}
                    type="select"
                    options={rejectOption}
                  />
                </Box>
              )}
              <LabInput label={"Comments"} />
            </Box>
            <Box className="btnAlign">
              <LabButton label={"Ok"} onClick={handleOkClick} />
              <LabButton
                label={"Close"}
                onClick={() => setShowConfirm(false)}
              />
            </Box>
          </DialogContent>
        </Dialog>
      )}
      <BarcodeGenerate
        open={showBarcode}
        value={selectedBarcode}
        onClose={() => setShowBarcode(false)}
      />
    </div>
  );
};

export default AccessionTbl;
