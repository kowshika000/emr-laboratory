import React from "react";
import AccessionSearch from "./AccessionSearch";
import AccessionTbl from "./AccessionTbl";

const DisplayAccession = ({ setActiveTab }) => {
  return (
    <div className="m-4">
      <div className="headerContainer">
        <div className="h6">Sample collection : Search Patient </div>
        <div className="">FRIDAY,FEBRUARY 3,2023 10:20AM</div>
      </div>
      <AccessionSearch />
      <AccessionTbl setActiveTab={setActiveTab} />
    </div>
  );
};

export default DisplayAccession;
