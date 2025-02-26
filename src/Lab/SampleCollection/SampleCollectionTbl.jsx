import React, { useState } from "react";
import LabTable from "../../components/LabTable";
import CollectionScreen from "./CollectionScreen";

const SampleCollectionTbl = ({ setActiveTab }) => {
  const [showSample, setShowSample] = useState(false);
  const columns = [
    { field: "slNo", headerName: "Sl No", width: 80 },
    { field: "type", headerName: "Type", width: 100 },
    { field: "mrNo", headerName: "MR No", width: 100 },
    { field: "visitDate", headerName: "Visit Date", width: 150 },
    { field: "patientName", headerName: "Patient Name", width: 150 },
    { field: "doctor", headerName: "Doctor", width: 100 },
    { field: "insurance", headerName: "Insurance", width: 120 },
    { field: "sampleType", headerName: "Sample Type", width: 130 },
    { field: "testName", headerName: "Test Name", width: 130 },
    { field: "orderDateTime", headerName: "Order date and Time", width: 180 },
  ];
  const rows = [
    {
      id: 1,
      slNo: 1,
      type: "OP",
      mrNo: "MR002",
      visitDate: "10/23/2024",
      patientName: "Abdul",
      doctor: "Riyaz",
      insurance: "",
      sampleType: "Blood",
      testName: "CBC",
      orderDateTime: "10/23/2024",
    },
    {
      id: 2,
      slNo: 2,
      type: "OP",
      mrNo: "MR002",
      visitDate: "10/23/2024",
      patientName: "john",
      doctor: "Riyaz",
      insurance: "",
      sampleType: "Blood",
      testName: "CBC",
      orderDateTime: "10/23/2024",
    },
    {
      id: 3,
      slNo: 3,
      type: "OP",
      mrNo: "MR002",
      visitDate: "10/23/2024",
      patientName: "xxx",
      doctor: "Riyaz",
      insurance: "",
      sampleType: "Blood",
      testName: "CBC",
      orderDateTime: "10/23/2024",
    },
  ];

  const handlePetientNameShow = (row) => {
    return (
      <div
        style={{
          color: "rgb(182, 94, 43)",
          cursor: "pointer",
          fontWeight: 600,
          textTransform: "uppercase",
        }}
        onClick={() => setShowSample(true)}
      >
        {row.patientName}
      </div>
    );
  };
  return (
    <div>
      <LabTable
        columns={columns}
        rows={rows}
        onPatientNameClick={handlePetientNameShow}
      />
      {showSample && (
        <CollectionScreen
          onClose={() => setShowSample(false)}
          setActiveTab={setActiveTab}
        />
      )}
    </div>
  );
};

export default SampleCollectionTbl;
