import React from 'react'
import ConsumptionSearch from './ConsumptionSearch'
import ConsumptionTbl from './ConsumptionTbl'

const DisplayConsumption = () => {
  return (
    <div className="m-4">
    <div className="headerContainer">
      <div className="h6">Investigation Results: TAT</div>
      <div className="">FRIDAY,FEBRUARY 3,2023 10:20AM</div>
    </div>
      <ConsumptionSearch/>
      <ConsumptionTbl/>
  </div>
  )
}

export default DisplayConsumption