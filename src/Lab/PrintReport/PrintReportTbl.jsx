import React from "react";
import LabTable from "../../components/LabTable";
import { Email, Print } from "@mui/icons-material";

const PrintReportTbl = () => {
  const columns = [
    {
      field: "options",
      headerName: "Options",
    },
    {
      field: "mrNo",
      headerName: "MR No",
    },
    {
      field: "date",
      headerName: "Date",
    },
    {
      field: "patientName",
      headerName: "Patient Name",
    },
    {
      field: "referDoctor",
      headerName: "Refer Doctor",
    },
    {
      field: "labIdNo",
      headerName: "Lab ID NO",
    },
    {
      field: "labTestName",
      headerName: "Lab Test Name",
    },
    {
      field: "printed",
      headerName: "Printed",
    },
    {
      field: "emailed",
      headerName: "Emailed",
    },
  ];
  const rows = [
    {
      id: 1,
      mrNo: "MR001",
      date: "12/20/24",
      patientName: "Abdul",
      referDoctor: "Riyaz",
      labIdNo: "34352001",
      labTestName: "CBC",
      printed: "No",
      emailed: "No",
    },
  ];
  const handleOptionsShow = (row) => {
    return (
      <div className="btnAlign">
        <Email />
        <Print />
      </div>
    );
  };
  return (
    <div>
      <LabTable
        columns={columns}
        rows={rows}
        checkBox={true}
        onOptionsShow={handleOptionsShow}
      />
    </div>
  );
};

export default PrintReportTbl;
