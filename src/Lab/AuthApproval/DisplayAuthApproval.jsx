import React from 'react'
import AuthApprovalSearch from './AuthApprovalSearch'
import AuthApprovalTbl from './AuthApprovalTbl'

const DisplayAuthApproval = () => {
  return (
    <div className="m-4">
      <div className="headerContainer">
        <div className="h6">Investigation result Authentication</div>
        <div className="">FRIDAY,FEBRUARY 3,2023 10:20AM</div>
      </div>
      <AuthApprovalSearch/>
      <AuthApprovalTbl/>
    </div>
  )
}

export default DisplayAuthApproval