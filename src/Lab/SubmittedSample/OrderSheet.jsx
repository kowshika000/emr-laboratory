import { Box, Dialog, DialogContent, Typography } from "@mui/material";
import { Table } from "antd";
import JsBarcode from "jsbarcode";
import React, { useEffect, useRef } from "react";

const OrderSheet = ({ open, onClose, value }) => {
  const barcodeRef = useRef(null);

  useEffect(() => {
    if (open && value) {
      setTimeout(() => {
        if (barcodeRef.current) {
          barcodeRef.current.innerHTML = "";
          JsBarcode(barcodeRef.current, value, {
            format: "CODE128",
            lineColor: "#000",
            width: 2,
            height: 40,
            displayValue: false,
          });
        }
      }, 100);
    }
  }, [value, open]);

  const sheetDetails = [
    { label: "File No", value: "DOC124563" },
    { label: "Visit Id", value: "3127" },
    { label: "Patient Name", value: "John" },
    { label: "Order Date", value: "23/2/24 10:16" },
    { label: "Order By", value: "Tanjer Testing Team 2" },
    { label: "Is Billed", value: "Not Billed" },
    { label: "Department", value: "Cardiology" },
    { label: "MOM", value: "---" },
    { label: "Mobile No", value: "00091234504" },
    { label: "Age/Sex", value: "55/Male" },
    { label: "Nationality", value: "Spain" },
    { label: "DOB", value: "05/3/1975" },
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
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Qty",
      dataIndex: "qty",
      key: "qty",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
        title: "Lad Code",
        dataIndex: "ladCode",
        key: "ladCode",
      },
      {
        title: "Insured",
        dataIndex: "insured",
        key: "insured",
      },
  ];

  const data = [
    {
      key: '1',
      description: 'Laptop - Dell XPS 15',
      qty: 5,
      date: '2024-12-01',
      ladCode: 'LD12345',
      insured: 'Yes',
    },
    {
      key: '2',
      description: 'Mobile - iPhone 14',
      qty: 10,
      date: '2024-12-05',
      ladCode: 'LD67890',
      insured: 'No',
    }
  ];
  
  return (
    <Dialog open={open} fullWidth onClose={onClose} maxWidth="lg">
      <DialogContent>
        <h5 className="text-center">OP ORDER SHEET</h5>
        <Box
          sx={{
            borderTop: "2px solid silver",
            borderBottom: "2px solid silver",
          }}
        >
          <svg ref={barcodeRef}></svg>
          {renderDetails(sheetDetails)}
        </Box>
        <Box mt={2}>
            <h6>Diagnosis</h6>
          <Table columns={columns} dataSource={data} pagination={false} />
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default OrderSheet;
