import React, { useState } from "react";
import LabTable from "../../components/LabTable";
import { Delete, EditNote } from "@mui/icons-material";
import AuthTestResultScreen from "./AuthTestResultScreen";
import { IconButton, Box } from "@mui/material";
import { BarcodeOutlined } from "@ant-design/icons";
import BarcodeGenerate from "../../components/BarcodeGenerate";

const AuthApprovalTbl = () => {
  const [result, setResult] = useState(false);
  const [showBarcode, setShowBarcode] = useState(false);
  const [selectedBarcode, setSelectedBarcode] = useState("");
  const columns = [
    {
      field: "type",
      headerName: "Type",
    },
    { field: "options", headerName: "Options" },
    {
      field: "mrNo",
      headerName: "MR No",
    },
    {
      field: "collectionDate",
      headerName: "Collection Date",
    },
    {
      field: "patientName",
      headerName: "Patient Name",
    },
    {
      field: "doctor",
      headerName: "Doctor",
    },
    {
      field: "labIdNo",
      headerName: "Lab ID NO",
    },
    {
      field: "emailed",
      headerName: "Emailed",
    },
    {
      field: "disp",
      headerName: "Disp",
    },
    {
      field: "option",
      headerName: "Option",
    },
  ];
  const rows = [
    {
      id: 1,
      type: "OP",
      mrNo: "MR001",
      collectionDate: "12/20/24",
      patientName: "Abdul",
      doctor: "Riyaz",
      labIdNo: "34352001",
      emailed: "No",
      disp: "No",
      barcode: "7245092143",
    },
  ];
  const handleOptionClick = (row) => {
    return (
      <Box display={"flex"} gap={3} justifyContent={"center"}>
        <IconButton onClick={() => setResult(true)}>
          <EditNote />
        </IconButton>
        <IconButton>
          <Delete />
        </IconButton>
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
      {result && <AuthTestResultScreen onClose={() => setResult(false)} />}
      <BarcodeGenerate
        open={showBarcode}
        value={selectedBarcode}
        onClose={() => setShowBarcode(false)}
      />
    </div>
  );
};

export default AuthApprovalTbl;
