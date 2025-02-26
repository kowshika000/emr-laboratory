import React from "react";
import LabTable from "../../components/LabTable";

const TATtbl = () => {
  const columns = [
    { field: "mrNo", headerName: "MR No" },
    { field: "patientName", headerName: "Patient Name" },
    { field: "date", headerName: "Date" },
    { field: "referClinicDoctor", headerName: "Refer Clinic/Doctor" },
    { field: "sid", headerName: "SID" },
    { field: "testName", headerName: "Test Name" },
    { field: "tat", headerName: "TAT" },
    { field: "status", headerName: "Status" },
  ];

  const rows = [
    {
      id: 1,
      mrNo: "MR002",
      date: "",
      patientName: "Abdul",
      referClinicDoctor: "Riyaz",
      sid: "34567732",
      tat: "Sample collection",
      //    "Sample Received, Accession, Authentication",
      status: "Dispatched",
      testName: "CBC",
    },
  ];
  return (
    <div>
      <LabTable columns={columns} rows={rows} />
    </div>
  );
};

export default TATtbl;
