import React from "react";
import RejectSamplesSearch from "./RejectSamplesSearch";
import RejectSaplesTbl from "./RejectSaplesTbl";

const DisplayRejectSamples = () => {
  return (
    <div className="m-4">
      <div className="headerContainer">
        <div className="h6">Rejected Samples</div>
        <div className="">FRIDAY,FEBRUARY 3,2023 10:20AM</div>
      </div>
      <RejectSamplesSearch />
      <RejectSaplesTbl />
    </div>
  );
};

export default DisplayRejectSamples;
