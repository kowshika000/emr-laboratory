import React, { useState } from "react";
import LabTable from "../../components/LabTable";
import { Box, IconButton } from "@mui/material";
import { EditNote } from "@mui/icons-material";
import TestResultScreen from "./TestResultScreen";
import { BarcodeOutlined } from "@ant-design/icons";
import BarcodeGenerate from "../../components/BarcodeGenerate";

const TestResultTbl = () => {
  const [showEnterResult, setShowEnterResult] = useState(false);
  const [showBarcode, setShowBarcode] = useState(false);
  const [selectedBarcode, setSelectedBarcode] = useState("");
  const columns = [
    { field: "type", headerName: "Type" },
    { field: "options", headerName: "Options" },
    { field: "mrNo", headerName: "MR No" },
    { field: "collectionDate", headerName: "Collection Date" },
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
      collectionDate: "10/23/2024",
      patientName: "Abdul",
      doctor: "Riyaz",
      sampleType: "Blood",
      testName: "CBC",
      labIdNo: "34352001",
      barcode:"83649834"
    },
  ];

  const handleOptionClick = (row) => {
    return (
      <Box>
        <EditNote onClick={() => setShowEnterResult(true)} />
      </Box>
    );
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
        checkBox={true}
        onOptionClick={handleOptionClick}
        onOptionsShow={handleBarcode}
      />
      {showEnterResult && (
        <TestResultScreen onClose={() => setShowEnterResult(false)} />
      )}
      <BarcodeGenerate
        open={showBarcode}
        value={selectedBarcode}
        onClose={() => setShowBarcode(false)}
      />
    </div>
  );
};

export default TestResultTbl;
