import React from "react";
import {
  Box,
  Dialog,
  DialogContent,
  Typography,
  IconButton,
} from "@mui/material";
import GetAppIcon from "@mui/icons-material/GetApp";
import { Table } from "antd";
import html2pdf from "html2pdf.js";

const PreviewDetails = ({ onClose }) => {
  const sheetDetails = [
    { label: "File No", value: "DOC124563" },
    { label: "Order No", value: "3127" },
    { label: "Patient Name", value: "John" },
    { label: "Requested On", value: "23/2/24 10:16" },
    { label: "Age/Gender", value: "55/Male" },
    { label: "Printed Date & Time", value: "23/2/24 10:16" },
    { label: "Nationality", value: "Spain" },
    { label: "Doctor", value: "Walid" },
    { label: "Insurance", value: "---" },
  ];

  const renderDetails = (data) => (
    <Box
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
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
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
    </Box>
  );

  const columns = [
    {
      title: "Lab Test Name",
      dataIndex: "labTestName",
      key: "labTestName",
    },
    {
      title: "Test Result",
      dataIndex: "testResult",
      key: "testResult",
    },
    {
      title: "Units",
      dataIndex: "units",
      key: "units",
    },
    {
      title: "Reference Range",
      dataIndex: "referenceRange",
      key: "referenceRange",
    },
  ];

  const data = [
    {
      key: "1",
      labTestName: "White blood cell count (WBC)",
      testResult: "45.00 H",
      units: "x10^3/uL",
      referenceRange: "4 - 10",
    },
    {
      key: "2",
      labTestName: "Red blood cell count (RBC)",
      testResult: "35.00 H",
      units: "x10^6/uL",
      referenceRange: "4.8 - 5.5",
    },
    {
      key: "3",
      labTestName: "Platelet count",
      testResult: "150.00 H",
      units: "x10^3/uL",
      referenceRange: "150 - 400",
    },
    {
      key: "4",
      labTestName: "Hemoglobin (Hb)",
      testResult: "14.0 H",
      units: "g/dL",
      referenceRange: "12 - 16",
    },
    {
      key: "5",
      labTestName: "Hematocrit (Hct)",
      testResult: "40.5 H",
      units: "%",
      referenceRange: "36 - 50",
    },
  ];

  const downloadPDF = () => {
    const element = document.getElementById("report-content");
    const downloadIcon = document.getElementById("download-icon");
  
    // Temporarily hide the download icon
    if (downloadIcon) {
      downloadIcon.style.display = "none";
    }
  
    const options = {
      margin: 1,
      filename: "Lab_Report.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };
  
    html2pdf()
      .set(options)
      .from(element)
      .save()
      .finally(() => {
        // Restore the download icon's visibility after generating the PDF
        if (downloadIcon) {
          downloadIcon.style.display = "block";
        }
      });
  };

  return (
    <Dialog open={true} fullWidth onClose={onClose} maxWidth="lg">
      <DialogContent id="report-content">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "16px",
          }}
        >
          <h5 className="text-center">Lab Report Preview</h5>
          <IconButton id="download-icon" onClick={downloadPDF} sx={{ padding: "10px" }}>
            <GetAppIcon fontSize="large" />
          </IconButton>
        </Box>
        <Box
          sx={{
            borderTop: "2px solid silver",
            borderBottom: "2px solid silver",
          }}
        >
          {renderDetails(sheetDetails)}
        </Box>

        <Box mt={2}>
          <h6>Haematology</h6>
          <Table columns={columns} dataSource={data} pagination={false} />
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default PreviewDetails;
