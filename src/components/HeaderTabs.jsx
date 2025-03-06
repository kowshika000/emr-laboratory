import React, { useState } from "react";
import { Tabs } from "antd";
import DisplayLabOrder from "../Lab/LabOrderDashboard/DisplayLabOrder";
import DisplaySample from "../Lab/SampleCollection/DisplaySample";
import DisplaySubmitted from "../Lab/SubmittedSample/DisplaySubmitted";
import DisplayAccession from "../Lab/Accession/DisplayAccession";
import DisplayTestResult from "../Lab/TestResult/DisplayTestResult";
import DisplayAuthApproval from "../Lab/AuthApproval/DisplayAuthApproval";
import DisplayPrintReport from "../Lab/PrintReport/DisplayPrintReport";
import DisplayRejectSamples from "../Lab/RejectSamples/DisplayRejectSamples";
import DisplayTAT from "../Lab/TAT/DisplayTAT";
import DisplayConsumption from "../Lab/Consumption/DisplayConsumption";

const HeaderTabs = () => {
  const [activeTab, setActiveTab] = useState("0"); // Ensure it's a string

  const handleTabChange = (key) => {
    setActiveTab(String(key)); // Ensure it stays a string
  };

  const tabComponents = {
    0: <DisplayLabOrder />,
    1: <DisplaySample setActiveTab={setActiveTab} />,
    2: <DisplaySubmitted setActiveTab={setActiveTab} />,
    3: <DisplayAccession setActiveTab={setActiveTab} />,
    4: <DisplayTestResult />,
    5: <DisplayAuthApproval />,
    6: <DisplayPrintReport />,
    7: <DisplayRejectSamples />,
    8: <DisplayTAT />,
    9: <DisplayConsumption />,
  };

  return (
    <div className="p-3" style={{ width: "100%", height: "100%", overflow: "auto" }}>
      <Tabs activeKey={activeTab} onChange={handleTabChange} type="card">
        <Tabs.TabPane tab="Lab Order Dashboard" key="0" />
        <Tabs.TabPane tab="Sample Collection" key="1" />
        <Tabs.TabPane tab="Submitted Samples" key="2" />
        <Tabs.TabPane tab="Accession" key="3" />
        <Tabs.TabPane tab="Test Result" key="4" />
        <Tabs.TabPane tab="Authenticate/Approval" key="5" />
        <Tabs.TabPane tab="Print Report" key="6" />
        <Tabs.TabPane tab="Rejected Samples" key="7" />
        <Tabs.TabPane tab="TAT" key="8" />
        <Tabs.TabPane tab="Consumption" key="9" />
      </Tabs>

      <div>
        {(() => {
          try {
            return tabComponents[Number(activeTab)] || <p>Loading...</p>;
          } catch (error) {
            console.error("Error rendering tab:", error);
            return <p>Something went wrong</p>;
          }
        })()}
      </div>
    </div>
  );
};

export default HeaderTabs;
