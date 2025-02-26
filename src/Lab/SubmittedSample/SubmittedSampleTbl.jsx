import React, { useState } from "react";
import LabTable from "../../components/LabTable";
import { Box, Dialog, DialogContent, IconButton } from "@mui/material";
import {
  AssignmentTurnedIn,
  DocumentScannerOutlined,
} from "@mui/icons-material";
import LabInput from "../../components/LabInput";
import LabButton from "../../components/LabButton";
import { BarcodeOutlined } from "@ant-design/icons";
import BarcodeGenerate from "../../components/BarcodeGenerate";
import OrderSheet from "./OrderSheet";

const SubmittedSampleTbl = ({ setActiveTab }) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [showBarcode, setShowBarcode] = useState(false);
  const [showOrdersheet, setShowOrdersheet] = useState(false);
  const [selectedBarcode, setSelectedBarcode] = useState("");

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const columns = [
    { field: "type", headerName: "Type" },
    { field: "options", headerName: "Options" },
    { field: "mrNo", headerName: "MR No" },
    { field: "visitDate", headerName: "Visit Date" },
    { field: "patientName", headerName: "Patient Name" },
    { field: "doctor", headerName: "Doctor" },
    { field: "sampleType", headerName: "Sample Type" },
    { field: "testName", headerName: "Test Name" },
    { field: "submittedDateTime", headerName: "Submitted Date and Time" },
    { field: "option", headerName: "Option" },
  ];

  const rows = [
    {
      id: 1,
      type: "OP",
      mrNo: "123",
      visitDate: "10/23/2024",
      patientName: "Abdul",
      doctor: "Riyaz",
      sampleType: "Blood",
      testName: "CBC",
      submittedDateTime: "10/23/2024",
      barcode: "1234567890",
    },
    {
      id: 2,
      type: "OP",
      mrNo: "123",
      visitDate: "10/23/2024",
      patientName: "Abdul",
      doctor: "Riyaz",
      sampleType: "Blood",
      testName: "CBC",
      submittedDateTime: "10/23/2024",
      barcode: "1234567890",
    },
    {
      id: 3,
      type: "OP",
      mrNo: "123",
      visitDate: "10/23/2024",
      patientName: "Abdul",
      doctor: "Riyaz",
      sampleType: "Blood",
      testName: "CBC",
      submittedDateTime: "10/23/2024",
      barcode: "12345654",
    },
  ];

  const handleShowBarcode = (barcode) => {
    setSelectedBarcode(barcode);
    setShowBarcode(true);
  };
  const handleShowOrderSheet = (barcode) => {
    setSelectedBarcode(barcode);
    setShowOrdersheet(true);
  };
  const details = [
    "2024-10-23 10:26",
    "ADOLFO AYCART, 05-02-1963 / 61 y 9 m / M",
    "Blood Culture Tube Aerobic/2429700101",
    "OCH438626 / VITEK 2",
  ];
  const handleOptionsShow = (row) => {
    return (
      <Box display={"flex"} gap={3} justifyContent={"center"}>
        <IconButton onClick={() => handleShowBarcode(row.barcode)}>
          <BarcodeOutlined />
        </IconButton>
        <IconButton onClick={() => handleShowOrderSheet(row.barcode)}>
          <DocumentScannerOutlined fontSize="small" />
        </IconButton>
      </Box>
    );
  };

  const handleOptionClick = () => {
    return (
      <IconButton onClick={handleDialogOpen}>
        <AssignmentTurnedIn fontSize="small" />
      </IconButton>
    );
  };

  return (
    <div>
      <LabTable
        columns={columns}
        rows={rows}
        onOptionsShow={handleOptionsShow}
        onOptionClick={handleOptionClick}
      />
      {dialogOpen && (
        <Dialog open={true} fullWidth onClose={handleDialogClose}>
          <DialogContent>
            <h6 className="mb-3">Sample Acknowledge Detail</h6>
            <LabInput label={"Received Date and Time"} type="datetime-local" />
            <LabInput label={"Comments"} />
            <Box className="btnAlign">
              <LabButton
                label={"Receive Sample"}
                onClick={() => setActiveTab("3")}
              />
              <LabButton label={"Close"} onClick={handleDialogClose} />
            </Box>
          </DialogContent>
        </Dialog>
      )}
      <BarcodeGenerate
        // open={showBarcode}
        value={selectedBarcode}
        onPrintComplete={() => console.log("Print completed!")}
        details={details}
      />
      <OrderSheet
        value={selectedBarcode}
        open={showOrdersheet}
        onClose={() => setShowOrdersheet(false)}
      />
    </div>
  );
};

export default SubmittedSampleTbl;
