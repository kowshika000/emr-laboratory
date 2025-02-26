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

const { TabPane } = Tabs;

const HeaderTabs = () => {
  const [activeTab, setActiveTab] = useState("0");

  const handleTabChange = (key) => {
    setActiveTab(key);
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
    <div
      className="p-3"
      style={{ width: "100%", height: "100%", overflow: "auto" }}
    >
      <Tabs activeKey={activeTab} onChange={handleTabChange} type="card">
        <TabPane tab="Lab Order Dashboard" key="0" />
        <TabPane tab="Sample Collection" key="1" />
        <TabPane tab="Submitted Samples" key="2" />
        <TabPane tab="Accession" key="3" />
        <TabPane tab="Test Result" key="4" />
        <TabPane tab="Authenticate/Approval" key="5" />
        <TabPane tab="Print Report" key="6" />
        <TabPane tab="Rejected Samples" key="7" />
        <TabPane tab="TAT" key="8" />
        <TabPane tab="Consumption" key="9" />
      </Tabs>

      <div>{tabComponents[activeTab]}</div>
    </div>
  );
};

export default HeaderTabs;
