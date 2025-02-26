import React from "react";
import TATtbl from "./TATtbl";
import TATsearch from "./TATsearch";

const DisplayTAT = () => {
  return (
    <div className="m-4">
      <div className="headerContainer">
        <div className="h6">Investigation Results: TAT</div>
        <div className="">FRIDAY,FEBRUARY 3,2023 10:20AM</div>
      </div>
      <TATsearch/>
      <TATtbl />
    </div>
  );
};

export default DisplayTAT;
