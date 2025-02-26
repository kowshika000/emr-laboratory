import React from "react";
import PrintReportSearch from "./PrintReportSearch";
import PrintReportTbl from "./PrintReportTbl";

const DisplayPrintReport = () => {
  return (
    <div className="m-4">
      <div className="headerContainer">
        <div className="h6">Investigation Results: TAT</div>
        <div className="">FRIDAY,FEBRUARY 3,2023 10:20AM</div>
      </div>
      <PrintReportSearch />
      <PrintReportTbl />
    </div>
  );
};

export default DisplayPrintReport;
