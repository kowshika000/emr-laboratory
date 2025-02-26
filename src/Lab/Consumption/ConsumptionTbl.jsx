import React from "react";
import LabTable from "../../components/LabTable";

const ConsumptionTbl = () => {
  const columns = [
    { field: "labTestName", headerName: "Lab Test Name" },
    { field: "totalCount", headerName: "Total Count" },
    { field: "barcode", headerName: "Barcode" },
    { field: "reagentName", headerName: "Reagent Name" },
    { field: "usagePerTest", headerName: "Usage Per Test" },
    { field: "totalUsageMeasure", headerName: "Total Usage (Measure)" },
    { field: "totalUsageQuantity", headerName: "Total Usage (Quantity)" },
  ];

  const rows = [
    {
      id: 1,
      labTestName: "Test 1",
      totalCount: 100,
      barcode: "123456789",
      reagentName: "Reagent A",
      usagePerTest: 5,
      totalUsageMeasure: "50 ml",
      totalUsageQuantity: 500,
    },
    {
      id: 2,
      labTestName: "Test 2",
      totalCount: 200,
      barcode: "987654321",
      reagentName: "Reagent B",
      usagePerTest: 3,
      totalUsageMeasure: "30 ml",
      totalUsageQuantity: 600,
    },
    {
      id: 3,
      labTestName: "Test 3",
      totalCount: 50,
      barcode: "112233445",
      reagentName: "Reagent C",
      usagePerTest: 10,
      totalUsageMeasure: "100 ml",
      totalUsageQuantity: 500,
    },
  ];

  return (
    <div>
      <LabTable columns={columns} rows={rows} checkBox={true} />
    </div>
  );
};

export default ConsumptionTbl;
