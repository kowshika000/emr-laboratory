import React from "react";
import LabTable from "../../components/LabTable";
import { Preview } from "@mui/icons-material";

const RejectSaplesTbl = () => {
  const columns = [
    { field: "mrNo", headerName: "MR No" },
    { field: "date", headerName: "Date" },
    { field: "patientName", headerName: "Patient Name" },
    { field: "doctor", headerName: "Doctor" },
    { field: "option", headerName: "Option" },
  ];

  const rows = [
    {
      id: 1,
      mrNo: "MR002",
      date: "",
      patientName: "Abdul",
      doctor: "Riyaz",
    },
  ];

  const handleOptionClick = (row) => {
    return (
      <div>
        <Preview />
      </div>
    );
  };

  return (
    <div>
      <LabTable
        columns={columns}
        rows={rows}
        onOptionClick={handleOptionClick}
        checkBox={true}
      />
    </div>
  );
};

export default RejectSaplesTbl;
