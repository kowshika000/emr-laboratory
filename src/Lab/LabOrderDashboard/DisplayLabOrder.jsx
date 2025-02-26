import React from "react";
import OrderStatus from "./OrderStatus";
import OrderTable from "./OrderTable";

const DisplayLabOrder = () => {
  return (
    <div className="m-4">
      <div className="headerContainer">
        <div className="h6">Lab Order Status</div>
        <div className="">FRIDAY,FEBRUARY 3,2023 10:20AM</div>
      </div>
      <OrderStatus />
      <OrderTable />
    </div>
  );
};

export default DisplayLabOrder;
