import React from 'react'
import { TestResultSearch } from './TestResultSearch'
import TestResultTbl from './TestResultTbl'

const DisplayTestResult = () => {
  return (
    <div className="m-4">
    <div className="headerContainer">
      <div className="h6">Test Result</div>
      <div className="">FRIDAY,FEBRUARY 3,2023 10:20AM</div>
    </div>
    <TestResultSearch/>
    <TestResultTbl/>
  </div>
  )
}

export default DisplayTestResult