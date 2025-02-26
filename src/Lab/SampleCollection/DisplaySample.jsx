import React from "react";
import SampleCollectionSearch from "./SampleCollectionSearch";
import SampleCollectionTbl from "./SampleCollectionTbl";

const DisplaySample = ({ setActiveTab }) => {
  return (
    <div className="m-4">
      <div className="headerContainer">
        <div className="h6">Sample collection : Search Patient </div>
        <div className="">FRIDAY,FEBRUARY 3,2023 10:20AM</div>
      </div>
      <SampleCollectionSearch />
      <SampleCollectionTbl setActiveTab={setActiveTab} />
    </div>
  );
};

export default DisplaySample;
