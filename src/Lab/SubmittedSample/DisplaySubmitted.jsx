import React from "react";
import SubmittedSampleSearch from "./SubmittedSampleSearch";
import SubmittedSampleTbl from "./SubmittedSampleTbl";

const DisplaySubmitted = ({ setActiveTab }) => {
  return (
    <div className="m-4">
      <div className="headerContainer">
        <div className="h6">Sample collection : Search Patient </div>
        <div className="">FRIDAY,FEBRUARY 3,2023 10:20AM</div>
      </div>
      <SubmittedSampleSearch />
      <SubmittedSampleTbl setActiveTab={setActiveTab} />
    </div>
  );
};

export default DisplaySubmitted;
