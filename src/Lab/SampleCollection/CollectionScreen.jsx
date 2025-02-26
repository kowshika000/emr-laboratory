import React, { useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import LabInput from "../../components/LabInput";
import LabTable from "../../components/LabTable";
import LabButton from "../../components/LabButton";

const CollectionScreen = ({ onClose, setActiveTab }) => {
  const [addNote, setAddNote] = useState(false);
  const [note, setNote] = useState({ laboratoryNotes: "" });
  const [items, setItems] = useState([]);

  const patientData = [
    { label: "MRD Number", value: "DOC124563" },
    { label: "Patient Name", value: "John" },
    { label: "Age", value: "30" },
    { label: "Gender", value: "Male" },
    { label: "Nationality", value: "---" },
    { label: "Mobile No", value: "1234567890" },
    { label: "Email Id", value: "---" },
    { label: "Clinic file No", value: "---" },
    { label: "Patient Type", value: "---" },
    { label: "Lab No", value: "---" },
  ];

  const consultationData = [
    { label: "Referred by", value: "---" },
    { label: "Doctor", value: "Madhan" },
    { label: "Insurar", value: "xxx" },
    { label: "Speciality", value: "xxx" },
    { label: "Sub Insurar", value: "---" },
    { label: "Consultation date", value: "ddd" },
    { label: "Consultation Fee", value: "---" },
    { label: "Network Type", value: "---" },
    { label: "Card No", value: "---" },
    { label: "Expiry date", value: "---" },
    { label: "Deductible", value: "---" },
    { label: "Co Insurance", value: "---" },
    { label: "Amount Paid", value: "---" },
    { label: "Balance due", value: "---" },
  ];

  const renderDetails = (data) => (
    <Paper
      elevation={3}
      sx={{
        padding: "16px",
        backgroundColor: "#f9f9f9",
        borderRadius: "8px",
        marginBottom: "16px",
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "16px",
        }}
      >
        {data.map((item, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              gap: "16px",
              justifyContent: "space-between",
            }}
          >
            <Typography
              variant="caption"
              color="text.secondary"
              sx={{ fontSize: "14px", fontWeight: "bold" }}
            >
              {item.label}
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontSize: "14px", color: "#333", fontWeight: "400" }}
            >
              {item.value}
            </Typography>
          </Box>
        ))}
      </Box>
    </Paper>
  );
  const columns = [
    {
      field: "sno",
      headerName: "S No",
      valueGetter: (params) =>
        items.findIndex((item) => item.id === params.row.id) + 1,
    },
    { field: "laboratoryNotes", headerName: "Laboratory Notes" },
    {
      field: "enteredBy",
      headerName: "Entered By",
      valueGetter: () => "Admin",
    },
    {
      field: "enteredDate",
      headerName: "Entered Date",
      valueGetter: () => new Date().toLocaleDateString(),
    },
  ];

  const columnLabRad = [
    { field: "sno", headerName: "S No" },
    { field: "barcodeNo", headerName: "Barcode No" },
    { field: "labCode", headerName: "Lab Code" },
    { field: "testName", headerName: "Lab Test Name" },
    { field: "insurance", headerName: "Insurance" },
    { field: "preApproval", headerName: "Pre App" },
    { field: "price", headerName: "Price" },
    { field: "coPay", headerName: "CoPay" },
    { field: "deductible", headerName: "Deductible" },
    { field: "sampleRejection", headerName: "Sample Rejection" },
    { field: "remarks", headerName: "Remarks" },
  ];
  const rows = [
    {
      id: 1,
      sno: 1,
      barcodeNo: "B12345",
      labCode: "L001",
      testName: "Blood Test",
      insurance: "Yes",
      preApproval: "Approved",
      price: 200,
      coPay: 50,
      deductible: 20,
      sampleRejection: "No",
      remarks: "Normal",
    },
    {
      id: 2,
      sno: 2,
      barcodeNo: "B12346",
      labCode: "L002",
      testName: "X-Ray",
      insurance: "No",
      preApproval: "Pending",
      price: 500,
      coPay: 100,
      deductible: 50,
      sampleRejection: "No",
      remarks: "Follow-up required",
    },
    {
      id: 3,
      sno: 3,
      barcodeNo: "B12347",
      labCode: "L003",
      testName: "MRI",
      insurance: "Yes",
      preApproval: "Approved",
      price: 1500,
      coPay: 300,
      deductible: 200,
      sampleRejection: "No",
      remarks: "Urgent",
    },
  ];

  const handleSubmit = () => {
    setItems([
      ...items,
      {
        sno: items.length + 1,
        laboratoryNotes: note.laboratoryNotes,
        enteredBy: "Admin",
        enteredDate: new Date().toLocaleDateString(),
      },
    ]);
    setAddNote(false);
    setNote({ laboratoryNotes: "" });
  };

  return (
    <Dialog open fullScreen onClose={onClose}>
      <DialogTitle sx={{ padding: "10px" }}>
        <h6>Sample Collection Screen</h6>
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Box
          sx={{
            // padding: "20px",
            // backgroundColor: "teal",
            // color:"white",
            display: "flex",
            gap: "16px",
          }}
        >
          <div className="w-50">
            <h6 className="mb-3">Patient Demographics</h6>
            {renderDetails(patientData)}
          </div>
          <div className="w-75">
            <h6 className="mb-3">Consultation</h6>
            {renderDetails(consultationData)}
          </div>
        </Box>
        <h6 className="my-3">Diagnosis</h6>
        <Box className="headerContainer">
          <Box>Laboratory Notes</Box>
          <Button
            sx={{ color: "rgb(25, 131, 131)" }}
            onClick={() => setAddNote(true)}
          >
            Add +{" "}
          </Button>
        </Box>
        <Box>
          {addNote ? (
            <Box
              className="formContainer "
              sx={{ justifyContent: "space-between" }}
            >
              <Box width={"75%"}>
                <LabInput
                  type="textarea"
                  label={"Laboratory Notes"}
                  value={note.laboratoryNotes}
                  onChange={(e) => setNote({ laboratoryNotes: e.target.value })}
                />
              </Box>
              {/* <Box mt={"auto"}> */}
              <LabButton label={"Submit"} onClick={handleSubmit} />
              {/* </Box> */}
            </Box>
          ) : items.length > 0 ? (
            <LabTable rows={items} columns={columns} />
          ) : (
            ""
          )}
        </Box>
        <h6 className="my-3">Lab/Radiology </h6>
        <Box sx={{ overflowX: "auto" }}>
          <LabTable
            rows={rows}
            columns={columnLabRad}
            checkBox={true}
            isInput={true}
          />
        </Box>
        <Box className="btnAlign">
          <LabButton
            label={"Collect Sample"}
            onClick={() => setActiveTab("2")}
          />
          <LabButton label={"Close"} />
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default CollectionScreen;
